(this["webpackJsonpblock-trade"]=this["webpackJsonpblock-trade"]||[]).push([[17],{1006:function(e,t,a){"use strict";var n=a(3),r=a(21),o=(a(22),a(0)),c=a.n(o),s=a(27),i=a.n(s),l=!1,u=a(780),d=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var r,o=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?o?(r="exited",n.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:r},n.nextCallback=null,n}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?"entering"!==a&&"entered"!==a&&(t="entering"):"entering"!==a&&"entered"!==a||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!==typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,r=this.props.nodeRef?[n]:[i.a.findDOMNode(this),n],o=r[0],c=r[1],s=this.getTimeouts(),u=n?s.appear:s.enter;!e&&!a||l?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,c),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,c),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,c)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:i.a.findDOMNode(this);t&&!l?(this.props.onExit(n),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:i.a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],o=r[0],c=r[1];this.props.addEndListener(o,c)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(n.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.a.createElement(u.a.Provider,{value:null},"function"===typeof a?a(e,r):c.a.cloneElement(c.a.Children.only(a),r))},t}(c.a.Component);function p(){}d.contextType=u.a,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:p,onEntering:p,onEntered:p,onExit:p,onExiting:p,onExited:p},d.UNMOUNTED="unmounted",d.EXITED="exited",d.ENTERING="entering",d.ENTERED="entered",d.EXITING="exiting";t.a=d},1032:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(801),a(39)),c=a(651),s=a(746),i=a(778),l=a(785);t.default=Object(o.b)((function(e){return{auth:e.auth,trade:e.trade,conn:e.conn}}),{loadUser:c.e,getAllTrades:s.c,getAllConn:l.a,checkStatus:s.a})((function(e){var t=e.trade,a=e.loadUser,o=e.auth,c=e.getAllTrades,s=e.getAllConn,l=e.conn,u=e.checkStatus;Object(n.useEffect)((function(){a()}),[]),Object(n.useEffect)((function(){o.user&&(s(),c())}),[o.user]),Object(n.useEffect)((function(){t.trades&&l&&(console.log(l),u({conn:l,trades:t.trades}))}),[t.trades,l]);var d=t.trades;return r.a.createElement(n.Fragment,null,d&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin"},r.a.createElement("h3",null,"Recent trades"))),r.a.createElement(i.a,null)))}))},673:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1070),r=(a(0),a(734));function o(){return Object(n.a)()||r.a}},684:function(e,t,a){"use strict";function n(e){return e&&e.ownerDocument||document}a.d(t,"a",(function(){return n}))},707:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return e.scrollTop};function r(e,t){var a=e.timeout,n=e.style,r=void 0===n?{}:n;return{duration:r.transitionDuration||"number"===typeof a?a:a[t.mode]||0,delay:r.transitionDelay}}},738:function(e,t,a){"use strict";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),(function(){}))}a.d(t,"a",(function(){return n}))},739:function(e,t,a){"use strict";var n=a(2),r=a(631),o=a(0),c=(a(22),a(633)),s=a(634),i=a(637),l=o.forwardRef((function(e,t){var a=e.children,s=e.classes,l=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,m=void 0===p?"svg":p,f=e.fontSize,h=void 0===f?"default":f,E=e.htmlColor,b=e.titleAccess,v=e.viewBox,x=void 0===v?"0 0 24 24":v,g=Object(r.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(m,Object(n.a)({className:Object(c.a)(s.root,l,"inherit"!==d&&s["color".concat(Object(i.a)(d))],"default"!==h&&s["fontSize".concat(Object(i.a)(h))]),focusable:"false",viewBox:x,color:E,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},g),a,b?o.createElement("title",null,b):null)}));l.muiName="SvgIcon",t.a=Object(s.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(l)},746:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a(19),r=a.n(n),o=a(44),c=a(53),s=a.n(c),i=(a(290),function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/trade");case 3:a=e.sent,console.log(a.data.trades[2]),a.data.trades.map(function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("PA"!==t.paymentType||!1!==t.rf){e.next=17;break}if(a=(a=new Date(t.invoiceDate)).addDays(t.creditPeriod),n=new Date,o=Math.abs(n-a),c=Math.ceil(o/864e5),console.log(o+" milliseconds"),console.log(c+" days"),!(c<=5)){e.next=16;break}return i={"Content-Type":"application/json"},e.next=12,s.a.post("/reminder",{tradeId:t.TradeId},{headers:i});case 12:l=e.sent,console.log(l),e.next=17;break;case 16:console.log("Time for due");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t({type:"SET_TRADES",payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"TRADE_ERROR"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()});Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var l=function(e){var t=e.username;return function(){var e=Object(o.a)(r.a.mark((function e(a){var n,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={"Content-Type":"application/json"},o={username:t},e.next=5,s.a.post("/trade/username",o,{headers:n});case 5:c=e.sent,console.log(c.data),a({type:"SELECT_ADDR",payload:c.data.user.walletAddr}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_ADDR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e){var t=e.tradeId,a=e.status;return function(){var e=Object(o.a)(r.a.mark((function e(n){var o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={"Content-Type":"application/json"},e.next=4,s.a.post("/trade/update",{tradeId:t,tradeStatus:a},{headers:o});case 4:c=e.sent,console.log(c),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.tradeId,n=t.status,e.prev=1,o={"Content-Type":"application/json"},e.next=5,s.a.post("/trade/update",{tradeId:a,tradeStatus:n},{headers:o});case 5:c=e.sent,console.log(c),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.conn,a=e.trades;return function(){var e=Object(o.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t),console.log(a),(c=a.trades).map(function(){var e=Object(o.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.TradeId),e.next=3,t.trades_contract.methods.allApproved(a.TradeId.toString()).call();case 3:n=e.sent,console.log(n),n&&"IV"===c.tradeStatus&&p({tradeId:c.TradeId,status:"DV"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},762:function(e,t,a){"use strict";var n=a(19),r=a.n(n),o=a(44),c=a(76),s=a(810),i=a.n(s),l=a(0),u=a.n(l),d=a(802),p=a(862),m=a(864),f=a(863),h=a(747),E=a(764),b=a(39),v=a(805),x=a(746),g=a(1066),S=a(782),y=a(783),k=a(1037),D=a(1038),w=a(1039),N=a(1041),C=a(1042),T=a(1040),O=a(811),j=a.n(O),I=a(812),R=a.n(I),G=a(813),P=a.n(G),A=a(814),L=a.n(A),U=a(809),V=a.n(U),z=Object(d.a)((function(e){return{root:{minWidth:300,"&:hover":{transform:"translate3D(0,-1px,0) scale(1.03)"}},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},paper1:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},btn:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",marginRight:"5px",border:"1px solid",lineHeight:1.5,backgroundColor:"#f3f4fa",borderColor:"#f3f4fa",borderRadius:"5px","&:hover":{backgroundColor:"#ffffff",borderColor:"#f3f4fa",transform:"translate3D(0,-1px,0) scale(1.03)",boxShadow:"8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04)",transition:"all .6s ease"},"&:active":{boxShadow:"none",backgroundColor:"#f3f4fa",borderColor:"#ffffff"}}}}));t.a=Object(b.b)((function(e){return{conn:e.conn,auth:e.auth,tradeAddr:e.trade}}),{statusUpdate:x.e,getWalletAddr:x.d,clearAddr:x.b})((function(e){e.auth;var t=e.trade,n=e.user,s=e.statusUpdate,d=e.conn,b=e.getWalletAddr,x=(e.clearAddr,e.tradeAddr,z()),O=(x.bullet,u.a.useState(0)),I=Object(c.a)(O,2),G=I[0],A=(I[1],["Documents Uploaded","Documents Verified","Goods Laided","Goods Received","Payment complete"]),U=Object(l.useState)(!1),M=Object(c.a)(U,2),_=(M[0],M[1],u.a.useState(!1)),B=Object(c.a)(_,2),W=B[0],H=B[1],F=function(){var e=Object(o.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.trades_contract.methods.getTrade(t.TradeId).call();case 2:n="https://ipfs.infura.io/ipfs/"+(n=e.sent),window.open(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(r.a.mark((function e(a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.amount,console.log(n),o=t.selectedAddr,d.main_contract.methods.transfer30(n,t.TradeId,o).send({from:d.current_account}).on("transactionHash",(function(e){window.alert("30% transferred")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.main_contract.methods.transfer70(t.TradeId).send({from:d.current_account}).on("transactionHash",(function(e){window.alert("70% transferred")}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 grid-margin"},u.a.createElement(p.a,{className:x.root,raised:!0,style:{backgroundImage:"linear-gradient(120deg, #2d5fc3, #128bfc, #18bef1)",color:"white",borderRadius:20,maxWidth:"40rem",maxHeight:"40rem"}},u.a.createElement(f.a,null,u.a.createElement("div",{className:"d-flex"},u.a.createElement("div",{className:"profile-image"},u.a.createElement("img",{src:a(163),alt:"profile",style:{maxHeight:"110px",maxWidth:"120px",marginLeft:"2rem"}})),u.a.createElement("div",{className:"text-right ml-3",style:{paddingLeft:"2rem",paddingTop:"3rem"}},u.a.createElement("h4",{className:"profile-name",style:{color:"black"}},t.exporterUserName===n.username?"Importer Name:":"Exporter Name:",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0",t.exporterUserName===n.username?"".concat(t.importerUserName):"".concat(t.exporterUserName))))),u.a.createElement("hr",null),u.a.createElement(E.a,{component:"h2",style:{wordWrap:"break-word",color:"black"}},"Trade Id:"," ",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0\xa0\xa0\xa0",t.TradeId)),u.a.createElement("hr",null),u.a.createElement("h5",{style:{color:"black"}},"Status :",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0\xa0",A[G])),u.a.createElement("h5",{style:{color:"black"}},"Payment Type :",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0\xa0",t.paymentType)),"PA"===t.paymentType&&0!==t.creditPeriod&&u.a.createElement("h5",{style:{color:"black"}},"Credit Period :",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0\xa0",0!==t.creditPeriod&&"".concat(t.creditPeriod))),u.a.createElement("h5",{style:{color:"black"}},"Amount :",u.a.createElement("span",{style:{color:"white"}},"\xa0\xa0\xa0",t.amount))),u.a.createElement(m.a,{style:{color:"ffffff"}},u.a.createElement(h.a,{className:x.btn,style:{marginLeft:"1rem"},onClick:F},"View Details"),u.a.createElement(h.a,{className:x.btn,onClick:function(){H(!0)}},"Check Status"),t.importerUserName===n.username&&"DU"===t.tradeStatus&&u.a.createElement(h.a,{className:x.btn,onClick:function(){console.log(t.exporterUserName),b({username:t.exporterUserName}),q(),s({tradeId:t.TradeId,status:"IV"})}},"Verify document"),"DV"===t.tradeStatus&&t.exporterUserName===n.username&&u.a.createElement(h.a,{className:x.btn,onClick:function(){s({tradeId:t.TradeId,status:"GL"})}},"Goods Laided"),"GL"===t.tradeStatus&&t.importerUserName===n.username&&u.a.createElement(h.a,{className:x.btn,onClick:function(){s({tradeId:t.TradeId,status:"GD"})}},"Goods Recieved"),"GD"===t.tradeStatus&&t.importerUserName===n.username&&u.a.createElement(h.a,{className:x.btn,onClick:function(){J(),s({tradeId:t.TradeId,status:"PD"})}},"Pay"))),u.a.createElement(g.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:x.modal,open:W,onClose:function(){H(!1)},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},u.a.createElement(y.a,{in:W},u.a.createElement("div",{className:x.paper,style:{width:"50%"}},u.a.createElement("h4",{id:"transition-modal-title"},"Trade Status"),u.a.createElement("div",null,u.a.createElement(k.a,{align:"alternate"},u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,null,u.a.createElement(V.a,null)),u.a.createElement(N.a,null)),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:"green",color:"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Documents Uploaded")))),u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,{color:"primary"},"IV"===t.tradeStatus||"DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus?u.a.createElement(V.a,null):u.a.createElement(i.a,null)),u.a.createElement(N.a,null)),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:("IV"===t.tradeStatus||"DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"green",color:("IV"===t.tradeStatus||"DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Importer Verified")))),u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,{color:"primary"},"DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus?u.a.createElement(V.a,null):u.a.createElement(j.a,null)),u.a.createElement(N.a,null)),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:("DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"green",color:("DV"===t.tradeStatus||"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Documents Verified")))),u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,{color:"primary",variant:"outlined"},"GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus?u.a.createElement(V.a,null):u.a.createElement(R.a,null)),u.a.createElement(N.a,{className:x.secondaryTail})),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:("GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"green",color:("GL"===t.tradeStatus||"GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Goods Laided")))),u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,{color:"secondary"},"GD"===t.tradeStatus||"PD"===t.tradeStatus?u.a.createElement(V.a,null):u.a.createElement(P.a,null)),u.a.createElement(N.a,{className:x.secondaryTail})),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:("GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"green",color:("GD"===t.tradeStatus||"PD"===t.tradeStatus)&&"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Goods Delivered")))),u.a.createElement(D.a,null,u.a.createElement(w.a,null,u.a.createElement(T.a,{color:"secondary",variant:"outlined"},"PD"===t.tradeStatus?u.a.createElement(V.a,null):u.a.createElement(L.a,null))),u.a.createElement(C.a,null,u.a.createElement(v.a,{elevation:3,className:x.paper1,style:{backgroundColor:"PD"===t.tradeStatus&&"green",color:"PD"===t.tradeStatus&&"white",borderRadius:20}},u.a.createElement(E.a,{variant:"h6",component:"h1",align:"center"},"Payment Done"))))))))))}))},778:function(e,t,a){"use strict";var n=a(76),r=a(0),o=a.n(r),c=a(802),s=a(39),i=a(762),l=Object(c.a)((function(e){return{root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));t.a=Object(s.b)((function(e){return{auth:e.auth,trade:e.trade}}))((function(e){var t=e.trade,a=e.auth,c=l(),s=(c.bullet,t.trades.trades);console.log(s);var u=o.a.useState(0),d=Object(n.a)(u,2),p=(d[0],d[1],a.user),m=Object(r.useState)(!1),f=Object(n.a)(m,2);f[0],f[1];return o.a.createElement("div",{className:"row"},s&&s.slice(0,4).map((function(e){return o.a.createElement(i.a,{style:{color:"ffffff"},trade:e,user:p})})))}))},805:function(e,t,a){"use strict";var n=a(631),r=a(2),o=a(0),c=(a(22),a(633)),s=a(634),i=o.forwardRef((function(e,t){var a=e.classes,s=e.className,i=e.component,l=void 0===i?"div":i,u=e.square,d=void 0!==u&&u,p=e.elevation,m=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,E=Object(n.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(l,Object(r.a)({className:Object(c.a)(a.root,s,"outlined"===h?a.outlined:a["elevation".concat(m)],!d&&a.rounded),ref:t},E))}));t.a=Object(s.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(i)}}]);
//# sourceMappingURL=17.6bb10a2f.chunk.js.map