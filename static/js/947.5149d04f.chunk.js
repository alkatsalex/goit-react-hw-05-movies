"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{877:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(294),o="https://api.themoviedb.org/3";function s(){return(s=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(o,"/trending/movie/day?api_key=97e4ab2596be29617b1991836e844310"));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(o,"/movie/").concat(t,"?api_key=97e4ab2596be29617b1991836e844310"));case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(o,"/movie/").concat(t,"/credits?api_key=97e4ab2596be29617b1991836e844310"));case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(o,"/movie/").concat(t,"/reviews?api_key=97e4ab2596be29617b1991836e844310"));case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(o,"/search/movie?query\n=").concat(t,"&api_key=97e4ab2596be29617b1991836e844310"));case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={trendingFetch:function(){return s.apply(this,arguments)},movieByIdFacth:function(e){return i.apply(this,arguments)},castFetch:function(e){return p.apply(this,arguments)},reviewsFetch:function(e){return h.apply(this,arguments)},queryFetch:function(e){return l.apply(this,arguments)}};t.Z=f},323:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87),a="Film_box__Uboxz",c=r(184);function u(e){var t=e.id,r=e.title,u=e.locations;return(0,c.jsx)(n.rU,{to:"".concat(t),state:{from:u},children:(0,c.jsx)("h3",{className:a,children:r})})}},947:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(433),a=r(861),c=r(439),u=r(757),o=r.n(u),s=r(791),i=r(87),p={SearchForm:"SearchBar_SearchForm__J+i1a",SearchFormButton:"SearchBar_SearchFormButton__J-w2N","SearchForm-button":"SearchBar_SearchForm-button__9dEGw","SearchForm-button-label":"SearchBar_SearchForm-button-label__ILeLu",SearchFormInput:"SearchBar_SearchFormInput__4T9IM","SearchForm-input":"SearchBar_SearchForm-input__pGYri"},h=r(184);function l(){var e=(0,s.useState)(""),t=(0,c.Z)(e,2),r=t[0],n=t[1],a=(0,i.lr)(),u=(0,c.Z)(a,2),o=u[0],l=u[1];console.log(o.get("search"));return(0,h.jsxs)("form",{className:p.SearchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?l({search:r}):alert("Ops! Something went wrong, enter a query in the search term")},children:[(0,h.jsx)("button",{type:"submit",className:p.SearchFormButton,children:(0,h.jsx)("span",{className:p.buttonLabel,children:"\ud83d\udd0e"})}),(0,h.jsx)("input",{className:p.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:r,placeholder:"Search images and photos",onChange:function(e){n(e.currentTarget.value.toLowerCase())}})]})}var f=r(877),m=r(689),b=r(323);function d(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],u=t[1],p=(0,i.lr)(),d=(0,c.Z)(p,1)[0],v=d.get("search"),x=(0,m.TH)();return console.log(d.get("search")),(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.queryFetch(v);case 2:t=e.sent,u((0,n.Z)(t.results));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("qwe",v),function(){e.apply(this,arguments)}()}),[v,d]),(0,h.jsxs)("div",{children:[(0,h.jsx)(l,{}),v&&r.map((function(e){return(0,h.jsx)("div",{children:(0,h.jsx)(b.Z,{id:e.id,title:e.title,locations:x})},e.id)}))]})}}}]);
//# sourceMappingURL=947.5149d04f.chunk.js.map