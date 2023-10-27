import{B as d}from"./BlockList-eeeab56b.js";import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as n,a as f,L as N}from"./RichText-f4ece695.js";import{B as t,g as O}from"./Toggle-df375b5a.js";import{a as A}from"./Annotation-79f5dc6e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks-1d9ce861.js";import"./Link-62299450.js";import"./RichTextItem-00715d27.js";import"./InlineEquation-34b361bf.js";import"./katex-c2839aef.js";import"./Mention-ab13ac38.js";import"./index-7653c3a3.js";import"./Text-ddcb04fe.js";import"./Audio-d5582905.js";import"./Bookmark-5d14a062.js";import"./Breadcrumb-74db19c3.js";import"./utils-37e7f9cc.js";import"./Icon-a02c0f68.js";import"./ChildDatabase-e459bf86.js";import"./ChildPage-4ac9259f.js";import"./Code-a7ebc8b8.js";import"./Divider-512343be.js";import"./Embed-d21a2389.js";import"./Equation-2b94ad87.js";import"./File-0c80adf2.js";import"./Image-dcf99e99.js";import"./LinkPreview-0f1fd74b.js";import"./LinkToPage-375149c5.js";import"./Pdf-c6ece41f.js";import"./Table-55e2eb73.js";import"./TableOfContents-313685d2.js";import"./Video-b824922e.js";import"./AnnotationItem-649aa9fb.js";import"./Bold-27d453fc.js";import"./InlineCode-aab75cea.js";import"./Color-bf0161c1.js";import"./Italic-ec5ae852.js";import"./Strikethrough-2d45501b.js";import"./Underline-53eade56.js";const I=({block:o})=>e.jsx(e.Fragment,{children:o.heading_1.is_toggleable?e.jsxs("details",{id:o.id,className:`notion-heading notion-heading-1 notion-toggle notion-color-${o.heading_1.color}`,open:!0,children:[e.jsx("summary",{className:"notion-toggle-summary",children:e.jsx("h1",{children:e.jsx(n,{richText:o.heading_1.rich_text})})}),e.jsx("div",{className:"notion-toggle-details",children:o.heading_1.children&&e.jsx(t,{blocks:o.heading_1.children})})]}):e.jsx("h1",{id:o.id,className:`notion-heading notion-heading-1 notion-color-${o.heading_1.color}`,children:e.jsx(n,{richText:o.heading_1.rich_text})})}),v=({block:o})=>e.jsx(e.Fragment,{children:o.heading_2.is_toggleable?e.jsxs("details",{id:o.id,className:`notion-heading notion-heading-2 notion-toggle notion-color-${o.heading_2.color}`,open:!0,children:[e.jsx("summary",{className:"notion-toggle-summary",children:e.jsx("h2",{children:e.jsx(n,{richText:o.heading_2.rich_text})})}),e.jsx("div",{className:"notion-toggle-details",children:o.heading_2.children&&e.jsx(t,{blocks:o.heading_2.children})})]}):e.jsx("h2",{id:o.id,className:`notion-heading notion-heading-2 notion-color-${o.heading_2.color}`,children:e.jsx(n,{richText:o.heading_2.rich_text})})}),M=({block:o})=>e.jsx(e.Fragment,{children:o.heading_3.is_toggleable?e.jsxs("details",{id:o.id,className:`notion-heading notion-heading-3 notion-toggle notion-color-${o.heading_3.color}`,open:!0,children:[e.jsx("summary",{className:"notion-toggle-summary",children:e.jsx("h3",{children:e.jsx(n,{richText:o.heading_3.rich_text})})}),e.jsx("div",{className:"notion-toggle-details",children:o.heading_3.children&&e.jsx(t,{blocks:o.heading_3.children})})]}):e.jsx("h3",{id:o.id,className:`notion-heading notion-heading-3 notion-color-${o.heading_3.color}`,children:e.jsx(n,{richText:o.heading_3.rich_text})})}),R=({block:o})=>e.jsxs("details",{id:o.id,className:`notion-toggle notion-color-${o.toggle.color}`,open:!0,children:[e.jsx("summary",{className:"notion-toggle-summary",children:e.jsx(n,{richText:o.toggle.rich_text})}),e.jsx("div",{className:"notion-toggle-details",children:o.toggle.children&&e.jsx(t,{blocks:o.toggle.children})})]}),s=({blocks:o,blockMapper:_,richTextItemMapper:B,annotationMapper:k,LinkComponent:y,theme:T="light"})=>e.jsx("div",{className:`notion-root notion-${T}`,children:e.jsx(O,{mapper:_,children:e.jsx(f,{mapper:B,children:e.jsx(A,{mapper:k,children:e.jsx(N,{link:y,children:e.jsx(t,{blocks:o})})})})})});try{s.displayName="BlockRenderer",s.__docgenInfo={description:"",displayName:"BlockRenderer",props:{blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockBlockObject[]"}},blockMapper:{defaultValue:null,description:"",name:"blockMapper",required:!1,type:{name:"Partial<{ audio: AudioBlock; bookmark: BookmarkBlock; breadcrumb: BreadcrumbBlock; bulleted_list: BulletedListBlock; ... 30 more ...; video: VideoBlock; }>"}},richTextItemMapper:{defaultValue:null,description:"",name:"richTextItemMapper",required:!1,type:{name:"Partial<{ equation: EquationRichTextItem; mention: MentionRichTextItem; text: TextRichTextItem; }>"}},annotationMapper:{defaultValue:null,description:"",name:"annotationMapper",required:!1,type:{name:"Partial<{ bold: BoldAnnotationItem; underline: UnderlineAnnotationItem; strikethrough: StrikethroughAnnotationItem; italic: ItalicAnnotationItem; code: CodeAnnotationItem; color: ColorAnnotationItem; }>"}},LinkComponent:{defaultValue:null,description:"",name:"LinkComponent",required:!1,type:{name:'ComponentType<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }>'}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const _e={title:"Renderer",component:s,tags:["autodocs"]},i={args:{blocks:d}},r={args:{blocks:d,theme:"dark"}},a={args:{blocks:d,blockMapper:{toggle:R,heading_1:I,heading_2:v,heading_3:M}}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>)
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,p,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>),
    theme: "dark"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,x,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>),
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3
    }
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Be=["Default","Dark","Custom"];export{a as Custom,r as Dark,i as Default,Be as __namedExportsOrder,_e as default};
//# sourceMappingURL=Renderer.stories-3044f470.js.map
