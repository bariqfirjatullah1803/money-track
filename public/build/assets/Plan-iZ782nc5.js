import{r as a,W as k,j as e,a as P}from"./app-BFhiIlDx.js";import{A as C}from"./AuthenticatedLayout-BrzByPKt.js";import{r as M}from"./MoneyFormat-CmNfmicd.js";import{P as p}from"./PrimaryButton-BW8BhZGL.js";import{F,f as S}from"./DateFormat-2eAkOVKA.js";import{I as o}from"./InputLabel-CjE1OBsK.js";import{T as m,I as i}from"./TextInput-ttnjsmIz.js";import{M as T,S as D}from"./Modal-Br6oZi29.js";import"./ApplicationLogo-C2PDOVrh.js";import"./transition-dC3VBYzV.js";function q({auth:u,plans:c}){const[h,d]=a.useState(!1),x=a.useRef(),f=a.useRef(),j=a.useRef(),{data:t,setData:r,post:y,processing:g,reset:N,errors:l}=k({name:"",description:"",money:""}),v=()=>{d(!0)},w=s=>{s.preventDefault(),y(route("plan.store"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>x.current.focus(),onFinish:()=>N()})},n=()=>{d(!1)};return e.jsxs(C,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Plan"}),children:[e.jsx(P,{title:"Plan"}),e.jsxs("div",{className:"py-5 px-2 flex flex-col gap-y-3",children:[e.jsxs("div",{className:"w-full mx-auto sm:px-6 lg:px-8 flex justify-between items-center",children:[e.jsxs("a",{href:route("dashboard"),className:"text-sm text-gray-100 flex items-center justify-center gap-1",children:[e.jsx(F,{})," Kembali"]}),e.jsx(p,{className:"w-fit h-fit",onClick:v,children:"Tambah"})]}),c&&c.map((s,b)=>e.jsx("div",{className:"w-full mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg",children:e.jsxs("div",{className:"p-6 flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100",children:s.name}),e.jsx("div",{className:"text-gray-900 dark:text-gray-100",children:M(s.money)})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("p",{className:"dark:text-gray-100 text-sm",children:s.description}),e.jsx("p",{className:"dark:text-gray-100 text-sm",children:S(s.updated_at)})]})]})})},b))]}),e.jsx(T,{show:h,onClose:n,children:e.jsxs("form",{onSubmit:w,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Tambahkan plan kamu"}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"name",value:"Password",className:"sr-only"}),e.jsx(m,{id:"name",type:"text",name:"name",ref:x,value:t.name,onChange:s=>r("name",s.target.value),className:"mt-1 block w-full",placeholder:"Nama plan"}),e.jsx(i,{message:l.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"description",value:"Password",className:"sr-only"}),e.jsx(m,{id:"description",type:"text",name:"description",ref:f,value:t.description,onChange:s=>r("description",s.target.value),className:"mt-1 block w-full",placeholder:"Deskripsi plan"}),e.jsx(i,{message:l.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(o,{htmlFor:"money",value:"Password",className:"sr-only"}),e.jsx(m,{id:"money",type:"text",min:0,name:"money",ref:j,value:t.money,onChange:s=>r("money",s.target.value),className:"mt-1 block w-full",placeholder:"Jumlah uang"}),e.jsx(i,{message:l.money,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(D,{onClick:n,children:"Cancel"}),e.jsx(p,{className:"ms-3",disabled:g,children:"Tambahkan"})]})]})})]})}export{q as default};
