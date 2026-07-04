import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.0.0"
      releaseDate="2023-11-17"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352570"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.0.0 was released on 2023-11-17.

It's a major release for the project, especially bringing:
- [Partial Jakarta Messaging 3.1 & JMS 2.0 support](/components/classic/documentation/jms2) (new features will come in the 6.x series)
- Jakarta EE namespace support
- JDK17/20/21 support
- Spring 6.x support
- Jetty 11.x support
- Apache Camel 4.x support
- Jolokia 2.x support
- and much more !

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352570).`}} />
    </ClassicRelease>
  );
}
