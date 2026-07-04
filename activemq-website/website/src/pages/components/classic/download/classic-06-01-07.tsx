import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.7"
      releaseDate="2025-06-22"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355749"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.7 was released on 2025-06-22.

It's a maintenance release especially bringing:
- improvements on the HTTP connector working with XA
- fix deadlock in RA ServerSessionImpl
- fix empty virtualName from broken queue name
- fixes and improvements on Network of Broker durable sync TTL
- fix expiration of persistent messages on durable subscriptions
- fix maxMessageSize behavior changed for value -1
- fix performance issues with non-persistent message removal from
topic/durable subscriptions
- add Security Content Policy header to the Web Console
- add an wireFormat option on the HTTP transport to not send the full
stack trace to the client
- a bunch of dependencies updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355749).`}} />
    </ClassicRelease>
  );
}
