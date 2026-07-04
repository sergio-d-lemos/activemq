import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.0"
      releaseDate="2024-03-15"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353745"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.0 was released on 2024-03-15.

It's a major release for the project, especially bringing:
- New JMS 2/3 operations support
- Mapping javax / jakarta exception in openwire protocol
- Add destination field on the job scheduler
- Add org.apache.activemq.broker.BouncyCastleNotAdded property to control the bouncycastle addition in BrokerService classloader
- A lot of dependency upgrades (Spring 6.1.4, log4j 2.23.0, Jetty 11.0.20, ...)
- and much more !

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353745).`}} />
    </ClassicRelease>
  );
}
