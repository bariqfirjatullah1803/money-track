import{r as a,W as T,j as e,a as M}from"./app-BFhiIlDx.js";import{P as u}from"./PrimaryButton-BW8BhZGL.js";import{r as C}from"./MoneyFormat-CmNfmicd.js";import{A as F}from"./AuthenticatedLayout-BrzByPKt.js";import{F as S,f as I}from"./DateFormat-2eAkOVKA.js";import{I as o}from"./InputLabel-CjE1OBsK.js";import{T as x,I as l}from"./TextInput-ttnjsmIz.js";import{M as D,S as P}from"./Modal-Br6oZi29.js";import"./ApplicationLogo-C2PDOVrh.js";import"./transition-dC3VBYzV.js";function z({auth:g,transactions:d,plans:R}){const[f,m]=a.useState(!1),c=a.useRef(),h=a.useRef(),p=a.useRef(),j=a.useRef(),{data:r,setData:t,post:y,processing:N,reset:k,errors:n}=T({name:"",description:"",money:"",status:"out"}),v=()=>{m(!0)},b=s=>{s.preventDefault(),y(route("transaction.store"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>c.current.focus(),onFinish:()=>k()})},i=()=>{m(!1)};return e.jsxs(F,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Transaksi"}),children:[e.jsx(M,{title:"Transaksi"}),e.jsxs("div",{className:"py-5 px-2 flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center w-full mx-auto sm:px-6 lg:px-8",children:[e.jsxs("a",{href:route("dashboard"),className:"text-sm text-gray-100 flex items-center justify-center gap-1",children:[e.jsx(S,{})," Kembali"]}),e.jsx(u,{className:"w-fit h-fit",onClick:v,children:"Tambah"})]}),d&&d.map((s,w)=>e.jsx("div",{className:"w-full mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg",children:e.jsxs("div",{className:"p-6 flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100",children:s.name}),e.jsxs("div",{className:"text-gray-900 dark:text-gray-100",children:[e.jsx("span",{className:`${s.status==="in"?"bg-green-400":"bg-red-400"} rounded-lg px-3 py-0 me-1`,children:s.status==="in"?"Masuk":"Keluar"})," ",C(s.money)]})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("p",{className:"dark:text-gray-100 text-sm",children:s.description}),e.jsx("p",{className:"dark:text-gray-100 text-sm",children:I(s.updated_at)})]})]})})},w))]}),e.jsx(D,{show:f,onClose:i,children:e.jsxs("form",{onSubmit:b,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Tambahkan transaksi kamu"}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"name",value:"Password",className:"sr-only"}),e.jsx(x,{id:"name",type:"text",name:"name",ref:c,value:r.name,onChange:s=>t("name",s.target.value),className:"mt-1 block w-full",placeholder:"Nama transaksi"}),e.jsx(l,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"description",value:"Password",className:"sr-only"}),e.jsx("textarea",{id:"description",name:"description",ref:h,value:r.description,onChange:s=>t("description",s.target.value),className:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",placeholder:"Deskripsi transaksi"}),e.jsx(l,{message:n.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"money",value:"Password",className:"sr-only"}),e.jsx(x,{id:"money",type:"text",min:0,name:"money",ref:p,value:r.money,onChange:s=>t("money",s.target.value),className:"mt-1 block w-full",placeholder:"Jumlah uang"}),e.jsx(l,{message:n.money,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"status",value:"In",className:"sr-only"}),e.jsxs("select",{id:"status",name:"money",ref:j,value:r.status,onChange:s=>t("status",s.target.value),className:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",children:[e.jsx("option",{value:"out",children:"Keluar"}),e.jsx("option",{value:"in",children:"Masuk"})]}),e.jsx(l,{message:n.status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(P,{onClick:i,children:"Cancel"}),e.jsx(u,{className:"ms-3",disabled:N,children:"Tambahkan"})]})]})})]})}export{z as default};