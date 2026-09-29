---
title: "Features Overview"
---


*   Supports a variety of [Cross Language Clients and Protocols](../connectivity/cross-language-clients) from Java, C, C++, C#, Ruby, Perl, Python, PHP
    *   [OpenWire](../connectivity/protocols/openwire) for high performance clients in Java, C, C++, C#
    *   [Stomp](../connectivity/protocols/stomp) support so that clients can be written easily in C, Ruby, Perl, Python, PHP, ActionScript/Flash, Smalltalk to talk to ActiveMQ Classic as well as any other popular Message Broker
    *   [AMQP](../amqp) v1.0 support
    *   [MQTT](../connectivity/protocols/mqtt) v3.1 support allowing for connections in an IoT environment.
*   full support for the [Enterprise Integration Patterns](enterprise-integration-patterns) both in the JMS client and the Message Broker
*   Supports many [advanced features](index) such as [Message Groups](consumer-features/message-groups), [Virtual Destinations](destination-features/virtual-destinations), [Wildcards](destination-features/wildcards) and [Composite Destinations](destination-features/composite-destinations)
*   Fully supports JMS 1.1 and J2EE 1.4 with support for transient, persistent, transactional and XA messaging
*   [Spring Support](../connectivity/containers/spring-support) so that ActiveMQ Classic can be easily embedded into Spring applications and configured using Spring's XML configuration mechanism
*   Tested inside popular J2EE servers such as [TomEE](http://tomee.apache.org/), [Geronimo](http://geronimo.apache.org/), JBoss, GlassFish and WebLogic
    *   Includes [JCA 1.5 resource adaptors](../connectivity/containers/resource-adapter) for inbound & outbound messaging so that ActiveMQ Classic should auto-deploy in any J2EE 1.4 compliant server
*   Supports pluggable [transport protocols](../connectivity/protocols) such as [in-VM](../overview/faq/using-apache-activemq-classic/how-do-i-use-activemq-classic-using-in-jvm-messaging), TCP, SSL, NIO, UDP, multicast, JGroups and JXTA transports
*   Supports very fast [persistence](persistence) using JDBC along with a high performance journal
*   Designed for high performance clustering, client-server, peer based communication
*   [REST](../connectivity/protocols/rest) API to provide technology agnostic and language neutral web based API to messaging
*   [Ajax](../connectivity/ajax) to support web streaming support to web browsers using pure DHTML, allowing web browsers to be part of the messaging fabric
*   [CXF and Axis Support](../connectivity/containers/axis-and-cxf-support) so that ActiveMQ Classic can be easily dropped into either of these web service stacks to provide reliable messaging
*   Can be used as an in memory JMS provider, ideal for [unit testing JMS](../overview/faq/jms/how-to-unit-test-jms-code)

