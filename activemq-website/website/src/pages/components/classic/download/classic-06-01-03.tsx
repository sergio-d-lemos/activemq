import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.3"
      releaseDate="2024-08-08"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354559"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.3 was released on 2024-08-08.

It's a maintenance release especially bringing:
- add a BoM
- fixes on the Message REST API, especially concurrent access
- Spring 6.1.11 update
- fix NoClassDefFound on bin/activemq export command line
- several dependency updates 

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354559).`}} />
    </ClassicRelease>
  );
}
