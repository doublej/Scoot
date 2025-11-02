(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function V_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rx={exports:{}},Tc={},sx={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),H_=Symbol.for("react.portal"),G_=Symbol.for("react.fragment"),W_=Symbol.for("react.strict_mode"),X_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),Y_=Symbol.for("react.forward_ref"),q_=Symbol.for("react.suspense"),K_=Symbol.for("react.memo"),Z_=Symbol.for("react.lazy"),Mp=Symbol.iterator;function Q_(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ax=Object.assign,lx={};function so(t,e,n){this.props=t,this.context=e,this.refs=lx,this.updater=n||ox}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cx(){}cx.prototype=so.prototype;function Yd(t,e,n){this.props=t,this.context=e,this.refs=lx,this.updater=n||ox}var qd=Yd.prototype=new cx;qd.constructor=Yd;ax(qd,so.prototype);qd.isPureReactComponent=!0;var Ep=Array.isArray,ux=Object.prototype.hasOwnProperty,Kd={current:null},fx={key:!0,ref:!0,__self:!0,__source:!0};function dx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ux.call(e,i)&&!fx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wa,type:t,key:s,ref:o,props:r,_owner:Kd.current}}function J_(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function ey(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ey(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case H_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,Ep(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(Zd(r)&&(r=J_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ep(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=bl(s,e,n,l,r)}else if(l=Q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ty(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Tl={transition:null},ny={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Kd};function hx(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=so;Ke.Fragment=G_;Ke.Profiler=X_;Ke.PureComponent=Yd;Ke.StrictMode=W_;Ke.Suspense=q_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;Ke.act=hx;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ax({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ux.call(e,l)&&!fx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:$_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j_,_context:t},t.Consumer=t};Ke.createElement=dx;Ke.createFactory=function(t){var e=dx.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:Y_,render:t}};Ke.isValidElement=Zd;Ke.lazy=function(t){return{$$typeof:Z_,_payload:{_status:-1,_result:t},_init:ty}};Ke.memo=function(t,e){return{$$typeof:K_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Ke.unstable_act=hx;Ke.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ke.useContext=function(t){return rn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ke.useId=function(){return rn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ke.useRef=function(t){return rn.current.useRef(t)};Ke.useState=function(t){return rn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return rn.current.useTransition()};Ke.version="18.3.1";sx.exports=Ke;var Ee=sx.exports;const iy=V_(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=Ee,sy=Symbol.for("react.element"),oy=Symbol.for("react.fragment"),ay=Object.prototype.hasOwnProperty,ly=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cy={key:!0,ref:!0,__self:!0,__source:!0};function px(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ay.call(e,i)&&!cy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sy,type:t,key:s,ref:o,props:r,_owner:ly.current}}Tc.Fragment=oy;Tc.jsx=px;Tc.jsxs=px;rx.exports=Tc;var z=rx.exports,nf={},mx={exports:{}},bn={},xx={exports:{}},gx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,F){var G=I.length;I.push(F);e:for(;0<G;){var ie=G-1>>>1,me=I[ie];if(0<r(me,F))I[ie]=F,I[G]=me,G=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],G=I.pop();if(G!==F){I[0]=G;e:for(var ie=0,me=I.length,Be=me>>>1;ie<Be;){var ke=2*(ie+1)-1,Ze=I[ke],Y=ke+1,J=I[Y];if(0>r(Ze,G))Y<me&&0>r(J,Ze)?(I[ie]=J,I[Y]=G,ie=Y):(I[ie]=Ze,I[ke]=G,ie=ke);else if(Y<me&&0>r(J,G))I[ie]=J,I[Y]=G,ie=Y;else break e}}return F}function r(I,F){var G=I.sortIndex-F.sortIndex;return G!==0?G:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=I)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function M(I){if(v=!1,_(I),!g)if(n(l)!==null)g=!0,K(A);else{var F=n(c);F!==null&&te(M,F.startTime-I)}}function A(I,F){g=!1,v&&(v=!1,d(D),D=-1),p=!0;var G=f;try{for(_(F),h=n(l);h!==null&&(!(h.expirationTime>F)||I&&!N());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var me=ie(h.expirationTime<=F);F=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),_(F)}else i(l);h=n(l)}if(h!==null)var Be=!0;else{var ke=n(c);ke!==null&&te(M,ke.startTime-F),Be=!1}return Be}finally{h=null,f=G,p=!1}}var w=!1,C=null,D=-1,b=5,y=-1;function N(){return!(t.unstable_now()-y<b)}function O(){if(C!==null){var I=t.unstable_now();y=I;var F=!0;try{F=C(!0,I)}finally{F?H():(w=!1,C=null)}}else w=!1}var H;if(typeof x=="function")H=function(){x(O)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,q=Z.port2;Z.port1.onmessage=O,H=function(){q.postMessage(null)}}else H=function(){m(O,0)};function K(I){C=I,w||(w=!0,H())}function te(I,F){D=m(function(){I(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,K(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var G=f;f=F;try{return I()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=f;f=I;try{return F()}finally{f=G}},t.unstable_scheduleCallback=function(I,F,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=G+me,I={id:u++,callback:F,priorityLevel:I,startTime:G,expirationTime:me,sortIndex:-1},G>ie?(I.sortIndex=G,e(c,I),n(l)===null&&I===n(c)&&(v?(d(D),D=-1):v=!0,te(M,G-ie))):(I.sortIndex=me,e(l,I),g||p||(g=!0,K(A))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var F=f;return function(){var G=f;f=F;try{return I.apply(this,arguments)}finally{f=G}}}})(gx);xx.exports=gx;var uy=xx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=Ee,wn=uy;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vx=new Set,Zo={};function es(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)vx.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Tp={};function hy(t){return rf.call(Tp,t)?!0:rf.call(bp,t)?!1:dy.test(t)?Tp[t]=!0:(bp[t]=!0,!1)}function py(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function my(t,e,n,i){if(e===null||typeof e>"u"||py(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(my(e,n,r,i)&&(n=null),i||r===null?hy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Es=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),yx=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Sx=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Zc;function Io(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Qc=!1;function Jc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function xy(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Es:return"Portal";case sf:return"Profiler";case th:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yx:return(t.displayName||"Context")+".Consumer";case _x:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ih:return e=t.displayName||null,e!==null?e:lf(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return lf(t(e))}catch{}}return null}function gy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vy(t){var e=Mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=vy(t))}function Ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wx(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function uf(t,e){wx(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&ff(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ff(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Uo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function bx(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,Ax=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_y=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){_y.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function Cx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function Rx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yy=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(yy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,Fs=null,Os=null;function Np(t){if(t=Aa(t)){if(typeof gf!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Lc(e),gf(t.stateNode,t.type,e))}}function Px(t){Fs?Os?Os.push(t):Os=[t]:Fs=t}function Lx(){if(Fs){var t=Fs,e=Os;if(Os=Fs=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function Nx(t,e){return t(e)}function Dx(){}var eu=!1;function Ix(t,e,n){if(eu)return t(e,n);eu=!0;try{return Nx(t,e,n)}finally{eu=!1,(Fs!==null||Os!==null)&&(Dx(),Lx())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var vf=!1;if(Li)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){vf=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{vf=!1}function Sy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Go=!1,jl=null,$l=!1,_f=null,My={onError:function(t){Go=!0,jl=t}};function Ey(t,e,n,i,r,s,o,a,l){Go=!1,jl=null,Sy.apply(My,arguments)}function wy(t,e,n,i,r,s,o,a,l){if(Ey.apply(this,arguments),Go){if(Go){var c=jl;Go=!1,jl=null}else throw Error(ae(198));$l||($l=!0,_f=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ux(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(ts(t)!==t)throw Error(ae(188))}function by(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dp(r),t;if(s===i)return Dp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Fx(t){return t=by(t),t!==null?Ox(t):null}function Ox(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ox(t);if(e!==null)return e;t=t.sibling}return null}var kx=wn.unstable_scheduleCallback,Ip=wn.unstable_cancelCallback,Ty=wn.unstable_shouldYield,Ay=wn.unstable_requestPaint,Rt=wn.unstable_now,Cy=wn.unstable_getCurrentPriorityLevel,sh=wn.unstable_ImmediatePriority,zx=wn.unstable_UserBlockingPriority,Yl=wn.unstable_NormalPriority,Ry=wn.unstable_LowPriority,Bx=wn.unstable_IdlePriority,Ac=null,si=null;function Py(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Dy,Ly=Math.log,Ny=Math.LN2;function Dy(t){return t>>>=0,t===0?32:31-(Ly(t)/Ny|0)|0}var Va=64,Ha=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function Iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Iy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vx(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function Fy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Hx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gx,ah,Wx,Xx,jx,Sf=!1,Ga=[],sr=null,or=null,ar=null,ea=new Map,ta=new Map,Qi=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ky(t,e,n,i,r){switch(e){case"focusin":return sr=go(sr,t,e,n,i,r),!0;case"dragenter":return or=go(or,t,e,n,i,r),!0;case"mouseover":return ar=go(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,go(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,go(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function $x(t){var e=Ur(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Ux(n),e!==null){t.blockedOn=e,jx(t.priority,function(){Wx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=Aa(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){Al(t)&&n.delete(e)}function zy(){Sf=!1,sr!==null&&Al(sr)&&(sr=null),or!==null&&Al(or)&&(or=null),ar!==null&&Al(ar)&&(ar=null),ea.forEach(Fp),ta.forEach(Fp)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,zy)))}function na(t){function e(r){return vo(r,t)}if(0<Ga.length){vo(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&vo(sr,t),or!==null&&vo(or,t),ar!==null&&vo(ar,t),ea.forEach(e),ta.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)$x(n),n.blockedOn===null&&Qi.shift()}var ks=ki.ReactCurrentBatchConfig,Kl=!0;function By(t,e,n,i){var r=ot,s=ks.transition;ks.transition=null;try{ot=1,lh(t,e,n,i)}finally{ot=r,ks.transition=s}}function Vy(t,e,n,i){var r=ot,s=ks.transition;ks.transition=null;try{ot=4,lh(t,e,n,i)}finally{ot=r,ks.transition=s}}function lh(t,e,n,i){if(Kl){var r=Mf(t,e,n,i);if(r===null)fu(t,e,i,Zl,n),Up(t,i);else if(ky(r,t,e,n,i))i.stopPropagation();else if(Up(t,i),e&4&&-1<Oy.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&Gx(s),s=Mf(t,e,n,i),s===null&&fu(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fu(t,e,i,null,n)}}var Zl=null;function Mf(t,e,n,i){if(Zl=null,t=rh(i),t=Ur(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ux(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Yx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cy()){case sh:return 1;case zx:return 4;case Yl:case Ry:return 16;case Bx:return 536870912;default:return 16}default:return 16}}var tr=null,ch=null,Cl=null;function qx(){if(Cl)return Cl;var t,e=ch,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Op(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Op,this.isPropagationStopped=Op,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=Tn(oo),Ta=Mt({},oo,{view:0,detail:0}),Hy=Tn(Ta),nu,iu,_o,Cc=Mt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(nu=t.screenX-_o.screenX,iu=t.screenY-_o.screenY):iu=nu=0,_o=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),kp=Tn(Cc),Gy=Mt({},Cc,{dataTransfer:0}),Wy=Tn(Gy),Xy=Mt({},Ta,{relatedTarget:0}),ru=Tn(Xy),jy=Mt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Tn(jy),Yy=Mt({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qy=Tn(Yy),Ky=Mt({},oo,{data:0}),zp=Tn(Ky),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jy[t])?!!e[t]:!1}function fh(){return eS}var tS=Mt({},Ta,{key:function(t){if(t.key){var e=Zy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nS=Tn(tS),iS=Mt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Tn(iS),rS=Mt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),sS=Tn(rS),oS=Mt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=Tn(oS),lS=Mt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Tn(lS),uS=[9,13,27,32],dh=Li&&"CompositionEvent"in window,Wo=null;Li&&"documentMode"in document&&(Wo=document.documentMode);var fS=Li&&"TextEvent"in window&&!Wo,Kx=Li&&(!dh||Wo&&8<Wo&&11>=Wo),Vp=" ",Hp=!1;function Zx(t,e){switch(t){case"keyup":return uS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function dS(t,e){switch(t){case"compositionend":return Qx(e);case"keypress":return e.which!==32?null:(Hp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Hp?null:t;default:return null}}function hS(t,e){if(bs)return t==="compositionend"||!dh&&Zx(t,e)?(t=qx(),Cl=ch=tr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kx&&e.locale!=="ko"?null:e.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pS[t.type]:e==="textarea"}function Jx(t,e,n,i){Px(i),e=Ql(e,"onChange"),0<e.length&&(n=new uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ia=null;function mS(t){ug(t,0)}function Rc(t){var e=Cs(t);if(Ex(e))return t}function xS(t,e){if(t==="change")return e}var eg=!1;if(Li){var su;if(Li){var ou="oninput"in document;if(!ou){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),ou=typeof Wp.oninput=="function"}su=ou}else su=!1;eg=su&&(!document.documentMode||9<document.documentMode)}function Xp(){Xo&&(Xo.detachEvent("onpropertychange",tg),ia=Xo=null)}function tg(t){if(t.propertyName==="value"&&Rc(ia)){var e=[];Jx(e,ia,t,rh(t)),Ix(mS,e)}}function gS(t,e,n){t==="focusin"?(Xp(),Xo=e,ia=n,Xo.attachEvent("onpropertychange",tg)):t==="focusout"&&Xp()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(ia)}function _S(t,e){if(t==="click")return Rc(e)}function yS(t,e){if(t==="input"||t==="change")return Rc(e)}function SS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:SS;function ra(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rf.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MS(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ES=Li&&"documentMode"in document&&11>=document.documentMode,Ts=null,Ef=null,jo=null,wf=!1;function Yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||Ts==null||Ts!==Xl(i)||(i=Ts,"selectionStart"in i&&hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&ra(jo,i)||(jo=i,i=Ql(Ef,"onSelect"),0<i.length&&(e=new uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},au={},rg={};Li&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Pc(t){if(au[t])return au[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return au[t]=e[n];return t}var sg=Pc("animationend"),og=Pc("animationiteration"),ag=Pc("animationstart"),lg=Pc("transitionend"),cg=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){cg.set(t,e),es(e,[t])}for(var lu=0;lu<qp.length;lu++){var cu=qp[lu],wS=cu.toLowerCase(),bS=cu[0].toUpperCase()+cu.slice(1);_r(wS,"on"+bS)}_r(sg,"onAnimationEnd");_r(og,"onAnimationIteration");_r(ag,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(lg,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wy(i,e,void 0,t),t.currentTarget=null}function ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kp(r,a,c),s=l}}}if($l)throw t=_f,$l=!1,_f=null,t}function pt(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var i=t+"__bubble";n.has(i)||(fg(e,t,2,!1),n.add(i))}function uu(t,e,n){var i=0;e&&(i|=4),fg(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[ja]){t[ja]=!0,vx.forEach(function(n){n!=="selectionchange"&&(TS.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,uu("selectionchange",!1,e))}}function fg(t,e,n,i){switch(Yx(e)){case 1:var r=By;break;case 4:r=Vy;break;default:r=lh}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ix(function(){var c=s,u=rh(n),h=[];e:{var f=cg.get(t);if(f!==void 0){var p=uh,g=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=nS;break;case"focusin":g="focus",p=ru;break;case"focusout":g="blur",p=ru;break;case"beforeblur":case"afterblur":p=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sS;break;case sg:case og:case ag:p=$y;break;case lg:p=aS;break;case"scroll":p=Hy;break;case"wheel":p=cS;break;case"copy":case"cut":case"paste":p=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bp}var v=(e&4)!==0,m=!v&&t==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var x=c,_;x!==null;){_=x;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=Jo(x,d),M!=null&&v.push(oa(x,M,_)))),m)break;x=x.return}0<v.length&&(f=new p(f,g,null,n,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==xf&&(g=n.relatedTarget||n.fromElement)&&(Ur(g)||g[Ni]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Ur(g):null,g!==null&&(m=ts(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=kp,M="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=Bp,M="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?f:Cs(p),_=g==null?f:Cs(g),f=new v(M,x+"leave",p,n,u),f.target=m,f.relatedTarget=_,M=null,Ur(u)===c&&(v=new v(d,x+"enter",g,n,u),v.target=_,v.relatedTarget=m,M=v),m=M,p&&g)t:{for(v=p,d=g,x=0,_=v;_;_=os(_))x++;for(_=0,M=d;M;M=os(M))_++;for(;0<x-_;)v=os(v),x--;for(;0<_-x;)d=os(d),_--;for(;x--;){if(v===d||d!==null&&v===d.alternate)break t;v=os(v),d=os(d)}v=null}else v=null;p!==null&&Zp(h,f,p,v,!1),g!==null&&m!==null&&Zp(h,m,g,v,!0)}}e:{if(f=c?Cs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=xS;else if(Gp(f))if(eg)A=yS;else{A=vS;var w=gS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=_S);if(A&&(A=A(t,c))){Jx(h,A,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&ff(f,"number",f.value)}switch(w=c?Cs(c):window,t){case"focusin":(Gp(w)||w.contentEditable==="true")&&(Ts=w,Ef=c,jo=null);break;case"focusout":jo=Ef=Ts=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Yp(h,n,u);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":Yp(h,n,u)}var C;if(dh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else bs?Zx(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Kx&&n.locale!=="ko"&&(bs||D!=="onCompositionStart"?D==="onCompositionEnd"&&bs&&(C=qx()):(tr=u,ch="value"in tr?tr.value:tr.textContent,bs=!0)),w=Ql(c,D),0<w.length&&(D=new zp(D,t,null,n,u),h.push({event:D,listeners:w}),C?D.data=C:(C=Qx(n),C!==null&&(D.data=C)))),(C=fS?dS(t,n):hS(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(u=new zp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}ug(h,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(AS,`
`).replace(CS,"")}function $a(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(ae(425))}function Jl(){}var bf=null,Tf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(t){return Jp.resolve(null).then(t).catch(LS)}:Cf;function LS(t){setTimeout(function(){throw t})}function du(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),ii="__reactFiber$"+ao,aa="__reactProps$"+ao,Ni="__reactContainer$"+ao,Rf="__reactEvents$"+ao,NS="__reactListeners$"+ao,DS="__reactHandles$"+ao;function Ur(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=em(t);t!==null;){if(n=t[ii])return n;t=em(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[ii]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Lc(t){return t[aa]||null}var Pf=[],Rs=-1;function yr(t){return{current:t}}function mt(t){0>Rs||(t.current=Pf[Rs],Pf[Rs]=null,Rs--)}function ft(t,e){Rs++,Pf[Rs]=t.current,t.current=e}var mr={},Zt=yr(mr),dn=yr(!1),Xr=mr;function js(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function ec(){mt(dn),mt(Zt)}function tm(t,e,n){if(Zt.current!==mr)throw Error(ae(168));ft(Zt,e),ft(dn,n)}function dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,gy(t)||"Unknown",r));return Mt({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Xr=Zt.current,ft(Zt,t),ft(dn,dn.current),!0}function nm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=dg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,mt(dn),mt(Zt),ft(Zt,t)):mt(dn),ft(dn,n)}var Mi=null,Nc=!1,hu=!1;function hg(t){Mi===null?Mi=[t]:Mi.push(t)}function IS(t){Nc=!0,hg(t)}function Sr(){if(!hu&&Mi!==null){hu=!0;var t=0,e=ot;try{var n=Mi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Nc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),kx(sh,Sr),r}finally{ot=e,hu=!1}}return null}var Ps=[],Ls=0,nc=null,ic=0,Ln=[],Nn=0,jr=null,wi=1,bi="";function Lr(t,e){Ps[Ls++]=ic,Ps[Ls++]=nc,nc=t,ic=e}function pg(t,e,n){Ln[Nn++]=wi,Ln[Nn++]=bi,Ln[Nn++]=jr,jr=t;var i=wi;t=bi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Yn(e)+r|n<<r|i,bi=s+t}else wi=1<<s|n<<r|i,bi=t}function ph(t){t.return!==null&&(Lr(t,1),pg(t,1,0))}function mh(t){for(;t===nc;)nc=Ps[--Ls],Ps[Ls]=null,ic=Ps[--Ls],Ps[Ls]=null;for(;t===jr;)jr=Ln[--Nn],Ln[Nn]=null,bi=Ln[--Nn],Ln[Nn]=null,wi=Ln[--Nn],Ln[Nn]=null}var Mn=null,Sn=null,xt=!1,Wn=null;function mg(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:wi,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function Lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if(xt){var e=Sn;if(e){var n=e;if(!im(t,e)){if(Lf(t))throw Error(ae(418));e=lr(n.nextSibling);var i=Mn;e&&im(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,xt=!1,Mn=t)}}else{if(Lf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,xt=!1,Mn=t}}}function rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Ya(t){if(t!==Mn)return!1;if(!xt)return rm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Sn)){if(Lf(t))throw xg(),Error(ae(418));for(;e;)mg(t,e),e=lr(e.nextSibling)}if(rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?lr(t.stateNode.nextSibling):null;return!0}function xg(){for(var t=Sn;t;)t=lr(t.nextSibling)}function $s(){Sn=Mn=null,xt=!1}function xh(t){Wn===null?Wn=[t]:Wn.push(t)}var US=ki.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sm(t){var e=t._init;return e(t._payload)}function gg(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=dr(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,_,M){return x===null||x.tag!==6?(x=yu(_,d.mode,M),x.return=d,x):(x=r(x,_),x.return=d,x)}function l(d,x,_,M){var A=_.type;return A===ws?u(d,x,_.props.children,M,_.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yi&&sm(A)===x.type)?(M=r(x,_.props),M.ref=yo(d,x,_),M.return=d,M):(M=Fl(_.type,_.key,_.props,null,d.mode,M),M.ref=yo(d,x,_),M.return=d,M)}function c(d,x,_,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Su(_,d.mode,M),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function u(d,x,_,M,A){return x===null||x.tag!==7?(x=Vr(_,d.mode,M,A),x.return=d,x):(x=r(x,_),x.return=d,x)}function h(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=yu(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return _=Fl(x.type,x.key,x.props,null,d.mode,_),_.ref=yo(d,null,x),_.return=d,_;case Es:return x=Su(x,d.mode,_),x.return=d,x;case Yi:var M=x._init;return h(d,M(x._payload),_)}if(Uo(x)||mo(x))return x=Vr(x,d.mode,_,null),x.return=d,x;qa(d,x)}return null}function f(d,x,_,M){var A=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(d,x,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:return _.key===A?l(d,x,_,M):null;case Es:return _.key===A?c(d,x,_,M):null;case Yi:return A=_._init,f(d,x,A(_._payload),M)}if(Uo(_)||mo(_))return A!==null?null:u(d,x,_,M,null);qa(d,_)}return null}function p(d,x,_,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,a(x,d,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ka:return d=d.get(M.key===null?_:M.key)||null,l(x,d,M,A);case Es:return d=d.get(M.key===null?_:M.key)||null,c(x,d,M,A);case Yi:var w=M._init;return p(d,x,_,w(M._payload),A)}if(Uo(M)||mo(M))return d=d.get(_)||null,u(x,d,M,A,null);qa(x,M)}return null}function g(d,x,_,M){for(var A=null,w=null,C=x,D=x=0,b=null;C!==null&&D<_.length;D++){C.index>D?(b=C,C=null):b=C.sibling;var y=f(d,C,_[D],M);if(y===null){C===null&&(C=b);break}t&&C&&y.alternate===null&&e(d,C),x=s(y,x,D),w===null?A=y:w.sibling=y,w=y,C=b}if(D===_.length)return n(d,C),xt&&Lr(d,D),A;if(C===null){for(;D<_.length;D++)C=h(d,_[D],M),C!==null&&(x=s(C,x,D),w===null?A=C:w.sibling=C,w=C);return xt&&Lr(d,D),A}for(C=i(d,C);D<_.length;D++)b=p(C,d,D,_[D],M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?D:b.key),x=s(b,x,D),w===null?A=b:w.sibling=b,w=b);return t&&C.forEach(function(N){return e(d,N)}),xt&&Lr(d,D),A}function v(d,x,_,M){var A=mo(_);if(typeof A!="function")throw Error(ae(150));if(_=A.call(_),_==null)throw Error(ae(151));for(var w=A=null,C=x,D=x=0,b=null,y=_.next();C!==null&&!y.done;D++,y=_.next()){C.index>D?(b=C,C=null):b=C.sibling;var N=f(d,C,y.value,M);if(N===null){C===null&&(C=b);break}t&&C&&N.alternate===null&&e(d,C),x=s(N,x,D),w===null?A=N:w.sibling=N,w=N,C=b}if(y.done)return n(d,C),xt&&Lr(d,D),A;if(C===null){for(;!y.done;D++,y=_.next())y=h(d,y.value,M),y!==null&&(x=s(y,x,D),w===null?A=y:w.sibling=y,w=y);return xt&&Lr(d,D),A}for(C=i(d,C);!y.done;D++,y=_.next())y=p(C,d,D,y.value,M),y!==null&&(t&&y.alternate!==null&&C.delete(y.key===null?D:y.key),x=s(y,x,D),w===null?A=y:w.sibling=y,w=y);return t&&C.forEach(function(O){return e(d,O)}),xt&&Lr(d,D),A}function m(d,x,_,M){if(typeof _=="object"&&_!==null&&_.type===ws&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:e:{for(var A=_.key,w=x;w!==null;){if(w.key===A){if(A=_.type,A===ws){if(w.tag===7){n(d,w.sibling),x=r(w,_.props.children),x.return=d,d=x;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yi&&sm(A)===w.type){n(d,w.sibling),x=r(w,_.props),x.ref=yo(d,w,_),x.return=d,d=x;break e}n(d,w);break}else e(d,w);w=w.sibling}_.type===ws?(x=Vr(_.props.children,d.mode,M,_.key),x.return=d,d=x):(M=Fl(_.type,_.key,_.props,null,d.mode,M),M.ref=yo(d,x,_),M.return=d,d=M)}return o(d);case Es:e:{for(w=_.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Su(_,d.mode,M),x.return=d,d=x}return o(d);case Yi:return w=_._init,m(d,x,w(_._payload),M)}if(Uo(_))return g(d,x,_,M);if(mo(_))return v(d,x,_,M);qa(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=yu(_,d.mode,M),x.return=d,d=x),o(d)):n(d,x)}return m}var Ys=gg(!0),vg=gg(!1),rc=yr(null),sc=null,Ns=null,gh=null;function vh(){gh=Ns=sc=null}function _h(t){var e=rc.current;mt(rc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){sc=t,gh=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(gh!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(sc===null)throw Error(ae(308));Ns=t,sc.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Fr=null;function yh(t){Fr===null?Fr=[t]:Fr.push(t)}function _g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function Sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oc(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Mt({},h,f);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ca={},oi=yr(Ca),la=yr(Ca),ca=yr(Ca);function Or(t){if(t===Ca)throw Error(ae(174));return t}function Mh(t,e){switch(ft(ca,e),ft(la,t),ft(oi,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}mt(oi),ft(oi,e)}function qs(){mt(oi),mt(la),mt(ca)}function Sg(t){Or(ca.current);var e=Or(oi.current),n=hf(e,t.type);e!==n&&(ft(la,t),ft(oi,n))}function Eh(t){la.current===t&&(mt(oi),mt(la))}var yt=yr(0);function ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function wh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var Ll=ki.ReactCurrentDispatcher,mu=ki.ReactCurrentBatchConfig,$r=0,St=null,Nt=null,Ot=null,lc=!1,$o=!1,ua=0,FS=0;function Wt(){throw Error(ae(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Th(t,e,n,i,r,s){if($r=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?BS:VS,t=n(i,r),$o){s=0;do{if($o=!1,ua=0,25<=s)throw Error(ae(301));s+=1,Ot=Nt=null,e.updateQueue=null,Ll.current=HS,t=n(i,r)}while($o)}if(Ll.current=cc,e=Nt!==null&&Nt.next!==null,$r=0,Ot=Nt=St=null,lc=!1,e)throw Error(ae(300));return t}function Ah(){var t=ua!==0;return ua=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?St.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function On(){if(Nt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ot===null?St.memoizedState:Ot.next;if(e!==null)Ot=e,Nt=t;else{if(t===null)throw Error(ae(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ot===null?St.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function fa(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gu(t){var e=On(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=St,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Ch(Tg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,da(9,bg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ae(349));$r&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bg(t,e,n,i){e.value=n,e.getSnapshot=i,Ag(e)&&Cg(t)}function Tg(t,e,n){return n(function(){Ag(e)&&Cg(t)})}function Ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Cg(t){var e=Di(t,1);e!==null&&qn(e,t,1,-1)}function lm(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=zS.bind(null,St,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return On().memoizedState}function Nl(t,e,n,i){var r=ti();St.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function Dc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&bh(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}St.flags|=t,r.memoizedState=da(1|e,n,s,i)}function cm(t,e){return Nl(8390656,8,t,e)}function Ch(t,e){return Dc(2048,8,t,e)}function Pg(t,e){return Dc(4,2,t,e)}function Lg(t,e){return Dc(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,Ng.bind(null,e,t),n)}function Rh(){}function Ig(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ug(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fg(t,e,n){return $r&21?(Kn(n,e)||(n=Vx(),St.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function OS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=mu.transition;mu.transition={};try{t(!1),e()}finally{ot=n,mu.transition=i}}function Og(){return On().memoizedState}function kS(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kg(t))zg(e,n);else if(n=_g(t,e,n,i),n!==null){var r=tn();qn(n,t,i,r),Bg(n,e,i)}}function zS(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kg(t))zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_g(t,e,r,i),n!==null&&(r=tn(),qn(n,t,i,r),Bg(n,e,i))}}function kg(t){var e=t.alternate;return t===St||e!==null&&e===St}function zg(t,e){$o=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var cc={readContext:Fn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},BS={readContext:Fn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kS.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:Rh,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=OS.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ti();if(xt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),kt===null)throw Error(ae(349));$r&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cm(Tg.bind(null,i,s,t),[t]),i.flags|=2048,da(9,bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=kt.identifierPrefix;if(xt){var n=bi,i=wi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VS={readContext:Fn,useCallback:Ig,useContext:Fn,useEffect:Ch,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:xu,useRef:Rg,useState:function(){return xu(fa)},useDebugValue:Rh,useDeferredValue:function(t){var e=On();return Fg(e,Nt.memoizedState,t)},useTransition:function(){var t=xu(fa)[0],e=On().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},HS={readContext:Fn,useCallback:Ig,useContext:Fn,useEffect:Ch,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:gu,useRef:Rg,useState:function(){return gu(fa)},useDebugValue:Rh,useDeferredValue:function(t){var e=On();return Nt===null?e.memoizedState=t:Fg(e,Nt.memoizedState,t)},useTransition:function(){var t=gu(fa)[0],e=On().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=fr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(qn(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=fr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(qn(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=fr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(qn(e,t,i,n),Pl(e,t,i))}};function um(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function Vg(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=hn(e)?Xr:Zt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=hn(e)?Xr:Zt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",i=e;do n+=xy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GS=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fc||(fc=!0,jf=i),Ff(t,e)},n}function Gg(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=i1.bind(null,t,e,n),e.then(t,t))}function hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var WS=ki.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?vg(e,null,n,i):Ys(e,t.child,n,i)}function mm(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=Th(t,e,n,i,s,r),n=Ah(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(xt&&n&&ph(e),e.flags|=1,en(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Of(t,e,n,i,r)}function Xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Is,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Is,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Is,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Is,yn),yn|=i;return en(t,e,r,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=hn(n)?Xr:Zt.current;return s=js(e,s),zs(e,r),n=Th(t,e,n,i,s,r),i=Ah(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(xt&&i&&ph(e),e.flags|=1,en(t,e,n,r),e.child)}function gm(t,e,n,i,r){if(hn(n)){var s=!0;tc(e)}else s=!1;if(zs(e,r),e.stateNode===null)Dl(t,e),Vg(e,n,i),Uf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=hn(n)?Xr:Zt.current,c=js(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fm(e,o,i,c),qi=!1;var f=e.memoizedState;o.state=f,oc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||dn.current||qi?(typeof u=="function"&&(If(e,n,u,i),l=e.memoizedState),(a=qi||um(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=hn(n)?Xr:Zt.current,l=js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&fm(e,o,i,l),qi=!1,f=e.memoizedState,o.state=f,oc(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||dn.current||qi?(typeof p=="function"&&(If(e,n,p,i),g=e.memoizedState),(c=qi||um(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return kf(t,e,n,i,s,r)}function kf(t,e,n,i,r,s){jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&nm(e,n,!1),Ii(t,e,s);i=e.stateNode,WS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&nm(e,n,!0),e.child}function $g(t){var e=t.stateNode;e.pendingContext?tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tm(t,e.context,!1),Mh(t,e.containerInfo)}function vm(t,e,n,i,r){return $s(),xh(r),e.flags|=256,en(t,e,n,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=zf,t):Ph(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return XS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&xh(i),Ys(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vu(Error(ae(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=zf,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=vu(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),qn(i,t,r,-1))}return Fh(),i=vu(Error(ae(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=r1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=lr(r.nextSibling),Mn=e,xt=!0,Wn=null,t!==null&&(Ln[Nn++]=wi,Ln[Nn++]=bi,Ln[Nn++]=jr,wi=t.id,bi=t.overflow,jr=e),e=Ph(e,i.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:$g(e),$s();break;case 5:Sg(e);break;case 1:hn(e.type)&&tc(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(ft(yt,yt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return Ii(t,e,n)}var Kg,Vf,Zg,Qg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(oi.current);var s=null;switch(n){case"input":r=cf(t,r),i=cf(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=df(t,r),i=df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}pf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Qg=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $S(t,e,n){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&ec(),Xt(e),null;case 3:return i=e.stateNode,qs(),mt(dn),mt(Zt),wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(qf(Wn),Wn=null))),Vf(t,e),Xt(e),null;case 5:Eh(e);var r=Or(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Xt(e),null}if(t=Or(oi.current),Ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)pt(Oo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Cp(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Pp(i,s),pt("invalid",i)}pf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":za(i),Rp(i,s,!0);break;case"textarea":za(i),Lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[aa]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=mf(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)pt(Oo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Cp(t,i),r=cf(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Pp(t,i),r=df(t,i),pt("invalid",t);break;default:r=i}pf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ax(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&eh(t,s,l,o))}switch(n){case"input":za(t),Rp(t,i,!1);break;case"textarea":za(t),Lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Qg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Or(ca.current),Or(oi.current),Ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:$a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Xt(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Sn!==null&&e.mode&1&&!(e.flags&128))xg(),$s(),e.flags|=98560,s=!1;else if(s=Ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ii]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Wn!==null&&(qf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Dt===0&&(Dt=3):Fh())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return qs(),Vf(t,e),t===null&&sa(e.stateNode.containerInfo),Xt(e),null;case 10:return _h(e.type._context),Xt(e),null;case 17:return hn(e.type)&&ec(),Xt(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ac(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Zs&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=ac(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Xt(e),null}else 2*Rt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function YS(t,e){switch(mh(e),e.tag){case 1:return hn(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),mt(dn),mt(Zt),wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return qs(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Za=!1,Yt=!1,qS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){bt(t,e,i)}}var ym=!1;function KS(t,e){if(bf=Kl,t=ig(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},Kl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(M){bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=ym,ym=!1,g}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[aa],delete e[Rf],delete e[NS],delete e[DS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var zt=null,Gn=!1;function zi(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:Yt||Ds(n,e);case 6:var i=zt,r=Gn;zt=null,zi(t,e,n),zt=i,Gn=r,zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),na(t)):du(zt,n.stateNode));break;case 4:i=zt,r=Gn,zt=n.stateNode.containerInfo,Gn=!0,zi(t,e,n),zt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Yt&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,zi(t,e,n),Yt=i):zi(t,e,n);break;default:zi(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qS),e.forEach(function(i){var r=s1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Gn=!1;break e;case 3:zt=a.stateNode.containerInfo,Gn=!0;break e;case 4:zt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(zt===null)throw Error(ae(160));tv(s,o,r),zt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ei(t),i&4){try{Yo(3,t,t.return),Uc(3,t)}catch(v){bt(t,t.return,v)}try{Yo(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:kn(e,t),ei(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(kn(e,t),ei(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(v){bt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wx(r,s),mf(a,o);var c=mf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Rx(r,h):u==="dangerouslySetInnerHTML"?Ax(r,h):u==="children"?Qo(r,h):eh(r,u,h,c)}switch(a){case"input":uf(r,s);break;case"textarea":bx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Us(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(v){bt(t,t.return,v)}}break;case 6:if(kn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){bt(t,t.return,v)}}break;case 3:if(kn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:kn(e,t),ei(t);break;case 13:kn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dh=Rt())),i&4&&Mm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,kn(e,t),Yt=c):kn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(h=_e=u;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:Yo(4,f,f.return);break;case 1:Ds(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){bt(i,n,v)}}break;case 5:Ds(f,f.return);break;case 22:if(f.memoizedState!==null){wm(h);continue}}p!==null?(p.return=f,_e=p):wm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cx("display",o))}catch(v){bt(t,t.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){bt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ei(t),i&4&&Mm(t);break;case 21:break;default:kn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Sm(t);Xf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sm(t);Wf(t,a,o);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZS(t,e,n){_e=t,iv(t)}function iv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Za;var c=Yt;if(Za=o,(Yt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?bm(r):l!==null?(l.return=o,_e=l):bm(r);for(;s!==null;)_e=s,iv(s),s=s.sibling;_e=r,Za=a,Yt=c}Em(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Em(t)}}function Em(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Yt||e.flags&512&&Gf(e)}catch(f){bt(e,e.return,f)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function wm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function bm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var QS=Math.ceil,uc=ki.ReactCurrentDispatcher,Lh=ki.ReactCurrentOwner,Un=ki.ReactCurrentBatchConfig,tt=0,kt=null,Lt=null,Bt=0,yn=0,Is=yr(0),Dt=0,ha=null,Yr=0,Fc=0,Nh=0,qo=null,cn=null,Dh=0,Zs=1/0,Si=null,fc=!1,jf=null,ur=null,Qa=!1,nr=null,dc=0,Ko=0,$f=null,Il=-1,Ul=0;function tn(){return tt&6?Rt():Il!==-1?Il:Il=Rt()}function fr(t){return t.mode&1?tt&2&&Bt!==0?Bt&-Bt:US.transition!==null?(Ul===0&&(Ul=Vx()),Ul):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Yx(t.type)),t):1}function qn(t,e,n,i){if(50<Ko)throw Ko=0,$f=null,Error(ae(185));ba(t,n,i),(!(tt&2)||t!==kt)&&(t===kt&&(!(tt&2)&&(Fc|=n),Dt===4&&Ji(t,Bt)),pn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Zs=Rt()+500,Nc&&Sr()))}function pn(t,e){var n=t.callbackNode;Uy(t,e);var i=ql(t,t===kt?Bt:0);if(i===0)n!==null&&Ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ip(n),e===1)t.tag===0?IS(Tm.bind(null,t)):hg(Tm.bind(null,t)),PS(function(){!(tt&6)&&Sr()}),n=null;else{switch(Hx(i)){case 1:n=sh;break;case 4:n=zx;break;case 16:n=Yl;break;case 536870912:n=Bx;break;default:n=Yl}n=fv(n,rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rv(t,e){if(Il=-1,Ul=0,tt&6)throw Error(ae(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=ql(t,t===kt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=tt;tt|=2;var s=ov();(kt!==t||Bt!==e)&&(Si=null,Zs=Rt()+500,Br(t,e));do try{t1();break}catch(a){sv(t,a)}while(!0);vh(),uc.current=s,tt=r,Lt!==null?e=0:(kt=null,Bt=0,e=Dt)}if(e!==0){if(e===2&&(r=yf(t),r!==0&&(i=r,e=Yf(t,r))),e===1)throw n=ha,Br(t,0),Ji(t,i),pn(t,Rt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!JS(r)&&(e=hc(t,i),e===2&&(s=yf(t),s!==0&&(i=s,e=Yf(t,s))),e===1))throw n=ha,Br(t,0),Ji(t,i),pn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Nr(t,cn,Si);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Dh+500-Rt(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cf(Nr.bind(null,t,cn,Si),e);break}Nr(t,cn,Si);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QS(i/1960))-i,10<i){t.timeoutHandle=Cf(Nr.bind(null,t,cn,Si),i);break}Nr(t,cn,Si);break;case 5:Nr(t,cn,Si);break;default:throw Error(ae(329))}}}return pn(t,Rt()),t.callbackNode===n?rv.bind(null,t):null}function Yf(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=hc(t,e),t!==2&&(e=cn,cn=n,e!==null&&qf(e)),t}function qf(t){cn===null?cn=t:cn.push.apply(cn,t)}function JS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Nh,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Tm(t){if(tt&6)throw Error(ae(327));Bs();var e=ql(t,0);if(!(e&1))return pn(t,Rt()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=yf(t);i!==0&&(e=i,n=Yf(t,i))}if(n===1)throw n=ha,Br(t,0),Ji(t,e),pn(t,Rt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,cn,Si),pn(t,Rt()),null}function Ih(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Zs=Rt()+500,Nc&&Sr())}}function qr(t){nr!==null&&nr.tag===0&&!(tt&6)&&Bs();var e=tt;tt|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,tt=e,!(tt&6)&&Sr()}}function Uh(){yn=Is.current,mt(Is)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RS(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:qs(),mt(dn),mt(Zt),wh();break;case 5:Eh(i);break;case 4:qs();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:_h(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(kt=t,Lt=t=dr(t.current,null),Bt=yn=e,Dt=0,ha=null,Nh=Fc=Yr=0,cn=qo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function sv(t,e){do{var n=Lt;try{if(vh(),Ll.current=cc,lc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if($r=0,Ot=Nt=St=null,$o=!1,ua=0,Lh.current=null,n===null||n.return===null){Dt=1,ha=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=hm(o);if(p!==null){p.flags&=-257,pm(p,o,a,s,e),p.mode&1&&dm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){dm(s,c,e),Fh();break e}l=Error(ae(426))}}else if(xt&&a.mode&1){var m=hm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),pm(m,o,a,s,e),xh(Ks(l,a));break e}}s=l=Ks(l,a),Dt!==4&&(Dt=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Hg(s,l,e);om(s,d);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ur===null||!ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Gg(s,a,e);om(s,M);break e}}s=s.return}while(s!==null)}lv(n)}catch(A){e=A,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function ov(){var t=uc.current;return uc.current=cc,t===null?cc:t}function Fh(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),kt===null||!(Yr&268435455)&&!(Fc&268435455)||Ji(kt,Bt)}function hc(t,e){var n=tt;tt|=2;var i=ov();(kt!==t||Bt!==e)&&(Si=null,Br(t,e));do try{e1();break}catch(r){sv(t,r)}while(!0);if(vh(),tt=n,uc.current=i,Lt!==null)throw Error(ae(261));return kt=null,Bt=0,Dt}function e1(){for(;Lt!==null;)av(Lt)}function t1(){for(;Lt!==null&&!Ty();)av(Lt)}function av(t){var e=uv(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?lv(t):Lt=e,Lh.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Lt=null;return}}else if(n=$S(n,e,yn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Nr(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,n1(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function n1(t,e,n,i){do Bs();while(nr!==null);if(tt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fy(t,s),t===kt&&(Lt=kt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,fv(Yl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=ot;ot=1;var a=tt;tt|=4,Lh.current=null,KS(t,n),nv(n,t),MS(Tf),Kl=!!bf,Tf=bf=null,t.current=n,ZS(n),Ay(),tt=a,ot=o,Un.transition=s}else t.current=n;if(Qa&&(Qa=!1,nr=t,dc=r),s=t.pendingLanes,s===0&&(ur=null),Py(n.stateNode),pn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fc)throw fc=!1,t=jf,jf=null,t;return dc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===$f?Ko++:(Ko=0,$f=t):Ko=0,Sr(),null}function Bs(){if(nr!==null){var t=Hx(dc),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,dc=0,tt&6)throw Error(ae(331));var r=tt;for(tt|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:Yo(8,u,s)}var h=u.child;if(h!==null)h.return=u,_e=h;else for(;_e!==null;){u=_e;var f=u.sibling,p=u.return;if(Jg(u),u===c){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){o=_e;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,_e=_;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){_e=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,_e=M;break e}_e=a.return}}if(tt=r,Sr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Ac,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function Am(t,e,n){e=Ks(n,e),e=Hg(t,e,1),t=cr(t,e,1),e=tn(),t!==null&&(ba(t,1,e),pn(t,e))}function bt(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Ks(n,t),t=Gg(e,t,1),e=cr(e,t,1),t=tn(),e!==null&&(ba(e,1,t),pn(e,t));break}}e=e.return}}function i1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Bt&n)===n&&(Dt===4||Dt===3&&(Bt&130023424)===Bt&&500>Rt()-Dh?Br(t,0):Nh|=n),pn(t,e)}function cv(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=tn();t=Di(t,e),t!==null&&(ba(t,e,n),pn(t,n))}function r1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cv(t,n)}function s1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),cv(t,n)}var uv;uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,jS(t,e,n);un=!!(t.flags&131072)}else un=!1,xt&&e.flags&1048576&&pg(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=js(e,Zt.current);zs(e,n),r=Th(null,e,i,t,r,n);var s=Ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,Uf(e,i,t,n),e=kf(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&ph(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=a1(i),t=Hn(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=gm(null,e,i,t,n);break e;case 11:e=mm(null,e,i,t,n);break e;case 14:e=xm(null,e,i,Hn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gm(t,e,i,r,n);case 3:e:{if($g(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yg(t,e),oc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(ae(423)),e),e=vm(t,e,i,n,r);break e}else if(i!==r){r=Ks(Error(ae(424)),e),e=vm(t,e,i,n,r);break e}else for(Sn=lr(e.stateNode.containerInfo.firstChild),Mn=e,xt=!0,Wn=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Ii(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Sg(e),t===null&&Nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),jg(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Nf(e),null;case 13:return Yg(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),mm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(rc,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=Fn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),xm(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Dl(t,e),e.tag=1,hn(i)?(t=!0,tc(e)):t=!1,zs(e,n),Vg(e,i,r),Uf(e,i,r,n),kf(null,e,i,!0,t,n);case 19:return qg(t,e,n);case 22:return Xg(t,e,n)}throw Error(ae(156,e.tag))};function fv(t,e){return kx(t,e)}function o1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new o1(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a1(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===ih)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Oh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Vr(n.children,r,s,e);case th:o=8,r|=8;break;case sf:return t=Dn(12,n,e,r|2),t.elementType=sf,t.lanes=s,t;case of:return t=Dn(13,n,e,r),t.elementType=of,t.lanes=s,t;case af:return t=Dn(19,n,e,r),t.elementType=af,t.lanes=s,t;case Sx:return Oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _x:o=10;break e;case yx:o=9;break e;case nh:o=11;break e;case ih:o=14;break e;case Yi:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Oc(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Sx,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,s,o,a,l){return t=new l1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),t}function c1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dv(t){if(!t)return mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(hn(n))return dg(t,n,e)}return e}function hv(t,e,n,i,r,s,o,a,l){return t=kh(n,i,!0,t,r,s,o,a,l),t.context=dv(null),n=t.current,i=tn(),r=fr(n),s=Ci(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,ba(t,r,i),pn(t,i),t}function kc(t,e,n,i){var r=e.current,s=tn(),o=fr(r);return n=dv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(qn(t,r,o,s),Pl(t,r,o)),o}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function u1(){return null}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}zc.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));kc(t,e,null,null)};zc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){kc(null,t,null,null)}),e[Ni]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&$x(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function f1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(o);s.call(c)}}var o=hv(e,i,t,0,null,!1,!1,"",Rm);return t._reactRootContainer=o,t[Ni]=o.current,sa(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=pc(l);a.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",Rm);return t._reactRootContainer=l,t[Ni]=l.current,sa(t.nodeType===8?t.parentNode:t),qr(function(){kc(e,l,n,i)}),l}function Vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pc(o);a.call(l)}}kc(e,o,t,r)}else o=f1(n,e,t,r,i);return pc(o)}Gx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(oh(e,n|1),pn(e,Rt()),!(tt&6)&&(Zs=Rt()+500,Sr()))}break;case 13:qr(function(){var i=Di(t,1);if(i!==null){var r=tn();qn(i,t,1,r)}}),zh(t,1)}};ah=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=tn();qn(e,t,134217728,n)}zh(t,134217728)}};Wx=function(t){if(t.tag===13){var e=fr(t),n=Di(t,e);if(n!==null){var i=tn();qn(n,t,e,i)}zh(t,e)}};Xx=function(){return ot};jx=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(ae(90));Ex(i),uf(i,r)}}}break;case"textarea":bx(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};Nx=Ih;Dx=qr;var d1={usingClientEntryPoint:!1,Events:[Aa,Cs,Lc,Px,Lx,Ih]},Mo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h1={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fx(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||u1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Ac=Ja.inject(h1),si=Ja}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ae(200));return c1(t,e,null,n)};bn.createRoot=function(t,e){if(!Vh(t))throw Error(ae(299));var n=!1,i="",r=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,sa(t.nodeType===8?t.parentNode:t),new Bh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Fx(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return qr(t)};bn.hydrate=function(t,e,n){if(!Bc(e))throw Error(ae(200));return Vc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=pv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hv(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};bn.render=function(t,e,n){if(!Bc(e))throw Error(ae(200));return Vc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(ae(40));return t._reactRootContainer?(qr(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};bn.unstable_batchedUpdates=Ih;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Vc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),mx.exports=bn;var p1=mx.exports,Pm=p1;nf.createRoot=Pm.createRoot,nf.hydrateRoot=Pm.hydrateRoot;function xv(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=xv(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function gv(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=xv(t))&&(i&&(i+=" "),i+=e);return i}const Hh="-",m1=t=>{const e=g1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Hh);return a[0]===""&&a.length!==1&&a.shift(),vv(a,e)||x1(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},vv=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?vv(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Hh);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Lm=/^\[(.+)\]$/,x1=t=>{if(Lm.test(t)){const e=Lm.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},g1=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return _1(Object.entries(t.classGroups),n).forEach(([s,o])=>{Kf(o,i,s,e)}),i},Kf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Nm(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(v1(r)){Kf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Kf(o,Nm(e,s),n,i)})})},Nm=(t,e)=>{let n=t;return e.split(Hh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},v1=t=>t.isThemeGetter,_1=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,y1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},_v="!",S1=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,h;for(let m=0;m<a.length;m++){let d=a[m];if(c===0){if(d===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(d==="/"){h=m;continue}}d==="["?c++:d==="]"&&c--}const f=l.length===0?a:a.substring(u),p=f.startsWith(_v),g=p?f.substring(1):f,v=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:o}):o},M1=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},E1=t=>({cache:y1(t.cacheSize),parseClassName:S1(t),...m1(t)}),w1=/\s+/,b1=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(w1);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:h,baseClassName:f,maybePostfixModifierPosition:p}=n(c);let g=!!p,v=i(g?f.substring(0,p):f);if(!v){if(!g){a=c+(a.length>0?" "+a:a);continue}if(v=i(f),!v){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=M1(u).join(":"),d=h?m+_v:m,x=d+v;if(s.includes(x))continue;s.push(x);const _=r(v,g);for(let M=0;M<_.length;++M){const A=_[M];s.push(d+A)}a=c+(a.length>0?" "+a:a)}return a};function T1(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=yv(e))&&(i&&(i+=" "),i+=n);return i}const yv=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=yv(t[i]))&&(n&&(n+=" "),n+=e);return n};function A1(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=E1(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=b1(l,n);return r(l,u),u}return function(){return s(T1.apply(null,arguments))}}const ht=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Sv=/^\[(?:([a-z-]+):)?(.+)\]$/i,C1=/^\d+\/\d+$/,R1=new Set(["px","full","screen"]),P1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,L1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,D1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,I1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,di=t=>Vs(t)||R1.has(t)||C1.test(t),Bi=t=>lo(t,"length",H1),Vs=t=>!!t&&!Number.isNaN(Number(t)),Mu=t=>lo(t,"number",Vs),Eo=t=>!!t&&Number.isInteger(Number(t)),U1=t=>t.endsWith("%")&&Vs(t.slice(0,-1)),He=t=>Sv.test(t),Vi=t=>P1.test(t),F1=new Set(["length","size","percentage"]),O1=t=>lo(t,F1,Mv),k1=t=>lo(t,"position",Mv),z1=new Set(["image","url"]),B1=t=>lo(t,z1,W1),V1=t=>lo(t,"",G1),wo=()=>!0,lo=(t,e,n)=>{const i=Sv.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},H1=t=>L1.test(t)&&!N1.test(t),Mv=()=>!1,G1=t=>D1.test(t),W1=t=>I1.test(t),X1=()=>{const t=ht("colors"),e=ht("spacing"),n=ht("blur"),i=ht("brightness"),r=ht("borderColor"),s=ht("borderRadius"),o=ht("borderSpacing"),a=ht("borderWidth"),l=ht("contrast"),c=ht("grayscale"),u=ht("hueRotate"),h=ht("invert"),f=ht("gap"),p=ht("gradientColorStops"),g=ht("gradientColorStopPositions"),v=ht("inset"),m=ht("margin"),d=ht("opacity"),x=ht("padding"),_=ht("saturate"),M=ht("scale"),A=ht("sepia"),w=ht("skew"),C=ht("space"),D=ht("translate"),b=()=>["auto","contain","none"],y=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",He,e],O=()=>[He,e],H=()=>["",di,Bi],Z=()=>["auto",Vs,He],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],F=()=>["","0",He],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Vs,He];return{cacheSize:500,separator:":",theme:{colors:[wo],spacing:[di,Bi],blur:["none","",Vi,He],brightness:ie(),borderColor:[t],borderRadius:["none","","full",Vi,He],borderSpacing:O(),borderWidth:H(),contrast:ie(),grayscale:F(),hueRotate:ie(),invert:F(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[U1,Bi],inset:N(),margin:N(),opacity:ie(),padding:O(),saturate:ie(),scale:ie(),sepia:F(),skew:ie(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",He]}],container:["container"],columns:[{columns:[Vi]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),He]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:b()}],"overscroll-x":[{"overscroll-x":b()}],"overscroll-y":[{"overscroll-y":b()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Eo,He]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",He]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",Eo,He]}],"grid-cols":[{"grid-cols":[wo]}],"col-start-end":[{col:["auto",{span:["full",Eo,He]},He]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[wo]}],"row-start-end":[{row:["auto",{span:[Eo,He]},He]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",He]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",He]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",He,e]}],"min-w":[{"min-w":[He,e,"min","max","fit"]}],"max-w":[{"max-w":[He,e,"none","full","min","max","fit","prose",{screen:[Vi]},Vi]}],h:[{h:[He,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[He,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[He,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Vi,Bi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Mu]}],"font-family":[{font:[wo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",He]}],"line-clamp":[{"line-clamp":["none",Vs,Mu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",di,He]}],"list-image":[{"list-image":["none",He]}],"list-style-type":[{list:["none","disc","decimal",He]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",di,Bi]}],"underline-offset":[{"underline-offset":["auto",di,He]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",He]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",He]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),k1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",O1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},B1]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:K()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[di,He]}],"outline-w":[{outline:[di,Bi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[di,Bi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Vi,V1]}],"shadow-color":[{shadow:[wo]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...te(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":te()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Vi,He]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[_]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",He]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",He]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",He]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[Eo,He]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[w]}],"skew-y":[{"skew-y":[w]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",He]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",He]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",He]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[di,Bi,Mu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},j1=A1(X1);function An(...t){return j1(gv(t))}function pa(t){if(t===0)return"0 B";const e=1024,n=["B","KB","MB","GB","TB"],i=Math.floor(Math.log(t)/Math.log(e));return`${(t/Math.pow(e,i)).toFixed(2)} ${n[i]}`}const xr=Ee.forwardRef(({className:t,...e},n)=>z.jsx("div",{ref:n,className:An("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));xr.displayName="Card";const ns=Ee.forwardRef(({className:t,...e},n)=>z.jsx("div",{ref:n,className:An("flex flex-col space-y-1.5 p-6",t),...e}));ns.displayName="CardHeader";const is=Ee.forwardRef(({className:t,...e},n)=>z.jsx("h3",{ref:n,className:An("text-2xl font-semibold leading-none tracking-tight",t),...e}));is.displayName="CardTitle";const rs=Ee.forwardRef(({className:t,...e},n)=>z.jsx("p",{ref:n,className:An("text-sm text-muted-foreground",t),...e}));rs.displayName="CardDescription";const gr=Ee.forwardRef(({className:t,...e},n)=>z.jsx("div",{ref:n,className:An("p-6 pt-0",t),...e}));gr.displayName="CardContent";const $1=Ee.forwardRef(({className:t,...e},n)=>z.jsx("div",{ref:n,className:An("flex items-center p-6 pt-0",t),...e}));$1.displayName="CardFooter";function Y1(t,e=[]){let n=[];function i(s,o){const a=Ee.createContext(o),l=n.length;n=[...n,o];const c=h=>{var d;const{scope:f,children:p,...g}=h,v=((d=f==null?void 0:f[t])==null?void 0:d[l])||a,m=Ee.useMemo(()=>g,Object.values(g));return z.jsx(v.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(h,f){var v;const p=((v=f==null?void 0:f[t])==null?void 0:v[l])||a,g=Ee.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(o=>Ee.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return Ee.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,q1(r,...e)]}function q1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return Ee.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function Dm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function K1(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Dm(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Dm(t[r],null)}}}}function Ev(t){const e=Q1(t),n=Ee.forwardRef((i,r)=>{const{children:s,...o}=i,a=Ee.Children.toArray(s),l=a.find(eM);if(l){const c=l.props.children,u=a.map(h=>h===l?Ee.Children.count(c)>1?Ee.Children.only(null):Ee.isValidElement(c)?c.props.children:null:h);return z.jsx(e,{...o,ref:r,children:Ee.isValidElement(c)?Ee.cloneElement(c,void 0,u):null})}return z.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var Z1=Ev("Slot");function Q1(t){const e=Ee.forwardRef((n,i)=>{const{children:r,...s}=n;if(Ee.isValidElement(r)){const o=nM(r),a=tM(s,r.props);return r.type!==Ee.Fragment&&(a.ref=i?K1(i,o):o),Ee.cloneElement(r,a)}return Ee.Children.count(r)>1?Ee.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var J1=Symbol("radix.slottable");function eM(t){return Ee.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===J1}function tM(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function nM(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var iM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],wv=iM.reduce((t,e)=>{const n=Ev(`Primitive.${e}`),i=Ee.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),z.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{}),Gh="Progress",Wh=100,[rM]=Y1(Gh),[sM,oM]=rM(Gh),bv=Ee.forwardRef((t,e)=>{const{__scopeProgress:n,value:i=null,max:r,getValueLabel:s=aM,...o}=t;(r||r===0)&&!Im(r)&&console.error(lM(`${r}`,"Progress"));const a=Im(r)?r:Wh;i!==null&&!Um(i,a)&&console.error(cM(`${i}`,"Progress"));const l=Um(i,a)?i:null,c=mc(l)?s(l,a):void 0;return z.jsx(sM,{scope:n,value:l,max:a,children:z.jsx(wv.div,{"aria-valuemax":a,"aria-valuemin":0,"aria-valuenow":mc(l)?l:void 0,"aria-valuetext":c,role:"progressbar","data-state":Cv(l,a),"data-value":l??void 0,"data-max":a,...o,ref:e})})});bv.displayName=Gh;var Tv="ProgressIndicator",Av=Ee.forwardRef((t,e)=>{const{__scopeProgress:n,...i}=t,r=oM(Tv,n);return z.jsx(wv.div,{"data-state":Cv(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...i,ref:e})});Av.displayName=Tv;function aM(t,e){return`${Math.round(t/e*100)}%`}function Cv(t,e){return t==null?"indeterminate":t===e?"complete":"loading"}function mc(t){return typeof t=="number"}function Im(t){return mc(t)&&!isNaN(t)&&t>0}function Um(t,e){return mc(t)&&!isNaN(t)&&t<=e&&t>=0}function lM(t,e){return`Invalid prop \`max\` of value \`${t}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Wh}\`.`}function cM(t,e){return`Invalid prop \`value\` of value \`${t}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Wh} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var Rv=bv,uM=Av;const Pv=Ee.forwardRef(({className:t,value:e,...n},i)=>z.jsx(Rv,{ref:i,className:An("relative h-4 w-full overflow-hidden rounded-full bg-secondary",t),...n,children:z.jsx(uM,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})}));Pv.displayName=Rv.displayName;/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Qn=(t,e)=>{const n=Ee.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Ee.createElement("svg",{ref:u,...fM,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${dM(t)}`,a].join(" "),...c},[...e.map(([h,f])=>Ee.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Qn("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=Qn("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Qn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Qn("Files",[["path",{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",key:"cennsq"}],["path",{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8",key:"ms809a"}],["path",{d:"M15 2v5h5",key:"qq6kwv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=Qn("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Qn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Qn("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Qn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=Qn("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Qn("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Qn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function SM({progress:t}){return t?z.jsxs(xr,{children:[z.jsxs(ns,{children:[z.jsxs(is,{className:"flex items-center gap-2",children:[z.jsx(Fm,{className:"h-5 w-5 animate-spin text-primary"}),"Scanning in progress"]}),z.jsxs(rs,{className:"truncate",children:["Current: ",t.current_path]})]}),z.jsxs(gr,{className:"space-y-4",children:[z.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[z.jsxs("div",{className:"space-y-2",children:[z.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[z.jsx(mM,{className:"h-4 w-4"}),z.jsx("span",{children:"Files"})]}),z.jsx("div",{className:"text-2xl font-bold",children:t.files.toLocaleString()})]}),z.jsxs("div",{className:"space-y-2",children:[z.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[z.jsx(xM,{className:"h-4 w-4"}),z.jsx("span",{children:"Directories"})]}),z.jsx("div",{className:"text-2xl font-bold",children:t.directories.toLocaleString()})]}),z.jsxs("div",{className:"space-y-2",children:[z.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[z.jsx(gM,{className:"h-4 w-4"}),z.jsx("span",{children:"Total Size"})]}),z.jsx("div",{className:"text-2xl font-bold",children:pa(t.total_size)})]})]}),z.jsx(Pv,{value:100,className:"animate-pulse"})]})]}):z.jsx(xr,{children:z.jsxs(gr,{className:"flex items-center gap-3 pt-6",children:[z.jsx(Fm,{className:"h-5 w-5 animate-spin text-primary"}),z.jsx("span",{children:"Initializing scan..."})]})})}const Om=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,km=gv,Xh=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return km(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],h=s==null?void 0:s[c];if(u===null)return null;const f=Om(u)||Om(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,h,f]:c},[]);return km(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},MM=Xh("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function jh({className:t,variant:e,...n}){return z.jsx("div",{className:An(MM({variant:e}),t),...n})}function EM({config:t}){return t?z.jsxs(xr,{children:[z.jsxs(ns,{children:[z.jsxs(is,{className:"flex items-center gap-2",children:[z.jsx(yM,{className:"h-5 w-5"}),"Configuration"]}),z.jsx(rs,{children:"Active filters and extension categorization"})]}),z.jsxs(gr,{className:"space-y-6",children:[z.jsxs("div",{className:"space-y-3",children:[z.jsxs("h4",{className:"text-sm font-medium flex items-center gap-2",children:[z.jsx(Nv,{className:"h-4 w-4"}),"Excluded Patterns"]}),z.jsx("div",{className:"flex flex-wrap gap-2",children:t.filters.exclude_patterns.map(e=>z.jsx(jh,{variant:"secondary",children:e},e))})]}),z.jsxs("div",{className:"space-y-3",children:[z.jsxs("h4",{className:"text-sm font-medium flex items-center gap-2",children:[z.jsx(_M,{className:"h-4 w-4"}),"Extension Categories"]}),z.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(t.extension_templates).map(([e,n])=>z.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[z.jsx("div",{className:"w-3 h-3 rounded-full flex-shrink-0",style:{backgroundColor:n.color}}),z.jsx("span",{className:"capitalize font-medium",children:e}),z.jsxs("span",{className:"text-muted-foreground text-xs",children:["(",n.extensions.length,")"]})]},e))})]})]})]}):null}const wM=Xh("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ir=Ee.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?Z1:"button";return z.jsx(o,{className:An(wM({variant:e,size:n,className:t})),ref:s,...r})});ir.displayName="Button";const $h=Ee.forwardRef(({className:t,type:e,...n},i)=>z.jsx("input",{type:e,className:An("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...n}));$h.displayName="Input";function bM({onFilterChange:t}){const[e,n]=Ee.useState(""),i=[{label:"All files",kb:0},{label:"> 10 KB",kb:10},{label:"> 100 KB",kb:100},{label:"> 1 MB",kb:1024},{label:"> 10 MB",kb:10240}],r=()=>{const o=parseInt(e)||0;t(o*1024)},s=o=>{n(o.toString()),t(o*1024)};return z.jsxs(xr,{children:[z.jsxs(ns,{children:[z.jsxs(is,{className:"flex items-center gap-2",children:[z.jsx(Nv,{className:"h-5 w-5"}),"Size Filter"]}),z.jsx(rs,{children:"Exclude files below minimum size"})]}),z.jsx(gr,{children:z.jsxs("div",{className:"space-y-3",children:[z.jsxs("div",{className:"flex gap-2",children:[z.jsx($h,{type:"number",placeholder:"Min size (KB)",value:e,onChange:o=>n(o.target.value),className:"flex-1"}),z.jsx(ir,{onClick:r,size:"sm",children:"Apply"})]}),z.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(o=>z.jsx(jh,{variant:"outline",className:"cursor-pointer hover:bg-primary hover:text-primary-foreground",onClick:()=>s(o.kb),children:o.label},o.kb))})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="181",as={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TM=0,zm=1,AM=2,Dv=1,CM=2,yi=3,vr=0,mn=1,Ei=2,Ri=0,Hs=1,Bm=2,Vm=3,Hm=4,RM=5,Dr=100,PM=101,LM=102,NM=103,DM=104,IM=200,UM=201,FM=202,OM=203,Zf=204,Qf=205,kM=206,zM=207,BM=208,VM=209,HM=210,GM=211,WM=212,XM=213,jM=214,Jf=0,ed=1,td=2,Qs=3,nd=4,id=5,rd=6,sd=7,Iv=0,$M=1,YM=2,hr=0,qM=1,KM=2,ZM=3,QM=4,JM=5,eE=6,tE=7,Uv=300,Js=301,eo=302,od=303,ad=304,Hc=306,ld=1e3,Ti=1001,cd=1002,En=1003,nE=1004,el=1005,In=1006,Eu=1007,kr=1008,ci=1009,Fv=1010,Ov=1011,ma=1012,qh=1013,Kr=1014,Ai=1015,co=1016,Kh=1017,Zh=1018,xa=1020,kv=35902,zv=35899,Bv=1021,Vv=1022,$n=1023,ga=1026,va=1027,Hv=1028,Qh=1029,Jh=1030,ep=1031,tp=1033,Ol=33776,kl=33777,zl=33778,Bl=33779,ud=35840,fd=35841,dd=35842,hd=35843,pd=36196,md=37492,xd=37496,gd=37808,vd=37809,_d=37810,yd=37811,Sd=37812,Md=37813,Ed=37814,wd=37815,bd=37816,Td=37817,Ad=37818,Cd=37819,Rd=37820,Pd=37821,Ld=36492,Nd=36494,Dd=36495,Id=36283,Ud=36284,Fd=36285,Od=36286,iE=3200,rE=3201,Gv=0,sE=1,er="",Pn="srgb",to="srgb-linear",xc="linear",lt="srgb",cs=7680,Gm=519,oE=512,aE=513,lE=514,Wv=515,cE=516,uE=517,fE=518,dE=519,Wm=35044,Xm="300 es",ri=2e3,gc=2001;function Xv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hE(){const t=vc("canvas");return t.style.display="block",t}const jm={};function $m(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ve(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Tt(...t){const e="THREE."+t.shift();console.error(e,...t)}function _a(...t){const e=t.join(" ");e in jm||(jm[e]=!0,Ve(...t))}function pE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}let uo=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,kd=180/Math.PI;function Ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function mE(t,e){return(t%e+e)%e}function bu(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const x=Math.acos(m),_=Math.sin(x);d=Math.sin(d*x)/_,a=Math.sin(a*x)/_,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*f,e[n+1]=l*g+u*f+c*h-a*p,e[n+2]=c*g+u*p+a*f-l*h,e[n+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new W,Ym=new Zr;class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],x=r[1],_=r[4],M=r[7],A=r[2],w=r[5],C=r[8];return s[0]=o*v+a*x+l*A,s[3]=o*m+a*_+l*w,s[6]=o*d+a*M+l*C,s[1]=c*v+u*x+h*A,s[4]=c*m+u*_+h*w,s[7]=c*d+u*M+h*C,s[2]=f*v+p*x+g*A,s[5]=f*m+p*_+g*w,s[8]=f*d+p*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new Ge,qm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xE(){const t={enabled:!0,workingColorSpace:to,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?xc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[to]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:qm,fromXYZ:Km,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:qm,fromXYZ:Km,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const it=xE();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class gE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=vc("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cu(r[o].image)):s.push(Cu(r[o]))}else s=Cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let _E=0;const Ru=new W;class nn extends uo{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Ti,r=Ti,s=In,o=kr,a=$n,l=ci,c=nn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ra(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Uv;nn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,A=(d+1)/2,w=(u+f)/4,C=(h+v)/4,D=(g+m)/4;return _>M&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=C/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=D/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends uo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new np(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends yE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),nl.subVectors(this.max,To),fs.subVectors(e.a,To),ds.subVectors(e.b,To),hs.subVectors(e.c,To),Hi.subVectors(ds,fs),Gi.subVectors(hs,ds),br.subVectors(fs,hs);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-br.z,br.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,br.z,0,-br.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-br.y,br.x,0];return!Pu(n,fs,ds,hs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,fs,ds,hs,nl))?!1:(il.crossVectors(Hi,Gi),n=[il.x,il.y,il.z],Pu(n,fs,ds,hs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new W,new W,new W,new W,new W,new W,new W,new W],zn=new W,tl=new Pa,fs=new W,ds=new W,hs=new W,Hi=new W,Gi=new W,br=new W,To=new W,nl=new W,il=new W,Tr=new W;function Pu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ME=new Pa,Ao=new W,Lu=new W;class ip{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ME.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Lu)),this.expandByPoint(Ao.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new W,Nu=new W,rl=new W,Wi=new W,Du=new W,sl=new W,Iu=new W;class rp{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=Wi.dot(this.direction),l=-Wi.dot(rl),c=Wi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nu).addScaledVector(rl,f),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Du.subVectors(n,e),sl.subVectors(i,e),Iu.crossVectors(Du,sl);let o=this.direction.dot(Iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Wi,sl));if(l<0)return null;const c=a*this.direction.dot(Du.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Iu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EE,e,wE)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Xi.crossVectors(i,vn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Xi.crossVectors(i,vn)),Xi.normalize(),ol.crossVectors(vn,Xi),r[0]=Xi.x,r[4]=ol.x,r[8]=vn.x,r[1]=Xi.y,r[5]=ol.y,r[9]=vn.y,r[2]=Xi.z,r[6]=ol.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],_=i[7],M=i[11],A=i[15],w=r[0],C=r[4],D=r[8],b=r[12],y=r[1],N=r[5],O=r[9],H=r[13],Z=r[2],q=r[6],K=r[10],te=r[14],I=r[3],F=r[7],G=r[11],ie=r[15];return s[0]=o*w+a*y+l*Z+c*I,s[4]=o*C+a*N+l*q+c*F,s[8]=o*D+a*O+l*K+c*G,s[12]=o*b+a*H+l*te+c*ie,s[1]=u*w+h*y+f*Z+p*I,s[5]=u*C+h*N+f*q+p*F,s[9]=u*D+h*O+f*K+p*G,s[13]=u*b+h*H+f*te+p*ie,s[2]=g*w+v*y+m*Z+d*I,s[6]=g*C+v*N+m*q+d*F,s[10]=g*D+v*O+m*K+d*G,s[14]=g*b+v*H+m*te+d*ie,s[3]=x*w+_*y+M*Z+A*I,s[7]=x*C+_*N+M*q+A*F,s[11]=x*D+_*O+M*K+A*G,s[15]=x*b+_*H+M*te+A*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],x=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,_=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,M=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,A=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,w=n*x+i*_+r*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=x*C,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*C,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=M*C,e[9]=(g*h*s-u*v*s-g*i*p+n*v*p+u*i*d-n*h*d)*C,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*C,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*C,e[12]=A*C,e[13]=(u*v*r-g*h*r+g*i*f-n*v*f-u*i*m+n*h*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,x=l*c,_=l*u,M=l*h,A=i.x,w=i.y,C=i.z;return r[0]=(1-(v+d))*A,r[1]=(p+M)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(f+d))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(g+_)*C,r[9]=(m-x)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===ri)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gc)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===ri)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===gc)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new W,Bn=new Ct,EE=new W(0,0,0),wE=new W(1,1,1),Xi=new W,ol=new W,vn=new W,Zm=new Ct,Qm=new Zr;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Jm=new W,ms=new Zr,mi=new Ct,al=new W,Co=new W,TE=new W,AE=new Zr,e0=new W(1,0,0),t0=new W(0,1,0),n0=new W(0,0,1),i0={type:"added"},CE={type:"removed"},xs={type:"childadded",child:null},Uu={type:"childremoved",child:null};class Kt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new W,n=new ui,i=new Zr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ge}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,n){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Co,al,this.up):mi.lookAt(al,Co,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(mi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),xs.child=e,this.dispatchEvent(xs),xs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CE),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new W(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new W,xi=new W,Fu=new W,gi=new W,gs=new W,vs=new W,r0=new W,Ou=new W,ku=new W,zu=new W,Bu=new At,Vu=new At,Hu=new At;class Xn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),xi.subVectors(i,n),Fu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(Fu),c=xi.dot(xi),u=xi.dot(Fu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Bu.setScalar(0),Vu.setScalar(0),Hu.setScalar(0),Bu.fromBufferAttribute(e,n),Vu.fromBufferAttribute(e,i),Hu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bu,s.x),o.addScaledVector(Vu,s.y),o.addScaledVector(Hu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),xi.subVectors(e,n),Vn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),vs.subVectors(s,i),Ou.subVectors(e,i);const l=gs.dot(Ou),c=vs.dot(Ou);if(l<=0&&c<=0)return n.copy(i);ku.subVectors(e,r);const u=gs.dot(ku),h=vs.dot(ku);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(gs,o);zu.subVectors(e,s);const p=gs.dot(zu),g=vs.dot(zu);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return r0.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(r0,a);const d=1/(m+v+f);return o=v*d,a=f*d,n.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=mE(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gu(o,s,e+1/3),this.g=Gu(o,s,e),this.b=Gu(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return it.workingToColorSpace($t.copy(this),e),Math.round(qe($t.r*255,0,255))*65536+Math.round(qe($t.g*255,0,255))*256+Math.round(qe($t.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Pn){it.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(ll);const i=bu(ji.h,ll.h,n),r=bu(ji.s,ll.s,n),s=bu(ji.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const $t=new et;et.NAMES=$v;let RE=0;class La extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=Hs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Qf,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Qf&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class op extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new W,cl=new ze;let PE=0;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wm,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wm&&(e.usage=this.usage),e}}class Yv extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qv extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hr extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LE=0;const Rn=new Ct,Wu=new Kt,_s=new W,_n=new Pa,Ro=new Pa,Ft=new W;class Mr extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?qv:Yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ip);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(_n.min,Ro.min),_n.expandByPoint(Ft),Ft.addVectors(_n.max,Ro.max),_n.expandByPoint(Ft)):(_n.expandByPoint(Ro.min),_n.expandByPoint(Ro.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),Ft.add(_s)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new W,l[D]=new W;const c=new W,u=new W,h=new W,f=new ze,p=new ze,g=new ze,v=new W,m=new W;function d(D,b,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[D].add(v),a[b].add(v),a[y].add(v),l[D].add(m),l[b].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,b=x.length;D<b;++D){const y=x[D],N=y.start,O=y.count;for(let H=N,Z=N+O;H<Z;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new W,M=new W,A=new W,w=new W;function C(D){A.fromBufferAttribute(r,D),w.copy(A);const b=a[D];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(w,b);const N=M.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,N)}for(let D=0,b=x.length;D<b;++D){const y=x[D],N=y.start,O=y.count;for(let H=N,Z=N+O;H<Z;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new ai(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s0=new Ct,Ar=new rp,ul=new ip,o0=new W,fl=new W,dl=new W,hl=new W,Xu=new W,pl=new W,a0=new W,ml=new W;class Ui extends Kt{constructor(e=new Mr,n=new op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xu.fromBufferAttribute(h,e),o?pl.addScaledVector(Xu,u):pl.addScaledVector(Xu.sub(n),u))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ul.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ul,o0)===null||Ar.origin.distanceToSquared(o0)>(e.far-e.near)**2))&&(s0.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(s0),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=_;M<A;M+=3){const w=a.getX(M),C=a.getX(M+1),D=a.getX(M+2);r=xl(this,d,e,i,c,u,h,w,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=xl(this,o,e,i,c,u,h,x,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=_;M<A;M+=3){const w=M,C=M+1,D=M+2;r=xl(this,d,e,i,c,u,h,w,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=m,_=m+1,M=m+2;r=xl(this,o,e,i,c,u,h,x,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NE(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fl),t.getVertexPosition(l,dl),t.getVertexPosition(c,hl);const u=NE(t,e,n,i,fl,dl,hl,a0);if(u){const h=new W;Xn.getBarycoord(a0,fl,dl,hl,h),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,l,c,h,new ze)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,a,l,c,h,new ze)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Xn.getNormal(fl,dl,hl,f.normal),u.face=f,u.barycoord=h}return u}class fo extends Mr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hr(c,3)),this.setAttribute("normal",new Hr(u,3)),this.setAttribute("uv",new Hr(h,2));function g(v,m,d,x,_,M,A,w,C,D,b){const y=M/C,N=A/D,O=M/2,H=A/2,Z=w/2,q=C+1,K=D+1;let te=0,I=0;const F=new W;for(let G=0;G<K;G++){const ie=G*N-H;for(let me=0;me<q;me++){const Be=me*y-O;F[v]=Be*x,F[m]=ie*_,F[d]=Z,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[d]=w>0?1:-1,u.push(F.x,F.y,F.z),h.push(me/C),h.push(1-G/D),te+=1}}for(let G=0;G<D;G++)for(let ie=0;ie<C;ie++){const me=f+ie+q*G,Be=f+ie+q*(G+1),ke=f+(ie+1)+q*(G+1),Ze=f+(ie+1)+q*G;l.push(me,Be,Ze),l.push(Be,ke,Ze),I+=6}a.addGroup(p,I,b),p+=I,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function DE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const IE={clone:no,merge:Jt};var UE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=DE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zv extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new W,l0=new ze,c0=new ze;class qt extends Zv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,l0,c0),n.subVectors(c0,l0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class OE extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new qt(ys,Ss,e,n);s.layers=this.layers,this.add(s);const o=new qt(ys,Ss,e,n);o.layers=this.layers,this.add(o);const a=new qt(ys,Ss,e,n);a.layers=this.layers,this.add(a);const l=new qt(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new qt(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qv extends nn{constructor(e=[],n=Js,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kE extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fo(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ri});s.uniforms.tEquirect.value=n;const o=new Ui(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=In),new OE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class gl extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class BE extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VE extends nn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=En,u=En,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=new W,HE=new W,GE=new Ge;class Ki{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$u.subVectors(i,n).cross(HE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||GE.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ip,WE=new ze(.5,.5),vl=new W;class ap{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],x=s[12],_=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,d-g,A-x).normalize(),r[1].setComponents(c+o,p+u,d+g,A+x).normalize(),r[2].setComponents(c+a,p+h,d+v,A+_).normalize(),r[3].setComponents(c-a,p-h,d-v,A-_).normalize(),i)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,p-f,d-m,A-M).normalize();else if(r[4].setComponents(c-l,p-f,d-m,A-M).normalize(),n===ri)r[5].setComponents(c+l,p+f,d+m,A+M).normalize();else if(n===gc)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=WE.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jv extends nn{constructor(e,n,i=Kr,r,s,o,a=En,l=En,c,u=ga,h=1){if(u!==ga&&u!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class e_ extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Na extends Mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const x=d*f-o;for(let _=0;_<c;_++){const M=_*h-s;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const _=x+c*d,M=x+c*(d+1),A=x+1+c*(d+1),w=x+1+c*d;p.push(_,M,w),p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new Hr(g,3)),this.setAttribute("normal",new Hr(v,3)),this.setAttribute("uv",new Hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}class XE extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gv,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jE extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class t_ extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Yu=new Ct,u0=new W,f0=new W;class YE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;u0.setFromMatrixPosition(e.matrixWorld),n.position.copy(u0),f0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(f0),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gr extends Zv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qE extends YE{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d0 extends t_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KE extends t_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZE extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const h0=new Ct;class QE{constructor(e,n,i=0,r=1/0){this.ray=new rp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Tt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return h0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(e,n=!0,i=[]){return zd(e,this,i,n),i.sort(p0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zd(e[r],this,i,n);return i.sort(p0),i}}function p0(t,e){return t.distance-e.distance}function zd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)zd(s[o],e,n,!0)}}class m0{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function x0(t,e,n,i){const r=JE(i);switch(n){case Bv:return t*e;case Hv:return t*e/r.components*r.byteLength;case Qh:return t*e/r.components*r.byteLength;case Jh:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case Vv:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case Ol:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:case hd:return Math.max(t,16)*Math.max(e,8)/4;case ud:case dd:return Math.max(t,8)*Math.max(e,8)/2;case pd:case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Nd:case Dd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Id:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fd:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JE(t){switch(t){case ci:case Fv:return{byteLength:1,components:1};case ma:case Ov:case co:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Kr:case qh:case Ai:return{byteLength:4,components:1};case kv:case zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function e3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var t3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L3="gl_FragColor = linearToOutputTexel( gl_FragColor );",N3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ew=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ew=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ww=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:t3,alphahash_pars_fragment:n3,alphamap_fragment:i3,alphamap_pars_fragment:r3,alphatest_fragment:s3,alphatest_pars_fragment:o3,aomap_fragment:a3,aomap_pars_fragment:l3,batching_pars_vertex:c3,batching_vertex:u3,begin_vertex:f3,beginnormal_vertex:d3,bsdfs:h3,iridescence_fragment:p3,bumpmap_pars_fragment:m3,clipping_planes_fragment:x3,clipping_planes_pars_fragment:g3,clipping_planes_pars_vertex:v3,clipping_planes_vertex:_3,color_fragment:y3,color_pars_fragment:S3,color_pars_vertex:M3,color_vertex:E3,common:w3,cube_uv_reflection_fragment:b3,defaultnormal_vertex:T3,displacementmap_pars_vertex:A3,displacementmap_vertex:C3,emissivemap_fragment:R3,emissivemap_pars_fragment:P3,colorspace_fragment:L3,colorspace_pars_fragment:N3,envmap_fragment:D3,envmap_common_pars_fragment:I3,envmap_pars_fragment:U3,envmap_pars_vertex:F3,envmap_physical_pars_fragment:$3,envmap_vertex:O3,fog_vertex:k3,fog_pars_vertex:z3,fog_fragment:B3,fog_pars_fragment:V3,gradientmap_pars_fragment:H3,lightmap_pars_fragment:G3,lights_lambert_fragment:W3,lights_lambert_pars_fragment:X3,lights_pars_begin:j3,lights_toon_fragment:Y3,lights_toon_pars_fragment:q3,lights_phong_fragment:K3,lights_phong_pars_fragment:Z3,lights_physical_fragment:Q3,lights_physical_pars_fragment:J3,lights_fragment_begin:ew,lights_fragment_maps:tw,lights_fragment_end:nw,logdepthbuf_fragment:iw,logdepthbuf_pars_fragment:rw,logdepthbuf_pars_vertex:sw,logdepthbuf_vertex:ow,map_fragment:aw,map_pars_fragment:lw,map_particle_fragment:cw,map_particle_pars_fragment:uw,metalnessmap_fragment:fw,metalnessmap_pars_fragment:dw,morphinstance_vertex:hw,morphcolor_vertex:pw,morphnormal_vertex:mw,morphtarget_pars_vertex:xw,morphtarget_vertex:gw,normal_fragment_begin:vw,normal_fragment_maps:_w,normal_pars_fragment:yw,normal_pars_vertex:Sw,normal_vertex:Mw,normalmap_pars_fragment:Ew,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Aw,opaque_fragment:Cw,packing:Rw,premultiplied_alpha_fragment:Pw,project_vertex:Lw,dithering_fragment:Nw,dithering_pars_fragment:Dw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Ow,shadowmap_vertex:kw,shadowmask_pars_fragment:zw,skinbase_vertex:Bw,skinning_pars_vertex:Vw,skinning_vertex:Hw,skinnormal_vertex:Gw,specularmap_fragment:Ww,specularmap_pars_fragment:Xw,tonemapping_fragment:jw,tonemapping_pars_fragment:$w,transmission_fragment:Yw,transmission_pars_fragment:qw,uv_pars_fragment:Kw,uv_pars_vertex:Zw,uv_vertex:Qw,worldpos_vertex:Jw,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:rb,cube_frag:sb,depth_vert:ob,depth_frag:ab,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:fb,linedashed_vert:db,linedashed_frag:hb,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:xb,meshlambert_frag:gb,meshmatcap_vert:vb,meshmatcap_frag:_b,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:Eb,meshphysical_vert:wb,meshphysical_frag:bb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Cb,points_frag:Rb,shadow_vert:Pb,shadow_frag:Lb,sprite_vert:Nb,sprite_frag:Db},pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ni={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ni.physical={uniforms:Jt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const _l={r:0,b:0,g:0},Rr=new ui,Ib=new Ct;function Ub(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?n:e).get(M)),M}function v(_){let M=!1;const A=g(_);A===null?d(a,l):A&&A.isColor&&(d(A,1),M=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Hc)?(u===void 0&&(u=new Ui(new fo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:no(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(M.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(Rr)),u.material.toneMapped=it.getTransfer(A.colorSpace)!==lt,(h!==A||f!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ui(new Na(2,2),new Fi({name:"BackgroundMaterial",uniforms:no(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=it.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,M){_.getRGB(_l,Kv(t)),i.buffers.color.setClear(_l.r,_l.g,_l.b,M,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:v,addToRenderList:m,dispose:x}}function Fb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,N,O,H,Z){let q=!1;const K=h(H,O,N);s!==K&&(s=K,c(s.object)),q=p(y,H,O,Z),q&&g(y,H,O,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,N,O,H),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,N,O){const H=O.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let q=Z[N.id];q===void 0&&(q={},Z[N.id]=q);let K=q[H];return K===void 0&&(K=f(l()),q[H]=K),K}function f(y){const N=[],O=[],H=[];for(let Z=0;Z<n;Z++)N[Z]=0,O[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,N,O,H){const Z=s.attributes,q=N.attributes;let K=0;const te=O.getAttributes();for(const I in te)if(te[I].location>=0){const G=Z[I];let ie=q[I];if(ie===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),G===void 0||G.attribute!==ie||ie&&G.data!==ie.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function g(y,N,O,H){const Z={},q=N.attributes;let K=0;const te=O.getAttributes();for(const I in te)if(te[I].location>=0){let G=q[I];G===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(G=y.instanceColor));const ie={};ie.attribute=G,G&&G.data&&(ie.data=G.data),Z[I]=ie,K++}s.attributes=Z,s.attributesNum=K,s.index=H}function v(){const y=s.newAttributes;for(let N=0,O=y.length;N<O;N++)y[N]=0}function m(y){d(y,0)}function d(y,N){const O=s.newAttributes,H=s.enabledAttributes,Z=s.attributeDivisors;O[y]=1,H[y]===0&&(t.enableVertexAttribArray(y),H[y]=1),Z[y]!==N&&(t.vertexAttribDivisor(y,N),Z[y]=N)}function x(){const y=s.newAttributes,N=s.enabledAttributes;for(let O=0,H=N.length;O<H;O++)N[O]!==y[O]&&(t.disableVertexAttribArray(O),N[O]=0)}function _(y,N,O,H,Z,q,K){K===!0?t.vertexAttribIPointer(y,N,O,Z,q):t.vertexAttribPointer(y,N,O,H,Z,q)}function M(y,N,O,H){v();const Z=H.attributes,q=O.getAttributes(),K=N.defaultAttributeValues;for(const te in q){const I=q[te];if(I.location>=0){let F=Z[te];if(F===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),F!==void 0){const G=F.normalized,ie=F.itemSize,me=e.get(F);if(me===void 0)continue;const Be=me.buffer,ke=me.type,Ze=me.bytesPerElement,Y=ke===t.INT||ke===t.UNSIGNED_INT||F.gpuType===qh;if(F.isInterleavedBufferAttribute){const J=F.data,ve=J.stride,Ue=F.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<I.locationSize;Se++)d(I.location+Se,J.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<I.locationSize;Se++)m(I.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Se=0;Se<I.locationSize;Se++)_(I.location+Se,ie/I.locationSize,ke,G,ve*Ze,(Ue+ie/I.locationSize*Se)*Ze,Y)}else{if(F.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)d(I.location+J,F.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let J=0;J<I.locationSize;J++)m(I.location+J);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let J=0;J<I.locationSize;J++)_(I.location+J,ie/I.locationSize,ke,G,ie*Ze,ie/I.locationSize*J*Ze,Y)}}else if(K!==void 0){const G=K[te];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(I.location,G);break;case 3:t.vertexAttrib3fv(I.location,G);break;case 4:t.vertexAttrib4fv(I.location,G);break;default:t.vertexAttrib1fv(I.location,G)}}}}x()}function A(){D();for(const y in i){const N=i[y];for(const O in N){const H=N[O];for(const Z in H)u(H[Z].object),delete H[Z];delete N[O]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const N=i[y.id];for(const O in N){const H=N[O];for(const Z in H)u(H[Z].object),delete H[Z];delete N[O]}delete i[y.id]}function C(y){for(const N in i){const O=i[N];if(O[y.id]===void 0)continue;const H=O[y.id];for(const Z in H)u(H[Z].object),delete H[Z];delete O[y.id]}}function D(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ob(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==$n&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ci&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ai&&!D)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function zb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,_=x*4;let M=d.clippingState||null;l.value=M,M=u(g,f,_,p);for(let A=0;A!==_;++A)M[A]=n[A];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,M=p;_!==v;++_,M+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Bb(t){let e=new WeakMap;function n(o,a){return a===od?o.mapping=Js:a===ad&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===od||a===ad)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rr=4,g0=[.125,.215,.35,.446,.526,.582],Ir=20,Vb=512,Po=new Gr,v0=new et;let qu=null,Ku=0,Zu=0,Qu=!1;const Hb=new W;class _0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Hb}=s;qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:co,format:$n,colorSpace:to,depthBuffer:!1},r=y0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gb(s)),this._blurMaterial=Xb(s,e,n)}return r}_compileMaterial(e){const n=new Ui(new Mr,e);this._renderer.compile(n,Po)}_sceneToCubeUV(e,n,i,r,s){const l=new qt(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(v0),h.toneMapping=hr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new fo,new op({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,d=!0):(m.color.copy(v0),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const A=this._cubeSize;Ms(r,M*A,_>2?A:0,A,A),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Po)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const x=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=Wb(this._lodMax,x,_)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=.05+c*.95,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-rr?i-g+rr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ms(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Po),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ms(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Po)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ir;m>Ir&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let x=0;for(let C=0;C<Ir;++C){const D=C/v,b=Math.exp(-D*D/2);d.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const M=this._sizeLods[r],A=3*M*(r>_-rr?r-_+rr:0),w=4*(this._cubeSize-M);Ms(n,A,w,3*M,2*M),l.setRenderTarget(n),l.render(h,Po)}}function Gb(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+g0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-rr?l=g0[o-t+rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,D=w>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];x.set(b,v*g*w),_.set(f,m*g*w);const y=[w,w,w,w,w,w];M.set(y,d*g*w)}const A=new Mr;A.setAttribute("position",new ai(x,v)),A.setAttribute("uv",new ai(_,m)),A.setAttribute("faceIndex",new ai(M,d)),i.push(new Ui(A,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function y0(t,e,n){const i=new Qr(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Wb(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Xb(t,e,n){const i=new Float32Array(Ir),r=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function S0(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function M0(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===od||l===ad,u=l===Js||l===eo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new _0(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new _0(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $b(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_a("WebGLRenderer: "+i+" extension not supported."),r}}}function Yb(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,M=x.length;_<M;_+=3){const A=x[_+0],w=x[_+1],C=x[_+2];f.push(A,w,w,C,C,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const A=_+0,w=_+1,C=_+2;f.push(A,w,w,C,C,A)}}else return;const m=new(Xv(f)?qv:Yv)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qb(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*v[x];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Zb(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*h),D=new jv(C,A,w,h);D.type=Ai,D.needsUpdate=!0;const b=M*4;for(let N=0;N<h;N++){const O=d[N],H=x[N],Z=_[N],q=A*w*4*N;for(let K=0;K<O.count;K++){const te=K*b;g===!0&&(r.fromBufferAttribute(O,K),C[q+te+0]=r.x,C[q+te+1]=r.y,C[q+te+2]=r.z,C[q+te+3]=0),v===!0&&(r.fromBufferAttribute(H,K),C[q+te+4]=r.x,C[q+te+5]=r.y,C[q+te+6]=r.z,C[q+te+7]=0),m===!0&&(r.fromBufferAttribute(Z,K),C[q+te+8]=r.x,C[q+te+9]=r.y,C[q+te+10]=r.z,C[q+te+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new ze(A,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Qb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const i_=new nn,E0=new Jv(1,1),r_=new jv,s_=new SE,o_=new Qv,w0=[],b0=[],T0=new Float32Array(16),A0=new Float32Array(9),C0=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=w0[r];if(s===void 0&&(s=new Float32Array(r),w0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wc(t,e){let n=b0[e];n===void 0&&(n=new Int32Array(e),b0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;C0.set(i),t.uniformMatrix2fv(this.addr,!1,C0),Ut(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;A0.set(i),t.uniformMatrix3fv(this.addr,!1,A0),Ut(n,i)}}function s2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;T0.set(i),t.uniformMatrix4fv(this.addr,!1,T0),Ut(n,i)}}function o2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function u2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(E0.compareFunction=Wv,s=E0):s=i_,n.setTexture2D(e||s,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||s_,r)}function x2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||o_,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||r_,r)}function v2(t){switch(t){case 5126:return Jb;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return o2;case 35667:case 35671:return a2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return f2;case 36295:return d2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return g2}}function _2(t,e){t.uniform1fv(this.addr,e)}function y2(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function S2(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function M2(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function E2(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function w2(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function b2(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function T2(t,e){t.uniform1iv(this.addr,e)}function A2(t,e){t.uniform2iv(this.addr,e)}function C2(t,e){t.uniform3iv(this.addr,e)}function R2(t,e){t.uniform4iv(this.addr,e)}function P2(t,e){t.uniform1uiv(this.addr,e)}function L2(t,e){t.uniform2uiv(this.addr,e)}function N2(t,e){t.uniform3uiv(this.addr,e)}function D2(t,e){t.uniform4uiv(this.addr,e)}function I2(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||i_,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||s_,s[o])}function F2(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||o_,s[o])}function O2(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||r_,s[o])}function k2(t){switch(t){case 5126:return _2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return E2;case 35675:return w2;case 35676:return b2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return C2;case 35669:case 35673:return R2;case 5125:return P2;case 36294:return L2;case 36295:return N2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return O2}}class z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=v2(n.type)}}class B2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class V2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function R0(t,e){t.seq.push(e),t.map[e.id]=e}function H2(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){R0(n,c===void 0?new z2(a,t,e):new B2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new V2(a),R0(n,h)),n=h}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);H2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function P0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const G2=37297;let W2=0;function X2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const L0=new Ge;function j2(t){it._getMatrix(L0,it.workingColorSpace,t);const e=`mat3( ${L0.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case xc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function N0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+X2(t.getShaderSource(e),a)}else return s}function $2(t,e){const n=j2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Y2(t,e){let n;switch(e){case qM:n="Linear";break;case KM:n="Reinhard";break;case ZM:n="Cineon";break;case QM:n="ACESFilmic";break;case eE:n="AgX";break;case tE:n="Neutral";break;case JM:n="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new W;function q2(){it.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function Z2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ko(t){return t!==""}function D0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(t){return t.replace(J2,tT)}const eT=new Map;function tT(t,e){let n=je[e];if(n===void 0){const i=eT.get(e);if(i!==void 0)n=je[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(t){return t.replace(nT,iT)}function iT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function F0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function aT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Iv:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case YM:e="ENVMAP_BLENDING_ADD";break}return e}function lT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rT(n),c=sT(n),u=oT(n),h=aT(n),f=lT(n),p=K2(n),g=Z2(s),v=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ko).join(`
`),d.length>0&&(d+=`
`)):(m=[F0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),d=[F0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?je.tonemapping_pars_fragment:"",n.toneMapping!==hr?Y2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,$2("linearToOutputTexel",n.outputColorSpace),q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),o=Bd(o),o=D0(o,n),o=I0(o,n),a=Bd(a),a=D0(a,n),a=I0(a,n),o=U0(o),a=U0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+m+o,M=x+d+a,A=P0(r,r.VERTEX_SHADER,_),w=P0(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(A)||"",Z=r.getShaderInfoLog(w)||"",q=O.trim(),K=H.trim(),te=Z.trim();let I=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,w);else{const G=N0(r,A,"vertex"),ie=N0(r,w,"fragment");Tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+G+`
`+ie)}else q!==""?Ve("WebGLProgram: Program Info Log:",q):(K===""||te==="")&&(F=!1);F&&(N.diagnostics={runnable:I,programLog:q,vertexShader:{log:K,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(A),r.deleteShader(w),D=new Vl(r,v),b=Q2(r,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,G2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let uT=0;class fT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dT(e),n.set(e,i)),i}}class dT{constructor(e){this.id=uT++,this.code=e,this.usedTimes=0}}function hT(t,e,n,i,r,s,o){const a=new sp,l=new fT,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,N,O,H){const Z=O.fog,q=H.geometry,K=b.isMeshStandardMaterial?O.environment:null,te=(b.isMeshStandardMaterial?n:e).get(b.envMap||K),I=te&&te.mapping===Hc?te.image.height:null,F=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const G=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=G!==void 0?G.length:0;let me=0;q.morphAttributes.position!==void 0&&(me=1),q.morphAttributes.normal!==void 0&&(me=2),q.morphAttributes.color!==void 0&&(me=3);let Be,ke,Ze,Y;if(F){const Je=ni[F];Be=Je.vertexShader,ke=Je.fragmentShader}else Be=b.vertexShader,ke=b.fragmentShader,l.update(b),Ze=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const J=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,We=!!b.map,gt=!!b.matcap,Xe=!!te,ct=!!b.aoMap,L=!!b.lightMap,Ye=!!b.bumpMap,$e=!!b.normalMap,st=!!b.displacementMap,Me=!!b.emissiveMap,dt=!!b.metalnessMap,Ae=!!b.roughnessMap,Oe=b.anisotropy>0,T=b.clearcoat>0,S=b.dispersion>0,B=b.iridescence>0,Q=b.sheen>0,ne=b.transmission>0,$=Oe&&!!b.anisotropyMap,Te=T&&!!b.clearcoatMap,he=T&&!!b.clearcoatNormalMap,Ce=T&&!!b.clearcoatRoughnessMap,be=B&&!!b.iridescenceMap,re=B&&!!b.iridescenceThicknessMap,fe=Q&&!!b.sheenColorMap,Le=Q&&!!b.sheenRoughnessMap,P=!!b.specularMap,V=!!b.specularColorMap,se=!!b.specularIntensityMap,R=ne&&!!b.transmissionMap,oe=ne&&!!b.thicknessMap,ce=!!b.gradientMap,ue=!!b.alphaMap,le=b.alphaTest>0,ee=!!b.alphaHash,xe=!!b.extensions;let Re=hr;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Re=t.toneMapping);const rt={shaderID:F,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:ke,defines:b.defines,customVertexShaderID:Ze,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:to,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:gt,envMap:Xe,envMapMode:Xe&&te.mapping,envMapCubeUVHeight:I,aoMap:ct,lightMap:L,bumpMap:Ye,normalMap:$e,displacementMap:f&&st,emissiveMap:Me,normalMapObjectSpace:$e&&b.normalMapType===sE,normalMapTangentSpace:$e&&b.normalMapType===Gv,metalnessMap:dt,roughnessMap:Ae,anisotropy:Oe,anisotropyMap:$,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:he,clearcoatRoughnessMap:Ce,dispersion:S,iridescence:B,iridescenceMap:be,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:P,specularColorMap:V,specularIntensityMap:se,transmission:ne,transmissionMap:R,thicknessMap:oe,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Hs&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:le,alphaHash:ee,combine:b.combine,mapUv:We&&v(b.map.channel),aoMapUv:ct&&v(b.aoMap.channel),lightMapUv:L&&v(b.lightMap.channel),bumpMapUv:Ye&&v(b.bumpMap.channel),normalMapUv:$e&&v(b.normalMap.channel),displacementMapUv:st&&v(b.displacementMap.channel),emissiveMapUv:Me&&v(b.emissiveMap.channel),metalnessMapUv:dt&&v(b.metalnessMap.channel),roughnessMapUv:Ae&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:Te&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(b.sheenRoughnessMap.channel),specularMapUv:P&&v(b.specularMap.channel),specularColorMapUv:V&&v(b.specularColorMap.channel),specularIntensityMapUv:se&&v(b.specularIntensityMap.channel),transmissionMapUv:R&&v(b.transmissionMap.channel),thicknessMapUv:oe&&v(b.thicknessMap.channel),alphaMapUv:ue&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($e||Oe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(We||ue),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:Me&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)y.push(N),y.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(y,b),_(y,b),y.push(t.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const y=g[b.type];let N;if(y){const O=ni[y];N=IE.clone(O.uniforms)}else N=b.uniforms;return N}function A(b,y){let N;for(let O=0,H=u.length;O<H;O++){const Z=u[O];if(Z.cacheKey===y){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new cT(t,y,b,s),u.push(N)),N}function w(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function pT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function O0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function k0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||mT),i.length>1&&i.sort(f||O0),r.length>1&&r.sort(f||O0)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new k0,t.set(i,[o])):r>=s.length?(o=new k0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _T=0;function yT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ST(t){const e=new gT,n=vT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Ct,o=new Ct;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,x=0,_=0,M=0,A=0,w=0,C=0;c.sort(yT);for(let b=0,y=c.length;b<y;b++){const N=c[b],O=N.color,H=N.intensity,Z=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*H,h+=O.g*H,f+=O.b*H;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],H);C++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=K,p++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(O).multiplyScalar(H),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[v]=K;const te=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,te.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[v]=te.matrix,N.castShadow){const I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=q,M++}v++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(O).multiplyScalar(H),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=K,m++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const te=N.shadow,I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=N.shadow.matrix,_++}i.point[g]=K,g++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(H),K.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[d]=K,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==x||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==A||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=x,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=A,D.numLightProbes=C,i.version=_T++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const _=c[d];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function z0(t){const e=new ST(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new z0(t),e.set(r,[a])):s>=o.length?(a=new z0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ET=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bT(t,e,n){let i=new ap;const r=new ze,s=new ze,o=new At,a=new jE({depthPacking:rE}),l=new $E,c={},u=n.maxTextureSize,h={[vr]:mn,[mn]:vr,[Ei]:Ei},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ET,fragmentShader:wT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mr;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ui(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let d=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=t.getRenderTarget(),y=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=d!==yi&&this.type===yi,Z=d===yi&&this.type!==yi;for(let q=0,K=w.length;q<K;q++){const te=w[q],I=te.shadow;if(I===void 0){Ve("WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();if(r.multiply(F),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,I.mapSize.y=s.y)),I.map===null||H===!0||Z===!0){const ie=this.type!==yi?{minFilter:En,magFilter:En}:{};I.map!==null&&I.map.dispose(),I.map=new Qr(r.x,r.y,ie),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const G=I.getViewportCount();for(let ie=0;ie<G;ie++){const me=I.getViewport(ie);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o),I.updateMatrices(te,ie),i=I.getFrustum(),M(C,D,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&x(I,D),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(b,y,N)};function x(w,C){const D=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,D,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,D,p,v,null)}function _(w,C,D,b){let y=null;const N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)y=N;else if(y=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=y.uuid,H=C.uuid;let Z=c[O];Z===void 0&&(Z={},c[O]=Z);let q=Z[H];q===void 0&&(q=y.clone(),Z[H]=q,C.addEventListener("dispose",A)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,b===yi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=D}return y}function M(w,C,D,b,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const H=e.update(w),Z=w.material;if(Array.isArray(Z)){const q=H.groups;for(let K=0,te=q.length;K<te;K++){const I=q[K],F=Z[I.materialIndex];if(F&&F.visible){const G=_(w,F,b,y);w.onBeforeShadow(t,w,C,D,H,G,I),t.renderBufferDirect(D,null,H,G,w,I),w.onAfterShadow(t,w,C,D,H,G,I)}}}else if(Z.visible){const q=_(w,Z,b,y);w.onBeforeShadow(t,w,C,D,H,q,null),t.renderBufferDirect(D,null,H,q,w,null),w.onAfterShadow(t,w,C,D,H,q,null)}}const O=w.children;for(let H=0,Z=O.length;H<Z;H++)M(O[H],C,D,b,y)}function A(w){w.target.removeEventListener("dispose",A);for(const D in c){const b=c[D],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const TT={[Jf]:ed,[td]:rd,[nd]:sd,[Qs]:id,[ed]:Jf,[rd]:td,[sd]:nd,[id]:Qs};function AT(t,e){function n(){let R=!1;const oe=new At;let ce=null;const ue=new At(0,0,0,0);return{setMask:function(le){ce!==le&&!R&&(t.colorMask(le,le,le,le),ce=le)},setLocked:function(le){R=le},setClear:function(le,ee,xe,Re,rt){rt===!0&&(le*=Re,ee*=Re,xe*=Re),oe.set(le,ee,xe,Re),ue.equals(oe)===!1&&(t.clearColor(le,ee,xe,Re),ue.copy(oe))},reset:function(){R=!1,ce=null,ue.set(-1,0,0,0)}}}function i(){let R=!1,oe=!1,ce=null,ue=null,le=null;return{setReversed:function(ee){if(oe!==ee){const xe=e.get("EXT_clip_control");ee?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const Re=le;le=null,this.setClear(Re)}},getReversed:function(){return oe},setTest:function(ee){ee?J(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ee){ce!==ee&&!R&&(t.depthMask(ee),ce=ee)},setFunc:function(ee){if(oe&&(ee=TT[ee]),ue!==ee){switch(ee){case Jf:t.depthFunc(t.NEVER);break;case ed:t.depthFunc(t.ALWAYS);break;case td:t.depthFunc(t.LESS);break;case Qs:t.depthFunc(t.LEQUAL);break;case nd:t.depthFunc(t.EQUAL);break;case id:t.depthFunc(t.GEQUAL);break;case rd:t.depthFunc(t.GREATER);break;case sd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=ee}},setLocked:function(ee){R=ee},setClear:function(ee){le!==ee&&(oe&&(ee=1-ee),t.clearDepth(ee),le=ee)},reset:function(){R=!1,ce=null,ue=null,le=null,oe=!1}}}function r(){let R=!1,oe=null,ce=null,ue=null,le=null,ee=null,xe=null,Re=null,rt=null;return{setTest:function(Je){R||(Je?J(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!R&&(t.stencilMask(Je),oe=Je)},setFunc:function(Je,Ht,Gt){(ce!==Je||ue!==Ht||le!==Gt)&&(t.stencilFunc(Je,Ht,Gt),ce=Je,ue=Ht,le=Gt)},setOp:function(Je,Ht,Gt){(ee!==Je||xe!==Ht||Re!==Gt)&&(t.stencilOp(Je,Ht,Gt),ee=Je,xe=Ht,Re=Gt)},setLocked:function(Je){R=Je},setClear:function(Je){rt!==Je&&(t.clearStencil(Je),rt=Je)},reset:function(){R=!1,oe=null,ce=null,ue=null,le=null,ee=null,xe=null,Re=null,rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,_=null,M=null,A=null,w=null,C=new et(0,0,0),D=0,b=!1,y=null,N=null,O=null,H=null,Z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(I)[1]),K=te>=1):I.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),K=te>=2);let F=null,G={};const ie=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Be=new At().fromArray(ie),ke=new At().fromArray(me);function Ze(R,oe,ce,ue){const le=new Uint8Array(4),ee=t.createTexture();t.bindTexture(R,ee),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<ce;xe++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(oe+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return ee}const Y={};Y[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(Qs),Ye(!1),$e(zm),J(t.CULL_FACE),ct(Ri);function J(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function ve(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function Ue(R,oe){return h[R]!==oe?(t.bindFramebuffer(R,oe),h[R]=oe,R===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=oe),R===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Se(R,oe){let ce=p,ue=!1;if(R){ce=f.get(oe),ce===void 0&&(ce=[],f.set(oe,ce));const le=R.textures;if(ce.length!==le.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,xe=le.length;ee<xe;ee++)ce[ee]=t.COLOR_ATTACHMENT0+ee;ce.length=le.length,ue=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ce)}function We(R){return g!==R?(t.useProgram(R),g=R,!0):!1}const gt={[Dr]:t.FUNC_ADD,[PM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};gt[NM]=t.MIN,gt[DM]=t.MAX;const Xe={[IM]:t.ZERO,[UM]:t.ONE,[FM]:t.SRC_COLOR,[Zf]:t.SRC_ALPHA,[HM]:t.SRC_ALPHA_SATURATE,[BM]:t.DST_COLOR,[kM]:t.DST_ALPHA,[OM]:t.ONE_MINUS_SRC_COLOR,[Qf]:t.ONE_MINUS_SRC_ALPHA,[VM]:t.ONE_MINUS_DST_COLOR,[zM]:t.ONE_MINUS_DST_ALPHA,[GM]:t.CONSTANT_COLOR,[WM]:t.ONE_MINUS_CONSTANT_COLOR,[XM]:t.CONSTANT_ALPHA,[jM]:t.ONE_MINUS_CONSTANT_ALPHA};function ct(R,oe,ce,ue,le,ee,xe,Re,rt,Je){if(R===Ri){v===!0&&(ve(t.BLEND),v=!1);return}if(v===!1&&(J(t.BLEND),v=!0),R!==RM){if(R!==m||Je!==b){if((d!==Dr||M!==Dr)&&(t.blendEquation(t.FUNC_ADD),d=Dr,M=Dr),Je)switch(R){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.ONE,t.ONE);break;case Vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Tt("WebGLState: Invalid blending: ",R);break}else switch(R){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vm:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",R);break}x=null,_=null,A=null,w=null,C.set(0,0,0),D=0,m=R,b=Je}return}le=le||oe,ee=ee||ce,xe=xe||ue,(oe!==d||le!==M)&&(t.blendEquationSeparate(gt[oe],gt[le]),d=oe,M=le),(ce!==x||ue!==_||ee!==A||xe!==w)&&(t.blendFuncSeparate(Xe[ce],Xe[ue],Xe[ee],Xe[xe]),x=ce,_=ue,A=ee,w=xe),(Re.equals(C)===!1||rt!==D)&&(t.blendColor(Re.r,Re.g,Re.b,rt),C.copy(Re),D=rt),m=R,b=!1}function L(R,oe){R.side===Ei?ve(t.CULL_FACE):J(t.CULL_FACE);let ce=R.side===mn;oe&&(ce=!ce),Ye(ce),R.blending===Hs&&R.transparent===!1?ct(Ri):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const ue=R.stencilWrite;a.setTest(ue),ue&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(R){y!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),y=R)}function $e(R){R!==TM?(J(t.CULL_FACE),R!==N&&(R===zm?t.cullFace(t.BACK):R===AM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),N=R}function st(R){R!==O&&(K&&t.lineWidth(R),O=R)}function Me(R,oe,ce){R?(J(t.POLYGON_OFFSET_FILL),(H!==oe||Z!==ce)&&(t.polygonOffset(oe,ce),H=oe,Z=ce)):ve(t.POLYGON_OFFSET_FILL)}function dt(R){R?J(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Ae(R){R===void 0&&(R=t.TEXTURE0+q-1),F!==R&&(t.activeTexture(R),F=R)}function Oe(R,oe,ce){ce===void 0&&(F===null?ce=t.TEXTURE0+q-1:ce=F);let ue=G[ce];ue===void 0&&(ue={type:void 0,texture:void 0},G[ce]=ue),(ue.type!==R||ue.texture!==oe)&&(F!==ce&&(t.activeTexture(ce),F=ce),t.bindTexture(R,oe||Y[R]),ue.type=R,ue.texture=oe)}function T(){const R=G[F];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function Q(){try{t.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function ne(){try{t.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function he(){try{t.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Ce(){try{t.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function be(){try{t.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function re(){try{t.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function fe(R){Be.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Be.copy(R))}function Le(R){ke.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function P(R,oe){let ce=c.get(oe);ce===void 0&&(ce=new WeakMap,c.set(oe,ce));let ue=ce.get(R);ue===void 0&&(ue=t.getUniformBlockIndex(oe,R.name),ce.set(R,ue))}function V(R,oe){const ue=c.get(oe).get(R);l.get(oe)!==ue&&(t.uniformBlockBinding(oe,ue,R.__bindingPointIndex),l.set(oe,ue))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},F=null,G={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,_=null,M=null,A=null,w=null,C=new et(0,0,0),D=0,b=!1,y=null,N=null,O=null,H=null,Z=null,Be.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ve,bindFramebuffer:Ue,drawBuffers:Se,useProgram:We,setBlending:ct,setMaterial:L,setFlipSided:Ye,setCullFace:$e,setLineWidth:st,setPolygonOffset:Me,setScissorTest:dt,activeTexture:Ae,bindTexture:Oe,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:be,texImage3D:re,updateUBOMapping:P,uniformBlockBinding:V,texStorage2D:he,texStorage3D:Ce,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:fe,viewport:Le,reset:se}}function CT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):vc("canvas")}function v(T,S,B){let Q=1;const ne=Oe(T);if((ne.width>B||ne.height>B)&&(Q=B/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Q*ne.width),Te=Math.floor(Q*ne.height);h===void 0&&(h=g($,Te));const he=S?g($,Te):h;return he.width=$,he.height=Te,he.getContext("2d").drawImage(T,0,0,$,Te),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Te+")."),he}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){t.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(T,S,B,Q,ne=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),S===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){const Te=ne?xc:it.getTransfer(Q);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=Te===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(T,S){let B;return T?S===null||S===Kr||S===xa?B=t.DEPTH24_STENCIL8:S===Ai?B=t.DEPTH32F_STENCIL8:S===ma&&(B=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kr||S===xa?B=t.DEPTH_COMPONENT24:S===Ai?B=t.DEPTH_COMPONENT32F:S===ma&&(B=t.DEPTH_COMPONENT16),B}function A(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==En&&T.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),D(S),S.isVideoTexture&&u.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),y(S)}function D(T){const S=i.get(T);if(S.__webglInit===void 0)return;const B=T.source,Q=f.get(B);if(Q){const ne=Q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(T),Object.keys(Q).length===0&&f.delete(B)}i.remove(T)}function b(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const B=T.source,Q=f.get(B);delete Q[S.__cacheKey],o.memory.textures--}function y(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ne=0;ne<S.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let Q=0,ne=B.length;Q<ne;Q++){const $=i.get(B[Q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(T)}let N=0;function O(){N=0}function H(){const T=N;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}function Z(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const B=i.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const Q=T.image;if(Q===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,T,S);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function K(T,S){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Y(B,T,S);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function te(T,S){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Y(B,T,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function I(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const F={[ld]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[cd]:t.MIRRORED_REPEAT},G={[En]:t.NEAREST,[nE]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},ie={[oE]:t.NEVER,[dE]:t.ALWAYS,[aE]:t.LESS,[Wv]:t.LEQUAL,[lE]:t.EQUAL,[fE]:t.GEQUAL,[cE]:t.GREATER,[uE]:t.NOTEQUAL};function me(T,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===Eu||S.magFilter===el||S.magFilter===kr||S.minFilter===In||S.minFilter===Eu||S.minFilter===el||S.minFilter===kr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,F[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,F[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,F[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,G[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,G[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===En||S.minFilter!==el&&S.minFilter!==kr||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Be(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let ne=f.get(Q);ne===void 0&&(ne={},f.set(Q,ne));const $=Z(S);if($!==T.__cacheKey){ne[$]===void 0&&(ne[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[$].usedTimes++;const Te=ne[T.__cacheKey];Te!==void 0&&(ne[T.__cacheKey].usedTimes--,Te.usedTimes===0&&b(S)),T.__cacheKey=$,T.__webglTexture=ne[$].texture}return B}function ke(T,S,B){return Math.floor(Math.floor(T/B)/S)}function Ze(T,S,B,Q){const $=T.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,Q,S.data);else{$.sort((re,fe)=>re.start-fe.start);let Te=0;for(let re=1;re<$.length;re++){const fe=$[Te],Le=$[re],P=fe.start+fe.count,V=ke(Le.start,S.width,4),se=ke(fe.start,S.width,4);Le.start<=P+1&&V===se&&ke(Le.start+Le.count-1,S.width,4)===V?fe.count=Math.max(fe.count,Le.start+Le.count-fe.start):(++Te,$[Te]=Le)}$.length=Te+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let re=0,fe=$.length;re<fe;re++){const Le=$[re],P=Math.floor(Le.start/4),V=Math.ceil(Le.count/4),se=P%S.width,R=Math.floor(P/S.width),oe=V,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,se),t.pixelStorei(t.UNPACK_SKIP_ROWS,R),n.texSubImage2D(t.TEXTURE_2D,0,se,R,oe,ce,B,Q,S.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function Y(T,S,B){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=Be(T,S),$=S.source;n.bindTexture(Q,T.__webglTexture,t.TEXTURE0+B);const Te=i.get($);if($.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const he=it.getPrimaries(it.workingColorSpace),Ce=S.colorSpace===er?null:it.getPrimaries(S.colorSpace),be=S.colorSpace===er||he===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let re=v(S.image,!1,r.maxTextureSize);re=Ae(S,re);const fe=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let P=_(S.internalFormat,fe,Le,S.colorSpace,S.isVideoTexture);me(Q,S);let V;const se=S.mipmaps,R=S.isVideoTexture!==!0,oe=Te.__version===void 0||ne===!0,ce=$.dataReady,ue=A(S,re);if(S.isDepthTexture)P=M(S.format===va,S.type),oe&&(R?n.texStorage2D(t.TEXTURE_2D,1,P,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,P,re.width,re.height,0,fe,Le,null));else if(S.isDataTexture)if(se.length>0){R&&oe&&n.texStorage2D(t.TEXTURE_2D,ue,P,se[0].width,se[0].height);for(let le=0,ee=se.length;le<ee;le++)V=se[le],R?ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,V.width,V.height,fe,Le,V.data):n.texImage2D(t.TEXTURE_2D,le,P,V.width,V.height,0,fe,Le,V.data);S.generateMipmaps=!1}else R?(oe&&n.texStorage2D(t.TEXTURE_2D,ue,P,re.width,re.height),ce&&Ze(S,re,fe,Le)):n.texImage2D(t.TEXTURE_2D,0,P,re.width,re.height,0,fe,Le,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){R&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,P,se[0].width,se[0].height,re.depth);for(let le=0,ee=se.length;le<ee;le++)if(V=se[le],S.format!==$n)if(fe!==null)if(R){if(ce)if(S.layerUpdates.size>0){const xe=x0(V.width,V.height,S.format,S.type);for(const Re of S.layerUpdates){const rt=V.data.subarray(Re*xe/V.data.BYTES_PER_ELEMENT,(Re+1)*xe/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Re,V.width,V.height,1,fe,rt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,V.width,V.height,re.depth,fe,V.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,P,V.width,V.height,re.depth,0,V.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,V.width,V.height,re.depth,fe,Le,V.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,P,V.width,V.height,re.depth,0,fe,Le,V.data)}else{R&&oe&&n.texStorage2D(t.TEXTURE_2D,ue,P,se[0].width,se[0].height);for(let le=0,ee=se.length;le<ee;le++)V=se[le],S.format!==$n?fe!==null?R?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,V.width,V.height,fe,V.data):n.compressedTexImage2D(t.TEXTURE_2D,le,P,V.width,V.height,0,V.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,V.width,V.height,fe,Le,V.data):n.texImage2D(t.TEXTURE_2D,le,P,V.width,V.height,0,fe,Le,V.data)}else if(S.isDataArrayTexture)if(R){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,P,re.width,re.height,re.depth),ce)if(S.layerUpdates.size>0){const le=x0(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const xe=re.data.subarray(ee*le/re.data.BYTES_PER_ELEMENT,(ee+1)*le/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,fe,Le,xe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,P,re.width,re.height,re.depth,0,fe,Le,re.data);else if(S.isData3DTexture)R?(oe&&n.texStorage3D(t.TEXTURE_3D,ue,P,re.width,re.height,re.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,P,re.width,re.height,re.depth,0,fe,Le,re.data);else if(S.isFramebufferTexture){if(oe)if(R)n.texStorage2D(t.TEXTURE_2D,ue,P,re.width,re.height);else{let le=re.width,ee=re.height;for(let xe=0;xe<ue;xe++)n.texImage2D(t.TEXTURE_2D,xe,P,le,ee,0,fe,Le,null),le>>=1,ee>>=1}}else if(se.length>0){if(R&&oe){const le=Oe(se[0]);n.texStorage2D(t.TEXTURE_2D,ue,P,le.width,le.height)}for(let le=0,ee=se.length;le<ee;le++)V=se[le],R?ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,fe,Le,V):n.texImage2D(t.TEXTURE_2D,le,P,fe,Le,V);S.generateMipmaps=!1}else if(R){if(oe){const le=Oe(re);n.texStorage2D(t.TEXTURE_2D,ue,P,le.width,le.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,P,fe,Le,re);m(S)&&d(Q),Te.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,B){if(S.image.length!==6)return;const Q=Be(T,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const $=i.get(ne);if(ne.version!==$.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const Te=it.getPrimaries(it.workingColorSpace),he=S.colorSpace===er?null:it.getPrimaries(S.colorSpace),Ce=S.colorSpace===er||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!be&&!re?fe[ee]=v(S.image[ee],!0,r.maxCubemapSize):fe[ee]=re?S.image[ee].image:S.image[ee],fe[ee]=Ae(S,fe[ee]);const Le=fe[0],P=s.convert(S.format,S.colorSpace),V=s.convert(S.type),se=_(S.internalFormat,P,V,S.colorSpace),R=S.isVideoTexture!==!0,oe=$.__version===void 0||Q===!0,ce=ne.dataReady;let ue=A(S,Le);me(t.TEXTURE_CUBE_MAP,S);let le;if(be){R&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,se,Le.width,Le.height);for(let ee=0;ee<6;ee++){le=fe[ee].mipmaps;for(let xe=0;xe<le.length;xe++){const Re=le[xe];S.format!==$n?P!==null?R?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Re.width,Re.height,P,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,se,Re.width,Re.height,0,Re.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Re.width,Re.height,P,V,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,se,Re.width,Re.height,0,P,V,Re.data)}}}else{if(le=S.mipmaps,R&&oe){le.length>0&&ue++;const ee=Oe(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,se,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){R?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,P,V,fe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,se,fe[ee].width,fe[ee].height,0,P,V,fe[ee].data);for(let xe=0;xe<le.length;xe++){const rt=le[xe].image[ee].image;R?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,rt.width,rt.height,P,V,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,se,rt.width,rt.height,0,P,V,rt.data)}}else{R?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,P,V,fe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,se,P,V,fe[ee]);for(let xe=0;xe<le.length;xe++){const Re=le[xe];R?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,P,V,Re.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,se,P,V,Re.image[ee])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),$.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ve(T,S,B,Q,ne,$){const Te=s.convert(B.format,B.colorSpace),he=s.convert(B.type),Ce=_(B.internalFormat,Te,he,B.colorSpace),be=i.get(S),re=i.get(B);if(re.__renderTarget=S,!be.__hasExternalTextures){const fe=Math.max(1,S.width>>$),Le=Math.max(1,S.height>>$);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,$,Ce,fe,Le,S.depth,0,Te,he,null):n.texImage2D(ne,$,Ce,fe,Le,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,re.__webglTexture,0,st(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,re.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(T,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const Q=S.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,$=M(S.stencilBuffer,ne),Te=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=st(S);Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,$,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,T)}else{const Q=S.textures;for(let ne=0;ne<Q.length;ne++){const $=Q[ne],Te=s.convert($.format,$.colorSpace),he=s.convert($.type),Ce=_($.internalFormat,Te,he,$.colorSpace),be=st(S);B&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Ce,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ne=Q.__webglTexture,$=st(S);if(S.depthTexture.format===ga)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===va)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function We(T){const S=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Q=T.texture.mipmaps;Q&&Q.length>0?Se(S.__webglFramebuffer[0],T):Se(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[Q],T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}else{const Q=T.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(T,S,B){const Q=i.get(T);S!==void 0&&ve(Q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&We(T)}function Xe(T){const S=T.texture,B=i.get(T),Q=i.get(S);T.addEventListener("dispose",C);const ne=T.textures,$=T.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)B.__webglFramebuffer[he][Ce]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,Ce=ne.length;he<Ce;he++){const be=i.get(ne[he]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Me(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Ce=ne[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const be=s.convert(Ce.format,Ce.colorSpace),re=s.convert(Ce.type),fe=_(Ce.internalFormat,be,re,Ce.colorSpace,T.isXRRenderTarget===!0),Le=st(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,fe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),me(t.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ve(B.__webglFramebuffer[he][Ce],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce);else ve(B.__webglFramebuffer[he],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,Ce=ne.length;he<Ce;he++){const be=ne[he],re=i.get(be);let fe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,re.__webglTexture),me(fe,be),ve(B.__webglFramebuffer,T,be,t.COLOR_ATTACHMENT0+he,fe,0),m(be)&&d(fe)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Q.__webglTexture),me(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ve(B.__webglFramebuffer[Ce],T,S,t.COLOR_ATTACHMENT0,he,Ce);else ve(B.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,he,0);m(S)&&d(he),n.unbindTexture()}T.depthBuffer&&We(T)}function ct(T){const S=T.textures;for(let B=0,Q=S.length;B<Q;B++){const ne=S[B];if(m(ne)){const $=x(T),Te=i.get(ne).__webglTexture;n.bindTexture($,Te),d($),n.unbindTexture()}}}const L=[],Ye=[];function $e(T){if(T.samples>0){if(Me(T)===!1){const S=T.textures,B=T.width,Q=T.height;let ne=t.COLOR_BUFFER_BIT;const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(T),he=S.length>1;if(he)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ce=T.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<S.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const re=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,t.NEAREST),l===!0&&(L.length=0,Ye.length=0,L.push(t.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(L.push($),Ye.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const re=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function st(T){return Math.min(r.maxSamples,T.samples)}function Me(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Ae(T,S){const B=T.colorSpace,Q=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==to&&B!==er&&(it.getTransfer(B)===lt?(Q!==$n||ne!==ci)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",B)),S}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=I,this.rebindTextures=gt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Me}function RT(t,e){function n(i,r=er){let s;const o=it.getTransfer(r);if(i===ci)return t.UNSIGNED_BYTE;if(i===Kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===kv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fv)return t.BYTE;if(i===Ov)return t.SHORT;if(i===ma)return t.UNSIGNED_SHORT;if(i===qh)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===co)return t.HALF_FLOAT;if(i===Bv)return t.ALPHA;if(i===Vv)return t.RGB;if(i===$n)return t.RGBA;if(i===ga)return t.DEPTH_COMPONENT;if(i===va)return t.DEPTH_STENCIL;if(i===Hv)return t.RED;if(i===Qh)return t.RED_INTEGER;if(i===Jh)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===Ol||i===kl||i===zl||i===Bl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ud||i===fd||i===dd||i===hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gd||i===vd||i===_d||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===bd||i===Td||i===Ad||i===Cd||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Md)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ed)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Td)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ld||i===Nd||i===Dd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ld)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Ud||i===Fd||i===Od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Id)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new e_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:PT,fragmentShader:LT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ui(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends uo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new NT,d={},x=n.getContextAttributes();let _=null,M=null;const A=[],w=[],C=new ze;let D=null;const b=new qt;b.viewport=new At;const y=new qt;y.viewport=new At;const N=[b,y],O=new ZE;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=A[Y];return J===void 0&&(J=new ju,A[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=A[Y];return J===void 0&&(J=new ju,A[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=A[Y];return J===void 0&&(J=new ju,A[Y]=J),J.getHandSpace()};function q(Y){const J=w.indexOf(Y.inputSource);if(J===-1)return;const ve=A[J];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",te);for(let Y=0;Y<A.length;Y++){const J=w[Y];J!==null&&(w[Y]=null,A[Y].disconnect(J))}H=null,Z=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(_),p=null,f=null,h=null,r=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",K),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ue=null,Se=null;x.depth&&(Se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=x.stencil?va:ga,Ue=x.stencil?xa:Kr);const We={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Qr(f.textureWidth,f.textureHeight,{format:$n,type:ci,depthTexture:new Jv(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Qr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let J=0;J<Y.removed.length;J++){const ve=Y.removed[J],Ue=w.indexOf(ve);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(ve))}for(let J=0;J<Y.added.length;J++){const ve=Y.added[J];let Ue=w.indexOf(ve);if(Ue===-1){for(let We=0;We<A.length;We++)if(We>=w.length){w.push(ve),Ue=We;break}else if(w[We]===null){w[We]=ve,Ue=We;break}if(Ue===-1)break}const Se=A[Ue];Se&&Se.connect(ve)}}const I=new W,F=new W;function G(Y,J,ve){I.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(ve.matrixWorld);const Ue=I.distanceTo(F),Se=J.projectionMatrix.elements,We=ve.projectionMatrix.elements,gt=Se[14]/(Se[10]-1),Xe=Se[14]/(Se[10]+1),ct=(Se[9]+1)/Se[5],L=(Se[9]-1)/Se[5],Ye=(Se[8]-1)/Se[0],$e=(We[8]+1)/We[0],st=gt*Ye,Me=gt*$e,dt=Ue/(-Ye+$e),Ae=dt*-Ye;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Oe=gt+dt,T=Xe+dt,S=st-Ae,B=Me+(Ue-Ae),Q=ct*Xe/T*Oe,ne=L*Xe/T*Oe;Y.projectionMatrix.makePerspective(S,B,Q,ne,Oe,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ve=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),O.near=y.near=b.near=J,O.far=y.far=b.far=ve,(H!==O.near||Z!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,Z=O.far),O.layers.mask=Y.layers.mask|6,b.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Ue=Y.parent,Se=O.cameras;ie(O,Ue);for(let We=0;We<Se.length;We++)ie(Se[We],Ue);Se.length===2?G(O,b,y):O.projectionMatrix.copy(b.projectionMatrix),me(Y,O,Ue)};function me(Y,J,ve){ve===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let Be=null;function ke(Y,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ue=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let Xe=0;Xe<ve.length;Xe++){const ct=ve[Xe];let L=null;if(p!==null)L=p.getViewport(ct);else{const $e=h.getViewSubImage(f,ct);L=$e.viewport,Xe===0&&(e.setRenderTargetTextures(M,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(M))}let Ye=N[Xe];Ye===void 0&&(Ye=new qt,Ye.layers.enable(Xe),Ye.viewport=new At,N[Xe]=Ye),Ye.matrix.fromArray(ct.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ct.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(L.x,L.y,L.width,L.height),Xe===0&&(O.matrix.copy(Ye.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(Ye)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Xe=h.getDepthInformation(ve[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<ve.length;Xe++){const ct=ve[Xe].camera;if(ct){let L=d[ct];L||(L=new e_,d[ct]=L);const Ye=h.getCameraImage(ct);L.sourceTexture=Ye}}}}for(let ve=0;ve<A.length;ve++){const Ue=w[ve],Se=A[ve];Ue!==null&&Se!==void 0&&Se.update(Ue,J,c||o)}Be&&Be(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ze=new n_;Ze.setAnimationLoop(ke),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const Pr=new ui,IT=new Ct;function UT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Kv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,Pr.copy(M),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(IT.makeRotationFromEuler(Pr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=r[x.id];M===void 0&&(g(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(x,A);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function u(x){const _=h();x.__bindingPointIndex=_;const M=t.createBuffer(),A=x.__size,w=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=r[x.id],M=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,C=M.length;w<C;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,y=D.length;b<y;b++){const N=D[b];if(p(N,w,b,A)===!0){const O=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let Z=0;for(let q=0;q<H.length;q++){const K=H[q],te=v(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,O+Z,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,Z),Z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,M,A){const w=x.value,C=_+"_"+M;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const D=A[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){const _=x.uniforms;let M=0;const A=16;for(let C=0,D=_.length;C<D;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,N=b.length;y<N;y++){const O=b[y],H=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,q=H.length;Z<q;Z++){const K=H[Z],te=v(K),I=M%A,F=I%te.boundary,G=I+F;M+=F,G!==0&&A-G<te.storage&&(M+=A-G),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=te.storage}}}const w=M%A;return w>0&&(M+=A-w),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const OT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let vi=null;function kT(){return vi===null&&(vi=new VE(OT,32,32,Jh,co),vi.minFilter=In,vi.magFilter=In,vi.wrapS=Ti,vi.wrapT=Ti,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class zT{constructor(e={}){const{canvas:n=hE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Set([tp,ep,Qh]),v=new Set([ci,Kr,ma,xa,Kh,Zh]),m=new Uint32Array(4),d=new Int32Array(4);let x=null,_=null;const M=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=Pn;let D=0,b=0,y=null,N=-1,O=null;const H=new At,Z=new At;let q=null;const K=new et(0);let te=0,I=n.width,F=n.height,G=1,ie=null,me=null;const Be=new At(0,0,I,F),ke=new At(0,0,I,F);let Ze=!1;const Y=new ap;let J=!1,ve=!1;const Ue=new Ct,Se=new W,We=new At,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ct(){return y===null?G:1}let L=i;function Ye(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",xe,!1),L===null){const U="webgl2";if(L=Ye(U,E),L===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let $e,st,Me,dt,Ae,Oe,T,S,B,Q,ne,$,Te,he,Ce,be,re,fe,Le,P,V,se,R,oe;function ce(){$e=new $b(L),$e.init(),se=new RT(L,$e),st=new kb(L,$e,e,se),Me=new AT(L,$e),st.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),dt=new Kb(L),Ae=new pT,Oe=new CT(L,$e,Me,Ae,st,se,dt),T=new Bb(w),S=new jb(w),B=new e3(L),R=new Fb(L,B),Q=new Yb(L,B,dt,R),ne=new Qb(L,Q,B,dt),Le=new Zb(L,st,Oe),be=new zb(Ae),$=new hT(w,T,S,$e,st,R,be),Te=new UT(w,Ae),he=new xT,Ce=new MT($e),fe=new Ub(w,T,S,Me,ne,p,l),re=new bT(w,ne,st),oe=new FT(L,dt,st,Me),P=new Ob(L,$e,dt),V=new qb(L,$e,dt),dt.programs=$.programs,w.capabilities=st,w.extensions=$e,w.properties=Ae,w.renderLists=he,w.shadowMap=re,w.state=Me,w.info=dt}ce();const ue=new DT(w,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(I,F,!1))},this.getSize=function(E){return E.set(I,F)},this.setSize=function(E,U,X=!0){if(ue.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,F=U,n.width=Math.floor(E*G),n.height=Math.floor(U*G),X===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(I*G,F*G).floor()},this.setDrawingBufferSize=function(E,U,X){I=E,F=U,G=X,n.width=Math.floor(E*X),n.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(Be)},this.setViewport=function(E,U,X,j){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,U,X,j),Me.viewport(H.copy(Be).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,U,X,j){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,U,X,j),Me.scissor(Z.copy(ke).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){Me.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let j=0;if(E){let k=!1;if(y!==null){const de=y.texture.format;k=g.has(de)}if(k){const de=y.texture.type,ge=v.has(de),we=fe.getClearColor(),ye=fe.getClearAlpha(),Ie=we.r,Fe=we.g,Pe=we.b;ge?(m[0]=Ie,m[1]=Fe,m[2]=Pe,m[3]=ye,L.clearBufferuiv(L.COLOR,0,m)):(d[0]=Ie,d[1]=Fe,d[2]=Pe,d[3]=ye,L.clearBufferiv(L.COLOR,0,d))}else j|=L.COLOR_BUFFER_BIT}U&&(j|=L.DEPTH_BUFFER_BIT),X&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),fe.dispose(),he.dispose(),Ce.dispose(),Ae.dispose(),T.dispose(),S.dispose(),ne.dispose(),R.dispose(),oe.dispose(),$.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",mp),ue.removeEventListener("sessionend",xp),Er.stop()};function le(E){E.preventDefault(),$m("WebGLRenderer: Context Lost."),C=!0}function ee(){$m("WebGLRenderer: Context Restored."),C=!1;const E=dt.autoReset,U=re.enabled,X=re.autoUpdate,j=re.needsUpdate,k=re.type;ce(),dt.autoReset=E,re.enabled=U,re.autoUpdate=X,re.needsUpdate=j,re.type=k}function xe(E){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const U=E.target;U.removeEventListener("dispose",Re),rt(U)}function rt(E){Je(E),Ae.remove(E)}function Je(E){const U=Ae.get(E).programs;U!==void 0&&(U.forEach(function(X){$.releaseProgram(X)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,j,k,de){U===null&&(U=gt);const ge=k.isMesh&&k.matrixWorld.determinant()<0,we=U_(E,U,X,j,k);Me.setMaterial(j,ge);let ye=X.index,Ie=1;if(j.wireframe===!0){if(ye=Q.getWireframeAttribute(X),ye===void 0)return;Ie=2}const Fe=X.drawRange,Pe=X.attributes.position;let Qe=Fe.start*Ie,at=(Fe.start+Fe.count)*Ie;de!==null&&(Qe=Math.max(Qe,de.start*Ie),at=Math.min(at,(de.start+de.count)*Ie)),ye!==null?(Qe=Math.max(Qe,0),at=Math.min(at,ye.count)):Pe!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,Pe.count));const Et=at-Qe;if(Et<0||Et===1/0)return;R.setup(k,j,we,X,ye);let wt,ut=P;if(ye!==null&&(wt=B.get(ye),ut=V,ut.setIndex(wt)),k.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*ct()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(k.isLine){let De=j.linewidth;De===void 0&&(De=1),Me.setLineWidth(De*ct()),k.isLineSegments?ut.setMode(L.LINES):k.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else k.isPoints?ut.setMode(L.POINTS):k.isSprite&&ut.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)_a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,vt=k._multiDrawCounts,nt=k._multiDrawCount,xn=ye?B.get(ye).bytesPerElement:1,ss=Ae.get(j).currentProgram.getUniforms();for(let gn=0;gn<nt;gn++)ss.setValue(L,"_gl_DrawID",gn),ut.render(De[gn]/xn,vt[gn])}else if(k.isInstancedMesh)ut.renderInstances(Qe,Et,k.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,De);ut.renderInstances(Qe,Et,vt)}else ut.render(Qe,Et)};function Ht(E,U,X){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Fa(E,U,X),E.side=vr,E.needsUpdate=!0,Fa(E,U,X),E.side=Ei):Fa(E,U,X)}this.compile=function(E,U,X=null){X===null&&(X=E),_=Ce.get(X),_.init(U),A.push(_),X.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const j=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const we=de[ge];Ht(we,X,k),j.add(we)}else Ht(de,X,k),j.add(de)}),_=A.pop(),j},this.compileAsync=function(E,U,X=null){const j=this.compile(E,U,X);return new Promise(k=>{function de(){if(j.forEach(function(ge){Ae.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){k(E);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Gt=null;function I_(E){Gt&&Gt(E)}function mp(){Er.stop()}function xp(){Er.start()}const Er=new n_;Er.setAnimationLoop(I_),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(E){Gt=E,ue.setAnimationLoop(E),E===null?Er.stop():Er.start()},ue.addEventListener("sessionstart",mp),ue.addEventListener("sessionend",xp),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,U,y),_=Ce.get(E,A.length),_.init(U),A.push(_),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ue,ri,U.reversedDepth),ve=this.localClippingEnabled,J=be.init(this.clippingPlanes,ve),x=he.get(E,M.length),x.init(),M.push(x),ue.enabled===!0&&ue.isPresenting===!0){const de=w.xr.getDepthSensingMesh();de!==null&&Yc(de,U,-1/0,w.sortObjects)}Yc(E,U,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(ie,me),Xe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Xe&&fe.addToRenderList(x,E),this.info.render.frame++,J===!0&&be.beginShadows();const X=_.state.shadowsArray;re.render(X,E,U),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,k=x.transmissive;if(_.setupLights(),U.isArrayCamera){const de=U.cameras;if(k.length>0)for(let ge=0,we=de.length;ge<we;ge++){const ye=de[ge];vp(j,k,E,ye)}Xe&&fe.render(E);for(let ge=0,we=de.length;ge<we;ge++){const ye=de[ge];gp(x,E,ye,ye.viewport)}}else k.length>0&&vp(j,k,E,U),Xe&&fe.render(E),gp(x,E,U);y!==null&&b===0&&(Oe.updateMultisampleRenderTarget(y),Oe.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(w,E,U),R.resetDefaultState(),N=-1,O=null,A.pop(),A.length>0?(_=A[A.length-1],J===!0&&be.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function Yc(E,U,X,j){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){j&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);const ge=ne.update(E),we=E.material;we.visible&&x.push(E,ge,we,X,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const ge=ne.update(E),we=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),We.copy(ge.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(we)){const ye=ge.groups;for(let Ie=0,Fe=ye.length;Ie<Fe;Ie++){const Pe=ye[Ie],Qe=we[Pe.materialIndex];Qe&&Qe.visible&&x.push(E,ge,Qe,X,We.z,Pe)}}else we.visible&&x.push(E,ge,we,X,We.z,null)}}const de=E.children;for(let ge=0,we=de.length;ge<we;ge++)Yc(de[ge],U,X,j)}function gp(E,U,X,j){const{opaque:k,transmissive:de,transparent:ge}=E;_.setupLightsView(X),J===!0&&be.setGlobalState(w.clippingPlanes,X),j&&Me.viewport(H.copy(j)),k.length>0&&Ua(k,U,X),de.length>0&&Ua(de,U,X),ge.length>0&&Ua(ge,U,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vp(E,U,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new Qr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?co:ci,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const de=_.state.transmissionRenderTarget[j.id],ge=j.viewport||H;de.setSize(ge.z*w.transmissionResolutionScale,ge.w*w.transmissionResolutionScale);const we=w.getRenderTarget(),ye=w.getActiveCubeFace(),Ie=w.getActiveMipmapLevel();w.setRenderTarget(de),w.getClearColor(K),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear(),Xe&&fe.render(X);const Fe=w.toneMapping;w.toneMapping=hr;const Pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),J===!0&&be.setGlobalState(w.clippingPlanes,j),Ua(E,X,j),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let at=0,Et=U.length;at<Et;at++){const wt=U[at],{object:ut,geometry:De,material:vt,group:nt}=wt;if(vt.side===Ei&&ut.layers.test(j.layers)){const xn=vt.side;vt.side=mn,vt.needsUpdate=!0,_p(ut,X,j,De,vt,nt),vt.side=xn,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de))}w.setRenderTarget(we,ye,Ie),w.setClearColor(K,te),Pe!==void 0&&(j.viewport=Pe),w.toneMapping=Fe}function Ua(E,U,X){const j=U.isScene===!0?U.overrideMaterial:null;for(let k=0,de=E.length;k<de;k++){const ge=E[k],{object:we,geometry:ye,group:Ie}=ge;let Fe=ge.material;Fe.allowOverride===!0&&j!==null&&(Fe=j),we.layers.test(X.layers)&&_p(we,U,X,ye,Fe,Ie)}}function _p(E,U,X,j,k,de){E.onBeforeRender(w,U,X,j,k,de),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(w,U,X,j,E,de),k.transparent===!0&&k.side===Ei&&k.forceSinglePass===!1?(k.side=mn,k.needsUpdate=!0,w.renderBufferDirect(X,U,j,k,E,de),k.side=vr,k.needsUpdate=!0,w.renderBufferDirect(X,U,j,k,E,de),k.side=Ei):w.renderBufferDirect(X,U,j,k,E,de),E.onAfterRender(w,U,X,j,k,de)}function Fa(E,U,X){U.isScene!==!0&&(U=gt);const j=Ae.get(E),k=_.state.lights,de=_.state.shadowsArray,ge=k.state.version,we=$.getParameters(E,k.state,de,U,X),ye=$.getProgramCacheKey(we);let Ie=j.programs;j.environment=E.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(E.isMeshStandardMaterial?S:T).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Re),Ie=new Map,j.programs=Ie);let Fe=Ie.get(ye);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===ge)return Sp(E,we),Fe}else we.uniforms=$.getUniforms(E),E.onBeforeCompile(we,w),Fe=$.acquireProgram(we,ye),Ie.set(ye,Fe),j.uniforms=we.uniforms;const Pe=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=be.uniform),Sp(E,we),j.needsLights=O_(E),j.lightsStateVersion=ge,j.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function yp(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Vl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Sp(E,U){const X=Ae.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function U_(E,U,X,j,k){U.isScene!==!0&&(U=gt),Oe.resetTextureUnits();const de=U.fog,ge=j.isMeshStandardMaterial?U.environment:null,we=y===null?w.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:to,ye=(j.isMeshStandardMaterial?S:T).get(j.envMap||ge),Ie=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pe=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let Et=hr;j.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Et=w.toneMapping);const wt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=wt!==void 0?wt.length:0,De=Ae.get(j),vt=_.state.lights;if(J===!0&&(ve===!0||E!==O)){const Qt=E===O&&j.id===N;be.setState(j,E,Qt)}let nt=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vt.state.version||De.outputColorSpace!==we||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==ye||j.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==be.numPlanes||De.numIntersection!==be.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==Qe||De.morphColors!==at||De.toneMapping!==Et||De.morphTargetsCount!==ut)&&(nt=!0):(nt=!0,De.__version=j.version);let xn=De.currentProgram;nt===!0&&(xn=Fa(j,U,k));let ss=!1,gn=!1,po=!1;const _t=xn.getUniforms(),on=De.uniforms;if(Me.useProgram(xn.program)&&(ss=!0,gn=!0,po=!0),j.id!==N&&(N=j.id,gn=!0),ss||O!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",E.projectionMatrix),_t.setValue(L,"viewMatrix",E.matrixWorldInverse);const an=_t.map.cameraPosition;an!==void 0&&an.setValue(L,Se.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,gn=!0,po=!0)}if(k.isSkinnedMesh){_t.setOptional(L,k,"bindMatrix"),_t.setOptional(L,k,"bindMatrixInverse");const Qt=k.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),_t.setValue(L,"boneTexture",Qt.boneTexture,Oe))}k.isBatchedMesh&&(_t.setOptional(L,k,"batchingTexture"),_t.setValue(L,"batchingTexture",k._matricesTexture,Oe),_t.setOptional(L,k,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",k._indirectTexture,Oe),_t.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",k._colorsTexture,Oe));const Cn=X.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Le.update(k,X,xn),(gn||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,_t.setValue(L,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(on.envMap.value=ye,on.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=kT()),gn&&(_t.setValue(L,"toneMappingExposure",w.toneMappingExposure),De.needsLights&&F_(on,po),de&&j.fog===!0&&Te.refreshFogUniforms(on,de),Te.refreshMaterialUniforms(on,j,G,F,_.state.transmissionRenderTarget[E.id]),Vl.upload(L,yp(De),on,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vl.upload(L,yp(De),on,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(L,"center",k.center),_t.setValue(L,"modelViewMatrix",k.modelViewMatrix),_t.setValue(L,"normalMatrix",k.normalMatrix),_t.setValue(L,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Qt=j.uniformsGroups;for(let an=0,qc=Qt.length;an<qc;an++){const wr=Qt[an];oe.update(wr,xn),oe.bind(wr,xn)}}return xn}function F_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function O_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,U,X){const j=Ae.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ae.get(E.texture).__webglTexture=U,Ae.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const X=Ae.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const k_=L.createFramebuffer();this.setRenderTarget=function(E,U=0,X=0){y=E,D=U,b=X;let j=!0,k=null,de=!1,ge=!1;if(E){const ye=Ae.get(E);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(ye.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(ye.__hasExternalTextures)Oe.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&Ae.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Fe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?k=Fe[U][X]:k=Fe[U],de=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?k=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[X]:k=Fe,H.copy(E.viewport),Z.copy(E.scissor),q=E.scissorTest}else H.copy(Be).multiplyScalar(G).floor(),Z.copy(ke).multiplyScalar(G).floor(),q=Ze;if(X!==0&&(k=k_),Me.bindFramebuffer(L.FRAMEBUFFER,k)&&j&&Me.drawBuffers(E,k),Me.viewport(H),Me.scissor(Z),Me.setScissorTest(q),de){const ye=Ae.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,X)}else if(ge){const ye=U;for(let Ie=0;Ie<E.textures.length;Ie++){const Fe=Ae.get(E.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,X,ye)}}else if(E!==null&&X!==0){const ye=Ae.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,X)}N=-1},this.readRenderTargetPixels=function(E,U,X,j,k,de,ge,we=0){if(!(E&&E.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Me.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Ie=E.textures[we],Fe=Ie.format,Pe=Ie.type;if(!st.textureFormatReadable(Fe)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Pe)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-j&&X>=0&&X<=E.height-k&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,X,j,k,se.convert(Fe),se.convert(Pe),de))}finally{const Ie=y!==null?Ae.get(y).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,j,k,de,ge,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(U>=0&&U<=E.width-j&&X>=0&&X<=E.height-k){Me.bindFramebuffer(L.FRAMEBUFFER,ye);const Ie=E.textures[we],Fe=Ie.format,Pe=Ie.type;if(!st.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,X,j,k,se.convert(Fe),se.convert(Pe),0);const at=y!==null?Ae.get(y).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,at);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pE(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Qe),L.deleteSync(Et),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){const j=Math.pow(2,-X),k=Math.floor(E.image.width*j),de=Math.floor(E.image.height*j),ge=U!==null?U.x:0,we=U!==null?U.y:0;Oe.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ge,we,k,de),Me.unbindTexture()};const z_=L.createFramebuffer(),B_=L.createFramebuffer();this.copyTextureToTexture=function(E,U,X=null,j=null,k=0,de=null){de===null&&(k!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=k,k=0):de=0);let ge,we,ye,Ie,Fe,Pe,Qe,at,Et;const wt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(X!==null)ge=X.max.x-X.min.x,we=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Fe=X.min.y,Pe=X.isBox3?X.min.z:0;else{const Cn=Math.pow(2,-k);ge=Math.floor(wt.width*Cn),we=Math.floor(wt.height*Cn),E.isDataArrayTexture?ye=wt.depth:E.isData3DTexture?ye=Math.floor(wt.depth*Cn):ye=1,Ie=0,Fe=0,Pe=0}j!==null?(Qe=j.x,at=j.y,Et=j.z):(Qe=0,at=0,Et=0);const ut=se.convert(U.format),De=se.convert(U.type);let vt;U.isData3DTexture?(Oe.setTexture3D(U,0),vt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),vt=L.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),xn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ss=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),po=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const _t=E.isDataArrayTexture||E.isData3DTexture,on=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Cn=Ae.get(E),Qt=Ae.get(U),an=Ae.get(Cn.__renderTarget),qc=Ae.get(Qt.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,qc.__webglFramebuffer);for(let wr=0;wr<ye;wr++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(E).__webglTexture,k,Pe+wr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,de,Et+wr)),L.blitFramebuffer(Ie,Fe,ge,we,Qe,at,ge,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||Ae.has(E)){const Cn=Ae.get(E),Qt=Ae.get(U);Me.bindFramebuffer(L.READ_FRAMEBUFFER,z_),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,B_);for(let an=0;an<ye;an++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cn.__webglTexture,k,Pe+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cn.__webglTexture,k),on?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,de,Et+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,de),k!==0?L.blitFramebuffer(Ie,Fe,ge,we,Qe,at,ge,we,L.COLOR_BUFFER_BIT,L.NEAREST):on?L.copyTexSubImage3D(vt,de,Qe,at,Et+an,Ie,Fe,ge,we):L.copyTexSubImage2D(vt,de,Qe,at,Ie,Fe,ge,we);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else on?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(vt,de,Qe,at,Et,ge,we,ye,ut,De,wt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,de,Qe,at,Et,ge,we,ye,ut,wt.data):L.texSubImage3D(vt,de,Qe,at,Et,ge,we,ye,ut,De,wt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Qe,at,ge,we,ut,De,wt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Qe,at,wt.width,wt.height,ut,wt.data):L.texSubImage2D(L.TEXTURE_2D,de,Qe,at,ge,we,ut,De,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ss),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,po),de===0&&U.generateMipmaps&&L.generateMipmap(vt),Me.unbindTexture()},this.initRenderTarget=function(E){Ae.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){D=0,b=0,y=null,Me.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}var BT=Object.defineProperty,VT=(t,e,n)=>e in t?BT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,HT=(t,e,n)=>(VT(t,e+"",n),n);class GT{constructor(){HT(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}var WT=Object.defineProperty,XT=(t,e,n)=>e in t?WT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ne=(t,e,n)=>(XT(t,typeof e!="symbol"?e+"":e,n),n);const Sl=new rp,B0=new Ki,jT=Math.cos(70*(Math.PI/180)),V0=(t,e)=>(t%e+e)%e;class $T extends GT{constructor(e,n){super(),Ne(this,"object"),Ne(this,"domElement"),Ne(this,"enabled",!0),Ne(this,"target",new W),Ne(this,"minDistance",0),Ne(this,"maxDistance",1/0),Ne(this,"minZoom",0),Ne(this,"maxZoom",1/0),Ne(this,"minPolarAngle",0),Ne(this,"maxPolarAngle",Math.PI),Ne(this,"minAzimuthAngle",-1/0),Ne(this,"maxAzimuthAngle",1/0),Ne(this,"enableDamping",!1),Ne(this,"dampingFactor",.05),Ne(this,"enableZoom",!0),Ne(this,"zoomSpeed",1),Ne(this,"enableRotate",!0),Ne(this,"rotateSpeed",1),Ne(this,"enablePan",!0),Ne(this,"panSpeed",1),Ne(this,"screenSpacePanning",!0),Ne(this,"keyPanSpeed",7),Ne(this,"zoomToCursor",!1),Ne(this,"autoRotate",!1),Ne(this,"autoRotateSpeed",2),Ne(this,"reverseOrbit",!1),Ne(this,"reverseHorizontalOrbit",!1),Ne(this,"reverseVerticalOrbit",!1),Ne(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Ne(this,"mouseButtons",{LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN}),Ne(this,"touches",{ONE:ls.ROTATE,TWO:ls.DOLLY_PAN}),Ne(this,"target0"),Ne(this,"position0"),Ne(this,"zoom0"),Ne(this,"_domElementKeyEvents",null),Ne(this,"getPolarAngle"),Ne(this,"getAzimuthalAngle"),Ne(this,"setPolarAngle"),Ne(this,"setAzimuthalAngle"),Ne(this,"getDistance"),Ne(this,"getZoomScale"),Ne(this,"listenToKeyEvents"),Ne(this,"stopListenToKeyEvents"),Ne(this,"saveState"),Ne(this,"reset"),Ne(this,"update"),Ne(this,"connect"),Ne(this,"dispose"),Ne(this,"dollyIn"),Ne(this,"dollyOut"),Ne(this,"getScale"),Ne(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=P=>{let V=V0(P,2*Math.PI),se=u.phi;se<0&&(se+=2*Math.PI),V<0&&(V+=2*Math.PI);let R=Math.abs(V-se);2*Math.PI-R<R&&(V<se?V+=2*Math.PI:se+=2*Math.PI),h.phi=V-se,i.update()},this.setAzimuthalAngle=P=>{let V=V0(P,2*Math.PI),se=u.theta;se<0&&(se+=2*Math.PI),V<0&&(V+=2*Math.PI);let R=Math.abs(V-se);2*Math.PI-R<R&&(V<se?V+=2*Math.PI:se+=2*Math.PI),h.theta=V-se,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=P=>{P.addEventListener("keydown",$),this._domElementKeyEvents=P},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",$),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=a.NONE},this.update=(()=>{const P=new W,V=new W(0,1,0),se=new Zr().setFromUnitVectors(e.up,V),R=se.clone().invert(),oe=new W,ce=new Zr,ue=2*Math.PI;return function(){const ee=i.object.position;se.setFromUnitVectors(e.up,V),R.copy(se).invert(),P.copy(ee).sub(i.target),P.applyQuaternion(se),u.setFromVector3(P),i.autoRotate&&l===a.NONE&&Z(O()),i.enableDamping?(u.theta+=h.theta*i.dampingFactor,u.phi+=h.phi*i.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let xe=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(xe)&&isFinite(Re)&&(xe<-Math.PI?xe+=ue:xe>Math.PI&&(xe-=ue),Re<-Math.PI?Re+=ue:Re>Math.PI&&(Re-=ue),xe<=Re?u.theta=Math.max(xe,Math.min(Re,u.theta)):u.theta=u.theta>(xe+Re)/2?Math.max(xe,u.theta):Math.min(Re,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.zoomToCursor&&b||i.object.isOrthographicCamera?u.radius=Be(u.radius):u.radius=Be(u.radius*f),P.setFromSpherical(u),P.applyQuaternion(R),ee.copy(i.target).add(P),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let rt=!1;if(i.zoomToCursor&&b){let Je=null;if(i.object instanceof qt&&i.object.isPerspectiveCamera){const Ht=P.length();Je=Be(Ht*f);const Gt=Ht-Je;i.object.position.addScaledVector(C,Gt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ht=new W(D.x,D.y,0);Ht.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),rt=!0;const Gt=new W(D.x,D.y,0);Gt.unproject(i.object),i.object.position.sub(Gt).add(Ht),i.object.updateMatrixWorld(),Je=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Je!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Je).add(i.object.position):(Sl.origin.copy(i.object.position),Sl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Sl.direction))<jT?e.lookAt(i.target):(B0.setFromNormalAndCoplanarPoint(i.object.up,i.target),Sl.intersectPlane(B0,i.target))))}else i.object instanceof Gr&&i.object.isOrthographicCamera&&(rt=f!==1,rt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix()));return f=1,b=!1,rt||oe.distanceToSquared(i.object.position)>c||8*(1-ce.dot(i.object.quaternion))>c?(i.dispatchEvent(r),oe.copy(i.object.position),ce.copy(i.object.quaternion),rt=!1,!0):!1}})(),this.connect=P=>{i.domElement=P,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",Ce),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ne)},this.dispose=()=>{var P,V,se,R,oe,ce;i.domElement&&(i.domElement.style.touchAction="auto"),(P=i.domElement)==null||P.removeEventListener("contextmenu",Ce),(V=i.domElement)==null||V.removeEventListener("pointerdown",Oe),(se=i.domElement)==null||se.removeEventListener("pointercancel",S),(R=i.domElement)==null||R.removeEventListener("wheel",ne),(oe=i.domElement)==null||oe.ownerDocument.removeEventListener("pointermove",T),(ce=i.domElement)==null||ce.ownerDocument.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",$)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new m0,h=new m0;let f=1;const p=new W,g=new ze,v=new ze,m=new ze,d=new ze,x=new ze,_=new ze,M=new ze,A=new ze,w=new ze,C=new W,D=new ze;let b=!1;const y=[],N={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function H(){return Math.pow(.95,i.zoomSpeed)}function Z(P){i.reverseOrbit||i.reverseHorizontalOrbit?h.theta+=P:h.theta-=P}function q(P){i.reverseOrbit||i.reverseVerticalOrbit?h.phi+=P:h.phi-=P}const K=(()=>{const P=new W;return function(se,R){P.setFromMatrixColumn(R,0),P.multiplyScalar(-se),p.add(P)}})(),te=(()=>{const P=new W;return function(se,R){i.screenSpacePanning===!0?P.setFromMatrixColumn(R,1):(P.setFromMatrixColumn(R,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(se),p.add(P)}})(),I=(()=>{const P=new W;return function(se,R){const oe=i.domElement;if(oe&&i.object instanceof qt&&i.object.isPerspectiveCamera){const ce=i.object.position;P.copy(ce).sub(i.target);let ue=P.length();ue*=Math.tan(i.object.fov/2*Math.PI/180),K(2*se*ue/oe.clientHeight,i.object.matrix),te(2*R*ue/oe.clientHeight,i.object.matrix)}else oe&&i.object instanceof Gr&&i.object.isOrthographicCamera?(K(se*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),te(R*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function F(P){i.object instanceof qt&&i.object.isPerspectiveCamera||i.object instanceof Gr&&i.object.isOrthographicCamera?f=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(P){F(f/P)}function ie(P){F(f*P)}function me(P){if(!i.zoomToCursor||!i.domElement)return;b=!0;const V=i.domElement.getBoundingClientRect(),se=P.clientX-V.left,R=P.clientY-V.top,oe=V.width,ce=V.height;D.x=se/oe*2-1,D.y=-(R/ce)*2+1,C.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function Be(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ke(P){g.set(P.clientX,P.clientY)}function Ze(P){me(P),M.set(P.clientX,P.clientY)}function Y(P){d.set(P.clientX,P.clientY)}function J(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(i.rotateSpeed);const V=i.domElement;V&&(Z(2*Math.PI*m.x/V.clientHeight),q(2*Math.PI*m.y/V.clientHeight)),g.copy(v),i.update()}function ve(P){A.set(P.clientX,P.clientY),w.subVectors(A,M),w.y>0?G(H()):w.y<0&&ie(H()),M.copy(A),i.update()}function Ue(P){x.set(P.clientX,P.clientY),_.subVectors(x,d).multiplyScalar(i.panSpeed),I(_.x,_.y),d.copy(x),i.update()}function Se(P){me(P),P.deltaY<0?ie(H()):P.deltaY>0&&G(H()),i.update()}function We(P){let V=!1;switch(P.code){case i.keys.UP:I(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:I(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:I(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:I(-i.keyPanSpeed,0),V=!0;break}V&&(P.preventDefault(),i.update())}function gt(){if(y.length==1)g.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),V=.5*(y[0].pageY+y[1].pageY);g.set(P,V)}}function Xe(){if(y.length==1)d.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),V=.5*(y[0].pageY+y[1].pageY);d.set(P,V)}}function ct(){const P=y[0].pageX-y[1].pageX,V=y[0].pageY-y[1].pageY,se=Math.sqrt(P*P+V*V);M.set(0,se)}function L(){i.enableZoom&&ct(),i.enablePan&&Xe()}function Ye(){i.enableZoom&&ct(),i.enableRotate&&gt()}function $e(P){if(y.length==1)v.set(P.pageX,P.pageY);else{const se=Le(P),R=.5*(P.pageX+se.x),oe=.5*(P.pageY+se.y);v.set(R,oe)}m.subVectors(v,g).multiplyScalar(i.rotateSpeed);const V=i.domElement;V&&(Z(2*Math.PI*m.x/V.clientHeight),q(2*Math.PI*m.y/V.clientHeight)),g.copy(v)}function st(P){if(y.length==1)x.set(P.pageX,P.pageY);else{const V=Le(P),se=.5*(P.pageX+V.x),R=.5*(P.pageY+V.y);x.set(se,R)}_.subVectors(x,d).multiplyScalar(i.panSpeed),I(_.x,_.y),d.copy(x)}function Me(P){const V=Le(P),se=P.pageX-V.x,R=P.pageY-V.y,oe=Math.sqrt(se*se+R*R);A.set(0,oe),w.set(0,Math.pow(A.y/M.y,i.zoomSpeed)),G(w.y),M.copy(A)}function dt(P){i.enableZoom&&Me(P),i.enablePan&&st(P)}function Ae(P){i.enableZoom&&Me(P),i.enableRotate&&$e(P)}function Oe(P){var V,se;i.enabled!==!1&&(y.length===0&&((V=i.domElement)==null||V.ownerDocument.addEventListener("pointermove",T),(se=i.domElement)==null||se.ownerDocument.addEventListener("pointerup",S)),be(P),P.pointerType==="touch"?Te(P):B(P))}function T(P){i.enabled!==!1&&(P.pointerType==="touch"?he(P):Q(P))}function S(P){var V,se,R;re(P),y.length===0&&((V=i.domElement)==null||V.releasePointerCapture(P.pointerId),(se=i.domElement)==null||se.ownerDocument.removeEventListener("pointermove",T),(R=i.domElement)==null||R.ownerDocument.removeEventListener("pointerup",S)),i.dispatchEvent(o),l=a.NONE}function B(P){let V;switch(P.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case as.DOLLY:if(i.enableZoom===!1)return;Ze(P),l=a.DOLLY;break;case as.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Y(P),l=a.PAN}else{if(i.enableRotate===!1)return;ke(P),l=a.ROTATE}break;case as.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ke(P),l=a.ROTATE}else{if(i.enablePan===!1)return;Y(P),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function Q(P){if(i.enabled!==!1)switch(l){case a.ROTATE:if(i.enableRotate===!1)return;J(P);break;case a.DOLLY:if(i.enableZoom===!1)return;ve(P);break;case a.PAN:if(i.enablePan===!1)return;Ue(P);break}}function ne(P){i.enabled===!1||i.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(P.preventDefault(),i.dispatchEvent(s),Se(P),i.dispatchEvent(o))}function $(P){i.enabled===!1||i.enablePan===!1||We(P)}function Te(P){switch(fe(P),y.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;gt(),l=a.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;Xe(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(),l=a.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function he(P){switch(fe(P),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;$e(P),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;st(P),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(P),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(P),i.update();break;default:l=a.NONE}}function Ce(P){i.enabled!==!1&&P.preventDefault()}function be(P){y.push(P)}function re(P){delete N[P.pointerId];for(let V=0;V<y.length;V++)if(y[V].pointerId==P.pointerId){y.splice(V,1);return}}function fe(P){let V=N[P.pointerId];V===void 0&&(V=new ze,N[P.pointerId]=V),V.set(P.pageX,P.pageY)}function Le(P){const V=P.pointerId===y[0].pointerId?y[1]:y[0];return N[V.pointerId]}this.dollyIn=(P=H())=>{ie(P),i.update()},this.dollyOut=(P=H())=>{G(P),i.update()},this.getScale=()=>f,this.setScale=P=>{F(P),i.update()},this.getZoomScale=()=>H(),n!==void 0&&this.connect(n),this.update()}}var YT={value:()=>{}};function a_(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Hl(n)}function Hl(t){this._=t}function qT(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Hl.prototype=a_.prototype={constructor:Hl,on:function(t,e){var n=this._,i=qT(t+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(t=i[s]).type)&&(r=KT(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=i[s]).type)n[r]=H0(n[r],t.name,e);else if(e==null)for(r in n)n[r]=H0(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Hl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function KT(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function H0(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=YT,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Vd="http://www.w3.org/1999/xhtml";const G0={svg:"http://www.w3.org/2000/svg",xhtml:Vd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Xc(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),G0.hasOwnProperty(e)?{space:G0[e],local:t}:t}function ZT(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Vd&&e.documentElement.namespaceURI===Vd?e.createElement(t):e.createElementNS(n,t)}}function QT(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function l_(t){var e=Xc(t);return(e.local?QT:ZT)(e)}function JT(){}function lp(t){return t==null?JT:function(){return this.querySelector(t)}}function eA(t){typeof t!="function"&&(t=lp(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=t.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Zn(i,this._parents)}function tA(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function nA(){return[]}function c_(t){return t==null?nA:function(){return this.querySelectorAll(t)}}function iA(t){return function(){return tA(t.apply(this,arguments))}}function rA(t){typeof t=="function"?t=iA(t):t=c_(t);for(var e=this._groups,n=e.length,i=[],r=[],s=0;s<n;++s)for(var o=e[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(t.call(l,l.__data__,c,o)),r.push(l));return new Zn(i,r)}function u_(t){return function(){return this.matches(t)}}function f_(t){return function(e){return e.matches(t)}}var sA=Array.prototype.find;function oA(t){return function(){return sA.call(this.children,t)}}function aA(){return this.firstElementChild}function lA(t){return this.select(t==null?aA:oA(typeof t=="function"?t:f_(t)))}var cA=Array.prototype.filter;function uA(){return Array.from(this.children)}function fA(t){return function(){return cA.call(this.children,t)}}function dA(t){return this.selectAll(t==null?uA:fA(typeof t=="function"?t:f_(t)))}function hA(t){typeof t!="function"&&(t=u_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new Zn(i,this._parents)}function d_(t){return new Array(t.length)}function pA(){return new Zn(this._enter||this._groups.map(d_),this._parents)}function _c(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}_c.prototype={constructor:_c,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function mA(t){return function(){return t}}function xA(t,e,n,i,r,s){for(var o=0,a,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],i[o]=a):n[o]=new _c(t,s[o]);for(;o<l;++o)(a=e[o])&&(r[o]=a)}function gA(t,e,n,i,r,s,o){var a,l,c=new Map,u=e.length,h=s.length,f=new Array(u),p;for(a=0;a<u;++a)(l=e[a])&&(f[a]=p=o.call(l,l.__data__,a,e)+"",c.has(p)?r[a]=l:c.set(p,l));for(a=0;a<h;++a)p=o.call(t,s[a],a,s)+"",(l=c.get(p))?(i[a]=l,l.__data__=s[a],c.delete(p)):n[a]=new _c(t,s[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(f[a])===l&&(r[a]=l)}function vA(t){return t.__data__}function _A(t,e){if(!arguments.length)return Array.from(this,vA);var n=e?gA:xA,i=this._parents,r=this._groups;typeof t!="function"&&(t=mA(t));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],h=r[c],f=h.length,p=yA(t.call(u,u&&u.__data__,c,i)),g=p.length,v=a[c]=new Array(g),m=o[c]=new Array(g),d=l[c]=new Array(f);n(u,h,v,m,d,p,e);for(var x=0,_=0,M,A;x<g;++x)if(M=v[x]){for(x>=_&&(_=x+1);!(A=m[_])&&++_<g;);M._next=A||null}}return o=new Zn(o,i),o._enter=a,o._exit=l,o}function yA(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function SA(){return new Zn(this._exit||this._groups.map(d_),this._parents)}function MA(t,e,n){var i=this.enter(),r=this,s=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?s.remove():n(s),i&&r?i.merge(r).order():r}function EA(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=n[l],u=i[l],h=c.length,f=a[l]=new Array(h),p,g=0;g<h;++g)(p=c[g]||u[g])&&(f[g]=p);for(;l<r;++l)a[l]=n[l];return new Zn(a,this._parents)}function wA(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function bA(t){t||(t=TA);function e(h,f){return h&&f?t(h.__data__,f.__data__):!h-!f}for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var o=n[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(e)}return new Zn(r,this._parents).order()}function TA(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function AA(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function CA(){return Array.from(this)}function RA(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function PA(){let t=0;for(const e of this)++t;return t}function LA(){return!this.node()}function NA(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],s=0,o=r.length,a;s<o;++s)(a=r[s])&&t.call(a,a.__data__,s,r);return this}function DA(t){return function(){this.removeAttribute(t)}}function IA(t){return function(){this.removeAttributeNS(t.space,t.local)}}function UA(t,e){return function(){this.setAttribute(t,e)}}function FA(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function OA(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function kA(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function zA(t,e){var n=Xc(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?IA:DA:typeof e=="function"?n.local?kA:OA:n.local?FA:UA)(n,e))}function h_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function BA(t){return function(){this.style.removeProperty(t)}}function VA(t,e,n){return function(){this.style.setProperty(t,e,n)}}function HA(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function GA(t,e,n){return arguments.length>1?this.each((e==null?BA:typeof e=="function"?HA:VA)(t,e,n??"")):io(this.node(),t)}function io(t,e){return t.style.getPropertyValue(e)||h_(t).getComputedStyle(t,null).getPropertyValue(e)}function WA(t){return function(){delete this[t]}}function XA(t,e){return function(){this[t]=e}}function jA(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function $A(t,e){return arguments.length>1?this.each((e==null?WA:typeof e=="function"?jA:XA)(t,e)):this.node()[t]}function p_(t){return t.trim().split(/^|\s+/)}function cp(t){return t.classList||new m_(t)}function m_(t){this._node=t,this._names=p_(t.getAttribute("class")||"")}m_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function x_(t,e){for(var n=cp(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function g_(t,e){for(var n=cp(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function YA(t){return function(){x_(this,t)}}function qA(t){return function(){g_(this,t)}}function KA(t,e){return function(){(e.apply(this,arguments)?x_:g_)(this,t)}}function ZA(t,e){var n=p_(t+"");if(arguments.length<2){for(var i=cp(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?KA:e?YA:qA)(n,e))}function QA(){this.textContent=""}function JA(t){return function(){this.textContent=t}}function eC(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function tC(t){return arguments.length?this.each(t==null?QA:(typeof t=="function"?eC:JA)(t)):this.node().textContent}function nC(){this.innerHTML=""}function iC(t){return function(){this.innerHTML=t}}function rC(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function sC(t){return arguments.length?this.each(t==null?nC:(typeof t=="function"?rC:iC)(t)):this.node().innerHTML}function oC(){this.nextSibling&&this.parentNode.appendChild(this)}function aC(){return this.each(oC)}function lC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function cC(){return this.each(lC)}function uC(t){var e=typeof t=="function"?t:l_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function fC(){return null}function dC(t,e){var n=typeof t=="function"?t:l_(t),i=e==null?fC:typeof e=="function"?e:lp(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function hC(){var t=this.parentNode;t&&t.removeChild(this)}function pC(){return this.each(hC)}function mC(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function xC(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function gC(t){return this.select(t?xC:mC)}function vC(t){return arguments.length?this.property("__data__",t):this.node().__data__}function _C(t){return function(e){t.call(this,e,this.__data__)}}function yC(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function SC(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,s;n<r;++n)s=e[n],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function MC(t,e,n){return function(){var i=this.__on,r,s=_C(e);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=e;return}}this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function EC(t,e,n){var i=yC(t+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?MC:SC,r=0;r<s;++r)this.each(a(i[r],e,n));return this}function v_(t,e,n){var i=h_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function wC(t,e){return function(){return v_(this,t,e)}}function bC(t,e){return function(){return v_(this,t,e.apply(this,arguments))}}function TC(t,e){return this.each((typeof e=="function"?bC:wC)(t,e))}function*AC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var CC=[null];function Zn(t,e){this._groups=t,this._parents=e}function Da(){return new Zn([[document.documentElement]],CC)}function RC(){return this}Zn.prototype=Da.prototype={constructor:Zn,select:eA,selectAll:rA,selectChild:lA,selectChildren:dA,filter:hA,data:_A,enter:pA,exit:SA,join:MA,merge:EA,selection:RC,order:wA,sort:bA,call:AA,nodes:CA,node:RA,size:PA,empty:LA,each:NA,attr:zA,style:GA,property:$A,classed:ZA,text:tC,html:sC,raise:aC,lower:cC,append:uC,insert:dC,remove:pC,clone:gC,datum:vC,on:EC,dispatch:TC,[Symbol.iterator]:AC};function up(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function __(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ia(){}var ya=.7,yc=1/ya,Ws="\\s*([+-]?\\d+)\\s*",Sa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",li="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",PC=/^#([0-9a-f]{3,8})$/,LC=new RegExp(`^rgb\\(${Ws},${Ws},${Ws}\\)$`),NC=new RegExp(`^rgb\\(${li},${li},${li}\\)$`),DC=new RegExp(`^rgba\\(${Ws},${Ws},${Ws},${Sa}\\)$`),IC=new RegExp(`^rgba\\(${li},${li},${li},${Sa}\\)$`),UC=new RegExp(`^hsl\\(${Sa},${li},${li}\\)$`),FC=new RegExp(`^hsla\\(${Sa},${li},${li},${Sa}\\)$`),W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};up(Ia,Ma,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:X0,formatHex:X0,formatHex8:OC,formatHsl:kC,formatRgb:j0,toString:j0});function X0(){return this.rgb().formatHex()}function OC(){return this.rgb().formatHex8()}function kC(){return y_(this).formatHsl()}function j0(){return this.rgb().formatRgb()}function Ma(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=PC.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?$0(e):n===3?new fn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ml(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ml(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=LC.exec(t))?new fn(e[1],e[2],e[3],1):(e=NC.exec(t))?new fn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=DC.exec(t))?Ml(e[1],e[2],e[3],e[4]):(e=IC.exec(t))?Ml(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=UC.exec(t))?K0(e[1],e[2]/100,e[3]/100,1):(e=FC.exec(t))?K0(e[1],e[2]/100,e[3]/100,e[4]):W0.hasOwnProperty(t)?$0(W0[t]):t==="transparent"?new fn(NaN,NaN,NaN,0):null}function $0(t){return new fn(t>>16&255,t>>8&255,t&255,1)}function Ml(t,e,n,i){return i<=0&&(t=e=n=NaN),new fn(t,e,n,i)}function zC(t){return t instanceof Ia||(t=Ma(t)),t?(t=t.rgb(),new fn(t.r,t.g,t.b,t.opacity)):new fn}function Hd(t,e,n,i){return arguments.length===1?zC(t):new fn(t,e,n,i??1)}function fn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}up(fn,Hd,__(Ia,{brighter(t){return t=t==null?yc:Math.pow(yc,t),new fn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ya:Math.pow(ya,t),new fn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new fn(Wr(this.r),Wr(this.g),Wr(this.b),Sc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Y0,formatHex:Y0,formatHex8:BC,formatRgb:q0,toString:q0}));function Y0(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}`}function BC(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity)?1:this.opacity)*255)}`}function q0(){const t=Sc(this.opacity);return`${t===1?"rgb(":"rgba("}${Wr(this.r)}, ${Wr(this.g)}, ${Wr(this.b)}${t===1?")":`, ${t})`}`}function Sc(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Wr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function zr(t){return t=Wr(t),(t<16?"0":"")+t.toString(16)}function K0(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new jn(t,e,n,i)}function y_(t){if(t instanceof jn)return new jn(t.h,t.s,t.l,t.opacity);if(t instanceof Ia||(t=Ma(t)),!t)return new jn;if(t instanceof jn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),s=Math.max(e,n,i),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(n-i)/a+(n<i)*6:n===s?o=(i-e)/a+2:o=(e-n)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new jn(o,a,l,t.opacity)}function VC(t,e,n,i){return arguments.length===1?y_(t):new jn(t,e,n,i??1)}function jn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}up(jn,VC,__(Ia,{brighter(t){return t=t==null?yc:Math.pow(yc,t),new jn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ya:Math.pow(ya,t),new jn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new fn(ef(t>=240?t-240:t+120,r,i),ef(t,r,i),ef(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new jn(Z0(this.h),El(this.s),El(this.l),Sc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Sc(this.opacity);return`${t===1?"hsl(":"hsla("}${Z0(this.h)}, ${El(this.s)*100}%, ${El(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Z0(t){return t=(t||0)%360,t<0?t+360:t}function El(t){return Math.max(0,Math.min(1,t||0))}function ef(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const S_=t=>()=>t;function HC(t,e){return function(n){return t+n*e}}function GC(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function WC(t){return(t=+t)==1?M_:function(e,n){return n-e?GC(e,n,t):S_(isNaN(e)?n:e)}}function M_(t,e){var n=e-t;return n?HC(t,n):S_(isNaN(t)?e:t)}const Q0=function t(e){var n=WC(e);function i(r,s){var o=n((r=Hd(r)).r,(s=Hd(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=M_(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i}(1);function Zi(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Gd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,tf=new RegExp(Gd.source,"g");function XC(t){return function(){return t}}function jC(t){return function(e){return t(e)+""}}function $C(t,e){var n=Gd.lastIndex=tf.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Gd.exec(t))&&(r=tf.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:Zi(i,r)})),n=tf.lastIndex;return n<e.length&&(s=e.slice(n),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?jC(l[0].x):XC(e):(e=l.length,function(c){for(var u=0,h;u<e;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}var J0=180/Math.PI,Wd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function E_(t,e,n,i,r,s){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,t)*J0,skewX:Math.atan(l)*J0,scaleX:o,scaleY:a}}var wl;function YC(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Wd:E_(e.a,e.b,e.c,e.d,e.e,e.f)}function qC(t){return t==null||(wl||(wl=document.createElementNS("http://www.w3.org/2000/svg","g")),wl.setAttribute("transform",t),!(t=wl.transform.baseVal.consolidate()))?Wd:(t=t.matrix,E_(t.a,t.b,t.c,t.d,t.e,t.f))}function w_(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,h,f,p,g){if(c!==h||u!==f){var v=p.push("translate(",null,e,null,n);g.push({i:v-4,x:Zi(c,h)},{i:v-2,x:Zi(u,f)})}else(h||f)&&p.push("translate("+h+e+f+n)}function o(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,i)-2,x:Zi(c,u)})):u&&h.push(r(h)+"rotate("+u+i)}function a(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,i)-2,x:Zi(c,u)}):u&&h.push(r(h)+"skewX("+u+i)}function l(c,u,h,f,p,g){if(c!==h||u!==f){var v=p.push(r(p)+"scale(",null,",",null,")");g.push({i:v-4,x:Zi(c,h)},{i:v-2,x:Zi(u,f)})}else(h!==1||f!==1)&&p.push(r(p)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=t(c),u=t(u),s(c.translateX,c.translateY,u.translateX,u.translateY,h,f),o(c.rotate,u.rotate,h,f),a(c.skewX,u.skewX,h,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(p){for(var g=-1,v=f.length,m;++g<v;)h[(m=f[g]).i]=m.x(p);return h.join("")}}}var KC=w_(YC,"px, ","px)","deg)"),ZC=w_(qC,", ",")",")"),ro=0,zo=0,Lo=0,b_=1e3,Mc,Bo,Ec=0,Jr=0,jc=0,Ea=typeof performance=="object"&&performance.now?performance:Date,T_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function fp(){return Jr||(T_(QC),Jr=Ea.now()+jc)}function QC(){Jr=0}function wc(){this._call=this._time=this._next=null}wc.prototype=A_.prototype={constructor:wc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?fp():+n)+(e==null?0:+e),!this._next&&Bo!==this&&(Bo?Bo._next=this:Mc=this,Bo=this),this._call=t,this._time=n,Xd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Xd())}};function A_(t,e,n){var i=new wc;return i.restart(t,e,n),i}function JC(){fp(),++ro;for(var t=Mc,e;t;)(e=Jr-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ro}function ex(){Jr=(Ec=Ea.now())+jc,ro=zo=0;try{JC()}finally{ro=0,tR(),Jr=0}}function eR(){var t=Ea.now(),e=t-Ec;e>b_&&(jc-=e,Ec=t)}function tR(){for(var t,e=Mc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Mc=n);Bo=t,Xd(i)}function Xd(t){if(!ro){zo&&(zo=clearTimeout(zo));var e=t-Jr;e>24?(t<1/0&&(zo=setTimeout(ex,t-Ea.now()-jc)),Lo&&(Lo=clearInterval(Lo))):(Lo||(Ec=Ea.now(),Lo=setInterval(eR,b_)),ro=1,T_(ex))}}function tx(t,e,n){var i=new wc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var nR=a_("start","end","cancel","interrupt"),iR=[],C_=0,nx=1,jd=2,Gl=3,ix=4,$d=5,Wl=6;function $c(t,e,n,i,r,s){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;rR(t,n,{name:e,index:i,group:r,on:nR,tween:iR,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:C_})}function dp(t,e){var n=Jn(t,e);if(n.state>C_)throw new Error("too late; already scheduled");return n}function fi(t,e){var n=Jn(t,e);if(n.state>Gl)throw new Error("too late; already running");return n}function Jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function rR(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=A_(s,0,n.time);function s(c){n.state=nx,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var u,h,f,p;if(n.state!==nx)return l();for(u in i)if(p=i[u],p.name===n.name){if(p.state===Gl)return tx(o);p.state===ix?(p.state=Wl,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete i[u]):+u<e&&(p.state=Wl,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete i[u])}if(tx(function(){n.state===Gl&&(n.state=ix,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=jd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===jd){for(n.state=Gl,r=new Array(f=n.tween.length),u=0,h=-1;u<f;++u)(p=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++h]=p);r.length=h+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=$d,1),h=-1,f=r.length;++h<f;)r[h].call(t,u);n.state===$d&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Wl,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function sR(t,e){var n=t.__transition,i,r,s=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){s=!1;continue}r=i.state>jd&&i.state<$d,i.state=Wl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}s&&delete t.__transition}}function oR(t){return this.each(function(){sR(this,t)})}function aR(t,e){var n,i;return function(){var r=fi(this,t),s=r.tween;if(s!==n){i=n=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function lR(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var s=fi(this,t),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function cR(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Jn(this.node(),n).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===t)return o.value;return null}return this.each((e==null?aR:lR)(n,t,e))}function hp(t,e,n){var i=t._id;return t.each(function(){var r=fi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Jn(r,i).value[e]}}function R_(t,e){var n;return(typeof e=="number"?Zi:e instanceof Ma?Q0:(n=Ma(e))?(e=n,Q0):$C)(t,e)}function uR(t){return function(){this.removeAttribute(t)}}function fR(t){return function(){this.removeAttributeNS(t.space,t.local)}}function dR(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function hR(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function pR(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function mR(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function xR(t,e){var n=Xc(t),i=n==="transform"?ZC:R_;return this.attrTween(t,typeof e=="function"?(n.local?mR:pR)(n,i,hp(this,"attr."+t,e)):e==null?(n.local?fR:uR)(n):(n.local?hR:dR)(n,i,e))}function gR(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function vR(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function _R(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&vR(t,s)),n}return r._value=e,r}function yR(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&gR(t,s)),n}return r._value=e,r}function SR(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Xc(t);return this.tween(n,(i.local?_R:yR)(i,e))}function MR(t,e){return function(){dp(this,t).delay=+e.apply(this,arguments)}}function ER(t,e){return e=+e,function(){dp(this,t).delay=e}}function wR(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?MR:ER)(e,t)):Jn(this.node(),e).delay}function bR(t,e){return function(){fi(this,t).duration=+e.apply(this,arguments)}}function TR(t,e){return e=+e,function(){fi(this,t).duration=e}}function AR(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?bR:TR)(e,t)):Jn(this.node(),e).duration}function CR(t,e){if(typeof e!="function")throw new Error;return function(){fi(this,t).ease=e}}function RR(t){var e=this._id;return arguments.length?this.each(CR(e,t)):Jn(this.node(),e).ease}function PR(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;fi(this,t).ease=n}}function LR(t){if(typeof t!="function")throw new Error;return this.each(PR(this._id,t))}function NR(t){typeof t!="function"&&(t=u_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new Oi(i,this._parents,this._name,this._id)}function DR(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=e[a],c=n[a],u=l.length,h=o[a]=new Array(u),f,p=0;p<u;++p)(f=l[p]||c[p])&&(h[p]=f);for(;a<i;++a)o[a]=e[a];return new Oi(o,this._parents,this._name,this._id)}function IR(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function UR(t,e,n){var i,r,s=IR(e)?dp:fi;return function(){var o=s(this,t),a=o.on;a!==i&&(r=(i=a).copy()).on(e,n),o.on=r}}function FR(t,e){var n=this._id;return arguments.length<2?Jn(this.node(),n).on.on(t):this.each(UR(n,t,e))}function OR(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function kR(){return this.on("end.remove",OR(this._id))}function zR(t){var e=this._name,n=this._id;typeof t!="function"&&(t=lp(t));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),u,h,f=0;f<l;++f)(u=a[f])&&(h=t.call(u,u.__data__,f,a))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,$c(c[f],e,n,f,c,Jn(u,n)));return new Oi(s,this._parents,e,n)}function BR(t){var e=this._name,n=this._id;typeof t!="function"&&(t=c_(t));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var f=t.call(u,u.__data__,h,l),p,g=Jn(u,n),v=0,m=f.length;v<m;++v)(p=f[v])&&$c(p,e,n,v,f,g);s.push(f),o.push(u)}return new Oi(s,o,e,n)}var VR=Da.prototype.constructor;function HR(){return new VR(this._groups,this._parents)}function GR(t,e){var n,i,r;return function(){var s=io(this,t),o=(this.style.removeProperty(t),io(this,t));return s===o?null:s===n&&o===i?r:r=e(n=s,i=o)}}function P_(t){return function(){this.style.removeProperty(t)}}function WR(t,e,n){var i,r=n+"",s;return function(){var o=io(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}function XR(t,e,n){var i,r,s;return function(){var o=io(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),io(this,t))),o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a))}}function jR(t,e){var n,i,r,s="style."+e,o="end."+s,a;return function(){var l=fi(this,t),c=l.on,u=l.value[s]==null?a||(a=P_(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(o,r=u),l.on=i}}function $R(t,e,n){var i=(t+="")=="transform"?KC:R_;return e==null?this.styleTween(t,GR(t,i)).on("end.style."+t,P_(t)):typeof e=="function"?this.styleTween(t,XR(t,i,hp(this,"style."+t,e))).each(jR(this._id,t)):this.styleTween(t,WR(t,i,e),n).on("end.style."+t,null)}function YR(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function qR(t,e,n){var i,r;function s(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&YR(t,o,n)),i}return s._value=e,s}function KR(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,qR(t,e,n??""))}function ZR(t){return function(){this.textContent=t}}function QR(t){return function(){var e=t(this);this.textContent=e??""}}function JR(t){return this.tween("text",typeof t=="function"?QR(hp(this,"text",t)):ZR(t==null?"":t+""))}function eP(t){return function(e){this.textContent=t.call(this,e)}}function tP(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&eP(r)),e}return i._value=t,i}function nP(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,tP(t))}function iP(){for(var t=this._name,e=this._id,n=L_(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=Jn(l,e);$c(l,t,n,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Oi(i,this._parents,t,n)}function rP(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};n.each(function(){var c=fi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&s()})}var sP=0;function Oi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function L_(){return++sP}var _i=Da.prototype;Oi.prototype={constructor:Oi,select:zR,selectAll:BR,selectChild:_i.selectChild,selectChildren:_i.selectChildren,filter:NR,merge:DR,selection:HR,transition:iP,call:_i.call,nodes:_i.nodes,node:_i.node,size:_i.size,empty:_i.empty,each:_i.each,on:FR,attr:xR,attrTween:SR,style:$R,styleTween:KR,text:JR,textTween:nP,remove:kR,tween:cR,delay:wR,duration:AR,ease:RR,easeVarying:LR,end:rP,[Symbol.iterator]:_i[Symbol.iterator]};function oP(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var aP={time:null,delay:0,duration:250,ease:oP};function lP(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function cP(t){var e,n;t instanceof Oi?(e=t._id,t=t._name):(e=L_(),(n=aP).time=fp(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&$c(l,t,e,c,o,n||lP(l,e));return new Oi(i,this._parents,t,e)}Da.prototype.interrupt=oR;Da.prototype.transition=cP;function uP(t){var e=0,n=t.children,i=n&&n.length;if(!i)e=1;else for(;--i>=0;)e+=n[i].value;t.value=e}function fP(){return this.eachAfter(uP)}function dP(t,e){let n=-1;for(const i of this)t.call(e,i,++n,this);return this}function hP(t,e){for(var n=this,i=[n],r,s,o=-1;n=i.pop();)if(t.call(e,n,++o,this),r=n.children)for(s=r.length-1;s>=0;--s)i.push(r[s]);return this}function pP(t,e){for(var n=this,i=[n],r=[],s,o,a,l=-1;n=i.pop();)if(r.push(n),s=n.children)for(o=0,a=s.length;o<a;++o)i.push(s[o]);for(;n=r.pop();)t.call(e,n,++l,this);return this}function mP(t,e){let n=-1;for(const i of this)if(t.call(e,i,++n,this))return i}function xP(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,i=e.children,r=i&&i.length;--r>=0;)n+=i[r].value;e.value=n})}function gP(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})}function vP(t){for(var e=this,n=_P(e,t),i=[e];e!==n;)e=e.parent,i.push(e);for(var r=i.length;t!==n;)i.splice(r,0,t),t=t.parent;return i}function _P(t,e){if(t===e)return t;var n=t.ancestors(),i=e.ancestors(),r=null;for(t=n.pop(),e=i.pop();t===e;)r=t,t=n.pop(),e=i.pop();return r}function yP(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e}function SP(){return Array.from(this)}function MP(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t}function EP(){var t=this,e=[];return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e}function*wP(){var t=this,e,n=[t],i,r,s;do for(e=n.reverse(),n=[];t=e.pop();)if(yield t,i=t.children)for(r=0,s=i.length;r<s;++r)n.push(i[r]);while(n.length)}function pp(t,e){t instanceof Map?(t=[void 0,t],e===void 0&&(e=AP)):e===void 0&&(e=TP);for(var n=new bc(t),i,r=[n],s,o,a,l;i=r.pop();)if((o=e(i.data))&&(l=(o=Array.from(o)).length))for(i.children=o,a=l-1;a>=0;--a)r.push(s=o[a]=new bc(o[a])),s.parent=i,s.depth=i.depth+1;return n.eachBefore(RP)}function bP(){return pp(this).eachBefore(CP)}function TP(t){return t.children}function AP(t){return Array.isArray(t)?t[1]:null}function CP(t){t.data.value!==void 0&&(t.value=t.data.value),t.data=t.data.data}function RP(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function bc(t){this.data=t,this.depth=this.height=0,this.parent=null}bc.prototype=pp.prototype={constructor:bc,count:fP,each:dP,eachAfter:pP,eachBefore:hP,find:mP,sum:xP,sort:gP,path:vP,ancestors:yP,descendants:SP,leaves:MP,links:EP,copy:bP,[Symbol.iterator]:wP};function PP(t){if(typeof t!="function")throw new Error;return t}function No(){return 0}function Do(t){return function(){return t}}function LP(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function NP(t,e,n,i,r){for(var s=t.children,o,a=-1,l=s.length,c=t.value&&(i-e)/t.value;++a<l;)o=s[a],o.y0=n,o.y1=r,o.x0=e,o.x1=e+=o.value*c}function DP(t,e,n,i,r){for(var s=t.children,o,a=-1,l=s.length,c=t.value&&(r-n)/t.value;++a<l;)o=s[a],o.x0=e,o.x1=i,o.y0=n,o.y1=n+=o.value*c}var IP=(1+Math.sqrt(5))/2;function UP(t,e,n,i,r,s){for(var o=[],a=e.children,l,c,u=0,h=0,f=a.length,p,g,v=e.value,m,d,x,_,M,A,w;u<f;){p=r-n,g=s-i;do m=a[h++].value;while(!m&&h<f);for(d=x=m,A=Math.max(g/p,p/g)/(v*t),w=m*m*A,M=Math.max(x/w,w/d);h<f;++h){if(m+=c=a[h].value,c<d&&(d=c),c>x&&(x=c),w=m*m*A,_=Math.max(x/w,w/d),_>M){m-=c;break}M=_}o.push(l={value:m,dice:p<g,children:a.slice(u,h)}),l.dice?NP(l,n,i,r,v?i+=g*m/v:s):DP(l,n,i,v?n+=p*m/v:r,s),v-=m,u=h}return o}const FP=function t(e){function n(i,r,s,o,a){UP(e,i,r,s,o,a)}return n.ratio=function(i){return t((i=+i)>1?i:1)},n}(IP);function OP(){var t=FP,e=!1,n=1,i=1,r=[0],s=No,o=No,a=No,l=No,c=No;function u(f){return f.x0=f.y0=0,f.x1=n,f.y1=i,f.eachBefore(h),r=[0],e&&f.eachBefore(LP),f}function h(f){var p=r[f.depth],g=f.x0+p,v=f.y0+p,m=f.x1-p,d=f.y1-p;m<g&&(g=m=(g+m)/2),d<v&&(v=d=(v+d)/2),f.x0=g,f.y0=v,f.x1=m,f.y1=d,f.children&&(p=r[f.depth+1]=s(f)/2,g+=c(f)-p,v+=o(f)-p,m-=a(f)-p,d-=l(f)-p,m<g&&(g=m=(g+m)/2),d<v&&(v=d=(v+d)/2),t(f,g,v,m,d))}return u.round=function(f){return arguments.length?(e=!!f,u):e},u.size=function(f){return arguments.length?(n=+f[0],i=+f[1],u):[n,i]},u.tile=function(f){return arguments.length?(t=PP(f),u):t},u.padding=function(f){return arguments.length?u.paddingInner(f).paddingOuter(f):u.paddingInner()},u.paddingInner=function(f){return arguments.length?(s=typeof f=="function"?f:Do(+f),u):s},u.paddingOuter=function(f){return arguments.length?u.paddingTop(f).paddingRight(f).paddingBottom(f).paddingLeft(f):u.paddingTop()},u.paddingTop=function(f){return arguments.length?(o=typeof f=="function"?f:Do(+f),u):o},u.paddingRight=function(f){return arguments.length?(a=typeof f=="function"?f:Do(+f),u):a},u.paddingBottom=function(f){return arguments.length?(l=typeof f=="function"?f:Do(+f),u):l},u.paddingLeft=function(f){return arguments.length?(c=typeof f=="function"?f:Do(+f),u):c},u}function Vo(t,e,n){this.k=t,this.x=e,this.y=n}Vo.prototype={constructor:Vo,scale:function(t){return t===1?this:new Vo(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Vo(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Vo.prototype;function kP({data:t,config:e}){const n=Ee.useRef(null),i=Ee.useRef(null),r=Ee.useRef(null),s=Ee.useRef(null),o=Ee.useRef(null),a=Ee.useRef(null),[l,c]=Ee.useState(null),[u,h]=Ee.useState("2d"),[f,p]=Ee.useState("size");return Ee.useEffect(()=>{if(!n.current||!t)return;const g=n.current.clientWidth,v=600,m=new BE;m.background=new et(657930),r.current=m;let d;u==="3d"?(d=new qt(60,g/v,1,1e4),d.position.set(g/2,v/2,Math.max(g,v)),d.lookAt(g/2,v/2,0)):(d=new Gr(0,g,v,0,1,1e3),d.position.z=100),s.current=d;const x=new zT({antialias:!0});if(x.setSize(g,v),x.setPixelRatio(window.devicePixelRatio),i.current=x,n.current.appendChild(x.domElement),u==="3d"){const F=new KE(16777215,.6);m.add(F);const G=new d0(16777215,.8);G.position.set(g/2,v/2,Math.max(g,v)),m.add(G);const ie=new d0(16777215,.4);ie.position.set(-g/2,-v/2,Math.max(g,v)/2),m.add(ie)}let _=null;u==="3d"&&d instanceof qt&&(_=new $T(d,x.domElement),_.enableDamping=!0,_.dampingFactor=.05,_.target.set(g/2,v/2,0),_.update(),o.current=_);const M=pp(t).sum(F=>F.is_directory?0:F.size).sort((F,G)=>(G.value||0)-(F.value||0));OP().size([g,v]).padding(1).round(!0)(M);const w=M.leaves();console.log("Treemap hierarchy leaves:",w.length);let C=0;for(const F of w)F.depth>C&&(C=F.depth);const D=[],b=new QE,y=new ze,N=5e4,O=w.length>N?w.slice(0,N):w;w.length>N&&console.warn(`Rendering limited to ${N} of ${w.length} nodes for performance`),O.forEach(F=>{var ve,Ue;const G=F.x1-F.x0,ie=F.y1-F.y0;if(G<2||ie<2)return;let me=4886754;if(f==="depth"){const We=(1-F.depth/C)*240,gt=new et;gt.setHSL(We/360,.8,.5),me=gt.getHex()}else if((ve=F.data.extension_info)!=null&&ve.color){const Se=F.data.extension_info.color.replace("#","");me=parseInt(Se,16)}else if((Ue=F.data.folder_info)!=null&&Ue.color){const Se=F.data.folder_info.color.replace("#","");me=parseInt(Se,16)}else{const Se=[3900150,9133302,15485081,16096779,1096065,440020];me=Se[F.depth%Se.length]}let Be,ke=1,Ze=0;u==="3d"?(f==="depth"?(ke=(F.depth+1)*20,Ze=F.depth*30):(ke=Math.max(5,Math.log10(F.data.size+1)*10),Ze=ke/2),Be=new fo(G,ie,ke)):Be=new Na(G,ie);const Y=u==="3d"?new XE({color:me,metalness:.3,roughness:.7}):new op({color:me}),J=new Ui(Be,Y);u==="3d"?J.position.set(F.x0+G/2,v-(F.y0+ie/2),Ze):J.position.set(F.x0+G/2,v-(F.y0+ie/2),0),J.userData={name:F.data.name,size:F.data.size,depth:F.depth,originalColor:me},m.add(J),D.push(J)}),console.log("Created meshes:",D.length),console.log("Scene children:",m.children.length);let H=1;const Z=10,q=1,K=F=>{const G=x.domElement.getBoundingClientRect();y.x=(F.clientX-G.left)/G.width*2-1,y.y=-((F.clientY-G.top)/G.height)*2+1,b.setFromCamera(y,d);const ie=b.intersectObjects(D);if(a.current&&(a.current.material.color.setHex(a.current.userData.originalColor),a.current=null,c(null)),ie.length>0){const me=ie[0].object;me.material.color.setHex(943004),a.current=me;const ke=u==="3d"&&f==="depth"?`
Depth: ${me.userData.depth}`:"";c({text:`${me.userData.name}
${pa(me.userData.size)}${ke}`,x:F.clientX,y:F.clientY})}},te=F=>{if(F.preventDefault(),u==="2d"&&d instanceof Gr){const G=F.deltaY*-.001;H=Math.max(q,Math.min(Z,H+G)),d.zoom=H,d.updateProjectionMatrix()}};x.domElement.addEventListener("mousemove",K),x.domElement.addEventListener("wheel",te,{passive:!1});const I=()=>{requestAnimationFrame(I),_&&_.update(),x.render(m,d)};return I(),()=>{x.domElement.removeEventListener("mousemove",K),x.domElement.removeEventListener("wheel",te),_&&_.dispose(),x.dispose(),n.current&&x.domElement.parentNode===n.current&&n.current.removeChild(x.domElement)}},[t,e,u,f]),z.jsxs(xr,{children:[z.jsx(ns,{children:z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{children:[z.jsxs(is,{className:"flex items-center gap-2",children:[z.jsx(Lv,{className:"h-5 w-5"}),"Disk Usage Treemap (WebGL)"]}),z.jsxs(rs,{children:["GPU-accelerated visualization. ",u==="3d"?"Drag to rotate, scroll to zoom":"Hover over tiles for details"]})]}),z.jsxs("div",{className:"flex gap-2",children:[z.jsxs(ir,{variant:u==="2d"?"default":"outline",size:"sm",onClick:()=>h("2d"),children:[z.jsx(vM,{className:"h-4 w-4 mr-1"}),"2D"]}),z.jsxs(ir,{variant:u==="3d"?"default":"outline",size:"sm",onClick:()=>h("3d"),children:[z.jsx(pM,{className:"h-4 w-4 mr-1"}),"3D"]}),u==="3d"&&z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"border-l mx-1"}),z.jsx(ir,{variant:f==="size"?"default":"outline",size:"sm",onClick:()=>p("size"),children:"Size"}),z.jsx(ir,{variant:f==="depth"?"default":"outline",size:"sm",onClick:()=>p("depth"),children:"Depth"})]})]})]})}),z.jsx(gr,{children:z.jsxs("div",{className:"border rounded-md overflow-hidden bg-muted/30 relative",children:[z.jsx("div",{ref:n}),l&&z.jsx("div",{className:"fixed pointer-events-none bg-black/90 text-white px-3 py-2 rounded text-sm whitespace-pre-line z-50",style:{left:l.x+10,top:l.y-50},children:l.text})]})})]})}function zP({config:t,tree:e}){if(!t||!e)return null;const n={},i=s=>{if(!s.is_directory&&s.extension_info){const o=s.extension_info.category;if(!n[o]){const a=t.extension_templates[o];n[o]={count:0,totalSize:0,color:(a==null?void 0:a.color)||"#gray",description:(a==null?void 0:a.description)||""}}n[o].count++,n[o].totalSize+=s.size}s.children&&s.children.forEach(i)};i(e);const r=Object.entries(n).sort(([,s],[,o])=>o.totalSize-s.totalSize);return r.length===0?null:z.jsxs(xr,{children:[z.jsxs(ns,{children:[z.jsx(is,{children:"File Type Breakdown"}),z.jsx(rs,{children:"Distribution of files by category"})]}),z.jsx(gr,{children:z.jsx("div",{className:"space-y-3",children:r.map(([s,o])=>z.jsxs("div",{className:"flex items-center justify-between gap-4",children:[z.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[z.jsx("div",{className:"w-4 h-4 rounded flex-shrink-0",style:{backgroundColor:o.color}}),z.jsxs("div",{className:"flex-1 min-w-0",children:[z.jsx("div",{className:"font-medium capitalize truncate",children:s.replace(/_/g," ")}),z.jsx("div",{className:"text-xs text-muted-foreground truncate",children:o.description})]})]}),z.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[z.jsx(jh,{variant:"secondary",className:"font-mono",children:o.count}),z.jsx("div",{className:"text-sm font-medium w-20 text-right",children:pa(o.totalSize)})]})]},s))})})]})}function BP({tree:t}){if(!t)return null;let e=0,n=0,i=0,r=0;const s=(a,l=0)=>{r=Math.max(r,l),a.is_directory?(i++,a.children&&a.children.forEach(c=>s(c,l+1))):(e++,n+=a.size)};s(t);const o=e>0?n/e:0;return z.jsxs(xr,{children:[z.jsxs(ns,{children:[z.jsxs(is,{className:"flex items-center gap-2",children:[z.jsx(Lv,{className:"h-5 w-5"}),"Statistics"]}),z.jsx(rs,{children:"Overview of scanned directory"})]}),z.jsx(gr,{children:z.jsxs("div",{className:"space-y-3",children:[z.jsxs("div",{className:"flex justify-between",children:[z.jsx("span",{className:"text-sm text-muted-foreground",children:"Total Size"}),z.jsx("span",{className:"font-mono font-medium",children:pa(n)})]}),z.jsxs("div",{className:"flex justify-between",children:[z.jsx("span",{className:"text-sm text-muted-foreground",children:"Files"}),z.jsx("span",{className:"font-mono font-medium",children:e.toLocaleString()})]}),z.jsxs("div",{className:"flex justify-between",children:[z.jsx("span",{className:"text-sm text-muted-foreground",children:"Directories"}),z.jsx("span",{className:"font-mono font-medium",children:i.toLocaleString()})]}),z.jsxs("div",{className:"flex justify-between",children:[z.jsx("span",{className:"text-sm text-muted-foreground",children:"Max Depth"}),z.jsx("span",{className:"font-mono font-medium",children:r})]}),z.jsxs("div",{className:"flex justify-between",children:[z.jsx("span",{className:"text-sm text-muted-foreground",children:"Avg File Size"}),z.jsx("span",{className:"font-mono font-medium",children:pa(o)})]})]})})]})}function VP(){const[t,e]=Ee.useState(!1),[n,i]=Ee.useState(null),[r,s]=Ee.useState(null),[o,a]=Ee.useState(null),[l,c]=Ee.useState(!1),u=Ee.useRef(null),h=Ee.useCallback(()=>{u.current&&(u.current.close(),u.current=null,e(!1),a("Scan cancelled"))},[]),f=Ee.useCallback(p=>{e(!0),i(null),s(null),a(null),c(!1);const g=new WebSocket(`ws://localhost:8924/ws/scan?path=${encodeURIComponent(p)}`);u.current=g,g.onmessage=v=>{const m=JSON.parse(v.data);switch(m.type){case"started":console.log("Scan started:",m.path);break;case"progress":i({files:m.files,directories:m.directories,total_size:m.total_size,current_path:m.current_path});break;case"warning":console.warn(m.message);break;case"complete":s(m.tree),c(m.from_cache||!1),e(!1),g.close();break;case"error":a(m.message),e(!1),g.close();break}},g.onerror=()=>{a("WebSocket connection error"),e(!1)},g.onclose=()=>{e(!1)}},[]);return{scanning:t,progress:n,tree:r,error:o,fromCache:l,startScan:f,cancelScan:h}}const HP=Xh("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),N_=Ee.forwardRef(({className:t,variant:e,...n},i)=>z.jsx("div",{ref:i,role:"alert",className:An(HP({variant:e}),t),...n}));N_.displayName="Alert";const GP=Ee.forwardRef(({className:t,...e},n)=>z.jsx("h5",{ref:n,className:An("mb-1 font-medium leading-none tracking-tight",t),...e}));GP.displayName="AlertTitle";const D_=Ee.forwardRef(({className:t,...e},n)=>z.jsx("div",{ref:n,className:An("text-sm [&_p]:leading-relaxed",t),...e}));D_.displayName="AlertDescription";function WP(){const[t,e]=Ee.useState("/Users/jurrejan/Documents/development/python/disk-usage-macos/codex"),[n,i]=Ee.useState(null),{scanning:r,progress:s,tree:o,error:a,fromCache:l,startScan:c,cancelScan:u}=VP(),h=async p=>{await fetch("/api/config/filter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({min_file_size:p})})};Ee.useEffect(()=>{fetch("/api/config").then(p=>p.json()).then(i).catch(console.error)},[]);const f=()=>{c(t)};return z.jsxs("div",{className:"min-h-screen bg-background",children:[z.jsx("header",{className:"border-b",children:z.jsx("div",{className:"container mx-auto px-4 py-4",children:z.jsx("h1",{className:"text-3xl font-bold",children:"Disk Usage Analyzer"})})}),z.jsx("main",{className:"container mx-auto px-4 py-8",children:z.jsxs("div",{className:"space-y-6",children:[z.jsxs("div",{className:"flex gap-4",children:[z.jsx($h,{type:"text",value:t,onChange:p=>e(p.target.value),placeholder:"Enter path to scan",className:"flex-1",disabled:r}),r?z.jsx(ir,{onClick:u,variant:"destructive",size:"lg",children:"Cancel"}):z.jsx(ir,{onClick:f,size:"lg",children:"Scan"})]}),r&&z.jsx(SM,{progress:s}),a&&z.jsxs(N_,{variant:"destructive",children:[z.jsx(hM,{className:"h-4 w-4"}),z.jsx(D_,{children:a})]}),n&&z.jsx(EM,{config:n}),z.jsx(bM,{onFilterChange:h}),o&&!r&&z.jsxs("div",{className:"space-y-4",children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsx("h2",{className:"text-2xl font-semibold",children:"Results"}),l&&z.jsx("span",{className:"text-sm text-muted-foreground",children:"Loaded from cache"})]}),z.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[z.jsx("div",{className:"lg:col-span-2",children:z.jsx(kP,{data:o,config:n})}),z.jsxs("div",{className:"space-y-4",children:[z.jsx(BP,{tree:o}),z.jsx(zP,{config:n,tree:o})]})]})]})]})})]})}nf.createRoot(document.getElementById("root")).render(z.jsx(iy.StrictMode,{children:z.jsx(WP,{})}));
