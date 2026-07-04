import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.17.7"
      releaseDate="2025-03-20"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353765"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.17.7 was released on 2025-03-20.

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- fix Out Of Memory error reported on ActiveMQ client during openwire unmarshalling
- fix concurrent modification in ActiveMQServiceFactory
- fix websocket transport options do not get applied
- fix Jolokia throws exception during Windows service startup
- fix queue creation during browse in the WebConsole
- several dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353765).`}} />
    </ClassicRelease>
  );
}
