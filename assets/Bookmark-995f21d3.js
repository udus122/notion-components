import{j as a}from"./jsx-runtime-ffb262ed.js";import{u as l}from"./hooks-1d9ce861.js";import{R as x}from"./RichText-db14067a.js";const v=({block:o})=>{var i,r,s,m,n,e,t,k,c;const{Link:d}=l();return a.jsxs("div",{id:o.id,className:"notion-block notion-bookmark",children:[a.jsx(d,{href:o.bookmark.url,children:a.jsxs("div",{className:"notion-bookmark-container",children:[a.jsxs("div",{className:"notion-bookmark-content",children:[a.jsx("div",{className:"notion-bookmark-title",children:(r=(i=o.bookmark)==null?void 0:i.site_meta)!=null&&r.title?o.bookmark.site_meta.title:o.bookmark.url}),a.jsx("div",{className:"notion-bookmark-description",children:(m=(s=o.bookmark)==null?void 0:s.site_meta)!=null&&m.description?o.bookmark.site_meta.description:o.bookmark.url}),a.jsxs("div",{className:"notion-bookmark-url",children:[a.jsx("span",{className:"notion-bookmark-favicon",children:a.jsx("img",{src:(e=(n=o.bookmark)==null?void 0:n.site_meta)!=null&&e.favicon?(t=o.bookmark.site_meta)==null?void 0:t.favicon:`https://www.google.com/s2/favicons?domain=${o.bookmark.url}`,alt:"bookmark favicon"})}),a.jsx("span",{className:"notion-bookmark-link-url",children:o.bookmark.url})]})]}),((c=(k=o.bookmark)==null?void 0:k.site_meta)==null?void 0:c.image)&&a.jsx("div",{className:"notion-bookmark-cover",children:a.jsx("img",{src:o.bookmark.site_meta.image,alt:"bookmark og image"})})]})}),a.jsx("div",{className:"notion-caption notion-bookmark-caption",children:a.jsx(x,{richText:o.bookmark.caption})})]})};export{v as B};
//# sourceMappingURL=Bookmark-995f21d3.js.map
