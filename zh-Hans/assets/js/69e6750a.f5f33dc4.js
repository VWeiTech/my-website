"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5544],{5228:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var a=i(4848),l=i(8453);const d={},t="Amazon EMR",r={id:"AWS/Amazon_EMR",title:"Amazon EMR",description:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",source:"@site/docs/AWS/Amazon_EMR.md",sourceDirName:"AWS",slug:"/AWS/Amazon_EMR",permalink:"/my-website/zh-Hans/docs/AWS/Amazon_EMR",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/Amazon_EMR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon EKS",permalink:"/my-website/zh-Hans/docs/AWS/Amazon_EKS"},next:{title:"Amazon Elastic Fabric Adapter",permalink:"/my-website/zh-Hans/docs/AWS/Amazon_Elastic_Fabric_Adapter"}},s={},c=[{value:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u96c6\u7fa4\u521b\u5efa\u4e0e\u914d\u7f6e",id:"\u96c6\u7fa4\u521b\u5efa\u4e0e\u914d\u7f6e",level:3},{value:"\u6570\u636e\u5b58\u50a8\u4e0e\u8bbf\u95ee",id:"\u6570\u636e\u5b58\u50a8\u4e0e\u8bbf\u95ee",level:3},{value:"\u4f5c\u4e1a\u6267\u884c",id:"\u4f5c\u4e1a\u6267\u884c",level:3},{value:"\u96c6\u7fa4\u7ba1\u7406\u4e0e\u76d1\u63a7",id:"\u96c6\u7fa4\u7ba1\u7406\u4e0e\u76d1\u63a7",level:3},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u9ad8\u53ef\u6269\u5c55\u6027",id:"\u9ad8\u53ef\u6269\u5c55\u6027",level:3},{value:"\u96c6\u6210\u6027\u4e0e\u517c\u5bb9\u6027",id:"\u96c6\u6210\u6027\u4e0e\u517c\u5bb9\u6027",level:3},{value:"\u6210\u672c\u6548\u76ca",id:"\u6210\u672c\u6548\u76ca",level:3},{value:"\u5b89\u5168\u6027",id:"\u5b89\u5168\u6027",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5927\u6570\u636e\u5206\u6790",id:"\u5927\u6570\u636e\u5206\u6790",level:3},{value:"\u673a\u5668\u5b66\u4e60\u4e0e\u6df1\u5ea6\u5b66\u4e60",id:"\u673a\u5668\u5b66\u4e60\u4e0e\u6df1\u5ea6\u5b66\u4e60",level:3},{value:"\u6570\u636e\u4ed3\u5e93\u4e0e\u5546\u4e1a\u667a\u80fd",id:"\u6570\u636e\u4ed3\u5e93\u4e0e\u5546\u4e1a\u667a\u80fd",level:3},{value:"\u5b9e\u65f6\u6570\u636e\u5904\u7406",id:"\u5b9e\u65f6\u6570\u636e\u5904\u7406",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"amazon-emr",children:"Amazon EMR"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",children:"\u5b9a\u4e49\u4e0e\u6982\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Amazon Elastic MapReduce\uff08Amazon EMR\uff09\u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u5b8c\u5168\u6258\u7ba1\u7684\u5927\u6570\u636e\u5904\u7406\u670d\u52a1\uff0c\u5b83\u53ef\u4ee5\u8ba9\u7528\u6237\u8f7b\u677e\u5730\u5728 AWS\n\u4e91\u4e0a\u8fd0\u884c\u5927\u89c4\u6a21\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5904\u7406\u6846\u67b6\uff0c\u5982 Apache Hadoop\u3001Apache Spark\u3001Apache Hive\u3001Apache Pig \u7b49\uff0c\u4ece\u800c\u9ad8\u6548\u5730\u5904\u7406\u548c\u5206\u6790\u6d77\u91cf\u6570\u636e\u3002\u901a\u8fc7\nEMR\uff0c\u7528\u6237\u65e0\u9700\u62c5\u5fc3\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u7684\u642d\u5efa\u3001\u914d\u7f6e\u548c\u7ba1\u7406\uff0c\u53ea\u9700\u4e13\u6ce8\u4e8e\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u4efb\u52a1\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,a.jsx)(n.h3,{id:"\u96c6\u7fa4\u521b\u5efa\u4e0e\u914d\u7f6e",children:"\u96c6\u7fa4\u521b\u5efa\u4e0e\u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u3001AWS CLI \u6216 AWS SDK \u521b\u5efa EMR \u96c6\u7fa4\u3002\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u96c6\u7fa4\u7684\u89c4\u6a21\uff08\u8282\u70b9\u6570\u91cf\u548c\u5b9e\u4f8b\u7c7b\u578b\uff09\u3001\u8981\u5b89\u88c5\u7684\u8f6f\u4ef6\uff08\u5982\nHadoop\u3001Spark \u7b49\uff09\u4ee5\u53ca\u5b58\u50a8\u4f4d\u7f6e\uff08\u5982 Amazon S3 \u6216 Amazon EBS\uff09\u7b49\u53c2\u6570\u3002AWS \u4f1a\u6839\u636e\u7528\u6237\u7684\u914d\u7f6e\u81ea\u52a8\u542f\u52a8\u548c\u914d\u7f6e\u6240\u9700\u7684 EC2\n\u5b9e\u4f8b\uff0c\u5e76\u5b89\u88c5\u548c\u90e8\u7f72\u76f8\u5e94\u7684\u8f6f\u4ef6\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636e\u5b58\u50a8\u4e0e\u8bbf\u95ee",children:"\u6570\u636e\u5b58\u50a8\u4e0e\u8bbf\u95ee"}),"\n",(0,a.jsx)(n.p,{children:"EMR \u652f\u6301\u591a\u79cd\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c\u6700\u5e38\u7528\u7684\u662f Amazon S3\u3002\u7528\u6237\u53ef\u4ee5\u5c06\u6570\u636e\u5b58\u50a8\u5728 S3 \u6876\u4e2d\uff0cEMR \u96c6\u7fa4\u53ef\u4ee5\u76f4\u63a5\u4ece S3 \u8bfb\u53d6\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u5c06\u5904\u7406\u7ed3\u679c\u5199\u56de\u5230\nS3 \u4e2d\u3002\u6b64\u5916\uff0cEMR \u4e5f\u652f\u6301\u4f7f\u7528 Amazon EBS \u5377\u8fdb\u884c\u672c\u5730\u6570\u636e\u5b58\u50a8\uff0c\u9002\u7528\u4e8e\u5bf9\u6570\u636e\u8bfb\u5199\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\u7684\u573a\u666f\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4f5c\u4e1a\u6267\u884c",children:"\u4f5c\u4e1a\u6267\u884c"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u5c06\u7f16\u5199\u597d\u7684\u6570\u636e\u5904\u7406\u4f5c\u4e1a\uff08\u5982 MapReduce \u4f5c\u4e1a\u3001Spark \u4f5c\u4e1a\u7b49\uff09\u63d0\u4ea4\u5230 EMR \u96c6\u7fa4\u4e2d\u6267\u884c\u3002\u4f5c\u4e1a\u53ef\u4ee5\u662f\u7528 Java\u3001Python\u3001Scala\n\u7b49\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u662f SQL \u67e5\u8be2\u8bed\u53e5\uff08\u5982 Hive \u67e5\u8be2\uff09\u3002EMR \u4f1a\u6839\u636e\u4f5c\u4e1a\u7684\u7c7b\u578b\u548c\u8d44\u6e90\u9700\u6c42\uff0c\u81ea\u52a8\u5c06\u4f5c\u4e1a\u5206\u914d\u5230\u96c6\u7fa4\u4e2d\u7684\u5404\u4e2a\u8282\u70b9\u4e0a\u5e76\u884c\u6267\u884c\uff0c\u4ee5\u63d0\u9ad8\u5904\u7406\u6548\u7387\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u96c6\u7fa4\u7ba1\u7406\u4e0e\u76d1\u63a7",children:"\u96c6\u7fa4\u7ba1\u7406\u4e0e\u76d1\u63a7"}),"\n",(0,a.jsx)(n.p,{children:"AWS \u4f1a\u81ea\u52a8\u7ba1\u7406 EMR \u96c6\u7fa4\u7684\u751f\u547d\u5468\u671f\uff0c\u5305\u62ec\u8282\u70b9\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u6269\u5c55\u548c\u6536\u7f29\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u6216 AWS CloudWatch\n\u76d1\u63a7\u96c6\u7fa4\u7684\u8fd0\u884c\u72b6\u6001\u3001\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u548c\u4f5c\u4e1a\u6267\u884c\u8fdb\u5ea6\u3002\u5982\u679c\u9700\u8981\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u52a8\u6001\u8c03\u6574\u96c6\u7fa4\u7684\u89c4\u6a21\uff0c\u4ee5\u4f18\u5316\u6210\u672c\u548c\u6027\u80fd\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,a.jsx)(n.h3,{id:"\u9ad8\u53ef\u6269\u5c55\u6027",children:"\u9ad8\u53ef\u6269\u5c55\u6027"}),"\n",(0,a.jsx)(n.p,{children:"EMR \u53ef\u4ee5\u6839\u636e\u7528\u6237\u7684\u6570\u636e\u5904\u7406\u9700\u6c42\u8f7b\u677e\u6269\u5c55\u96c6\u7fa4\u7684\u89c4\u6a21\u3002\u7528\u6237\u53ef\u4ee5\u5728\u51e0\u5206\u949f\u5185\u6dfb\u52a0\u6216\u51cf\u5c11\u8282\u70b9\uff0c\u4ee5\u5904\u7406\u4e0d\u540c\u89c4\u6a21\u7684\u6570\u636e\u91cf\uff0c\u65e0\u8bba\u662f\u5904\u7406 TB\n\u7ea7\u8fd8\u662f PB \u7ea7\u7684\u6570\u636e\u90fd\u80fd\u5e94\u5bf9\u81ea\u5982\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u96c6\u6210\u6027\u4e0e\u517c\u5bb9\u6027",children:"\u96c6\u6210\u6027\u4e0e\u517c\u5bb9\u6027"}),"\n",(0,a.jsx)(n.p,{children:"EMR \u4e0e\u591a\u79cd AWS \u670d\u52a1\u6df1\u5ea6\u96c6\u6210\uff0c\u5982 Amazon S3\u3001Amazon DynamoDB\u3001Amazon Redshift\n\u7b49\u3002\u540c\u65f6\uff0c\u5b83\u652f\u6301\u591a\u79cd\u5f00\u6e90\u5927\u6570\u636e\u6846\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u719f\u6089\u7684\u5de5\u5177\u548c\u6280\u672f\u8fdb\u884c\u6570\u636e\u5904\u7406\u548c\u5206\u6790\uff0c\u65e0\u9700\u8fdb\u884c\u5927\u89c4\u6a21\u7684\u6280\u672f\u8fc1\u79fb\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6210\u672c\u6548\u76ca",children:"\u6210\u672c\u6548\u76ca"}),"\n",(0,a.jsx)(n.p,{children:"\u91c7\u7528\u6309\u9700\u4ed8\u8d39\u7684\u6a21\u5f0f\uff0c\u7528\u6237\u53ea\u9700\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684\u8d44\u6e90\u4ed8\u8d39\uff0c\u65e0\u9700\u8fdb\u884c\u5927\u91cf\u7684\u524d\u671f\u786c\u4ef6\u6295\u8d44\u3002\u6b64\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u7684\u6d41\u91cf\u9ad8\u5cf0\u548c\u4f4e\u8c37\u52a8\u6001\u8c03\u6574\u96c6\u7fa4\u89c4\u6a21\uff0c\u907f\u514d\u8d44\u6e90\u6d6a\u8d39\uff0c\u964d\u4f4e\u6210\u672c\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5b89\u5168\u6027",children:"\u5b89\u5168\u6027"}),"\n",(0,a.jsx)(n.p,{children:"EMR \u4e0e AWS Identity and Access Management\uff08IAM\uff09\u96c6\u6210\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 IAM \u7b56\u7565\u6765\u63a7\u5236\u5bf9\u96c6\u7fa4\u548c\u6570\u636e\u7684\u8bbf\u95ee\u6743\u9650\u3002\u540c\u65f6\uff0c\u652f\u6301\u6570\u636e\u52a0\u5bc6\uff0c\u786e\u4fdd\u6570\u636e\u5728\u5b58\u50a8\u548c\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,a.jsx)(n.h3,{id:"\u5927\u6570\u636e\u5206\u6790",children:"\u5927\u6570\u636e\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u5904\u7406\u548c\u5206\u6790\u6d77\u91cf\u7684\u7ed3\u6784\u5316\u548c\u975e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u65e5\u5fd7\u6587\u4ef6\u3001\u793e\u4ea4\u5a92\u4f53\u6570\u636e\u3001\u4f20\u611f\u5668\u6570\u636e\u7b49\u3002\u901a\u8fc7 EMR \u53ef\u4ee5\u8fdb\u884c\u6570\u636e\u6e05\u6d17\u3001\u8f6c\u6362\u3001\u805a\u5408\u548c\u6316\u6398\u7b49\u64cd\u4f5c\uff0c\u63d0\u53d6\u6709\u4ef7\u503c\u7684\u4fe1\u606f\u548c\u6d1e\u5bdf\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u673a\u5668\u5b66\u4e60\u4e0e\u6df1\u5ea6\u5b66\u4e60",children:"\u673a\u5668\u5b66\u4e60\u4e0e\u6df1\u5ea6\u5b66\u4e60"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 EMR \u4e0a\u7684 Apache Spark \u6216\u5176\u4ed6\u673a\u5668\u5b66\u4e60\u6846\u67b6\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\u548c\u9884\u6d4b\u3002\u4f8b\u5982\uff0c\u5bf9\u5ba2\u6237\u6570\u636e\u8fdb\u884c\u5206\u7c7b\u548c\u805a\u7c7b\u5206\u6790\uff0c\u4e3a\u5e02\u573a\u8425\u9500\u548c\u5ba2\u6237\u670d\u52a1\u63d0\u4f9b\u652f\u6301\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636e\u4ed3\u5e93\u4e0e\u5546\u4e1a\u667a\u80fd",children:"\u6570\u636e\u4ed3\u5e93\u4e0e\u5546\u4e1a\u667a\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06 EMR \u4e0e Amazon Redshift \u7b49\u6570\u636e\u4ed3\u5e93\u670d\u52a1\u7ed3\u5408\u4f7f\u7528\uff0c\u8fdb\u884c\u6570\u636e\u4ed3\u5e93\u7684\u6784\u5efa\u548c\u6570\u636e\u5206\u6790\u3002\u901a\u8fc7 EMR\n\u53ef\u4ee5\u5bf9\u539f\u59cb\u6570\u636e\u8fdb\u884c\u9884\u5904\u7406\u548c\u8f6c\u6362\uff0c\u7136\u540e\u52a0\u8f7d\u5230\u6570\u636e\u4ed3\u5e93\u4e2d\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5206\u6790\u548c\u53ef\u89c6\u5316\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5b9e\u65f6\u6570\u636e\u5904\u7406",children:"\u5b9e\u65f6\u6570\u636e\u5904\u7406"}),"\n",(0,a.jsx)(n.p,{children:"\u5229\u7528 EMR \u4e0a\u7684 Apache Kafka\u3001Apache Flink \u7b49\u5b9e\u65f6\u6570\u636e\u5904\u7406\u6846\u67b6\uff0c\u5bf9\u5b9e\u65f6\u6570\u636e\u6d41\u8fdb\u884c\u5904\u7406\u548c\u5206\u6790\u3002\u4f8b\u5982\uff0c\u5b9e\u65f6\u76d1\u63a7\u7f51\u7ad9\u7684\u8bbf\u95ee\u6d41\u91cf\u3001\u91d1\u878d\u4ea4\u6613\u6570\u636e\u7b49\uff0c\u53ca\u65f6\u53d1\u73b0\u5f02\u5e38\u60c5\u51b5\u5e76\u505a\u51fa\u54cd\u5e94\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var a=i(6540);const l={},d=a.createContext(l);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);