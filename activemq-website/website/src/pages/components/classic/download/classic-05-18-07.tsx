import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.18.7"
      releaseDate="2025-03-19"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355706"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.18.7 was released on 2025-03-19.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- fix ClassCastException in SelectorAwareVirtualTopicInterceptor if
there is another interceptor
- fix durable subscriber receives acknowledge messages if they are
farther than the maxBatchSize
- fix potential issue with messages can become stuck on Queues
- fix potential issue in WebConsole where a queue can be created with
browse page
- several dependencies updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355706).`}} />
    </ClassicRelease>
  );
}
