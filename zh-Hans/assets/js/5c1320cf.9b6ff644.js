"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[222],{2634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const r={},s="RPC\u8fdc\u7a0b\u8c03\u7528\u65f6\uff0c\u51fa\u73b0\u9519\u8bef\uff08413 Request Entity Too Large\uff09",o={id:"Java/20230801",title:"RPC\u8fdc\u7a0b\u8c03\u7528\u65f6\uff0c\u51fa\u73b0\u9519\u8bef\uff08413 Request Entity Too Large\uff09",description:"\u95ee\u9898\u80cc\u666f",source:"@site/docs/Java/20230801.md",sourceDirName:"Java",slug:"/Java/20230801",permalink:"/my-website/zh-Hans/docs/Java/20230801",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/Java/20230801.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728@SpringBootTest\u4e2dJasyptAutoConfiguration\u6ca1\u6709\u81ea\u52a8\u521b\u5efabean",permalink:"/my-website/zh-Hans/docs/Java/20230725"},next:{title:"Spring MVC\u4e2d\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668\u7684\u533a\u522b",permalink:"/my-website/zh-Hans/docs/Java/20230810"}},l={},c=[{value:"\u95ee\u9898\u80cc\u666f",id:"\u95ee\u9898\u80cc\u666f",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8865\u5145\u77e5\u8bc6",id:"\u8865\u5145\u77e5\u8bc6",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rpc\u8fdc\u7a0b\u8c03\u7528\u65f6\u51fa\u73b0\u9519\u8bef413-request-entity-too-large",children:"RPC\u8fdc\u7a0b\u8c03\u7528\u65f6\uff0c\u51fa\u73b0\u9519\u8bef\uff08413 Request Entity Too Large\uff09"}),"\n",(0,i.jsx)(n.h2,{id:"\u95ee\u9898\u80cc\u666f",children:"\u95ee\u9898\u80cc\u666f"}),"\n",(0,i.jsx)(n.p,{children:"\u5728regional-api\u901a\u8fc7open feign rpc\u8fdc\u7a0b\u8c03\u7528balance\u7684subAccounts\u63a5\u53e3\u65f6\u62a5\u9519413 Request Entity Too Large\uff0c\u67e5\u770b\u8c03\u7528\u94fe\u65e5\u5fd7\uff0c\u5728spring cloud\ngateway\u65e5\u5fd7\u4e2d\u51fa\u73b0\u4e86io.netty.handler.codec.TooLongFrameException: An HTTP line is larger than 4096 bytes"}),"\n",(0,i.jsx)(n.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,i.jsx)(n.p,{children:"Spring Cloud Gateway\u9ed8\u8ba4\u4f7f\u7528\u7684\u662fNetty\u670d\u52a1\u5668\uff0cregional-api\u53d1\u9001\u7684GET\u8bf7\u6c42@RequestParam\u8fc7\u5927\uff0c\u5bfc\u81f4\u8d85\u8fc7\u4e86maxInitialLineLength\u9ed8\u8ba4\u5927\u5c0f"}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6emaxInitialLineLength\u5927\u5c0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 8080\n  servlet:\n    context-path: /gateway\n  netty:\n    workerCount: 2\n    maxConnections: 5000\n    connectionTimeout: 30000\n    maxInitialLineLength: 8192\n    maxHeaderSize: 8192\n    maxChunkSize: 8192\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8865\u5145\u77e5\u8bc6",children:"\u8865\u5145\u77e5\u8bc6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Spring Cloud Gateway \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f Netty \u670d\u52a1\u5668\u3002Netty \u662f\u4e00\u4e2a\u57fa\u4e8e NIO\uff08\u975e\u963b\u585e I/O\uff09\u7684\u7f51\u7edc\u7f16\u7a0b\u6846\u67b6\uff0c\u5177\u6709\u9ad8\u6027\u80fd\u3001\u7075\u6d3b\u6027\u548c\u53ef\u6269\u5c55\u6027\u7684\u7279\u70b9\u3002\u5728 Spring Cloud Gateway\n\u4e2d\uff0cNetty \u4f5c\u4e3a\u5e95\u5c42\u670d\u52a1\u5668\uff0c\u63d0\u4f9b\u4e86\u9ad8\u6027\u80fd\u7684\u8bf7\u6c42\u54cd\u5e94\u5904\u7406\u80fd\u529b\uff0c\u5e76\u652f\u6301 HTTP/1.1 \u548c HTTP/2 \u534f\u8bae\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Spring Cloud Gateway \u901a\u8fc7 spring-cloud-starter-gateway \u5f15\u5165\u4f9d\u8d56\uff0c\u5e76\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e00\u4e2a NettyWebServerFactory bean\uff0c\u7528\u4e8e\u521b\u5efa Netty \u670d\u52a1\u5668\u3002\u5f53\u4f60\u4f7f\u7528\nSpring Cloud Gateway \u521b\u5efa\u7f51\u5173\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u542f\u52a8\u8be5\u670d\u52a1\u5668\uff0c\u5e76\u76d1\u542c\u6307\u5b9a\u7684\u7aef\u53e3\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Netty \u670d\u52a1\u5668\u7684\u4e00\u4e9b\u9ed8\u8ba4\u53c2\u6570\uff0c\u4f8b\u5982 workerCount\u3001maxConnections\u3001connectionTimeout\u3001maxInitialLineLength\u3001maxHeaderSize\n\u548c maxChunkSize \u7b49\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u4fee\u6539\u8fd9\u4e9b\u53c2\u6570\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u4f7f\u7528 Spring Cloud Gateway \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u5176\u4ed6\u7684\u670d\u52a1\u5668\uff0c\u4f8b\u5982 Tomcat \u6216 Undertow\uff0c\u53ea\u9700\u5f15\u5165\u76f8\u5e94\u7684\u4f9d\u8d56\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"maxInitialLineLength \u662f\u4e00\u4e2a\u7f51\u7edc\u901a\u4fe1\u534f\u8bae\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u9650\u5236\u521d\u59cb\u884c\uff08\u5373\u8bf7\u6c42\u884c\u6216\u72b6\u6001\u884c\uff09\u7684\u6700\u5927\u957f\u5ea6\u3002\u5728 HTTP \u534f\u8bae\u4e2d\uff0c\u521d\u59cb\u884c\u5305\u62ec\u65b9\u6cd5\u3001URI \u548c\u534f\u8bae\u7248\u672c\u53f7\uff08\u5bf9\u4e8e\u8bf7\u6c42\uff09\uff0c\u6216\u72b6\u6001\u7801\u3001\u72b6\u6001\u6d88\u606f\u548c\u534f\u8bae\u7248\u672c\u53f7\uff08\u5bf9\u4e8e\u54cd\u5e94\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9650\u5236\u521d\u59cb\u884c\u7684\u6700\u5927\u957f\u5ea6\u6709\u4ee5\u4e0b\u4f5c\u7528\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9632\u6b62\u7f13\u51b2\u533a\u6ea2\u51fa\u653b\u51fb\n\u653b\u51fb\u8005\u53ef\u80fd\u4f1a\u53d1\u9001\u8fc7\u957f\u7684\u8bf7\u6c42\u6216\u54cd\u5e94\uff0c\u4ee5\u89e6\u53d1\u670d\u52a1\u5668\u7684\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e\uff0c\u4ece\u800c\u5b9e\u73b0\u653b\u51fb\u3002\u901a\u8fc7\u9650\u5236\u521d\u59cb\u884c\u7684\u6700\u5927\u957f\u5ea6\uff0c\u53ef\u4ee5\u9632\u6b62\u8fd9\u7c7b\u653b\u51fb\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u63d0\u9ad8\u7f51\u7edc\u901a\u4fe1\u6548\u7387\n\u9650\u5236\u521d\u59cb\u884c\u7684\u6700\u5927\u957f\u5ea6\u53ef\u4ee5\u51cf\u5c11\u7f51\u7edc\u901a\u4fe1\u7684\u5e26\u5bbd\u5360\u7528\u548c\u4f20\u8f93\u5ef6\u8fdf\uff0c\u4ece\u800c\u63d0\u9ad8\u7f51\u7edc\u901a\u4fe1\u7684\u6548\u7387\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4fdd\u8bc1\u534f\u8bae\u7684\u7a33\u5b9a\u6027\u548c\u517c\u5bb9\u6027\n\u4e0d\u540c\u7684\u7f51\u7edc\u901a\u4fe1\u534f\u8bae\u5bf9\u521d\u59cb\u884c\u7684\u957f\u5ea6\u6709\u4e0d\u540c\u7684\u9650\u5236\u3002\u901a\u8fc7\u9650\u5236\u521d\u59cb\u884c\u7684\u6700\u5927\u957f\u5ea6\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u534f\u8bae\u7684\u7a33\u5b9a\u6027\u548c\u517c\u5bb9\u6027\uff0c\u540c\u65f6\u907f\u514d\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u534f\u8bae\u9519\u8bef\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u521d\u59cb\u884c\u7684\u957f\u5ea6\u8d85\u8fc7\u4e86 maxInitialLineLength \u6307\u5b9a\u7684\u503c\uff0c\u901a\u5e38\u4f1a\u5bfc\u81f4\u901a\u4fe1\u5931\u8d25\u3002\u56e0\u6b64\uff0c\u5728\u8bbe\u8ba1\u7f51\u7edc\u901a\u4fe1\u534f\u8bae\u65f6\uff0c\u9700\u8981\u8003\u8651\u5230\u521d\u59cb\u884c\u7684\u957f\u5ea6\u9650\u5236\uff0c\u5e76\u6839\u636e\u9700\u6c42\u8fdb\u884c\u76f8\u5e94\u7684\u8bbe\u7f6e\u3002"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);