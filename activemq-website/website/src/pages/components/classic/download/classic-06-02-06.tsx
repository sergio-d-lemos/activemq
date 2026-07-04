import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.6"
      releaseDate="2026-05-31"
      javaVersion="17+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-6.2.6"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ 6.2.6 was released on 2026-05-31.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- Additional transport types to the JMX denied list
- Fix authorization check on the removeDestination
- Block XBeanBrokerFactory by default inside the VMTransportFactory
- Security enforcements: message servlet disabled by default, harden default configuration for the broker, the webconsole, and jolokia

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.6).`}} />
    </ClassicRelease>
  );
}
