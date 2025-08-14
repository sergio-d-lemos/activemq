package org.apache.activemq.jaas.oauth;

import javax.security.auth.login.CredentialExpiredException;
import javax.security.auth.login.FailedLoginException;

public interface OAuthAuthenticator {
    AuthenticationResult authenticate(String token) throws FailedLoginException, CredentialExpiredException;
}
