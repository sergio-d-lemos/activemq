import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.7"
      releaseDate="2026-05-31"
      javaVersion="11+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-5.19.7"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache Classic 5.19.7 was released on 2026-05-31.

This is a maintenance release on the 5.19.x series, including:
- Additional transport types to the JMX denied list
- Fix authorization check on the removeDestination
- Block XBeanBrokerFactory by default inside the VMTransportFactory
- Security enforcements: message servlet disabled by default, harden default configuration for the broker, the webconsole, and jolokia

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-5.19.7).`}} />
    </ClassicRelease>
  );
}
