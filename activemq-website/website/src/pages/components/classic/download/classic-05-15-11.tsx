import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.15.11"
      javaVersion="8"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12345958"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.15.11 includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12345958) and bug fixes.`}} />
    </ClassicRelease>
  );
}
