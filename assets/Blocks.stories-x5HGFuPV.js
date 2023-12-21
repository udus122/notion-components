import{B as a}from"./BlockList-Avan3V__.js";import{B as _}from"./Blocks--6j1CB1F.js";import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{R as o}from"./RichText-IsuZDZjy.js";import{B as s}from"./Block-wK119-M0.js";import"./Annotation-mwnpg9rz.js";import"./hooks-3JhRioXY.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Link-4y-dmM-M.js";import"./AnnotationItem-LPu8t0rA.js";import"./Bold-lS9YMGOC.js";import"./Color-mptN1qya.js";import"./InlineCode-TPhS41qP.js";import"./Italic-ORC3lBYR.js";import"./Strikethrough-g_2WBDxm.js";import"./Underline-K-lIgRJf.js";import"./RichTextItem-s7hluc15.js";import"./InlineEquation-6PAgGiar.js";import"./katex-mFqOzwKf.js";import"./Mention-NTFz8ws-.js";import"./index-jnESftpm.js";import"./index-Ou0R2y6e.js";import"./Date-Pu-r1Rem.js";import"./Icon-e4pLob1-.js";import"./Text-99832FEP.js";import"./Audio-o03k7pkg.js";import"./Bookmark-QJFtzD9s.js";import"./Breadcrumb-uFfkKsFt.js";import"./utils-gSqeNnkP.js";import"./ChildDatabase-SDaNFEpP.js";import"./ChildPage-lVq8yHN5.js";import"./Code-NZV_F2eO.js";import"./Divider-uligtz63.js";import"./Embed-l-4znHls.js";import"./Equation-yeHPBoRl.js";import"./File-plgeV4SH.js";import"./File-Hwv8s3_9.js";import"./Image-6IS-p49r.js";import"./LinkPreview-gmflsAnQ.js";import"./LinkToPage-FcR-kEND.js";import"./Pdf-SdydtbK1.js";import"./Table-5iubIuOA.js";import"./TableOfContents-p8al1xEY.js";import"./Checkbox-tcHiP4BQ.js";import"./Video-re6lvITu.js";const u=({block:e})=>i.jsx(i.Fragment,{children:e.heading_1.is_toggleable?i.jsxs("details",{id:e.id,className:`notion-heading notion-heading-1 notion-toggle notion-color-${e.heading_1.color}`,open:!0,children:[i.jsx("summary",{className:"notion-toggle-summary",children:i.jsx("h1",{children:i.jsx(o,{richText:e.heading_1.rich_text})})}),i.jsx("div",{className:"notion-toggle-details",children:e.heading_1.children&&i.jsx(s,{blocks:e.heading_1.children})})]}):i.jsx("h1",{id:e.id,className:`notion-heading notion-heading-1 notion-color-${e.heading_1.color}`,children:i.jsx(o,{richText:e.heading_1.rich_text})})}),B=({block:e})=>i.jsx(i.Fragment,{children:e.heading_2.is_toggleable?i.jsxs("details",{id:e.id,className:`notion-heading notion-heading-2 notion-toggle notion-color-${e.heading_2.color}`,open:!0,children:[i.jsx("summary",{className:"notion-toggle-summary",children:i.jsx("h2",{children:i.jsx(o,{richText:e.heading_2.rich_text})})}),i.jsx("div",{className:"notion-toggle-details",children:e.heading_2.children&&i.jsx(s,{blocks:e.heading_2.children})})]}):i.jsx("h2",{id:e.id,className:`notion-heading notion-heading-2 notion-color-${e.heading_2.color}`,children:i.jsx(o,{richText:e.heading_2.rich_text})})}),N=({block:e})=>i.jsx(i.Fragment,{children:e.heading_3.is_toggleable?i.jsxs("details",{id:e.id,className:`notion-heading notion-heading-3 notion-toggle notion-color-${e.heading_3.color}`,open:!0,children:[i.jsx("summary",{className:"notion-toggle-summary",children:i.jsx("h3",{children:i.jsx(o,{richText:e.heading_3.rich_text})})}),i.jsx("div",{className:"notion-toggle-details",children:e.heading_3.children&&i.jsx(s,{blocks:e.heading_3.children})})]}):i.jsx("h3",{id:e.id,className:`notion-heading notion-heading-3 notion-color-${e.heading_3.color}`,children:i.jsx(o,{richText:e.heading_3.rich_text})})}),O=({block:e})=>i.jsxs("details",{id:e.id,className:`notion-toggle notion-color-${e.toggle.color}`,open:!0,children:[i.jsx("summary",{className:"notion-toggle-summary",children:i.jsx(o,{richText:e.toggle.rich_text})}),i.jsx("div",{className:"notion-toggle-details",children:e.toggle.children&&i.jsx(s,{blocks:e.toggle.children})})]}),pe={title:"Blocks/Renderer",component:_,tags:["autodocs"]},r={args:{blocks:a}},n={args:{blocks:a,theme:"dark"}},t={args:{blocks:a,blockMapper:{toggle:O,heading_1:u,heading_2:B,heading_3:N}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>)
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,l,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>),
    theme: "dark"
  }
}`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var p,x,j;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    blocks: (BlocksObject as Array<BlockBlockObject>),
    blockMapper: {
      toggle: OpenedToggle,
      heading_1: OpenedHeading1,
      heading_2: OpenedHeading2,
      heading_3: OpenedHeading3
    }
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const xe=["Default","Dark","Custom"];export{t as Custom,n as Dark,r as Default,xe as __namedExportsOrder,pe as default};
