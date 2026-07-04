import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.17.5"
      releaseDate="2023-07-02"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352888"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.17.5 was released on 2023-07-02.

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- fix on stale queues when a connection is long to shutdown
- fix on KahaDB where the db files may be larger than the maxLength configuration
- fix on composite consumers on a Network of Brokers
- fix memory leak on STOMP transport when client unsubscribe
- a bunch of dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352888).`}} />
    </ClassicRelease>
  );
}
