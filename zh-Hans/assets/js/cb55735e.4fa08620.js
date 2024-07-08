"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[322],{6060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(4848),i=t(8453);const s={},l="Spring MVC\u4e2d\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668\u7684\u533a\u522b",c={id:"Java/20230810",title:"Spring MVC\u4e2d\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668\u7684\u533a\u522b",description:"\u5728Spring MVC\u4e2d\uff0c\u8fc7\u6ee4\u5668\uff08Filter\uff09\u548c\u62e6\u622a\u5668\uff08Interceptor\uff09\u662f\u7528\u4e8e\u5904\u7406Web\u8bf7\u6c42\u7684\u4e24\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u5b83\u4eec\u5728\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u4e00\u4e9b\u533a\u522b\u3002",source:"@site/docs/Java/20230810.md",sourceDirName:"Java",slug:"/Java/20230810",permalink:"/my-website/zh-Hans/docs/Java/20230810",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/Java/20230810.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RPC\u8fdc\u7a0b\u8c03\u7528\u65f6\uff0c\u51fa\u73b0\u9519\u8bef\uff08413 Request Entity Too Large\uff09",permalink:"/my-website/zh-Hans/docs/Java/20230801"},next:{title:'\u5728build.gradle.kts\u6587\u4ef6\u4e2d plugin kotlin("jvm")\u548ckotlin("plugin.spring")\u4ec0\u4e48\u4f5c\u7528',permalink:"/my-website/zh-Hans/docs/Java/20230814"}},p={},o=[{value:"\u5728Spring MVC\u4e2d\uff0c\u8fc7\u6ee4\u5668\uff08Filter\uff09\u548c\u62e6\u622a\u5668\uff08Interceptor\uff09\u662f\u7528\u4e8e\u5904\u7406Web\u8bf7\u6c42\u7684\u4e24\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u5b83\u4eec\u5728\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u4e00\u4e9b\u533a\u522b\u3002",id:"\u5728spring-mvc\u4e2d\u8fc7\u6ee4\u5668filter\u548c\u62e6\u622a\u5668interceptor\u662f\u7528\u4e8e\u5904\u7406web\u8bf7\u6c42\u7684\u4e24\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\u5b83\u4eec\u5728\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u4e00\u4e9b\u533a\u522b",level:2}];function a(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spring-mvc\u4e2d\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668\u7684\u533a\u522b",children:"Spring MVC\u4e2d\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668\u7684\u533a\u522b"}),"\n",(0,r.jsx)(n.h2,{id:"\u5728spring-mvc\u4e2d\u8fc7\u6ee4\u5668filter\u548c\u62e6\u622a\u5668interceptor\u662f\u7528\u4e8e\u5904\u7406web\u8bf7\u6c42\u7684\u4e24\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\u5b83\u4eec\u5728\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u4e00\u4e9b\u533a\u522b",children:"\u5728Spring MVC\u4e2d\uff0c\u8fc7\u6ee4\u5668\uff08Filter\uff09\u548c\u62e6\u622a\u5668\uff08Interceptor\uff09\u662f\u7528\u4e8e\u5904\u7406Web\u8bf7\u6c42\u7684\u4e24\u79cd\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u5b83\u4eec\u5728\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u4e00\u4e9b\u533a\u522b\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_16.png",src:t(1784).A+"",width:"768",height:"287"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u751f\u547d\u5468\u671f\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u8fc7\u6ee4\u5668\u662f\u57fa\u4e8eServlet\u89c4\u8303\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u5728\u8bf7\u6c42\u8fdb\u5165Servlet\u5bb9\u5668\u4e4b\u524d\u62e6\u622a\u8bf7\u6c42\uff0c\u5e76\u5728\u54cd\u5e94\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u4e4b\u524d\u62e6\u622a\u54cd\u5e94\u3002\u8fc7\u6ee4\u5668\u7684\u751f\u547d\u5468\u671f\u7531Servlet\u5bb9\u5668\u7ba1\u7406\u3002\n\u62e6\u622a\u5668\u662fSpring MVC\u6846\u67b6\u81ea\u5df1\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u5728\u8bf7\u6c42\u8fdb\u5165Spring MVC\u63a7\u5236\u5668\u4e4b\u524d\u62e6\u622a\u8bf7\u6c42\uff0c\u5e76\u5728\u63a7\u5236\u5668\u5904\u7406\u8bf7\u6c42\u540e\u3001\u89c6\u56fe\u6e32\u67d3\u524d\u62e6\u622a\u54cd\u5e94\u3002\u62e6\u622a\u5668\u7684\u751f\u547d\u5468\u671f\u7531Spring\u5bb9\u5668\u7ba1\u7406\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u8fc7\u6ee4\u5668\u662f\u57fa\u4e8eServlet\u89c4\u8303\u7684\uff0c\u4e0d\u4f9d\u8d56\u4e8eSpring\u6846\u67b6\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u57fa\u4e8eServlet\u7684Web\u5e94\u7528\u4e2d\u4f7f\u7528\u3002\n\u62e6\u622a\u5668\u662fSpring MVC\u6846\u67b6\u63d0\u4f9b\u7684\u7279\u6027\uff0c\u4f9d\u8d56\u4e8eSpring MVC\u6846\u67b6\uff0c\u53ea\u80fd\u5728\u4f7f\u7528\u4e86Spring MVC\u7684\u5e94\u7528\u4e2d\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u8fc7\u6ee4\u5668\u5728Web\u5e94\u7528\u7684web.xml\u6587\u4ef6\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u9700\u8981\u6307\u5b9a\u8fc7\u6ee4\u5668\u7684\u540d\u79f0\u3001\u7c7b\u540d\u548c\u62e6\u622a\u7684URL\u6a21\u5f0f\u3002\n\u62e6\u622a\u5668\u5728Spring MVC\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5b9e\u73b0\u4e86Spring\u7684HandlerInterceptor\u63a5\u53e3\u7684\u62e6\u622a\u5668\u7c7b\uff0c\u5e76\u914d\u7f6e\u62e6\u622a\u7684\u8def\u5f84\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u529f\u80fd\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u8fc7\u6ee4\u5668\u53ef\u4ee5\u5728\u8bf7\u6c42\u5230\u8fbeServlet\u4e4b\u524d\u8fdb\u884c\u4e00\u4e9b\u9884\u5904\u7406\u64cd\u4f5c\uff0c\u6bd4\u5982\u8eab\u4efd\u9a8c\u8bc1\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u7f16\u7801\u8f6c\u6362\u7b49\u3002\u5b83\u4eec\u5bf9\u4e8e\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u751f\u6548\u3002\n\u62e6\u622a\u5668\u53ef\u4ee5\u5728\u8bf7\u6c42\u5230\u8fbe\u63a7\u5236\u5668\u4e4b\u524d\u548c\u4e4b\u540e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\u64cd\u4f5c\uff0c\u6bd4\u5982\u8eab\u4efd\u9a8c\u8bc1\u3001\u6743\u9650\u68c0\u67e5\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u6027\u80fd\u76d1\u63a7\u7b49\u3002\u62e6\u622a\u5668\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u6027\u5730\u5e94\u7528\u4e8e\u67d0\u4e9b\u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7efc\u4e0a\u6240\u8ff0\uff0c\u8fc7\u6ee4\u5668\u662f\u57fa\u4e8eServlet\u89c4\u8303\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u6240\u6709\u57fa\u4e8eServlet\u7684Web\u5e94\u7528\uff0c\u800c\u62e6\u622a\u5668\u662fSpring MVC\u6846\u67b6\u63d0\u4f9b\u7684\u7279\u6027\uff0c\u53ea\u80fd\u5728\u4f7f\u7528\u4e86Spring\nMVC\u7684\u5e94\u7528\u4e2d\u4f7f\u7528\u3002\u8fc7\u6ee4\u5668\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548\uff0c\u800c\u62e6\u622a\u5668\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u5e94\u7528\u4e8e\u67d0\u4e9b\u8bf7\u6c42\u3002"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1784:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/img_16-649b35cb0b6c33bd3bea6a13cadbb683.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);