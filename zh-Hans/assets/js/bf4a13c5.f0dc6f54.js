"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2482],{8945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(4848),o=n(8453);const i={},a="\u5728@SpringBootTest\u4e2dJasyptAutoConfiguration\u6ca1\u6709\u81ea\u52a8\u521b\u5efabean",s={id:"Java/20230725",title:"\u5728@SpringBootTest\u4e2dJasyptAutoConfiguration\u6ca1\u6709\u81ea\u52a8\u521b\u5efabean",description:"\u95ee\u9898\u80cc\u666f",source:"@site/docs/Java/20230725.md",sourceDirName:"Java",slug:"/Java/20230725",permalink:"/my-website/zh-Hans/docs/Java/20230725",draft:!1,unlisted:!1,editUrl:"https://github.com/VWeiTech/my-website/tree/main/docs/Java/20230725.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring \u4e8b\u52a1\u2014\u4e8b\u52a1\u7684\u4f20\u64ad\u673a\u5236",permalink:"/my-website/zh-Hans/docs/Java/20230328"},next:{title:"RPC\u8fdc\u7a0b\u8c03\u7528\u65f6\uff0c\u51fa\u73b0\u9519\u8bef\uff08413 Request Entity Too Large\uff09",permalink:"/my-website/zh-Hans/docs/Java/20230801"}},c={},p=[{value:"\u95ee\u9898\u80cc\u666f",id:"\u95ee\u9898\u80cc\u666f",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u5728springboottest\u4e2djasyptautoconfiguration\u6ca1\u6709\u81ea\u52a8\u521b\u5efabean",children:"\u5728@SpringBootTest\u4e2dJasyptAutoConfiguration\u6ca1\u6709\u81ea\u52a8\u521b\u5efabean"})}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898\u80cc\u666f",children:"\u95ee\u9898\u80cc\u666f"}),"\n",(0,r.jsx)(t.p,{children:"\u573a\u666f\u4e3a\u9700\u8981\u5199\u4e00\u4e2a@SpringBootTest\u5355\u5143\u6d4b\u8bd5\u6765\u8fdb\u884c\u90ae\u7bb1\u5bc6\u7801\u7684\u52a0\u89e3\u5bc6\u65f6\uff0c\u53d1\u73b0\u65e0\u6cd5\u81ea\u52a8\u6ce8\u5165StringEncryptor"}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,r.jsx)(t.p,{children:"\u5728Spring Boot\u6d4b\u8bd5\u4e2d\uff0cJasyptAutoConfiguration\u901a\u5e38\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efabean\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSpring Boot\u6d4b\u8bd5\u4e0a\u4e0b\u6587\u53ea\u4f1a\u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\u4e0a\u4e0b\u6587\u4e2d\u7684\u4e00\u5c0f\u90e8\u5206\u914d\u7f6e\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u5728\u6d4b\u8bd5\u4e2d\u4f7f\u7528Jasypt\uff0c\u4f60\u9700\u8981\u663e\u5f0f\u5730\u914d\u7f6eJasyptAutoConfiguration\uff0c\u4ee5\u4fbf\u5b83\u80fd\u591f\u5728\u6d4b\u8bd5\u4e0a\u4e0b\u6587\u4e2d\u521b\u5efa\u5fc5\u8981\u7684bean\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u6ce8\u89e3\u6765\u914d\u7f6eJasyptAutoConfiguration\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@SpringBootTest(classes = [JasyptAutoConfiguration::class])\nclass MyServiceTest {\n\n\t@Autowired\n\tprivate lateinit var encryptor: StringEncryptor\n\n    @Test\n    fun testEncryptionAndDecryption() {\n        val text = "Hello, world!"\n        val encryptedText = encryptor.encrypt(text)\n        val decryptedText = encryptor.decrypt(encryptedText)\n        assertEquals(text, decryptedText)\n    }\n\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);