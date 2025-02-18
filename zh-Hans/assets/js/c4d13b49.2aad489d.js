"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1457],{1223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>S,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=i(4848),r=i(8453);const l={},t="AWS Database Migration Service",a={id:"AWS/AWS_Database_Migration_Service",title:"AWS Database Migration Service",description:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",source:"@site/docs/AWS/AWS_Database_Migration_Service.md",sourceDirName:"AWS",slug:"/AWS/AWS_Database_Migration_Service",permalink:"/my-website/zh-Hans/docs/AWS/AWS_Database_Migration_Service",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/AWS/AWS_Database_Migration_Service.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS DataSync",permalink:"/my-website/zh-Hans/docs/AWS/AWS_DataSync"},next:{title:"AWS Fargate",permalink:"/my-website/zh-Hans/docs/AWS/AWS_Fargate"}},d={},c=[{value:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u8fc1\u79fb\u4efb\u52a1\u914d\u7f6e",id:"\u8fc1\u79fb\u4efb\u52a1\u914d\u7f6e",level:3},{value:"\u7aef\u70b9\u8bbe\u7f6e",id:"\u7aef\u70b9\u8bbe\u7f6e",level:3},{value:"\u6570\u636e\u8fc1\u79fb\u6267\u884c",id:"\u6570\u636e\u8fc1\u79fb\u6267\u884c",level:3},{value:"\u6838\u5fc3\u4f18\u52bf",id:"\u6838\u5fc3\u4f18\u52bf",level:2},{value:"\u7b80\u5316\u8fc1\u79fb\u8fc7\u7a0b",id:"\u7b80\u5316\u8fc1\u79fb\u8fc7\u7a0b",level:3},{value:"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u5f15\u64ce",id:"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u5f15\u64ce",level:3},{value:"\u5b9e\u65f6\u6570\u636e\u540c\u6b65",id:"\u5b9e\u65f6\u6570\u636e\u540c\u6b65",level:3},{value:"\u9ad8\u53ef\u9760\u6027\u4e0e\u5b89\u5168\u6027",id:"\u9ad8\u53ef\u9760\u6027\u4e0e\u5b89\u5168\u6027",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u672c\u5730\u6570\u636e\u5e93\u8fc1\u79fb\u5230 AWS \u4e91",id:"\u672c\u5730\u6570\u636e\u5e93\u8fc1\u79fb\u5230-aws-\u4e91",level:3},{value:"\u4e91\u5185\u6570\u636e\u5e93\u8fc1\u79fb",id:"\u4e91\u5185\u6570\u636e\u5e93\u8fc1\u79fb",level:3},{value:"\u6570\u636e\u5e93\u5347\u7ea7\u4e0e\u7248\u672c\u8fc1\u79fb",id:"\u6570\u636e\u5e93\u5347\u7ea7\u4e0e\u7248\u672c\u8fc1\u79fb",level:3},{value:"\u707e\u96be\u6062\u590d\u4e0e\u5907\u4efd",id:"\u707e\u96be\u6062\u590d\u4e0e\u5907\u4efd",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aws-database-migration-service",children:"AWS Database Migration Service"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u4e49\u4e0e\u6982\u8ff0",children:"\u5b9a\u4e49\u4e0e\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"AWS Database Migration Service\uff08AWS\nDMS\uff09\u662f\u4e9a\u9a6c\u900a\u4e91\u79d1\u6280\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u9879\u5b8c\u5168\u6258\u7ba1\u670d\u52a1\uff0c\u65e8\u5728\u5e2e\u52a9\u7528\u6237\u8f7b\u677e\u3001\u9ad8\u6548\u4e14\u5b89\u5168\u5730\u5c06\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u73af\u5883\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u73af\u5883\u3002\u8fd9\u4e9b\u73af\u5883\u65e2\u53ef\u4ee5\u662f\u4e0d\u540c\u7c7b\u578b\u7684\u672c\u5730\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u8fc1\u79fb\uff0c\u4e5f\u53ef\u4ee5\u662f\u4ece\u672c\u5730\u6570\u636e\u5e93\u8fc1\u79fb\u5230\nAWS \u4e91\u6570\u636e\u5e93\uff0c\u6216\u8005\u5728 AWS \u4e91\u5185\u4e0d\u540c\u6570\u636e\u5e93\u670d\u52a1\u4e4b\u95f4\u8fdb\u884c\u8fc1\u79fb\u3002\u5b83\u652f\u6301\u591a\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5e93\u5f15\u64ce\uff0c\u5982 MySQL\u3001Oracle\u3001SQL Server\u3001PostgreSQL\n\u7b49\uff0c\u80fd\u663e\u8457\u7b80\u5316\u6570\u636e\u5e93\u8fc1\u79fb\u8fc7\u7a0b\uff0c\u964d\u4f4e\u8fc1\u79fb\u98ce\u9669\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:i(3902).A+"",width:"595",height:"442"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8fc1\u79fb\u4efb\u52a1\u914d\u7f6e",children:"\u8fc1\u79fb\u4efb\u52a1\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u9996\u5148\u9700\u8981\u5728 AWS DMS \u63a7\u5236\u53f0\u521b\u5efa\u8fc1\u79fb\u4efb\u52a1\u3002\u5728\u521b\u5efa\u4efb\u52a1\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u6e90\u6570\u636e\u5e93\u548c\u76ee\u6807\u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5305\u62ec\u6570\u636e\u5e93\u7684\u5730\u5740\u3001\u7aef\u53e3\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u7b49\u3002\u540c\u65f6\uff0c\u8fd8\u9700\u8981\u914d\u7f6e\u8fc1\u79fb\u7c7b\u578b\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5168\u91cf\u8fc1\u79fb"}),"\uff1a\u5c06\u6e90\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u6570\u636e\u4e00\u6b21\u6027\u590d\u5236\u5230\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u3002\u9002\u7528\u4e8e\u9700\u8981\u5c06\u6574\u4e2a\u6570\u636e\u5e93\u8fc1\u79fb\u5230\u65b0\u73af\u5883\u7684\u573a\u666f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5168\u91cf + \u589e\u91cf\u8fc1\u79fb"}),"\uff1a\u5148\u8fdb\u884c\u5168\u91cf\u6570\u636e\u590d\u5236\uff0c\u7136\u540e\u6301\u7eed\u6355\u83b7\u6e90\u6570\u636e\u5e93\u4e2d\u7684\u589e\u91cf\u66f4\u6539\uff08\u5982\u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\uff09\uff0c\u5e76\u5b9e\u65f6\u540c\u6b65\u5230\u76ee\u6807\u6570\u636e\u5e93\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u9700\u8981\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u4fdd\u6301\u4e1a\u52a1\u8fde\u7eed\u6027\uff0c\u4e14\u6e90\u6570\u636e\u5e93\u4ecd\u5728\u4e0d\u65ad\u4ea7\u751f\u65b0\u6570\u636e\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7aef\u70b9\u8bbe\u7f6e",children:"\u7aef\u70b9\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"AWS DMS \u4f7f\u7528\u7aef\u70b9\u6765\u8fde\u63a5\u6e90\u6570\u636e\u5e93\u548c\u76ee\u6807\u6570\u636e\u5e93\u3002\u7aef\u70b9\u662f\u5bf9\u6570\u636e\u5e93\u7684\u903b\u8f91\u8868\u793a\uff0c\u7528\u6237\u9700\u8981\u4e3a\u6e90\u6570\u636e\u5e93\u548c\u76ee\u6807\u6570\u636e\u5e93\u5206\u522b\u521b\u5efa\u7aef\u70b9\u3002AWS DMS\n\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u7aef\u70b9\uff0c\u5305\u62ec\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5f15\u64ce\u4ee5\u53ca\u4e00\u4e9b\u5b58\u50a8\u670d\u52a1\uff08\u5982 Amazon S3\uff09\u3002\u5728\u521b\u5efa\u7aef\u70b9\u65f6\uff0c\u9700\u8981\u63d0\u4f9b\u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u8bbf\u95ee\u51ed\u8bc1\uff0cAWS\nDMS \u4f1a\u9a8c\u8bc1\u8fd9\u4e9b\u4fe1\u606f\u7684\u6709\u6548\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u8fc1\u79fb\u6267\u884c",children:"\u6570\u636e\u8fc1\u79fb\u6267\u884c"}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e\u597d\u8fc1\u79fb\u4efb\u52a1\u548c\u7aef\u70b9\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u542f\u52a8\u8fc1\u79fb\u4efb\u52a1\u3002AWS DMS \u4f1a\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u67b6\u6784\u8fc1\u79fb"}),"\uff1a\u9996\u5148\uff0c\u5b83\u4f1a\u5206\u6790\u6e90\u6570\u636e\u5e93\u7684\u67b6\u6784\uff08\u5982\u8868\u7ed3\u6784\u3001\u7d22\u5f15\u3001\u7ea6\u675f\u7b49\uff09\uff0c\u5e76\u5728\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u76f8\u5e94\u7684\u67b6\u6784\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6570\u636e\u590d\u5236"}),"\uff1a\u6839\u636e\u8fc1\u79fb\u7c7b\u578b\uff0c\u8fdb\u884c\u5168\u91cf\u6570\u636e\u590d\u5236\u548c\u589e\u91cf\u6570\u636e\u540c\u6b65\u3002\u5728\u6570\u636e\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0cAWS DMS\n\u4f1a\u4f7f\u7528\u4f18\u5316\u7684\u7b97\u6cd5\u548c\u6280\u672f\uff0c\u786e\u4fdd\u6570\u636e\u7684\u51c6\u786e\u6027\u548c\u5b8c\u6574\u6027\u3002\u540c\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u5904\u7406\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u3001\u5b57\u7b26\u96c6\u8f6c\u6362\u7b49\u95ee\u9898\uff0c\u4ee5\u9002\u5e94\u76ee\u6807\u6570\u636e\u5e93\u7684\u8981\u6c42\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u76d1\u63a7\u4e0e\u65e5\u5fd7\u8bb0\u5f55"}),"\uff1aAWS DMS \u4f1a\u5b9e\u65f6\u76d1\u63a7\u8fc1\u79fb\u4efb\u52a1\u7684\u6267\u884c\u8fdb\u5ea6\u548c\u72b6\u6001\uff0c\u5e76\u751f\u6210\u8be6\u7ec6\u7684\u65e5\u5fd7\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 AWS \u63a7\u5236\u53f0\u6216 CloudWatch\n\u67e5\u770b\u8fd9\u4e9b\u65e5\u5fd7\uff0c\u53ca\u65f6\u53d1\u73b0\u548c\u89e3\u51b3\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6838\u5fc3\u4f18\u52bf",children:"\u6838\u5fc3\u4f18\u52bf"}),"\n",(0,s.jsx)(n.h3,{id:"\u7b80\u5316\u8fc1\u79fb\u8fc7\u7a0b",children:"\u7b80\u5316\u8fc1\u79fb\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"AWS DMS \u63d0\u4f9b\u4e86\u76f4\u89c2\u7684\u63a7\u5236\u53f0\u548c\u5411\u5bfc\u5f0f\u754c\u9762\uff0c\u7528\u6237\u65e0\u9700\u7f16\u5199\u590d\u6742\u7684\u811a\u672c\u6216\u7a0b\u5e8f\uff0c\u53ea\u9700\u6309\u7167\u63d0\u793a\u8fdb\u884c\u914d\u7f6e\uff0c\u5373\u53ef\u5b8c\u6210\u6570\u636e\u5e93\u8fc1\u79fb\u4efb\u52a1\u3002\u5b83\u4f1a\u81ea\u52a8\u5904\u7406\u8bb8\u591a\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u7684\u590d\u6742\u7ec6\u8282\uff0c\u5982\u6570\u636e\u8f6c\u6362\u3001\u9519\u8bef\u5904\u7406\u7b49\uff0c\u5927\u5927\u964d\u4f4e\u4e86\u8fc1\u79fb\u7684\u96be\u5ea6\u548c\u5de5\u4f5c\u91cf\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u5f15\u64ce",children:"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u5f15\u64ce"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u670d\u52a1\u652f\u6301\u5e7f\u6cdb\u7684\u6570\u636e\u5e93\u5f15\u64ce\uff0c\u65e0\u8bba\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8fd8\u662f\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528 AWS DMS\n\u8fdb\u884c\u8fc1\u79fb\u3002\u8fd9\u4f7f\u5f97\u7528\u6237\u5728\u8fdb\u884c\u6570\u636e\u5e93\u8fc1\u79fb\u65f6\u5177\u6709\u66f4\u5927\u7684\u7075\u6d3b\u6027\uff0c\u80fd\u591f\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u65f6\u6570\u636e\u540c\u6b65",children:"\u5b9e\u65f6\u6570\u636e\u540c\u6b65"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u9700\u8981\u4fdd\u6301\u4e1a\u52a1\u8fde\u7eed\u6027\u7684\u8fc1\u79fb\u573a\u666f\uff0cAWS DMS \u7684\u5168\u91cf +\n\u589e\u91cf\u8fc1\u79fb\u529f\u80fd\u53ef\u4ee5\u5b9e\u65f6\u540c\u6b65\u6e90\u6570\u636e\u5e93\u7684\u589e\u91cf\u66f4\u6539\uff0c\u786e\u4fdd\u76ee\u6807\u6570\u636e\u5e93\u4e0e\u6e90\u6570\u636e\u5e93\u7684\u6570\u636e\u59cb\u7ec8\u4fdd\u6301\u4e00\u81f4\u3002\u8fd9\u6837\uff0c\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u4e1a\u52a1\u53ef\u4ee5\u7ee7\u7eed\u6b63\u5e38\u8fd0\u884c\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u6570\u636e\u4e0d\u4e00\u81f4\u800c\u53d7\u5230\u5f71\u54cd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u9ad8\u53ef\u9760\u6027\u4e0e\u5b89\u5168\u6027",children:"\u9ad8\u53ef\u9760\u6027\u4e0e\u5b89\u5168\u6027"}),"\n",(0,s.jsx)(n.p,{children:"AWS DMS \u91c7\u7528\u4e86\u591a\u79cd\u63aa\u65bd\u6765\u786e\u4fdd\u8fc1\u79fb\u8fc7\u7a0b\u7684\u53ef\u9760\u6027\u548c\u5b89\u5168\u6027\u3002\u5b83\u4f1a\u81ea\u52a8\u91cd\u8bd5\u5931\u8d25\u7684\u64cd\u4f5c\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u5b8c\u6574\u8fc1\u79fb\u3002\u540c\u65f6\uff0c\u5728\u6570\u636e\u4f20\u8f93\u8fc7\u7a0b\u4e2d\uff0c\u652f\u6301\nSSL/TLS \u52a0\u5bc6\uff0c\u4fdd\u62a4\u6570\u636e\u7684\u9690\u79c1\u548c\u5b89\u5168\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(n.h3,{id:"\u672c\u5730\u6570\u636e\u5e93\u8fc1\u79fb\u5230-aws-\u4e91",children:"\u672c\u5730\u6570\u636e\u5e93\u8fc1\u79fb\u5230 AWS \u4e91"}),"\n",(0,s.jsx)(n.p,{children:"\u4f01\u4e1a\u5e0c\u671b\u5c06\u672c\u5730\u7684\u6570\u636e\u4e2d\u5fc3\u8fc1\u79fb\u5230 AWS \u4e91\uff0c\u4ee5\u5229\u7528 AWS \u7684\u53ef\u6269\u5c55\u6027\u3001\u5f39\u6027\u548c\u6210\u672c\u6548\u76ca\u3002\u4f8b\u5982\uff0c\u5c06\u672c\u5730\u7684 MySQL \u6570\u636e\u5e93\u8fc1\u79fb\u5230 Amazon RDS\nfor MySQL \u6216 Amazon Aurora MySQL\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e91\u5185\u6570\u636e\u5e93\u8fc1\u79fb",children:"\u4e91\u5185\u6570\u636e\u5e93\u8fc1\u79fb"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 AWS \u4e91\u5185\u90e8\uff0c\u7528\u6237\u53ef\u80fd\u9700\u8981\u5c06\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u670d\u52a1\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u670d\u52a1\uff0c\u6216\u8005\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u4e4b\u95f4\u8fdb\u884c\u8fc1\u79fb\u3002\u4f8b\u5982\uff0c\u5c06\u6570\u636e\u4ece Amazon RDS\n\u8fc1\u79fb\u5230 Amazon Redshift \u8fdb\u884c\u6570\u636e\u5206\u6790\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u5e93\u5347\u7ea7\u4e0e\u7248\u672c\u8fc1\u79fb",children:"\u6570\u636e\u5e93\u5347\u7ea7\u4e0e\u7248\u672c\u8fc1\u79fb"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u5347\u7ea7\u6216\u8fc1\u79fb\u5230\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7248\u672c\u65f6\uff0cAWS DMS \u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5e73\u6ed1\u5730\u5b8c\u6210\u8fc1\u79fb\u8fc7\u7a0b\uff0c\u51cf\u5c11\u505c\u673a\u65f6\u95f4\u548c\u6570\u636e\u4e22\u5931\u7684\u98ce\u9669\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u707e\u96be\u6062\u590d\u4e0e\u5907\u4efd",children:"\u707e\u96be\u6062\u590d\u4e0e\u5907\u4efd"}),"\n",(0,s.jsx)(n.p,{children:"AWS DMS \u53ef\u4ee5\u7528\u4e8e\u5b9a\u671f\u5c06\u6570\u636e\u5e93\u5907\u4efd\u5230 AWS \u4e91\uff0c\u6216\u8005\u5728\u53d1\u751f\u707e\u96be\u65f6\u5c06\u6570\u636e\u5e93\u5feb\u901f\u6062\u590d\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002\u901a\u8fc7\u5b9e\u65f6\u6570\u636e\u540c\u6b65\u529f\u80fd\uff0c\u786e\u4fdd\u5907\u4efd\u6570\u636e\u7684\u53ca\u65f6\u6027\u548c\u51c6\u786e\u6027\u3002"})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3902:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_2-43aaf25cfca68ca093466c1bfac8e716.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);