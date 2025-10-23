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
package org.apache.activemq.web;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.Optional;

import static java.util.Map.entry;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.activemq.web.controller.*;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class ActionServlet extends HttpServlet {
    
    private static final Map<String, Class<? extends ActionHandler>> routes = Map.ofEntries(
        entry("/createDestination.action", CreateDestination.class),
        entry("/deleteDestination.action", DeleteDestination.class),
        entry("/createSubscriber.action", CreateSubscriber.class),
        entry("/deleteSubscriber.action", DeleteSubscriber.class),
        entry("/sendMessage.action", SendMessage.class),
        entry("/purgeDestination.action", PurgeDestination.class),
        entry("/deleteMessage.action", DeleteMessage.class),
        entry("/copyMessage.action", CopyMessage.class),
        entry("/moveMessage.action", MoveMessage.class),
        entry("/deleteJob.action", DeleteJob.class),
        entry("/retryMessage.action", RetryMessage.class),
        entry("/pauseDestination.action", PauseDestination.class),
        entry("/resumeDestination.action", ResumeDestination.class)
    );

    final WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(getServletContext());

    @Override
    public void init() throws ServletException {
        super.init();
        if (context == null) {
            throw new IllegalStateException("Failed to initialize Web Application Context");
        }
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        String path = request.getRequestURI();
        if (path.contains("/")) {
            path = path.substring(path.lastIndexOf("/"));
        }

        try {
            // Routes the path to a Controller class, returning a 404 if the no route is found
            final Optional<ActionHandler> maybeHandler = getHandler(path);
            if (maybeHandler.isEmpty()) {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
                return;
            }

            final ActionHandler handler = maybeHandler.get();
            if (handler instanceof DestinationFacade destination) {
                if (!Arrays.asList(destination.getSupportedHttpMethods()).contains(request.getMethod())) {
                    throw new UnsupportedOperationException("Unsupported method " + request.getMethod());
                }
            }

            ServletRequestDataBinder binder = new ServletRequestDataBinder(handler);
            binder.bind(request);

            handler.handleRequest(request, response);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private Optional<ActionHandler> getHandler(final String path) {
        return Optional.ofNullable(routes.get(path)).map(context::getBean);
    }
}