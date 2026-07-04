import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.6"
      releaseDate="2024-10-02"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354938"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.6 was released on 2024-10-02.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fixes on the STOMP protocol
- fix on KahaDB (on the recovery files)
- improvements on the WebConsole (e.g. cache control policy)
- dependency updates (spring, jetty, ...)

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354938).`}} />
    </ClassicRelease>
  );
}
