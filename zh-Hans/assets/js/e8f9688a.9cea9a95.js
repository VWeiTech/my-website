"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7652],{5816:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(4848),i=s(8453);const t={},l=void 0,c={id:"AWS/ETL",title:"ETL",description:"ETL \u5373",source:"@site/docs/AWS/ETL.md",sourceDirName:"AWS",slug:"/AWS/ETL",permalink:"/my-website/zh-Hans/docs/AWS/ETL",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/ETL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon SNS",permalink:"/my-website/zh-Hans/docs/AWS/Amazon_SNS"},next:{title:"VPC Peering",permalink:"/my-website/zh-Hans/docs/AWS/VPC_Peering"}},o={},d=[{value:"\u63d0\u53d6\uff08Extract\uff09",id:"\u63d0\u53d6extract",level:3},{value:"\u8f6c\u6362\uff08Transform\uff09",id:"\u8f6c\u6362transform",level:3},{value:"\u52a0\u8f7d\uff08Load\uff09",id:"\u52a0\u8f7dload",level:3},{value:"ETL \u7684\u91cd\u8981\u6027",id:"etl-\u7684\u91cd\u8981\u6027",level:3}];function h(n){const e={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"ETL \u5373\nExtract\uff08\u63d0\u53d6\uff09\u3001Transform\uff08\u8f6c\u6362\uff09\u3001Load\uff08\u52a0\u8f7d\uff09\uff0c\u662f\u6570\u636e\u4ed3\u5e93\u3001\u6570\u636e\u5206\u6790\u548c\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u6838\u5fc3\u6b65\u9aa4\uff0c\u7528\u4e8e\u5c06\u6570\u636e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u6e90\u79fb\u52a8\u5230\u76ee\u6807\u7cfb\u7edf\uff08\u5982\u6570\u636e\u4ed3\u5e93\uff09\uff0c\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u5fc5\u8981\u7684\u5904\u7406\u548c\u8f6c\u6362\uff0c\u4ee5\u6ee1\u8db3\u540e\u7eed\u5206\u6790\u548c\u5e94\u7528\u7684\u9700\u6c42\u3002\u4ee5\u4e0b\u662f\u5bf9\nETL \u5404\u9636\u6bb5\u7684\u8be6\u7ec6\u89e3\u91ca\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"\u63d0\u53d6extract",children:"\u63d0\u53d6\uff08Extract\uff09"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u4ece\u5404\u79cd\u4e0d\u540c\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u6570\u636e\u7684\u8fc7\u7a0b\u3002\u8fd9\u4e9b\u6570\u636e\u6e90\u53ef\u4ee5\u662f\u591a\u79cd\u591a\u6837\u7684\uff0c\u5305\u62ec\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08\u5982 MySQL\u3001Oracle\uff09\u3001\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08\u5982\nMongoDB\u3001Cassandra\uff09\u3001\u6587\u4ef6\u7cfb\u7edf\uff08\u5982 CSV \u6587\u4ef6\u3001JSON \u6587\u4ef6\uff09\u3001\u65e5\u5fd7\u6587\u4ef6\u3001\u7f51\u9875\u6570\u636e\u7b49\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u65b9\u6cd5"}),"\uff1a\u63d0\u53d6\u6570\u636e\u7684\u65b9\u6cd5\u53d6\u51b3\u4e8e\u6570\u636e\u6e90\u7684\u7c7b\u578b\u548c\u7279\u6027\u3002\u5bf9\u4e8e\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528 SQL \u67e5\u8be2\u8bed\u53e5\u6765\u63d0\u53d6\u7279\u5b9a\u7684\u6570\u636e\uff1b\u5bf9\u4e8e\u6587\u4ef6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\u6765\u83b7\u53d6\u6570\u636e\u3002\u4f8b\u5982\uff0c\u4f7f\u7528\nPython \u7684 ",(0,r.jsx)(e.code,{children:"pandas"})," \u5e93\u53ef\u4ee5\u65b9\u4fbf\u5730\u8bfb\u53d6 CSV \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u3002\u5728 AWS \u73af\u5883\u4e2d\uff0cAWS Glue \u53ef\u4ee5\u81ea\u52a8\u53d1\u73b0\u5e76\u4ece Amazon S3 \u5b58\u50a8\u6876\u3001Amazon\nRDS \u6570\u636e\u5e93\u7b49\u6570\u636e\u6e90\u4e2d\u63d0\u53d6\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8f6c\u6362transform",children:"\u8f6c\u6362\uff08Transform\uff09"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u5bf9\u63d0\u53d6\u5230\u7684\u6570\u636e\u8fdb\u884c\u6e05\u6d17\u3001\u8f6c\u6362\u548c\u96c6\u6210\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u8d28\u91cf\u548c\u4e00\u81f4\u6027\uff0c\u4f7f\u5176\u7b26\u5408\u76ee\u6807\u7cfb\u7edf\u7684\u8981\u6c42\u3002\u8fd9\u662f ETL \u8fc7\u7a0b\u4e2d\u6700\u590d\u6742\u548c\u5173\u952e\u7684\u73af\u8282\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5e38\u89c1\u64cd\u4f5c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u6e05\u6d17"}),"\uff1a\u53bb\u9664\u91cd\u590d\u6570\u636e\u3001\u5904\u7406\u7f3a\u5931\u503c\u3001\u7ea0\u6b63\u9519\u8bef\u6570\u636e\u7b49\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6570\u636e\u4e2d\u5b58\u5728\u5e74\u9f84\u4e3a\u8d1f\u6570\u7684\u8bb0\u5f55\uff0c\u9700\u8981\u8fdb\u884c\u4fee\u6b63\u6216\u5220\u9664\uff1b\u5bf9\u4e8e\u7f3a\u5931\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\u5747\u503c\u3001\u4e2d\u4f4d\u6570\u7b49\u65b9\u6cd5\u8fdb\u884c\u586b\u5145\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u6807\u51c6\u5316"}),"\uff1a\u5c06\u6570\u636e\u8f6c\u6362\u4e3a\u7edf\u4e00\u7684\u683c\u5f0f\u548c\u6807\u51c6\u3002\u6bd4\u5982\uff0c\u5c06\u4e0d\u540c\u683c\u5f0f\u7684\u65e5\u671f\u6570\u636e\u8f6c\u6362\u4e3a\u7edf\u4e00\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u5c06\u4e0d\u540c\u5355\u4f4d\u7684\u5ea6\u91cf\u6570\u636e\u8fdb\u884c\u5355\u4f4d\u6362\u7b97\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u805a\u5408"}),"\uff1a\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\u548c\u6c47\u603b\uff0c\u8ba1\u7b97\u7edf\u8ba1\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u6309\u5730\u533a\u5206\u7ec4\u7edf\u8ba1\u9500\u552e\u6570\u636e\u7684\u603b\u548c\u3001\u5e73\u5747\u503c\u7b49\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u5173\u8054"}),"\uff1a\u5c06\u6765\u81ea\u4e0d\u540c\u6570\u636e\u6e90\u7684\u6570\u636e\u8fdb\u884c\u5173\u8054\u548c\u5408\u5e76\u3002\u4f8b\u5982\uff0c\u5c06\u5ba2\u6237\u4fe1\u606f\u8868\u548c\u8ba2\u5355\u4fe1\u606f\u8868\u6839\u636e\u5ba2\u6237 ID \u8fdb\u884c\u5173\u8054\uff0c\u4ee5\u83b7\u53d6\u66f4\u5168\u9762\u7684\u5ba2\u6237\u8ba2\u5355\u6570\u636e\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u52a0\u8f7dload",children:"\u52a0\u8f7d\uff08Load\uff09"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u5c06\u7ecf\u8fc7\u8f6c\u6362\u5904\u7406\u540e\u7684\u6570\u636e\u52a0\u8f7d\u5230\u76ee\u6807\u7cfb\u7edf\u4e2d\u7684\u8fc7\u7a0b\u3002\u76ee\u6807\u7cfb\u7edf\u53ef\u4ee5\u662f\u6570\u636e\u4ed3\u5e93\u3001\u6570\u636e\u96c6\u5e02\u3001\u5206\u6790\u6570\u636e\u5e93\u7b49\uff0c\u7528\u4e8e\u540e\u7eed\u7684\u6570\u636e\u5206\u6790\u3001\u62a5\u8868\u751f\u6210\u3001\u673a\u5668\u5b66\u4e60\u7b49\u5e94\u7528\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u52a0\u8f7d\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5168\u91cf\u52a0\u8f7d"}),"\uff1a\u5c06\u6240\u6709\u6570\u636e\u4e00\u6b21\u6027\u52a0\u8f7d\u5230\u76ee\u6807\u7cfb\u7edf\u4e2d\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u6570\u636e\u91cf\u8f83\u5c0f\u6216\u8005\u6570\u636e\u66f4\u65b0\u9891\u7387\u8f83\u4f4e\u7684\u60c5\u51b5\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u589e\u91cf\u52a0\u8f7d"}),"\uff1a\u53ea\u52a0\u8f7d\u81ea\u4e0a\u6b21\u52a0\u8f7d\u4ee5\u6765\u53d1\u751f\u53d8\u5316\u7684\u6570\u636e\u3002\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u51cf\u5c11\u6570\u636e\u52a0\u8f7d\u7684\u65f6\u95f4\u548c\u8d44\u6e90\u6d88\u8017\uff0c\u9002\u7528\u4e8e\u6570\u636e\u91cf\u8f83\u5927\u4e14\u6570\u636e\u66f4\u65b0\u9891\u7e41\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"etl-\u7684\u91cd\u8981\u6027",children:"ETL \u7684\u91cd\u8981\u6027"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u6574\u5408"}),"\uff1a\u5728\u4f01\u4e1a\u4e2d\uff0c\u6570\u636e\u901a\u5e38\u5206\u6563\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\u548c\u90e8\u95e8\u4e2d\uff0cETL \u53ef\u4ee5\u5c06\u8fd9\u4e9b\u5206\u6563\u7684\u6570\u636e\u6574\u5408\u5230\u4e00\u4e2a\u7edf\u4e00\u7684\u5e73\u53f0\u4e0a\uff0c\u65b9\u4fbf\u8fdb\u884c\u5168\u5c40\u7684\u6570\u636e\u5206\u6790\u548c\u51b3\u7b56\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u8d28\u91cf\u63d0\u5347"}),"\uff1a\u901a\u8fc7\u6570\u636e\u6e05\u6d17\u548c\u8f6c\u6362\u64cd\u4f5c\uff0c\u53ef\u4ee5\u53bb\u9664\u6570\u636e\u4e2d\u7684\u566a\u58f0\u548c\u9519\u8bef\uff0c\u63d0\u9ad8\u6570\u636e\u7684\u51c6\u786e\u6027\u548c\u4e00\u81f4\u6027\uff0c\u4e3a\u540e\u7eed\u7684\u5206\u6790\u63d0\u4f9b\u53ef\u9760\u7684\u6570\u636e\u57fa\u7840\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u652f\u6301\u6570\u636e\u5206\u6790\u548c\u5e94\u7528"}),"\uff1a\u7ecf\u8fc7 ETL \u5904\u7406\u540e\u7684\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u6570\u636e\u5206\u6790\u5de5\u5177\u548c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u5546\u4e1a\u667a\u80fd\u5de5\u5177\u3001\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7b49\uff0c\u5e2e\u52a9\u4f01\u4e1a\u53d1\u73b0\u6570\u636e\u4e2d\u7684\u4ef7\u503c\u548c\u89c4\u5f8b\u3002"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(6540);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);