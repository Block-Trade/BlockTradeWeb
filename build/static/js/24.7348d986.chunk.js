(this["webpackJsonpblock-trade"]=this["webpackJsonpblock-trade"]||[]).push([[24],{1047:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n(19),c=n.n(r),l=n(44),o=n(76),i=n(0),s=n.n(i),u=n(802),m=n(764),f=n(747),d=n(39),p=n(785),b=n(651),h=n(626),y=n(627),g=n(862),v=n(864),E=n(863),O=Object(u.a)((function(e){return{root:{minWidth:275,backgroundColor:"#2d5fc3",borderRadius:"30px",maxWidth:1e3,textAlign:"center",margin:"0 auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:30,marginTop:"3rem"},pos:{marginBottom:12}}}));t.default=Object(d.b)((function(e){return{conn:e.conn,auth:e.auth}}),{loadUser:b.e,getAllConn:p.a})((function(e){var t,r=e.conn,u=e.loadUser,d=e.getAllConn,p=e.auth,b=O(),j=Object(i.useState)({isOpen:!1,value:"defaultvalue"}),k=Object(o.a)(j,2),x=k[0],w=k[1],C=Object(i.useState)(""),W=Object(o.a)(C,2),S=W[0],T=W[1],_=Object(i.useState)(),B=Object(o.a)(_,2),N=B[0],A=B[1],z=Object(i.useState)(),D=Object(o.a)(z,2),H=D[0],I=D[1];Object(i.useEffect)((function(){u()}),[]),Object(i.useEffect)((function(){p.user&&d()}),[p.user]),Object(i.useEffect)((function(){r.main_contract&&J()}),[r.main_contract]);var J=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.main_contract.methods.balanceOf(r.current_account).call();case 2:t=e.sent,I(t),console.log(H);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){w({isOpen:!x.isOpen})},F=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=window.web3.utils.toWei(t,"Ether"),r.main_contract.methods.buyTokens().send({value:t,from:r.current_account}).on("transactionHash",(function(e){console.log("BuyTokens")})),T(""),A(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t/=100,t=window.web3.utils.toWei(t,"Ether"),r.main_contract.methods.sellToken(t).send({from:r.current_account}).on("transactionHash",(function(e){console.log("sellTokens")})),T(""),A(0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){w({isOpen:!1,value:"defaultvalue"})};return s.a.createElement("div",{className:b.root,style:{marginTop:"10rem"}},s.a.createElement(g.a,{className:b.root,raised:!0},s.a.createElement(E.a,null,s.a.createElement(m.a,{className:b.title,color:"textSecondary",gutterBottom:!0,style:{textAlign:"center",color:"#ffffff"}},r.current_account),s.a.createElement("div",{style:{margin:"0 auto",left:"50%"}},s.a.createElement(m.a,{variant:"h5",component:"h2",style:{display:"inline-block",color:"#ffffff",margin:"0 auto",marginTop:"3rem"}},H),s.a.createElement("img",{alt:"bt token",src:n(960),style:(t={maxWidth:"2rem"},Object(a.a)(t,"maxWidth","2rem"),Object(a.a)(t,"marginLeft","1rem"),Object(a.a)(t,"display","inline-block"),t)})),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(f.a,{variant:"outlined",style:{backgroundColor:"white",maxWidth:"10rem",marginBottom:"2rem",marginTop:"3rem",textAlign:"center"},fullWidth:!0,onClick:function(e){e.preventDefault(),T("Buy"),U()}},"Buy"),s.a.createElement("br",null)),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(f.a,{variant:"outlined",style:{backgroundColor:"white",maxWidth:"10rem"},fullWidth:!0,onClick:function(e){e.preventDefault(),T("Sell"),U()},size:"sm"},"Sell"))),s.a.createElement(v.a,null)),s.a.createElement(h.a,{show:x.isOpen,onClose:L,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(h.a.Header,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},s.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},S," Amount")),s.a.createElement(h.a.Body,null,s.a.createElement(y.a,{className:"pt-3"},s.a.createElement(y.a.Group,{className:"d-flex search-field"},s.a.createElement(y.a.Control,{type:"number",placeholder:"Amount",size:"lg",className:"h-auto",value:N,onChange:function(e){return A(e.target.value)}}))),s.a.createElement("div",{className:"mt-3"},s.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",onClick:function(e){e.preventDefault(),"Buy"===S?F(N):G(N),L()}},"Submit"))),s.a.createElement(h.a.Footer,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},s.a.createElement(f.a,{onClick:L,style:{display:"flex",alignItems:"center",justifyContent:"center"}},"close"))))}))},960:function(e,t,n){e.exports=n.p+"static/media/token.d7a38674.png"}}]);
//# sourceMappingURL=24.7348d986.chunk.js.map