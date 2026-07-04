import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.8"
      releaseDate="2025-10-22"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355916"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.8 was released on 2025-10-22.

It's a maintenance release especially bringing:
- fixes on the webconsole (columns sorting, assets resolution in HTTP, ...)
- fixes on KahaDB (checkpoint runner thread was diying without catching exception, error while recovering topics with no pending acks and TRACE logging enabled, ...)
- a bunch of dependencies updates (jolokia, jetty, log4j, jackson, ...)

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355916).`}} />
    </ClassicRelease>
  );
}
