(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o=t(16),c=t.n(o),u=(t(7),t(6)),r=t(3),a=t(2),i=t(4),l=t.n(i),s="/api/persons",d={getAll:function(){return l.a.get(s).then((function(e){return e.data}))},addNew:function(e){return l.a.post(s,e).then((function(e){return e.data}))},removeName:function(e){return l.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},changeNumber:function(e){return l.a.put("".concat(s,"/").concat(e.id),e).then((function(e){return e.data}))}},b=t(0),f=function(e){return Object(b.jsxs)("div",{children:["filter: ",Object(b.jsx)("input",{value:e.value,onChange:e.onChange})]})},j=function(e){return Object(b.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:e.nameInputValue,onChange:e.nameOnChange})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:e.numberInputValue,onChange:e.numberOnChange})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:[e.name," ",e.number,Object(b.jsx)("button",{onClick:e.onClick,children:" delete "})]},e.id)})},h=function(e){var n=e.message;return console.log("Mit\xe4 ihmett\xe4!? ",n),null===n?null:Object(b.jsx)("div",{className:"notification",children:n})},O=function(e){var n=e.errorMessage;return null===n?null:Object(b.jsx)("div",{className:"errorNotification",children:n})},p=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(r.a)(c,2),l=i[0],s=i[1],p=Object(a.useState)(""),v=Object(r.a)(p,2),g=v[0],x=v[1],C=Object(a.useState)([]),k=Object(r.a)(C,2),w=k[0],N=k[1],S=Object(a.useState)(""),I=Object(r.a)(S,2),T=I[0],y=I[1],A=Object(a.useState)(null),V=Object(r.a)(A,2),M=V[0],D=V[1],E=Object(a.useState)(null),J=Object(r.a)(E,2),U=J[0],B=J[1];Object(a.useEffect)((function(){d.getAll().then((function(e){o(e)}))}),[]);var P=[];return P=0===w.length&&0===T.length?t:0===w.length&&T.length>0?[]:w,Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),null!==U?Object(b.jsx)(O,{errorMessage:U}):Object(b.jsx)(h,{message:M}),Object(b.jsx)(f,{value:T,onChange:function(e){var n=e.target.value.toUpperCase();N(t.filter((function(e){return e.name.toUpperCase().includes(n)}))),y(e.target.value)}}),Object(b.jsx)("h2",{children:"Add new"}),Object(b.jsx)(j,{onSubmit:function(e){e.preventDefault();if(!0===t.some((function(e){return e.name===l}))){if(window.confirm("".concat(l," has already been added to phonebook, replace old number with new one"))){var n=t.find((function(e){return e.name===l})),c=Object(u.a)(Object(u.a)({},n),{},{number:g});d.changeNumber(c).then((function(e){P=t.map((function(n){return n.id!==c.id?n:e})),o(P)})).catch((function(e){console.log("console error ",e.response.data),B("Information of ".concat(l," has already been removed from phonebook")),setTimeout((function(){B(null)}),2e3),o(t.filter((function(e){return e.id!==c.id})))})),D("Number of ".concat(l," has been changed")),setTimeout((function(){D(null)}),2e3),N("")}}else{var r={name:l,number:g};d.addNew(r).then((function(e){o(t.concat(e)),N(t.concat(e)),s(""),x(""),D("Added ".concat(r.name," to phonebook")),setTimeout((function(){D(null)}),2e3)})).catch((function(e){console.log("error frontend console ",e.response.data),B(e.response.data.error),setTimeout((function(){B(null)}),3e3)}))}s(""),x("")},nameInputValue:l,nameOnChange:function(e){s(e.target.value)},numberInputValue:g,numberOnChange:function(e){x(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)("div",{children:P.map((function(e){return Object(b.jsx)(m,{name:e.name,number:e.number,onClick:function(){return n=e.id,c=e.name,void(window.confirm("Delete ".concat(c))&&(d.removeName(n).then((function(){o(t.filter((function(e){return e.id!==n}))),N("")})).catch((function(e){B("Information of ".concat(c," has already been removed from phonebook")),setTimeout((function(){B(null)}),2e3),o(t.filter((function(e){return e.id!==n}))),console.log(t)})),D("Removed ".concat(c," from phonebook")),console.log("removed "),setTimeout((function(){D(null)}),2e3)));var n,c}},e.id)}))})]})};c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.5c1bd7b3.chunk.js.map