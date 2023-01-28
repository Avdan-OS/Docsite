"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[4527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,y=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(y,p(p({ref:t},s),{},{components:n})):o.createElement(y,p({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<r;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},p="Window content template & Adding your app to the dock",l={unversionedId:"libdemo/window_template",id:"libdemo/window_template",title:"Window content template & Adding your app to the dock",description:"Here you can see a simple app template. You may create your app using it.",source:"@site/docs/demo/libdemo/window_template.mdx",sourceDirName:"libdemo",slug:"/libdemo/window_template",permalink:"/demo/libdemo/window_template",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Widget template & Adding your widget to the dock",permalink:"/demo/libdemo/widget_template"},next:{title:"Placeholder Class",permalink:"/demo/category/placeholder-class"}},i={},c=[{value:"onclone works with clones",id:"onclone-works-with-clones",level:3},{value:"Adding your app to dock",id:"adding-your-app-to-dock",level:2},{value:"Reserve your app",id:"reserve-your-app",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"window-content-template--adding-your-app-to-the-dock"},"Window content template & Adding your app to the dock"),(0,a.kt)("p",null,"Here you can see a simple app template. You may create your app using it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class MyApp {\n\n    static content;                                                 // content holder\n    static title = "MyApp";                                         // app title\n    static src = "src/images/demo/icons/Apps/MyAppIconName.png";    // your app icon path\n    static extraClass = ["my-app", "extra-size", ];                 // some extra CSS classes for your window \n    static contextMenu = [                                          // context menu for your app (optional)\n        ...ContextMenu.defaultMenu,\n        {\n            "type" : "plain",\n            "icon" : ContextIcons.download,\n            "text" : "Download"\n        },\n        {\n            "type" : "split",\n        },\n        {\n            "type" : "plain",\n            "icon" : ContextIcons.close,\n            "text" : "Close"\n        },\n    ]\n\n    \n    static {\n        // some JS code to fill \'content\' variable\n\n        // Example \n        var my_app_content = document.createElement("div");\n        my_app_content.classList.add("my-app-content");\n        my_app_content.innerHTML = "Hello, world!";\n\n        var my_date = document.createElement("div");\n        my_date.classList.add("date-now");\n\n        my_app_content.appendChild(my_date);\n\n        my_app_content.classList.add("noselect");\n        MyApp.content = my_app_content;\n    }\n\n    static async onclone(content) {\n        // some dynamic elements loading or event listeners adding\n\n        // Example\n        var date = new Date;\n        content.querySelector(".date-now").innerHTML = `My Time: ${date.toString()}`;\n    }\n\n}\n')),(0,a.kt)("p",null,"Here's our app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyApp",src:n(103).Z,width:"1030",height:"653"})),(0,a.kt)("h3",{id:"onclone-works-with-clones"},"onclone works with clones"),(0,a.kt)("p",null,"By default, dock uses cloning to open multiple apps each with it's own context, so ",(0,a.kt)("inlineCode",{parentName:"p"},"onclone")," is needed to load dynamic elements, while ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," is just a static template. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onclone")," gets a cloned ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," as an argument, so it's a clone of your static template, not your initial ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," variable from class."),(0,a.kt)("h2",{id:"adding-your-app-to-dock"},"Adding your app to dock"),(0,a.kt)("p",null,"There are 2 steps to add your app to the demo (ex.: dock):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Load JS script")),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),", go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," tag and add your JS script like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    <head>\n    \n    // ...\n\n        \x3c!-- preloading --\x3e\n        // ...\n        \n        <link rel="preload" href="src/css/myapp.css" as="style"/>\n        \n        // ...\n\n        \x3c!-- CSS for apps --\x3e\n        // ...\n\n        <link rel="stylesheet" href="src/css/myapp.css"/>\n\n        // ...\n\n        \x3c!-- apps --\x3e\n        // ...\n        \n        <script src="src/js/myapp.js" defer><\/script>\n        \n        //...\n\n    // ...\n\n    </head>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Place it in dock")),(0,a.kt)("p",null,"As an example, our app will be added to dock. We need to open ",(0,a.kt)("inlineCode",{parentName:"p"},"demo.js"),", find there ",(0,a.kt)("inlineCode",{parentName:"p"},"apps_list")," array and place there our app."),(0,a.kt)("p",null,"All apps are loaded from the first to the last, so your position depends on the place you've chosen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var apps_list = [\n    // some apps\n    \n    MyApp,\n    \n    // some apps\n]\n")),(0,a.kt)("h2",{id:"reserve-your-app"},"Reserve your app"),(0,a.kt)("p",null,"If you want to create a specific app, but you haven't written your code yet, then you may use a ",(0,a.kt)("a",{parentName:"p",href:"/demo/libdemo/Placeholder/about"},"placeholder"),"."))}d.isMDXComponent=!0},103:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/win-template-c0cf7391e845a8a232668e473bc2cda9.png"}}]);