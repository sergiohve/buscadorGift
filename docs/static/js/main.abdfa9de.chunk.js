(this.webpackJsonpaplicacion1=this.webpackJsonpaplicacion1||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),i=(a(14),a(1)),u=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>5?(t((function(e){return[l].concat(Object(u.a)(e))})),o("")):alert("Mas de 5 letras")}},r.a.createElement("input",{type:"text",value:l,onChange:function(e){o(e.target.value)}}))},s=a(4),m=a.n(s),f=a(7),p=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=V2D6slEQUcApfQE6omKvJOJlgMzbKfAg"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__rotateInUpRight"},r.a.createElement("grid",null,r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t)))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,l=a.loading;return console.log(c),console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__fadeInDownBig"},t),l&&r.a.createElement("p",{className:""}),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)([""]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.abdfa9de.chunk.js.map