import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as n}from"./index-4g5l5LRQ.js";import{R as i}from"./RichText-IsuZDZjy.js";const s=({block:e})=>(n.useEffect(()=>{const o=document.createElement("script");return o.src="https://platform.twitter.com/widgets.js",document.body.appendChild(o),()=>{document.body.removeChild(o)}},[]),e.embed.oembed?t.jsx("div",{className:"notion-block notion-embed",dangerouslySetInnerHTML:{__html:e.embed.oembed.type==="rich"?e.embed.oembed.html:""}}):t.jsxs("div",{id:e.id,className:"notion-block notion-embed",children:[t.jsx("iframe",{src:e.embed.url,title:"notion embed content"}),t.jsx("div",{className:"notion-caption notion-embed-caption",children:t.jsx(i,{richText:e.embed.caption})})]}));export{s as E};
