import{j as r}from"./jsx-runtime-ffb262ed.js";import{a as m}from"./Annotation-a84b6e4b.js";import{L as s,u as d,R as u}from"./hooks-81c64700.js";import{R as x}from"./RichTextItem-12787051.js";const o=({link:e,children:t})=>e?r.jsx(s.Provider,{value:e,children:t}):t;try{o.displayName="LinkProvider",o.__docgenInfo={description:"",displayName:"LinkProvider",props:{link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}}}}}catch{}const a=({mapper:e,children:t})=>{if(!e)return t;const{richTextItemMapper:i}=d();return r.jsx(u.Provider,{value:{...i,...e},children:t})};try{a.displayName="RichTextItemProvider",a.__docgenInfo={description:"",displayName:"RichTextItemProvider",props:{mapper:{defaultValue:null,description:"",name:"mapper",required:!1,type:{name:"Partial<{ equation: EquationRichTextItem; mention: MentionRichTextItem; text: TextRichTextItem; }>"}}}}}catch{}const p=({richText:e,richTextItemMapper:t,annotationMapper:i,LinkComponent:c})=>e?r.jsx("span",{className:"notion_rich_text",children:r.jsx(a,{mapper:t,children:r.jsx(m,{mapper:i,children:r.jsx(o,{link:c,children:e.map((n,l)=>r.jsx(x,{richText:n},(n==null?void 0:n.id)??`${l}-${n.plain_text}`))})})})}):null;try{p.displayName="RichText",p.__docgenInfo={description:"",displayName:"RichText",props:{richText:{defaultValue:null,description:"",name:"richText",required:!0,type:{name:"RichTextItem[]"}},richTextItemMapper:{defaultValue:null,description:"",name:"richTextItemMapper",required:!1,type:{name:"Partial<{ equation: EquationRichTextItem; mention: MentionRichTextItem; text: TextRichTextItem; }>"}},annotationMapper:{defaultValue:null,description:"",name:"annotationMapper",required:!1,type:{name:"Partial<{ bold: BoldAnnotationItem; underline: UnderlineAnnotationItem; strikethrough: StrikethroughAnnotationItem; italic: ItalicAnnotationItem; code: CodeAnnotationItem; color: ColorAnnotationItem; }>"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}}}}}catch{}export{o as L,p as R,a};
//# sourceMappingURL=RichText-df143fad.js.map
