package org.apache.activemq.jaas.oauth;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.PublicKey;
import java.text.ParseException;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class InMemoryJWKCachedProvider implements JWKProvider {

    // TODO: This class should be thread safe

    private static final Logger LOG = LoggerFactory.getLogger(InMemoryJWKCachedProvider.class);

    private final URI jwksUri;
    private final Map<String, PublicKey> knownKeys = new HashMap<>();

    public InMemoryJWKCachedProvider(final URI jwksUri) {
        this.jwksUri = jwksUri;
    }

    @Override
    public Optional<PublicKey> getKey(String kid) {
        final PublicKey publicKey = knownKeys.get(kid);
        if (publicKey != null) {
            return Optional.of(publicKey);
        }

        LOG.info("Key ID {} not found in the local cache, will download the JWKS document from {}", kid, jwksUri);
        loadKeys();

        return Optional.ofNullable(knownKeys.get(kid));
    }

    private void loadKeys() {
        try {
            final String response = downloadJwksDocument();
            LOG.info("Got JWKS '{}'", response);

            JWKSet.parse(response)
                .getKeys()
                .forEach(this::storeKey);
        } catch (IOException | InterruptedException ex) {
            LOG.error("Failed to get the JWKS from '{}': {}", jwksUri, ex.getMessage());
        } catch (ParseException parseEx) {
            LOG.error("Failed to parse the JWKS from '{}': {}", jwksUri, parseEx.getMessage());
        }
    }

    private String downloadJwksDocument() throws IOException, InterruptedException {
        final HttpClient httpClient = HttpClient
                .newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        final HttpRequest request = HttpRequest.newBuilder()
                .uri(jwksUri)
                .timeout(Duration.ofSeconds(10))
                .build();

        LOG.info("Downloading JWKS from '{}'", jwksUri);

        // TODO: let timeout be configurable, implement a retry strategy

        final HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IOException(String.format(
                    "Failed to fetch JWKS from '%s'. Got status code: %d",
                    jwksUri,
                    response.statusCode()));
        }

        return response.body();
    }

    private void storeKey(final JWK key) {
        try {
            final String algorithm = key.getAlgorithm().getName();
            switch (algorithm) {
                // TODO: align on the correct algorithm names
                case "RS256":
                    knownKeys.put(key.getKeyID(), key.toRSAKey().toPublicKey());
                    break;
                case "EC": // likely incorrect
                    knownKeys.put(key.getKeyID(), key.toECKey().toPublicKey());
                default:
                    LOG.warn("Unknown key algorithm: '{}'", algorithm);
            }
        } catch (JOSEException joseEx) {
            LOG.error("Failed to parse key: {}", joseEx.getMessage());
        }
    }
}
