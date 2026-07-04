import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.1"
      releaseDate="2024-04-05"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354418"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.1 was released on 2024-04-05.

It's a major release for the project, especially bringing:
- add firstMessageTimestamp in the StatisticsPlugin
- fix on Docker images authentication
- add sun.nio.* opens classes required for some transports
- important dependency updates, especially Spring 6.1.5
- and much more !

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354418).`}} />
    </ClassicRelease>
  );
}
