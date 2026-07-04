import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.15.16"
      releaseDate="2023-10-26"
      javaVersion="8"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12350044"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.15.16 was released on 2023-10-26 and includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12350044) and bug fixes.

<div class="alert alert-warning">
This is the last intended 5.15.x release. Users should upgrade to the current stream for ongoing releases, as noted in April 2021.
</div>`}} />
    </ClassicRelease>
  );
}
