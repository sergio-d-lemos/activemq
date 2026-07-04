import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.17.1"
      releaseDate="2022-04-29"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351348"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.17.1 was released on 2022-04-29. It's a major milestone for ActiveMQ Classic, now using Spring 5.x, Log4j 2.x, and other major updates and resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351348) and bug fixes.`}} />
    </ClassicRelease>
  );
}
