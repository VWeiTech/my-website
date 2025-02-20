"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8272],{4886:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(4848),i=s(8453);const o={},r="CloudFront \u2013 Price Classes",a={id:"AWS/AWS-SAA/concept-set",title:"CloudFront \u2013 Price Classes",description:"- You can reduce the number of edge locations for cost reduction",source:"@site/docs/AWS/AWS-SAA/concept-set.md",sourceDirName:"AWS/AWS-SAA",slug:"/AWS/AWS-SAA/concept-set",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/concept-set",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/concept-set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/Table of Contents"},next:{title:"wrong-problem-collection",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/wrong-problem-collection"}},l={},c=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cloudfront--price-classes",children:"CloudFront \u2013 Price Classes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can reduce the number of edge locations for cost reduction"}),"\n",(0,t.jsxs)(n.li,{children:["Three price classes:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Price Class All: all regions \u2013 best performance"}),"\n",(0,t.jsx)(n.li,{children:"Price Class 200: most regions, but excludes the most expensive regions"}),"\n",(0,t.jsx)(n.li,{children:"Price Class 100: only the least expensive regions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"dfsr",children:"DFSR"}),"\n",(0,t.jsx)(n.p,{children:"Distributed File System Replication"}),"\n",(0,t.jsx)(n.h1,{id:"gateway-load-balancer",children:"Gateway Load Balancer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy, scale, and manage a fleet of 3rd party Route Table network virtual appliances in AWS"}),"\n",(0,t.jsx)(n.li,{children:"Example: Firewalls, Intrusion Detection and Prevention Systems, Deep Packet Inspection Systems, payload\nmanipulation, \u2026"}),"\n",(0,t.jsx)(n.li,{children:"Operates at Layer 3 (Network Layer) \u2013 IP Packets"}),"\n",(0,t.jsxs)(n.li,{children:["Combines the following functions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transparent Network Gateway \u2013 single entry/exit for all traffic"}),"\n",(0,t.jsx)(n.li,{children:"Load Balancer \u2013 distributes traffic to your virtual appliances"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Uses the GENEVE protocol on port 6081\n",(0,t.jsx)(n.img,{alt:"img.png",src:s(1979).A+"",width:"441",height:"649"})]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"gateway-load-balancer--target-groups",children:"Gateway Load Balancer \u2013 Target Groups"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"EC2 instances"}),"\n",(0,t.jsx)(n.li,{children:"IP Addresses \u2013 must be private IPs"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img.png",src:s(4615).A+"",width:"1059",height:"362"})}),"\n",(0,t.jsx)(n.h1,{id:"kinesis-data-firehose",children:"Kinesis Data Firehose"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fully Managed Service, no administration, automatic scaling, serverless\n\u2022 AWS: Redshift / Amazon S3 / OpenSearch\n\u2022 3rd party partner: Splunk / MongoDB / DataDog / NewRelic / \u2026\n\u2022 Custom: send to any HTTP endpoint"}),"\n",(0,t.jsx)(n.li,{children:"Pay for data going through Firehose"}),"\n",(0,t.jsx)(n.li,{children:"Near Real Time\n\u2022 Buffer interval: 0 seconds (no buffering) to 900 seconds\n\u2022 Buffer size: minimum 1MB"}),"\n",(0,t.jsx)(n.li,{children:"Supports many data formats, conversions, transformations, compression"}),"\n",(0,t.jsx)(n.li,{children:"Supports custom data transformations using AWS Lambda"}),"\n",(0,t.jsx)(n.li,{children:"Can send failed or all data to a backup S3 bucket"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img.png",src:s(6508).A+"",width:"1177",height:"622"})}),"\n",(0,t.jsx)(n.h1,{id:"aws-waf--web-application-firewall",children:"AWS WAF \u2013 Web Application Firewall"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Protects your web applications from common web exploits (Layer 7)"}),"\n",(0,t.jsx)(n.li,{children:"Layer 7 is HTTP (vs Layer 4 is TCP/UDP)"}),"\n",(0,t.jsx)(n.li,{children:"Deploy on\n\u2022 Application Load Balancer\n\u2022 API Gateway\n\u2022 CloudFront\n\u2022 AppSync GraphQL A\n\u2022 Cognito User Pool"}),"\n",(0,t.jsx)(n.li,{children:"Define Web ACL (Web Access Control List) Rules:\n\u2022 IP Set: up to 10,000 IP addresses \u2013 use multiple Rules for more IPs\n\u2022 HTTP headers, HTTP body, or URI strings Protects from common attack - SQL injection and Cross-Site Scripting (XSS)\n\u2022 Size constraints, geo-match (block countries)\n\u2022 Rate-based rules (to count occurrences of events) \u2013 for DDoS protection"}),"\n",(0,t.jsx)(n.li,{children:"Web ACL are Regional except for CloudFront"}),"\n",(0,t.jsx)(n.li,{children:"A rule group is a reusable set of rules that you can add to a web ACL"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"s3-object-lock-versioning-must-be-enabled",children:"S3 Object Lock (versioning must be enabled)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adopt a WORM (Write Once Read Many) model"}),"\n",(0,t.jsx)(n.li,{children:"Block an object version deletion for a specified amount of time"}),"\n",(0,t.jsx)(n.li,{children:"Retention mode - Compliance:\n\u2022 Object versions can't be overwritten or deleted by any user, including the root user\n\u2022 Objects retention modes can't be changed, and retention periods can't be shortened"}),"\n",(0,t.jsx)(n.li,{children:"Retention mode - Governance:\n\u2022 Most users can't overwrite or delete an object version or alter its lock settings\n\u2022 Some users have special permissions to change the retention or delete the object"}),"\n",(0,t.jsx)(n.li,{children:"Retention Period: protect the object for a fixed period, it can be extended"}),"\n",(0,t.jsxs)(n.li,{children:["Legal Hold:\n\u2022 protect the object indefinitely, independent from retention period\n\u2022 can be freely placed and removed using the s3",":PutObjectLegalHold"," IAM permission"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1979:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/img-0a2ef8b436efe80a8dc9a30a8251e903.png"},4615:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/img_1-5f7974ab2efe6dfecd58965c18447f95.png"},6508:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/img_2-2d1fb034c6ed41c4ad08d9641d4ec655.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);