import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.15.12"
      javaVersion="8"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12346500"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.15.12 includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12346500) and bug fixes.`}} />
    </ClassicRelease>
  );
}
