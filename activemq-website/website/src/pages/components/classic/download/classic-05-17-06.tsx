import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.17.6"
      releaseDate="2023-10-25"
      javaVersion="11+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353377"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.17.6 was released on 2023-10-25.

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- improvement on KahaDB memory consumption
- add additional fields on JMX Connection MBean
- improvement on OpenWire marshaller on Throwable class type
- a lot of dependency updates

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353377).`}} />
    </ClassicRelease>
  );
}
