import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{e as d}from"./utils-37e7f9cc.js";import{u as l}from"./hooks-edf5cdd5.js";import{I as p}from"./Icon-e5004071.js";const c=({block:t})=>{const{Link:n}=l();return r.jsx("div",{id:t.id,className:"notion_breadcrumb",children:t.breadcrumb.parents.map((e,i,s)=>{var o;return r.jsxs(m.Fragment,{children:[r.jsx(n,{href:`/${e.id}`,children:r.jsxs("span",{className:"notion_breadcrumb_title",children:[r.jsx(p,{icon:e.icon})," ",(o=d(e))==null?void 0:o.map(a=>a.plain_text).join("")]})}),i!==s.length-1&&r.jsx("span",{className:"notion_breadcrumb_separator",children:"/"})]},e.id)})})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BreadcrumbBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}export{c as B};
//# sourceMappingURL=Breadcrumb-190f95f2.js.map
