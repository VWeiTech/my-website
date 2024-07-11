"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6998],{355:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(4848),a=s(8453);const r={title:"Difference Between a Java Keystore and a Truststore"},i="Difference Between a Java Keystore and a Truststore",o={id:"Java/20240711",title:"Difference Between a Java Keystore and a Truststore",description:"Overview",source:"@site/docs/Java/20240711.md",sourceDirName:"Java",slug:"/Java/20240711",permalink:"/my-website/docs/Java/20240711",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/Java/20240711.md",tags:[],version:"current",frontMatter:{title:"Difference Between a Java Keystore and a Truststore"},sidebar:"tutorialSidebar",previous:{title:"How to disable zipkin reporter in spring boot 3",permalink:"/my-website/docs/Java/20230818"},next:{title:"Ubuntu 22.04\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5\uff0c\u6ca1\u6709\u7f51\u7edc\u56fe\u6807",permalink:"/my-website/docs/Linux/20230525"}},c={},l=[{value:"Overview",id:"overview",level:3},{value:"Concepts",id:"concepts",level:3},{value:"Java KeyStore",id:"java-keystore",level:3},{value:"Java TrustStore",id:"java-truststore",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"References",id:"references",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"difference-between-a-java-keystore-and-a-truststore",children:"Difference Between a Java Keystore and a Truststore"}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In this quick tutorial, we\u2019ll provide an overview of the differences between a Java keystore and a Java truststore."}),"\n",(0,n.jsx)(t.h3,{id:"concepts",children:"Concepts"}),"\n",(0,n.jsx)(t.p,{children:"In most cases, we use a keystore and a truststore when our application needs to communicate over SSL/TLS."}),"\n",(0,n.jsx)(t.p,{children:"Usually, these are password-protected files that sit on the same file system as our running application. The default\nformat used for these files was JKS until Java 8."}),"\n",(0,n.jsx)(t.p,{children:"Since Java 9, the default keystore format is PKCS12. The biggest difference between JKS and PKCS12 is that JKS is a\nformat specific to Java, while PKCS12 is a standardized and language-neutral way of storing encrypted private keys and\ncertificates."}),"\n",(0,n.jsx)(t.h3,{id:"java-keystore",children:"Java KeyStore"}),"\n",(0,n.jsx)(t.p,{children:"A Java keystore stores private key entries, certificates with public keys, or just secret keys that we may use for\nvarious cryptographic purposes. It stores each by an alias for ease of lookup."}),"\n",(0,n.jsx)(t.p,{children:"Generally speaking, keystores hold keys that our application owns, which we can use to prove the integrity of a message\nand the authenticity of the sender, say by signing payloads."}),"\n",(0,n.jsx)(t.p,{children:"Usually, we\u2019ll use a keystore when we\u2019re a server and want to use HTTPS. During an SSL handshake, the server looks up\nthe private key from the keystore, and presents its corresponding public key and certificate to the client."}),"\n",(0,n.jsx)(t.p,{children:"Similarly, if the client also needs to authenticate itself, a situation called mutual authentication, then the client\nalso has a keystore and also presents its public key and certificate."}),"\n",(0,n.jsx)(t.p,{children:"There\u2019s no default keystore, so if we want to use an encrypted channel, we\u2019ll have to set javax.net.ssl.keyStore and\njavax.net.ssl.keyStorePassword. If our keystore format is different than the default, we could use\njavax.net.ssl.keyStoreType to customize it."}),"\n",(0,n.jsx)(t.p,{children:"Of course, we can use these keys to service other needs as well. Private keys can sign or decrypt data, and public keys\ncan verify or encrypt data. Secret keys can perform these functions as well. A keystore is a place that we can hold onto\nthese keys."}),"\n",(0,n.jsxs)(t.p,{children:["We can also ",(0,n.jsx)(t.a,{href:"https://www.baeldung.com/java-keystore",children:"interact with the keystore programmatically"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"java-truststore",children:"Java TrustStore"}),"\n",(0,n.jsx)(t.p,{children:"A truststore is the opposite. While a keystore typically holds onto certificates that identify us, a truststore holds\nonto certificates that identify others."}),"\n",(0,n.jsx)(t.p,{children:"In Java, we use it to trust the third party we\u2019re about to communicate with."}),"\n",(0,n.jsx)(t.p,{children:"Take our earlier example. If a client talks to a Java-based server over HTTPS, the server will look up the associated\nkey from its keystore and present the public key and certificate to the client."}),"\n",(0,n.jsx)(t.p,{children:"We, the client, then look up the associated certificate in our truststore. If the certificate or Certificate Authorities\npresented by the external server isn\u2019t in our truststore, we\u2019ll get an SSLHandshakeException, and the connection won\u2019t\nbe set up successfully."}),"\n",(0,n.jsx)(t.p,{children:"Java has bundled a truststore called cacerts. For Java versions before 9, it resides in the $JAVA_HOME/jre/lib/security\ndirectory, and for Java versions after 8, it\u2019s in $JAVA_HOME/lib/security."}),"\n",(0,n.jsx)(t.p,{children:"It contains default, trusted Certificate Authorities:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ keytool -list -keystore cacerts\nEnter keystore password:\nKeystore type: JKS\nKeystore provider: SUN\n\nYour keystore contains 92 entries\n\nverisignclass2g2ca [jdk], 2018-06-13, trustedCertEntry,\nCertificate fingerprint (SHA1): B3:EA:C4:47:76:C9:C8:1C:EA:F2:9D:95:B6:CC:A0:08:1B:67:EC:9D\n"})}),"\n",(0,n.jsx)(t.p,{children:"We can see here that the truststore contains 92 trusted certificate entries and one of the entries is the\nverisignclass2gca entry. This means that the JVM will automatically trust certificates signed by verisignclass2g2ca."}),"\n",(0,n.jsx)(t.p,{children:"We can override the default truststore location via the javax.net.ssl.trustStore property. Similarly, we can set\njavax.net.ssl.trustStorePassword and javax.net.ssl.trustStoreType to specify the truststore\u2019s password and type."}),"\n",(0,n.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this article, we discussed the main differences between the Java keystore and the Java truststore, along with their\npurposes."}),"\n",(0,n.jsx)(t.p,{children:"We also learned how the defaults can be overridden with system properties."}),"\n",(0,n.jsxs)(t.p,{children:["To dive deeper into encrypted communication in Java, we can have a look at the\nfollowing ",(0,n.jsx)(t.a,{href:"https://www.baeldung.com/java-ssl",children:"SSL guide"})," or the ",(0,n.jsx)(t.a,{href:"https://docs.oracle.com/en/java/javase/11/security/java-secure-socket-extension-jsse-reference-guide.html",children:"JSSE Reference\nGuide"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.baeldung.com/java-keystore-truststore-difference#java-keystore",children:"https://www.baeldung.com/java-keystore-truststore-difference#java-keystore"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.baeldung.com/java-ssl",children:"https://www.baeldung.com/java-ssl"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.oracle.com/en/java/javase/11/security/java-secure-socket-extension-jsse-reference-guide.html",children:"https://docs.oracle.com/en/java/javase/11/security/java-secure-socket-extension-jsse-reference-guide.html"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloud.tencent.com/developer/article/1761787",children:"https://cloud.tencent.com/developer/article/1761787"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.cnblogs.com/zjdxr-up/p/15110465.html",children:"https://www.cnblogs.com/zjdxr-up/p/15110465.html"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(6540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);