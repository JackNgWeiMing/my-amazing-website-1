(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,a,t){e.exports={blur:"main-module--blur--Y5ShM",strong:"main-module--strong--K4QrG",section:"main-module--section--2Xqnp",sectionTitle:"main-module--section-title--21CeO",index:"main-module--index--3Ad3r",content:"main-module--content--2Gd-G",divider:"main-module--divider--3Qn8n",footer:"main-module--footer--Bbdt8",contactList:"main-module--contact-list--2NH8g",icon:"main-module--icon--1mWho",notes:"main-module--notes--2kq3E",bottomSpace:"main-module--bottom-space--ArVTE",hero:"main-module--hero--3oRqO",header:"main-module--header--3cdbO",headerActive:"main-module--header-active--3I4ec",headerHide:"main-module--header-hide--sWrqr",navHambuger:"main-module--nav-hambuger--1dKoz",navHambugerTop:"main-module--nav-hambuger-top--2ctW1",navHambugerMiddle:"main-module--nav-hambuger-middle--2ZUJJ",navHambugerBottom:"main-module--nav-hambuger-bottom--1QlS6",navHambugerActive:"main-module--nav-hambuger-active--3-zdq",nav:"main-module--nav--2Lkow",navIcon:"main-module--nav-icon--36PQq",navGrow:"main-module--nav-grow--R2MSQ",navList:"main-module--nav-list--1W-MC",main:"main-module--main--xt1D2",button:"main-module--button--26f6c",skillList:"main-module--skill-list--3_b0G",experience:"main-module--experience--2-QL5",experienceList:"main-module--experience-list--3ebL4",experienceListItem:"main-module--experience-list-item--HTmva",selected:"main-module--selected--3FlqH",experienceListSelector:"main-module--experience-list-selector--3x0Id",experienceBlock:"main-module--experience-block--1ITAa",experienceBlockTitle:"main-module--experience-block-title--3xmet",experienceBlockPeriod:"main-module--experience-block-period--2aB1c",experienceBlockDescription:"main-module--experience-block-description--26ACr",contact:"main-module--contact--njVxa",contactLeft:"main-module--contact-left--3i2Tg",contactRight:"main-module--contact-right--y3TDv",contactEmail:"main-module--contact-email--2Yosj",drawer:"main-module--drawer--3XQql",hide:"main-module--hide--fGMrq"}},154:function(e,a,t){"use strict";var n=t(165),c=t(0),r=t.n(c),i=t(4),l=t.n(i),o=t(166),m=t.n(o),s=t(156),u=t(177),d=t(185),p=t.n(d),h=t(187),f=t.n(h),v=t(147),g=t.n(v),E=[{title:"About me",path:"about"},{title:"Skills",path:"skill"},{title:"Experience",path:"experience"}],b=function(e){return r.a.createElement("a",{href:"resume.pdf",target:"_blank",className:g.a.button},"My Resume")},k=function(e){var a=e.handleDrawer,t=e.openDrawer,n=Object(c.useState)(0),i=n[0],l=n[1],o=Object(c.useState)("up"),m=o[0],s=o[1],d=p.a.throttle(function(e){var a=window.pageYOffset,t=a-i,n=t/100;s(t>0?"down":"up"),(n>1||n<-1)&&l(a)},200);return Object(c.useEffect)(function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),r.a.createElement("header",null,r.a.createElement("div",{className:"\n        "+g.a.header+" \n        "+("down"==m?g.a.headerHide:g.a.headerActive)+"\n       "},r.a.createElement("div",{className:g.a.nav},r.a.createElement(u.Link,{smooth:!0,to:"about",className:g.a.navIcon,onClick:t?a:null,duration:500},r.a.createElement(f.a,null)),r.a.createElement("div",{className:g.a.navGrow}),r.a.createElement("div",{className:""+g.a.navList},r.a.createElement("ul",null,E.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(u.Link,{smooth:!0,duration:500,to:e.path},r.a.createElement("span",{className:g.a.index},"0",a,"."),r.a.createElement("span",{className:g.a.content},e.title)))}),r.a.createElement("li",null,r.a.createElement(b,null)))),r.a.createElement("div",{className:g.a.drawer+" "+(t?g.a.hide:"")},r.a.createElement("ul",null,E.map(function(e,t){return r.a.createElement("li",{key:e.title},r.a.createElement(u.Link,{onClick:a,smooth:!0,duration:500,to:e.path},r.a.createElement("span",{className:g.a.index},"0",t,"."),r.a.createElement("span",{className:g.a.content},e.title)))}),r.a.createElement("li",null,r.a.createElement(b,null)))),r.a.createElement("div",{className:"\n            "+g.a.navHambuger+"\n            "+(t?g.a.navHambugerActive:"")+"\n          ",onClick:a},r.a.createElement("div",{className:g.a.navHambugerTop}),r.a.createElement("div",{className:g.a.navHambugerMiddle}),r.a.createElement("div",{className:g.a.navHambugerBottom})))))},w=t(188),x=t.n(w),y=t(189),N=t.n(y),L=t(190),q=t.n(L),S=function(e){var a=e.children,t=Object(c.useState)(!1),i=t[0],l=t[1],o=function(){l(!i)};return r.a.createElement(s.StaticQuery,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Jack's website"},{name:"keywords",content:"software engineer, javascript, react, singapore"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("body",{className:i?g.a.blur:""})),r.a.createElement("div",{id:"main",onClick:i?o:null,className:""+g.a.main},a),r.a.createElement("footer",{className:g.a.footer},r.a.createElement("div",null,r.a.createElement("ul",{className:g.a.contactList},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/JackJackNg",target:"_blank"},r.a.createElement(x.a,{className:g.a.icon}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/jack-ng-b2593b151/",target:"_blank"},r.a.createElement(N.a,{className:g.a.icon}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/JackNgWeiMing1",target:"_blank"},r.a.createElement(q.a,{className:g.a.icon}))))),r.a.createElement("a",{href:"https://github.com/JackJackNg/my-amazing-website",className:g.a.notes},"Checkout the source code 🔨")),r.a.createElement("div",{className:"\n            "+g.a.contact+"\n            "+g.a.contactLeft+"\n          "},r.a.createElement("ul",{className:g.a.contactList},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/JackJackNg",target:"_blank"},r.a.createElement(x.a,{className:g.a.icon}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/jack-ng-b2593b151/",target:"_blank"},r.a.createElement(N.a,{className:g.a.icon}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/JackNgWeiMing1",target:"_blank"},r.a.createElement(q.a,{className:g.a.icon}))))),r.a.createElement("div",{className:"\n            "+g.a.contact+"\n            "+g.a.contactRight+"\n          "},r.a.createElement("a",{className:g.a.contactEmail},"jackng9995@gmail.com")),r.a.createElement(k,{openDrawer:i,handleDrawer:o}))},data:n})};S.propTypes={children:l.a.node.isRequired};a.a=S},156:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p}),t.d(a,"useStaticQuery",function(){return h});var n=t(0),c=t.n(n),r=t(4),i=t.n(r),l=t(146),o=t.n(l);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var m=t(157),s=t.n(m);t.d(a,"PageRenderer",function(){return s.a});var u=t(50);t.d(a,"parsePath",function(){return u.a});var d=c.a.createContext({}),p=function(e){return c.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){c.a.useContext;var a=c.a.useContext(d);if(a[e]&&a[e].data)return a[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,a,t){var n;e.exports=(n=t(176))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Jack's website"}}}}},176:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),c=t.n(n),r=t(4),i=t.n(r),l=t(68),o=t(2),m=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},187:function(e,a,t){var n=t(0);function c(e){return n.createElement("svg",e,n.createElement("g",{transform:"translate(0,-257)"},[n.createElement("rect",{transform:"scale(1,-1)",x:".92941",y:"-296.51",width:"38.358",height:"38.537",fill:"#64ffda",stroke:"#64ffda",strokeLinecap:"square",strokeWidth:"1.6627",key:0}),n.createElement("text",{transform:"scale(.98825 1.0119)",x:"15.123295",y:"291.18723",fill:"#000000",fontFamily:"SimHei",fontSize:"23.432px",letterSpacing:"0px",strokeWidth:".58579",wordSpacing:"0px",style:{lineHeight:"1.25"},xmlSpace:"preserve",key:1},n.createElement("tspan",{x:"15.123295",y:"291.18723",fill:"#000000",fontFamily:"SimHei",strokeWidth:".58579"},"JN"))]))}c.defaultProps={width:"40mm",height:"40mm",version:"1.1",viewBox:"0 0 40 40"},e.exports=c,c.default=c},188:function(e,a,t){var n=t(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Github"),n.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 438.549 438.549"},e.exports=c,c.default=c},189:function(e,a,t){var n=t(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"LinkedIn"),n.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 430.117 430.117"},e.exports=c,c.default=c},190:function(e,a,t){var n=t(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Twitter"),n.createElement("path",{d:"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 612 612"},e.exports=c,c.default=c}}]);
//# sourceMappingURL=1-28b02f90a12b936159cf.js.map