(this.webpackJsonpquranapp=this.webpackJsonpquranapp||[]).push([[0],{133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=a(167),l=a(169),s=a(33),u=a(32),m=Object(c.a)((function(e){return{bar:{backgroundColor:u.a[600],display:"flex",flexDirection:"row",height:"4em",justifyContent:"center"},grow:{flexGrow:1},mystyle:{padding:"0.3em",fontSize:"2em"},logo:{padding:"0.5em"}}}));function d(){var e=m();return r.a.createElement("div",{className:e.grow},r.a.createElement(l.a,{className:e.bar,position:"static"},r.a.createElement(s.a,{className:e.mystyle,variant:"h6",noWrap:!0},"\u0627\u0644\u0652\u0642\u064f\u0631\u0652\u0622\u0646 \u0627\u0644\u0652\u0643\u064e\u0631\u0650\u064a\u0652\u0645")))}var h=a(58),p=a(59),g=a(65),f=a(64),b=a(27),y=a(175),E=a(171),v=a(138),k=a(174),w=a(172),x=a(180),C=a(61),j=a.n(C),N=a(60),O=a(173),S=a(179),A=Object(c.a)((function(e){return{root:{width:"100%",maxWidth:360,alignSelf:"center",backgroundColor:e.palette.background.paper},playbutton:{color:u.a[900],cursor:"pointer"},pinterlist:{cursor:"pointer",marginBottom:"5px"},roundedplay:{backgroundColor:u.a[100]},inputRoot:{width:"100%",height:"3em",borderBottom:"1px solid darkseagreen"},inputInput:{padding:"2em",color:u.a[700],fontWeight:900,direction:"rtl"}}})),T=function(e){var t=A();return r.a.createElement(E.a,{className:t.root},r.a.createElement(S.a,{onChange:e.search,placeholder:"\u0625\u0628\u062d\u062b...",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}),r.a.createElement(N.Scrollbars,{style:{width:"100%",height:"29em",marginRight:"0px"}},void 0===e.data[0]?r.a.createElement("div",null,r.a.createElement(v.a,{className:t.pinterlist},r.a.createElement(w.a,null,r.a.createElement(x.a,{className:t.roundedplay},r.a.createElement(O.a,{variant:"circle",width:40,height:40}))),r.a.createElement(O.a,{variant:"text",width:"100%"}))):e.data.map((function(a,n){return r.a.createElement(v.a,{className:t.pinterlist,key:e.data[n].number},r.a.createElement(w.a,{id:e.data[n].number,onClick:e.itemclicked.bind(void 0,n)},r.a.createElement(x.a,{id:e.data[n].number,onClick:e.itemclicked.bind(void 0,n),className:t.roundedplay},r.a.createElement(j.a,{className:t.playbutton,id:e.data[n].number,onClick:e.itemclicked.bind(void 0,n)}))),r.a.createElement(k.a,{primary:"".concat(e.data[n].name),secondary:e.data[n].englishName}),r.a.createElement(k.a,{primary:e.data[n].numberOfAyahs,secondary:e.data[n].revelationType}))}))))},W=a(62),B=a.n(W),q=a(63),z=a(176),M=a(178),R=a(177),D=a(48),I=Object(c.a)((function(e){return{root:{flexGrow:1,marginTop:"2em"},choosemokrea:{backgroundColor:"white",color:u.a[600],textAlign:"center",fontSize:"1em",marginTop:"1em",width:"100%",maxWidth:"360px",fontWeight:"bolder",borderBottom:"1px solid #A5D6A7"},paper:{backgroundColor:u.a[200],width:"100%"},control:{padding:e.spacing(3),height:"30em",marginLeft:"1em",marginRight:"1em"},player:{height:"100px"},ayatsText:{backgroundColor:"white",color:u.a[600],textAlign:"center",fontSize:"3em",marginTop:"1em",width:"100%",height:"100%"},ontabletorphone:{backgroundColor:"white",color:u.a[600],marginTop:"1em",width:"100%",textAlign:"center"},fontsize:{fontSize:"medium"}}})),L=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(0),l=Object(b.a)(c,2),u=l[0],m=l[1],d=Object(n.useState)(null),h=Object(b.a)(d,2),p=h[0],g=h[1],f=Object(n.useState)("ar.alafasy"),E=Object(b.a)(f,2),v=E[0],k=E[1],w=function(e){console.log(e.target.getAttribute("id")),null!==e.target.getAttribute("id")&&(k(k=e.target.getAttribute("id")),g(null)),g(null)},x=function(e){D.get("https://api.alquran.cloud/v1/surah/".concat(e,"/").concat(v)).then((function(e){console.log(e.data.data.ayahs),i(e.data.data.ayahs)})).catch((function(e){}))},C=I(),j=Object(q.useMediaQuery)({maxWidth:1224});return r.a.createElement(y.a,{container:!0,className:C.root,spacing:2},r.a.createElement(y.a,{className:C.paper,item:!0,xs:12,md:8,lg:8},void 0===o[0]?null:r.a.createElement("div",null," ",r.a.createElement(B.a,{height:"2em",width:"100%",controls:!0,onPlay:function(){u<=o.length-1&&console.log(o[u].text)},onEnded:function(){u<o.length-1&&(console.log("ended"),m(u+1),console.log(u))},className:C.player,url:o[u].audio,playing:!0}),!0===j?r.a.createElement(s.a,{className:C.ayatsText},o[u].text):r.a.createElement(s.a,{className:C.ontabletorphone},o[u].text))),r.a.createElement(y.a,{className:C.paper,item:!0,xs:12,md:4,lg:4},r.a.createElement(z.a,{className:C.choosemokrea,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){g(e.currentTarget)}},"\u0627\u0636\u063a\u0637 \u0647\u0646\u0627 \u0644\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0645\u0642\u0631\u0623"),r.a.createElement(M.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:w},"empty"!==e.edition[0]?e.edition.map((function(e,t){return r.a.createElement(R.a,{key:t,id:e.identifier,onClick:w},e.name)})):r.a.createElement(R.a,{onClick:w},"empty")),r.a.createElement(T,{data:e.data,itemclicked:function(e,t){m(0),x(t.target.getAttribute("id")),console.log(t.target.getAttribute("id"))},search:e.search})))},G=a(48),J=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).search=function(t){e.setState({searching:t.target.value})},e.state={ayat:[],searching:"",edition:["empty"]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;G.get("https://api.alquran.cloud/v1/surah").then((function(t){e.setState({ayat:t.data.data}),G.get("https://api.alquran.cloud/v1/edition?format=audio&language=ar").then((function(t){e.setState({edition:t.data.data})})).catch((function(e){}))})).catch((function(e){}))}},{key:"render",value:function(){var e=this;if(this.state.ayat===[])return r.a.createElement("h1",null,"loading..");var t=this.state.ayat.filter((function(t){return t.name.toLowerCase().includes(e.state.searching.toLowerCase())}));return r.a.createElement(L,{data:t,edition:this.state.edition,search:this.search})}}]),a}(n.Component),P=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(J,null))};a(132),a(133),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(134)}},[[73,1,2]]]);
//# sourceMappingURL=main.14f917fa.chunk.js.map