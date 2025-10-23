package org.apache.activemq.web.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class CSRFFilter extends HttpFilter {
    @Override
    public void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        final Object sessionSecret = request.getSession().getAttribute("secret");
        if (sessionSecret == null || !sessionSecret.equals(request.getParameter("secret"))) {
            throw new UnsupportedOperationException("Possible CSRF attack");
        }
        chain.doFilter(request, response);
    }
}
