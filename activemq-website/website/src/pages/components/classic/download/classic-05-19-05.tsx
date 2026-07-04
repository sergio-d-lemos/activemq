import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.5"
      releaseDate="2026-04-08"
      javaVersion="11+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-5.19.5"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache Classic 5.19.5 was released on 2026-04-08.

This is a maintenance release on the 5.19.x series, including:
- ensure AMQP protocol marshals messages before passing to broker
- support purging the first number of messages from a queue
- properly handle SSL handshake updates

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-5.19.5).`}} />
    </ClassicRelease>
  );
}
