import{j as r}from"./jsx-runtime-ffb262ed.js";import{R as n}from"./RichTexts-067bd1c7.js";const s=({block:e})=>r.jsx("table",{id:e.id,className:"notion_table",children:r.jsx("tbody",{children:e.table.table_rows&&e.table.table_rows.map((t,a)=>e.table.has_row_header&&a===0?r.jsx(c,{table_row:t}):e.table.has_column_header?r.jsx(i,{table_row:t}):r.jsx(d,{table_row:t}))})}),c=({table_row:e})=>r.jsx("tr",{id:e.id,className:"notion_table_row",children:e.table_row.cells.map(t=>r.jsx(o,{cell:t}))}),i=({table_row:e})=>r.jsx("tr",{id:e.id,className:"notion_table_row",children:e.table_row.cells.map((t,a)=>a===0?r.jsx(o,{cell:t}):r.jsx(l,{cell:t}))}),d=({table_row:e})=>r.jsx("tr",{id:e.id,className:"notion_table_row",children:e.table_row.cells.map(t=>r.jsx(l,{cell:t}))}),o=({cell:e})=>r.jsx("th",{children:r.jsx(n,{richTexts:e})}),l=({cell:e})=>r.jsx("td",{children:r.jsx(n,{richTexts:e})});try{s.displayName="Table",s.__docgenInfo={description:"",displayName:"Table",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"TableBlockObjectComponent"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!1,type:{name:"BlockObjectComponent[]"}},customBlockComponentMapper:{defaultValue:null,description:"",name:"customBlockComponentMapper",required:!1,type:{name:"object"}}}}}catch{}export{s as T};
//# sourceMappingURL=Table-1466794d.js.map
