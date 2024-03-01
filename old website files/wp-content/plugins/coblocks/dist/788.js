"use strict";(self.webpackChunkcoblocks=self.webpackChunkcoblocks||[]).push([[788],{7788:function(e,t,l){l.r(t),l.d(t,{default:function(){return ee}});var o=l(9196),n=l(4184),i=l.n(n),a=l(7635),r=l(2819),c=l.n(r),s=l(5736),u=l(4333),d=l(1313),m=l(4981),p=l(2175),b=l(5609),g=l(9307),k=l(9818),_=l(5697),f=l.n(_);const h=({hoveredFilter:e})=>{if(!e)return null;const t=c().cloneDeep((0,k.select)("core/block-editor").getSelectedBlock());return t.attributes.filter=e,(0,o.createElement)("div",{className:"block-editor-block-switcher__popover__preview__parent"},(0,o.createElement)("div",{className:"block-editor-block-switcher__popover__preview__container"},(0,o.createElement)(b.Popover,{className:"block-editor-block-switcher__preview__popover coblocks-image-filter-popover",focusOnMount:!1,position:"bottom right"},(0,o.createElement)("div",{className:"block-editor-block-switcher__preview coblocks__preview"},(0,o.createElement)("div",{className:"block-editor-block-switcher__preview-title"},(0,s.__)("Preview filter","coblocks")),(0,o.createElement)(p.BlockPreview,{autoHeight:!0,blocks:{...t}})))))},v=e=>{const[t,l]=(0,g.useState)(null),n=e=>{l(e)},{attributes:r,setAttributes:c}=e,{filter:u}=r,d=[{icon:(0,o.createElement)(b.Icon,{icon:a.mJk}),isActive:"none"===u,onClick:()=>{c({filter:"none"})},slug:"none",
/* translators: image style */
title:(0,s.__)("Original","coblocks")},{icon:(0,o.createElement)(b.Icon,{icon:a.NC1}),isActive:"grayscale"===u,onClick:()=>{c({filter:"grayscale"})},slug:"grayscale",
/* translators: image style */
title:(0,s.__)("Grayscale filter","coblocks")},{icon:(0,o.createElement)(b.Icon,{icon:a.amg}),isActive:"sepia"===u,onClick:()=>{c({filter:"sepia"})},slug:"sepia",
/* translators: image style */
title:(0,s.__)("Sepia filter","coblocks")},{icon:(0,o.createElement)(b.Icon,{icon:a.swD}),isActive:"saturation"===u,onClick:()=>{c({filter:"saturation"})},slug:"saturation",
/* translators: image style */
title:(0,s.__)("Saturation filter","coblocks")},{icon:(0,o.createElement)(b.Icon,{icon:a.tu4}),isActive:"dim"===u,onClick:()=>{c({filter:"dim"})},slug:"dim",
/* translators: image style */
title:(0,s.__)("Dim filter","coblocks")},{icon:(0,o.createElement)(b.Icon,{icon:a.jZD}),isActive:"vintage"===u,onClick:()=>{c({filter:"vintage"})},slug:"vintage",
/* translators: image style */
title:(0,s.__)("Vintage filter","coblocks")}];return(0,o.createElement)(b.ToolbarGroup,null,(0,o.createElement)(b.DropdownMenu,{className:i()("components-coblocks-media-filter","none"!==u?"has-filter":""),icon:(0,o.createElement)(b.Icon,{icon:a.AF8}),label:(0,s.__)("Apply filter","coblocks"),noIcons:!0,popoverProps:{className:"components-coblocks-dropdown"}},(()=>(0,o.createElement)(b.MenuGroup,null,(0,o.createElement)(h,{hoveredFilter:t}),d.map((e=>(0,o.createElement)(b.MenuItem,{icon:e.icon,isSelected:u===e.slug,key:`coblocks-image-filter-${e.slug}`,label:e.title,onClick:e.onClick,onMouseEnter:()=>n(e.slug),onMouseLeave:()=>n(null),role:"menuitemradio"},e.title)))))))};var E=v;v.propTypes={attributes:f().object,setAttributes:f().func};var C=e=>{const{attributes:t,innerBlocks:l}=e,{images:n}=t,i=!!n.length||!!l?.length;return(0,o.createElement)(p.BlockControls,null,i&&(0,o.createElement)(E,{...e}))},y=l(444);const w="function"==typeof p.__experimentalUseInnerBlocksProps?p.__experimentalUseInnerBlocksProps:p.useInnerBlocksProps,S=["core/image"],B=e=>{const{attributes:t,isSelected:l,setAttributes:n,mediaPlaceholder:a,insertBlocksAfter:r,blockProps:c,wrapperClass:u=""}=e,{align:d,caption:b,imageCrop:k,lightbox:_}=t,{children:f,...h}=w(c,{__experimentalLayout:{alignments:[],type:"default"},allowedBlocks:S,orientation:"vertical",renderAppender:!1}),[v,E]=(0,g.useState)(!1);return(0,g.useEffect)((()=>{l||E(!1)}),[l]),(0,o.createElement)("figure",{...h,className:i()(c.className,{[`align${d}`]:d,"has-lightbox":_,"is-cropped":k})},u?(0,o.createElement)(y.View,{className:i()(u)},f):{children:f},(0,o.createElement)(y.View,{className:"gallery-media-placeholder-wrapper",onClick:function(){v&&E(!1)}},a),(0,o.createElement)(I,{__unstableOnSplitAtEnd:()=>r((0,m.createBlock)("core/paragraph")),"aria-label":(0,s.__)("Gallery caption text","coblocks"),captionFocused:v,className:"blocks-gallery-caption",inlineToolbar:!0,isHidden:!l&&p.RichText.isEmpty(b),onChange:e=>n({caption:e}),onFocusCaption:function(){v||E(!0)},placeholder:(0,s.__)("Write gallery caption…","coblocks"),tagName:"figcaption",value:b}))};function I({isHidden:e,captionFocused:t,onFocusCaption:l,className:n,value:i,placeholder:a,tagName:r,captionRef:c,...s}){return e?(0,o.createElement)(b.VisuallyHidden,{as:p.RichText,...s}):(0,o.createElement)(p.RichText,{className:n,isSelected:t,onClick:l,placeholder:a,ref:c,tagName:r,value:i,...s})}var N=B;B.propTypes={attributes:f().object.isRequired,blockProps:f().object,insertBlocksAfter:f().func,isSelected:f().bool.isRequired,mediaPlaceholder:f().elementType,setAttributes:f().func,wrapperClass:f().string.isRequired},B.defaultProps={attributes:{},isSelected:!1,wrapperClass:""};var A=l(3264),x=l(3961);const T=[{
/* translators: abbreviation for small size */
label:(0,s.__)("S","coblocks"),tooltip:(0,s.__)("Small","coblocks"),value:1},{
/* translators: abbreviation for medium size */
label:(0,s.__)("M","coblocks"),tooltip:(0,s.__)("Medium","coblocks"),value:2},{
/* translators: abbreviation for large size */
label:(0,s.__)("L","coblocks"),tooltip:(0,s.__)("Large","coblocks"),value:3},{
/* translators: abbreviation for extra large size */
label:(0,s.__)("XL","coblocks"),tooltip:(0,s.__)("Extra Large","coblocks"),value:4}],M={label:(0,s.__)("None","coblocks"),tooltip:(0,s.__)("None","coblocks"),value:0},P={label:(0,o.createElement)(b.Icon,{icon:a.ewm}),tooltip:(0,s.__)("Custom","coblocks"),value:"custom"};class z extends g.Component{render(){const{advancedMaxValue:e,advancedMinValue:t,currentOption:l,label:n,onChange:a,options:c,showAdvancedControls:s,showIcons:u,showNoneOption:d,showCustomOption:m}=this.props;let p=c||T;return d&&(p=[M,...p]),m&&(p=[...p,P]),s&&!1!==t&&!1!==e?(0,o.createElement)(b.RangeControl,{label:n,max:e,min:t,onChange:e=>a(e),value:l}):(0,o.createElement)(b.BaseControl,{className:i()("coblocks-option-selector-control",{"is-custom":"custom"===l}),id:`coblocks-option-selector-${(0,r.kebabCase)(n)}`,label:n},(0,o.createElement)(b.PanelRow,null,(0,o.createElement)(b.ButtonGroup,{"aria-label":n},p.map((e=>(0,o.createElement)(b.Tooltip,{key:`option-${e.value}`,text:e.tooltip},(0,o.createElement)(b.Button,{"aria-label":e.tooltip,"aria-pressed":l===e.value,isPrimary:l===e.value,isSecondary:l!==e.value,onClick:()=>a(e.value)},u?e.icon:e.label)))))))}}z.propTypes={advancedMaxValue:f().number,advancedMinValue:f().number,currentOption:f().oneOfType([f().string,f().number]),label:f().string,onChange:f().func,options:f().array,showAdvancedControls:f().bool,showCustomOption:f().bool,showIcons:f().bool,showNoneOption:f().bool};const O=[{
/* translators: abbreviation for small size */
label:(0,s.__)("S","coblocks"),tooltip:(0,s.__)("Small","coblocks"),value:"small"},{
/* translators: abbreviation for medium size */
label:(0,s.__)("M","coblocks"),tooltip:(0,s.__)("Medium","coblocks"),value:"medium"},{
/* translators: abbreviation for large size */
label:(0,s.__)("L","coblocks"),tooltip:(0,s.__)("Large","coblocks"),value:"large"}],D=e=>{const{attributes:t,setAttributes:l}=e,{align:n,gutter:i,gutterCustom:a}=t,r="full"===n?10:5;return(0,g.useEffect)((()=>{a>r&&l({gutterCustom:r})}),[a,r]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(z,{currentOption:i,label:(0,s.__)("Gutter","coblocks"),onChange:e=>l({gutter:e}),options:O,showCustomOption:!0}),"custom"===i&&(0,o.createElement)(b.RangeControl,{initialValue:0,max:r,min:0,onChange:e=>l({gutterCustom:e.toString()}),step:.1,value:parseFloat(a)||0,withInputField:!0}))};var L=D;D.propTypes={attributes:f().object,setAttributes:f().func};var R=l(7798);function F(e){const[t,l]=(0,g.useState)([]),o=(0,k.useSelect)((t=>{if(!e?.length)return[];const l=e.map((e=>e.attributes.id)).filter((e=>void 0!==e));if(0===l.length)return[];if(l.length>100){const e=[...l];let n=[];for(;e.length;){var o;const l=null!==(o=t(R.store).getMediaItems({include:e.splice(0,100).join(","),per_page:100}))&&void 0!==o?o:[];n=[...n,...l]}return n}return t(R.store).getMediaItems({include:l.join(","),per_page:100})||[]}),[e]);return o?.length!==t?.length||o?.some((e=>!t.find((t=>t.id===e.id))))?(l(o),o):t}const V="attachment",j="media",G="none",$=["noreferrer","noopener"],U="none",H="media",q="attachment";function W(e,t){switch(t){case H:return{href:e?.source_url||e?.url,linkDestination:j};case q:return{href:e?.link,linkDestination:V};case U:return{href:void 0,linkDestination:G}}return{}}function Z(e,{rel:t}){const l=e?"_blank":void 0;let o;return o=l||t?function(e){let t=e;return void 0===e||(0,r.isEmpty)(t)||(0,r.isEmpty)(t)||((0,r.each)($,(e=>{const l=new RegExp("\\b"+e+"\\b","gi");t=t.replace(l,"")})),t!==e&&(t=t.trim()),(0,r.isEmpty)(t)&&(t=void 0)),t}(t):void 0,{linkTarget:l,rel:o}}const J=[{label:(0,s.__)("Attachment Page","coblocks"),value:q},{label:(0,s.__)("Media File","coblocks"),value:H},{label:(0,s._x)("None","Media item link option"),value:U}];function X(e){const{attributes:t,clientId:l,isSelected:n,setAttributes:i}=e,{linkTarget:a,linkTo:c,sizeSlug:u,lightbox:d,gutter:m,gutterCustom:_,radius:f}=t,{updateBlockAttributes:h}=(0,k.useDispatch)(p.store),{createSuccessNotice:v}=(0,k.useDispatch)(x.store),{getBlock:E,getSettings:C}=(0,k.useSelect)((e=>({getBlock:e(p.store).getBlock,getSettings:e(p.store)?.getSettings||{}})),[]),w=F((0,k.useSelect)((e=>e(p.store).getBlock(l)?.innerBlocks),[l])),S=function(e,t,l){return(0,g.useMemo)((()=>function(){if(!e||0===e.length)return;const{imageSizes:o}=l();let n={};return t&&(n=e.reduce(((e,t)=>{if(!t.id)return e;const l=o.reduce(((e,l)=>{const o=(0,r.get)(t,["sizes",l.slug,"url"]),n=(0,r.get)(t,["media_details","sizes",l.slug,"source_url"]);return{...e,[l.slug]:o||n}}),{});return{...e,[parseInt(t.id,10)]:l}}),{})),o.filter((({slug:e})=>(0,r.some)(n,(t=>t[e])))).map((({name:e,slug:t})=>({label:e,value:t})))}()),[e,t])}(w,n,C),B=c&&"none"!==c;return(0,o.createElement)(p.InspectorControls,null,(0,o.createElement)(b.PanelBody,{title:(0,s.__)("Gallery settings","coblocks")},(0,o.createElement)(L,{...e}),"custom"!==m&&0!==_&&(0,o.createElement)(b.RangeControl,{"aria-label":(0,s.__)("Add rounded corners to the gallery items.","coblocks"),label:(0,s.__)("Rounded corners","coblocks"),max:20,min:0,onChange:e=>{i({radius:e})},step:1,value:f}),S?.length>0&&(0,o.createElement)(b.SelectControl,{hideCancelButton:!0,label:(0,s.__)("Image size","coblocks"),onChange:function(e){i({sizeSlug:e});const t={},o=[];E(l).innerBlocks.forEach((l=>{o.push(l.clientId);const n=l.attributes.id?(0,r.find)(w,{id:l.attributes.id}):null;t[l.clientId]=function(e,t){const l=(0,r.get)(e,["media_details","sizes",t,"source_url"]);return l?{height:void 0,sizeSlug:t,url:l,width:void 0}:{}}(n,e)})),h(o,t,!0);const n=S.find((t=>t.value===e));v((0,s.sprintf)(/* translators: %s: image size settings */
(0,s.__)("All gallery image sizes updated to: %s","coblocks"),n.label),{id:"gallery-attributes-sizeSlug",type:"snackbar"})},options:S,value:u}),g.Platform.isWeb&&!S&&(0,o.createElement)(b.BaseControl,{className:"gallery-image-sizes"},(0,o.createElement)(b.BaseControl.VisualLabel,null,(0,s.__)("Image size","coblocks")),(0,o.createElement)(y.View,{className:"gallery-image-sizes__loading"},(0,o.createElement)(b.Spinner,null),(0,s.__)("Loading options…","coblocks"))),(0,o.createElement)(b.ToggleControl,{checked:!!d,help:e=>e?(0,s.__)("Image lightbox is enabled.","coblocks"):(0,s.__)("Toggle to enable the image lightbox.","coblocks"),label:(0,s.__)("Lightbox","coblocks"),onChange:()=>i({lightbox:!d})}),(0,o.createElement)(b.SelectControl,{hideCancelButton:!0,label:(0,s.__)("Link to","coblocks"),onChange:function(e){i({linkTo:e});const t={},o=[];E(l).innerBlocks.forEach((l=>{o.push(l.clientId);const n=l.attributes.id?(0,r.find)(w,{id:l.attributes.id}):null;t[l.clientId]=W(n,e)})),h(o,t,!0);const n=[...J].find((t=>t.value===e));v((0,s.sprintf)(/* translators: %s: image size settings */
(0,s.__)("All gallery image links updated to: %s","coblocks"),n.label),{id:"gallery-attributes-linkTo",type:"snackbar"})},options:J,value:c}),B&&(0,o.createElement)(b.ToggleControl,{checked:"_blank"===a,label:(0,s.__)("Open in new tab","coblocks"),onChange:function(e){const t=e?"_blank":void 0;i({linkTarget:t});const o={},n=[];E(l).innerBlocks.forEach((e=>{n.push(e.clientId),o[e.clientId]=Z(t,e.attributes)})),h(n,o,!0);const a=e?(0,s.__)("All gallery images updated to open in new tab","coblocks"):(0,s.__)("All gallery images updated to not open in new tab","coblocks");v(a,{id:"gallery-attributes-openInNewTab",type:"snackbar"})}})))}const K=(e,t="large")=>{const l=(0,r.pick)(e,["alt","id","link","caption"]);l.url=(0,r.get)(e,["sizes",t,"url"])||(0,r.get)(e,["media_details","sizes",t,"source_url"])||e.url;const o=(0,r.get)(e,["sizes","full","url"])||(0,r.get)(e,["media_details","sizes","full","source_url"]);return o&&(l.fullUrl=o),l.alt=""!==l.alt?l.alt:(0,s.__)("Image gallery image","coblocks"),l};const Q=["image"],Y=g.Platform.isNative?(0,s.__)("ADD MEDIA","coblocks"):(0,s.__)("Drag images, upload new ones or select files from your library.","coblocks");var ee=(0,u.compose)([b.withNotices])((function(e){const{setAttributes:t,attributes:l,className:n,clientId:c,noticeOperations:u,isSelected:_,noticeUI:f,insertBlocksAfter:h}=e,{filter:v,linkTarget:E,linkTo:y,sizeSlug:w,radius:S}=l,{__unstableMarkNextChangeAsNotPersistent:B,replaceBlocks:I,replaceInnerBlocks:x,updateBlockAttributes:T}=(0,k.useDispatch)(p.store),{getBlock:M,preferredStyle:P}=(0,k.useSelect)((e=>{const t=e(p.store).getSettings().__experimentalPreferredStyleVariations;return{getBlock:e(p.store).getBlock,preferredStyle:t?.value?.["core/image"]}}),[]),z=(0,k.useSelect)((e=>e(p.store).getBlock(c)?.innerBlocks),[c]),O=(0,g.useMemo)((()=>z?.map((e=>({attributes:e.attributes,clientId:e.clientId,fromSavedContent:Boolean(e.originalContent),id:e.attributes.id,url:e.attributes.url})))),[z]);(0,g.useEffect)((()=>{if(l?.images?.length&&!O?.length){const e=l?.images.map((e=>(0,m.createBlock)("core/image",{alt:e.alt,caption:e.caption?.toString(),id:parseInt(e.id),url:e.url}))),t={...l};delete t.images,delete t.gutter,delete t.gutterCustom;const o=(0,m.createBlock)("coblocks/gallery-masonry",{...t},e);I([c],o)}}),[]);const D=F(z),L=function(e,t){const[l,o]=(0,g.useState)([]);return(0,g.useMemo)((()=>function(){let n=!1;const i=l.filter((t=>e.find((e=>t.clientId===e.clientId))));let a;return i.length<l.length&&(n=!0),e.forEach((e=>{e.fromSavedContent&&!i.find((t=>t.id===e.id))&&(n=!0,i.push(e))})),!t||(a=e.filter((e=>!i.find((t=>e.clientId&&t.clientId===e.clientId))&&t?.find((t=>t.id===e.id))&&!e.fromSavedConent))),(n||a?.length>0)&&o([...i,...a]),a.length>0?a:null}()),[e,t])}(O,D);function R(e){const t=e.id?(0,r.find)(D,{id:e.id}):null;let o;return o=e.className&&""!==e.className?e.className:P?`is-style-${P}`:void 0,{...K(e,w),...W(t,y),...Z(E,l),className:o,sizeSlug:w}}function V(e){return Q.some((t=>0===e.type?.indexOf(t)))||0===e.url?.indexOf("blob:")}(0,g.useEffect)((()=>{const e={},t=[];M(c)?.innerBlocks.forEach((l=>{t.push(l.clientId),e[l.clientId]={className:"masonry-brick"}})),T(t,e,!0)}),[]),(0,g.useEffect)((()=>{L?.forEach((e=>{T(e.clientId,{...R(e.attributes),align:void 0,id:e.id})}))}),[L]),(0,g.useEffect)((()=>{"0"===l.gutterCustom&&t({radius:0})}),[l.gutterCustom]),(0,g.useEffect)((()=>{y||(B(),t({linkTo:window?.wp?.media?.view?.settings?.defaultProps?.link||U}))}),[y]);const j=!!O.length,G=j&&O.some((e=>!!e.id)),$=O.some((e=>!e.id&&0===e.url?.indexOf("blob:"))),H=(0,o.createElement)(p.MediaPlaceholder,{accept:"image/*",addToGallery:G,allowedTypes:Q,disableMediaButtons:j&&!_||$,handleUpload:!1,icon:!j&&(0,o.createElement)(b.Icon,{icon:a.$vB}),isAppender:j,labels:{instructions:!j&&Y,title:!j&&(0,s.__)("Masonry Gallery","coblocks")},multiple:!0,notices:j?void 0:f,onError:function(e){u.removeAllNotices(),u.createErrorNotice(e)},onSelect:function(e){const t="[object FileList]"===Object.prototype.toString.call(e),l=t?Array.from(e).map((e=>e.url?e:K({url:(0,d.createBlobURL)(e)}))):e;t&&!l.every(V)&&(u.removeAllNotices(),u.createErrorNotice((0,s.__)("If uploading to a gallery all files need to be image formats","coblocks"),{id:"gallery-upload-invalid-file"}));const o=l.filter((e=>e.url||V(e))).map((e=>e.url?e:K({url:(0,d.createBlobURL)(e)}))),n=o?.reduce(((e,t,l)=>(e[t.id]=l,e)),{}),i=t?z:z.filter((e=>o.find((t=>t.id===e.attributes.id)))),a=Array.from(e).reduce(((e,t)=>({...e?.mime?{}:e,[`${t.id}`]:t.caption})));i?.forEach((e=>{const t=a[e.attributes.id];e.attributes.caption!==t&&(e.attributes.caption=t)}));const p=o.filter((e=>!i.find((t=>e.id===t.attributes.id)))).map((e=>(0,m.createBlock)("core/image",{alt:e.alt,caption:e.caption,id:e.id,url:e.url})));x(c,(0,r.concat)(i,p).sort(((e,t)=>n[e.attributes.id]-n[t.attributes.id])))},value:G?O:{}}),q=(0,p.useBlockProps)({className:i()(n,{[`has-filter-${v}`]:"none"!==v,[`has-border-radius-${S}`]:S>0})});return(0,o.createElement)(o.Fragment,null,_&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(C,{...e,innerBlocks:O}),(0,o.createElement)(X,{...e})),f,(0,o.createElement)(A.Z,{...l},(0,o.createElement)(N,{...e,blockProps:q,images:O,insertBlocksAfter:h,mediaPlaceholder:H,wrapperClass:"masonry-grid"})))}))}}]);