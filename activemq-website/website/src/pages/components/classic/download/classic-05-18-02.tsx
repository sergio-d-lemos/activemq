import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.2"
      releaseDate="2023-07-02"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353099"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.2 was released on 2023-07-02.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix potential NPE when removing consumer with selector
- fix composite consumers in a Network of Brokers
- fix memory leak on the STOMP transport when client unsubscribe
- a bunch of dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353099).`}} />
    </ClassicRelease>
  );
}
