"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[139],{377:function(e,n,t){t.d(n,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return v},pm:function(){return o},yK:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="cb666b8d3023e727f90c417a602578cd",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&include_adult=false&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},139:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(689),a=t(433),u=t(439),c=t(377),i=t(791),s=t(723),o=t(184),f=function(){var e=function(e){var n=(0,i.useState)(null),t=(0,u.Z)(n,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){e&&(0,c.Jh)(e).then((function(e){s((0,a.Z)(e.results))}))}),[e]),{reviews:r}}((0,r.UO)().movieId),n=e.reviews;return n?0===n.length?(0,o.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.author)}))}):(0,o.jsx)(s.Z,{})}}}]);
//# sourceMappingURL=139.7cb5a0c0.chunk.js.map