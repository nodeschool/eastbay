(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(t,e,r){"use strict";r("OGtf")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},"3XHS":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=(r("0mN4"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("DNiP"),r("wx14")),i=r("Ff2n"),p=r("rePB"),c=(r("17x9"),r("iuhU")),l=r("H2TA");function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}var u=o.a.forwardRef((function(t,e){var r=t.classes,n=t.className,p=t.component,l=void 0===p?"div":p,u=t.disableGutters,d=void 0!==u&&u,m=t.fixed,f=void 0!==m&&m,h=t.maxWidth,y=void 0===h?"lg":h,g=Object(i.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.a.createElement(l,Object(a.a)({className:Object(c.a)(r.root,n,f&&r.fixed,d&&r.disableGutters,!1!==y&&r["maxWidth".concat(s(String(y)))]),ref:e},g))})),d=Object(l.a)((function(t){var e;return{root:(e={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},Object(p.a)(e,t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),Object(p.a)(e,t.breakpoints.up("md"),{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}),e),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:n}),e}),{}),maxWidthXs:Object(p.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(p.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(p.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(p.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(p.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},f=o.a.forwardRef((function(t,e){var r=t.align,n=void 0===r?"inherit":r,p=t.classes,l=t.className,u=t.color,d=void 0===u?"initial":u,f=t.component,h=t.display,y=void 0===h?"initial":h,g=t.gutterBottom,b=void 0!==g&&g,v=t.noWrap,x=void 0!==v&&v,w=t.paragraph,O=void 0!==w&&w,j=t.variant,S=void 0===j?"body1":j,k=t.variantMapping,E=void 0===k?m:k,W=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),A=f||(O?"p":E[S]||m[S])||"span";return o.a.createElement(A,Object(a.a)({className:Object(c.a)(p.root,l,"inherit"!==S&&p[S],"initial"!==d&&p["color".concat(s(d))],x&&p.noWrap,b&&p.gutterBottom,O&&p.paragraph,"inherit"!==n&&p["align".concat(s(n))],"initial"!==y&&p["display".concat(s(y))]),ref:e},W))})),h=Object(l.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(f),y=(r("V+eJ"),r("8+KV"),r("KQm4")),g=r("2+6g");var b=function(t,e){return e?Object(g.a)(t,e,{clone:!1}):t};var v=function(t){var e=function(e){var r=t(e);return e.css?Object(a.a)({},b(r,t(Object(a.a)({theme:e.theme},e.css))),{},function(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}(e.css,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css"].concat(Object(y.a)(t.filterProps)),e};var x=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce((function(e,r){var n=r(t);return n?b(e,n):e}),{})};return n.propTypes={},n.filterProps=e.reduce((function(t,e){return t.concat(e.filterProps)}),[]),n},w=(r("LK8F"),r("KKXr"),r("U8pU")),O={xs:0,sm:600,md:960,lg:1280,xl:1920},j={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(O[t],"px)")}};function S(t,e,r){if(Array.isArray(e)){var n=t.theme.breakpoints||j;return e.reduce((function(t,o,a){return t[n.up(n.keys[a])]=r(e[a]),t}),{})}if("object"===Object(w.a)(e)){var o=t.theme.breakpoints||j;return Object.keys(e).reduce((function(t,n){return t[o.up(n)]=r(e[n]),t}),{})}return r(e)}function k(t,e){return e&&"string"==typeof e?e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:null}),t):null}var E=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,o=t.themeKey,a=t.transform,i=function(t){if(null==t[e])return null;var r=t[e],i=k(t.theme,o)||{};return S(t,r,(function(t){var e;return"function"==typeof i?e=i(t):Array.isArray(i)?e=i[t]||t:(e=k(i,t)||t,a&&(e=a(e))),!1===n?e:Object(p.a)({},n,e)}))};return i.propTypes={},i.filterProps=[e],i};function W(t){return"number"!=typeof t?t:"".concat(t,"px solid")}var A=x(E({prop:"border",themeKey:"borders",transform:W}),E({prop:"borderTop",themeKey:"borders",transform:W}),E({prop:"borderRight",themeKey:"borders",transform:W}),E({prop:"borderBottom",themeKey:"borders",transform:W}),E({prop:"borderLeft",themeKey:"borders",transform:W}),E({prop:"borderColor",themeKey:"palette"}),E({prop:"borderRadius",themeKey:"shape"})),B=x(E({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),E({prop:"display"}),E({prop:"overflow"}),E({prop:"textOverflow"}),E({prop:"visibility"}),E({prop:"whiteSpace"})),T=x(E({prop:"flexBasis"}),E({prop:"flexDirection"}),E({prop:"flexWrap"}),E({prop:"justifyContent"}),E({prop:"alignItems"}),E({prop:"alignContent"}),E({prop:"order"}),E({prop:"flex"}),E({prop:"flexGrow"}),E({prop:"flexShrink"}),E({prop:"alignSelf"}),E({prop:"justifyItems"}),E({prop:"justifySelf"})),R=x(E({prop:"position"}),E({prop:"zIndex",themeKey:"zIndex"}),E({prop:"top"}),E({prop:"right"}),E({prop:"bottom"}),E({prop:"left"})),K=x(E({prop:"color",themeKey:"palette"}),E({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),z=E({prop:"boxShadow",themeKey:"shadows"});function N(t){return t<=1?"".concat(100*t,"%"):t}var P=E({prop:"width",transform:N}),L=E({prop:"maxWidth",transform:N}),C=E({prop:"minWidth",transform:N}),I=E({prop:"height",transform:N}),M=E({prop:"maxHeight",transform:N}),V=E({prop:"minHeight",transform:N}),D=(E({prop:"size",cssProperty:"width",transform:N}),E({prop:"size",cssProperty:"height",transform:N}),x(P,L,C,I,M,V));r("bWfx");function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,p=t[Symbol.iterator]();!(n=(i=p.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==p.return||p.return()}finally{if(o)throw a}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F,X,H={m:"margin",p:"padding"},U={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Y={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},J=(F=function(t){if(t.length>2){if(!Y[t])return[t];t=Y[t]}var e=G(t.split(""),2),r=e[0],n=e[1],o=H[r],a=U[n]||"";return Array.isArray(a)?a.map((function(t){return o+t})):[o+a]},X={},function(t){return void 0===X[t]&&(X[t]=F(t)),X[t]}),q=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function Q(t,e){return function(r){return t.reduce((function(t,n){return t[n]=function(t,e){if("string"==typeof e)return e;var r=t(Math.abs(e));return e>=0?r:"number"==typeof r?-r:"-".concat(r)}(e,r),t}),{})}}function $(t){var e=function(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}(t.theme);return Object.keys(t).map((function(r){if(-1===q.indexOf(r))return null;var n=Q(J(r),e),o=t[r];return S(t,o,n)})).reduce(b,{})}$.propTypes={},$.filterProps=q;var Z=$,_=x(E({prop:"fontFamily",themeKey:"typography"}),E({prop:"fontSize",themeKey:"typography"}),E({prop:"fontStyle",themeKey:"typography"}),E({prop:"fontWeight",themeKey:"typography"}),E({prop:"letterSpacing"}),E({prop:"lineHeight"}),E({prop:"textAlign"})),tt=r("/P46"),et=r("cNwE"),rt=function(t){var e=Object(tt.a)(t);return function(t,r){return e(t,Object(a.a)({defaultTheme:et.a},r))}},nt=v(x(A,B,T,R,K,z,D,Z,_)),ot=rt("div")(nt,{name:"MuiBox"}),at=r("i8i4"),it=r.n(at),pt=!0,ct=!1,lt=null,st={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ut(t){t.metaKey||t.altKey||t.ctrlKey||(pt=!0)}function dt(){pt=!1}function mt(){"hidden"===this.visibilityState&&ct&&(pt=!0)}function ft(t){var e,r,n,o=t.target;try{return o.matches(":focus-visible")}catch(a){}return pt||(r=(e=o).type,!("INPUT"!==(n=e.tagName)||!st[r]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable)}function ht(){ct=!0,window.clearTimeout(lt),lt=window.setTimeout((function(){ct=!1}),100)}function yt(){return{isFocusVisible:ft,onBlurVisible:ht,ref:o.a.useCallback((function(t){var e,r=it.a.findDOMNode(t);null!=r&&((e=r.ownerDocument).addEventListener("keydown",ut,!0),e.addEventListener("mousedown",dt,!0),e.addEventListener("pointerdown",dt,!0),e.addEventListener("touchstart",dt,!0),e.addEventListener("visibilitychange",mt,!0))}),[])}}function gt(t,e){"function"==typeof t?t(e):t&&(t.current=e)}var bt=o.a.forwardRef((function(t,e){var r,n,p=t.classes,l=t.className,u=t.color,d=void 0===u?"primary":u,m=t.component,f=void 0===m?"a":m,y=t.onBlur,g=t.onFocus,b=t.TypographyClasses,v=t.underline,x=void 0===v?"hover":v,w=t.variant,O=void 0===w?"inherit":w,j=Object(i.a)(t,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=yt(),k=S.isFocusVisible,E=S.onBlurVisible,W=S.ref,A=o.a.useState(!1),B=A[0],T=A[1],R=(r=e,n=W,o.a.useMemo((function(){return null==r&&null==n?null:function(t){gt(r,t),gt(n,t)}}),[r,n]));return o.a.createElement(h,Object(a.a)({className:Object(c.a)(p.root,p["underline".concat(s(x))],l,B&&p.focusVisible,{button:p.button}[f]),classes:b,color:d,component:f,onBlur:function(t){B&&(E(),T(!1)),y&&y(t)},onFocus:function(t){k(t)&&T(!0),g&&g(t)},ref:R,variant:O},j))})),vt=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(bt),xt=r("RD7I");var wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(xt.a)(t,Object(a.a)({defaultTheme:et.a},e))},Ot=o.a.forwardRef((function(t,e){var r=t.children,n=t.classes,p=t.className,l=t.color,u=void 0===l?"inherit":l,d=t.component,m=void 0===d?"svg":d,f=t.fontSize,h=void 0===f?"default":f,y=t.htmlColor,g=t.titleAccess,b=t.viewBox,v=void 0===b?"0 0 24 24":b,x=Object(i.a)(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.a.createElement(m,Object(a.a)({className:Object(c.a)(n.root,p,"inherit"!==u&&n["color".concat(s(u))],"default"!==h&&n["fontSize".concat(s(h))]),focusable:"false",viewBox:v,color:y,"aria-hidden":g?null:"true",role:g?"img":"presentation",ref:e},x),r,g?o.a.createElement("title",null,g):null)}));Ot.muiName="SvgIcon";var jt=Object(l.a)((function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(Ot);function St(t){return o.a.createElement(jt,t,o.a.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}var kt=wt((function(t){return{root:{margin:t.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:t.spacing(1)}}}));function Et(){var t=kt();return o.a.createElement(h,{className:t.root,color:"textSecondary"},o.a.createElement(St,{className:t.lightBulb}),"Pro tip: See more"," ",o.a.createElement(vt,{href:"https://material-ui.com/getting-started/templates/"},"templates")," on the Material-UI documentation.")}r("91GP");var Wt=r("Wbzz"),At=o.a.forwardRef((function(t,e){return o.a.createElement(vt,Object.assign({component:Wt.a,ref:e},t))}));function Bt(){return o.a.createElement(h,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",o.a.createElement(vt,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}function Tt(){return o.a.createElement(d,{maxWidth:"sm"},o.a.createElement(ot,{my:4},o.a.createElement(h,{variant:"h4",component:"h1",gutterBottom:!0},"Gatsby v4-beta example"),o.a.createElement(At,{to:"/"},"Go to the main page"),o.a.createElement(Et,null),o.a.createElement(Bt,null)))}r.d(e,"default",(function(){return Tt}))}}]);
//# sourceMappingURL=component---src-pages-about-js-4c7bfe2cfe57c3200cea.js.map