(this["webpackJsonptask-4-3-user-api"]=this["webpackJsonptask-4-3-user-api"]||[]).push([[0],{113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(30),i=c.n(a),o=(c(95),c(96),c(40)),s=c(50),d=c(53),l=c.n(d),u=c(43),j=c(15),b=c(14),O=c(159),x=c(160),h=c(153),p=c(162),f=c(155),v=c(157),m=c(158),g=c(163),C=c(152),k=c(80),w=c.n(k),N=c(1),T=[{label:"Listings",href:"/listings"},{label:"Mentors",href:"/mentors"},{label:"My Account",href:"/account"},{label:"Log Out",href:"/logout"}],y=Object(C.a)((function(){return{header:{backgroundColor:"#400CCC",paddingRight:"79px",paddingLeft:"118px","@media (max-width: 900px)":{paddingLeft:0}},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"#FFFEFE",textAlign:"left"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px"},toolbar:{display:"flex",justifyContent:"space-between"},drawerContainer:{padding:"20px 30px"}}}));function S(){var e=y(),t=e.header,c=e.logo,r=e.menuButton,a=e.toolbar,i=e.drawerContainer,o=Object(n.useState)({mobileView:!1,drawerOpen:!1}),s=Object(b.a)(o,2),d=s[0],l=s[1],C=d.mobileView,k=d.drawerOpen;Object(n.useEffect)((function(){var e=function(){return window.innerWidth<900?l((function(e){return Object(j.a)(Object(j.a)({},e),{},{mobileView:!0})})):l((function(e){return Object(j.a)(Object(j.a)({},e),{},{mobileView:!1})}))};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]);var S=function(){return T.map((function(e){var t=e.label,c=e.href;return Object(N.jsx)(p.a,{component:u.b,to:c,color:"inherit",style:{textDecoration:"none"},key:t,children:Object(N.jsx)(f.a,{children:t})})}))},F=Object(N.jsx)(v.a,{variant:"h6",component:"h1",className:c,children:"Femmecubator"}),E=function(){return T.map((function(e){var t=e.label,c=e.href;return Object(N.jsx)(m.a,{key:t,color:"inherit",to:c,component:u.b,className:r,children:t})}))};return Object(N.jsx)("header",{children:Object(N.jsx)(g.a,{elevation:0,position:"static",className:t,children:C?Object(N.jsxs)(O.a,{children:[Object(N.jsx)(x.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return l((function(e){return Object(j.a)(Object(j.a)({},e),{},{drawerOpen:!0})}))},children:Object(N.jsx)(w.a,{})}),Object(N.jsx)(h.a,{anchor:"left",open:k,onClose:function(){return l((function(e){return Object(j.a)(Object(j.a)({},e),{},{drawerOpen:!1})}))},children:Object(N.jsx)("div",{className:i,children:S()})}),Object(N.jsx)("div",{children:F})]}):Object(N.jsxs)(O.a,{className:a,children:[F,Object(N.jsx)("div",{children:E()})]})})})}var F=function(e){return Object(N.jsx)("div",{children:"Footer"})},E=(c(73),c(16));var R="INCREMENT_CURRENT_VALUE",G="DECREMENT_CURRENT_VALUE",L="UPDATE_PER_CLICK",I="UPDATE_PER_SECONDS",U="UPDATE_PER_SECONDS_VALUE";var X=c.p+"static/media/graphics-card.f2b69bb5.png";function _(e){return Object(N.jsx)("div",{style:{background:"#b5cef3",border:"2px solid",borderRadius:"25px",padding:"5px",margin:"0 0 10px 0",cursor:"pointer"},onClick:function(){return e.updateSeconds(e.videoCard.id)},children:Object(N.jsxs)("table",{style:{width:"100%",height:"100%"},children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{rowSpan:"2",width:"20%",children:Object(N.jsx)("img",{src:X,style:{width:"100%",filter:"invert(100%)"}})}),Object(N.jsx)("th",{colSpan:"1",width:"60%",align:"left",children:e.videoCard.name}),Object(N.jsx)("th",{colSpan:"1",width:"20%",align:"right",children:e.videoCard.count.toFixed(0)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{colSpan:"1",align:"left",children:e.videoCard.costNext.toFixed(1)}),Object(N.jsx)("th",{colSpan:"1",align:"right",children:e.videoCard.value.toFixed(1)})]})]})})}var A=r.a.memo(_),D=(c(113),c.p+"static/media/user-icon.0f6ca8e9.png");function M(e){return Object(N.jsx)("div",{style:{background:"#b4f58b",border:"2px solid",borderRadius:"25px",padding:"5px",margin:"0 0 10px 0",cursor:"pointer"},onClick:function(){return e.updateClick()},children:Object(N.jsxs)("table",{style:{width:"100%",height:"100%"},children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{rowSpan:"2",width:"20%",children:Object(N.jsx)("img",{src:D,style:{width:"100%",filter:"invert(100%)"}})}),Object(N.jsx)("th",{colSpan:"1",width:"60%",align:"left",children:"\u0412\u0437\u044f\u0442\u044c \u043d\u0430\u043f\u0430\u0440\u043d\u0438\u043a\u0430"}),Object(N.jsx)("th",{colSpan:"1",width:"20%",align:"right",children:e.data.stageClick.toFixed(0)})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{colSpan:"1",align:"left",children:e.data.costUpdateClick.toFixed(1)}),Object(N.jsx)("th",{colSpan:"1",align:"right",children:"1"})]})]})})}var V=r.a.memo(M);var P=function(e){var t=Object(o.b)(),c=Object(n.useCallback)((function(){t({type:R})}),[]),r=(Object(n.useCallback)((function(){t({type:G})}),[]),Object(n.useCallback)((function(){t({type:L})}),[])),a=Object(n.useCallback)((function(e){t(function(e){return{type:I,id:e}}(e))}),[]),i=Object(n.useCallback)((function(){t({type:U})}),[]);return Object(n.useEffect)((function(){window.setInterval((function(){i()}),100)}),[]),Object(N.jsxs)("div",{className:"mainClicker",onSelect:"return false",style:{userSelect:"none"},children:[Object(N.jsx)("span",{children:e.data.value.toFixed(1)}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsxs)("span",{children:["\u0417\u0430 \u043a\u043b\u0438\u043a: ",e.data.click.toFixed(1)]}),Object(N.jsx)("br",{}),Object(N.jsxs)("span",{children:["\u0412 \u0441\u0435\u043a\u0443\u043d\u0434\u0443: ",e.data.perSecond.toFixed(1)]}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{style:{background:"#f5bc8b",border:"2px solid",borderRadius:"25px",padding:"10px",margin:"0 0 10px 0",cursor:"pointer"},onClick:function(){return c()},children:Object(N.jsx)("div",{style:{textAlign:"center"},children:Object(N.jsx)("span",{style:{margin:"auto"},children:"\u0414\u043e\u0431\u044b\u0432\u0430\u0442\u044c"})})}),Object(N.jsx)("div",{children:Object(N.jsx)(V,{updateClick:r,data:e.data})}),Object(N.jsx)("div",{children:e.data.videoCardsList.map((function(e){return Object(N.jsx)(A,{updateSeconds:a,videoCard:e})}))})]})};var W=function(e){var t=e.data;return Object(N.jsxs)(E.d,{children:[Object(N.jsxs)(E.b,{path:"/",exact:!0,children:[Object(N.jsx)(P,{data:t})," "]}),Object(N.jsx)(E.a,{to:"/"})]})};var z=function(){var e=Object(o.c)((function(e){return e.repos}));return Object(o.b)(),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(S,{}),Object(N.jsx)(W,{data:e}),Object(N.jsx)(F,{})]})},B=c(83),J=c(28),K=c(84),q=c(85),H={click:1,perSecond:0,stageClick:0,costUpdateClick:50,value:0,videoCardsList:[{id:0,name:"GeForce GTX 750 ",count:0,cost:15,costNext:15,value:.1},{id:1,name:"GeForce GTX 1050",count:0,cost:100,costNext:100,value:.5},{id:2,name:"GeForce GTX 1050 TI",count:0,cost:500,costNext:500,value:4},{id:3,name:"GeForce GTX 1060",count:0,cost:3e3,costNext:3e3,value:10},{id:4,name:"GeForce GTX 1060 TI",count:0,cost:1e4,costNext:1e4,value:40},{id:5,name:"GeForce GTX 1660 TI",count:0,cost:4e4,costNext:4e4,value:100},{id:6,name:"GeForce GTX 1080 TI",count:0,cost:2e5,costNext:2e5,value:400},{id:7,name:"TITAN RTX",count:0,cost:1666666,costNext:1666666,value:666},{id:8,name:"GeForce RTX 2080 TI",count:0,cost:123456789,costNext:123456789,value:98765},{id:9,name:"GeForce RTX 3070 TI",count:0,cost:3999999999,costNext:3999999999,value:999999},{id:10,name:"GeForce RTX 3080 TI",count:0,cost:75e9,costNext:75e9,value:1e7}]};function Q(e,t){return e*Math.pow(1.07,t)}function Y(e){return 50*Math.pow(1.07,e)}var Z=Object(J.combineReducers)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(j.a)(Object(j.a)({},e),{},{value:e.value+e.click});case G:return Object(j.a)(Object(j.a)({},e),{},{value:e.value-e.click});case I:var c=e.videoCardsList[t.id],n=Q(c.cost,c.count),r=Q(n,c.count+1);if(e.value>=n)return Object(j.a)(Object(j.a)({},e),{},{value:e.value-n,perSecond:e.perSecond+c.value,videoCardsList:e.videoCardsList.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{count:c.count+1,costNext:r}):e}))});case L:var a=Y(e.stageClick),i=Y(e.stageClick+1);if(e.value>=a)return Object(j.a)(Object(j.a)({},e),{},{click:e.click+.1,stageClick:e.stageClick+1,value:e.value-a,costUpdateClick:i});case U:return Object(j.a)(Object(j.a)({},e),{},{value:e.value+e.perSecond/10});default:return e}}}),$={key:"root",storage:l.a},ee=Object(s.a)($,Z),te=Object(J.createStore)(ee,Object(K.composeWithDevTools)(Object(J.applyMiddleware)(q.a))),ce=(Object(s.b)(te),te);i.a.render(Object(N.jsx)("div",{className:"root",children:Object(N.jsxs)(o.a,{store:ce,children:[Object(N.jsx)(z,{}),Object(N.jsx)(B.a,{persistor:ce})]})}),document.getElementById("root"))},73:function(e,t){},95:function(e,t,c){},96:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.c621b7ac.chunk.js.map