(()=>{var e={};e.id=120,e.ids=[120],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},6521:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>l});var t=r(260),n=r(8203),a=r(5155),i=r.n(a),o=r(7292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(s,d);let l=["",{children:["news",{children:["[slug]",{modal:["__PAGE__",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5522)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\@modal\\page.js"]}]},{}],children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3324)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2485)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,8868)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\not-found.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6808))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2014)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,1617)),"C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\not-found.js"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6808))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\@modal\\page.js","C:\\Users\\hamed\\OneDrive\\Desktop\\nextjs\\my-new-next\\app\\news\\[slug]\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/news/[slug]/page",pathname:"/news/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4679:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,9607,23))},6351:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,8531,23))},5522:(e,s,r)=>{"use strict";function t(){return null}r.r(s),r.d(s,{default:()=>t})},3324:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d});var t=r(2740),n=r(1831),a=r(9607),i=r.n(a),o=r(2389);function d({params:e}){let s=e.slug,r=o.n.find(e=>e.slug===s);return r||(0,n.notFound)(),(0,t.jsxs)("article",{className:"news-article",children:[(0,t.jsxs)("header",{children:[(0,t.jsx)(i(),{href:`/news/${r.slug}/image`,children:(0,t.jsx)("img",{src:`/images/news/${r.image}`,alt:r.title})}),(0,t.jsx)("h1",{children:r.title}),(0,t.jsx)("time",{dateTime:r.date,children:r.date})]}),(0,t.jsx)("p",{children:r.content})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[638,584,663],()=>r(6521));module.exports=t})();