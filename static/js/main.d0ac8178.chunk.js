(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(29),i=n.n(c),s=n(13),o=n(30),u=n(31),l=n(35),j=n(34),d=n(2),b=(n(40),n(5)),p=n.p+"static/media/logo.911e1845.svg",h=(n(41),n(0));function v(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(h.jsxs)("nav",{id:"searchContainer",children:[Object(h.jsx)("img",{id:"logo",src:p,alt:"logo",onClick:function(){c(""),e.push("/")}}),Object(h.jsx)("form",{id:"searchBar",onSubmit:function(t){t.preventDefault(),e.push("/key/"+r)},children:Object(h.jsx)("input",{type:"text",name:"key",value:r,onChange:function(e){c(e.target.value)},id:"searchInput",placeholder:"Search here..."})})]})}var O=n(4),f=n.n(O),m=n(10);n(49);function g(e){function t(t){e.setSelected(t.currentTarget.value)}return Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("input",{label:"Popular",type:"radio",name:"name",value:"popular",onChange:t,defaultChecked:!0}),Object(h.jsx)("input",{label:"Top Rated",type:"radio",name:"name",value:"top_rated",onChange:t})]})}n(50);function x(e){return Object(h.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w342"+e.poster_path,alt:e.title,onError:function(e){e.target.onerror=null,e.currentTarget.src="https://via.placeholder.com/342x513jpg/000000/FFFFFF/?text=POSTER+NOT+FOUND"}})}function y(e){var t=e.rating;return Object(h.jsx)("p",{className:"numberRating \n        ".concat(t>=7.7&&"movie-rating-great"," \n        ").concat(t>=6.8&&t<7.7&&"movie-rating-positive"," \n        ").concat(t<6.8&&t>=6&&"movie-rating-average","\n        ").concat(t<6&&"movie-rating-poor","\n      "),children:10*t})}function k(e){var t=Object(a.useState)("hide-overlay"),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(d.f)();return Object(h.jsxs)("div",{className:"cardContainer",onClick:function(){c("show-overlay"===r?"hide-overlay":"show-overlay")},children:[Object(h.jsx)(x,{poster_path:e.movie.poster_path,title:e.movie.title}),Object(h.jsx)(y,{rating:e.movie.vote_average}),Object(h.jsx)("div",{className:r,children:Object(h.jsxs)("div",{className:"overlayContainer",children:[Object(h.jsxs)("div",{className:"movieTitle",children:[" ",e.movie.title," "]}),Object(h.jsx)("button",{className:"detailsButton",onClick:function(){return t=e.movie.id,void i.push("/details/"+t);var t},children:"More Details"})]})})]})}n(51);function S(e){var t=e.currentPage,n=e.totalPages;return Object(h.jsxs)("div",{className:"paginationContainer",children:[Object(h.jsxs)("span",{className:"prevPageButton",onClick:function(){t>1&&e.setCurrentPage((function(e){return e-1}))},children:["<"," prev"]}),Object(h.jsxs)("p",{className:"pageCounter",children:[" ",t," / ",n," "]}),Object(h.jsxs)("span",{className:"nextPageButton",onClick:function(){t<n&&e.setCurrentPage((function(e){return e+1}))},children:["next ",">"]})]})}var w=n(12),C=n.n(w),N="65ed4f55ab251e794b0c6557626f9c61";function P(e,t){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({url:"https://api.themoviedb.org/3/movie/".concat(t,"/?api_key=").concat(N,"&page=").concat(n),method:"GET",headers:{Authorization:"Bearer "+N}});case 2:return 200!==(a=e.sent).status&&204!==a.status&&console.log("error"),console.log("returning data",a.data.value),e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=document.querySelector("html");function B(){return Object(h.jsx)("div",{className:"skeleton"})}function T(){for(var e=Object(a.useState)("popular"),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(b.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(!1),l=Object(b.a)(u,2),j=l[0],d=l[1],p=Object(a.useState)(1),v=Object(b.a)(p,2),O=v[0],x=v[1],y=[],w=0;w<20;w++)y.push(Object(h.jsx)(B,{},w));var C=function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t,n);case 2:a=e.sent,o(a),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){d(!1),C(n,O)}),[n,O]),j){var N="https://image.tmdb.org/t/p/w500"+s.results[0].backdrop_path;z.style.backgroundImage="url("+N+")"}return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{setSelected:r}),Object(h.jsx)("div",{className:"moviesContainer",children:j?s.results.map((function(e){return Object(h.jsx)(k,{movie:e},e.id)})):Object(h.jsx)("div",{children:y})}),Object(h.jsx)(S,{setCurrentPage:x,currentPage:O,totalPages:s.total_pages})]})}var E=n.p+"static/media/github.a6b8e8e3.svg",F=n.p+"static/media/email.a88b1134.svg",A=n.p+"static/media/linked.91591bfc.svg";n(70);function I(){return Object(h.jsxs)("footer",{id:"footerContainer",children:[Object(h.jsx)("a",{href:"https://github.com/AustenBaker/",children:Object(h.jsx)("img",{src:E,alt:"github icon"})}),Object(h.jsx)("a",{href:"mailto:austenbaker225@gmail.com",children:Object(h.jsx)("img",{src:F,alt:"email icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/austenbaker/",children:Object(h.jsx)("img",{src:A,alt:"linkedin icon"})})]})}n(71),n(72);function R(){return Object(h.jsx)("div",{id:"loadingContainer",children:Object(h.jsx)("div",{id:"loading"})})}var q="65ed4f55ab251e794b0c6557626f9c61";function D(e){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({url:"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(q,"&append_to_response=credits"),method:"GET",headers:{Authorization:"Bearer "+q}});case 2:return 200!==(n=e.sent).status&&204!==n.status&&console.log("error"),console.log("returning data",n.data.value),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=document.querySelector("html");function M(){var e=Object(d.g)().id,t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(b.a)(i,2),o=s[0],u=s[1],l=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,u(n),c(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){c(!1),l(e)}),[e]),r){if(r){var j="$"+o.revenue.toLocaleString();"$0"===j&&(j="N/A");var p="https://image.tmdb.org/t/p/original"+o.backdrop_path;return J.style.backgroundImage="url("+p+")",Object(h.jsxs)("div",{id:"detailsPage",children:[Object(h.jsxs)("div",{id:"detailsContainer",children:[Object(h.jsxs)("div",{id:"detailsTextContainer",children:[Object(h.jsx)("div",{style:{color:"white",fontSize:32,fontWeight:500},children:o.title}),Object(h.jsx)("div",{style:{color:"#01d277",fontSize:20,fontWeight:500},children:o.tagline}),Object(h.jsx)("p",{style:{color:"white",fontSize:16},children:o.overview}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{color:"white",fontSize:24},children:o.genres.map((function(e){return e.name+" "}))}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:{color:"white",fontSize:16},children:"Runtime:"}),Object(h.jsxs)("div",{style:{color:"#01d277",fontSize:24},children:[" ",o.runtime," mins"]}),Object(h.jsx)("div",{style:{color:"white",fontSize:16},children:"Box Office:"}),Object(h.jsx)("div",{style:{color:"#01d277",fontSize:24},children:j}),Object(h.jsx)("div",{style:{color:"white",fontSize:16},children:"Released:"}),Object(h.jsx)("div",{style:{color:"#01d277",fontSize:24},children:o.release_date})]})]}),Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+o.poster_path,alt:o.title,id:"detailsImg"})]}),Object(h.jsx)("div",{id:"castContainer",children:o.credits.cast.slice(0,8).map((function(e){return Object(h.jsxs)("div",{className:"castCard",children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w185"+e.profile_path,alt:e.name}),Object(h.jsx)("p",{children:e.name})]},e.name)}))})]})}return Object(h.jsx)("div",{id:"detailsPage"})}return Object(h.jsx)(R,{})}var U="65ed4f55ab251e794b0c6557626f9c61";function W(e,t){return $.apply(this,arguments)}function $(){return($=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({url:"https://api.themoviedb.org/3/search/movie?api_key=".concat(U,"&language=en-US&include_adult=false&query=").concat(t,"&page=").concat(n),method:"GET",headers:{Authorization:"Bearer "+U}});case 2:return 200!==(a=e.sent).status&&204!==a.status&&console.log("error"),console.log("returning data",a.data.value),e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return Object(h.jsx)("div",{className:"skeleton"})}function H(){for(var e=Object(d.g)().key,t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(b.a)(i,2),o=s[0],u=s[1],l=Object(a.useState)(1),j=Object(b.a)(l,2),p=j[0],v=j[1],O=[],g=0;g<20;g++)O.push(Object(h.jsx)(L,{},g));var x=function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t,n);case 2:a=e.sent,c(a),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u(!1),x(e,p)}),[e,p]),Object(h.jsxs)("div",{children:[o?Object(h.jsx)(S,{setCurrentPage:v,currentPage:p,totalPages:r.total_pages}):null,Object(h.jsx)("div",{className:"moviesContainer",children:o?r.results.map((function(e){return Object(h.jsx)(k,{movie:e},e.id)})):Object(h.jsx)("div",{className:"moviesContainer",children:O})}),o?Object(h.jsx)(S,{setCurrentPage:v,currentPage:p,totalPages:r.total_pages}):null]})}var K=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/details/:id",component:M}),Object(h.jsx)(d.a,{path:"/key/:key",component:H}),Object(h.jsx)(d.a,{path:"/",exact:!0,component:T})]}),Object(h.jsx)(I,{})]})}}]),n}(r.a.Component),Q=K;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(Q,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d0ac8178.chunk.js.map