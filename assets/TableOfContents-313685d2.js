import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as s}from"./hooks-1d9ce861.js";import{R as a}from"./RichText-f4ece695.js";const d=({block:i,blocks:n})=>{const{Link:r}=s(),o=n==null?void 0:n.filter(t=>t!==null&&(t.type==="heading_1"||t.type==="heading_2"||t.type==="heading_3"));return e.jsx("div",{id:i.id,className:`notion-table-of-contents notion-color-${i.table_of_contents.color}`,children:o&&o.map(t=>e.jsx("div",{className:"notion-table-of-contents-item",children:e.jsx("div",{className:`notion-table-of-contents-item-${t.type}`,children:e.jsx(r,{href:`#${t.id}`,children:e.jsx(a,{richText:t[t.type].rich_text})})})},t.id))})};export{d as T};
//# sourceMappingURL=TableOfContents-313685d2.js.map
