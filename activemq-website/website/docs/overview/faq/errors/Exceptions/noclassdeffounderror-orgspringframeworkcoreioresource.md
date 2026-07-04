---
title: "NoClassDefFoundError - org.springframework.core.io.Resource"
---

 [FAQ](../..) > [Errors](..) > [Exceptions](.) > [NoClassDefFoundError - org.springframework.core.io.Resource](noclassdeffounderror-orgspringframeworkcoreioresource)


If you get an exception like this
```
java.lang.NoClassDefFoundError - org/springframework/core/io/Resource
```

### Cause

You were probably trying to use the [XML Configuration](../../../../using-activemq-classic/xml-configuration) mechanism, which uses Spring, but without having the Spring jar on your classpath.

### Solution

Add the Spring jar to your classpath.

