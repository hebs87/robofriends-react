(this["webpackJsonprobofriends-react"]=this["webpackJsonprobofriends-react"]||[]).push([[0],{26:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(7),i=t.n(c),a=t(8),s=t(2),l=t(15),u=t(16),h="CHANGE_SEARCH_FIELD",d="REQUEST_ROBOTS_PENDING",b="REQUEST_ROBOTS_SUCCESS",j="REQUEST_ROBOTS_FAILED",f={searchField:""},g={robots:[],error:"",isPending:!1},p=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case h:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case d:return Object.assign({},e,{isPending:!0});case b:return Object.assign({},e,{robots:n.payload,isPending:!1});case j:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),v=(t(26),t(27),t(3)),O=t(4),w=t(6),m=t(5),y=t(1),x=function(e){Object(w.a)(t,e);var n=Object(m.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(O.a)(t,[{key:"shouldComponentUpdate",value:function(e,n,t){return!1}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("h1",{className:"f1",children:"RoboFriends"})})}}]),t}(r.Component),R=function(e){var n=e.robot;return Object(y.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(y.jsx)("img",{src:"https://robohash.org/".concat(n.id,"?size=200x200"),alt:"Robots"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:n.name}),Object(y.jsx)("p",{children:n.email})]})]})},S=function(e){var n=e.robots;return Object(y.jsx)(y.Fragment,{children:n&&n.map((function(e){return Object(y.jsx)(R,{robot:e},e.id)}))})},C=function(e){var n=e.onSearchChange;return Object(y.jsx)("div",{className:"pa2",children:Object(y.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots...",onChange:n})})},k=function(e){var n=e.children;return Object(y.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:700},children:n})},E=function(e){Object(w.a)(t,e);var n=Object(m.a)(t);function t(e){var r;return Object(v.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(O.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,n=this.props.children;return Object(y.jsxs)(r.Fragment,{children:[e&&Object(y.jsx)("h1",{children:"There has been an error!"}),!e&&n]})}}]),t}(r.Component),F=(t(29),function(e){Object(w.a)(t,e);var n=Object(m.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(y.jsxs)("div",{className:"tc",children:[o&&Object(y.jsx)("h1",{className:"f1",children:"Loading..."}),!o&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(x,{}),Object(y.jsx)(C,{onSearchChange:t}),Object(y.jsx)(k,{children:Object(y.jsx)(E,{children:Object(y.jsx)(S,{robots:c})})})]})]})}}]),t}(r.Component)),N=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,error:e.requestRobots.error,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:h,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:d}),fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(n){return e({type:b,payload:n})})).catch((function(n){return e({type:j,payload:n})}))}))}}}))(F),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=Object(l.createLogger)(),L=Object(s.d)(p,Object(s.a)(u.a,A));i.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(a.a,{store:L,children:Object(y.jsx)(N,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-react","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(n,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.a6077276.chunk.js.map