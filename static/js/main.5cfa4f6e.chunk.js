(this["webpackJsonprobofriends-react"]=this["webpackJsonprobofriends-react"]||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),i=n(8),s=n(2),l=n(17),u=n(18),h={searchField:""},d={robots:[],error:"",isPending:!1},f=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),b=(n(27),n(28),n(3)),p=n(4),g=n(7),m=n(6),E=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),n}(r.Component),v=function(e){var t=e.robot;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?200x200"),alt:"Robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t.name),o.a.createElement("p",null,t.email)))},O=function(e){var t=e.robots;return o.a.createElement(o.a.Fragment,null,t&&t.map((function(e){return o.a.createElement(v,{key:e.id,robot:e})})))},w=function(e){var t=e.onSearchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots...",onChange:t}))},y=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:700}},t)},S=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return o.a.createElement(r.Fragment,null,e&&o.a.createElement("h1",null,"There has been an error!"),!e&&t)}}]),n}(r.Component),R=(n(29),function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"tc"},a&&o.a.createElement("h1",{className:"f1"},"Loading..."),!a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(w,{onSearchChange:n}),o.a.createElement(y,null,o.a.createElement(S,null,o.a.createElement(O,{robots:c})))))}}]),n}(r.Component)),j=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,error:e.requestRobots.error,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=Object(l.createLogger)(),T=Object(s.d)(f,Object(s.a)(u.a,_));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:T},o.a.createElement(j,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends-react","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.5cfa4f6e.chunk.js.map