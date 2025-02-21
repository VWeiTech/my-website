"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3135],{8453:(n,e,l)=>{l.d(e,{R:()=>i,x:()=>S});var s=l(6540);const r={},t=s.createContext(r);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function S(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(t.Provider,{value:e},n.children)}},9053:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>S,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>A});const s=JSON.parse('{"id":"AWS/AWS-SAA/AWS-SAA-CN/AWS_Snowball","title":"AWS Snowball","description":"AWS Snowball \u662f\u4e9a\u9a6c\u900a\u7f51\u7edc\u670d\u52a1\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u79cd\u8fb9\u7f18\u8ba1\u7b97\u548c\u6570\u636e\u4f20\u8f93\u8bbe\u5907\u53ca\u670d\u52a1\uff0c\u4ee5\u4e0b\u662f\u5177\u4f53\u4ecb\u7ecd\uff1a","source":"@site/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Snowball.md","sourceDirName":"AWS/AWS-SAA/AWS-SAA-CN","slug":"/AWS/AWS-SAA/AWS-SAA-CN/AWS_Snowball","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Snowball","draft":false,"unlisted":false,"editUrl":"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Snowball.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AWS Secrets Manager","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Secrets_Manager"},"next":{"title":"AWS Storage Gateway Tape Gateway","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Storage_Gateway_Tape_Gateway"}}');var r=l(4848),t=l(8453);const i={},S="AWS Snowball",o={},A=[{value:"\u8bbe\u5907\u5f62\u6001\u4e0e\u7c7b\u578b",id:"\u8bbe\u5907\u5f62\u6001\u4e0e\u7c7b\u578b",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2}];function a(n){const e={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"aws-snowball",children:"AWS Snowball"})}),"\n",(0,r.jsx)(e.p,{children:"AWS Snowball \u662f\u4e9a\u9a6c\u900a\u7f51\u7edc\u670d\u52a1\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u79cd\u8fb9\u7f18\u8ba1\u7b97\u548c\u6570\u636e\u4f20\u8f93\u8bbe\u5907\u53ca\u670d\u52a1\uff0c\u4ee5\u4e0b\u662f\u5177\u4f53\u4ecb\u7ecd\uff1a"}),"\n",(0,r.jsx)(e.h2,{id:"\u8bbe\u5907\u5f62\u6001\u4e0e\u7c7b\u578b",children:"\u8bbe\u5907\u5f62\u6001\u4e0e\u7c7b\u578b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Snowball Edge"}),"\uff1a\u662f\u4e00\u6b3e\u8fb9\u7f18\u8ba1\u7b97\u8bbe\u5907\uff0c\u5b83\u7ed3\u5408\u4e86\u8ba1\u7b97\u3001\u5b58\u50a8\u548c\u7f51\u7edc\u529f\u80fd\uff0c\u53ef\u5728\u8fb9\u7f18\u4f4d\u7f6e\u8fd0\u884c AWS Lambda \u51fd\u6570\u3001\u5bb9\u5668\u548c EC2\n\u5b9e\u4f8b\u7b49\u8ba1\u7b97\u4efb\u52a1\uff0c\u652f\u6301\u5728\u672c\u5730\u5904\u7406\u6570\u636e\uff0c\u51cf\u5c11\u5bf9\u4e91\u7684\u4f9d\u8d56\uff0c\u964d\u4f4e\u5ef6\u8fdf\u3002\u540c\u65f6\u5177\u5907\u6570\u636e\u5b58\u50a8\u529f\u80fd\uff0c\u80fd\u5728\u672c\u5730\u5b58\u50a8\u5927\u91cf\u6570\u636e\uff0c\u5e76\u53ef\u6839\u636e\u9700\u8981\u5c06\u6570\u636e\u4f20\u8f93\u5230\nAWS \u4e91\u4e2d\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Snowball"}),"\uff1a\u4e3b\u8981\u7528\u4e8e\u5927\u89c4\u6a21\u6570\u636e\u4f20\u8f93\uff0c\u662f\u4e00\u4e2a\u575a\u56fa\u7684\u3001\u53ef\u8fd0\u8f93\u7684\u8bbe\u5907\uff0c\u5177\u6709 PB \u7ea7\u7684\u5b58\u50a8\u5bb9\u91cf\uff0c\u7528\u4e8e\u5c06\u5927\u91cf\u6570\u636e\u4ece\u672c\u5730\u6570\u636e\u4e2d\u5fc3\u5feb\u901f\u3001\u9ad8\u6548\u5730\u4f20\u8f93\u5230\nAWS \u4e91\u4e2d\uff0c\u6216\u4ece AWS \u4e91\u4f20\u8f93\u5230\u672c\u5730\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u4f20\u8f93"}),"\uff1a\u7528\u6237\u5c06 Snowball \u8bbe\u5907\u8fde\u63a5\u5230\u672c\u5730\u7f51\u7edc\uff0c\u4f7f\u7528 AWS \u63d0\u4f9b\u7684 Snowball \u5ba2\u6237\u7aef\u8f6f\u4ef6\u5c06\u6570\u636e\u590d\u5236\u5230\u8bbe\u5907\u4e0a\u3002\u8bbe\u5907\u88c5\u6ee1\u6570\u636e\u540e\uff0c\u901a\u8fc7\u7269\u6d41\u65b9\u5f0f\u5bc4\u56de\nAWS \u6570\u636e\u4e2d\u5fc3\u3002\u5728 AWS \u6570\u636e\u4e2d\u5fc3\uff0c\u6570\u636e\u4f1a\u88ab\u5b89\u5168\u5730\u5bfc\u5165\u5230\u7528\u6237\u6307\u5b9a\u7684 AWS \u5b58\u50a8\u670d\u52a1\u4e2d\uff0c\u5982 Amazon S3\u3002\u4ece AWS \u4e91\u4f20\u8f93\u6570\u636e\u5230\u672c\u5730\u7684\u8fc7\u7a0b\u5219\u76f8\u53cd\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u8fb9\u7f18\u8ba1\u7b97"}),"\uff1aSnowball Edge \u8bbe\u5907\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\u8ba1\u7b97\u4efb\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u9884\u5148\u7f16\u5199\u597d\u7684\u8ba1\u7b97\u4ee3\u7801\uff08\u5982 Lambda \u51fd\u6570\u3001\u5bb9\u5668\u7b49\uff09\u90e8\u7f72\u5230\nSnowball Edge \u4e0a\u3002\u8bbe\u5907\u4f1a\u6839\u636e\u9884\u8bbe\u7684\u89c4\u5219\u548c\u89e6\u53d1\u6761\u4ef6\uff0c\u5728\u672c\u5730\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\u548c\u5206\u6790\uff0c\u7136\u540e\u53ef\u4ee5\u9009\u62e9\u5c06\u5904\u7406\u7ed3\u679c\u5b58\u50a8\u5728\u672c\u5730\u6216\u4f20\u8f93\u5230\nAWS \u4e91\u4e2d\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\u548c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ad8\u6548\u6570\u636e\u4f20\u8f93"}),"\uff1a\u76f8\u6bd4\u901a\u8fc7\u7f51\u7edc\u76f4\u63a5\u4f20\u8f93\u5927\u91cf\u6570\u636e\uff0cSnowball \u8bbe\u5907\u80fd\u591f\u663e\u8457\u7f29\u77ed\u6570\u636e\u4f20\u8f93\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5bf9\u4e8e\u5e26\u5bbd\u6709\u9650\u6216\u6570\u636e\u91cf\u6781\u5927\u7684\u60c5\u51b5\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6570\u636e\u8fc1\u79fb\u548c\u5907\u4efd\u7684\u6548\u7387\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u79bb\u7ebf\u6570\u636e\u5904\u7406"}),"\uff1aSnowball Edge \u652f\u6301\u5728\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\u6216\u7f51\u7edc\u8fde\u63a5\u4e0d\u7a33\u5b9a\u7684\u73af\u5883\u4e2d\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u786e\u4fdd\u4e1a\u52a1\u7684\u8fde\u7eed\u6027\u548c\u6570\u636e\u5904\u7406\u7684\u53ca\u65f6\u6027\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u5b89\u5168"}),"\uff1a\u8bbe\u5907\u91c7\u7528\u4e86\u591a\u5c42\u5b89\u5168\u9632\u62a4\u63aa\u65bd\uff0c\u5305\u62ec\u786c\u4ef6\u52a0\u5bc6\u3001\u6570\u636e\u64e6\u9664\u7b49\u529f\u80fd\uff0c\u786e\u4fdd\u6570\u636e\u5728\u4f20\u8f93\u548c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027\u548c\u4fdd\u5bc6\u6027\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7075\u6d3b\u53ef\u6269\u5c55"}),"\uff1a\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u4e0d\u540c\u89c4\u683c\u7684 Snowball \u8bbe\u5907\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u6570\u636e\u4f20\u8f93\u548c\u5904\u7406\u9700\u6c42\u3002\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u968f\u65f6\u589e\u52a0\u8bbe\u5907\u6570\u91cf\uff0c\u5b9e\u73b0\u7075\u6d3b\u6269\u5c55\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u8fc1\u79fb"}),"\uff1a\u4f01\u4e1a\u8fdb\u884c\u6570\u636e\u4e2d\u5fc3\u5347\u7ea7\u3001\u4e91\u8fc1\u79fb\u6216\u5927\u89c4\u6a21\u6570\u636e\u5907\u4efd\u65f6\uff0c\u53ef\u4f7f\u7528 Snowball \u5feb\u901f\u5c06\u5927\u91cf\u6570\u636e\u4f20\u8f93\u5230 AWS\n\u4e91\u4e2d\uff0c\u907f\u514d\u957f\u65f6\u95f4\u5360\u7528\u7f51\u7edc\u5e26\u5bbd\uff0c\u5f71\u54cd\u6b63\u5e38\u4e1a\u52a1\u8fd0\u884c\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u8fb9\u7f18\u6570\u636e\u5904\u7406"}),"\uff1a\u5728\u7269\u8054\u7f51\uff08IoT\uff09\u573a\u666f\u4e2d\uff0c\u5982\u5de5\u4e1a\u7269\u8054\u7f51\u3001\u667a\u80fd\u4ea4\u901a\u7b49\uff0cSnowball Edge\n\u53ef\u4ee5\u5728\u8fb9\u7f18\u8282\u70b9\u5bf9\u5927\u91cf\u7684\u4f20\u611f\u5668\u6570\u636e\u8fdb\u884c\u5b9e\u65f6\u5904\u7406\u548c\u5206\u6790\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u6210\u672c\u548c\u5ef6\u8fdf\uff0c\u63d0\u9ad8\u7cfb\u7edf\u7684\u54cd\u5e94\u901f\u5ea6\u548c\u6548\u7387\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u707e\u96be\u6062\u590d"}),"\uff1a\u5728\u707e\u96be\u53d1\u751f\u65f6\uff0cSnowball \u8bbe\u5907\u53ef\u4ee5\u4f5c\u4e3a\u79bb\u7ebf\u7684\u6570\u636e\u5b58\u50a8\u548c\u6062\u590d\u4ecb\u8d28\uff0c\u5feb\u901f\u5c06\u5907\u4efd\u6570\u636e\u4ece AWS \u4e91\u4f20\u8f93\u5230\u672c\u5730\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u6062\u590d\u4e1a\u52a1\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u504f\u8fdc\u5730\u533a\u6216\u7f51\u7edc\u53d7\u9650\u73af\u5883"}),"\uff1a\u5728\u504f\u8fdc\u5730\u533a\u3001\u6d77\u4e0a\u5e73\u53f0\u3001\u77ff\u5c71\u7b49\u7f51\u7edc\u57fa\u7840\u8bbe\u65bd\u4e0d\u5b8c\u5584\u6216\u7f51\u7edc\u8fde\u63a5\u4e0d\u7a33\u5b9a\u7684\u73af\u5883\u4e2d\uff0cSnowball Edge\n\u53ef\u4ee5\u4f5c\u4e3a\u672c\u5730\u7684\u8ba1\u7b97\u548c\u5b58\u50a8\u4e2d\u5fc3\uff0c\u652f\u6301\u672c\u5730\u4e1a\u52a1\u7684\u8fd0\u884c\u548c\u6570\u636e\u5904\u7406\u3002"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}}}]);