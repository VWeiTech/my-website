"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8731],{490:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=l(4848),r=l(8453);const s={},d="Amazon CloudFront",o={id:"AWS/Amazon_CloudFront",title:"Amazon CloudFront",description:"\u5b9a\u4e49\u4e0e\u57fa\u672c\u6982\u5ff5",source:"@site/docs/AWS/Amazon_CloudFront.md",sourceDirName:"AWS",slug:"/AWS/Amazon_CloudFront",permalink:"/my-website/docs/AWS/Amazon_CloudFront",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/Amazon_CloudFront.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Aurora Global Database",permalink:"/my-website/docs/AWS/Amazon_Aurora_Global_Database"},next:{title:"Amazon EBS\uff08Elastic Block Store\uff09General Purpose SSD",permalink:"/my-website/docs/AWS/Amazon_EBS_General_Purpose_SSD"}},t={},c=[{value:"\u5b9a\u4e49\u4e0e\u57fa\u672c\u6982\u5ff5",id:"\u5b9a\u4e49\u4e0e\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:3},{value:"1. \u5185\u5bb9\u6e90",id:"1-\u5185\u5bb9\u6e90",level:4},{value:"2. \u5206\u53d1\u521b\u5efa",id:"2-\u5206\u53d1\u521b\u5efa",level:4},{value:"3. \u8fb9\u7f18\u8282\u70b9\u7f13\u5b58",id:"3-\u8fb9\u7f18\u8282\u70b9\u7f13\u5b58",level:4},{value:"4. \u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0",id:"4-\u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0",level:4},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:3},{value:"1. \u6027\u80fd\u63d0\u5347",id:"1-\u6027\u80fd\u63d0\u5347",level:4},{value:"2. \u5b89\u5168\u6027\u589e\u5f3a",id:"2-\u5b89\u5168\u6027\u589e\u5f3a",level:4},{value:"3. \u5168\u7403\u8986\u76d6",id:"3-\u5168\u7403\u8986\u76d6",level:4},{value:"4. \u6210\u672c\u6548\u76ca",id:"4-\u6210\u672c\u6548\u76ca",level:4},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"1. \u7f51\u7ad9\u52a0\u901f",id:"1-\u7f51\u7ad9\u52a0\u901f",level:4},{value:"2. \u5a92\u4f53\u5185\u5bb9\u5206\u53d1",id:"2-\u5a92\u4f53\u5185\u5bb9\u5206\u53d1",level:4},{value:"3. \u79fb\u52a8\u5e94\u7528\u5206\u53d1",id:"3-\u79fb\u52a8\u5e94\u7528\u5206\u53d1",level:4},{value:"4. API \u52a0\u901f",id:"4-api-\u52a0\u901f",level:4}];function h(n){const e={h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"amazon-cloudfront",children:"Amazon CloudFront"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5b9a\u4e49\u4e0e\u57fa\u672c\u6982\u5ff5",children:"\u5b9a\u4e49\u4e0e\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(e.p,{children:"Amazon CloudFront \u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63a8\u51fa\u7684\u4e00\u9879\u5feb\u901f\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff08CDN\uff09\u670d\u52a1\u3002\u5b83\u80fd\u5b89\u5168\u5730\u4ee5\u4f4e\u5ef6\u8fdf\u3001\u9ad8\u4f20\u8f93\u901f\u5ea6\u5411\u5168\u7403\u7528\u6237\u5206\u53d1\u6570\u636e\u3001\u89c6\u9891\u3001\u5e94\u7528\u7a0b\u5e8f\u53ca\nAPI \u7b49\u5185\u5bb9\u3002\u501f\u52a9 CloudFront\uff0c\u5f00\u53d1\u8005\u548c\u4f01\u4e1a\u80fd\u591f\u8f7b\u677e\u5730\u5c06\u5185\u5bb9\u7f13\u5b58\u5230\u79bb\u7528\u6237\u66f4\u8fd1\u7684\u4f4d\u7f6e\uff0c\u4ece\u800c\u663e\u8457\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,i.jsx)(e.h4,{id:"1-\u5185\u5bb9\u6e90",children:"1. \u5185\u5bb9\u6e90"}),"\n",(0,i.jsx)(e.p,{children:"\u5185\u5bb9\u6e90\u662f\u6307\u5b58\u50a8\u539f\u59cb\u5185\u5bb9\u7684\u5730\u65b9\u3002\u5b83\u53ef\u4ee5\u662f\u591a\u79cd\u5f62\u5f0f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Amazon S3 \u5b58\u50a8\u6876"}),"\uff1a\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u5185\u5bb9\u6e90\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u9759\u6001\u7f51\u7ad9\u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u5b58\u50a8\u5728 S3 \u4e2d\uff0c\u7136\u540e\u901a\u8fc7 CloudFront \u8fdb\u884c\u5206\u53d1\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Amazon EC2 \u5b9e\u4f8b"}),"\uff1a\u8fd0\u884c\u5728 EC2 \u4e0a\u7684 Web \u670d\u52a1\u5668\u53ef\u4ee5\u4f5c\u4e3a\u5185\u5bb9\u6e90\uff0c\u4e3a CloudFront \u63d0\u4f9b\u52a8\u6001\u5185\u5bb9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49 HTTP \u670d\u52a1\u5668"}),"\uff1a\u4f01\u4e1a\u81ea\u5df1\u642d\u5efa\u7684\u4f4d\u4e8e\u6570\u636e\u4e2d\u5fc3\u6216\u5176\u4ed6\u4e91\u5e73\u53f0\u7684\u670d\u52a1\u5668\u4e5f\u80fd\u4f5c\u4e3a\u5185\u5bb9\u6e90\uff0c\u53ea\u8981\u8be5\u670d\u52a1\u5668\u53ef\u4ee5\u901a\u8fc7 HTTP \u6216 HTTPS\n\u534f\u8bae\u63d0\u4f9b\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-\u5206\u53d1\u521b\u5efa",children:"2. \u5206\u53d1\u521b\u5efa"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u6237\u9700\u8981\u5728 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u3001AWS CLI \u6216\u4f7f\u7528 AWS SDK \u521b\u5efa CloudFront \u5206\u53d1\u3002\u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u5173\u952e\u4fe1\u606f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6e90\u670d\u52a1\u5668"}),"\uff1a\u5373\u524d\u9762\u63d0\u5230\u7684\u5185\u5bb9\u6e90\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f13\u5b58\u884c\u4e3a"}),"\uff1a\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u7f13\u5b58\u89c4\u5219\uff0c\u4f8b\u5982\u54ea\u4e9b\u6587\u4ef6\u9700\u8981\u7f13\u5b58\u3001\u7f13\u5b58\u7684\u65f6\u95f4\u7b49\u3002\u5bf9\u4e8e\u9759\u6001\u5185\u5bb9\uff0c\u5982\u56fe\u7247\u548c CSS\n\u6587\u4ef6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8f83\u957f\u7684\u7f13\u5b58\u65f6\u95f4\uff1b\u800c\u5bf9\u4e8e\u52a8\u6001\u5185\u5bb9\uff0c\u7f13\u5b58\u65f6\u95f4\u53ef\u4ee5\u8bbe\u7f6e\u5f97\u8f83\u77ed\u6216\u8005\u4e0d\u7f13\u5b58\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u57df\u540d\u548c\u8bc1\u4e66"}),"\uff1a\u53ef\u4ee5\u4e3a\u5206\u53d1\u6307\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u5e76\u914d\u7f6e SSL/TLS \u8bc1\u4e66\u4ee5\u5b9e\u73b0 HTTPS \u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"3-\u8fb9\u7f18\u8282\u70b9\u7f13\u5b58",children:"3. \u8fb9\u7f18\u8282\u70b9\u7f13\u5b58"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CloudFront \u5728\u5168\u7403\u5404\u5730\u62e5\u6709\u4f17\u591a\u7684\u8fb9\u7f18\u8282\u70b9\uff08Edge Location\uff09\u3002\u5f53\u7528\u6237\u8bf7\u6c42\u5185\u5bb9\u65f6\uff0cCloudFront \u4f1a\u5c06\u8bf7\u6c42\u8def\u7531\u5230\u79bb\u7528\u6237\u6700\u8fd1\u7684\u8fb9\u7f18\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u8be5\u8fb9\u7f18\u8282\u70b9\u5df2\u7ecf\u7f13\u5b58\u4e86\u6240\u8bf7\u6c42\u7684\u5185\u5bb9\uff0c\u5c31\u4f1a\u76f4\u63a5\u5c06\u5185\u5bb9\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u4e86\u54cd\u5e94\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u7528\u6237\u5728\u6b27\u6d32\u8bbf\u95ee\u4e00\u4e2a\u7531\u7f8e\u56fd\u670d\u52a1\u5668\u63d0\u4f9b\u7684\u56fe\u7247\uff0c\u5982\u679c\u6b27\u6d32\u7684\u8fb9\u7f18\u8282\u70b9\u6709\u8be5\u56fe\u7247\u7684\u7f13\u5b58\uff0c\u5c31\u65e0\u9700\u4ece\u7f8e\u56fd\u7684\u6e90\u670d\u52a1\u5668\u83b7\u53d6\uff0c\u800c\u662f\u76f4\u63a5\u4ece\u6b27\u6d32\u672c\u5730\u7684\u8fb9\u7f18\u8282\u70b9\u83b7\u53d6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u8fb9\u7f18\u8282\u70b9\u6ca1\u6709\u7f13\u5b58\u8be5\u5185\u5bb9\uff0c\u5b83\u4f1a\u4ece\u6e90\u670d\u52a1\u5668\u83b7\u53d6\u5185\u5bb9\uff0c\u5c06\u5176\u7f13\u5b58\u5230\u672c\u5730\uff0c\u7136\u540e\u518d\u8fd4\u56de\u7ed9\u7528\u6237\u3002\u540e\u7eed\u518d\u6709\u5176\u4ed6\u7528\u6237\u8bf7\u6c42\u76f8\u540c\u5185\u5bb9\u65f6\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4ece\u8be5\u8fb9\u7f18\u8282\u70b9\u83b7\u53d6\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"4-\u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0",children:"4. \u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f53\u6e90\u670d\u52a1\u5668\u4e0a\u7684\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u7f13\u5b58\u4e5f\u80fd\u53ca\u65f6\u66f4\u65b0\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5931\u6548\u8bf7\u6c42\u6765\u4f7f\u7279\u5b9a\u7684\u7f13\u5b58\u9879\u5931\u6548\u3002\u5931\u6548\u8bf7\u6c42\u4f1a\u901a\u77e5\nCloudFront \u8fb9\u7f18\u8282\u70b9\uff0c\u8ba9\u5b83\u4eec\u4e0d\u518d\u4f7f\u7528\u65e7\u7684\u7f13\u5b58\u5185\u5bb9\uff0c\u800c\u662f\u4ece\u6e90\u670d\u52a1\u5668\u91cd\u65b0\u83b7\u53d6\u6700\u65b0\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,i.jsx)(e.h4,{id:"1-\u6027\u80fd\u63d0\u5347",children:"1. \u6027\u80fd\u63d0\u5347"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4f4e\u5ef6\u8fdf"}),"\uff1a\u901a\u8fc7\u5c06\u5185\u5bb9\u7f13\u5b58\u5230\u79bb\u7528\u6237\u8fd1\u7684\u8fb9\u7f18\u8282\u70b9\uff0c\u51cf\u5c11\u4e86\u6570\u636e\u4f20\u8f93\u7684\u8ddd\u79bb\u548c\u65f6\u95f4\uff0c\u4ece\u800c\u663e\u8457\u964d\u4f4e\u4e86\u7528\u6237\u8bbf\u95ee\u5185\u5bb9\u7684\u5ef6\u8fdf\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5168\u7403\u6027\u7684\u7535\u5546\u7f51\u7ad9\uff0c\u4f7f\u7528\nCloudFront \u53ef\u4ee5\u8ba9\u4e0d\u540c\u5730\u533a\u7684\u7528\u6237\u5feb\u901f\u52a0\u8f7d\u5546\u54c1\u56fe\u7247\u548c\u9875\u9762\uff0c\u63d0\u5347\u8d2d\u7269\u4f53\u9a8c\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9ad8\u5e26\u5bbd"}),"\uff1aCloudFront \u5177\u5907\u5f3a\u5927\u7684\u5e26\u5bbd\u80fd\u529b\uff0c\u80fd\u591f\u5e94\u5bf9\u9ad8\u6d41\u91cf\u7684\u8bbf\u95ee\u9700\u6c42\u3002\u5728\u4fc3\u9500\u6d3b\u52a8\u7b49\u6d41\u91cf\u9ad8\u5cf0\u65f6\u671f\uff0c\u4e5f\u80fd\u4fdd\u8bc1\u5185\u5bb9\u7684\u5feb\u901f\u5206\u53d1\uff0c\u907f\u514d\u7f51\u7ad9\u51fa\u73b0\u5361\u987f\u6216\u65e0\u6cd5\u8bbf\u95ee\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-\u5b89\u5168\u6027\u589e\u5f3a",children:"2. \u5b89\u5168\u6027\u589e\u5f3a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"DDoS \u9632\u62a4"}),"\uff1aCloudFront \u5185\u7f6e\u4e86\u5206\u5e03\u5f0f\u62d2\u7edd\u670d\u52a1\uff08DDoS\uff09\u653b\u51fb\u9632\u62a4\u673a\u5236\uff0c\u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\u548c\u7f13\u89e3 DDoS \u653b\u51fb\uff0c\u4fdd\u62a4\u6e90\u670d\u52a1\u5668\u514d\u53d7\u653b\u51fb\u5f71\u54cd\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"SSL/TLS \u52a0\u5bc6"}),"\uff1a\u652f\u6301 HTTPS \u534f\u8bae\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u914d\u7f6e SSL/TLS \u8bc1\u4e66\uff0c\u786e\u4fdd\u5185\u5bb9\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027\u548c\u5b8c\u6574\u6027\uff0c\u4fdd\u62a4\u7528\u6237\u6570\u636e\u4e0d\u88ab\u7a83\u53d6\u6216\u7be1\u6539\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"3-\u5168\u7403\u8986\u76d6",children:"3. \u5168\u7403\u8986\u76d6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5e7f\u6cdb\u7684\u8fb9\u7f18\u8282\u70b9\u5206\u5e03\u5728\u5168\u7403\u5404\u5730\uff0c\u80fd\u591f\u4e3a\u5168\u7403\u8303\u56f4\u5185\u7684\u7528\u6237\u63d0\u4f9b\u670d\u52a1\u3002\u65e0\u8bba\u7528\u6237\u8eab\u5904\u4f55\u5730\uff0c\u90fd\u80fd\u5feb\u901f\u8bbf\u95ee\u5185\u5bb9\uff0c\u6ee1\u8db3\u5168\u7403\u5316\u4e1a\u52a1\u7684\u9700\u6c42\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"4-\u6210\u672c\u6548\u76ca",children:"4. \u6210\u672c\u6548\u76ca"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u91c7\u7528\u6309\u4f7f\u7528\u91cf\u4ed8\u8d39\u7684\u6a21\u5f0f\uff0c\u7528\u6237\u53ea\u9700\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684\u6d41\u91cf\u548c\u670d\u52a1\u4ed8\u8d39\u3002\u540c\u65f6\uff0c\u7531\u4e8e CloudFront \u80fd\u591f\u51cf\u5c11\u6e90\u670d\u52a1\u5668\u7684\u8d1f\u8f7d\uff0c\u964d\u4f4e\u4e86\u6e90\u670d\u52a1\u5668\u7684\u5e26\u5bbd\u548c\u8ba1\u7b97\u6210\u672c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,i.jsx)(e.h4,{id:"1-\u7f51\u7ad9\u52a0\u901f",children:"1. \u7f51\u7ad9\u52a0\u901f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u5404\u7c7b\u7f51\u7ad9\uff0c\u5305\u62ec\u4f01\u4e1a\u5b98\u7f51\u3001\u65b0\u95fb\u7f51\u7ad9\u3001\u7535\u5546\u7f51\u7ad9\u7b49\uff0cCloudFront \u53ef\u4ee5\u52a0\u901f\u7f51\u9875\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u63d0\u9ad8\u7528\u6237\u7559\u5b58\u7387\u548c\u8f6c\u5316\u7387\u3002\u4f8b\u5982\uff0c\u7535\u5546\u7f51\u7ad9\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u7684\u63d0\u5347\u53ef\u4ee5\u51cf\u5c11\u7528\u6237\u6d41\u5931\uff0c\u589e\u52a0\u9500\u552e\u673a\u4f1a\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"2-\u5a92\u4f53\u5185\u5bb9\u5206\u53d1",children:"2. \u5a92\u4f53\u5185\u5bb9\u5206\u53d1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9002\u7528\u4e8e\u89c6\u9891\u3001\u97f3\u9891\u7b49\u5a92\u4f53\u5185\u5bb9\u7684\u5206\u53d1\u3002\u89c6\u9891\u7f51\u7ad9\u53ef\u4ee5\u4f7f\u7528 CloudFront \u5feb\u901f\u5c06\u89c6\u9891\u5185\u5bb9\u5206\u53d1\u7ed9\u5168\u7403\u7528\u6237\uff0c\u652f\u6301\u9ad8\u6e05\u89c6\u9891\u7684\u6d41\u7545\u64ad\u653e\uff0c\u51cf\u5c11\u7f13\u51b2\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"3-\u79fb\u52a8\u5e94\u7528\u5206\u53d1",children:"3. \u79fb\u52a8\u5e94\u7528\u5206\u53d1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u79fb\u52a8\u5e94\u7528\u5f00\u53d1\u8005\u53ef\u4ee5\u5229\u7528 CloudFront \u5206\u53d1\u5e94\u7528\u7a0b\u5e8f\u7684\u9759\u6001\u8d44\u6e90\uff0c\u5982\u56fe\u7247\u3001\u56fe\u6807\u3001\u66f4\u65b0\u5305\u7b49\uff0c\u52a0\u5feb\u5e94\u7528\u7684\u4e0b\u8f7d\u548c\u66f4\u65b0\u901f\u5ea6\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"4-api-\u52a0\u901f",children:"4. API \u52a0\u901f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u63d0\u4f9b API \u670d\u52a1\u7684\u4f01\u4e1a\uff0cCloudFront \u53ef\u4ee5\u7f13\u5b58 API \u54cd\u5e94\uff0c\u51cf\u5c11 API \u670d\u52a1\u5668\u7684\u8d1f\u8f7d\uff0c\u63d0\u9ad8 API \u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5feb\u901f\u83b7\u53d6\u6570\u636e\u3002"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>o});var i=l(6540);const r={},s=i.createContext(r);function d(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);