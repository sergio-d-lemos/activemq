import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.5"
      releaseDate="2026-04-23"
      javaVersion="17+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-6.2.5"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ 6.2.5 was released on 2026-04-23.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- SSL handshake write timeout enforcement
- restrict URL protocol types loaded by XBeanBrokerFactory
- make brokerName immutable in RegionBroker
- add Http discovery transport to denied list for JMX
- update resource cleanup on queueBrowse servlet
- webconsole handling on backup broker
- queue browse improvements in webconsole
- add more transport types to the denied list for JMX
- add remote file filtering for XBeanBrokerFactory

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.5).`}} />
    </ClassicRelease>
  );
}
