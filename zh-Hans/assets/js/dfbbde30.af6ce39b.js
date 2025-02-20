"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[357],{7190:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>A,frontMatter:()=>r,metadata:()=>c,toc:()=>S});var i=s(4848),l=s(8453);const r={},t="AWS DataSync",c={id:"AWS/AWS-SAA/AWS-SAA-CN/AWS_DataSync",title:"AWS DataSync",description:"AWS DataSync \u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u5b8c\u5168\u6258\u7ba1\u670d\u52a1\uff0c\u7528\u4e8e\u5728\u672c\u5730\u5b58\u50a8\u4e0e AWS \u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u3001\u4e0d\u540c AWS",source:"@site/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_DataSync.md",sourceDirName:"AWS/AWS-SAA/AWS-SAA-CN",slug:"/AWS/AWS-SAA/AWS-SAA-CN/AWS_DataSync",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_DataSync",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_DataSync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Control Tower",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Control_Tower"},next:{title:"AWS Database Migration Service",permalink:"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Database_Migration_Service"}},d={},S=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u6570\u636e\u6e90\u4e0e\u76ee\u6807",id:"\u6570\u636e\u6e90\u4e0e\u76ee\u6807",level:3},{value:"\u4f20\u8f93\u6d41\u7a0b",id:"\u4f20\u8f93\u6d41\u7a0b",level:3},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u9ad8\u6548\u6027\u80fd",id:"\u9ad8\u6548\u6027\u80fd",level:3},{value:"\u5b89\u5168\u53ef\u9760",id:"\u5b89\u5168\u53ef\u9760",level:3},{value:"\u6613\u4e8e\u4f7f\u7528\u4e0e\u7ba1\u7406",id:"\u6613\u4e8e\u4f7f\u7528\u4e0e\u7ba1\u7406",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:3},{value:"\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",id:"\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",level:3},{value:"\u6570\u636e\u540c\u6b65",id:"\u6570\u636e\u540c\u6b65",level:3}];function a(n){const e={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"aws-datasync",children:"AWS DataSync"})}),"\n",(0,i.jsx)(e.p,{children:"AWS DataSync \u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u5b8c\u5168\u6258\u7ba1\u670d\u52a1\uff0c\u7528\u4e8e\u5728\u672c\u5730\u5b58\u50a8\u4e0e AWS \u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u3001\u4e0d\u540c AWS\n\u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u9ad8\u6548\u3001\u5b89\u5168\u4e14\u81ea\u52a8\u5316\u5730\u4f20\u8f93\u5927\u91cf\u6570\u636e\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e\u5b83\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff1a"}),"\n",(0,i.jsx)(e.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,i.jsx)(e.h3,{id:"\u6570\u636e\u6e90\u4e0e\u76ee\u6807",children:"\u6570\u636e\u6e90\u4e0e\u76ee\u6807"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u6765\u6e90"}),"\uff1a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec\u672c\u5730\u7684 NFS\uff08\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\uff09\u3001SMB\uff08\u670d\u52a1\u5668\u6d88\u606f\u5757\uff09\u6587\u4ef6\u670d\u52a1\u5668\u3001\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\uff0c\u4ee5\u53ca Amazon S3\n\u6876\u3001Amazon EFS\uff08\u5f39\u6027\u6587\u4ef6\u7cfb\u7edf\uff09\u3001Amazon FSx for Windows File Server \u7b49 AWS \u5b58\u50a8\u670d\u52a1\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u76ee\u6807"}),"\uff1a\u540c\u6837\u53ef\u4ee5\u5c06\u6570\u636e\u4f20\u8f93\u5230\u4e0a\u8ff0\u63d0\u53ca\u7684\u5404\u7c7b AWS \u5b58\u50a8\u670d\u52a1\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u8fc1\u79fb\u3001\u5907\u4efd\u6216\u540c\u6b65\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4f20\u8f93\u6d41\u7a0b",children:"\u4f20\u8f93\u6d41\u7a0b"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4efb\u52a1\u914d\u7f6e"}),"\uff1a\u7528\u6237\u9996\u5148\u9700\u8981\u5728 AWS DataSync \u63a7\u5236\u53f0\u521b\u5efa\u4f20\u8f93\u4efb\u52a1\uff0c\u6307\u5b9a\u6570\u636e\u6e90\u548c\u76ee\u6807\u5b58\u50a8\u4f4d\u7f6e\uff0c\u540c\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u4f20\u8f93\u9009\u9879\uff0c\u5982\u5e26\u5bbd\u9650\u5236\u3001\u4f20\u8f93\u65f6\u95f4\u7a97\u53e3\u3001\u6587\u4ef6\u8fc7\u6ee4\u89c4\u5219\u7b49\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4ee3\u7406\u90e8\u7f72\uff08\u53ef\u9009\uff09"}),"\uff1a\u5982\u679c\u6570\u636e\u6e90\u4f4d\u4e8e\u672c\u5730\uff0c\u7528\u6237\u9700\u8981\u5728\u672c\u5730\u7f51\u7edc\u4e2d\u90e8\u7f72 DataSync \u4ee3\u7406\u3002\u4ee3\u7406\u662f\u8fd0\u884c\u5728\u672c\u5730\u670d\u52a1\u5668\u4e0a\u7684\u8f6f\u4ef6\uff0c\u5b83\u4f5c\u4e3a\nDataSync \u670d\u52a1\u4e0e\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\u4e4b\u95f4\u7684\u6865\u6881\uff0c\u8d1f\u8d23\u5b89\u5168\u5730\u8fde\u63a5\u5e76\u4f20\u8f93\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u4f20\u8f93"}),"\uff1a\u914d\u7f6e\u5b8c\u6210\u5e76\u542f\u52a8\u4efb\u52a1\u540e\uff0cDataSync \u4f1a\u81ea\u52a8\u5206\u6790\u6570\u636e\u6e90\u548c\u76ee\u6807\u5b58\u50a8\u7684\u6587\u4ef6\u72b6\u6001\uff0c\u8bc6\u522b\u9700\u8981\u4f20\u8f93\u7684\u6587\u4ef6\uff0c\u5e76\u6839\u636e\u7528\u6237\u8bbe\u7f6e\u7684\u9009\u9879\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\uff0cDataSync\n\u4f1a\u4f7f\u7528\u52a0\u5bc6\u6280\u672f\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u76d1\u63a7\u4e0e\u65e5\u5fd7"}),"\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 AWS \u63a7\u5236\u53f0\u3001AWS CloudWatch \u7b49\u5de5\u5177\u76d1\u63a7\u4efb\u52a1\u7684\u6267\u884c\u8fdb\u5ea6\u3001\u72b6\u6001\u548c\u6027\u80fd\u6307\u6807\u3002\u540c\u65f6\uff0cDataSync\n\u4f1a\u751f\u6210\u8be6\u7ec6\u7684\u65e5\u5fd7\uff0c\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u6545\u969c\u6392\u67e5\u548c\u5ba1\u8ba1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,i.jsx)(e.h3,{id:"\u9ad8\u6548\u6027\u80fd",children:"\u9ad8\u6548\u6027\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4f18\u5316\u4f20\u8f93\u7b97\u6cd5"}),"\uff1aDataSync \u91c7\u7528\u4e86\u5148\u8fdb\u7684\u4f20\u8f93\u7b97\u6cd5\uff0c\u80fd\u591f\u667a\u80fd\u5730\u8bc6\u522b\u6587\u4ef6\u7684\u53d8\u5316\u90e8\u5206\uff0c\u4ec5\u4f20\u8f93\u8fd9\u4e9b\u5dee\u5f02\u6570\u636e\uff0c\u4ece\u800c\u663e\u8457\u51cf\u5c11\u4f20\u8f93\u65f6\u95f4\u548c\u7f51\u7edc\u5e26\u5bbd\u7684\u4f7f\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5e76\u884c\u4f20\u8f93"}),"\uff1a\u652f\u6301\u5e76\u884c\u6570\u636e\u4f20\u8f93\uff0c\u5229\u7528\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u5904\u7406\u6570\u636e\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4f20\u8f93\u901f\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5b89\u5168\u53ef\u9760",children:"\u5b89\u5168\u53ef\u9760"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u52a0\u5bc6"}),"\uff1a\u5728\u6570\u636e\u4f20\u8f93\u8fc7\u7a0b\u4e2d\uff0cDataSync \u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\uff0c\u652f\u6301 SSL/TLS \u52a0\u5bc6\u534f\u8bae\uff0c\u786e\u4fdd\u6570\u636e\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u4fdd\u5bc6\u6027\u548c\u5b8c\u6574\u6027\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9519\u8bef\u5904\u7406\u4e0e\u91cd\u8bd5\u673a\u5236"}),"\uff1a\u5177\u5907\u5b8c\u5584\u7684\u9519\u8bef\u5904\u7406\u548c\u91cd\u8bd5\u673a\u5236\uff0c\u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\u5e76\u5904\u7406\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\uff0c\u5982\u7f51\u7edc\u4e2d\u65ad\u3001\u6587\u4ef6\u51b2\u7a81\u7b49\uff0c\u5e76\u5c1d\u8bd5\u91cd\u65b0\u4f20\u8f93\u5931\u8d25\u7684\u6570\u636e\uff0c\u4fdd\u8bc1\u6570\u636e\u4f20\u8f93\u7684\u53ef\u9760\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6613\u4e8e\u4f7f\u7528\u4e0e\u7ba1\u7406",children:"\u6613\u4e8e\u4f7f\u7528\u4e0e\u7ba1\u7406"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u914d\u7f6e"}),"\uff1a\u901a\u8fc7\u76f4\u89c2\u7684 AWS \u63a7\u5236\u53f0\u6216 AWS CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u6570\u636e\u4f20\u8f93\u4efb\u52a1\uff0c\u65e0\u9700\u7f16\u5199\u590d\u6742\u7684\u811a\u672c\u6216\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u52a8\u5316\u4efb\u52a1\u8c03\u5ea6"}),"\uff1a\u652f\u6301\u6309\u8ba1\u5212\u81ea\u52a8\u6267\u884c\u4f20\u8f93\u4efb\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u95f4\u9694\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u5b9a\u671f\u5907\u4efd\u6216\u540c\u6b65\uff0c\u51cf\u5c11\u4eba\u5de5\u5e72\u9884\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,i.jsx)(e.h3,{id:"\u6570\u636e\u8fc1\u79fb",children:"\u6570\u636e\u8fc1\u79fb"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4ece\u672c\u5730\u5230\u4e91\u7aef"}),"\uff1a\u4f01\u4e1a\u5c06\u672c\u5730\u6570\u636e\u4e2d\u5fc3\u7684\u6587\u4ef6\u548c\u6570\u636e\u8fc1\u79fb\u5230 AWS \u4e91\u5b58\u50a8\u670d\u52a1\uff0c\u5982\u5c06\u672c\u5730\u7684\u6587\u4ef6\u670d\u52a1\u5668\u6570\u636e\u8fc1\u79fb\u5230 Amazon S3 \u6216\nAmazon EFS\uff0c\u4ee5\u5229\u7528 AWS \u7684\u53ef\u6269\u5c55\u6027\u548c\u6210\u672c\u6548\u76ca\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e91\u95f4\u8fc1\u79fb"}),"\uff1a\u5728\u4e0d\u540c\u7684 AWS \u5b58\u50a8\u670d\u52a1\u4e4b\u95f4\u8fc1\u79fb\u6570\u636e\uff0c\u4f8b\u5982\u4ece Amazon EFS \u8fc1\u79fb\u5230 Amazon S3\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u548c\u5b58\u50a8\u6210\u672c\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",children:"\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5b9a\u671f\u5907\u4efd"}),"\uff1a\u5b9a\u671f\u5c06\u672c\u5730\u6570\u636e\u5907\u4efd\u5230 AWS \u5b58\u50a8\u670d\u52a1\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u5f02\u5730\u5bb9\u707e\u3002\u4f8b\u5982\uff0c\u6bcf\u5929\u5c06\u672c\u5730\u6587\u4ef6\u670d\u52a1\u5668\u4e0a\u7684\u91cd\u8981\u6570\u636e\u5907\u4efd\u5230 Amazon\nS3 \u6876\u4e2d\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5feb\u901f\u6062\u590d"}),"\uff1a\u5728\u53d1\u751f\u6570\u636e\u4e22\u5931\u6216\u635f\u574f\u65f6\uff0c\u80fd\u591f\u5feb\u901f\u4ece AWS \u5b58\u50a8\u4e2d\u6062\u590d\u6570\u636e\u5230\u672c\u5730\uff0c\u51cf\u5c11\u4e1a\u52a1\u4e2d\u65ad\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6570\u636e\u540c\u6b65",children:"\u6570\u636e\u540c\u6b65"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u591a\u7ad9\u70b9\u6570\u636e\u540c\u6b65"}),"\uff1a\u5bf9\u4e8e\u5206\u5e03\u5f0f\u4f01\u4e1a\u6216\u5177\u6709\u591a\u4e2a\u529e\u516c\u5730\u70b9\u7684\u7ec4\u7ec7\uff0cDataSync \u53ef\u4ee5\u5b9e\u73b0\u4e0d\u540c\u7ad9\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\uff0c\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u53ca\u65f6\u6027\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e0e\u4e91\u5e94\u7528\u96c6\u6210"}),"\uff1a\u5c06\u672c\u5730\u6570\u636e\u540c\u6b65\u5230 AWS \u5b58\u50a8\u670d\u52a1\uff0c\u4ee5\u4fbf\u4e0e\u8fd0\u884c\u5728 AWS \u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u96c6\u6210\uff0c\u5982\u5927\u6570\u636e\u5206\u6790\u3001\u673a\u5668\u5b66\u4e60\u7b49\u3002"]}),"\n"]})]})}function A(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);