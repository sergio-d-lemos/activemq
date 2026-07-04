import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.16.5"
      releaseDate="2022-05-02"
      javaVersion="8+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351117"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.16.5 was released on 2022-05-02. It's an important release, switching from log4j 1.x to reload4j, and including several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351117) and bug fixes.

<div class="alert alert-warning">
This is the last intended Classic 5.16.x release. Users should upgrade to the current stream for ongoing releases, as noted in May 2022.
</div>`}} />
    </ClassicRelease>
  );
}
