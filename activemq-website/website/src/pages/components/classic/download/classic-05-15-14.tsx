import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.15.14"
      releaseDate="2020-12-09"
      javaVersion="8"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12348294"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.15.14 was released on 2020-12-09 and includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12348294) and bug fixes.`}} />
    </ClassicRelease>
  );
}
