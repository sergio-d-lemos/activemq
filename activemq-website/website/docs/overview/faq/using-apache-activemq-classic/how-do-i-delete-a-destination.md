---
title: "How do I delete a destination"
---

 [FAQ](..) > [Using Apache ActiveMQ Classic](.) > [How do I delete a destination](how-do-i-delete-a-destination)


How do I delete a destination
-----------------------------

via Java code or [JMX](../../../features/jmx) you can grab the [BrokerViewMBean](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html) and call one of the following methods

*   [removeQueue(String)](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html#removeQueue(java.lang.String))
*   [removeTopic(String)](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html#removeTopic(java.lang.String))

### See also

*   [How do I create new destinations](how-do-i-create-new-destinations)
*   [How can I monitor ActiveMQ Classic](how-can-i-monitor-activemq-classic)
*   [JMX](../../../features/jmx)
*   [Web Console](../../../tools/web-console)

