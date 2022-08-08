"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[6857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},p="How to setup the bot",i={unversionedId:"setup",id:"setup",title:"How to setup the bot",description:"Forking",source:"@site/docs/tinan/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/tinan/setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tinan Overview",permalink:"/tinan/tinan-overview"}},l={},s=[{value:"Forking",id:"forking",level:2},{value:"Setting up a Discord bot",id:"setting-up-a-discord-bot",level:2},{value:"Making it work",id:"making-it-work",level:2},{value:"How to make commands",id:"how-to-make-commands",level:2},{value:"Pull requests",id:"pull-requests",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-setup-the-bot"},"How to setup the bot"),(0,a.kt)("h2",{id:"forking"},"Forking"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 1:"))," Go to the Discord Developer Portal and log in with your account."),(0,a.kt)("h2",{id:"setting-up-a-discord-bot"},"Setting up a Discord bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 2:"))," Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and log in with your account."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 3:")),' Click on the "New Application" button near your profile picture on the upper right side of your screen and create a new application. Name it anything you want.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 4:")),' Click on the "Bot" button on the left side of your screen and create a new bot.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 5:"))," Invite your bot to your server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},"Step 5.1:"),' Click on "OAuth2", afterward "URL Generator". Select ',(0,a.kt)("inlineCode",{parentName:"p"},"bot")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"applications.commands"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},"Step 5.2:"),' Select "Administrator" in the list of bot permissions.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},"Step 5.3:")," Copy the link at the bottom of the page and paste it into your search bar. Select the server where you want your bot to be in the dropdown list."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 6:"))," Reset your bot's token and copy it. It will be used later.\nMaking it work"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 7:"))," Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src folder"),", make a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, and type ",(0,a.kt)("inlineCode",{parentName:"p"},"DISCORD_TOKEN=your token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PREFIX=your prefix")),(0,a.kt)("h2",{id:"making-it-work"},"Making it work"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 8:"))," Get your Discord server ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},"Step 8.1:")," Enable developer mode by going into Settings (near your profile picture at the bottom) > Advanced > Developer Mode.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},"Step 8.2:"),' Copy your server ID by right clicking the server icon and clicking "Copy ID".'))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 9:"))," Inside the src > commands folder, open ",(0,a.kt)("inlineCode",{parentName:"p"},"cmdHandler.js")," and in the 57th line, replace the number in a string with your ID."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 10:"))," In your terminal, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),". It will install all the modules needed to run the bot."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 11:"))," Run ",(0,a.kt)("inlineCode",{parentName:"p"},"cd src")," and afterward ",(0,a.kt)("inlineCode",{parentName:"p"},"node .")," to launch the bot."),(0,a.kt)("h2",{id:"how-to-make-commands"},"How to make commands"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 12:"))," In the commands folder, there are 2 ",(0,a.kt)("inlineCode",{parentName:"p"},"example.js")," files. You can use them as a reference to build new commands."),(0,a.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tinan/setup"},(0,a.kt)("strong",{parentName:"a"},"Step 13:"))," Remember to put a short and concise list of changes to make the review process easier."))}c.isMDXComponent=!0}}]);