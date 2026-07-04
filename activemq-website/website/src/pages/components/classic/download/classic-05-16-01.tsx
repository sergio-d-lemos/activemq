import ClassicRelease from '@site/src/components/ClassicRelease';

export default function Release() {
  return (
    <ClassicRelease
      version="5.16.1"
      releaseDate="2021-01-20"
      javaVersion="8+"
      releaseNotes="https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12347027"
    >
      <div dangerouslySetInnerHTML={{__html: `Apache ActiveMQ Classic 5.16.1 was released on 2021-01-20. It fully supports JDK 9+ at runtime and includes several resolved [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12347027) and bug fixes.

This release addresses the following CVEs:
- [CVE-2021-26117: LDAP-Authentication does not verify passwords on servers with anonymous bind.](../security-advisories.data/CVE-2021-26117-announcement.txt)
- [CVE-2020-13947: XSS in WebConsole.](../security-advisories.data/CVE-2020-13947-announcement.txt)`}} />
    </ClassicRelease>
  );
}
