(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{o0q0:function(e,a,n){"use strict";a.a=function(e){return{main:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},mainLine:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},button:{margin:e.spacing(1)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},message:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),textAlign:"center",color:"indigo",fontWeight:"bold",cursor:"pointer",overflowWrap:"break-word",fontSize:"1rem"},itogo:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),textAlign:"left",fontSize:"1rem",fontWeight:500},error_message:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),color:"red",fontWeight:"bold"},nameField:{marginBottom:10,fontWeight:"bold",fontSize:"0.875rem",fontFamily:"Roboto",color:"#A0A0A0"},value:{marginBottom:10,fontWeight:"500",fontSize:"0.875rem",fontFamily:"Roboto"},row:{display:"flex",flexDirection:"row",alignItems:"baseline"}}}},r0lg:function(e,a,n){"use strict";n.r(a);var i=n("ln6h"),t=n.n(i),r=n("O40h"),o=n("q1tI"),s=n.n(o),c=n("H2TA"),l=n("/MKj"),m=n("ANjH"),d=n("w8fy"),u=n("pngM"),v=n("//vS"),g=n("j6IE"),f=n("Z3vd"),p=n("o0q0"),b=n("wd/R"),N=n.n(b),w=n("UgXd"),h=n.n(w),F=s.a.createElement,y=h()(function(){return n.e(28).then(n.bind(null,"y4xb"))},{loadableGenerated:{webpack:function(){return["y4xb"]},modules:["./Confirmation"]}}),x=s.a.memo(function(e){var a=e.app.isMobileApp,n=e.user.profile,i=e.mini_dialogActions,o=i.showMiniDialog,s=i.setMiniDialog,c=e.classes,l=e.element,m=e.setList,u=e.route,v=e.getInvoices,g=a?window.innerWidth-126:500;return F("div",{className:c.column,style:{width:g}},F("div",{className:c.row},F("div",{className:c.nameField},"\u0417\u0430\u043a\u0430\u0437 \u2116:\xa0"),F("div",{className:c.value},l.number)),F("div",{className:c.row},F("div",{className:c.nameField},"\u0421\u0442\u0430\u0442\u0443\u0441:\xa0"),F("div",{className:c.value},"\u043f\u0440\u0438\u043d\u044f\u0442"===l.orders[0].status&&(l.confirmationForwarder||l.confirmationClient)?u?l.confirmationForwarder?"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d":l.orders[0].status:l.confirmationClient?"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d":l.confirmationForwarder?"\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d":l.orders[0].status:l.orders[0].status)),F("div",{className:c.row},F("div",{className:c.nameField},"\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043a\u0430\u0437\u0430: \xa0"),F("div",{className:c.value},N()(l.updatedAt).format("DD.MM.YYYY HH:mm"))),F("a",{href:"/client/".concat(l.client.user._id),target:"_blank"},F("div",{className:c.row},F("div",{className:c.nameField},"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c:\xa0"),F("div",{className:c.value},l.client.name))),F("a",{href:"/organization/".concat(l.orders[0].item.organization._id),target:"_blank"},F("div",{className:c.row},F("div",{className:c.nameField},"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a:\xa0"),F("div",{className:c.value},l.orders[0].item.organization.name))),F("div",{className:c.row},F("div",{className:c.nameField},"\u0421\u0443\u043c\u043c\u0430:\xa0"),F("div",{className:c.value},l.allPrice,"\xa0\u0441\u043e\u043c")),F("div",{className:c.row},F("div",{className:c.nameField},"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b:\xa0"),F("div",{className:c.value},l.paymentMethod)),F("div",{className:c.row},F("div",{className:c.nameField},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:\xa0"),F("div",{className:c.value},l.info)),F("br",null),F("div",{className:c.column},F("b",null,"\u0422\u043e\u0432\u0430\u0440\u044b:"),F("br",null),F("br",null),l.orders.map(function(e,a){return F("div",{key:a,className:c.column},F("a",{href:"/item/".concat(e.item._id),target:"_blank"},F("div",{className:c.row},F("div",{className:c.nameField},"\u0422\u043e\u0432\u0430\u0440:\xa0"),F("div",{className:c.value},e.item.name))),F("div",{className:c.row},F("div",{className:c.nameField},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:\xa0"),F("div",{className:c.value},e.count,"\xa0\u0448\u0442")),F("div",{className:c.row},F("div",{className:c.nameField},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:\xa0"),F("div",{className:c.value},e.allPrice,"\xa0\u0441\u043e\u043c")),F("br",null))})),F("div",null,"client"===n.role&&"\u043f\u0440\u0438\u043d\u044f\u0442"===l.orders[0].status&&!l.confirmationClient||["\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440","\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"].includes(n.role)&&"\u043f\u0440\u0438\u043d\u044f\u0442"===l.orders[0].status&&!l.confirmationForwarder||"admin"===n.role?F(f.a,{variant:"contained",color:"primary",onClick:function(){s("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",F(y,{action:function(){var e=Object(r.a)(t.a.mark(function e(){var a;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)({route:u,invoices:[l._id]});case 2:a=e.sent.invoices,m&&m(a),v&&v();case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}))},className:c.button},"\u0417\u0430\u043a\u0430\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"):null,"client"===n.role&&"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430"===l.orders[0].status||["\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440","\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"].includes(n.role)&&["\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430","\u043f\u0440\u0438\u043d\u044f\u0442"].includes(l.orders[0].status)&&!l.confirmationForwarder||"admin"===n.role?F(f.a,{variant:"contained",color:"primary",onClick:function(){var e=l.orders.map(function(e){return e._id});s("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",F(y,{action:function(){var a=Object(r.a)(t.a.mark(function a(){var n;return t.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.c)({_id:e});case 2:n=a.sent.invoices,m&&m(n),v&&v();case 5:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()}))},className:c.button},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"):null,F(f.a,{variant:"contained",color:"secondary",onClick:function(){o(!1)},className:c.button},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))});a.default=Object(l.b)(function(e){return{mini_dialog:e.mini_dialog,user:e.user,app:e.app}},function(e){return{mini_dialogActions:Object(m.b)(u,e),userActions:Object(m.b)(g,e),snackbarActions:Object(m.b)(v,e)}})(Object(c.a)(p.a)(x))}}]);