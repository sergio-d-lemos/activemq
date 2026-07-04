import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.4"
      releaseDate="2026-04-08"
      javaVersion="17+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-6.2.4"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ 6.2.4 was released on 2026-04-08.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- ensure AMQP protocol marshals messages before passing to broker
- several MQTT fixes
- properly handle SSL handshake updates

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.4).`}} />
    </ClassicRelease>
  );
}
