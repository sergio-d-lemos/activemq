package org.apache.activemq.jaas.oauth;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class AuthenticationResult {
    private final String subject;
    private final List<String> scopes;

    public AuthenticationResult(final String subject, final List<String> scopes) {
        this.subject = subject;
        this.scopes = scopes;
    }

    public Optional<String> getSubject() {
        return Optional.ofNullable(subject);
    }

    public List<String> getScopes() {
        return scopes;
    }

    @Override
    public String toString() {
        return "AuthenticationResult{" +
                "subject='" + subject + '\'' +
                ", scopes=" + scopes +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        AuthenticationResult that = (AuthenticationResult) o;
        return Objects.equals(subject, that.subject) && Objects.equals(scopes, that.scopes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subject, scopes);
    }
}
