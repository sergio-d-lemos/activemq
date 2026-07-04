import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="6.1.2"
      releaseDate="2024-04-15"
      javaVersion="17+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354480"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 6.1.2 was released on 2024-04-15.

It's a major release for the project, especially bringing:
- secure Jolokia and REST Message API by default
- fix on runtimeConfigurationPlugin JMX MBean reload operation
- fix when consuming empty destination via REST Message API
- fix client/server SSL socket configuration via URI

You can find details on the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354480).`}} />
    </ClassicRelease>
  );
}
