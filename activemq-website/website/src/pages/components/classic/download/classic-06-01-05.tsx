import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.5"
      releaseDate="2025-01-13"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355276"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.5 was released on 2025-01-13.

It's a maintenance release especially bringing:
- messages (in specific circumstances) can become stuck in queues
- remove commons-io use (replaced by JDK methods)
- several dependency updates, especially Spring 6.1.16, Jackson 2.18.2, Jolokia 2.1.2 (removing json-simple dependency), xstream 1.4.21

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355276).`}} />
    </ClassicRelease>
  );
}
