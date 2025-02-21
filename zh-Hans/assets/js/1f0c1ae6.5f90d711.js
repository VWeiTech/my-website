"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5038],{503:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Database/PostgreSQL/20230811","title":"postgres\u81ea\u589e\u5e8f\u5217","description":"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u5f53\u524d\u503c","source":"@site/docs/Database/PostgreSQL/20230811.md","sourceDirName":"Database/PostgreSQL","slug":"/Database/PostgreSQL/20230811","permalink":"/my-website/zh-Hans/docs/Database/PostgreSQL/20230811","draft":false,"unlisted":false,"editUrl":"https://github.com/VWeiTech/my-website/tree/main/docs/Database/PostgreSQL/20230811.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"TTL \u7d22\u5f15(TTL Indexes)","permalink":"/my-website/zh-Hans/docs/Database/MongoDB/TTL Indexes"},"next":{"title":"docker\u5bb9\u5668\u8bbf\u95ee\u672c\u5730\u6570\u636e\u5e93\u6216\u4eceDocker\u5bb9\u5668\u5185\u90e8\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c127.0.0.1\uff0clocalhost\u5747\u65e0\u6cd5\u8bbf\u95ee","permalink":"/my-website/zh-Hans/docs/Docker/20230327"}}');var a=s(4848),r=s(8453);const l={},c="postgres\u81ea\u589e\u5e8f\u5217",x={},d=[{value:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u5f53\u524d\u503c",id:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u5f53\u524d\u503c",level:3},{value:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u4e0b\u4e00\u4e2a\u503c",id:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u4e0b\u4e00\u4e2a\u503c",level:3},{value:"\u521b\u5efaxxx\u81ea\u589e\u5e8f\u5217",id:"\u521b\u5efaxxx\u81ea\u589e\u5e8f\u5217",level:3},{value:"\u4fee\u6539xxx\u81ea\u589e\u5e8f\u5217\uff0c\u9664\u4e86start\u4e4b\u5916\u7684\u5176\u4ed6\u503c\u90fd\u53ef\u4ee5\u4fee\u6539",id:"\u4fee\u6539xxx\u81ea\u589e\u5e8f\u5217\u9664\u4e86start\u4e4b\u5916\u7684\u5176\u4ed6\u503c\u90fd\u53ef\u4ee5\u4fee\u6539",level:3},{value:"\u4fee\u6539\u67d0\u4e2a\u5b57\u6bb5\u7684\u81ea\u589e\u5e8f\u5217",id:"\u4fee\u6539\u67d0\u4e2a\u5b57\u6bb5\u7684\u81ea\u589e\u5e8f\u5217",level:3},{value:"\u8bbe\u7f6e\u81ea\u589e\u957f\u4ece\u5f53\u524d\u6700\u5927\u503c\u5f00\u59cb",id:"\u8bbe\u7f6e\u81ea\u589e\u957f\u4ece\u5f53\u524d\u6700\u5927\u503c\u5f00\u59cb",level:3},{value:"\u91cd\u7f6e\u81ea\u589e\u5b57\u6bb5\u4e3a1",id:"\u91cd\u7f6e\u81ea\u589e\u5b57\u6bb5\u4e3a1",level:3}];function i(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"postgres\u81ea\u589e\u5e8f\u5217",children:"postgres\u81ea\u589e\u5e8f\u5217"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u5f53\u524d\u503c",children:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u5f53\u524d\u503c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" select currval('xxx');\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" select currval(pg_get_serial_sequence('user', 'userId'))\n \u7b49\u4ef7\u4e8e\uff1a\n SELECT currval('user_userId_seq')\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e3a\u4ec0\u4e48\u7528pg_get_serial_sequence\u5462\uff1f\u56e0\u4e3asequence\u7684\u540d\u79f0\u662f\u53ef\u4ee5\u4eba\u4e3a\u6539\u53d8\u7684\n\u9ed8\u8ba4\u751f\u6210\u7684\u662f[\u8868\u540d]_[\u81ea\u589e\u5217\u540d]_seq\uff0c\u4e0d\u8fc7\u4eba\u5de5\u6dfb\u52a0\u7684\u4ec0\u4e48\u4e5f\u53ef\u80fd\u7684\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u4e0b\u4e00\u4e2a\u503c",children:"\u67e5\u627exxx\u81ea\u589e\u5e8f\u5217\u7684\u4e0b\u4e00\u4e2a\u503c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select nextval('xxx');\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u521b\u5efaxxx\u81ea\u589e\u5e8f\u5217",children:"\u521b\u5efaxxx\u81ea\u589e\u5e8f\u5217"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" CREATE SEQUENCE xxx\n    INCREMENT 1    --- \u5e8f\u5217\u589e\u957f\u6b65\u503c\n   MINVALUE 1   --- \u6700\u5c0f\u503c\n   MAXVALUE 9999999999    --- \u6700\u5927\u503c\n   START 1  --- \u5f00\u59cb\u503c\n   CACHE 1   --- \u7f13\u5b58\u503c\uff0c\u4f1a\u5728cache\u4e2d\u9884\u5b58\u5e8f\u5217\u503c\uff0c\u5982\u679c\u6570\u636e\u5e93\u5f02\u5e38\u5173\u95ed\uff0c\u5e8f\u5217\u503c\u4f1a\u4e22\u5931\n   CYCLE; ---\u5faa\u73af\uff0c\u8868\u793a\u5230\u6700\u5927\u503c\u540e\u4ece\u5934\u5f00\u59cb\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4fee\u6539xxx\u81ea\u589e\u5e8f\u5217\u9664\u4e86start\u4e4b\u5916\u7684\u5176\u4ed6\u503c\u90fd\u53ef\u4ee5\u4fee\u6539",children:"\u4fee\u6539xxx\u81ea\u589e\u5e8f\u5217\uff0c\u9664\u4e86start\u4e4b\u5916\u7684\u5176\u4ed6\u503c\u90fd\u53ef\u4ee5\u4fee\u6539"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" ALTER SEQUENCE xxx\n    INCREMENT 10 \n  MAXVALUE 100000000 \n  CYCLE \n  NOCACHE;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4fee\u6539\u67d0\u4e2a\u5b57\u6bb5\u7684\u81ea\u589e\u5e8f\u5217",children:"\u4fee\u6539\u67d0\u4e2a\u5b57\u6bb5\u7684\u81ea\u589e\u5e8f\u5217"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'----\u5220\u9664\u524d\u5148\u89e3\u9664\u67d0\u4e2a\u5b57\u6bb5\uff0c\u4f8b\u5982\u8868\u540d\u662f student,name\u5b57\u6bb5 \u5bf9\u8be5\u5e8f\u5217\u7684(\u5e8f\u5217\u540d\u5b57\u662f name_seq)\u4f9d\u8d56\nALTER TABLE student\n    ALTER COLUMN name SET DEFAULT null;\nDROP SEQUENCE IF EXISTS "name_seq";\n---- start_id\u5373 id \u76ee\u524d\u7684\u6700\u5927\u503c\uff0c\u53ef\u5199\u4e3a1\uff0c\nCREATE SEQUENCE "name_seq" START WITH start_id;\nALTER TABLE student\n    ALTER COLUMN name SET DEFAULT nextval(\'name_seq\'::regclass);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u8bbe\u7f6e\u81ea\u589e\u957f\u4ece\u5f53\u524d\u6700\u5927\u503c\u5f00\u59cb",children:"\u8bbe\u7f6e\u81ea\u589e\u957f\u4ece\u5f53\u524d\u6700\u5927\u503c\u5f00\u59cb"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select setval('seq', (select max(name) from \"student\"));\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91cd\u7f6e\u81ea\u589e\u5b57\u6bb5\u4e3a1",children:"\u91cd\u7f6e\u81ea\u589e\u5b57\u6bb5\u4e3a1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" ALTER SEQUENCE seq RESTART WITH 1;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(6540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);