(this["webpackJsonpthe-queue"]=this["webpackJsonpthe-queue"]||[]).push([[0],{44:function(e,t,s){},54:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(45),l=s.n(n),d=(s(54),s(46)),o=s(49),i=s(14),r=s(47),b=s.n(r),m=(s(44),s(0));var j=function(){var e=null;Object(a.useEffect)((function(){return(e=b()("http://localhost:3001")).on("submission:add",(function(e){var t=document.createElement("div");t.classList.add("row");for(var s=0,a=["name","grade","desc"];s<a.length;s++){var c=a[s],n=document.createElement("div");n.classList.add(c),n.innerHTML=e[c],t.appendChild(n)}document.getElementById("rows").appendChild(t)})),function(){return e.disconnect()}}),[]);var t=Object(a.useState)(""),s=Object(o.a)(t,2),c=s[0],n=s[1],l="admin123";return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("div",{className:"top-queue-container",children:[Object(m.jsx)("h1",{className:"queue-title text-center mt-5",children:" Welcome to the Queue"}),Object(m.jsxs)("div",{className:"d-flex mt-5",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-secondary mx-3","data-bs-toggle":"modal","data-bs-target":"#submissionsModal",children:"Create Submission"}),Object(m.jsx)("div",{className:"modal fade",id:"submissionsModal",tabIndex:"-1","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",children:"Create Submission"}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsxs)("div",{id:"submissionTicket",className:"modal-body",children:[Object(m.jsx)("input",{className:"form-control form-control-lg",type:"text",name:"name",placeholder:"Name"}),Object(m.jsx)("input",{className:"form-control form-control-lg",type:"text",name:"grade",placeholder:"Grade"}),Object(m.jsx)("input",{className:"form-control form-control-lg",type:"text",name:"desc",placeholder:"Description"}),Object(m.jsx)("div",{className:"modal-footer",children:Object(m.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(t){var s,a=document.getElementById("submissionTicket").querySelectorAll("input"),c={},n=Object(d.a)(a);try{for(n.s();!(s=n.n()).done;){var l=s.value;c[l.name]=l.value}}catch(o){n.e(o)}finally{n.f()}e.emit("submission:add",c,(function(e){console.log("SERVER GOT MESSAGE")}))},children:"Submit"})})]})]})})}),c===l?Object(m.jsx)(i.b,{to:"/admin",children:Object(m.jsx)("button",{type:"button",className:"btn btn-danger ml-3",children:Object(m.jsx)("i",{className:"fas fa-unlock"})})}):Object(m.jsx)("button",{type:"button",className:"btn btn-danger ml-3","data-bs-toggle":"modal","data-bs-target":"#adminModal",children:Object(m.jsx)("i",{className:"fas fa-lock"})}),Object(m.jsx)("div",{className:"modal fade",id:"adminModal",tabIndex:"-1","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",children:"Log Into Admin Space: "}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsx)("form",{children:Object(m.jsx)("input",{className:"form-control form-control-default",onChange:function(e){return n(e.target.value)},type:"password",placeholder:"Admin Password"})})}),Object(m.jsx)("div",{className:"modal-footer",children:c===l?Object(m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Submit"}):Object(m.jsx)("button",{type:"button",className:"btn btn-secondary disabled",children:"Incorrect Password... "})})]})})})]})]}),Object(m.jsx)("div",{className:"bottom-queue-container",children:Object(m.jsx)("div",{id:"rows"})})]})},u=function(){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("div",{className:"top-queue-container",children:[Object(m.jsx)("h1",{className:"queue-title text-center mt-5",children:"Welcome to the Queue"}),Object(m.jsx)("div",{className:"d-flex mt-5",children:Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{type:"button",className:"btn btn-danger ml-2",children:"Sign Out"})})})]}),Object(m.jsx)("div",{className:"bottom-queue-container",children:Object(m.jsxs)("table",{className:"table table-striped table-dark text-center",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Delete"})]})}),Object(m.jsx)("tbody",{})]})})]})},h=s(2),x=(s(93),function(){return Object(m.jsx)(a.Fragment,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",exact:!0,component:j}),Object(m.jsx)(h.a,{path:"/admin",exact:!0,component:u})]})})})});l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.69a6e714.chunk.js.map