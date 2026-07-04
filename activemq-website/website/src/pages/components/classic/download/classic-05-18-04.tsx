import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.4"
      releaseDate="2024-04-11"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353760"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.4 was released on 2024-04-11.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- Spring 5.3.33 update (related to Spring CVEs)
- Jetty 9.4.54.v20240208 update
- Jackson 2.16.2 update
- log4j 2.23.1 update
- several bug fixes/improvements

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353760).`}} />
    </ClassicRelease>
  );
}
