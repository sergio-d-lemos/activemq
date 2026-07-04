import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.2"
      releaseDate="2026-03-24"
      javaVersion="17+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-6.2.2"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ 6.2.2 was released on 2026-03-24.

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- Improve FactoryFinder validation
- Fix Jolokia runtime
- Upgrade to Jackson 2.21.1

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.2).`}} />
    </ClassicRelease>
  );
}
