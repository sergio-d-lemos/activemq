import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.0"
      releaseDate="2025-03-11"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355096"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.19.0 was released on 2025-03-11.

This is the first release on the 5.19.x series. It's based on 5.18.x with additional features.

This release includes:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- improvement on double slashes in Unix scripts
- fix ClassCastException in SelectorAwareVirtualTopicInterceptor if
there is another interceptor
- fix on WebConsole, checking if a queue exists before being able to browse it
- fix durable subscriber receives acknowledge messages if they are
farther than the maxBatchSize
- update ConnectionView to include WireFormatInfo
- add the ability to disable connector startup on boot
- add advancedMessageStatistics to destinations
- several dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355096).`}} />
    </ClassicRelease>
  );
}
