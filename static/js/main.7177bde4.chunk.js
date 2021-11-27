(this["webpackJsonpgoit-react-hw-phonebook"]=this["webpackJsonpgoit-react-hw-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={item:"ContactListItem_item__2THQn",button:"ContactListItem_button__22wLV"}},20:function(t,e,n){t.exports={section:"ContactForm_section__QTTHr",form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK"}},33:function(t,e,n){t.exports={wrapper:"Filter_wrapper__IqOjQ"}},35:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},42:function(t,e,n){},43:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var c,r,a,u,o=n(0),i=n.n(o),s=n(18),l=n.n(s),b=(n(41),n(42),n(43),n(12)),j=n.n(b),f=n(33),d=n.n(f),O=n(8),p=n(5),h=Object(p.b)("filter/value"),m=n(1),x=function(){var t=j()(),e=Object(O.b)(),n=Object(O.c)((function(t){return t.filter}));return Object(m.jsxs)("div",{className:d.a.wrapper,children:[Object(m.jsx)("label",{htmlFor:t,children:"Find contacts by name"}),Object(m.jsx)("input",{id:t,name:n,type:"text",value:n,onChange:function(t){e(h(t.target.value))}})]})},v=n(24),g=n(20),y=n.n(g),w=function(t){return t.contacts.contacts},C=function(t){return t.filter},_=n(6),k=n.n(_),N=n(10),F=n(21),L=n.n(F),X="https://619a1c149022ea0017a7b036.mockapi.io/api/v1/",A=function(){var t=Object(N.a)(k.a.mark((function t(){var e,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("".concat(X,"Contacts"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.sort((function(t,e){return t.name.localeCompare(e.name)})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(N.a)(k.a.mark((function t(e){var n,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.post("".concat(X,"Contacts"),e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(N.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.delete("".concat(X,"Contacts/").concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=Object(p.c)("contacts/getContacts",function(){var t=Object(N.a)(k.a.mark((function t(e,n){var c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,A();case 4:return r=t.sent,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),I=Object(p.c)("contacts/addContact",function(){var t=Object(N.a)(k.a.mark((function t(e,n){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,S(e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),V=Object(p.c)("contacts/deleteContact",function(){var t=Object(N.a)(k.a.mark((function t(e,n){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,T(e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),Z=function(){var t=Object(O.b)(),e=Object(O.c)(w),n=Object(o.useState)(""),c=Object(v.a)(n,2),r=c[0],a=c[1],u=Object(o.useState)(""),i=Object(v.a)(u,2),s=i[0],l=i[1],b=j()(),f=j()();return Object(m.jsx)("section",{className:y.a.section,children:Object(m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c,u={id:j()(),name:r,number:s};r&&s&&(a(u.name),l(u.number),c=u,e.map((function(t){return t.name})).includes(c.name)?alert("".concat(c.name," is already in contacts!!!")):t(I({name:r,number:s})),a(""),l(""))},className:y.a.form,children:[Object(m.jsx)("label",{htmlFor:b,children:"Names"}),Object(m.jsx)("input",{id:b,name:r,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0431\u0443\u043a\u0432\u0438, \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 : \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0438",value:r,onChange:function(t){a(t.target.value)}}),Object(m.jsx)("label",{htmlFor:f,children:"Number"}),Object(m.jsx)("input",{id:f,name:s,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",tittle:"\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e \u0446\u0438\u0444\u0440\u0438! \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 '+' , '-', '()'",value:s,placeholder:"XXX-XX-XX",onChange:function(t){l(t.target.value)}}),Object(m.jsx)("button",{type:"submit",className:y.a.button,children:"Add contact"})]})})},z=n(35),Q=n.n(z),W=function(t){var e=t.children;return{children:e}&&Object(m.jsx)("section",{children:Object(m.jsx)("ul",{className:Q.a.list,children:e})})},E=n(14),H=n.n(E),J=n(36),M=n.n(J),q=function(){return Object(m.jsx)(M.a,{type:"ThreeDots",color:"green",height:60,width:60})},B=function(){var t=Object(O.c)(C),e=Object(O.c)(w),n=Object(O.c)((function(t){return t.contacts.loading})),c=Object(O.b)();return Object(o.useEffect)((function(){return c(D())}),[c]),Object(m.jsxs)(m.Fragment,{children:[n&&Object(m.jsx)(q,{}),""===t?e.length>0&&e.map((function(t){var e=t.name,n=t.number,r=t.id;return Object(m.jsxs)("li",{className:H.a.item,children:[Object(m.jsxs)("p",{children:[e," : ",n]}),Object(m.jsx)("button",{type:"button",className:H.a.button,onClick:function(){return c(V(r))},children:"Delete"})]},r)})):e.length>0&&e.map((function(e){var n=e.name,r=e.number,a=e.id;return n.toLowerCase().includes(t.toLowerCase())&&Object(m.jsxs)("li",{className:H.a.item,children:[Object(m.jsxs)("p",{children:[n," : ",r]}),Object(m.jsx)("button",{type:"button",className:H.a.button,onClick:function(){return c(V(a))},children:"Delete"})]},a)}))]})},G=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(Z,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(x,{}),Object(m.jsx)(W,{children:Object(m.jsx)(B,{})})]})},K=n(9),P=n(11),R=n(2),$=Object(p.d)("",Object(R.a)({},h,(function(t,e){return e.payload}))),U=Object(p.d)([],(c={},Object(R.a)(c,D.fulfilled,(function(t,e){return e.payload})),Object(R.a)(c,I.fulfilled,(function(t,e){return[e.payload].concat(Object(P.a)(t))})),Object(R.a)(c,V,(function(t,e){var n=e.payload;return t.contacts.filter((function(t){return t.id!==n}))})),c)),Y=(Object(p.d)(!1,(r={},Object(R.a)(r,D.pending,(function(t,e){return!0})),Object(R.a)(r,D.fulfilled,(function(t,e){return!1})),Object(R.a)(r,D.rejected,(function(t,e){return!1})),Object(R.a)(r,I.pending,(function(t,e){return!0})),Object(R.a)(r,I.fulfilled,(function(t,e){return!1})),Object(R.a)(r,I.rejected,(function(t,e){return!1})),Object(R.a)(r,V.pending,(function(t,e){return!0})),Object(R.a)(r,V.fulfilled,(function(t,e){return!1})),Object(R.a)(r,V.rejected,(function(t,e){return!1})),r)),Object(p.d)(null,(a={},Object(R.a)(a,D.fulfilled,(function(t,e){return null})),Object(R.a)(a,D.rejected,(function(t,e){return e.payload})),Object(R.a)(a,I.fulfilled,(function(t,e){return null})),Object(R.a)(a,I.rejected,(function(t,e){return e.payload})),Object(R.a)(a,V.fulfilled,(function(t,e){return null})),Object(R.a)(a,V.rejected,(function(t,e){return e.payload})),a)),n(4)),tt=Object(p.e)({name:U,initialState:{contacts:[],loading:!1,error:null},extraReducers:(u={},Object(R.a)(u,D.pending,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!0})})),Object(R.a)(u,D.fulfilled,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{contacts:[].concat(Object(P.a)(t.contacts),Object(P.a)(e.payload)),loading:!1})})),Object(R.a)(u,D.rejected,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!1,error:e.payload})})),Object(R.a)(u,I.pending,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!0})})),Object(R.a)(u,I.fulfilled,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{contacts:[].concat(Object(P.a)(t.contacts),[e.payload]),loading:!1})})),Object(R.a)(u,I.rejected,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!1,error:e.payload})})),Object(R.a)(u,V.pending,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!0})})),Object(R.a)(u,V.fulfilled,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{contacts:Object(P.a)(t.contacts.filter((function(t){return t.id!==e.payload}))),loading:!1})})),Object(R.a)(u,V.rejected,(function(t,e){return Object(Y.a)(Object(Y.a)({},t),{},{loading:!1,error:e.payload})})),u)}).reducer,et=Object(K.b)({contacts:tt,filter:$}),nt=Object(p.a)({reducer:et});l.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O.a,{store:nt,children:Object(m.jsx)(G,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.7177bde4.chunk.js.map