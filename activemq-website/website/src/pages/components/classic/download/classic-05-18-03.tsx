import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.3"
      releaseDate="2023-10-25"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353355"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.3 was released on 2023-10-25.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix on destinations create when message is delayed
- fix on moving message to DLQ when produce via HTTP and TTL is reached
- improvement on KahaDB memory consumption
- improvement on OpenWire marshaller on Throwable class type
- implementation of JMS 2.x XA methods
- fix on JDK17+ support
- a lot of dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353355).`}} />
    </ClassicRelease>
  );
}
