"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7685],{5581:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var n=s(4848),t=s(8453);const l={title:"\u914d\u7f6eMSK\u4ea4\u4e92\u76f8\u5173\u7684\u73af\u5883"},i=void 0,r={id:"AWS/20241218",title:"\u914d\u7f6eMSK\u4ea4\u4e92\u76f8\u5173\u7684\u73af\u5883",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/AWS/20241218.md",sourceDirName:"AWS",slug:"/AWS/20241218",permalink:"/my-website/docs/AWS/20241218",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/20241218.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6eMSK\u4ea4\u4e92\u76f8\u5173\u7684\u73af\u5883"},sidebar:"tutorialSidebar",next:{title:"AWS-SAA \u5b66\u4e60\u7b14\u8bb0",permalink:"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/20250210"}},c={},o=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u5b89\u88c5Java",id:"\u5b89\u88c5java",level:4},{value:"\u4e0b\u8f7dKafka",id:"\u4e0b\u8f7dkafka",level:4},{value:"\u4e0b\u8f7dAWS MSK\u62d3\u5c55\u5e93",id:"\u4e0b\u8f7daws-msk\u62d3\u5c55\u5e93",level:4},{value:"\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u914d\u7f6e",id:"\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u914d\u7f6e",level:4},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:4}];function d(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h3,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,n.jsx)(a.h4,{id:"\u5b89\u88c5java",children:"\u5b89\u88c5Java"}),"\n",(0,n.jsx)(a.p,{children:"brew install openjdk"}),"\n",(0,n.jsx)(a.h4,{id:"\u4e0b\u8f7dkafka",children:"\u4e0b\u8f7dKafka"}),"\n",(0,n.jsx)(a.p,{children:"brew install kafka"}),"\n",(0,n.jsx)(a.h4,{id:"\u4e0b\u8f7daws-msk\u62d3\u5c55\u5e93",children:"\u4e0b\u8f7dAWS MSK\u62d3\u5c55\u5e93"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"wget https://github.com/aws/aws-msk-iam-auth/releases/download/v1.1.1/aws-msk-iam-auth-1.1.1-all.jar\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u79fb\u52a8\u5230\u4e0b\u8f7d\u7684 Kafka \u7684\u76ee\u5f55\u4e0b\u7684 libs \u76ee\u5f55\u4e0b\u9762"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"mv aws-msk-iam-auth-1.1.1-all.jar ./kafka_2.13-3.5.1/libs/\n"})}),"\n",(0,n.jsx)(a.h4,{id:"\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u914d\u7f6e",children:"\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u914d\u7f6e"}),"\n",(0,n.jsx)(a.p,{children:"\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982\uff1aclient.properties"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:"    bootstrap.servers=localhost:9098\n    security.protocol=SASL_SSL\n    sasl.mechanism=AWS_MSK_IAM\n    sasl.jaas.config=software.amazon.msk.auth.iam.IAMLoginModule required;\n    sasl.client.callback.handler.class=software.amazon.msk.auth.iam.IAMClientCallbackHandler\n"})}),"\n",(0,n.jsx)(a.h4,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/msk/latest/developerguide/create-topic.html",children:"https://docs.aws.amazon.com/msk/latest/developerguide/create-topic.html"})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var n=s(6540);const t={},l=n.createContext(t);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);