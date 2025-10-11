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
package org.apache.activemq.web.handler;

import java.util.Arrays;

import jakarta.servlet.http.HttpServletRequest;

import org.apache.activemq.web.DestinationFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
// Removed Spring WebMVC dependencies

/**
 * Utility class for CSRF protection (Spring WebMVC dependency removed)
 */
public class BindingBeanNameUrlHandlerMapping {
    private static final transient Logger LOG = LoggerFactory.getLogger(BindingBeanNameUrlHandlerMapping.class);

    public static void validateRequest(HttpServletRequest request, Object handler) throws Exception {
        if (handler instanceof DestinationFacade) {
            // check supported methods
            if (!Arrays.asList(((DestinationFacade)handler).getSupportedHttpMethods()).contains(request.getMethod())) {
                throw new UnsupportedOperationException("Unsupported method " + request.getMethod() + " for path " + request.getRequestURI());
            }
            // check the 'secret'
            if (request.getSession().getAttribute("secret") == null ||
                !request.getSession().getAttribute("secret").equals(request.getParameter("secret"))) {
                throw new UnsupportedOperationException("Possible CSRF attack");
            }
        }
    }
}
