"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[761],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=l,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:3},o="make",i={unversionedId:"libwin/Window/make",id:"libwin/Window/make",title:"make",description:"Window.make returns a window Object, that can be added to the page. Before adding it you can modify it.",source:"@site/docs/demo/libwin/Window/make.mdx",sourceDirName:"libwin/Window",slug:"/libwin/Window/make",permalink:"/demo/libwin/Window/make",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"inc",permalink:"/demo/libwin/Window/inc"},next:{title:"merge",permalink:"/demo/libwin/Window/merge"}},s={},d=[{value:"Arguments:",id:"arguments",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"make"},"make"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static make = (content, icon_src, title, extraClass, contextMenu, makeClone, addPanel = true, addResize = true, onclone = async content => {}) => {\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Window.make")," returns a window Object, that can be added to the page. Before adding it you can modify it."),(0,l.kt)("h2",{id:"arguments"},"Arguments:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Content"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"content")," can be any element like "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var content = document.createElement("div");\n')),(0,l.kt)("p",null,"You can modify it and send as an argument."),(0,l.kt)("p",null,"For more details check template sections in demo library.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Icon Source"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"icon_src")," is an url to the app icon.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Title"),(0,l.kt)("p",null,"Window title.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Extra Classes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"extraClass")," is an array of strings. All string will be added to the generated window as classes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'["filemanager-window", "wide-window"]\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Context menu"),(0,l.kt)("p",null,"Any window may have a custom context menu. It's optional."),(0,l.kt)("p",null,"If there's no context menu, demo will use the default one."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[\n    ...ContextMenu.defaultMenu,\n    {\n        "type" : "plain",\n        "icon" : ContextIcons.download,\n        "text" : "Download"\n    },\n    {\n        "type" : "split",\n    },\n    {\n        "type" : "plain",\n        "icon" : ContextIcons.close,\n        "text" : "Close"\n    },\n]\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Make Clone"),(0,l.kt)("p",null,"Bool flag. It's used to clone content and add it to multiple windows. (cloning objects makes them static and drops events)."),(0,l.kt)("p",null,"For more details check ",(0,l.kt)("inlineCode",{parentName:"p"},"Listener Adder"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Add Panel"),(0,l.kt)("p",null,"Bool flag. ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to disable topbar. It will also change window class from ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"static-window"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Add Resize"),(0,l.kt)("p",null,"Bool flag. ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to disable resizing.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Listener Adder"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"listenerAdder")," is a function, that gets ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," (after cloning). You can modify this content and it will be applied to the generated window."),(0,l.kt)("p",null,"It allows to overpass cloning limitations and make windows dynamic.")),(0,l.kt)("p",null,"Simple window example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Window.make(filemanager_content, "src/image/filemanager.jpg",  "Filemanager");\n')),(0,l.kt)("p",null,"Adding window to the ",(0,l.kt)("inlineCode",{parentName:"p"},"body"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Workspace.add(Window.make(filemanager_content, "src/image/filemanager.jpg",  "Filemanager"));\n')),(0,l.kt)("p",null,"For more info about how to create an app, go to the template sections in demo library."))}c.isMDXComponent=!0}}]);