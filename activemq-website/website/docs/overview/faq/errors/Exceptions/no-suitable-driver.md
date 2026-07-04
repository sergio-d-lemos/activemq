---
title: "No suitable driver"
---

 [FAQ](../..) > [Errors](..) > [Exceptions](.) > [No suitable driver](no-suitable-driver)


### Symptoms

I get an exception saying **No suitable driver** when initialising the JDBC driver.

### Reason

ActiveMQ Classic tries to auto-detect the JDBC driver so that it can deduce the ultimate database's SQL dialect. Some JDBC drivers are not yet auto-recognised. Here's [how to configure the language adapater class to use or to provide us with details of your driver so we can add support for it to ActiveMQ Classic](../../../../features/persistence/jdbc-support).

### See

*   [JDBC Support](../../../../features/persistence/jdbc-support)
*   [Persistence](../../../../features/persistence)
*   [How to configure a new database](../../configuration/how-to-configure-a-new-database)

