import{_ as Ae}from"./AuthenticatedLayout.5636ebae.js";import{s as k,o as u,c as v,w as H,T as $e,a,r as P,k as w,t as L,x as q,y as he,f as Be,e as G,h as Y,z as He,v as J,F as Z,A as te,L as Re,H as Ee,g as B,d as y}from"./app.87c0dd1b.js";import{_ as Fe}from"./PrimaryButton.196ac964.js";import{_ as Te}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.2ab183ff.js";class Me{constructor(e,n=()=>{}){this.element=e,this.listener=n}bindScrollListener(){this.scrollableParents=I.getScrollableParents(this.element);for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}class I{static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static getOuterWidth(e,n){if(e){let o=e.offsetWidth;if(n){let l=getComputedStyle(e);o+=parseFloat(l.marginLeft)+parseFloat(l.marginRight)}return o}return 0}static getOuterHeight(e,n){if(e){let o=e.offsetHeight;if(n){let l=getComputedStyle(e);o+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return o}return 0}static getClientHeight(e,n){if(e){let o=e.clientHeight;if(n){let l=getComputedStyle(e);o+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return o}return 0}static getViewport(){let e=window,n=document,o=n.documentElement,l=n.getElementsByTagName("body")[0];return{width:e.innerWidth||o.clientWidth||l.clientWidth,height:e.innerHeight||o.clientHeight||l.clientHeight}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getCurrentZIndex(){return this.zindex}static index(e){let n=e.parentNode.childNodes,o=0;for(var l=0;l<n.length;l++){if(n[l]===e)return o;n[l].nodeType===1&&o++}return-1}static addMultipleClasses(e,n){if(e.classList){let o=n.split(" ");for(let l=0;l<o.length;l++)e.classList.add(o[l])}else{let o=n.split(" ");for(let l=0;l<o.length;l++)e.className+=" "+o[l]}}static addClass(e,n){e.classList?e.classList.add(n):e.className+=" "+n}static removeClass(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")}static hasClass(e,n){return!!e&&(e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className))}static find(e,n){return e.querySelectorAll(n)}static findSingle(e,n){return e.querySelector(n)}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static absolutePosition(e,n){let o,l,i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,h=i.width,c=n.offsetHeight,g=n.offsetWidth,p=n.getBoundingClientRect(),_=this.getWindowScrollTop(),z=this.getWindowScrollLeft(),m=this.getViewport();p.top+c+r>m.height?(o=p.top+_-r,e.style.transformOrigin="bottom",o<0&&(o=_)):(o=c+p.top+_,e.style.transformOrigin="top"),l=p.left+h>m.width?Math.max(0,p.left+z+g-h):p.left+z,e.style.top=o+"px",e.style.left=l+"px"}static relativePosition(e,n,o){let l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e);const i=n.offsetHeight,r=n.getBoundingClientRect(),h=this.getViewport();let c,g;r.top+i+l.height>h.height?o?(e.style.bottom=o.offsetHeight+"px",e.style.transformOrigin="bottom"):(c=-1*l.height,e.style.transformOrigin="bottom",r.top+c<0&&(c=-1*r.top)):(e.style.top=i+"px",e.style.transformOrigin="top"),g=l.width>h.width?-1*r.left:r.left+l.width>h.width?-1*(r.left+l.width-h.width):0,e.style.left=g+"px"}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e);const l=/(auto|scroll)/,i=r=>{let h=window.getComputedStyle(r,null);return l.test(h.getPropertyValue("overflow"))||l.test(h.getPropertyValue("overflowX"))||l.test(h.getPropertyValue("overflowY"))};for(let r of o){let h=r.nodeType===1&&r.dataset.scrollselectors;if(h){let c=h.split(",");for(let g of c){let p=this.findSingle(r,g);p&&i(p)&&n.push(p)}}}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){var n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static fadeIn(e,n){e.style.opacity=0;var o=+new Date,l=0,i=function(){l=+e.style.opacity+(new Date().getTime()-o)/n,e.style.opacity=l,o=+new Date,+l<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}static fadeOut(e,n){var o=1,l=50/n;let i=setInterval(()=>{(o-=l)<=0&&(o=0,clearInterval(i)),e.style.opacity=o},50)}static getUserAgent(){return navigator.userAgent}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n.el&&n.elElement)n.elElement.appendChild(e);else{if(!n.el||!n.el.nativeElement)throw new Error("Cannot append "+n+" to "+e);n.el.nativeElement.appendChild(e)}}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),l=o?parseFloat(o):0,i=getComputedStyle(e).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,h=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-l-r,g=e.scrollTop,p=e.clientHeight,_=this.getOuterHeight(n);c<0?e.scrollTop=g+c:c+_>p&&(e.scrollTop=g+c-p+_)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="lv-scrollbar-measure",document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isVisible(e){return e.offsetParent!=null}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static getFocusableElements(e){let n=I.find(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`),o=[];for(let l of n)getComputedStyle(l).display!="none"&&getComputedStyle(l).visibility!="hidden"&&o.push(l);return o}static isClickable(e){const n=e.nodeName,o=e.parentElement&&e.parentElement.nodeName;return n=="INPUT"||n=="BUTTON"||n=="A"||o=="INPUT"||o=="BUTTON"||o=="A"||this.hasClass(e,"lv-button")||this.hasClass(e.parentElement,"lv-button")||this.hasClass(e.parentElement,"lv-checkbox")||this.hasClass(e.parentElement,"lv-radiobutton")}}var me={props:["value"],emits:["input","update:modelValue"],computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value}},methods:{updateValue(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}},Oe={data:()=>({popstateEvent:null}),methods:{preventPopstate(){window.history.pushState({id:2},null,null),window.addEventListener("popstate",this.handleOnPopstate),this.popstateEvent=!0},handleOnPopstate(){window.removeEventListener("popstate",null),this.popstateEvent=null,this.handleOnBrowserBack&&this.handleOnBrowserBack()},manuallyClosePopstate(){this.popstateEvent&&(this.$router&&this.$router.go(-1),window.removeEventListener("popstate",null),this.popstateEvent=null)}}},_e={name:"LvOverlaypanel",mixins:[Oe],props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},alignRight:{type:Boolean,default:!1},closeOnResize:{type:Boolean,default:!1}},data:()=>({visible:!1}),selfClick:!1,target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,beforeDestroy(){this.onBeforeUnmount()},beforeUnmount(){this.onBeforeUnmount()},methods:{handleOnBrowserBack(){this.visible===!0&&this.hide()},toggle(t,e){let n=t?t.currentTarget:e;this.visible?this.hide():this.show(n)},show(t){this.visible=!0,this.target=t,this.preventPopstate()},hide(){this.visible=!1,this.manuallyClosePopstate()},onContentClick(){this.selfClick=!0},onEnter(){this.appendContainer(),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.closeOnResize&&(this.bindScrollListener(),this.bindResizeListener()),this.autoZIndex&&(this.$refs.overlayRef.style.zIndex=String(this.baseZIndex+I.generateZIndex()))},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},alignOverlay(){I.absolutePosition(this.$refs.overlayRef,this.target);const t=I.getOffset(this.$refs.overlayRef),e=I.getOffset(this.target);let n=0;if(t.left<e.left&&(n=e.left-t.left),this.$refs.overlayRef.style.setProperty("--overlay-arrow-left",`${n}px`),this.$refs.overlayRef.style.setProperty("--overlay-arrow-pos","calc(var(--overlay-arrow-left, 0) + 1.25rem)"),t.top<e.top&&I.addClass(this.$refs.overlayRef,"--flipped"),this.alignRight){let o=this.target.getBoundingClientRect().right-this.target.getBoundingClientRect().left,l=this.$refs.overlayRef.getBoundingClientRect().right-this.$refs.overlayRef.getBoundingClientRect().left;this.$refs.overlayRef.style.left=e.left-(l-o)+"px",this.$refs.overlayRef.style.setProperty("--overlay-arrow-pos","calc(100% - 40px)")}},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{!this.visible||this.selfClick||this.isTargetClicked(t)||this.hide(),this.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Me(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},appendContainer(){this.appendTo&&(this.appendTo==="body"?document.body.appendChild(this.$refs.overlayRef):document.getElementById(this.appendTo).appendChild(this.$refs.overlayRef))},restoreAppend(){this.$refs.overlayRef&&this.appendTo&&(this.appendTo==="body"?document.body.removeChild(this.$refs.overlayRef):document.getElementById(this.appendTo).removeChild(this.$refs.overlayRef))},onBeforeUnmount(){this.restoreAppend(),this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.target=null}}};const Ie={key:0,class:"lv-overlaypanel lv-component",ref:"overlayRef"};(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}})(`.lv-overlaypanel {
  position: absolute;
  margin-top: 10px; }
  .lv-overlaypanel:after, .lv-overlaypanel:before {
    /* Pointing Arrow */
    position: absolute;
    left: var(--overlay-arrow-pos);
    bottom: 100%;
    content: ' ';
    height: 0;
    width: 0;
    pointer-events: none; }
  .lv-overlaypanel.--flipped {
    margin-top: 0;
    margin-bottom: 10px; }
    .lv-overlaypanel.--flipped:after, .lv-overlaypanel.--flipped:before {
      bottom: auto;
      top: 100%;
      border-bottom-color: transparent; }
  .lv-overlaypanel .lv-overlaypanel__close-btn {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%); }
    .lv-overlaypanel .lv-overlaypanel__close-btn.--right-align {
      transform: translate(-50%, -50%);
      left: 0px; }

/* Animation */
.lv-overlaypanel__transition-enter-from {
  opacity: 0;
  transform: scaleY(0.8); }

.lv-overlaypanel__transition-leave-to {
  opacity: 0; }

.lv-overlaypanel__transition-enter-active {
  transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1); }

