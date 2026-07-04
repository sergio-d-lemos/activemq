import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.0.1"
      releaseDate="2023-12-03"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353594"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.0.1 was released on 2023-12-03.

It's a maintenance release on the 6.x series, especially bringing:
- Fix Jakarta support in ActiveMQ RA
- Fix OSGi headers in activemq-jms-pool and activemq-cf
- Fix provided jetty.xml example on the SSL connector
- Fix jolokia conf loading when using Windows service wrapper
- Several dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353594).`}} />
    </ClassicRelease>
  );
}
