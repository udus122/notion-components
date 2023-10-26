import{j as t}from"./jsx-runtime-ffb262ed.js";import{R as a,a as L,L as V}from"./RichText-774e89d0.js";import"./index-76fb7be0.js";import"./Link-b5909185.js";import{a as b}from"./Annotation-d01c6f86.js";import{u as v,B as T}from"./hooks-edf5cdd5.js";import{A as O}from"./Audio-dc9d8db7.js";import{B as I}from"./Bookmark-871f30ad.js";import{B as P}from"./Breadcrumb-190f95f2.js";import{I as H}from"./Icon-e5004071.js";import{C as $}from"./ChildDatabase-3a584add.js";import{C as M}from"./ChildPage-d5fb4bdd.js";import{C as w}from"./Code-0a169bd3.js";import{D}from"./Divider-788acd01.js";import{E as A}from"./Embed-6046cc8d.js";import{E}from"./Equation-d0c12f5b.js";import{F}from"./File-e00af1b9.js";import{I as Q}from"./Image-21fc5665.js";import{L as S}from"./LinkPreview-311cd9ea.js";import{L as R}from"./LinkToPage-de204195.js";import{P as U}from"./Pdf-2053b9b6.js";import{T as Z}from"./Table-3389cfa5.js";import{T as z}from"./TableOfContents-e7caa842.js";import{V as G}from"./Video-d9e96d0e.js";const _=({mapper:e,children:o})=>{if(!e)return o;const{blockMapper:s}=v();return t.jsx(T.Provider,{value:{...s,...e},children:o})};try{_.displayName="BlockProvider",_.__docgenInfo={description:"",displayName:"BlockProvider",props:{mapper:{defaultValue:null,description:"",name:"mapper",required:!1,type:{name:"object"}}}}}catch{}const c=({block:e})=>t.jsxs("li",{id:e.id,className:`notion_bulleted_list_item notion_color_${e.bulleted_list_item.color}`,children:[t.jsx(a,{richText:e.bulleted_list_item.rich_text}),t.jsx("div",{children:e.bulleted_list_item.children&&t.jsx(i,{blocks:e.bulleted_list_item.children})})]});try{c.displayName="BulletedListItem",c.__docgenInfo={description:"",displayName:"BulletedListItem",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BulletedListItemBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const u=({block:e,blocks:o})=>t.jsx("ul",{className:"notion_bulleted_list",children:e.bulleted_list.items.map(s=>t.jsx(c,{block:s,blocks:o},s.id))});try{u.displayName="BulletedList",u.__docgenInfo={description:"",displayName:"BulletedList",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BulletedListBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const m=({block:e})=>t.jsxs("div",{id:e.id,className:`notion_callout notion_color_${e.callout.color}`,children:[t.jsx("span",{className:"notion_callout_icon",children:t.jsx(H,{icon:e.callout.icon})}),t.jsxs("div",{className:"notion_callout_content",children:[t.jsx("span",{children:t.jsx(a,{richText:e.callout.rich_text})}),e.callout.children&&t.jsx(i,{blocks:e.callout.children})]})]});try{m.displayName="Callout",m.__docgenInfo={description:"",displayName:"Callout",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"CalloutBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const h=({block:e})=>t.jsx("div",{id:e.id,className:"notion_column_list",children:e.column_list.columns&&e.column_list.columns.map(o=>o.column.children&&t.jsx("div",{className:"notion_column",children:t.jsx(i,{blocks:o.column.children})},o.id))});try{h.displayName="ColumnList",h.__docgenInfo={description:"",displayName:"ColumnList",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"ColumnListBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const y=({block:e})=>t.jsx(t.Fragment,{children:e.heading_1.is_toggleable?t.jsxs("details",{id:e.id,className:`notion_heading notion_heading_1 notion_toggle notion_color_${e.heading_1.color}`,children:[t.jsx("summary",{className:"notion_toggle_summary",children:t.jsx("h1",{children:t.jsx(a,{richText:e.heading_1.rich_text})})}),t.jsx("div",{className:"notion_toggle_details",children:e.heading_1.children&&t.jsx(i,{blocks:e.heading_1.children})})]}):t.jsx("h1",{id:e.id,className:`notion_heading notion_heading_1 notion_color_${e.heading_1.color}`,children:t.jsx(a,{richText:e.heading_1.rich_text})})});try{y.displayName="Heading1",y.__docgenInfo={description:"",displayName:"Heading1",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"Heading1BlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const x=({block:e})=>t.jsx(t.Fragment,{children:e.heading_2.is_toggleable?t.jsxs("details",{id:e.id,className:`notion_heading notion_heading_2 notion_toggle notion_color_${e.heading_2.color}`,children:[t.jsx("summary",{className:"notion_toggle_summary",children:t.jsx("h2",{children:t.jsx(a,{richText:e.heading_2.rich_text})})}),t.jsx("div",{className:"notion_toggle_details",children:e.heading_2.children&&t.jsx(i,{blocks:e.heading_2.children})})]}):t.jsx("h1",{id:e.id,className:`notion_heading notion_heading_2 notion_color_${e.heading_2.color}`,children:t.jsx(a,{richText:e.heading_2.rich_text})})});try{x.displayName="Heading2",x.__docgenInfo={description:"",displayName:"Heading2",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"Heading2BlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const j=({block:e})=>t.jsx(t.Fragment,{children:e.heading_3.is_toggleable?t.jsxs("details",{id:e.id,className:`notion_heading notion_heading_3 notion_toggle notion_color_${e.heading_3.color}`,children:[t.jsx("summary",{className:"notion_toggle_summary",children:t.jsx("h3",{children:t.jsx(a,{richText:e.heading_3.rich_text})})}),t.jsx("div",{className:"notion_toggle_details",children:e.heading_3.children&&t.jsx(i,{blocks:e.heading_3.children})})]}):t.jsx("h1",{id:e.id,className:`notion_heading notion_heading_3 notion_color_${e.heading_3.color}`,children:t.jsx(a,{richText:e.heading_3.rich_text})})});try{j.displayName="Heading3",j.__docgenInfo={description:"",displayName:"Heading3",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"Heading3BlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const d=({block:e})=>t.jsxs("li",{id:e.id,className:`notion_numbered_list_item notion_color_${e.numbered_list_item.color}`,children:[t.jsx(a,{richText:e.numbered_list_item.rich_text}),t.jsx("div",{children:e.numbered_list_item.children&&t.jsx(i,{blocks:e.numbered_list_item.children})})]});try{d.displayName="NumberedListItem",d.__docgenInfo={description:"",displayName:"NumberedListItem",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"NumberedListItemBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const g=({block:e,blocks:o})=>t.jsx("ol",{className:"notion_numbered_list",children:e.numbered_list.items.map(s=>t.jsx(d,{block:s,blocks:o},s.id))});try{g.displayName="NumberedList",g.__docgenInfo={description:"",displayName:"NumberedList",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"NumberedListBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const f=({block:e})=>t.jsxs("div",{id:e.id,className:`notion_paragraph notion_color_${e.paragraph.color}`,children:[t.jsx("p",{children:t.jsx(a,{richText:e.paragraph.rich_text})}),e.paragraph.children&&t.jsx("div",{className:"notion_paragraph_children",children:t.jsx(i,{blocks:e.paragraph.children})})]});try{f.displayName="Paragraph",f.__docgenInfo={description:"",displayName:"Paragraph",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"ParagraphBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const B=({block:e})=>t.jsxs("blockquote",{id:e.id,className:`notion_quote notion_color_${e.quote.color}`,children:[t.jsx(a,{richText:e.quote.rich_text}),e.quote.children&&t.jsx("div",{className:"notion_quote_children",children:t.jsx(i,{blocks:e.quote.children})})]});try{B.displayName="Quote",B.__docgenInfo={description:"",displayName:"Quote",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"QuoteBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const N=({block:e,blocks:o})=>t.jsx("div",{className:"notion_synced_block",children:e.synced_block.synced_from===null?e.synced_block.children&&t.jsx("div",{className:"notion_synced_block_original",children:t.jsx(i,{blocks:e.synced_block.children})}):e.synced_block.synced_from.block&&t.jsx("div",{className:"notion_synced_block_duplicated",children:t.jsx(p,{block:e.synced_block.synced_from.block,blocks:o})})});try{N.displayName="SyncedBlock",N.__docgenInfo={description:"",displayName:"SyncedBlock",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"SyncedBlockBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const C=({block:e})=>{const o=e.to_do.checked;return t.jsxs("div",{id:e.id,className:`notion_to_do notion_color_${e.to_do.color}`,children:[t.jsxs("div",{className:"notion_to_do_content",children:[t.jsx("span",{className:"notion_to_do_icon",children:o?t.jsx(K,{}):t.jsx(J,{})}),t.jsx("span",{className:`notion_to_do_text ${o?"checked":""}`,children:t.jsx(a,{richText:e.to_do.rich_text})})]}),e.to_do.children&&t.jsx("div",{className:"notion_to_do_children",children:t.jsx(i,{blocks:e.to_do.children})})]})},J=()=>t.jsx("span",{className:"notion_checkbox",children:t.jsx("svg",{viewBox:"0 0 16 16",children:t.jsx("path",{d:"M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"})})}),K=()=>t.jsx("span",{className:"notion_checkbox checked",children:t.jsx("svg",{viewBox:"0 0 14 14",children:t.jsx("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})});try{C.displayName="ToDo",C.__docgenInfo={description:"",displayName:"ToDo",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"ToDoBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const l=({block:e})=>(console.warn(`${e.type} is not supported`),null);try{l.displayName="Unsupported",l.__docgenInfo={description:"",displayName:"Unsupported",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}const p=({block:e,blocks:o=[]})=>t.jsx("div",{className:"notion_block",children:t.jsx(W,{block:e,blocks:o})}),W=({block:e,blocks:o})=>{const{blockMapper:s}=v(),r={audio:O,bookmark:I,breadcrumb:P,bulleted_list:u,bulleted_list_item:c,callout:m,child_database:$,child_page:M,code:w,column:l,column_list:h,divider:D,embed:A,equation:E,file:F,heading_1:y,heading_2:x,heading_3:j,image:Q,link_preview:S,link_to_page:R,numbered_list:g,numbered_list_item:d,paragraph:f,pdf:U,quote:B,synced_block:N,table:Z,table_of_contents:z,table_row:l,template:l,to_do:C,toggle:q,unsupported:l,video:G,...s};switch(e.type){case"audio":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"bookmark":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"breadcrumb":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"bulleted_list":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"bulleted_list_item":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"callout":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"child_database":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"child_page":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"code":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"column":{console.warn("top level column block is not supported. column block must be child of column_list block.");const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"column_list":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"divider":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"embed":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"equation":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"file":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"heading_1":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"heading_2":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"heading_3":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"image":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"link_preview":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"link_to_page":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"numbered_list":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"numbered_list_item":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"paragraph":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"pdf":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"quote":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"synced_block":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"table":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"table_of_contents":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"table_row":{console.warn("top level table_row block is not supported. table_row block must be child of table block.");const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"template":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"to_do":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"toggle":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"unsupported":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}case"video":{const n=r[e.type];return t.jsx(n,{block:e,blocks:o})}default:return console.warn(`${e.type} is never.`),null}};try{p.displayName="Block",p.__docgenInfo={description:"",displayName:"Block",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BlockObject"}},blocks:{defaultValue:{value:"[]"},description:"",name:"blocks",required:!1,type:{name:"BlockObject[]"}}}}}catch{}const i=function({blocks:e,blockMapper:o,richTextItemMapper:s,annotationMapper:r,LinkComponent:n}){return t.jsx("div",{className:"notion_block_list",children:t.jsx(_,{mapper:o,children:t.jsx(L,{mapper:s,children:t.jsx(b,{mapper:r,children:t.jsx(V,{link:n,children:e.map(k=>t.jsx(p,{block:k,blocks:e},k.id))})})})})})};try{i.displayName="BlockList",i.__docgenInfo={description:"",displayName:"BlockList",props:{blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}},blockMapper:{defaultValue:null,description:"",name:"blockMapper",required:!1,type:{name:"object"}},richTextItemMapper:{defaultValue:null,description:"",name:"richTextItemMapper",required:!1,type:{name:"object"}},annotationMapper:{defaultValue:null,description:"",name:"annotationMapper",required:!1,type:{name:"object"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}}}}}catch{}const q=({block:e})=>t.jsxs("details",{id:e.id,className:`notion_toggle notion_color_${e.toggle.color}`,children:[t.jsx("summary",{className:"notion_toggle_summary",children:t.jsx(a,{richText:e.toggle.rich_text})}),t.jsx("div",{className:"notion_toggle_details",children:e.toggle.children&&t.jsx(i,{blocks:e.toggle.children})})]});try{q.displayName="Toggle",q.__docgenInfo={description:"",displayName:"Toggle",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"ToggleBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}export{u as B,h as C,j as H,g as N,f as P,B as Q,N as S,q as T,m as a,C as b,x as c,y as d,p as e,i as f};
//# sourceMappingURL=Toggle-acd9758b.js.map
