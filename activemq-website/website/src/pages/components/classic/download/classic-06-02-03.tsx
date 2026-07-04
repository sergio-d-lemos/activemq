import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.2.3"
      releaseDate="2026-03-30"
      javaVersion="17+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-6.2.3"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ 6.2.3 was released on 2026-03-30.

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- fix FactoryFinder path resolution in Windows
- prevent a VM transport from being used with BrokerView
- also validate nested composite URIs used with BrokerView

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.3).`}} />
    </ClassicRelease>
  );
}
