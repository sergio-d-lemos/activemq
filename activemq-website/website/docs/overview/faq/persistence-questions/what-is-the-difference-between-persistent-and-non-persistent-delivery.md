---
title: "What is the difference between persistent and non-persistent delivery?"
---

 [FAQ](..) > [Persistence Questions](.) > [What is the difference between persistent and non-persistent delivery](what-is-the-difference-between-persistent-and-non-persistent-delivery)

What is the difference between persistent and non-persistent delivery?
----------------------------------------------------------------------

ActiveMQ Classic supports both persistent and non-persistent delivery. As per the JMS specification, the default delivery mode is persistent. The persistence flag is set on the MessageProducer for all messages using the setDeliveryMode. It can also be specified on a per message basis using the long form of the send method. Persistence is a property of a an individual message.

The main difference is that if you are using persistent delivery, messages are persisted to disk/database so that they will survive a broker restart. When using non-persistent delivery, if you kill a broker then you will lose all in-transit messages.

The effect of this difference is that persistent messaging is usually slower than non-persistent delivery, particularly when not using [Async Sends](../../../features/message-dispatching-features/async-sends).

### See also

*   [Async Sends](../../../features/message-dispatching-features/async-sends)
*   [How do I disable persistence](../configuration/how-do-i-disable-persistence)

