import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.4"
      releaseDate="2024-11-12"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354974"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.4 was released on 2024-11-12.

It's a maintenance release especially bringing:
- fix message corruption when using 4-bytes Unicode message from JMS to STOMP
- prevent ClassCastException in SelectorAwareVirtualTopicInterceptor if there is another interceptor
- fix KahaDB PageFile can call setLength() on the recovery file which always throws an exception
- fix Durable Subscriber receives acknowledge messages if they are farther than the maxBatchSize
- ... a bunch of dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354974).`}} />
    </ClassicRelease>
  );
}