.lv-overlaypanel__transition-leave-active {
  transition: opacity 0.1s linear; }

.lv-overlaypanel {
  background: #ffffff;
  border: 0 none;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }
  .lv-overlaypanel:after, .lv-overlaypanel:before {
    border: 10px solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff; }
  .lv-overlaypanel.--flipped:after, .lv-overlaypanel.--flipped:before {
    border-top-color: #ffffff; }
  .lv-overlaypanel .lv-overlaypanel__content {
    padding: 1rem; }
`),_e.render=function(t,e,n,o,l,i){const r=k("LvButton");return u(),v($e,{name:"lv-overlaypanel__transition",onEnter:i.onEnter,onLeave:i.onLeave},{default:H(()=>[l.visible?(u(),v("div",Ie,[a("div",{class:"lv-overlaypanel__content",onClick:e[1]||(e[1]=(...h)=>i.onContentClick&&i.onContentClick(...h))},[P(t.$slots,"default")]),n.showCloseIcon?(u(),v(r,{key:0,class:{"lv-overlaypanel__close-btn":!0,"--right-align":n.alignRight},icon:"light-icon-x",rounded:"",onClick:i.hide,"aria-label":n.ariaCloseLabel,type:"button"},null,8,["class","onClick","aria-label"])):w("",!0)],512)):w("",!0)]),_:1},8,["onEnter","onLeave"])};var ne={name:"Input",inheritAttrs:!1,props:{value:{type:[String,Number],default:null},label:{type:String,default:null},name:{type:String},helpText:{type:String,default:""},editable:{type:Boolean,default:!0},placeholderColor:{type:String,default:"rgba(0, 0, 0, 0.3)"},floatingLabel:{type:Boolean,default:!1},bottomBar:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},iconLeft:{type:String,default:""},iconRight:{type:String,default:""},clearable:{type:Boolean,default:!1},showInputSpinner:{type:Boolean,default:!1}},computed:{modelValue(){return this.value?this.value:this.$attrs.modelValue?this.$attrs.modelValue:null},listeners(){return this.$listeners?{...this.$listeners,input:t=>this.inputEventHandler(t)}:{}},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}},methods:{inputEventHandler(t){this.$emit("input-native",t),this.updateValue(t.target.value)},updateValue(t){this.$emit("input",t),this.$emit("update:modelValue",t)},handleClear(){this.updateValue(""),this.$emit("clear")}}};const De={key:0,class:"lv-input__prepend"},Ne={key:0,class:"lv-input__icon"},Pe={key:2,class:"lv-input__default"},Ue={class:"lv-hidden-accessible"},We={key:3,class:"lv-input__append"},je=a("i",{class:"light-icon-x"},null,-1),qe={key:0,class:"lv-input__icon"},Xe={key:0,class:"lv-input__help"};(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}})(`.lv-input__field {
  width: 100%;
  display: flex;
  align-items: stretch;
  position: relative; }
  .lv-input__field .lv-input__element {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: inherit; }
  .lv-input__field .lv-input__default {
    flex-grow: 1; }
  .lv-input__field .lv-input__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #495057; }
  .lv-input__field .lv-input__append {
    padding-left: 12px;
    margin-right: -12px;
    display: flex; }
    .lv-input__field .lv-input__append .lv-input__icon {
      padding-right: 12px; }
  .lv-input__field .lv-input__prepend {
    padding-right: 12px;
    margin-left: -12px;
    display: flex; }
    .lv-input__field .lv-input__prepend .lv-input__icon {
      padding-left: 12px; }

.lv-input__label {
  margin-bottom: 8px;
  font-weight: 500; }

.lv-input__help {
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.8; }

.lv-input__group {
  position: relative; }
  .lv-input__group.--with-floating-label .lv-input__label {
    position: absolute;
    top: 8px;
    font-weight: 300;
    z-index: 1;
    left: 12px;
    transition: all 0.2s ease;
    will-change: font-size, top, color; }
  .lv-input__group.--with-floating-label .lv-input__element::-webkit-input-placeholder {
    color: transparent !important; }
  .lv-input__group.--with-floating-label .lv-input__element:-moz-placeholder {
    /* Firefox 18- */
    color: transparent !important; }
  .lv-input__group.--with-floating-label .lv-input__element::-moz-placeholder {
    /* Firefox 19+ */
    color: transparent !important; }
  .lv-input__group.--with-floating-label .lv-input__element:-ms-input-placeholder {
    color: transparent !important; }
  .lv-input__group.--with-floating-label:focus-within .lv-input__label, .lv-input__group.--with-floating-label.--not-empty .lv-input__label {
    top: -18px;
    font-size: 10px;
    color: #38b2ab;
    font-weight: 600; }
  .lv-input__group.--with-floating-label .lv-input__field {
    margin-top: 20px; }
  .lv-input__group.--with-bottom-bar .lv-input__field {
    overflow: hidden; }
    .lv-input__group.--with-bottom-bar .lv-input__field::after {
      bottom: 0px;
      content: '';
      height: 2px;
      left: 50%;
      background-color: #38b2ab;
      position: absolute;
      transition: all 0.2s ease;
      width: 0;
      will-change: width, left; }
    .lv-input__group.--with-bottom-bar .lv-input__field:focus-within {
      box-shadow: none; }
      .lv-input__group.--with-bottom-bar .lv-input__field:focus-within::after {
        left: 0%;
        width: 100%; }
  .lv-input__group .lv-input__field {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1rem;
    color: #495057;
    background: #edf2f7;
    padding: 0px 12px;
    border: none;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, border-radius 0.3s;
    appearance: none;
    border-radius: 5px; }
    .lv-input__group .lv-input__field:focus-within {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 3px rgba(218, 225, 231, 0.8);
      /* border: 2px solid #e1e7ec; */ }
    .lv-input__group .lv-input__field .lv-input__element {
      padding: 10px 0px; }
      .lv-input__group .lv-input__field .lv-input__element::placeholder {
        color: var(--placeholder-color); }
      .lv-input__group .lv-input__field .lv-input__element:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #edf2f7 inset; }
    .lv-input__group .lv-input__field .lv-input__default {
      padding: 10px 0px; }
    .lv-input__group .lv-input__field .lv-input__prepend > * {
      border-radius: 5px 0px 0px 5px; }
    .lv-input__group .lv-input__field .lv-input__append > * {
      border-radius: 0px 5px 5px 0px; }
    .lv-input__group .lv-input__field.--rounded {
      border-radius: 30px; }
      .lv-input__group .lv-input__field.--rounded .lv-input__prepend > * {
        border-radius: 30px 0px 0px 30px; }
      .lv-input__group .lv-input__field.--rounded .lv-input__append > * {
        border-radius: 0px 30px 30px 0px; }
    .lv-input__group .lv-input__field:not(.--show-input-spinner) input[type='number'] {
      -moz-appearance: textfield; }
      .lv-input__group .lv-input__field:not(.--show-input-spinner) input[type='number']::-webkit-outer-spin-button, .lv-input__group .lv-input__field:not(.--show-input-spinner) input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; }
    .lv-input__group .lv-input__field .lv-input__help {
      padding-left: 12px; }
    .lv-input__group .lv-input__field .lv-input-field:hover {
      /* border-color: #2196F3; */ }
    .lv-input__group .lv-input__field .lv-input-field.lv-error,
    .lv-input__group .lv-input__field .lv-input-field.lv-invalid {
      border-color: #f44336; }
    .lv-input__group .lv-input__field .lv-input-field.lv-input-field-sm {
      font-size: 0.875rem;
      padding: 0.4375rem 0.4375rem; }
    .lv-input__group .lv-input__field .lv-input-field.lv-input-field-lg {
      font-size: 1.25rem;
      padding: 0.625rem 0.625rem; }
    .lv-input__group .lv-input__field .lv-input-field-sm .lv-input-field {
      font-size: 0.875rem;
      padding: 0.4375rem 0.4375rem; }
    .lv-input__group .lv-input__field .lv-input-field-lg .lv-input-field {
      font-size: 1.25rem;
      padding: 0.625rem 0.625rem; }

.lv-hidden {
  display: none; }

.lv-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }
  .lv-hidden-accessible input,
  .lv-hidden-accessible select {
    transform: scale(0); }
