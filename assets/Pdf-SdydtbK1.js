import{j as p}from"./jsx-runtime-vNq4Oc-g.js";import{R as d}from"./RichText-IsuZDZjy.js";const n=({block:e})=>{const t=e.pdf.type=="external"?e.pdf.external.url:e.pdf.type=="file"?e.pdf.file.url:"";return p.jsxs("div",{id:e.id,className:"notion-block notion-pdf",children:[p.jsxs("object",{type:"application/pdf",data:e.pdf.type=="external"?e.pdf.external.url:e.pdf.type=="file"?e.pdf.file.url:"",children:["Your browser does not support pdfs. You can download pdf file",p.jsx("a",{href:t,children:"here"}),"."]}),p.jsx("div",{className:"notion-caption notion-pdf-caption",children:p.jsx(d,{richText:e.pdf.caption})})]})};export{n as P};
