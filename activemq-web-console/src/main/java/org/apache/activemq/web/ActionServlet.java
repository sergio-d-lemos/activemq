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
import java.util.concurrent.ConcurrentHashMap;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.activemq.web.controller.*;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class ActionServlet extends HttpServlet {
    
    private final Map<String, Class<?>> actionMap = new ConcurrentHashMap<>();
    
    @Override
    public void init() throws ServletException {
        actionMap.put("/createDestination.action", CreateDestination.class);
        actionMap.put("/deleteDestination.action", DeleteDestination.class);
        actionMap.put("/createSubscriber.action", CreateSubscriber.class);
        actionMap.put("/deleteSubscriber.action", DeleteSubscriber.class);
        actionMap.put("/sendMessage.action", SendMessage.class);
        actionMap.put("/purgeDestination.action", PurgeDestination.class);
        actionMap.put("/deleteMessage.action", DeleteMessage.class);
        actionMap.put("/copyMessage.action", CopyMessage.class);
        actionMap.put("/moveMessage.action", MoveMessage.class);
        actionMap.put("/deleteJob.action", DeleteJob.class);
        actionMap.put("/retryMessage.action", RetryMessage.class);
        actionMap.put("/pauseDestination.action", PauseDestination.class);
        actionMap.put("/resumeDestination.action", ResumeDestination.class);
    }
    
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String path = request.getRequestURI();
        if (path.contains("/")) {
            path = path.substring(path.lastIndexOf("/"));
        }
        
        Class<?> controllerClass = actionMap.get(path);
        if (controllerClass == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        
        try {
            WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
            Object controller = context.getBean(controllerClass);
            
            // CSRF protection
            if (controller instanceof DestinationFacade) {
                DestinationFacade facade = (DestinationFacade) controller;
                if (!Arrays.asList(facade.getSupportedHttpMethods()).contains(request.getMethod())) {
                    throw new UnsupportedOperationException("Unsupported method " + request.getMethod());
                }
                if (request.getSession().getAttribute("secret") == null ||
                    !request.getSession().getAttribute("secret").equals(request.getParameter("secret"))) {
                    throw new UnsupportedOperationException("Possible CSRF attack");
                }
            }
            
            // Bind request parameters
            ServletRequestDataBinder binder = new ServletRequestDataBinder(controller);
            binder.bind(request);
            
            // Handle request using reflection
            java.lang.reflect.Method handleMethod = controller.getClass().getMethod("handleRequest", 
                HttpServletRequest.class, HttpServletResponse.class);
            handleMethod.invoke(controller, request, response);
            
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}