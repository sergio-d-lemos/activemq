import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.0"
      releaseDate="2025-11-14"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354379"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.2.0 was released on 2025-11-14.

This is a new milestone for the project, starting the 6.2.x series.
This release especially brings:
- several fixes and improvements on KahaDB
- several fixes and improvements on the client and openwire protocol
- several improvements on the Web Console
- a fix on the runtime config plugin, dealing with the network connectors ordering
- performance improvements
- a bunch of dependency updates, especially Spring 6.2.12, Jetty 11.0.26, Shiro 2.0.6, Camel 4.14.2, Jackson 2.20.1, Jolokia 2.4.0 and more
- and much much more

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354379).`}} />
    </ClassicRelease>
  );
}
