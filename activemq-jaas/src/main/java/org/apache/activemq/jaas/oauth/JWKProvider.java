package org.apache.activemq.jaas.oauth;

import java.security.PublicKey;
import java.util.Optional;

public interface JWKProvider {
    Optional<PublicKey> getKey(final String kid);
}
