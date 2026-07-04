import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.1"
      releaseDate="2023-04-14"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352969"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.1 was released on 2023-04-14.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, fixing an issue on the \`activemq-client-jakarta\` artifact.

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352969).`}} />
    </ClassicRelease>
  );
}
