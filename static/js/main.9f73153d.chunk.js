(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),i=n(8),s=n(5),l=n(15),u=n(16),d=(n(27),n(1)),h=n(2),b=n(4),f=n(3),p=function(e){var t=e.id,n=e.name,o=(e.username,e.email);return r.a.createElement("div",{className:"tc dib br3 pa3 ma2 grow bw2 shadow-5",style:{backgroundColor:"#00DBDE"}},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robo"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))},m=function(e){var t=e.robots;return console.log("Cardlist----"),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(p,{key:t,id:e.id,name:e.name,username:e.username,email:e.email})})))},g=function(e){e.search;var t=e.searchChange;return console.log("scrollbox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robo",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},E=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("catch-----",e,"-----",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops... that is not good"):this.props.children}}]),n}(o.Component),O=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("counterbutton---"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count : ",this.state.count)}}]),n}(o.PureComponent),C=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return console.log("header---"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(O,{color:"red"}))}}]),n}(o.PureComponent),w=(n(28),function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onrequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",{className:"tc f1"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(g,{search:t,searchChange:n}),r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(m,{robots:c}))))}}]),n}(o.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onrequestRobots:function(){return e((function(e){e({type:"FETCH_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_ROBOTS_FAILED",payload:t})}))}))}}}))(w),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(29);var k=n(6),R={searchField:""},F={robots:[],isPending:!1,error:""},_=(Object(l.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"FETCH_ROBOTS_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{robots:t.payload,isPending:!1});case"FETCH_ROBOTS_FAILED":return Object(k.a)(Object(k.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}})),N=Object(s.d)(_,Object(s.a)(u.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/roboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/roboFriends","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.9f73153d.chunk.js.map