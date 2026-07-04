import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.16.0"
      javaVersion="8+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12341032"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.16.0 is the first release on the 5.16.x series. It fully supports JDK 9+ at runtime and includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12341032) and bug fixes.`}} />
    </ClassicRelease>
  );
}