`),ne.render=function(t,e,n,o,l,i){return u(),v("div",{class:["lv-input__group",{"--with-floating-label":n.floatingLabel},{"--not-empty":i.filled},{"--with-bottom-bar":n.floatingLabel||n.bottomBar}]},[a("label",{for:n.name},[n.label?(u(),v("div",{key:0,class:"lv-input__label",for:n.name},L(n.label),9,["for"])):w("",!0)],8,["for"]),a("div",{class:["lv-input__field",{"--rounded":n.rounded},{"--show-input-spinner":n.showInputSpinner}],style:`--placeholder-color: ${n.placeholderColor}`},[t.$slots.prepend||n.iconLeft?(u(),v("div",De,[P(t.$slots,"prepend",{},()=>[n.iconLeft?(u(),v("div",Ne,[a("i",{class:n.iconLeft},null,2)])):w("",!0)])])):w("",!0),n.editable?(u(),v("input",q({key:1,class:"lv-input__element",value:i.modelValue},t.$attrs,he(i.listeners),{onInput:e[1]||(e[1]=(...r)=>this.inputEventHandler&&this.inputEventHandler(...r)),name:n.name,id:n.name}),null,16,["value","name","id"])):(u(),v("div",Pe,[P(t.$slots,"default",{},()=>[G(L(i.modelValue||t.$attrs.placeholder),1)]),a("div",Ue,[a("input",q({type:"text",readonly:"",value:i.modelValue},t.$attrs,he(i.listeners),{name:n.name}),null,16,["value","name"])])])),t.$slots.append||n.iconRight||n.clearable?(u(),v("div",We,[n.clearable&&i.filled?(u(),v("div",{key:0,class:"lv-input__icon",style:{cursor:"pointer"},onClick:e[2]||(e[2]=Be((...r)=>i.handleClear&&i.handleClear(...r),["stop"]))},[je])):w("",!0),P(t.$slots,"append",{},()=>[n.iconRight?(u(),v("div",qe,[a("i",{class:n.iconRight},null,2)])):w("",!0)])])):w("",!0)],6),n.helpText?(u(),v("div",Xe,L(n.helpText),1)):w("",!0)],2)};var Ye=/^\s+/,Ze=/\s+$/,Ke=0,f=Math.round,R=Math.min,E=Math.max,re=Math.random;function d(t,e){if(e=e||{},(t=t||"")instanceof d)return t;if(!(this instanceof d))return new d(t,e);var n=function(o){var l={r:0,g:0,b:0},i=1,r=null,h=null,c=null,g=!1,p=!1;typeof o=="string"&&(o=function(b){b=b.replace(Ye,"").replace(Ze,"").toLowerCase();var s,x=!1;if(ce[b])b=ce[b],x=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(s=V.rgb.exec(b))?{r:s[1],g:s[2],b:s[3]}:(s=V.rgba.exec(b))?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=V.hsl.exec(b))?{h:s[1],s:s[2],l:s[3]}:(s=V.hsla.exec(b))?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=V.hsv.exec(b))?{h:s[1],s:s[2],v:s[3]}:(s=V.hsva.exec(b))?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=V.hex8.exec(b))?{r:S(s[1]),g:S(s[2]),b:S(s[3]),a:be(s[4]),format:x?"name":"hex8"}:(s=V.hex6.exec(b))?{r:S(s[1]),g:S(s[2]),b:S(s[3]),format:x?"name":"hex"}:(s=V.hex4.exec(b))?{r:S(s[1]+""+s[1]),g:S(s[2]+""+s[2]),b:S(s[3]+""+s[3]),a:be(s[4]+""+s[4]),format:x?"name":"hex8"}:(s=V.hex3.exec(b))?{r:S(s[1]+""+s[1]),g:S(s[2]+""+s[2]),b:S(s[3]+""+s[3]),format:x?"name":"hex"}:!1}(o)),typeof o=="object"&&(T(o.r)&&T(o.g)&&T(o.b)?(_=o.r,z=o.g,m=o.b,l={r:255*C(_,255),g:255*C(z,255),b:255*C(m,255)},g=!0,p=String(o.r).substr(-1)==="%"?"prgb":"rgb"):T(o.h)&&T(o.s)&&T(o.v)?(r=K(o.s),h=K(o.v),l=function(b,s,x){b=6*C(b,360),s=C(s,100),x=C(x,100);var W=Math.floor(b),j=b-W,$=x*(1-s),D=x*(1-j*s),M=x*(1-(1-j)*s),N=W%6;return{r:255*[x,D,$,$,M,x][N],g:255*[M,x,x,D,$,$][N],b:255*[$,$,M,x,x,D][N]}}(o.h,r,h),g=!0,p="hsv"):T(o.h)&&T(o.s)&&T(o.l)&&(r=K(o.s),c=K(o.l),l=function(b,s,x){var W,j,$;function D(X,ie,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?X+6*(ie-X)*F:F<.5?ie:F<2/3?X+(ie-X)*(2/3-F)*6:X}if(b=C(b,360),s=C(s,100),x=C(x,100),s===0)W=j=$=x;else{var M=x<.5?x*(1+s):x+s-x*s,N=2*x-M;W=D(N,M,b+1/3),j=D(N,M,b),$=D(N,M,b-1/3)}return{r:255*W,g:255*j,b:255*$}}(o.h,r,c),g=!0,p="hsl"),o.hasOwnProperty("a")&&(i=o.a));var _,z,m;return i=ye(i),{ok:g,format:o.format||p,r:R(255,E(l.r,0)),g:R(255,E(l.g,0)),b:R(255,E(l.b,0)),a:i}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=f(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=f(this._r)),this._g<1&&(this._g=f(this._g)),this._b<1&&(this._b=f(this._b)),this._ok=n.ok,this._tc_id=Ke++}function pe(t,e,n){t=C(t,255),e=C(e,255),n=C(n,255);var o,l,i=E(t,e,n),r=R(t,e,n),h=(i+r)/2;if(i==r)o=l=0;else{var c=i-r;switch(l=h>.5?c/(2-i-r):c/(i+r),i){case t:o=(e-n)/c+(e<n?6:0);break;case e:o=(n-t)/c+2;break;case n:o=(t-e)/c+4}o/=6}return{h:o,s:l,l:h}}function fe(t,e,n){t=C(t,255),e=C(e,255),n=C(n,255);var o,l,i=E(t,e,n),r=R(t,e,n),h=i,c=i-r;if(l=i===0?0:c/i,i==r)o=0;else{switch(i){case t:o=(e-n)/c+(e<n?6:0);break;case e:o=(n-t)/c+2;break;case n:o=(t-e)/c+4}o/=6}return{h:o,s:l,v:h}}function ve(t,e,n,o){var l=[A(f(t).toString(16)),A(f(e).toString(16)),A(f(n).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function ge(t,e,n,o){return[A(xe(o)),A(f(t).toString(16)),A(f(e).toString(16)),A(f(n).toString(16))].join("")}function Ge(t,e){e=e===0?0:e||10;var n=d(t).toHsl();return n.s-=e/100,n.s=oe(n.s),d(n)}function Je(t,e){e=e===0?0:e||10;var n=d(t).toHsl();return n.s+=e/100,n.s=oe(n.s),d(n)}function Qe(t){return d(t).desaturate(100)}function et(t,e){e=e===0?0:e||10;var n=d(t).toHsl();return n.l+=e/100,n.l=oe(n.l),d(n)}function tt(t,e){e=e===0?0:e||10;var n=d(t).toRgb();return n.r=E(0,R(255,n.r-f(-e/100*255))),n.g=E(0,R(255,n.g-f(-e/100*255))),n.b=E(0,R(255,n.b-f(-e/100*255))),d(n)}function nt(t,e){e=e===0?0:e||10;var n=d(t).toHsl();return n.l-=e/100,n.l=oe(n.l),d(n)}function ot(t,e){var n=d(t).toHsl(),o=(n.h+e)%360;return n.h=o<0?360+o:o,d(n)}function lt(t){var e=d(t).toHsl();return e.h=(e.h+180)%360,d(e)}function it(t){var e=d(t).toHsl(),n=e.h;return[d(t),d({h:(n+120)%360,s:e.s,l:e.l}),d({h:(n+240)%360,s:e.s,l:e.l})]}function rt(t){var e=d(t).toHsl(),n=e.h;return[d(t),d({h:(n+90)%360,s:e.s,l:e.l}),d({h:(n+180)%360,s:e.s,l:e.l}),d({h:(n+270)%360,s:e.s,l:e.l})]}function at(t){var e=d(t).toHsl(),n=e.h;return[d(t),d({h:(n+72)%360,s:e.s,l:e.l}),d({h:(n+216)%360,s:e.s,l:e.l})]}function st(t,e,n){e=e||6,n=n||30;var o=d(t).toHsl(),l=360/n,i=[d(t)];for(o.h=(o.h-(l*e>>1)+720)%360;--e;)o.h=(o.h+l)%360,i.push(d(o));return i}function dt(t,e){e=e||6;for(var n=d(t).toHsv(),o=n.h,l=n.s,i=n.v,r=[],h=1/e;e--;)r.push(d({h:o,s:l,v:i})),i=(i+h)%1;return r}d.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,o=this.toRgb();return t=o.r/255,e=o.g/255,n=o.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=ye(t),this._roundA=f(100*this._a)/100,this},toHsv:function(){var t=fe(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=fe(this._r,this._g,this._b),e=f(360*t.h),n=f(100*t.s),o=f(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+o+"%)":"hsva("+e+", "+n+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var t=pe(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=pe(this._r,this._g,this._b),e=f(360*t.h),n=f(100*t.s),o=f(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+o+"%)":"hsla("+e+", "+n+"%, "+o+"%, "+this._roundA+")"},toHex:function(t){return ve(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,o,l,i){var r=[A(f(e).toString(16)),A(f(n).toString(16)),A(f(o).toString(16)),A(xe(l))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)&&r[3].charAt(0)==r[3].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:f(this._r),g:f(this._g),b:f(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+f(this._r)+", "+f(this._g)+", "+f(this._b)+")":"rgba("+f(this._r)+", "+f(this._g)+", "+f(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:f(100*C(this._r,255))+"%",g:f(100*C(this._g,255))+"%",b:f(100*C(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+f(100*C(this._r,255))+"%, "+f(100*C(this._g,255))+"%, "+f(100*C(this._b,255))+"%)":"rgba("+f(100*C(this._r,255))+"%, "+f(100*C(this._g,255))+"%, "+f(100*C(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ht[ve(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+ge(this._r,this._g,this._b,this._a),n=e,o=this._gradientType?"GradientType = 1, ":"";if(t){var l=d(t);n="#"+ge(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,o=this._a<1&&this._a>=0;return e||!o||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return d(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(et,arguments)},brighten:function(){return this._applyModification(tt,arguments)},darken:function(){return this._applyModification(nt,arguments)},desaturate:function(){return this._applyModification(Ge,arguments)},saturate:function(){return this._applyModification(Je,arguments)},greyscale:function(){return this._applyModification(Qe,arguments)},spin:function(){return this._applyModification(ot,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(st,arguments)},complement:function(){return this._applyCombination(lt,arguments)},monochromatic:function(){return this._applyCombination(dt,arguments)},splitcomplement:function(){return this._applyCombination(at,arguments)},triad:function(){return this._applyCombination(it,arguments)},tetrad:function(){return this._applyCombination(rt,arguments)}},d.fromRatio=function(t,e){if(typeof t=="object"){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=o==="a"?t[o]:K(t[o]));t=n}return d(t,e)},d.equals=function(t,e){return!(!t||!e)&&d(t).toRgbString()==d(e).toRgbString()},d.random=function(){return d.fromRatio({r:re(),g:re(),b:re()})},d.mix=function(t,e,n){n=n===0?0:n||50;var o=d(t).toRgb(),l=d(e).toRgb(),i=n/100;return d({r:(l.r-o.r)*i+o.r,g:(l.g-o.g)*i+o.g,b:(l.b-o.b)*i+o.b,a:(l.a-o.a)*i+o.a})},d.readability=function(t,e){var n=d(t),o=d(e);return(Math.max(n.getLuminance(),o.getLuminance())+.05)/(Math.min(n.getLuminance(),o.getLuminance())+.05)},d.isReadable=function(t,e,n){var o,l,i=d.readability(t,e);switch(l=!1,(o=function(r){var h,c;return h=((r=r||{level:"AA",size:"small"}).level||"AA").toUpperCase(),c=(r.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),c!=="small"&&c!=="large"&&(c="small"),{level:h,size:c}}(n)).level+o.size){case"AAsmall":case"AAAlarge":l=i>=4.5;break;case"AAlarge":l=i>=3;break;case"AAAsmall":l=i>=7}return l},d.mostReadable=function(t,e,n){var o,l,i,r,h=null,c=0;l=(n=n||{}).includeFallbackColors,i=n.level,r=n.size;for(var g=0;g<e.length;g++)(o=d.readability(t,e[g]))>c&&(c=o,h=d(e[g]));return d.isReadable(t,h,{level:i,size:r})||!l?h:(n.includeFallbackColors=!1,d.mostReadable(t,["#fff","#000"],n))};var ce=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ht=d.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(ce);function ye(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function C(t,e){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(t)&&(t="100%");var n=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(t);return t=R(e,E(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function oe(t){return R(1,E(0,t))}function S(t){return parseInt(t,16)}function A(t){return t.length==1?"0"+t:""+t}function K(t){return t<=1&&(t=100*t+"%"),t}function xe(t){return Math.round(255*parseFloat(t)).toString(16)}function be(t){return S(t)/255}var O,Q,ee,V=(Q="[\\s|\\(]+("+(O="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",ee="[\\s|\\(]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",{CSS_UNIT:new RegExp(O),rgb:new RegExp("rgb"+Q),rgba:new RegExp("rgba"+ee),hsl:new RegExp("hsl"+Q),hsla:new RegExp("hsla"+ee),hsv:new RegExp("hsv"+Q),hsva:new RegExp("hsva"+ee),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function T(t){return!!V.CSS_UNIT.exec(t)}function ae(t,e){var n,o=t&&t.a;!(n=t&&t.hsl?d(t.hsl):t&&t.hex&&t.hex.length>0?d(t.hex):t&&t.hsv?d(t.hsv):t&&t.rgba?d(t.rgba):t&&t.rgb?d(t.rgb):d(t))||n._a!==void 0&&n._a!==null||n.setAlpha(o||1);var l=n.toHsl(),i=n.toHsv();return l.s===0&&(i.h=l.h=t.h||t.hsl&&t.hsl.h||e||0),{hsl:l,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:i,oldHue:t.h||e||l.h,source:t.source,a:t.a||n.getAlpha()}}var ct={props:{value:{default:"#607c8a"}},data(){return{val:ae(this.value)}},computed:{colors:{get(){return this.val},set(t){this.val=t,this.$emit("input",t)}}},watch:{value(t){this.val=ae(t)}},methods:{colorChange(t,e){this.colors=ae(t,e||this.oldHue)},isValidHex:t=>d(t).isValid(),simpleCheckForValidColor(t){for(var e=["r","g","b","a","h","s","l","v"],n=0,o=0,l=0;l<e.length;l++){var i=e[l];t[i]&&(n++,isNaN(t[i])||o++)}if(n===o)return t},paletteUpperCase:t=>t.map(e=>e.toUpperCase()),isTransparent:t=>d(t).getAlpha()===0}};function se(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t}var we={name:"Saturation",props:{value:Object},computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value},colors(){return this.modelValue},bgColor(){return`hsl(${this.colors.hsv.h}, 100%, 50%)`},pointerTop(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft(){return 100*this.colors.hsv.s+"%"}},methods:{handleChange(t,e){!e&&t.preventDefault();var n=this.$refs.container;if(n){var o=n.clientWidth,l=n.clientHeight,i=n.getBoundingClientRect().left+window.pageXOffset,r=n.getBoundingClientRect().top+window.pageYOffset,h=t.pageX||(t.touches?t.touches[0].pageX:0),c=t.pageY||(t.touches?t.touches[0].pageY:0),g=se(h-i,0,o),p=se(c-r,0,l),_=g/o,z=se(-p/l+1,0,1),m=()=>{this.onChange({h:this.colors.hsv.h,s:_,v:z,a:this.colors.hsv.a,source:"hsva"})};window?window.requestAnimationFrame(m):m()}},onChange(t){this.$emit("change",t)},handleMouseDown(){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const ut=a("div",{class:"vc-saturation--white"},null,-1),pt=a("div",{class:"vc-saturation--black"},null,-1),ft=a("div",{class:"vc-saturation-circle"},null,-1);function U(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}U(`
.vc-saturation,
.vc-saturation--white,
.vc-saturation--black {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vc-saturation--white {
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}
.vc-saturation--black {
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}
.vc-saturation-pointer {
  cursor: pointer;
  position: absolute;
}
.vc-saturation-circle {
  cursor: head;
  width: 4px;
  height: 4px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  /* transform: translate(-2px, -2px); */
  transition: all 0.3s;
  opacity: 1;
  transform: scale(1) translate(-2px, -2px);
}
.vc-saturation-circle:hover {
  background-color: rgba(255, 255, 255, 0);
  opacity: 0.8;
  transform: scale(1.3) translate(-2px, -2px);
}
`),we.render=function(t,e,n,o,l,i){return u(),v("div",{class:"vc-saturation",style:{background:i.bgColor},ref:"container",onMousedown:e[1]||(e[1]=(...r)=>i.handleMouseDown&&i.handleMouseDown(...r)),onTouchmove:e[2]||(e[2]=(...r)=>i.handleChange&&i.handleChange(...r)),onTouchstart:e[3]||(e[3]=(...r)=>i.handleChange&&i.handleChange(...r))},[ut,pt,a("div",{class:"vc-saturation-pointer",style:{top:i.pointerTop,left:i.pointerLeft}},[ft],4)],36)};var Ce={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:()=>({oldHue:0,pullDirection:""}),computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value},colors(){return this.updatePullDirection(),this.modelValue},directionClass(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":100*this.colors.hsl.h/360+"%"}},methods:{updatePullDirection(){const t=this.modelValue.hsl.h;t!==0&&t-this.oldHue>0&&(this.pullDirection="right"),t!==0&&t-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=t},handleChange(t,e){!e&&t.preventDefault();var n=this.$refs.container;if(n){var o,l=n.clientWidth,i=n.clientHeight,r=n.getBoundingClientRect().left+window.pageXOffset,h=n.getBoundingClientRect().top+window.pageYOffset,c=(t.pageX||(t.touches?t.touches[0].pageX:0))-r,g=(t.pageY||(t.touches?t.touches[0].pageY:0))-h;this.direction==="vertical"?(o=g<0?360:g>i?0:360*(-100*g/i+100)/100,this.colors.hsl.h!==o&&this.$emit("change",{h:o,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(o=c<0?0:c>l?360:360*(100*c/l)/100,this.colors.hsl.h!==o&&this.$emit("change",{h:o,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const vt=a("div",{class:"vc-hue-picker"},null,-1);U(`
.vc-hue {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 2px;
}
.vc-hue--horizontal {
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue--vertical {
  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue-container {
  cursor: pointer;
  margin: 0 2px;
  position: relative;
  height: 100%;
}
.vc-hue-pointer {
  z-index: 2;
  position: absolute;
}
.vc-hue-picker {
  cursor: pointer;
  margin-top: 1px;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  background: #fff;
  transform: translateX(-2px);
}
`),Ce.render=function(t,e,n,o,l,i){return u(),v("div",{class:["vc-hue",i.directionClass]},[a("div",{class:"vc-hue-container",role:"slider","aria-valuenow":i.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360",ref:"container",onMousedown:e[1]||(e[1]=(...r)=>i.handleMouseDown&&i.handleMouseDown(...r)),onTouchmove:e[2]||(e[2]=(...r)=>i.handleChange&&i.handleChange(...r)),onTouchstart:e[3]||(e[3]=(...r)=>i.handleChange&&i.handleChange(...r))},[a("div",{class:"vc-hue-pointer",style:{top:i.pointerTop,left:i.pointerLeft},role:"presentation"},[vt],4)],40,["aria-valuenow"])],2)};let de={};var le={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle(){return{"background-image":"url("+gt(this.white,this.grey,this.size)+")"}}}};function gt(t,e,n){var o=t+","+e+","+n;if(de[o])return de[o];var l=function(i,r,h){if(typeof document>"u")return null;var c=document.createElement("canvas");c.width=c.height=2*h;var g=c.getContext("2d");return g?(g.fillStyle=i,g.fillRect(0,0,c.width,c.height),g.fillStyle=r,g.fillRect(0,0,h,h),g.translate(h,h),g.fillRect(0,0,h,h),c.toDataURL()):null}(t,e,n);return de[o]=l,l}U(`
.vc-checkerboard {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: contain;
}
`),le.render=function(t,e,n,o,l,i){return u(),v("div",{class:"vc-checkerboard",style:i.bgStyle},null,4)};var ke={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:le},computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value},colors(){return this.modelValue},gradientColor(){var t=this.colors.rgba,e=[t.r,t.g,t.b].join(",");return"linear-gradient(to right, rgba("+e+", 0) 0%, rgba("+e+", 1) 100%)"}},methods:{handleChange(t,e){!e&&t.preventDefault();var n=this.$refs.container;if(n){var o,l=n.clientWidth,i=n.getBoundingClientRect().left+window.pageXOffset,r=(t.pageX||(t.touches?t.touches[0].pageX:0))-i;o=r<0?0:r>l?1:Math.round(100*r/l)/100,this.colors.a!==o&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:o,source:"rgba"})}},handleMouseDown(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp(){this.unbindEventListeners()},unbindEventListeners(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}};const bt={class:"vc-alpha"},mt={class:"vc-alpha-checkboard-wrap"},_t=a("div",{class:"vc-alpha-picker"},null,-1);U(`
.vc-alpha {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-checkboard-wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}
.vc-alpha-gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-container {
  cursor: pointer;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 3px;
}
.vc-alpha-pointer {
  z-index: 2;
  position: absolute;
}
.vc-alpha-picker {
  cursor: pointer;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  background: #fff;
  margin-top: 1px;
  transform: translateX(-2px);
}
`),ke.render=function(t,e,n,o,l,i){const r=k("checkboard");return u(),v("div",bt,[a("div",mt,[a(r)]),a("div",{class:"vc-alpha-gradient",style:{background:i.gradientColor}},null,4),a("div",{class:"vc-alpha-container",ref:"container",onMousedown:e[1]||(e[1]=(...h)=>i.handleMouseDown&&i.handleMouseDown(...h)),onTouchmove:e[2]||(e[2]=(...h)=>i.handleChange&&i.handleChange(...h)),onTouchstart:e[3]||(e[3]=(...h)=>i.handleChange&&i.handleChange(...h))},[a("div",{class:"vc-alpha-pointer",style:{left:100*i.colors.a+"%"}},[_t],4)],544)])};var Le={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get(){return this.value},set(t){if(!(this.max!==void 0&&+t>this.max))return t;this.$refs.input.value=this.max}},labelId(){return`input__label__${this.label}__${Math.random().toString().slice(2,5)}`},labelSpanText(){return this.labelText||this.label}},methods:{update(t){this.handleChange(t.target.value)},handleChange(t){let e={};e[this.label]=t,(e.hex===void 0&&e["#"]===void 0||t.length>5)&&this.$emit("change",e)},handleKeyDown(t){let e=this.val,n=Number(e);if(n){let o=this.arrowOffset||1;t.keyCode===38&&(e=n+o,this.handleChange(e),t.preventDefault()),t.keyCode===40&&(e=n-o,this.handleChange(e),t.preventDefault())}}}};const yt={class:"vc-editable-input"},xt={class:"vc-input__desc"};U(`
.vc-editable-input {
  position: relative;
}
.vc-input__input {
  padding: 0;
  border: 0;
  outline: none;
}
.vc-input__label {
  text-transform: capitalize;
}
`),Le.render=function(t,e,n,o,l,i){return u(),v("div",yt,[Y(a("input",{"aria-labelledby":i.labelId,class:"vc-input__input","onUpdate:modelValue":e[1]||(e[1]=r=>i.val=r),onKeydown:e[2]||(e[2]=(...r)=>i.handleKeyDown&&i.handleKeyDown(...r)),onInput:e[3]||(e[3]=(...r)=>i.update&&i.update(...r)),ref:"input"},null,40,["aria-labelledby"]),[[He,i.val]]),a("span",{for:n.label,class:"vc-input__label",id:i.labelId},L(i.labelSpanText),9,["for","id"]),a("span",xt,L(n.desc),1)])};var Se={name:"Chrome",mixins:[me,ct],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:we,hue:Ce,alpha:ke,"ed-in":Le,checkboard:le},data:()=>({fieldsIndex:0,highlight:!1}),computed:{hsl(){const{h:t,s:e,l:n}=this.colors.hsl;return{h:t.toFixed(),s:`${(100*e).toFixed()}%`,l:`${(100*n).toFixed()}%`}},activeColor(){const t=this.colors.rgba;return"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"},hasAlpha(){return this.colors.a<1}},methods:{handleClick(t){this.updateValue(t),this.$emit("close")},childChange(t){this.colorChange(t),this.updateOverlayValue(this.colors,this.fieldsIndex)},inputChange(t){if(t){if(t.hex)this.isValidHex(t.hex)&&this.colorChange({hex:t.hex,source:"hex"});else if(t.r||t.g||t.b||t.a)this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"});else if(t.h||t.s||t.l){const e=t.s?t.s.replace("%","")/100:this.colors.hsl.s,n=t.l?t.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:t.h||this.colors.hsl.h,s:e,l:n,source:"hsl"})}this.updateOverlayValue(this.colors,this.fieldsIndex)}},toggleViews(){if(this.fieldsIndex>=2)return this.fieldsIndex=0,void this.updateOverlayValue(this.colors,this.fieldsIndex);this.fieldsIndex++,this.updateOverlayValue(this.colors,this.fieldsIndex)},showHighlight(){this.highlight=!0},hideHighlight(){this.highlight=!1},updateOverlayValue(t,e){let n=`${this.getColorString(t,e)}`;this.updateValue(n)},getColorString:(t,e)=>e==0?t.hex8.slice(7,9)==="FF"?`${t.hex8.slice(0,7)}`:`${t.hex8}`:e==1?t.rgba.a==1?`rgb(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b})`:`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${t.rgba.a})`:e==2?`hsla(${Math.floor(t.hsl.h)}, ${Math.floor(100*t.hsl.s)}%, ${Math.floor(100*t.hsl.l)}%, ${t.hsl.a})`:void 0}};const wt={class:"vc-chrome-saturation-wrap",style:{"border-radius":"2px"}},Ct={class:"vc-chrome-body"},kt={class:"vc-chrome-controls"},Lt={class:"vc-chrome-color-wrap"},St={class:"vc-chrome-sliders"},zt={class:"vc-chrome-hue-wrap"},Vt={key:0,class:"vc-chrome-alpha-wrap"},At={key:0,class:"vc-chrome-fields-wrap"},$t={class:"vc-chrome-fields"},Bt={class:"vc-chrome-field"},Ht={class:"vc-chrome-fields"},Rt={class:"vc-chrome-field"},Et={class:"vc-chrome-field"},Ft={class:"vc-chrome-field"},Tt={key:0,class:"vc-chrome-field"},Mt={class:"vc-chrome-fields"},Ot={class:"vc-chrome-field"},It={class:"vc-chrome-field"},Dt={class:"vc-chrome-field"},Nt={key:0,class:"vc-chrome-field"},Pt={class:"vc-chrome-toggle-icon"},Ut=a("path",{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"},null,-1),Wt={class:"vc-chrome-toggle-icon-highlight"},jt={key:0,class:"palette-container"};U(`
.vc-chrome {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
  box-sizing: initial;
  width: 225px;
  font-family: Menlo;
  background-color: #fff;
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4px;
  margin-top: 12px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24px;
  height: 28px;
  background: #eee;
  border-radius: 4px;
  top: 10px;
  left: 12px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10px;
  margin-bottom: 8px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-chrome-hue-wrap .vc-hue-picker,
.vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: solid 2px rgba(255, 255, 255, 0);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s;
  transform: translate(-6px, -2px) scale(1);
}
.vc-chrome-hue-wrap .vc-hue-picker:hover,
.vc-chrome-alpha-wrap .vc-alpha-picker:hover {
  transform: translate(-6px, -2px) scale(1.5);
  border: solid 2px rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.5);
}
.vc-chrome-body {
  padding: 16px 16px 12px;
  background-color: #fff;
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-chrome-fields .vc-input__input {
  font-size: 11px;
  color: #333;
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #dadada;
  height: 21px;
  text-align: center;
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  color: #969696;
  text-align: center;
  display: block;
  margin-top: 12px;
}
.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18px;
  height: 18px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4px;
  margin-bottom: 4px;
}
.palette-container {
  border-top: 1px solid rgba(100, 100, 100, 0.4);
  padding: 8px 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
`),Se.render=function(t,e,n,o,l,i){const r=k("saturation"),h=k("checkboard"),c=k("hue"),g=k("alpha"),p=k("ed-in");return u(),v("div",{role:"application","aria-label":"Chrome color picker",class:["vc-chrome",n.disableAlpha?"vc-chrome__disable-alpha":""],style:{"box-shadow":"none"}},[a("div",wt,[a(r,{modelValue:t.colors,"onUpdate:modelValue":e[1]||(e[1]=_=>t.colors=_),onChange:i.childChange},null,8,["modelValue","onChange"])]),a("div",Ct,[a("div",kt,[a("div",Lt,[a("div",{"aria-label":`current color is ${t.colors.hex}`,class:"vc-chrome-active-color",style:{background:i.activeColor}},null,12,["aria-label"]),n.disableAlpha?w("",!0):(u(),v(h,{key:0}))]),a("div",St,[a("div",zt,[a(c,{modelValue:t.colors,"onUpdate:modelValue":e[2]||(e[2]=_=>t.colors=_),onChange:i.childChange},null,8,["modelValue","onChange"])]),n.disableAlpha?w("",!0):(u(),v("div",Vt,[a(g,{modelValue:t.colors,"onUpdate:modelValue":e[3]||(e[3]=_=>t.colors=_),onChange:i.childChange},null,8,["modelValue","onChange"])]))])]),n.disableFields?w("",!0):(u(),v("div",At,[Y(a("div",$t,[a("div",Bt,[i.hasAlpha?w("",!0):(u(),v(p,{key:0,label:"hex",value:t.colors.hex,onChange:i.inputChange},null,8,["value","onChange"])),i.hasAlpha?(u(),v(p,{key:1,label:"hex",value:t.colors.hex8,onChange:i.inputChange},null,8,["value","onChange"])):w("",!0)])],512),[[J,l.fieldsIndex===0]]),Y(a("div",Ht,[a("div",Rt,[a(p,{label:"r",value:t.colors.rgba.r,onChange:i.inputChange},null,8,["value","onChange"])]),a("div",Et,[a(p,{label:"g",value:t.colors.rgba.g,onChange:i.inputChange},null,8,["value","onChange"])]),a("div",Ft,[a(p,{label:"b",value:t.colors.rgba.b,onChange:i.inputChange},null,8,["value","onChange"])]),n.disableAlpha?w("",!0):(u(),v("div",Tt,[a(p,{label:"a",value:t.colors.a,"arrow-offset":.01,max:1,onChange:i.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[J,l.fieldsIndex===1]]),Y(a("div",Mt,[a("div",Ot,[a(p,{label:"h",value:i.hsl.h,onChange:i.inputChange},null,8,["value","onChange"])]),a("div",It,[a(p,{label:"s",value:i.hsl.s,onChange:i.inputChange},null,8,["value","onChange"])]),a("div",Dt,[a(p,{label:"l",value:i.hsl.l,onChange:i.inputChange},null,8,["value","onChange"])]),n.disableAlpha?w("",!0):(u(),v("div",Nt,[a(p,{label:"a",value:t.colors.a,"arrow-offset":.01,max:1,onChange:i.inputChange},null,8,["value","arrow-offset","onChange"])]))],512),[[J,l.fieldsIndex===2]]),a("div",{class:"vc-chrome-toggle-btn",role:"button","aria-label":"Change another color definition",onClick:e[7]||(e[7]=(..._)=>i.toggleViews&&i.toggleViews(..._))},[a("div",Pt,[(u(),v("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",onMouseover:e[4]||(e[4]=(..._)=>i.showHighlight&&i.showHighlight(..._)),onMouseenter:e[5]||(e[5]=(..._)=>i.showHighlight&&i.showHighlight(..._)),onMouseout:e[6]||(e[6]=(..._)=>i.hideHighlight&&i.hideHighlight(..._))},[Ut],32))]),Y(a("div",Wt,null,512),[[J,l.highlight]])])]))]),t.$attrs.hidePalette?w("",!0):(u(),v("div",jt,[(u(!0),v(Z,null,te(t.$attrs.colors,(_,z)=>(u(),v("div",{class:"lv-colorpicker__colorblock-wrap",style:{transform:"scale(0.55)",height:"25px","flex-basis":"12.5%"},key:z,onClick:m=>i.handleClick(_)},[a("div",{class:"lv-colorpicker__colorblock",style:{backgroundColor:_}},null,4),a(h,{grey:"#607c8a"})],8,["onClick"]))),128))]))],2)};var ze={name:"LvColorpicker",props:{label:{type:String,default:""},hidePalette:{type:Boolean,default:!1},withoutInput:{type:Boolean,default:!1},colors:{type:Array,default:()=>["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#795548"]}},mixins:[me],data:()=>({localValue:"#607C8A"}),watch:{localValue(){this.localValue!==this.modelValue&&this.updateValue(this.localValue)}},mounted(){this.localValue=this.modelValue},components:{LvOverlayPanel:_e,ColorpickerCore:Se,LvInput:ne,Checkboard:le},computed:{},methods:{toggleColorpickerOverlay(t){this.$refs.ColorpickerOverlay.toggle(null,this.$refs.colorPickerInput.$el)},toggleColorBlockOverlay(t){this.$refs.ColorpickerOverlay.toggle(t)},close(){this.$refs.ColorpickerOverlay.hide()}}};const qt={class:"lv-colorpicker-wrapper"};U(`
.lv-colorpicker-wrapper {
  display: inline-block;
  vertical-align: middle;
}
.lv-colorpicker__colorblock-wrap {
  position: relative;
  width: 30px;
  height: 30px;
  top: calc(50% - 16px);
  right: 2px;
  border-radius: 5px !important;
  transform: scale(0.9);
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
}
.lv-colorpicker__colorblock {
  /* border-radius: 4px !important; */
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
`),ze.render=function(t,e,n,o,l,i){const r=k("checkboard"),h=k("LvInput"),c=k("ColorpickerCore"),g=k("LvOverlayPanel");return u(),v("div",qt,[n.withoutInput?(u(),v("div",{key:0,class:"lv-colorpicker__colorblock-wrap",onClick:e[1]||(e[1]=(...p)=>i.toggleColorBlockOverlay&&i.toggleColorBlockOverlay(...p))},[a("div",{class:"lv-colorpicker__colorblock",style:{backgroundColor:l.localValue}},null,4),a(r,{grey:"#607c8a"})])):(u(),v(h,q({key:1,label:n.label,ref:"colorPickerInput",modelValue:l.localValue,"onUpdate:modelValue":e[3]||(e[3]=p=>l.localValue=p)},t.$attrs,{onFocus:i.toggleColorpickerOverlay,"aria:haspopup":"true","aria-controls":"colorpicker_overlay_panel"}),{append:H(()=>[a("div",{class:"lv-colorpicker__colorblock-wrap",onClick:e[2]||(e[2]=(...p)=>i.toggleColorpickerOverlay&&i.toggleColorpickerOverlay(...p))},[a("div",{class:"lv-colorpicker__colorblock",style:{backgroundColor:l.localValue}},null,4),a(r,{grey:"#607c8a"})])]),_:1},16,["label","modelValue","onFocus"])),a(g,{style:{width:"max-content"},ref:"ColorpickerOverlay","append-to":"body","show-close-icon":!1,id:"image_overlay_panel",alignRight:""},{default:H(()=>[a(c,q({modelValue:l.localValue,"onUpdate:modelValue":e[4]||(e[4]=p=>l.localValue=p)},t.$props,{style:{width:"200px",transform:"scale(1.05)"},onClose:i.close}),null,16,["modelValue","onClose"])]),_:1},512)])};var ue={props:{icon:{type:String},iconRight:{type:String},label:{type:String},outlined:{type:Boolean,default:!1},push:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},deepShadow:{type:Boolean,default:!1},deepShadowHover:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},size:{type:String,default:"md"},type:{type:String,default:"button"},inline:{type:Boolean,default:!1}},computed:{buttonClass(){return{"--icon-only":this.icon&&!this.label,"--rounded":this.rounded,"--size-sm":this.size==="sm","--size-md":this.size==="md","--size-lg":this.size==="lg","--size-xl":this.size==="xl","--raised":this.raised,"--deep-shadow-hover":this.deepShadowHover,"--deep-shadow":this.deepShadow,"--push":this.raised||this.push,"--outlined":this.outlined,"--inline":this.inline}},listeners(){return this.$listeners?{...this.$listeners}:{}}}};const Xt={key:0,class:"lv-button__prepend"},Yt={key:0,class:"lv-button__icon"},Zt={class:"lv-button__label"},Kt={key:1,class:"lv-button__append"},Gt={key:0,class:"lv-button__icon"};(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}})(`.lv-button {
  margin: 0;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
  white-space: nowrap; }
  .lv-button:disabled {
    opacity: 0.6;
    cursor: default; }
  .lv-button.--inline {
    display: inline-flex; }
  .lv-button.--rounded {
    border-radius: 2rem; }
  .lv-button.--push {
    transition: all 0.2s ease-in-out; }
    .lv-button.--push:active {
      box-shadow: none;
      transform: translateY(2px); }
  .lv-button.--icon-only {
    justify-content: center; }
    .lv-button.--icon-only.--rounded {
      border-radius: 50%; }
    .lv-button.--icon-only .lv-button__prepend {
      margin: 0; }
    .lv-button.--icon-only .lv-button__append {
      margin: 0; }
    .lv-button.--icon-only .lv-button__label {
      visibility: hidden;
      width: 0;
      flex: 0 0 auto; }
  .lv-button .lv-button__prepend {
    margin-right: 0.5rem; }
  .lv-button .lv-button__append {
    margin-left: 0.5rem; }
  .lv-button .lv-button__label {
    flex: 1 1 auto; }
  .lv-button .lv-button__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; }

.lv-buttonset {
  display: flex;
  /* All the below properties are important! */ }
  .lv-buttonset .lv-button {
    /* To prevent accidental margins */
    margin: 0 !important;
    /* all the middle buttons. */
    /* For only first button */
    /* For only last button */ }
    .lv-buttonset .lv-button:not(:last-child) {
      border-right: 0 none; }
    .lv-buttonset .lv-button:not(:first-child) {
      border-left: 0 none; }
    .lv-buttonset .lv-button:not(:first-of-type):not(:last-of-type) {
      border-radius: 0; }
    .lv-buttonset .lv-button:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0; }
    .lv-buttonset .lv-button:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0; }
    .lv-buttonset .lv-button:focus {
      z-index: 1; }

