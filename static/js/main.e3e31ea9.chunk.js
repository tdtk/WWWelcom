(this.webpackJsonpwwwelcome=this.webpackJsonpwwwelcome||[]).push([[0],{30:function(e,t,n){e.exports=n(50)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=(n(35),n(10)),i=(n(36),n(55)),s=n(57),u=(n(37),function(e){return c.a.createElement(s.a,{fixed:"top",id:"Header",expand:"lg",variant:"dark"},c.a.createElement(s.a.Brand,{onClick:function(t){return e.setPagetype("list")}},"WWWelcome"),c.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(i.a,{className:"mr-auto"},function(t){switch(t){case"map":return c.a.createElement(i.a.Link,{onClick:function(t){return e.setPagetype("list")}},"List");case"list":return c.a.createElement(i.a.Link,{onClick:function(t){return e.setPagetype("map")}},"Map")}}(e.pagetype))))}),d=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)((function(){var t=e.crd?{lat:e.crd.latitude,lng:e.crd.longitude}:{lat:-25.344,lng:131.036},n=new google.maps.Map(document.getElementById("map"),{zoom:17,center:t});r(n)}),[]),Object(a.useEffect)((function(){o&&o.setCenter(e.crd?{lat:e.crd.latitude,lng:e.crd.longitude}:{lat:-25.344,lng:131.036})}),[e.crd]),c.a.createElement("div",{id:"map",style:{height:"80vh",width:"100%"}})},m=n(56),p=(n(48),function(e){return c.a.createElement(m.a,{onClick:function(t){return e.onClick(t)}},c.a.createElement(m.a.Header,{closeButton:!1},c.a.createElement("strong",{className:"mr-auto"},e.title),c.a.createElement("small",null,"".concat(Math.round(e.dist)," m"))),c.a.createElement(m.a.Body,null,e.body))}),g=function(e){return c.a.createElement("div",{className:"toasts"},c.a.createElement(m.a,{className:"Group-header"},c.a.createElement(m.a.Body,null,c.a.createElement("strong",{className:"mr-auto"},e.group),c.a.createElement("small",null,e.credit))),e.toasts.map((function(t,n){return c.a.createElement(p,Object.assign({key:n,onClick:e.onClick},t))})))},f=n(52),b=n(53),v=n(58),E=n(54),h=n(29),w=c.a.createElement(c.a.Fragment,null," Powered by ",c.a.createElement("a",{href:"http://webservice.recruit.co.jp/"},"\u30db\u30c3\u30c8\u30da\u30c3\u30d1\u30fc Web\u30b5\u30fc\u30d3\u30b9")," "),y=function(e){return console.log(e.placelists),c.a.createElement(f.a,{style:{margin:0}},Object.keys(e.placelists.toObject()).map((function(t,n){return c.a.createElement(b.a,{key:n,md:6,lg:3},c.a.createElement(g,{toasts:e.placelists.get(t).toasts,group:e.placelists.get(t).group,credit:e.placelists.get(t).credit,onClick:function(){return e.setPagetype("map")}}))})))},k=function(e){return c.a.createElement(f.a,null,c.a.createElement(b.a,{sm:12,md:8},c.a.createElement(d,e)),c.a.createElement(b.a,{sm:12,md:4},c.a.createElement(v.a,null,c.a.createElement(v.a.Img,{variant:"top",src:"holder.js/100px180"}),c.a.createElement(v.a.Body,null,c.a.createElement(v.a.Title,null,"Card Title"),c.a.createElement(v.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))))},j=function(){var e=Object(a.useState)(Object(h.a)({})),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("list"),i=Object(l.a)(r,2),s=i[0],d=i[1],m=Object(a.useState)(null),p=Object(l.a)(m,2),g=p[0],f=p[1],b=Object(a.useState)(null),v=Object(l.a)(b,2),j=v[0];v[1];return Object(a.useEffect)((function(){var e;e=f,navigator.geolocation.getCurrentPosition((function(t){e(t.coords)}),(function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){g&&function(e,t){var n=Object.keys(e).reduce((function(t,n){return"".concat(t,"&").concat(n,"=").concat(e[n])}),"");window.HotPepperCallBack=t;var a=document.createElement("script");a.type="text/javascript",a.src="https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=".concat("cdb8eda5de3b11be").concat(n,"&format=jsonp&callback=HotPepperCallBack");var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}({lat:g.latitude,lng:g.longitude,range:5,order:4},(function(e){console.log(e);var t=e.results.shop.map((function(e){return{title:e.name,dist:(t={lat:g.latitude,lng:g.longitude},n={lat:e.lat,lng:e.lng},google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(t.lat,t.lng),new google.maps.LatLng(n.lat,n.lng))),body:e.catch};var t,n}));t.sort((function(e,t){return e.dist<t.dist?-1:e.dist>t.dist?1:0})),o((function(e){return e.set("\u4ed8\u8fd1\u306e\u98f2\u98df\u5e97",{group:"\u4ed8\u8fd1\u306e\u98f2\u98df\u5e97",toasts:t,credit:w})}))}))}),[g]),c.a.createElement("div",{className:"App"},c.a.createElement(u,{pagetype:s,setPagetype:d}),c.a.createElement("div",{style:{marginTop:"56px"}},c.a.createElement(E.a,{fluid:!0,style:{visibility:"list"===s?"visible":"hidden",position:"absolute"}},c.a.createElement(y,{placelists:n,setPagetype:d})),c.a.createElement(E.a,{fluid:!0,style:{visibility:"map"===s?"visible":"hidden",position:"absolute",width:"100%",height:"100%"}},c.a.createElement(k,{placelist:j?n.get(j):null,crd:g,setCrd:f}))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(49);r.a.render(c.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/WWWelcome",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/WWWelcome","/service-worker.js");O?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.e3e31ea9.chunk.js.map