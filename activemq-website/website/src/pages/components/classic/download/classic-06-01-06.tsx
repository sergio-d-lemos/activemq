import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.6"
      releaseDate="2025-03-07"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355554"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.6 was released on 2025-03-07.

It's a maintenance release especially bringing:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- improvement on double slash issue in Unix script
- fix TcpTransport volatile receiveCounter (not increased automatically)
- improvement on WebConsole, checking if a queue exists before being
able to browse it
- several dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355554).`}} />
    </ClassicRelease>
  );
}
