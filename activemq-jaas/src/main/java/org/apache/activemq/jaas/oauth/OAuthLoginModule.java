/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.apache.activemq.jaas.oauth;

import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.UnsupportedCallbackException;
import javax.security.auth.login.FailedLoginException;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

import org.apache.activemq.jaas.GroupPrincipal;
import org.apache.activemq.jaas.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OAuthLoginModule implements LoginModule {
    private static final Logger LOG = LoggerFactory.getLogger(OAuthLoginModule.class);

    // Shared across Login Modules
    private Subject subject;
    private CallbackHandler callbackHandler;

    // Obtained from the OAuthAuthenticator
    private boolean loginSucceeded = false;
    private Set<GroupPrincipal> groups = new HashSet<>();
    private UserPrincipal userPrincipal;

    // Dependencies
    private JWKProvider keyProvider;
    private OAuthAuthenticator authenticator;

    @Override
    public void initialize(Subject subject, CallbackHandler callbackHandler, Map<String, ?> sharedState, Map<String, ?> options) {
        this.subject = subject;
        this.callbackHandler = callbackHandler;

        // Setup configurations

        final String issuer = (String) options.get("issuer");
        final String audience = (String) options.get("audience");
        final URI jwksUri = getJwksUri( (String) options.get("jwks_uri"), issuer);

        LOG.info("Initializing plugin with issuer='{}', audience='{}', jwksUri='{}'", issuer, audience, jwksUri);

        // TODO(lemoss@): better handle null configurations

        keyProvider = new InMemoryJWKCachedProvider(jwksUri);
        authenticator = new OAuthAuthenticatorImpl(keyProvider, issuer, audience);
    }

    private URI getJwksUri(final String configuration, final String issuer) {
        try {
            final boolean hasJwksConfiguration = (configuration != null && !configuration.isBlank());
            if (hasJwksConfiguration) {
                return new URI(configuration);
            }
            final URI issuerUrl = new URI(issuer);
            return issuerUrl.resolve(new URI(".well-known/jwks.json"));
        } catch (URISyntaxException uriEx) {
            // TODO(lemoss@): handle malformed URLs
            throw new RuntimeException(uriEx);
        }
    }

    @Override
    public boolean login() throws LoginException {
        LOG.info("login()");

        final NameCallback usernameCallback = new NameCallback("username:");
        final PasswordCallback passwordCallback = new PasswordCallback("password:", false);

        try {
            callbackHandler.handle(new Callback[] {usernameCallback, passwordCallback});
        } catch (IOException | UnsupportedCallbackException e) {
            throw new LoginException("Error handling callbacks: " + e.getMessage());
        }

        final String token = new String(passwordCallback.getPassword());
        if (token.isBlank()) {
            throw new FailedLoginException("No OAuth token provided");
        }

        LOG.info("login(): token is '{}'", token);

        final AuthenticationResult result = authenticator.authenticate(token);
        LOG.info("Token successfully authenticated: {}", result);
        loginSucceeded = true;
        return true;
    }

    @Override
    public boolean commit() throws LoginException {
        if (!loginSucceeded) {
            return false;
        }

        if (userPrincipal != null) {
            subject.getPrincipals().add(userPrincipal);
        }
        subject.getPrincipals().addAll(groups);
        return true;
    }

    @Override
    public boolean abort() throws LoginException {
        clear();
        return true;
    }

    @Override
    public boolean logout() throws LoginException {
        clear();
        return true;
    }

    private void clear() {
        loginSucceeded = false;
        userPrincipal = null;
        groups.clear();
    }

//    private void extractUserAndGroups(JWTClaimsSet claims) {
//        // Extract user principal
//        String sub = claims.getSubject();
//
//        if (sub != null && !sub.isEmpty()) {
//            userPrincipal = new UserPrincipal(sub);
//        } else if (username != null && !username.isEmpty()) {
//            userPrincipal = new UserPrincipal(username);
//        } else {
//            userPrincipal = new UserPrincipal("");
//        }
//
//        // Extract groups from scope
//        try {
//            String scopeStr = claims.getStringClaim("scope");
//            if (scopeStr != null) {
//                String[] scopes = scopeStr.split("\\s+");
//
//                for (String scope : scopes) {
//                    String groupsStr = getScopeGroups(scope);
//                    if (groupsStr != null) {
//                        String[] groupNames = groupsStr.split(",");
//                        for (String groupName : groupNames) {
//                            groups.add(new GroupPrincipal(groupName.trim()));
//                        }
//                    }
//                }
//            }
//        } catch (Exception e) {
//            LOG.debug("Error extracting scope claim", e);
//        }
//    }
}
