"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7728],{2796:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>c,frontMatter:()=>A,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"AWS/AWS-SAA/AWS-SAA-CN/AWS_Config","title":"AWS Config","description":"\u5b9a\u4e49\u4e0e\u6982\u8ff0","source":"@site/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Config.md","sourceDirName":"AWS/AWS-SAA/AWS-SAA-CN","slug":"/AWS/AWS-SAA/AWS-SAA-CN/AWS_Config","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Config","draft":false,"unlisted":false,"editUrl":"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Config.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AWS Compute Optimizer","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Compute_Optimizer"},"next":{"title":"AWS Control Tower","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Control_Tower"}}');var s=i(4848),r=i(8453);const A={},d="AWS Config",t={},o=[{value:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u8d44\u6e90\u53d1\u73b0\u4e0e\u8bb0\u5f55",id:"\u8d44\u6e90\u53d1\u73b0\u4e0e\u8bb0\u5f55",level:3},{value:"\u89c4\u5219\u8bc4\u4f30",id:"\u89c4\u5219\u8bc4\u4f30",level:3},{value:"\u4e8b\u4ef6\u9a71\u52a8\u4e0e\u5b9e\u65f6\u8bc4\u4f30",id:"\u4e8b\u4ef6\u9a71\u52a8\u4e0e\u5b9e\u65f6\u8bc4\u4f30",level:3},{value:"\u5408\u89c4\u6027\u62a5\u544a\u4e0e\u5ba1\u8ba1",id:"\u5408\u89c4\u6027\u62a5\u544a\u4e0e\u5ba1\u8ba1",level:3},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u589e\u5f3a\u53ef\u89c1\u6027",id:"\u589e\u5f3a\u53ef\u89c1\u6027",level:3},{value:"\u5408\u89c4\u6027\u7ba1\u7406",id:"\u5408\u89c4\u6027\u7ba1\u7406",level:3},{value:"\u914d\u7f6e\u53d8\u66f4\u8ddf\u8e2a",id:"\u914d\u7f6e\u53d8\u66f4\u8ddf\u8e2a",level:3},{value:"\u81ea\u52a8\u5316\u4e0e\u7b80\u5316\u64cd\u4f5c",id:"\u81ea\u52a8\u5316\u4e0e\u7b80\u5316\u64cd\u4f5c",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b89\u5168\u5ba1\u8ba1",id:"\u5b89\u5168\u5ba1\u8ba1",level:3},{value:"\u5408\u89c4\u6027\u62a5\u544a",id:"\u5408\u89c4\u6027\u62a5\u544a",level:3},{value:"\u914d\u7f6e\u7ba1\u7406\u4e0e\u6545\u969c\u6392\u9664",id:"\u914d\u7f6e\u7ba1\u7406\u4e0e\u6545\u969c\u6392\u9664",level:3},{value:"\u8d44\u6e90\u4f18\u5316",id:"\u8d44\u6e90\u4f18\u5316",level:3}];function S(n){const e={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"aws-config",children:"AWS Config"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",children:"\u5b9a\u4e49\u4e0e\u6982\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"AWS Config \u662f\u4e00\u9879\u7528\u4e8e\u5e2e\u52a9\u7528\u6237\u8bc4\u4f30\u3001\u5ba1\u8ba1\u548c\u8bb0\u5f55 AWS \u8d44\u6e90\u914d\u7f6e\u7684\u670d\u52a1\u3002\u5b83\u6301\u7eed\u76d1\u63a7\u548c\u8bb0\u5f55 AWS\n\u8d44\u6e90\u7684\u914d\u7f6e\u53d8\u5316\uff0c\u5e76\u63d0\u4f9b\u8d44\u6e90\u914d\u7f6e\u7684\u5386\u53f2\u7248\u672c\uff0c\u8ba9\u7528\u6237\u80fd\u591f\u4e86\u89e3\u8d44\u6e90\u5728\u4e0d\u540c\u65f6\u95f4\u70b9\u7684\u914d\u7f6e\u72b6\u6001\u3002\u901a\u8fc7 AWS\nConfig\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u8ddf\u8e2a\u8d44\u6e90\u7684\u914d\u7f6e\u66f4\u6539\u3001\u8bc4\u4f30\u8d44\u6e90\u662f\u5426\u7b26\u5408\u6307\u5b9a\u7684\u914d\u7f6e\u89c4\u5219\uff0c\u5e76\u751f\u6210\u5408\u89c4\u6027\u62a5\u544a\uff0c\u4ee5\u6ee1\u8db3\u5185\u90e8\u548c\u5916\u90e8\u7684\u5408\u89c4\u6027\u8981\u6c42\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,s.jsx)(e.h3,{id:"\u8d44\u6e90\u53d1\u73b0\u4e0e\u8bb0\u5f55",children:"\u8d44\u6e90\u53d1\u73b0\u4e0e\u8bb0\u5f55"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u81ea\u52a8\u53d1\u73b0"}),"\uff1a\u5f53\u7528\u6237\u542f\u7528 AWS Config \u670d\u52a1\u540e\uff0c\u5b83\u4f1a\u81ea\u52a8\u53d1\u73b0\u7528\u6237 AWS \u8d26\u6237\u5185\u7684\u53d7\u652f\u6301\u8d44\u6e90\uff0c\u8fd9\u4e9b\u8d44\u6e90\u5305\u62ec Amazon EC2 \u5b9e\u4f8b\u3001Amazon\nS3 \u5b58\u50a8\u6876\u3001IAM \u89d2\u8272\u7b49\u591a\u79cd AWS \u670d\u52a1\u8d44\u6e90\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u914d\u7f6e\u8bb0\u5f55"}),"\uff1aAWS Config \u4f1a\u6301\u7eed\u8bb0\u5f55\u8fd9\u4e9b\u8d44\u6e90\u7684\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u8d44\u6e90\u7684\u5c5e\u6027\u3001\u8bbe\u7f6e\u548c\u5173\u8054\u5173\u7cfb\u7b49\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e EC2\n\u5b9e\u4f8b\uff0c\u4f1a\u8bb0\u5f55\u5176\u5b9e\u4f8b\u7c7b\u578b\u3001\u5b89\u5168\u7ec4\u914d\u7f6e\u3001\u542f\u52a8\u65f6\u95f4\u7b49\u4fe1\u606f\u3002\u8fd9\u4e9b\u914d\u7f6e\u4fe1\u606f\u4f1a\u4ee5 JSON \u683c\u5f0f\u5b58\u50a8\u5728 Amazon S3 \u5b58\u50a8\u6876\u4e2d\uff0c\u5f62\u6210\u8d44\u6e90\u914d\u7f6e\u7684\u5386\u53f2\u8bb0\u5f55\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u89c4\u5219\u8bc4\u4f30",children:"\u89c4\u5219\u8bc4\u4f30"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49\u89c4\u5219"}),"\uff1a\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684 AWS Config \u89c4\u5219\uff0c\u8fd9\u4e9b\u89c4\u5219\u662f\u57fa\u4e8e AWS Lambda \u51fd\u6570\u6216 AWS\n\u6258\u7ba1\u89c4\u5219\u6a21\u677f\u7f16\u5199\u7684\u903b\u8f91\u8868\u8fbe\u5f0f\uff0c\u7528\u4e8e\u5b9a\u4e49\u8d44\u6e90\u5e94\u8be5\u9075\u5faa\u7684\u914d\u7f6e\u6807\u51c6\u3002\u4f8b\u5982\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u89c4\u5219\uff0c\u8981\u6c42\u6240\u6709 S3 \u5b58\u50a8\u6876\u90fd\u5fc5\u987b\u542f\u7528\u7248\u672c\u63a7\u5236\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6258\u7ba1\u89c4\u5219"}),"\uff1aAWS \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u9884\u5b9a\u4e49\u7684\u6258\u7ba1\u89c4\u5219\uff0c\u6db5\u76d6\u4e86\u5e38\u89c1\u7684\u5b89\u5168\u548c\u5408\u89c4\u6027\u6700\u4f73\u5b9e\u8df5\uff0c\u5982\u8981\u6c42 IAM\n\u7528\u6237\u5fc5\u987b\u4f7f\u7528\u591a\u56e0\u7d20\u8ba4\u8bc1\uff08MFA\uff09\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u6258\u7ba1\u89c4\u5219\uff0c\u65e0\u9700\u81ea\u5df1\u7f16\u5199\u590d\u6742\u7684\u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u89c4\u5219\u8bc4\u4f30"}),"\uff1aAWS Config \u4f1a\u5b9a\u671f\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u89c4\u5219\u5bf9\u8d44\u6e90\u914d\u7f6e\u8fdb\u884c\u8bc4\u4f30\u3002\u5982\u679c\u8d44\u6e90\u7684\u914d\u7f6e\u4e0d\u7b26\u5408\u89c4\u5219\u8981\u6c42\uff0c\u5219\u8be5\u8d44\u6e90\u4f1a\u88ab\u6807\u8bb0\u4e3a\u201c\u4e0d\u9075\u5b88\u89c4\u5219\u201d\uff1b\u5982\u679c\u7b26\u5408\u8981\u6c42\uff0c\u5219\u6807\u8bb0\u4e3a\u201c\u9075\u5b88\u89c4\u5219\u201d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4e8b\u4ef6\u9a71\u52a8\u4e0e\u5b9e\u65f6\u8bc4\u4f30",children:"\u4e8b\u4ef6\u9a71\u52a8\u4e0e\u5b9e\u65f6\u8bc4\u4f30"}),"\n",(0,s.jsx)(e.p,{children:"\u9664\u4e86\u5b9a\u671f\u8bc4\u4f30\uff0cAWS Config \u8fd8\u652f\u6301\u4e8b\u4ef6\u9a71\u52a8\u7684\u8bc4\u4f30\u65b9\u5f0f\u3002\u5f53\u8d44\u6e90\u914d\u7f6e\u53d1\u751f\u53d8\u5316\u65f6\uff0cAWS Config\n\u4f1a\u7acb\u5373\u89e6\u53d1\u89c4\u5219\u8bc4\u4f30\uff0c\u5b9e\u65f6\u5224\u65ad\u8d44\u6e90\u662f\u5426\u4ecd\u7136\u7b26\u5408\u89c4\u5219\u8981\u6c42\u3002\u8fd9\u79cd\u5b9e\u65f6\u8bc4\u4f30\u673a\u5236\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u53ca\u65f6\u53d1\u73b0\u548c\u89e3\u51b3\u8d44\u6e90\u914d\u7f6e\u4e2d\u7684\u95ee\u9898\uff0c\u907f\u514d\u6f5c\u5728\u7684\u5b89\u5168\u98ce\u9669\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5408\u89c4\u6027\u62a5\u544a\u4e0e\u5ba1\u8ba1",children:"\u5408\u89c4\u6027\u62a5\u544a\u4e0e\u5ba1\u8ba1"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5408\u89c4\u6027\u72b6\u6001\u67e5\u770b"}),"\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 AWS \u7ba1\u7406\u63a7\u5236\u53f0\u3001AWS CLI \u6216 AWS SDK \u67e5\u770b\u8d44\u6e90\u7684\u5408\u89c4\u6027\u72b6\u6001\u3002\u63a7\u5236\u53f0\u63d0\u4f9b\u4e86\u76f4\u89c2\u7684\u754c\u9762\uff0c\u5c55\u793a\u4e86\u6bcf\u4e2a\u89c4\u5219\u7684\u5408\u89c4\u6027\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u53ca\u54ea\u4e9b\u8d44\u6e90\u4e0d\u9075\u5b88\u89c4\u5219\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5408\u89c4\u6027\u62a5\u544a\u751f\u6210"}),"\uff1aAWS Config \u53ef\u4ee5\u751f\u6210\u8be6\u7ec6\u7684\u5408\u89c4\u6027\u62a5\u544a\uff0c\u8fd9\u4e9b\u62a5\u544a\u53ef\u4ee5\u7528\u4e8e\u5185\u90e8\u5ba1\u8ba1\u3001\u5411\u76d1\u7ba1\u673a\u6784\u8bc1\u660e\u5408\u89c4\u6027\u7b49\u3002\u62a5\u544a\u4e2d\u5305\u542b\u4e86\u8d44\u6e90\u7684\u5408\u89c4\u6027\u5386\u53f2\u8bb0\u5f55\u3001\u89c4\u5219\u7684\u6267\u884c\u7ed3\u679c\u7b49\u4fe1\u606f\uff0c\u5e2e\u52a9\u7528\u6237\u5168\u9762\u4e86\u89e3\nAWS \u73af\u5883\u7684\u5408\u89c4\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,s.jsx)(e.h3,{id:"\u589e\u5f3a\u53ef\u89c1\u6027",children:"\u589e\u5f3a\u53ef\u89c1\u6027"}),"\n",(0,s.jsx)(e.p,{children:"AWS Config \u63d0\u4f9b\u4e86\u5bf9 AWS \u8d44\u6e90\u914d\u7f6e\u7684\u5168\u9762\u53ef\u89c1\u6027\uff0c\u8ba9\u7528\u6237\u80fd\u591f\u6e05\u695a\u5730\u4e86\u89e3\u6bcf\u4e2a\u8d44\u6e90\u7684\u914d\u7f6e\u7ec6\u8282\u548c\u5386\u53f2\u53d8\u5316\u3002\u8fd9\u6709\u52a9\u4e8e\u7528\u6237\u66f4\u597d\u5730\u7ba1\u7406\u8d44\u6e90\uff0c\u53ca\u65f6\u53d1\u73b0\u548c\u89e3\u51b3\u914d\u7f6e\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5408\u89c4\u6027\u7ba1\u7406",children:"\u5408\u89c4\u6027\u7ba1\u7406"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u89c4\u5219\u548c\u4f7f\u7528 AWS \u6258\u7ba1\u89c4\u5219\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u5b9a\u4e49\u548c\u6267\u884c\u8d44\u6e90\u914d\u7f6e\u7684\u5408\u89c4\u6027\u6807\u51c6\u3002AWS Config\n\u4f1a\u6301\u7eed\u76d1\u63a7\u8d44\u6e90\u7684\u5408\u89c4\u6027\u72b6\u6001\uff0c\u5e76\u751f\u6210\u62a5\u544a\uff0c\u5e2e\u52a9\u7528\u6237\u6ee1\u8db3\u5404\u79cd\u5185\u90e8\u548c\u5916\u90e8\u7684\u5408\u89c4\u6027\u8981\u6c42\uff0c\u5982 PCI DSS\u3001HIPAA \u7b49\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u914d\u7f6e\u53d8\u66f4\u8ddf\u8e2a",children:"\u914d\u7f6e\u53d8\u66f4\u8ddf\u8e2a"}),"\n",(0,s.jsx)(e.p,{children:"\u8bb0\u5f55\u8d44\u6e90\u914d\u7f6e\u7684\u5386\u53f2\u7248\u672c\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u8ddf\u8e2a\u8d44\u6e90\u7684\u914d\u7f6e\u53d8\u66f4\u8fc7\u7a0b\u3002\u5728\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u56de\u6eaf\u5230\u4e4b\u524d\u7684\u914d\u7f6e\u72b6\u6001\uff0c\u5feb\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002\u540c\u65f6\uff0c\u4e5f\u6709\u52a9\u4e8e\u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\u548c\u7248\u672c\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u52a8\u5316\u4e0e\u7b80\u5316\u64cd\u4f5c",children:"\u81ea\u52a8\u5316\u4e0e\u7b80\u5316\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:"\u652f\u6301\u81ea\u52a8\u5316\u7684\u89c4\u5219\u8bc4\u4f30\u548c\u5b9e\u65f6\u76d1\u63a7\uff0c\u51cf\u5c11\u4e86\u624b\u52a8\u68c0\u67e5\u548c\u7ba1\u7406\u8d44\u6e90\u914d\u7f6e\u7684\u5de5\u4f5c\u91cf\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u5b9e\u73b0\u5bf9\u5927\u91cf\u8d44\u6e90\u7684\u81ea\u52a8\u5316\u5408\u89c4\u6027\u7ba1\u7406\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u5168\u5ba1\u8ba1",children:"\u5b89\u5168\u5ba1\u8ba1"}),"\n",(0,s.jsx)(e.p,{children:"\u4f01\u4e1a\u53ef\u4ee5\u4f7f\u7528 AWS Config \u6765\u5ba1\u8ba1 AWS \u8d44\u6e90\u7684\u914d\u7f6e\uff0c\u786e\u4fdd\u8d44\u6e90\u7684\u914d\u7f6e\u7b26\u5408\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u3002\u4f8b\u5982\uff0c\u68c0\u67e5 EC2 \u5b9e\u4f8b\u7684\u5b89\u5168\u7ec4\u8bbe\u7f6e\u662f\u5426\u53ea\u5141\u8bb8\u5fc5\u8981\u7684\u5165\u7ad9\u548c\u51fa\u7ad9\u6d41\u91cf\uff0cIAM\n\u7528\u6237\u7684\u6743\u9650\u662f\u5426\u9075\u5faa\u6700\u5c0f\u6743\u9650\u539f\u5219\u7b49\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5408\u89c4\u6027\u62a5\u544a",children:"\u5408\u89c4\u6027\u62a5\u544a"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u9700\u8981\u6ee1\u8db3\u884c\u4e1a\u6cd5\u89c4\u548c\u6807\u51c6\u7684\u4f01\u4e1a\uff0cAWS Config \u53ef\u4ee5\u751f\u6210\u8be6\u7ec6\u7684\u5408\u89c4\u6027\u62a5\u544a\uff0c\u8bc1\u660e\u5176 AWS \u73af\u5883\u7b26\u5408\u76f8\u5173\u8981\u6c42\u3002\u8fd9\u5bf9\u4e8e\u91d1\u878d\u3001\u533b\u7597\u7b49\u5bf9\u5408\u89c4\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u884c\u4e1a\u5c24\u4e3a\u91cd\u8981\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u914d\u7f6e\u7ba1\u7406\u4e0e\u6545\u969c\u6392\u9664",children:"\u914d\u7f6e\u7ba1\u7406\u4e0e\u6545\u969c\u6392\u9664"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u8fdb\u884c\u8d44\u6e90\u914d\u7f6e\u66f4\u6539\u65f6\uff0cAWS Config \u53ef\u4ee5\u8bb0\u5f55\u53d8\u66f4\u5386\u53f2\uff0c\u5e2e\u52a9\u7ba1\u7406\u5458\u4e86\u89e3\u54ea\u4e9b\u66f4\u6539\u53ef\u80fd\u5bfc\u81f4\u4e86\u95ee\u9898\u3002\u5f53\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u5386\u53f2\u914d\u7f6e\u4fe1\u606f\uff0c\u5feb\u901f\u6062\u590d\u5230\u4e4b\u524d\u7684\u6b63\u5e38\u914d\u7f6e\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8d44\u6e90\u4f18\u5316",children:"\u8d44\u6e90\u4f18\u5316"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u5206\u6790\u8d44\u6e90\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u914d\u7f6e\u6216\u8d44\u6e90\u4f7f\u7528\u4e0d\u5f53\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u8fdb\u884c\u8d44\u6e90\u4f18\u5316\uff0c\u964d\u4f4e\u6210\u672c\u3002\u4f8b\u5982\uff0c\u53d1\u73b0\u4e00\u4e9b\u95f2\u7f6e\u7684\nEC2 \u5b9e\u4f8b\u5e76\u53ca\u65f6\u7ec8\u6b62\u5b83\u4eec\u3002"})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(S,{...n})}):S(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>A,x:()=>d});var l=i(6540);const s={},r=l.createContext(s);function A(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:A(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);