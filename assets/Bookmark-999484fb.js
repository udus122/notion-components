import{j as a}from"./jsx-runtime-ffb262ed.js";import{u as d}from"./hooks-edf5cdd5.js";import{R as p}from"./RichText-56528f6a.js";const l=({block:o})=>{var e,r,i,s,t,n,m,k,c;const{Link:_}=d();return a.jsxs("div",{className:"notion_bookmark",children:[a.jsx(_,{href:o.bookmark.url,children:a.jsxs("div",{className:"notion_bookmark_container",children:[a.jsxs("div",{className:"notion_bookmark_content",children:[a.jsx("div",{className:"notion_bookmark_title",children:(r=(e=o.bookmark)==null?void 0:e.site_meta)!=null&&r.title?o.bookmark.site_meta.title:o.bookmark.url}),a.jsx("div",{className:"notion_bookmark_description",children:(s=(i=o.bookmark)==null?void 0:i.site_meta)!=null&&s.description?o.bookmark.site_meta.description:o.bookmark.url}),a.jsxs("div",{className:"notion_bookmark_url",children:[a.jsx("span",{className:"notion_bookmark_favicon",children:a.jsx("img",{src:(n=(t=o.bookmark)==null?void 0:t.site_meta)!=null&&n.favicon?(m=o.bookmark.site_meta)==null?void 0:m.favicon:`https://www.google.com/s2/favicons?domain=${o.bookmark.url}`,alt:"bookmark favicon"})}),a.jsx("span",{className:"notion_bookmark_link_url",children:o.bookmark.url})]})]}),((c=(k=o.bookmark)==null?void 0:k.site_meta)==null?void 0:c.image)&&a.jsx("div",{className:"notion_bookmark_cover",children:a.jsx("img",{src:o.bookmark.site_meta.image,alt:"bookmark og image"})})]})}),a.jsx("div",{className:"notion_caption notion_bookmark_caption",children:a.jsx(p,{richText:o.bookmark.caption})})]})};try{l.displayName="Bookmark",l.__docgenInfo={description:"",displayName:"Bookmark",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"BookmarkBlockObject"}},blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"BlockObject[]"}}}}}catch{}export{l as B};
//# sourceMappingURL=Bookmark-999484fb.js.map
