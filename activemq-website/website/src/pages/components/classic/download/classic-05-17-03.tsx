import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.17.3"
      releaseDate="2022-12-04"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352201"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.17.3 was released on 2022-12-04. It's a major milestone for ActiveMQ Classic, now using Spring 5.x, Log4j 2.x, and other major updates and resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352201) and bug fixes.`}} />
    </ClassicRelease>
  );
}
