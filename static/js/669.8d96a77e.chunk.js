"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[669],{377:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return v},pm:function(){return s},yK:function(){return p}});var r=t(861),a=t(757),u=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="cb666b8d3023e727f90c417a602578cd",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},669:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,u,i=t(439),c=t(168),o=t(444),s=t(128),p=o.ZP.div(r||(r=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content:center;\n  position: relative;\n  margin-bottom: 16px;\n  \n  \n"]))),f=o.ZP.input(a||(a=(0,c.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  max-width:600px;\n"]))),v=(0,o.ZP)(s.G4C)(u||(u=(0,c.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),d=t(184),l=function(n){var e=n.value,t=n.onChange;return(0,d.jsxs)(p,{children:[(0,d.jsx)(v,{}),(0,d.jsx)(f,{type:"text",value:e,onChange:function(n){return t(n.target.value)}})]})},h=t(87),x=t(689),g=t(723),m=function(n){var e=n.movies,t=(0,x.TH)();return e?(0,d.jsx)("ul",{children:e.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{to:"".concat(n.id),state:{from:t},children:n.title})},n.id)}))}):(0,d.jsx)(g.Z,{})},Z=t(433),w=t(377),y=t(791),b=function(){var n,e=(0,h.lr)(),t=(0,i.Z)(e,2),r=t[0],a=t[1],u=null!==(n=r.get("query"))&&void 0!==n?n:"",c=function(n){var e=(0,y.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1];return(0,y.useEffect)((function(){""!==n&&(0,w.pm)(n).then((function(n){a((0,Z.Z)(n.results))}))}),[n]),{movies:r}}(u),o=c.movies.filter((function(n){return n.title.toLowerCase().includes(u.toLowerCase())}));return(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{value:u,onChange:function(n){a(""!==n?{query:n}:{})}}),(0,d.jsx)(m,{movies:o})]})}}}]);
//# sourceMappingURL=669.8d96a77e.chunk.js.map