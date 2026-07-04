import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.19.4"
      releaseDate="2026-03-31"
      javaVersion="11+"
      releaseNotes="https://github.com/apache/activemq/releases/tag/activemq-5.19.4"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache Classic 5.19.4 was released on 2026-03-31.

This is a maintenance release on the 5.19.x series, including:
- fix FactoryFinder path resolution in Windows
- align DestinationView and DestinationViewMBean
- prevent a VM transport from being used with BrokerView
- validate nested composite URIs used with BrokerView

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-5.19.4).`}} />
    </ClassicRelease>
  );
}
