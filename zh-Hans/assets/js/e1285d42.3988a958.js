"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1174],{6236:(e,S,n)=>{n.r(S),n.d(S,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"AWS/AWS-SAA/AWS-SAA-CN/AWS_iSCSI","title":"iSCSI","description":"\u5728 AWS\uff08\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff09\u7684\u73af\u5883\u4e2d\uff0ciSCSI\uff08Internet Small Computer System Interface\uff0c\u4e92\u8054\u7f51\u5c0f\u578b\u8ba1\u7b97\u673a\u7cfb\u7edf\u63a5\u53e3\uff09\u534f\u8bae\u53d1\u6325\u7740\u91cd\u8981\u4f5c\u7528\uff0c\u5b83\u5141\u8bb8\u5728 IP \u7f51\u7edc\u4e0a\u6a21\u62df SCSI \u5b58\u50a8\u8bbe\u5907\uff0c\u5b9e\u73b0\u5757\u7ea7\u5b58\u50a8\u8bbf\u95ee\u3002\u4e0b\u9762\u4ece\u591a\u4e2a\u65b9\u9762\u5bf9 AWS \u91cc\u7684 iSCSI \u534f\u8bae\u8fdb\u884c\u8be6\u7ec6\u89e3\u91ca\uff1a","source":"@site/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_iSCSI.md","sourceDirName":"AWS/AWS-SAA/AWS-SAA-CN","slug":"/AWS/AWS-SAA/AWS-SAA-CN/AWS_iSCSI","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_iSCSI","draft":false,"unlisted":false,"editUrl":"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_iSCSI.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AWS Storage Gateway Tape Gateway","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/AWS_Storage_Gateway_Tape_Gateway"},"next":{"title":"Amazon Aurora Global Database","permalink":"/my-website/zh-Hans/docs/AWS/AWS-SAA/AWS-SAA-CN/Amazon_Aurora_Global_Database"}}');var s=n(4848),t=n(8453);const r={},l="iSCSI",a={},o=[{value:"\u57fa\u672c\u6982\u5ff5\u4e0e\u539f\u7406",id:"\u57fa\u672c\u6982\u5ff5\u4e0e\u539f\u7406",level:3},{value:"AWS \u76f8\u5173\u670d\u52a1\u4e2d\u7684\u5e94\u7528",id:"aws-\u76f8\u5173\u670d\u52a1\u4e2d\u7684\u5e94\u7528",level:3},{value:"Amazon Elastic Block Store (EBS)",id:"amazon-elastic-block-store-ebs",level:4},{value:"Amazon FSx for NetApp ONTAP",id:"amazon-fsx-for-netapp-ontap",level:4},{value:"AWS Storage Gateway",id:"aws-storage-gateway",level:4},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u5c40\u9650\u6027\u4e0e\u6311\u6218",id:"\u5c40\u9650\u6027\u4e0e\u6311\u6218",level:3}];function A(e){const S={h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S.header,{children:(0,s.jsx)(S.h1,{id:"iscsi",children:"iSCSI"})}),"\n",(0,s.jsx)(S.p,{children:"\u5728 AWS\uff08\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff09\u7684\u73af\u5883\u4e2d\uff0ciSCSI\uff08Internet Small Computer System Interface\uff0c\u4e92\u8054\u7f51\u5c0f\u578b\u8ba1\u7b97\u673a\u7cfb\u7edf\u63a5\u53e3\uff09\u534f\u8bae\u53d1\u6325\u7740\u91cd\u8981\u4f5c\u7528\uff0c\u5b83\u5141\u8bb8\u5728 IP \u7f51\u7edc\u4e0a\u6a21\u62df SCSI \u5b58\u50a8\u8bbe\u5907\uff0c\u5b9e\u73b0\u5757\u7ea7\u5b58\u50a8\u8bbf\u95ee\u3002\u4e0b\u9762\u4ece\u591a\u4e2a\u65b9\u9762\u5bf9 AWS \u91cc\u7684 iSCSI \u534f\u8bae\u8fdb\u884c\u8be6\u7ec6\u89e3\u91ca\uff1a"}),"\n",(0,s.jsx)(S.h3,{id:"\u57fa\u672c\u6982\u5ff5\u4e0e\u539f\u7406",children:"\u57fa\u672c\u6982\u5ff5\u4e0e\u539f\u7406"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u539f\u7406\u672c\u8d28"}),"\uff1aiSCSI \u534f\u8bae\u672c\u8d28\u662f\u628a SCSI \u6307\u4ee4\u5c01\u88c5\u5728 TCP/IP \u6570\u636e\u5305\u91cc\uff0c\u901a\u8fc7 IP \u7f51\u7edc\u4f20\u8f93\uff0c\u8ba9\u8fdc\u7a0b\u5b58\u50a8\u8bbe\u5907\u80fd\u50cf\u672c\u5730\u5b58\u50a8\u8bbe\u5907\u4e00\u6837\u88ab\u4f7f\u7528\u3002\u5728 AWS \u73af\u5883\u4e2d\uff0c\u8fd9\u610f\u5473\u7740 EC2\uff08Elastic Compute Cloud\uff09\u5b9e\u4f8b\u7b49\u8ba1\u7b97\u8d44\u6e90\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u8fde\u63a5\u5230\u57fa\u4e8e iSCSI \u7684\u5b58\u50a8\u8bbe\u5907\uff0c\u8fdb\u884c\u6570\u636e\u7684\u8bfb\u5199\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u901a\u4fe1\u6d41\u7a0b"}),"\uff1aAWS \u4e2d\u7684\u8ba1\u7b97\u8d44\u6e90\u4f5c\u4e3a iSCSI \u53d1\u8d77\u7aef\uff0c\u5b58\u50a8\u8bbe\u5907\u4f5c\u4e3a\u76ee\u6807\u7aef\u3002\u53d1\u8d77\u7aef\u5148\u901a\u8fc7\u7f51\u7edc\u641c\u7d22\u76ee\u6807\u7aef\uff0c\u5b8c\u6210\u53d1\u73b0\u8fc7\u7a0b\uff1b\u4e4b\u540e\u53d1\u9001\u767b\u5f55\u8bf7\u6c42\uff0c\u76ee\u6807\u7aef\u9a8c\u8bc1\u8eab\u4efd\u548c\u6743\u9650\u540e\u5efa\u7acb TCP \u8fde\u63a5\uff1b\u63a5\u7740\u53d1\u8d77\u7aef\u5c31\u53ef\u4ee5\u53d1\u9001\u5c01\u88c5\u4e86 SCSI \u6307\u4ee4\u7684 iSCSI \u6570\u636e\u5305\u6765\u8bfb\u5199\u6570\u636e\uff1b\u6700\u540e\u5728\u4e0d\u9700\u8981\u8fde\u63a5\u65f6\u53d1\u8d77\u6ce8\u9500\u8bf7\u6c42\u5173\u95ed\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(S.h3,{id:"aws-\u76f8\u5173\u670d\u52a1\u4e2d\u7684\u5e94\u7528",children:"AWS \u76f8\u5173\u670d\u52a1\u4e2d\u7684\u5e94\u7528"}),"\n",(0,s.jsx)(S.h4,{id:"amazon-elastic-block-store-ebs",children:"Amazon Elastic Block Store (EBS)"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u8fde\u63a5\u65b9\u5f0f"}),"\uff1a\u867d\u7136 EBS \u4e3b\u8981\u901a\u8fc7 AWS \u5185\u90e8\u7684\u9ad8\u901f\u7f51\u7edc\u8fde\u63a5\u5230 EC2 \u5b9e\u4f8b\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u501f\u52a9 iSCSI \u534f\u8bae\u8fdb\u884c\u4ea4\u4e92\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u9700\u8981\u5728\u7279\u5b9a\u7f51\u7edc\u914d\u7f6e\u4e0b\u6216\u8005\u901a\u8fc7\u81ea\u5b9a\u4e49\u7f51\u7edc\u8def\u5f84\u8fde\u63a5 EBS \u5377\u65f6\uff0ciSCSI \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u79cd\u5b9e\u73b0\u624b\u6bb5\u3002"]}),"\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u6570\u636e\u8bbf\u95ee"}),"\uff1aEC2 \u5b9e\u4f8b\u53ef\u4ee5\u50cf\u64cd\u4f5c\u672c\u5730\u78c1\u76d8\u4e00\u6837\u901a\u8fc7 iSCSI \u534f\u8bae\u5bf9 EBS \u5377\u8fdb\u884c\u5757\u7ea7\u522b\u7684\u6570\u636e\u8bfb\u5199\uff0c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u7a33\u5b9a\u53ef\u9760\u7684\u5b58\u50a8\u652f\u6301\u3002"]}),"\n"]}),"\n",(0,s.jsx)(S.h4,{id:"amazon-fsx-for-netapp-ontap",children:"Amazon FSx for NetApp ONTAP"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u5b58\u50a8\u670d\u52a1"}),"\uff1aFSx for NetApp ONTAP \u662f AWS \u63d0\u4f9b\u7684\u57fa\u4e8e NetApp ONTAP \u6280\u672f\u7684\u6587\u4ef6\u5b58\u50a8\u670d\u52a1\u3002\u5b83\u652f\u6301 iSCSI \u534f\u8bae\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u5757\u5b58\u50a8\u529f\u80fd\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 iSCSI \u8fde\u63a5\u5230 FSx for NetApp ONTAP \u5b58\u50a8\u7cfb\u7edf\uff0c\u521b\u5efa\u548c\u7ba1\u7406\u5757\u7ea7\u5b58\u50a8\u5377\uff0c\u6ee1\u8db3\u5bf9\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u5757\u5b58\u50a8\u6709\u9700\u6c42\u7684\u5e94\u7528\u573a\u666f\uff0c\u5982\u6570\u636e\u5e93\u5b58\u50a8\u7b49\u3002"]}),"\n"]}),"\n",(0,s.jsx)(S.h4,{id:"aws-storage-gateway",children:"AWS Storage Gateway"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u6df7\u5408\u4e91\u5b58\u50a8\u89e3\u51b3\u65b9\u6848"}),"\uff1aStorage Gateway \u662f\u4e00\u79cd\u6df7\u5408\u4e91\u5b58\u50a8\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86\u591a\u79cd\u5b58\u50a8\u63a5\u53e3\uff0c\u5176\u4e2d\u5c31\u5305\u62ec iSCSI\u3002\u7528\u6237\u53ef\u4ee5\u5728\u672c\u5730\u6570\u636e\u4e2d\u5fc3\u90e8\u7f72 Storage Gateway \u8bbe\u5907\uff0c\u901a\u8fc7 iSCSI \u534f\u8bae\u5c06\u672c\u5730\u670d\u52a1\u5668\u8fde\u63a5\u5230 AWS \u4e91\u5b58\u50a8\uff0c\u5b9e\u73b0\u672c\u5730\u4e0e\u4e91\u7aef\u5b58\u50a8\u7684\u65e0\u7f1d\u96c6\u6210\u3002\u4f8b\u5982\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u672c\u5730\u670d\u52a1\u5668\u7684 iSCSI \u53d1\u8d77\u7aef\u8fde\u63a5\u5230 Storage Gateway \u7684 iSCSI \u76ee\u6807\u7aef\uff0c\u628a\u672c\u5730\u6570\u636e\u5907\u4efd\u5230 AWS S3 \u5b58\u50a8\u6876\u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(S.h3,{id:"\u4f18\u52bf",children:"\u4f18\u52bf"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u5229\u7528\u73b0\u6709\u7f51\u7edc"}),"\uff1a\u5728 AWS \u73af\u5883\u4e2d\u4f7f\u7528 iSCSI \u534f\u8bae\u53ef\u4ee5\u5229\u7528\u73b0\u6709\u7684 IP \u7f51\u7edc\u57fa\u7840\u8bbe\u65bd\uff0c\u65e0\u9700\u989d\u5916\u6784\u5efa\u4e13\u7528\u7684\u5b58\u50a8\u7f51\u7edc\uff0c\u964d\u4f4e\u4e86\u6210\u672c\u548c\u90e8\u7f72\u7684\u590d\u6742\u6027\u3002"]}),"\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u5757\u7ea7\u5b58\u50a8\u7075\u6d3b\u6027"}),"\uff1aiSCSI \u63d0\u4f9b\u5757\u7ea7\u5b58\u50a8\u8bbf\u95ee\uff0c\u8fd9\u5bf9\u4e8e\u9700\u8981\u76f4\u63a5\u64cd\u4f5c\u78c1\u76d8\u5757\u7684\u5e94\u7528\uff08\u5982\u6570\u636e\u5e93\uff09\u975e\u5e38\u6709\u7528\u3002\u5728 AWS \u4e2d\uff0c\u8ba1\u7b97\u8d44\u6e90\u53ef\u4ee5\u901a\u8fc7 iSCSI \u7075\u6d3b\u5730\u8bbf\u95ee\u548c\u7ba1\u7406\u8fdc\u7a0b\u5b58\u50a8\u8bbe\u5907\u7684\u5757\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u53ef\u6269\u5c55\u6027"}),"\uff1a\u968f\u7740\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u57fa\u4e8e iSCSI \u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u8fdb\u884c\u6269\u5c55\u3002\u7528\u6237\u53ef\u4ee5\u5728 AWS \u4e2d\u6dfb\u52a0\u66f4\u591a\u7684\u5b58\u50a8\u8d44\u6e90\u6216\u8005\u8ba1\u7b97\u8282\u70b9\uff0c\u901a\u8fc7 iSCSI \u534f\u8bae\u5c06\u5b83\u4eec\u96c6\u6210\u5230\u73b0\u6709\u7684\u5b58\u50a8\u7f51\u7edc\u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(S.h3,{id:"\u5c40\u9650\u6027\u4e0e\u6311\u6218",children:"\u5c40\u9650\u6027\u4e0e\u6311\u6218"}),"\n",(0,s.jsxs)(S.ul,{children:["\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u7f51\u7edc\u4f9d\u8d56"}),"\uff1aiSCSI \u6027\u80fd\u9ad8\u5ea6\u4f9d\u8d56\u7f51\u7edc\u8d28\u91cf\u3002\u5728 AWS \u73af\u5883\u4e2d\uff0c\u5982\u679c\u7f51\u7edc\u51fa\u73b0\u62e5\u585e\u3001\u5ef6\u8fdf\u6216\u4e22\u5305\u7b49\u95ee\u9898\uff0c\u4f1a\u76f4\u63a5\u5f71\u54cd iSCSI \u5b58\u50a8\u7684\u8bfb\u5199\u6027\u80fd\uff0c\u751a\u81f3\u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u4f20\u8f93\u9519\u8bef\u3002"]}),"\n",(0,s.jsxs)(S.li,{children:[(0,s.jsx)(S.strong,{children:"\u5b89\u5168\u98ce\u9669"}),"\uff1a\u7531\u4e8e iSCSI \u901a\u8fc7 IP \u7f51\u7edc\u4f20\u8f93\u6570\u636e\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u5b89\u5168\u98ce\u9669\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u4f1a\u906d\u53d7\u7f51\u7edc\u653b\u51fb\u3001\u6570\u636e\u6cc4\u9732\u7b49\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u5728 AWS \u4e2d\u4f7f\u7528 iSCSI \u65f6\uff0c\u9700\u8981\u91c7\u53d6\u4e00\u7cfb\u5217\u5b89\u5168\u63aa\u65bd\uff0c\u5982\u914d\u7f6e VPC\uff08Virtual Private Cloud\uff09\u3001\u4f7f\u7528\u5b89\u5168\u7ec4\u548c\u52a0\u5bc6\u6280\u672f\u7b49\uff0c\u6765\u4fdd\u969c\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"]}),"\n"]})]})}function c(e={}){const{wrapper:S}={...(0,t.R)(),...e.components};return S?(0,s.jsx)(S,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},8453:(e,S,n)=>{n.d(S,{R:()=>r,x:()=>l});var i=n(6540);const s={},t=i.createContext(s);function r(e){const S=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(S):{...S,...e}}),[S,e])}function l(e){let S;return S=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:S},e.children)}}}]);