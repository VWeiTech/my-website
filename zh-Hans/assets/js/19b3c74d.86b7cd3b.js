"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7722],{7611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(4848),s=t(8453);const r={title:"\u600e\u6837\u83b7\u53d6\u4e00\u4e2a\u7f51\u7ad9\u7684CA\u8bc1\u4e66\uff1f"},o=void 0,l={id:"Linux/20240821",title:"\u600e\u6837\u83b7\u53d6\u4e00\u4e2a\u7f51\u7ad9\u7684CA\u8bc1\u4e66\uff1f",description:"\u8981\u4e0b\u8f7d\u4e00\u4e2a\u7f51\u7ad9\u7684CA\uff08Certificate Authority\uff0c\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff09\u8bc1\u4e66\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\uff1a\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u548c\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\u3002\u4e0b\u9762\u662f\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u5177\u4f53\u6b65\u9aa4\uff1a",source:"@site/docs/Linux/20240821.md",sourceDirName:"Linux",slug:"/Linux/20240821",permalink:"/my-website/zh-Hans/docs/Linux/20240821",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/Linux/20240821.md",tags:[],version:"current",frontMatter:{title:"\u600e\u6837\u83b7\u53d6\u4e00\u4e2a\u7f51\u7ad9\u7684CA\u8bc1\u4e66\uff1f"},sidebar:"tutorialSidebar",previous:{title:"\u5728Linux\u4e2dpoweroff shutdown halt\u533a\u522b",permalink:"/my-website/zh-Hans/docs/Linux/20230810"},next:{title:"Linux\u547d\u4ee4su\u3001sudo\u3001sudo su\u3001sudo -i\u4f7f\u7528\u548c\u533a\u522b",permalink:"/my-website/zh-Hans/docs/Linux/20241216"}},c={},a=[{value:"\u8981\u4e0b\u8f7d\u4e00\u4e2a\u7f51\u7ad9\u7684CA\uff08Certificate Authority\uff0c\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff09\u8bc1\u4e66\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\uff1a\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u548c\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\u3002\u4e0b\u9762\u662f\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u5177\u4f53\u6b65\u9aa4\uff1a",id:"\u8981\u4e0b\u8f7d\u4e00\u4e2a\u7f51\u7ad9\u7684cacertificate-authority\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u8bc1\u4e66\u901a\u5e38\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u548c\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\u4e0b\u9762\u662f\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u5177\u4f53\u6b65\u9aa4",level:3},{value:"1. \u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\uff1a",id:"1-\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d",level:4},{value:"2. \u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\uff1a",id:"2-\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d",level:4}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u8981\u4e0b\u8f7d\u4e00\u4e2a\u7f51\u7ad9\u7684cacertificate-authority\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u8bc1\u4e66\u901a\u5e38\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u548c\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\u4e0b\u9762\u662f\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u5177\u4f53\u6b65\u9aa4",children:"\u8981\u4e0b\u8f7d\u4e00\u4e2a\u7f51\u7ad9\u7684CA\uff08Certificate Authority\uff0c\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff09\u8bc1\u4e66\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\uff1a\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u548c\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\u3002\u4e0b\u9762\u662f\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u5177\u4f53\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsx)(n.h4,{id:"1-\u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d",children:"1. \u901a\u8fc7\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u6253\u5f00\u7f51\u7ad9\uff1a\n\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u4f60\u60f3\u8981\u83b7\u53d6\u8bc1\u4e66\u7684\u7f51\u7ad9\uff0c\u786e\u4fdd\u4f7f\u7528\u7684\u662f HTTPS \u534f\u8bae\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u67e5\u770b\u8bc1\u4e66\u4fe1\u606f\uff1a\n\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u4e2d\uff0c\u70b9\u51fb\u9501\u5f62\u56fe\u6807\uff08\u901a\u5e38\u4f4d\u4e8e\u7f51\u5740\u5de6\u4fa7\uff09\u3002\n\u9009\u62e9\u201c\u8bc1\u4e66\u201d\u6216\u201c\u8bc1\u4e66\u4fe1\u606f\u201d\u9009\u9879\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bfc\u51fa\u8bc1\u4e66\uff1a\n\u6d4f\u89c8\u5668\u5c06\u663e\u793a\u8bc1\u4e66\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\n\u6839\u636e\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\uff0c\u9009\u9879\u53ef\u80fd\u7565\u6709\u4e0d\u540c\u3002\u901a\u5e38\u4f60\u53ef\u4ee5\u9009\u62e9\u201c\u67e5\u770b\u8bc1\u4e66\u201d\u6216\u201c\u8be6\u7ec6\u4fe1\u606f\u201d\uff0c\u7136\u540e\u627e\u5230\u201c\u5bfc\u51fa\u201d\u6216\u201c\u53e6\u5b58\u4e3a\u201d\u9009\u9879\u6765\u4fdd\u5b58\u8bc1\u4e66\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2-\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d",children:"2. \u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4e0b\u8f7d\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5b89\u88c5openssl\uff1a\n\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u4e2d\u5df2\u5b89\u88c5\u4e86 OpenSSL\u3002\u5982\u679c\u5c1a\u672a\u5b89\u88c5\uff0c\u53ef\u4ee5\u5728\u5b98\u65b9\u7f51\u7ad9\u4e0a\u627e\u5230\u5b89\u88c5\u6307\u5357\uff1a",(0,i.jsx)(n.a,{href:"https://openssl-library.org/",children:"OpenSSL"})," \u5b98\u7f51"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e0b\u8f7d\u8bc1\u4e66\uff1a\n\u6253\u5f00\u7ec8\u7aef\u6216\u547d\u4ee4\u63d0\u793a\u7b26\u3002\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u8bc1\u4e66\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"   openssl s_client -connect example.com:443 -servername example.com < /dev/null \\\n   2>/dev/null | openssl x509 -outform PEM -out example.com.crt\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 example.com \u9700\u8981\u66ff\u6362\u6210\u4f60\u60f3\u8981\u83b7\u53d6\u8bc1\u4e66\u7684\u7f51\u7ad9\u57df\u540d\u3002"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);