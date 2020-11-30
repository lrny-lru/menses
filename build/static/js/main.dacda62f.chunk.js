(this.webpackJsonpmenses=this.webpackJsonpmenses||[]).push([[0],{19:function(e,t,n){},22:function(e,t){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3e3,API_ENDPOINT:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT}},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(21),i=n.n(a),o=n(4),l=n(5),j=n(7),d=n(6),h=s.a.createContext({updateStore:function(){},url:"https://hidden-escarpment-33113.herokuapp.com"}),u=n(13),b=n(2),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"welcome-container",children:[Object(c.jsx)("h2",{children:"Welcome to (me)nses"}),Object(c.jsxs)("section",{classname:"landing-container",children:[Object(c.jsx)("label",{"aria-label":"What is menses?",children:Object(c.jsx)("h3",{children:"What is (me)nses?"})}),Object(c.jsx)("p",{children:"Menses is a wiki dedicated to cultivating up-to-date knowledge on: the menstrual cycle, sex hormones, anatomy and disorders/diseases related to menses without using gendered language."})]})]})}}]),n}(r.Component),p=(n(19),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{id:"Topics-Container",children:[Object(c.jsx)("h2",{children:"Topics"}),Object(c.jsx)("div",{className:"topics",children:Object(c.jsxs)("ul",{id:"topics",children:[Object(c.jsx)("li",{id:"anatomy",children:Object(c.jsx)("a",{href:"/anatomy",children:"Anatomy"})}),Object(c.jsx)("li",{id:"Symptom",children:Object(c.jsx)("a",{href:"/Symptoms",children:"Symptoms"})}),Object(c.jsx)("li",{id:"hormone",children:Object(c.jsx)("a",{href:"/hormones",children:"Hormones"})}),Object(c.jsx)("li",{id:"disorder",children:Object(c.jsx)("a",{href:"/disorders",children:"Disorders"})}),Object(c.jsx)("li",{id:"cycle",children:Object(c.jsx)("a",{href:"/cycles",children:"Cycle phases"})})]})})]}),Object(c.jsx)("footer",{className:"results"})]})}}]),n}(r.Component)),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Contacts-container",children:[Object(c.jsx)("h2",{children:"Wanna contact the author?"}),Object(c.jsx)("section",{className:"contacts"})]})}}]),n}(r.Component),m=n(14),f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.togglePanel=function(t){e.togglePanel=e.togglePanel.bind(Object(m.a)(e)),e.setState({open:!e.state.open})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,r=t.content,s=t.tags;return Object(c.jsxs)("section",{className:"wiki-article",id:"wiki-article",children:[Object(c.jsx)("h3",{onClick:function(t){return e.togglePanel(t)},id:"display-wiki-name",children:n}),this.state.open?Object(c.jsx)("p",{id:"content",children:r}):null,Object(c.jsxs)("p",{id:"bold-keywords",children:[Object(c.jsx)("b",{children:"keywords:"})," ",s]})]})}}]),n}(r.Component);f.contextType=h;var v=f,y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).populateItems=function(){return e.props.store.topics.map((function(e){return Object(c.jsx)(v,{name:e.title,content:e.content,tags:e.keywords,expanded:"false"},e.id)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("section",{id:"container4container",children:Object(c.jsxs)("section",{id:"container-for-wikis",children:[Object(c.jsx)("h2",{children:"Recently added articles"}),this.populateItems(Object(c.jsx)(v,{}))]})})}}]),n}(r.Component),S=n(22),g=n.n(S),T=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:"",filter:"",topics:[]},e.onChange=function(t){var n=t.target.search.value,c=t.target.value;e.setState({search:n,filter:c,error:null}),fetch("".concat(g.a.API_ENDPOINT,"/").concat(c,"/"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(t){console.log(t.results),e.setState({topicsData:t.results})})).catch((function(t){return e.setState({error:t})}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={search:this.state.search,filter:this.state.filter,topicsData:this.state.TopicsData,handleOnSubmit:this.handleOnSubmit};return Object(c.jsx)(h.Provider,{value:t,children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleOnSubmit(t.target)},children:[Object(c.jsx)("label",{htmlFor:"search-bar",class:"hidden"}),Object(c.jsx)("input",{name:"search-bar",type:"text",id:"search-bar","aria-label":"search bar"}),Object(c.jsx)("button",{type:"submit",id:"search-submit-button"})]})})}}]),n}(r.Component);T.contextType=h;var C=T,E=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={store:{topics:[]},url:"https://hidden-escarpment-33113.herokuapp.com"},e.updateStore=function(){e.getTopics()},e.getTopics=function(){fetch("".concat(e.context.url,"/topics")).then((function(e){return e.json()})).then((function(t){e.setState({store:{topics:t}})})).catch((function(e){throw console.error(e),new Error("Error retrieving topics: ".concat(e.message))}))},e.componentDidMount=function(){e.updateStore()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={updateStore:this.updateStore,url:this.state.url};return Object(c.jsx)(h.Provider,{value:t,children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)("header",{id:"static-header",children:[Object(c.jsx)("div",{id:"flex",children:Object(c.jsxs)("nav",{children:[Object(c.jsxs)("ul",{className:"unordered-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{exact:!0,to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/topics",children:"Topics"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/contact",children:"Contact "})}),Object(c.jsx)("label",{htmlFor:"page title","aria-label":"menses",class:"screen-reader-text",children:Object(c.jsx)("h1",{id:"menses-title",children:"(me)nses"})}),Object(c.jsx)("span",{children:Object(c.jsx)(C,{})})]}),Object(c.jsx)("section",{})]})}),Object(c.jsxs)("div",{id:"content",children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(b.a,{path:"/Topics",render:function(){return Object(c.jsx)(p,{store:e.state.store})}}),Object(c.jsx)(b.a,{path:"/Contact",component:x})]})]}),Object(c.jsx)("footer",{children:Object(c.jsx)(y,{store:this.state.store})})]})})}}]),n}(r.Component);E.contextType=h;var _=E;i.a.render(Object(c.jsx)(_,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.dacda62f.chunk.js.map