import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as t}from"./RichText-IsuZDZjy.js";const r=({block:i})=>e.jsxs("div",{id:i.id,className:"notion-block notion-image",children:[e.jsx("img",{src:i.image.type=="external"?i.image.external.url:i.image.type=="file"?i.image.file.url:"",alt:i.image.caption.map(a=>a.plain_text).join("")}),e.jsx("div",{className:"notion-caption notion-image-caption",children:e.jsx(t,{richText:i.image.caption})})]});export{r as I};
