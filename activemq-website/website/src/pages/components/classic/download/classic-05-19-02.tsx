import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.2"
      releaseDate="2026-02-13"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356326"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.19.2 was released on 2026-02-13.

This is a maintenance release on the 5.19.x series, including:
- the Docker container now runs with non root user
- fix on the Docker container using ACTIVEMQ_OPTS and ACTIVEMQ_OPTS_MEMORY environment variables
- fix on the Runtime Configuration Plugin keeping the network connectors definition in the right order
- add additional validation for MQTT control packets
- fix incorrect QueueSize if non persistent messages with TTL are used
- fix closed connections leaked in the connection pool
- fix on KahaDBStore ackAndPreparedMap not properly cleared when recovered acks are removed
- several dependencies updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356326).`}} />
    </ClassicRelease>
  );
}
