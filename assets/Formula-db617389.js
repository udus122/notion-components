import{j as o}from"./jsx-runtime-ffb262ed.js";import{C as r}from"./Checkbox-c6fdcc69.js";import{D as s}from"./Date-8aa40b7c.js";const p=({propertyItem:t,format:n})=>{const{formula:e}=t;return o.jsx("div",{id:t.id,className:"notion-property-item notion-formula",children:e.type==="string"?o.jsx("span",{children:e.string}):e.type==="number"?o.jsx("span",{children:e.number}):e.type==="boolean"?o.jsx(r,{checked:e.boolean??!1}):e.type==="date"?o.jsx(s,{date:e.date,format:n}):null})};export{p as F};
//# sourceMappingURL=Formula-db617389.js.map
