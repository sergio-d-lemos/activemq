import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.1"
      releaseDate="2026-02-18"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356338"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.2.1 was released on 2026-02-18.

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- running Docker container with non root user
- fix on environment variables propagation in the Docker container
- additional validation on MQTT control packets
- fix incorrect QueueSize if Non-Persistent messages with TTL is used
- fix KahaDBStore ackAndPreparedMap is not properly cleared when recovered acks are removed
- fix ManagementContext unregister race condition
- a lot of dependencies updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356338).`}} />
    </ClassicRelease>
  );
}
