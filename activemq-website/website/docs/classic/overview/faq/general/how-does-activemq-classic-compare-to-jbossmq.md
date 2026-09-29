---
title: "How does ActiveMQ Classic compare to JBossMQ"
---

 [FAQ](..) > [General](.) > [How does ActiveMQ Classic compare to JBossMQ](how-does-activemq-classic-compare-to-jbossmq)


There are some similarities between the two; they both support JMS 1.1 and run inside [JBoss 4.x](../../../connectivity/containers/jboss-integration).

However ActiveMQ Classic does offer some specific differences and advantages (at least from our perspective)

*   ActiveMQ Classic works great in any JVM not just inside the JBoss application server
*   ActiveMQ Classic comes complete with a large number of [Cross Language Clients](../../../connectivity/cross-language-clients)
*   ActiveMQ Classic supports many different [Protocols](../../../connectivity/protocols) such as [Ajax](../../../connectivity/ajax), [REST](../../../connectivity/protocols/rest), [Stomp](../../../connectivity/protocols/stomp), [OpenWire](../../../connectivity/protocols/openwire), [XMPP](../../../connectivity/protocols/xmpp)
*   ActiveMQ Classic supports a large number of advanced features like [Message Groups](../../../features/consumer-features/message-groups), [Exclusive Consumer](../../../features/consumer-features/exclusive-consumer), [Composite Destinations](../../../features/destination-features/composite-destinations), [Advisory Message](../../../features/message-features/advisory-message) support
*   ActiveMQ Classic supports reliable connections with [configurable](../../../using-activemq-classic/configuring-transports) automatic reconnection
*   ActiveMQ Classic has great [Spring Support](../../../connectivity/containers/spring-support)
*   ActiveMQ Classic supports distributed destinations across networks
*   ActiveMQ Classic is very fast; often 10x faster than JBossMQ.

Performance guides
------------------

If you're not convinced by performance reports then please do try running performance tests yourself. You might wanna check out our overview of [Performance](../../../features/performance) or try using out the [ActiveMQ Classic Performance Module Users Manual](../../../features/performance/activemq-classic-performance-module-users-manual)

[Commercial providers](support#commercial-support) may also be able to help diagnose performance issues, suggest changes, etc...

More on JBoss Integration
-------------------------

[Integrating Apache ActiveMQ Classic with JBoss](../../../connectivity/containers/integrating-apache-activemq-classic-with-jboss)

