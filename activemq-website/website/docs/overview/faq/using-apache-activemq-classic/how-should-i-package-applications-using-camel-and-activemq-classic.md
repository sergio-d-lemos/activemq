---
title: "How should I package applications using Camel and ActiveMQ Classic"
---

 [FAQ](..) > [Using Apache ActiveMQ Classic](.) > [How should I package applications using Camel and ActiveMQ Classic](how-should-i-package-applications-using-camel-and-activemq-classic)

How should I package applications using Camel and ActiveMQ Classic
----------------------------------------------------------

So you may wish to use Camel's [Enterprise Integration Patterns](../../../features/enterprise-integration-patterns) inside the ActiveMQ Classic Broker. In which case the stand alone broker is already packaged to work with Camel out of the box; just add your EIP routing rules to ActiveMQ Classic's [Xml Configuration](../../../using-activemq-classic/xml-configuration) like the example routing rule which ships with ActiveMQ Classic 5.x or later. If you want to include some Java routing rules, then just add your jar to somewhere inside ActiveMQ Classic's lib directory.

If you wish to use ActiveMQ Classic and/or Camel in a standalone application, we recommend you just create a normal Spring application; then add the necessary jars and customise the Spring XML and you're good to go.

### What jars do I need

*   [what jars are required for ActiveMQ Classic](../../../using-activemq-classic/initial-configuration)
*   [what jars are required for Camel](../general/what-jars-do-i-need)

