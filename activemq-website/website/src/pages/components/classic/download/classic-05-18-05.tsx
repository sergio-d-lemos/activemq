import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.5"
      releaseDate="2024-07-24"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354398"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.5 was released on 2024-07-24.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- Fix 500 Server Error while polling empty destination via Message REST
- Fix ClassNotFoundException when using runtimeConfigurationPlugin with Java 17
- Spring 5.3.37 update 
- Jetty 9.4.55.v20240627 update
- Jackson 2.17.2 update
- several bug fixes/improvements

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354398).`}} />
    </ClassicRelease>
  );
}
