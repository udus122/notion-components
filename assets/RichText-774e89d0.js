import{j as t}from"./jsx-runtime-ffb262ed.js";import{a as l}from"./Annotation-d01c6f86.js";import"./index-76fb7be0.js";import"./Link-b5909185.js";import{L as d,u as m,R as u}from"./hooks-edf5cdd5.js";import{R as x}from"./RichTextItem-0d25e7f5.js";const i=({link:e,children:r})=>e?t.jsx(d.Provider,{value:e,children:r}):r;try{i.displayName="LinkProvider",i.__docgenInfo={description:"",displayName:"LinkProvider",props:{link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}}}}}catch{}const o=({mapper:e,children:r})=>{if(!e)return r;const{richTextItemMapper:a}=m();return t.jsx(u.Provider,{value:{...a,...e},children:r})};try{o.displayName="RichTextItemProvider",o.__docgenInfo={description:"",displayName:"RichTextItemProvider",props:{mapper:{defaultValue:null,description:"",name:"mapper",required:!1,type:{name:"object"}}}}}catch{}const p=({richText:e,richTextItemMapper:r,annotationMapper:a,LinkComponent:c})=>e?t.jsx("span",{className:"notion_rich_text",children:t.jsx(o,{mapper:r,children:t.jsx(l,{mapper:a,children:t.jsx(i,{link:c,children:e.map((n,s)=>t.jsx(x,{richText:n},(n==null?void 0:n.id)??`${s}-${n.plain_text}`))})})})}):null;try{p.displayName="RichText",p.__docgenInfo={description:"",displayName:"RichText",props:{richText:{defaultValue:null,description:"",name:"richText",required:!0,type:{name:"RichTextItem[]"}},richTextItemMapper:{defaultValue:null,description:"",name:"richTextItemMapper",required:!1,type:{name:"object"}},annotationMapper:{defaultValue:null,description:"",name:"annotationMapper",required:!1,type:{name:"object"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}}}}}catch{}export{i as L,p as R,o as a};
//# sourceMappingURL=RichText-774e89d0.js.map
