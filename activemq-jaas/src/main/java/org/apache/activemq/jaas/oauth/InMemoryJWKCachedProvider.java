package org.apache.activemq.jaas.oauth;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.jwk.JWKSet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.interfaces.RSAPublicKey;
import java.text.ParseException;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class InMemoryJWKCachedProvider implements JWKProvider {

    private static final Logger LOG = LoggerFactory.getLogger(InMemoryJWKCachedProvider.class);

    private final URI jwksUri;
    private final Map<String, RSAPublicKey> knownKeys = new HashMap<>();

    public InMemoryJWKCachedProvider(final URI jwksUri) {
        this.jwksUri = jwksUri;
    }

    @Override
    public Optional<RSAPublicKey> getKey(String kid) {
        final RSAPublicKey publicKey = knownKeys.get(kid);
        if (publicKey != null) {
            return Optional.of(publicKey);
        }

        LOG.info("Key ID {} not found in the local cache, will download the JWKS document from {}", kid, jwksUri);
        loadKeys();

        return Optional.ofNullable(knownKeys.get(kid));
    }

    private void loadKeys() {
        try {
            final String response = getJwksResponse();
            LOG.info("Got JWKS '{}'", response);

            final JWKSet jwkSet = JWKSet.parse(response);
            jwkSet.getKeys().forEach(key -> {
                try {
                    knownKeys.put(key.getKeyID(), key.toRSAKey().toRSAPublicKey());
                } catch (JOSEException joseEx) {
                    LOG.error("Failed to parse the an RSA key: {}", joseEx.getMessage());
                }
            });
        } catch (IOException | InterruptedException ex) {
            LOG.error("Failed to get the JWKS from '{}': {}", jwksUri, ex.getMessage());
        } catch (ParseException parseEx) {
            LOG.error("Failed to parse the JWKS from '{}': {}", jwksUri, parseEx.getMessage());
        }
    }

    private String getJwksResponse() throws IOException, InterruptedException {
        final HttpClient httpClient = HttpClient
                .newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        final HttpRequest request = HttpRequest.newBuilder()
                .uri(jwksUri)
                .timeout(Duration.ofSeconds(10))
                .build();

        LOG.info("Downloading JWKS from '{}'", jwksUri);

        final HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IOException(String.format(
                    "Failed to fetch JWKS from '%s'. Got status code: %d",
                    jwksUri,
                    response.statusCode()));
        }

        return response.body();
    }
}
