import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.6"
      releaseDate="2026-04-23"
      javaVersion="11+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-5.19.6"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache Classic 5.19.6 was released on 2026-04-23.

This is a maintenance release on the 5.19.x series, including:
- SSL handshake write timeout enforcement
- restrict URL protocol types loaded by XBeanBrokerFactory
- make brokerName immutable in RegionBroker
- add Http discovery transport to denied list for JMX
- update DestinationView uri resolution
- webconsole handling on backup broker
- queue browse improvements in webconsole
- add more transport types to the denied list for JMX
- add remote file filtering for XBeanBrokerFactory

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-5.19.6).`}} />
    </ClassicRelease>
  );
}
