import{j as o}from"./jsx-runtime-ffb262ed.js";import{R as a}from"./RichText-56528f6a.js";const r=({block:e})=>{const i=e.audio.type=="external"?e.audio.external.url:e.audio.type=="file"?e.audio.file.url:"";return o.jsxs("div",{id:e.id,className:"notion_audio",children:[o.jsxs("audio",{controls:!0,src:i,children:["Your browser does not support HTML5 audios. You can download audio file",o.jsx("a",{href:i,children:"here"}),"."]}),o.jsx("div",{className:"notion_caption notion_audio_caption",children:o.jsx(a,{richText:e.audio.caption})})]})};try{r.displayName="Audio",r.__docgenInfo={description:"",displayName:"Audio",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"AudioBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}export{r as A};
//# sourceMappingURL=Audio-26a04e79.js.map
