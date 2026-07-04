import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.16.2"
      releaseDate="2021-04-28"
      javaVersion="8+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12349550"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.16.2 was released on 2021-04-28. It fully supports JDK 9+ at runtime and includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12349550) and bug fixes.`}} />
    </ClassicRelease>
  );
}
