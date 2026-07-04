import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.16.6"
      releaseDate="2023-02-16"
      javaVersion="8+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351793"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.16.6 was released on 2023-02-16. It's an important release, switching including several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351793).

<div class="alert alert-warning">
This is the last intended Classic 5.16.x release. Users should upgrade to the current stream for ongoing releases, as noted in May 2022.
</div>`}} />
    </ClassicRelease>
  );
}