.lv--primary {
  --theme-color: #38b2ac;
  --theme-color-light: #8ed8d6;
  --theme-color-dark: #319795;
  --theme-color-inverse: #ffffff; }

.lv--secondary {
  --theme-color: #607d8b;
  --theme-color-light: #beccd2;
  --theme-color-dark: #56717d;
  --theme-color-inverse: #ffffff; }

.lv--success {
  --theme-color: #008c7f;
  --theme-color-light: #95e8df;
  --theme-color-dark: #03655b;
  --theme-color-inverse: #ffffff; }

.lv--info {
  --theme-color: #0288d1;
  --theme-color-light: #89d4fe;
  --theme-color-dark: #027abc;
  --theme-color-inverse: #ffffff; }

.lv--warning {
  --theme-color: #ffb300;
  --theme-color-light: #ffd36d;
  --theme-color-dark: #df9c00;
  --theme-color-inverse: #ffffff; }

.lv--help {
  --theme-color: #795548;
  --theme-color-light: #baafac;
  --theme-color-dark: #795548;
  --theme-color-inverse: #ffffff; }

.lv--danger {
  --theme-color: #bb2727;
  --theme-color-light: #e9a5a5;
  --theme-color-dark: #9b2222;
  --theme-color-inverse: #ffffff; }

.lv--plain {
  --theme-color: #3f51b5;
  --theme-color-light: #acb7f7;
  --theme-color-dark: #2e3fa2;
  --theme-color-inverse: #ffffff; }

.lv--complementary {
  --theme-color: #edf1f5 !important;
  --theme-color-light: #8ed8d6 !important;
  --theme-color-dark: #dfe5ea !important;
  --theme-color-inverse: #718096 !important; }

.lv-button {
  color: var(--theme-color-inverse);
  background-color: var(--theme-color);
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, border-radius 0.3s;
  border-radius: 4px;
  /* Raised Buttons */ }
  .lv-button:enabled:hover {
    background-color: var(--theme-color-dark);
    color: var(--theme-color-inverse); }
  .lv-button:enabled:active {
    background-color: var(--theme-color);
    color: var(--theme-color-inverse); }
  .lv-button:focus {
    outline: 0 none;
    outline-offset: 0; }
  .lv-button.--size-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.875rem; }
    .lv-button.--size-sm .lv-button__icon i {
      font-size: 0.875rem; }
  .lv-button.--size-md {
    font-size: 1rem;
    padding: 0.5rem 1rem; }
    .lv-button.--size-md .lv-button__icon i {
      font-size: 1rem; }
  .lv-button.--size-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem; }
    .lv-button.--size-lg .lv-button__icon i {
      font-size: 1.25rem; }
  .lv-button.--size-xl {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem; }
    .lv-button.--size-xl .lv-button__icon i {
      font-size: 1.5rem; }
  .lv-button.--raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }
  .lv-button.--deep-shadow-hover:hover {
    box-shadow: 0 6px 16px -1px var(--theme-color); }
  .lv-button.--deep-shadow {
    box-shadow: 0 6px 16px -1px var(--theme-color); }
  .lv-button.--raised.--deep-shadow-hover:hover {
    background-color: var(--theme-color) !important;
    color: #ffffff !important;
    box-shadow: 0px 7px 10px var(--theme-color);
    transform: translateY(-3px); }
  .lv-button.--icon-only {
    width: 2.357rem; }
    .lv-button.--icon-only.--rounded {
      height: 2.357rem; }
  .lv-button.--outlined {
    background-color: transparent;
    color: var(--theme-color);
    border: 1px solid; }
    .lv-button.--outlined:enabled:hover {
      background-color: var(--theme-color);
      border: 1px solid var(--theme-color); }
    .lv-button.--outlined:enabled:active {
      background-color: var(--theme-color);
      border: 1px solid var(--theme-color); }
    .lv-button.--outlined.lv--complementary {
      color: var(--theme-color-inverse); }
      .lv-button.--outlined.lv--complementary:enabled:hover {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color-inverse);
        border-color: var(--theme-color-inverse); }
      .lv-button.--outlined.lv--complementary:enabled:active {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color-inverse);
        border-color: var(--theme-color-inverse); }
  .lv-button.--text-button {
    background-color: transparent;
    color: var(--theme-color);
    border-color: transparent; }
    .lv-button.--text-button:enabled:hover {
      background: rgba(33, 150, 243, 0.04);
      color: var(--theme-color);
      border-color: transparent; }
    .lv-button.--text-button:enabled:active {
      background: rgba(33, 150, 243, 0.04);
      color: var(--theme-color);
      border-color: var(--theme-color); }
    .lv-button.--text-button.lv--complementary {
      color: var(--theme-color-inverse); }
      .lv-button.--text-button.lv--complementary:enabled:hover {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color-inverse);
        border-color: var(--theme-color-inverse); }
      .lv-button.--text-button.lv--complementary:enabled:active {
        background: rgba(33, 150, 243, 0.04);
        color: var(--theme-color-inverse);
        border-color: var(--theme-color-inverse); }
  .lv-button.--link-button {
    color: var(--theme-color);
    background: transparent;
    border: transparent;
    text-decoration: none;
    font-weight: 500; }
    .lv-button.--link-button:enabled:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--theme-color);
      border-color: transparent; }
    .lv-button.--link-button:enabled:focus {
      background: rgba(0, 0, 0, 0.05);
      box-shadow: none;
      border-color: transparent; }
    .lv-button.--link-button:enabled:active {
      background: transparent;
      color: var(--theme-color);
      border-color: transparent; }

.lv-fluid {
  /* can be provided in parent, to give 100% width */ }
  .lv-fluid .lv-button {
    width: 100%; }
  .lv-fluid .--icon-only {
    width: 2.357rem; }
  .lv-fluid .lv-buttonset {
    display: flex; }
    .lv-fluid .lv-buttonset .lv-button {
      flex: 1; }
`),ue.render=function(t,e,n,o,l,i){return u(),v("button",q({class:["lv-button lv--primary",i.buttonClass]},t.$attrs,{type:n.type},he(i.listeners)),[t.$slots.prepend||n.icon?(u(),v("div",Xt,[P(t.$slots,"prepend",{},()=>[n.icon?(u(),v("div",Yt,[a("i",{class:n.icon},null,2)])):w("",!0)])])):w("",!0),a("div",Zt,[P(t.$slots,"default",{},()=>[G(L(n.label||"\xA0"),1)])]),t.$slots.append||n.iconRight?(u(),v("div",Kt,[P(t.$slots,"append",{},()=>[n.iconRight?(u(),v("div",Gt,[a("i",{class:n.iconRight},null,2)])):w("",!0)])])):w("",!0)],16,["type"])};var Ve={name:"LvNumber",components:{LvInput:ne,LvButton:ue},data:()=>({localValue:""}),props:{value:{type:Number,default:0},controls:{type:Boolean,default:!0},iconRight:{type:String,default:"light-icon-plus"},iconLeft:{type:String,default:"light-icon-minus"},buttonColor:{type:String,default:"lv--secondary"},max:{type:Number},step:{type:Number,default:1},min:{type:Number,default:0}},methods:{updateValue(t){t===""&&(t=this.min);let e=parseFloat(t);e>=this.min&&(!this.max||e<=this.max)&&(this.localValue=e,this.$emit("input",e),this.$emit("update:modelValue",e))},LocalIncrement(t){this.updateValue(+this.modelValue+ +this.step)},LocalDecrement(t){this.updateValue(this.modelValue-this.step)}},computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value?this.value:this.localValue}}};Ve.render=function(t,e,n,o,l,i){const r=k("LvButton"),h=k("lv-input");return u(),v(h,q({type:"number",editable:!0,ref:"mainInput",onInput:i.updateValue,value:i.modelValue},t.$attrs),{prepend:H(()=>[n.controls?(u(),v(r,{key:0,icon:n.iconLeft,class:n.buttonColor,onClick:e[1]||(e[1]=c=>i.LocalDecrement(c))},null,8,["icon","class"])):w("",!0)]),append:H(()=>[n.controls?(u(),v(r,{key:0,icon:n.iconRight,class:n.buttonColor,onClick:e[2]||(e[2]=c=>i.LocalIncrement(c))},null,8,["icon","class"])):w("",!0)]),_:1},16,["onInput","value"])};const Jt={components:{PrimaryButton:Fe,LvColorpicker:ze,LvInput:ne,LvNumber:Ve,LvButton:ue,AuthenticatedLayout:Ae,Link:Re,Head:Ee},props:{liste:Array,rez:Array,mandati:Array,iznadCenzusa:Array,ispodCenzusa:Array,vazeciListici:Number},data(){return{cenzus:0,ukMandata:0,izbori:""}},methods:{addListe:function(){var t=Math.floor(Math.random()*16777215).toString(16);this.liste.push({lista:"",skraceno:"",glasova:0,boja:"#"+t})},removeListe(t){this.liste.splice(t,1)},updateDhont(){this.$inertia.post("/dhont",{liste:this.liste,cenzus:this.cenzus,ukMandata:this.ukMandata},{preserveScroll:!0})},saveDhont(){this.$inertia.put("/dhont",{izbori:this.izbori,liste:this.liste,cenzus:this.cenzus,ukMandata:this.ukMandata},{preserveScroll:!0})}}},Qt={class:"font-semibold text-xl text-gray-800 leading-tight"},en={class:"py-12"},tn={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},nn={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},on={class:"flex justify-between w-full space-x-3 p-6"},ln={class:"w-1/2"},rn={class:"w-1/4"},an={class:"w-1/4"},sn={class:"flex p-6 bg-white border-b border-gray-200"},dn={key:0,class:"w-full"},hn={class:"flex items-center"},cn=y("span",{class:"text-xs mr-2"},"Partija: ",-1),un={class:"flex items-center"},pn=y("span",{class:"text-xs mr-2"},"Skra\u0107eni naziv: ",-1),fn={class:"flex items-center"},vn=y("span",{class:"text-xs mr-2"},"Boja partije: ",-1),gn={class:"flex items-center"},bn=y("span",{class:"text-xs mr-2"},"Glasovi: ",-1),mn={class:"ml-2"},_n={class:"py-6 ml-12 text-sm"},yn={key:0},xn=y("h1",{class:"mt-3 font-bold"},"Raspodjela mandata",-1),wn={key:1},Cn=y("h1",{class:"mt-3 font-bold"},"Ispod cenzusa",-1),kn={class:"grid place-content-end mr-4"};function Ln(t,e,n,o,l,i){const r=k("Head"),h=k("Link"),c=k("lv-input"),g=k("LvColorpicker"),p=k("LvButton"),_=k("PrimaryButton"),z=k("AuthenticatedLayout");return u(),B(Z,null,[a(r,{title:"Dhont"}),a(z,null,{header:H(()=>[y("h2",Qt,[a(h,{href:"dhont/HZv6yNPc"},{default:H(()=>[G(" Dhont primjer ")]),_:1})])]),default:H(()=>[y("div",en,[y("div",tn,[y("div",nn,[y("div",on,[y("div",ln,[a(c,{type:"text",ref:"iz",modelValue:l.izbori,"onUpdate:modelValue":e[0]||(e[0]=m=>l.izbori=m),label:"Izbori:",placeholder:"Unesi naziv izbora...",class:"focus:ring-0","floating-label":""},null,8,["modelValue"])]),y("div",rn,[a(c,{type:"text",modelValue:l.ukMandata,"onUpdate:modelValue":e[1]||(e[1]=m=>l.ukMandata=m),onChange:e[2]||(e[2]=m=>i.updateDhont()),label:"Broj mandata:",placeholder:"Unesi broj mandata...",class:"focus:ring-0","floating-label":""},null,8,["modelValue"])]),y("div",an,[a(c,{type:"text",modelValue:l.cenzus,"onUpdate:modelValue":e[3]||(e[3]=m=>l.cenzus=m),onChange:e[4]||(e[4]=m=>i.updateDhont()),label:"Izborni cenzus:",placeholder:"Unesi izborni cenzus...",class:"focus:ring-0","floating-label":"","icon-right":"light-icon-link"},null,8,["modelValue"])])]),y("div",sn,[l.ukMandata>0&&l.cenzus>0?(u(),B("div",dn,[(u(!0),B(Z,null,te(n.liste,(m,b)=>(u(),B("div",{key:b,class:"flex justify-between space-y-1"},[y("div",hn,[cn,a(c,{type:"text",modelValue:m.lista,"onUpdate:modelValue":s=>m.lista=s,onChange:e[5]||(e[5]=s=>i.updateDhont()),"bottom-bar":"",class:"focus:ring-0 text-xs w-64"},null,8,["modelValue","onUpdate:modelValue"])]),y("div",un,[pn,a(c,{type:"text",modelValue:m.skraceno,"onUpdate:modelValue":s=>m.skraceno=s,"bottom-bar":"",class:"focus:ring-0 text-xs w-20"},null,8,["modelValue","onUpdate:modelValue"])]),y("div",fn,[vn,a(g,{value:"#38b2ac",clearable:!0,bottomBar:!0,modelValue:m.boja,"onUpdate:modelValue":s=>m.boja=s,colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#795548"]},null,8,["modelValue","onUpdate:modelValue"])]),y("div",gn,[bn,a(c,{modelValue:m.glasova,"onUpdate:modelValue":s=>m.glasova=s,onBlur:e[6]||(e[6]=s=>i.updateDhont()),"bottom-bar":"",class:"focus:ring-0 text-right w-20"},null,8,["modelValue","onUpdate:modelValue"]),y("span",mn,[a(p,{icon:"light-icon-trash",rounded:"",outlined:"",class:"lv--danger",onClick:s=>i.removeListe(b)},null,8,["onClick"])])])]))),128)),y("p",null,[a(_,{class:"mt-2",onClick:e[7]||(e[7]=m=>i.addListe())},{default:H(()=>[G(" Dodaj listu ")]),_:1})])])):w("",!0)]),y("div",null,[y("div",_n,[y("p",null,"Vaze\u0107ih listi\u0107a: "+L(n.vazeciListici),1),y("p",null,"Cenzus: "+L(Math.ceil(this.vazeciListici*.03)),1),n.iznadCenzusa.length!==0?(u(),B("div",yn,[xn,y("ul",null,[(u(!0),B(Z,null,te(n.mandati,(m,b)=>(u(),B("li",{key:b},L(b)+" - "+L(n.iznadCenzusa[b])+" ("+L((n.iznadCenzusa[b]/n.vazeciListici*100).toFixed(2))+"%) | mandata: "+L(m),1))),128))])])):w("",!0),n.ispodCenzusa.length!==0?(u(),B("div",wn,[Cn,y("ul",null,[(u(!0),B(Z,null,te(n.ispodCenzusa,(m,b)=>(u(),B("li",{key:b},L(b)+" - "+L(m)+" ("+L((m/n.vazeciListici*100).toFixed(2))+"%) | bez mandata ",1))),128))])])):w("",!0),y("div",kn,[a(_,{onClick:e[8]||(e[8]=m=>i.saveDhont()),class:"bg-blue-400 hover:bg-blue-600 text-xs text-gray-50"},{default:H(()=>[G(" Sa\u010Duvaj ")]),_:1})])])])])])])]),_:1})],64)}const Bn=Te(Jt,[["render",Ln]]);export{Bn as default};
