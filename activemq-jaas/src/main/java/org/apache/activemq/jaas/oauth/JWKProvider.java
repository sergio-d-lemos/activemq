package org.apache.activemq.jaas.oauth;

import java.security.interfaces.RSAPublicKey;
import java.util.Optional;

public interface JWKProvider {
    Optional<RSAPublicKey> getKey(final String kid);
}
