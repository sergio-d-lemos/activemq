import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.3"
      releaseDate="2026-03-24"
      javaVersion="11+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-5.19.3"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache Classic 5.19.3 was released on 2026-03-24.

This is a maintenance release on the 5.19.x series, including:
- Improve FactoryFinder validation

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-5.19.3).`}} />
    </ClassicRelease>
  );
}
