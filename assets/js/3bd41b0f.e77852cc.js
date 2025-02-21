"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7231],{4541:(e,l,n)=>{n.d(l,{A:()=>i});const i=n.p+"assets/images/img-49bcef7086e6fe7e41e4df79394a4bab.png"},8453:(e,l,n)=>{n.d(l,{R:()=>c,x:()=>s});var i=n(6540);const r={},t=i.createContext(r);function c(e){const l=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:l},e.children)}},9326:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>A,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"AWS/AWS-SAA/AWS-SAA-CN/AWS_Global_Accelerator","title":"AWS Global Accelerator","description":"AWS Global Accelerator \u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u7f51\u7edc\u670d\u52a1\uff0c\u65e8\u5728\u4f18\u5316\u5168\u7403\u7528\u6237\u7684\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u901f\u5ea6\u548c\u53ef\u7528\u6027\u3002\u5b83\u901a\u8fc7\u5229\u7528 AWS","source":"@site/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Global_Accelerator.md","sourceDirName":"AWS/AWS-SAA/AWS-SAA-CN","slug":"/AWS/AWS-SAA/AWS-SAA-CN/AWS_Global_Accelerator","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Global_Accelerator","draft":false,"unlisted":false,"editUrl":"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Global_Accelerator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AWS Gateway Load Balancer","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Gateway_Load_Balancer"},"next":{"title":"AWS Glue","permalink":"/my-website/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Glue"}}');var r=n(4848),t=n(8453);const c={},s="AWS Global Accelerator",A={},o=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u6838\u5fc3\u529f\u80fd",id:"\u6838\u5fc3\u529f\u80fd",level:2},{value:"\u5178\u578b\u4f7f\u7528\u573a\u666f",id:"\u5178\u578b\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f18\u52bf\u5bf9\u6bd4\u5176\u4ed6\u670d\u52a1",id:"\u4f18\u52bf\u5bf9\u6bd4\u5176\u4ed6\u670d\u52a1",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const l={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"aws-global-accelerator",children:"AWS Global Accelerator"})}),"\n",(0,r.jsx)(l.p,{children:"AWS Global Accelerator \u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u7f51\u7edc\u670d\u52a1\uff0c\u65e8\u5728\u4f18\u5316\u5168\u7403\u7528\u6237\u7684\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u901f\u5ea6\u548c\u53ef\u7528\u6027\u3002\u5b83\u901a\u8fc7\u5229\u7528 AWS\n\u7684\u5168\u7403\u7f51\u7edc\u57fa\u7840\u8bbe\u65bd\uff08\u5982\u8fb9\u7f18\u7ad9\u70b9\u548c\u9aa8\u5e72\u7f51\uff09\uff0c\u667a\u80fd\u8def\u7531\u7528\u6237\u6d41\u91cf\uff0c\u51cf\u5c11\u5ef6\u8fdf\u5e76\u63d0\u5347\u6027\u80fd\u3002\u4ee5\u4e0b\u662f\u5176\u6838\u5fc3\u8981\u70b9\uff1a"}),"\n",(0,r.jsx)(l.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u9759\u6001\u5165\u53e3 IP\uff1a\u63d0\u4f9b\u4e24\u4e2a\u56fa\u5b9a\u7684\u5168\u5c40\u9759\u6001 IP\uff08\u6216\u81ea\u5b9a\u4e49 IP\uff09\uff0c\u4f5c\u4e3a\u7528\u6237\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\u3002\u5373\u4f7f\u540e\u7aef\u8d44\u6e90\u53d8\u66f4\uff08\u5982\u66f4\u6362\u533a\u57df\u6216\u5b9e\u4f8b\uff09\uff0cIP\n\u5730\u5740\u4fdd\u6301\u4e0d\u53d8\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u667a\u80fd\u6d41\u91cf\u8def\u7531\uff1a\u7528\u6237\u8bf7\u6c42\u901a\u8fc7\u6700\u8fd1\u7684 AWS \u8fb9\u7f18\u8282\u70b9\u63a5\u5165\uff0c\u968f\u540e\u6d41\u91cf\u901a\u8fc7 AWS \u5185\u90e8\u9ad8\u6027\u80fd\u7f51\u7edc\uff08\u975e\u516c\u5171\u4e92\u8054\u7f51\uff09\u4f20\u8f93\u81f3\u540e\u7aef\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u5065\u5eb7\u68c0\u67e5\u4e0e\u5bb9\u707e\uff1a\u6301\u7eed\u76d1\u63a7\u540e\u7aef\u8d44\u6e90\uff08\u5982 EC2\u3001ALB\u3001NLB\uff09\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u81ea\u52a8\u5c06\u6d41\u91cf\u5207\u6362\u5230\u5065\u5eb7\u8282\u70b9\uff0c\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\u3002"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u6838\u5fc3\u529f\u80fd",children:"\u6838\u5fc3\u529f\u80fd"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u5168\u5c40\u8d1f\u8f7d\u5747\u8861\uff1a\u652f\u6301\u8de8\u591a\u4e2a AWS \u533a\u57df\uff08Region\uff09\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u4f18\u5316\u5168\u7403\u7528\u6237\u7684\u8bbf\u95ee\u8def\u5f84\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u4f4e\u5ef6\u8fdf\uff1a\u5229\u7528 AWS \u5185\u7f51\u9aa8\u5e72\u4f20\u8f93\uff0c\u51cf\u5c11\u7f51\u7edc\u8df3\u8dc3\uff08hops\uff09\uff0c\u964d\u4f4e\u5ef6\u8fdf\u3002"}),"\n",(0,r.jsx)(l.li,{children:"DDoS \u9632\u5fa1\u96c6\u6210\uff1a\u53ef\u4e0e AWS Shield \u7ed3\u5408\uff0c\u63d0\u4f9b\u9488\u5bf9\u7f51\u7edc\u5c42\uff08Layer 3/4\uff09\u653b\u51fb\u7684\u9632\u62a4\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u5ba2\u6237\u7aef\u4eb2\u548c\u6027\uff08Session Stickiness\uff09\uff1a\u652f\u6301\u57fa\u4e8e\u6e90 IP \u7684\u4f1a\u8bdd\u4fdd\u6301\uff0c\u786e\u4fdd\u7528\u6237\u8bf7\u6c42\u5b9a\u5411\u5230\u540c\u4e00\u540e\u7aef\u3002"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u5178\u578b\u4f7f\u7528\u573a\u666f",children:"\u5178\u578b\u4f7f\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u5168\u7403\u5206\u5e03\u5f0f\u5e94\u7528\uff1a\u7528\u6237\u904d\u5e03\u591a\u5730\u533a\uff0c\u9700\u4f4e\u5ef6\u8fdf\u8bbf\u95ee\uff08\u5982\u6e38\u620f\u3001\u5b9e\u65f6\u901a\u4fe1\uff09\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u9ad8\u53ef\u7528\u6027\u5173\u952e\u7cfb\u7edf\uff1a\u8981\u6c42\u6545\u969c\u65f6\u65e0\u7f1d\u5207\u6362\uff08\u5982\u91d1\u878d\u4ea4\u6613\u3001\u533b\u7597\u7cfb\u7edf\uff09\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u9690\u85cf\u540e\u7aef\u67b6\u6784\uff1a\u901a\u8fc7\u56fa\u5b9a IP \u66b4\u9732\u670d\u52a1\uff0c\u540e\u7aef\u53d8\u66f4\u4e0d\u5f71\u54cd\u7528\u6237\uff08\u5982 API \u7f51\u5173\uff09\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u6df7\u5408\u4e91\u67b6\u6784\uff1a\u6d41\u91cf\u53ef\u8def\u7531\u81f3\u672c\u5730\u6570\u636e\u4e2d\u5fc3\uff08\u9700\u901a\u8fc7 AWS VPN \u6216 Direct Connect\uff09\u3002"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u4f18\u52bf\u5bf9\u6bd4\u5176\u4ed6\u670d\u52a1",children:"\u4f18\u52bf\u5bf9\u6bd4\u5176\u4ed6\u670d\u52a1"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.img,{alt:"img.png",src:n(4541).A+"",width:"832",height:"274"})}),"\n",(0,r.jsx)(l.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u534f\u8bae\u652f\u6301\uff1a\u4e3b\u8981\u9488\u5bf9 TCP/UDP\uff0cHTTP/HTTPS \u9700\u7ed3\u5408 ALB \u6216 CloudFront\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u6210\u672c\u4f18\u5316\uff1a\u82e5\u4ec5\u9700\u533a\u57df\u7ea7\u8d1f\u8f7d\u5747\u8861\uff0c\u53ef\u80fd\u4f18\u5148\u4f7f\u7528 ALB/NLB\u3002"}),"\n",(0,r.jsx)(l.li,{children:"\u4e0e Route 53 \u534f\u540c\uff1a\u53ef\u642d\u914d DNS \u670d\u52a1\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u6d41\u91cf\u7b56\u7565\uff08\u5982\u5730\u7406\u4f4d\u7f6e\u8def\u7531\uff09\u3002"}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(l.p,{children:"AWS Global Accelerator \u662f\u63d0\u5347\u5168\u7403\u5e94\u7528\u6027\u80fd\u548c\u9ad8\u53ef\u7528\u7684\u5229\u5668\uff0c\u5c24\u5176\u9002\u5408\u9700\u8981\u7a33\u5b9a\u5165\u53e3\nIP\u3001\u8de8\u533a\u57df\u5bb9\u707e\u548c\u4f4e\u5ef6\u8fdf\u7684\u573a\u666f\u3002\u901a\u8fc7\u51cf\u5c11\u7f51\u7edc\u6ce2\u52a8\u548c\u81ea\u52a8\u6545\u969c\u8f6c\u79fb\uff0c\u5b83\u5e2e\u52a9\u7528\u6237\u6784\u5efa\u66f4\u5065\u58ee\u7684\u5168\u7403\u5316\u67b6\u6784\u3002"})]})}function d(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);