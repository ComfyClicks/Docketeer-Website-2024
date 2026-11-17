var bx=Object.defineProperty;var Cx=(t,e,n)=>e in t?bx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fe=(t,e,n)=>(Cx(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iv={exports:{}},Cu={},Uv={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Dx=Symbol.for("react.strict_mode"),Ix=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),kx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),Fx=Symbol.for("react.memo"),zx=Symbol.for("react.lazy"),gp=Symbol.iterator;function Bx(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Ov={};function to(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=to.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}var Wf=Gf.prototype=new Fv;Wf.constructor=Gf;kv(Wf,to.prototype);Wf.isPureReactComponent=!0;var vp=Array.isArray,zv=Object.prototype.hasOwnProperty,jf={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zv.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:s,ref:o,props:r,_owner:jf.current}}function Hx(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Vx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _p=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vx(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case Px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pc(o,0):i,vp(r)?(n="",t!=null&&(n=t.replace(_p,"$&/")+"/"),Nl(r,e,n,"",function(u){return u})):r!=null&&($f(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_p,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pc(s,a);o+=Nl(s,e,n,l,r)}else if(l=Bx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,a++),o+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},kl={transition:null},Wx={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:kl,ReactCurrentOwner:jf};Fe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=to;Fe.Fragment=Lx;Fe.Profiler=Ix;Fe.PureComponent=Gf;Fe.StrictMode=Dx;Fe.Suspense=Ox;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=kv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zv.call(e,l)&&!Bv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:Nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ux,_context:t},t.Consumer=t};Fe.createElement=Hv;Fe.createFactory=function(t){var e=Hv.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:kx,render:t}};Fe.isValidElement=$f;Fe.lazy=function(t){return{$$typeof:zx,_payload:{_status:-1,_result:t},_init:Gx}};Fe.memo=function(t,e){return{$$typeof:Fx,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Fe.useContext=function(t){return Yt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Fe.useId=function(){return Yt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Yt.current.useRef(t)};Fe.useState=function(t){return Yt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Yt.current.useTransition()};Fe.version="18.2.0";Uv.exports=Fe;var Me=Uv.exports;const jx=Rx(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=Me,Xx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Yx=Object.prototype.hasOwnProperty,Kx=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qx={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yx.call(e,i)&&!Qx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xx,type:t,key:s,ref:o,props:r,_owner:Kx.current}}Cu.Fragment=qx;Cu.jsx=Vv;Cu.jsxs=Vv;Iv.exports=Cu;var $=Iv.exports,bd={},Gv={exports:{}},yn={},Wv={exports:{}},jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var O=D.length;D.push(z);e:for(;0<O;){var ue=O-1>>>1,Z=D[ue];if(0<r(Z,z))D[ue]=z,D[O]=Z,O=ue;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var z=D[0],O=D.pop();if(O!==z){D[0]=O;e:for(var ue=0,Z=D.length,B=Z>>>1;ue<B;){var K=2*(ue+1)-1,se=D[K],ae=K+1,P=D[ae];if(0>r(se,O))ae<Z&&0>r(P,se)?(D[ue]=P,D[ae]=O,ue=ae):(D[ue]=se,D[K]=O,ue=K);else if(ae<Z&&0>r(P,O))D[ue]=P,D[ae]=O,ue=ae;else break e}}return z}function r(D,z){var O=D.sortIndex-z.sortIndex;return O!==0?O:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=D)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function x(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,J(M);else{var z=n(u);z!==null&&Q(x,z.startTime-D)}}function M(D,z){_=!1,y&&(y=!1,c(L),L=-1),p=!0;var O=h;try{for(v(z),f=n(l);f!==null&&(!(f.expirationTime>z)||D&&!Y());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,h=f.priorityLevel;var Z=ue(f.expirationTime<=z);z=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),v(z)}else i(l);f=n(l)}if(f!==null)var B=!0;else{var K=n(u);K!==null&&Q(x,K.startTime-z),B=!1}return B}finally{f=null,h=O,p=!1}}var w=!1,C=null,L=-1,S=5,A=-1;function Y(){return!(t.unstable_now()-A<S)}function V(){if(C!==null){var D=t.unstable_now();A=D;var z=!0;try{z=C(!0,D)}finally{z?I():(w=!1,C=null)}}else w=!1}var I;if(typeof m=="function")I=function(){m(V)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,j=F.port2;F.port1.onmessage=V,I=function(){j.postMessage(null)}}else I=function(){g(V,0)};function J(D){C=D,w||(w=!0,I())}function Q(D,z){L=g(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,J(M))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var O=h;h=z;try{return D()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var O=h;h=D;try{return z()}finally{h=O}},t.unstable_scheduleCallback=function(D,z,O){var ue=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?ue+O:ue):O=ue,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,D={id:d++,callback:z,priorityLevel:D,startTime:O,expirationTime:Z,sortIndex:-1},O>ue?(D.sortIndex=O,e(u,D),n(l)===null&&D===n(u)&&(y?(c(L),L=-1):y=!0,Q(x,O-ue))):(D.sortIndex=Z,e(l,D),_||p||(_=!0,J(M))),D},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(D){var z=h;return function(){var O=h;h=z;try{return D.apply(this,arguments)}finally{h=O}}}})(jv);Wv.exports=jv;var Zx=Wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=Me,_n=Zx;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xv=new Set,Xo={};function Kr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Xo[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,Jx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},xp={};function eS(t){return Cd.call(xp,t)?!0:Cd.call(yp,t)?!1:Jx.test(t)?xp[t]=!0:(yp[t]=!0,!1)}function tS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nS(t,e,n,i){if(e===null||typeof e>"u"||tS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xf,qf);Ut[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xf,qf);Ut[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xf,qf);Ut[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nS(e,n,r,i)&&(n=null),i||r===null?eS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),Kv=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,mc;function To(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function iS(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case Rd:return"Profiler";case Kf:return"StrictMode";case Pd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case qv:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function rS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sS(t){var e=Qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=sS(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Id(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jv(t,e){e=e.checked,e!=null&&Yf(t,"checked",e,!1)}function Ud(t,e){Jv(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nd(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ao(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function e_(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oS=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){oS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function i_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function r_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aS=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(t,e){if(e){if(aS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hd=null,Is=null,Us=null;function Ap(t){if(t=Ea(t)){if(typeof Hd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Iu(e),Hd(t.stateNode,t.type,e))}}function s_(t){Is?Us?Us.push(t):Us=[t]:Is=t}function o_(){if(Is){var t=Is,e=Us;if(Us=Is=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function a_(t,e){return t(e)}function l_(){}var _c=!1;function u_(t,e,n){if(_c)return t(e,n);_c=!0;try{return a_(t,e,n)}finally{_c=!1,(Is!==null||Us!==null)&&(l_(),o_())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Vd=!1;if(Ri)try{var co={};Object.defineProperty(co,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Vd=!1}function lS(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Uo=!1,Ql=null,Zl=!1,Gd=null,uS={onError:function(t){Uo=!0,Ql=t}};function cS(t,e,n,i,r,s,o,a,l){Uo=!1,Ql=null,lS.apply(uS,arguments)}function dS(t,e,n,i,r,s,o,a,l){if(cS.apply(this,arguments),Uo){if(Uo){var u=Ql;Uo=!1,Ql=null}else throw Error(te(198));Zl||(Zl=!0,Gd=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(Qr(t)!==t)throw Error(te(188))}function fS(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bp(r),t;if(s===i)return bp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function d_(t){return t=fS(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var h_=_n.unstable_scheduleCallback,Cp=_n.unstable_cancelCallback,hS=_n.unstable_shouldYield,pS=_n.unstable_requestPaint,pt=_n.unstable_now,mS=_n.unstable_getCurrentPriorityLevel,eh=_n.unstable_ImmediatePriority,p_=_n.unstable_UserBlockingPriority,Jl=_n.unstable_NormalPriority,gS=_n.unstable_LowPriority,m_=_n.unstable_IdlePriority,Ru=null,oi=null;function vS(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:xS,_S=Math.log,yS=Math.LN2;function xS(t){return t>>>=0,t===0?32:31-(_S(t)/yS|0)|0}var ja=64,$a=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=SS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function ES(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var __,nh,y_,x_,S_,jd=!1,Xa=[],Zi=null,Ji=null,er=null,Ko=new Map,Qo=new Map,$i=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&nh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function TS(t,e,n,i,r){switch(e){case"focusin":return Zi=fo(Zi,t,e,n,i,r),!0;case"dragenter":return Ji=fo(Ji,t,e,n,i,r),!0;case"mouseover":return er=fo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,fo(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,fo(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function M_(t){var e=Pr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bd=i,n.target.dispatchEvent(i),Bd=null}else return e=Ea(n),e!==null&&nh(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){Ol(t)&&n.delete(e)}function AS(){jd=!1,Zi!==null&&Ol(Zi)&&(Zi=null),Ji!==null&&Ol(Ji)&&(Ji=null),er!==null&&Ol(er)&&(er=null),Ko.forEach(Pp),Qo.forEach(Pp)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,AS)))}function Zo(t){function e(r){return ho(r,t)}if(0<Xa.length){ho(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&ho(Zi,t),Ji!==null&&ho(Ji,t),er!==null&&ho(er,t),Ko.forEach(e),Qo.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)M_(n),n.blockedOn===null&&$i.shift()}var Ns=Ii.ReactCurrentBatchConfig,tu=!0;function bS(t,e,n,i){var r=$e,s=Ns.transition;Ns.transition=null;try{$e=1,ih(t,e,n,i)}finally{$e=r,Ns.transition=s}}function CS(t,e,n,i){var r=$e,s=Ns.transition;Ns.transition=null;try{$e=4,ih(t,e,n,i)}finally{$e=r,Ns.transition=s}}function ih(t,e,n,i){if(tu){var r=$d(t,e,n,i);if(r===null)Rc(t,e,i,nu,n),Rp(t,i);else if(TS(r,t,e,n,i))i.stopPropagation();else if(Rp(t,i),e&4&&-1<wS.indexOf(t)){for(;r!==null;){var s=Ea(r);if(s!==null&&__(s),s=$d(t,e,n,i),s===null&&Rc(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var nu=null;function $d(t,e,n,i){if(nu=null,t=Jf(i),t=Pr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function E_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mS()){case eh:return 1;case p_:return 4;case Jl:case gS:return 16;case m_:return 536870912;default:return 16}default:return 16}}var qi=null,rh=null,Fl=null;function w_(){if(Fl)return Fl;var t,e=rh,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Lp(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Lp,this.isPropagationStopped=Lp,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=xn(no),Ma=lt({},no,{view:0,detail:0}),RS=xn(Ma),xc,Sc,po,Pu=lt({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(xc=t.screenX-po.screenX,Sc=t.screenY-po.screenY):Sc=xc=0,po=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Dp=xn(Pu),PS=lt({},Pu,{dataTransfer:0}),LS=xn(PS),DS=lt({},Ma,{relatedTarget:0}),Mc=xn(DS),IS=lt({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),US=xn(IS),NS=lt({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=xn(NS),OS=lt({},no,{data:0}),Ip=xn(OS),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BS[t])?!!e[t]:!1}function oh(){return HS}var VS=lt({},Ma,{key:function(t){if(t.key){var e=FS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=xn(VS),WS=lt({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=xn(WS),jS=lt({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),$S=xn(jS),XS=lt({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=xn(XS),YS=lt({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=xn(YS),QS=[9,13,27,32],ah=Ri&&"CompositionEvent"in window,No=null;Ri&&"documentMode"in document&&(No=document.documentMode);var ZS=Ri&&"TextEvent"in window&&!No,T_=Ri&&(!ah||No&&8<No&&11>=No),Np=String.fromCharCode(32),kp=!1;function A_(t,e){switch(t){case"keyup":return QS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function JS(t,e){switch(t){case"compositionend":return b_(e);case"keypress":return e.which!==32?null:(kp=!0,Np);case"textInput":return t=e.data,t===Np&&kp?null:t;default:return null}}function e1(t,e){if(xs)return t==="compositionend"||!ah&&A_(t,e)?(t=w_(),Fl=rh=qi=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T_&&e.locale!=="ko"?null:e.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t1[t.type]:e==="textarea"}function C_(t,e,n,i){s_(i),e=iu(e,"onChange"),0<e.length&&(n=new sh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,Jo=null;function n1(t){z_(t,0)}function Lu(t){var e=Es(t);if(Zv(e))return t}function i1(t,e){if(t==="change")return e}var R_=!1;if(Ri){var Ec;if(Ri){var wc="oninput"in document;if(!wc){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),wc=typeof Fp.oninput=="function"}Ec=wc}else Ec=!1;R_=Ec&&(!document.documentMode||9<document.documentMode)}function zp(){ko&&(ko.detachEvent("onpropertychange",P_),Jo=ko=null)}function P_(t){if(t.propertyName==="value"&&Lu(Jo)){var e=[];C_(e,Jo,t,Jf(t)),u_(n1,e)}}function r1(t,e,n){t==="focusin"?(zp(),ko=e,Jo=n,ko.attachEvent("onpropertychange",P_)):t==="focusout"&&zp()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(Jo)}function o1(t,e){if(t==="click")return Lu(e)}function a1(t,e){if(t==="input"||t==="change")return Lu(e)}function l1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:l1;function ea(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cd.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function L_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D_(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u1(t){var e=D_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L_(n.ownerDocument.documentElement,n)){if(i!==null&&lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hp(n,s);var o=Hp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=Ri&&"documentMode"in document&&11>=document.documentMode,Ss=null,Xd=null,Oo=null,qd=!1;function Vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qd||Ss==null||Ss!==Kl(i)||(i=Ss,"selectionStart"in i&&lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&ea(Oo,i)||(Oo=i,i=iu(Xd,"onSelect"),0<i.length&&(e=new sh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Tc={},I_={};Ri&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Du(t){if(Tc[t])return Tc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I_)return Tc[t]=e[n];return t}var U_=Du("animationend"),N_=Du("animationiteration"),k_=Du("animationstart"),O_=Du("transitionend"),F_=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){F_.set(t,e),Kr(e,[t])}for(var Ac=0;Ac<Gp.length;Ac++){var bc=Gp[Ac],d1=bc.toLowerCase(),f1=bc[0].toUpperCase()+bc.slice(1);dr(d1,"on"+f1)}dr(U_,"onAnimationEnd");dr(N_,"onAnimationIteration");dr(k_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(O_,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dS(i,e,void 0,t),t.currentTarget=null}function z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,u),s=l}}}if(Zl)throw t=Gd,Zl=!1,Gd=null,t}function Ze(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(B_(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),B_(n,t,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Ka]){t[Ka]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Cc("selectionchange",!1,e))}}function B_(t,e,n,i){switch(E_(e)){case 1:var r=bS;break;case 4:r=CS;break;default:r=ih}n=r.bind(null,e,n,t),r=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}u_(function(){var u=s,d=Jf(n),f=[];e:{var h=F_.get(t);if(h!==void 0){var p=sh,_=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":p=GS;break;case"focusin":_="focus",p=Mc;break;case"focusout":_="blur",p=Mc;break;case"beforeblur":case"afterblur":p=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$S;break;case U_:case N_:case k_:p=US;break;case O_:p=qS;break;case"scroll":p=RS;break;case"wheel":p=KS;break;case"copy":case"cut":case"paste":p=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Up}var y=(e&4)!==0,g=!y&&t==="scroll",c=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,c!==null&&(x=Yo(m,c),x!=null&&y.push(na(m,x,v)))),g)break;m=m.return}0<y.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Bd&&(_=n.relatedTarget||n.fromElement)&&(Pr(_)||_[Pi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Pr(_):null,_!==null&&(g=Qr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Dp,x="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Up,x="onPointerLeave",c="onPointerEnter",m="pointer"),g=p==null?h:Es(p),v=_==null?h:Es(_),h=new y(x,m+"leave",p,n,d),h.target=g,h.relatedTarget=v,x=null,Pr(d)===u&&(y=new y(c,m+"enter",_,n,d),y.target=v,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,c=_,m=0,v=y;v;v=Zr(v))m++;for(v=0,x=c;x;x=Zr(x))v++;for(;0<m-v;)y=Zr(y),m--;for(;0<v-m;)c=Zr(c),v--;for(;m--;){if(y===c||c!==null&&y===c.alternate)break t;y=Zr(y),c=Zr(c)}y=null}else y=null;p!==null&&jp(f,h,p,y,!1),_!==null&&g!==null&&jp(f,g,_,y,!0)}}e:{if(h=u?Es(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=i1;else if(Op(h))if(R_)M=a1;else{M=s1;var w=r1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=o1);if(M&&(M=M(t,u))){C_(f,M,n,d);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Nd(h,"number",h.value)}switch(w=u?Es(u):window,t){case"focusin":(Op(w)||w.contentEditable==="true")&&(Ss=w,Xd=u,Oo=null);break;case"focusout":Oo=Xd=Ss=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,Vp(f,n,d);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":Vp(f,n,d)}var C;if(ah)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else xs?A_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(T_&&n.locale!=="ko"&&(xs||L!=="onCompositionStart"?L==="onCompositionEnd"&&xs&&(C=w_()):(qi=d,rh="value"in qi?qi.value:qi.textContent,xs=!0)),w=iu(u,L),0<w.length&&(L=new Ip(L,t,null,n,d),f.push({event:L,listeners:w}),C?L.data=C:(C=b_(n),C!==null&&(L.data=C)))),(C=ZS?JS(t,n):e1(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(d=new Ip("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}z_(f,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(na(t,s,r)),s=Yo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Yo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var p1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(m1,"")}function Qa(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(te(425))}function ru(){}var Yd=null,Kd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(_1)}:Zd;function _1(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),ri="__reactFiber$"+io,ia="__reactProps$"+io,Pi="__reactContainer$"+io,Jd="__reactEvents$"+io,y1="__reactListeners$"+io,x1="__reactHandles$"+io;function Pr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[ri])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[ri]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Iu(t){return t[ia]||null}var ef=[],ws=-1;function fr(t){return{current:t}}function Je(t){0>ws||(t.current=ef[ws],ef[ws]=null,ws--)}function Qe(t,e){ws++,ef[ws]=t.current,t.current=e}var ur={},Vt=fr(ur),rn=fr(!1),Br=ur;function Ws(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function su(){Je(rn),Je(Vt)}function Yp(t,e,n){if(Vt.current!==ur)throw Error(te(168));Qe(Vt,e),Qe(rn,n)}function H_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,rS(t)||"Unknown",r));return lt({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Br=Vt.current,Qe(Vt,t),Qe(rn,rn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=H_(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,Je(rn),Je(Vt),Qe(Vt,t)):Je(rn),Qe(rn,n)}var Mi=null,Uu=!1,Lc=!1;function V_(t){Mi===null?Mi=[t]:Mi.push(t)}function S1(t){Uu=!0,V_(t)}function hr(){if(!Lc&&Mi!==null){Lc=!0;var t=0,e=$e;try{var n=Mi;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Uu=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),h_(eh,hr),r}finally{$e=e,Lc=!1}}return null}var Ts=[],As=0,au=null,lu=0,En=[],wn=0,Hr=null,wi=1,Ti="";function Er(t,e){Ts[As++]=lu,Ts[As++]=au,au=t,lu=e}function G_(t,e,n){En[wn++]=wi,En[wn++]=Ti,En[wn++]=Hr,Hr=t;var i=wi;t=Ti;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Xn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function uh(t){t.return!==null&&(Er(t,1),G_(t,1,0))}function ch(t){for(;t===au;)au=Ts[--As],Ts[As]=null,lu=Ts[--As],Ts[As]=null;for(;t===Hr;)Hr=En[--wn],En[wn]=null,Ti=En[--wn],En[wn]=null,wi=En[--wn],En[wn]=null}var gn=null,pn=null,nt=!1,Hn=null;function W_(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,pn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,pn=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(nt){var e=pn;if(e){var n=e;if(!Qp(t,e)){if(tf(t))throw Error(te(418));e=tr(n.nextSibling);var i=gn;e&&Qp(t,e)?W_(i,n):(t.flags=t.flags&-4097|2,nt=!1,gn=t)}}else{if(tf(t))throw Error(te(418));t.flags=t.flags&-4097|2,nt=!1,gn=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Za(t){if(t!==gn)return!1;if(!nt)return Zp(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=pn)){if(tf(t))throw j_(),Error(te(418));for(;e;)W_(t,e),e=tr(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=gn?tr(t.stateNode.nextSibling):null;return!0}function j_(){for(var t=pn;t;)t=tr(t.nextSibling)}function js(){pn=gn=null,nt=!1}function dh(t){Hn===null?Hn=[t]:Hn.push(t)}var M1=Ii.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uu=fr(null),cu=null,bs=null,fh=null;function hh(){fh=bs=cu=null}function ph(t){var e=uu.current;Je(uu),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){cu=t,fh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(fh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(cu===null)throw Error(te(308));bs=t,cu.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Lr=null;function mh(t){Lr===null?Lr=[t]:Lr.push(t)}function $_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,th(t,n)}}function Jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=lt({},f,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=f}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var q_=new $v.Component().refs;function sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=rr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(qn(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=rr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(qn(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=rr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(qn(e,t,i,n),Bl(e,t,i))}};function tm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function Y_(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=sn(e)?Br:Vt.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nu.enqueueReplaceState(e,e.state,null)}function of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=q_,gh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=sn(e)?Br:Vt.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nu.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===q_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function K_(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=sr(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=2,m):v):(c.flags|=2,m)):(c.flags|=1048576,m)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,m,v,x){return m===null||m.tag!==6?(m=Fc(v,c.mode,x),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,x){var M=v.type;return M===ys?d(c,m,v.props.children,x,v.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wi&&im(M)===m.type)?(x=r(m,v.props),x.ref=mo(c,m,v),x.return=c,x):(x=$l(v.type,v.key,v.props,null,c.mode,x),x.ref=mo(c,m,v),x.return=c,x)}function u(c,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=zc(v,c.mode,x),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function d(c,m,v,x,M){return m===null||m.tag!==7?(m=kr(v,c.mode,x,M),m.return=c,m):(m=r(m,v),m.return=c,m)}function f(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fc(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Va:return v=$l(m.type,m.key,m.props,null,c.mode,v),v.ref=mo(c,null,m),v.return=c,v;case _s:return m=zc(m,c.mode,v),m.return=c,m;case Wi:var x=m._init;return f(c,x(m._payload),v)}if(Ao(m)||uo(m))return m=kr(m,c.mode,v,null),m.return=c,m;Ja(c,m)}return null}function h(c,m,v,x){var M=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(c,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return v.key===M?l(c,m,v,x):null;case _s:return v.key===M?u(c,m,v,x):null;case Wi:return M=v._init,h(c,m,M(v._payload),x)}if(Ao(v)||uo(v))return M!==null?null:d(c,m,v,x,null);Ja(c,v)}return null}function p(c,m,v,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(v)||null,a(m,c,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return c=c.get(x.key===null?v:x.key)||null,l(m,c,x,M);case _s:return c=c.get(x.key===null?v:x.key)||null,u(m,c,x,M);case Wi:var w=x._init;return p(c,m,v,w(x._payload),M)}if(Ao(x)||uo(x))return c=c.get(v)||null,d(m,c,x,M,null);Ja(m,x)}return null}function _(c,m,v,x){for(var M=null,w=null,C=m,L=m=0,S=null;C!==null&&L<v.length;L++){C.index>L?(S=C,C=null):S=C.sibling;var A=h(c,C,v[L],x);if(A===null){C===null&&(C=S);break}t&&C&&A.alternate===null&&e(c,C),m=s(A,m,L),w===null?M=A:w.sibling=A,w=A,C=S}if(L===v.length)return n(c,C),nt&&Er(c,L),M;if(C===null){for(;L<v.length;L++)C=f(c,v[L],x),C!==null&&(m=s(C,m,L),w===null?M=C:w.sibling=C,w=C);return nt&&Er(c,L),M}for(C=i(c,C);L<v.length;L++)S=p(C,c,L,v[L],x),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?L:S.key),m=s(S,m,L),w===null?M=S:w.sibling=S,w=S);return t&&C.forEach(function(Y){return e(c,Y)}),nt&&Er(c,L),M}function y(c,m,v,x){var M=uo(v);if(typeof M!="function")throw Error(te(150));if(v=M.call(v),v==null)throw Error(te(151));for(var w=M=null,C=m,L=m=0,S=null,A=v.next();C!==null&&!A.done;L++,A=v.next()){C.index>L?(S=C,C=null):S=C.sibling;var Y=h(c,C,A.value,x);if(Y===null){C===null&&(C=S);break}t&&C&&Y.alternate===null&&e(c,C),m=s(Y,m,L),w===null?M=Y:w.sibling=Y,w=Y,C=S}if(A.done)return n(c,C),nt&&Er(c,L),M;if(C===null){for(;!A.done;L++,A=v.next())A=f(c,A.value,x),A!==null&&(m=s(A,m,L),w===null?M=A:w.sibling=A,w=A);return nt&&Er(c,L),M}for(C=i(c,C);!A.done;L++,A=v.next())A=p(C,c,L,A.value,x),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?L:A.key),m=s(A,m,L),w===null?M=A:w.sibling=A,w=A);return t&&C.forEach(function(V){return e(c,V)}),nt&&Er(c,L),M}function g(c,m,v,x){if(typeof v=="object"&&v!==null&&v.type===ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:e:{for(var M=v.key,w=m;w!==null;){if(w.key===M){if(M=v.type,M===ys){if(w.tag===7){n(c,w.sibling),m=r(w,v.props.children),m.return=c,c=m;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wi&&im(M)===w.type){n(c,w.sibling),m=r(w,v.props),m.ref=mo(c,w,v),m.return=c,c=m;break e}n(c,w);break}else e(c,w);w=w.sibling}v.type===ys?(m=kr(v.props.children,c.mode,x,v.key),m.return=c,c=m):(x=$l(v.type,v.key,v.props,null,c.mode,x),x.ref=mo(c,m,v),x.return=c,c=x)}return o(c);case _s:e:{for(w=v.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=zc(v,c.mode,x),m.return=c,c=m}return o(c);case Wi:return w=v._init,g(c,m,w(v._payload),x)}if(Ao(v))return _(c,m,v,x);if(uo(v))return y(c,m,v,x);Ja(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,v),m.return=c,c=m):(n(c,m),m=Fc(v,c.mode,x),m.return=c,c=m),o(c)):n(c,m)}return g}var $s=K_(!0),Q_=K_(!1),wa={},ai=fr(wa),ra=fr(wa),sa=fr(wa);function Dr(t){if(t===wa)throw Error(te(174));return t}function vh(t,e){switch(Qe(sa,e),Qe(ra,t),Qe(ai,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}Je(ai),Qe(ai,e)}function Xs(){Je(ai),Je(ra),Je(sa)}function Z_(t){Dr(sa.current);var e=Dr(ai.current),n=Od(e,t.type);e!==n&&(Qe(ra,t),Qe(ai,n))}function _h(t){ra.current===t&&(Je(ai),Je(ra))}var ot=fr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function yh(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Hl=Ii.ReactCurrentDispatcher,Ic=Ii.ReactCurrentBatchConfig,Vr=0,at=null,yt=null,bt=null,hu=!1,Fo=!1,oa=0,E1=0;function kt(){throw Error(te(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Sh(t,e,n,i,r,s){if(Vr=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?b1:C1,t=n(i,r),Fo){s=0;do{if(Fo=!1,oa=0,25<=s)throw Error(te(301));s+=1,bt=yt=null,e.updateQueue=null,Hl.current=R1,t=n(i,r)}while(Fo)}if(Hl.current=pu,e=yt!==null&&yt.next!==null,Vr=0,bt=yt=at=null,hu=!1,e)throw Error(te(300));return t}function Mh(){var t=oa!==0;return oa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?at.memoizedState=bt=t:bt=bt.next=t,bt}function Dn(){if(yt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?at.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(te(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?at.memoizedState=bt=t:bt=bt.next=t}return bt}function aa(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Vr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,at.lanes|=d,Gr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,at.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J_(){}function e0(t,e){var n=at,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Eh(i0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,la(9,n0.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(te(349));Vr&30||t0(n,e,r)}return r}function t0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n0(t,e,n,i){e.value=n,e.getSnapshot=i,r0(e)&&s0(t)}function i0(t,e,n){return n(function(){r0(e)&&s0(t)})}function r0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function s0(t){var e=Li(t,1);e!==null&&qn(e,t,1,-1)}function rm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=A1.bind(null,at,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function o0(){return Dn().memoizedState}function Vl(t,e,n,i){var r=ei();at.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&xh(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}at.flags|=t,r.memoizedState=la(1|e,n,s,i)}function sm(t,e){return Vl(8390656,8,t,e)}function Eh(t,e){return ku(2048,8,t,e)}function a0(t,e){return ku(4,2,t,e)}function l0(t,e){return ku(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,u0.bind(null,e,t),n)}function wh(){}function d0(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function f0(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function h0(t,e,n){return Vr&21?(Yn(n,e)||(n=g_(),at.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function w1(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Ic.transition;Ic.transition={};try{t(!1),e()}finally{$e=n,Ic.transition=i}}function p0(){return Dn().memoizedState}function T1(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},m0(t))g0(e,n);else if(n=$_(t,e,n,i),n!==null){var r=qt();qn(n,t,i,r),v0(n,e,i)}}function A1(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(t))g0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$_(t,e,r,i),n!==null&&(r=qt(),qn(n,t,i,r),v0(n,e,i))}}function m0(t){var e=t.alternate;return t===at||e!==null&&e===at}function g0(t,e){Fo=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,th(t,n)}}var pu={readContext:Ln,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},b1={readContext:Ln,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=T1.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:wh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=w1.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=at,r=ei();if(nt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ct===null)throw Error(te(349));Vr&30||t0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sm(i0.bind(null,i,s,t),[t]),i.flags|=2048,la(9,n0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ct.identifierPrefix;if(nt){var n=Ti,i=wi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=E1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:Ln,useCallback:d0,useContext:Ln,useEffect:Eh,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:Uc,useRef:o0,useState:function(){return Uc(aa)},useDebugValue:wh,useDeferredValue:function(t){var e=Dn();return h0(e,yt.memoizedState,t)},useTransition:function(){var t=Uc(aa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1},R1={readContext:Ln,useCallback:d0,useContext:Ln,useEffect:Eh,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:Nc,useRef:o0,useState:function(){return Nc(aa)},useDebugValue:wh,useDeferredValue:function(t){var e=Dn();return yt===null?e.memoizedState=t:h0(e,yt.memoizedState,t)},useTransition:function(){var t=Nc(aa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1};function qs(t,e){try{var n="",i=e;do n+=iS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P1=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,vf=i),af(t,e)},n}function y0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function om(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new P1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=W1.bind(null,t,e,n),e.then(t,t))}function am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var L1=Ii.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?Q_(e,null,n,i):$s(e,t.child,n,i)}function um(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Sh(t,e,n,i,s,r),n=Mh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(nt&&n&&uh(e),e.flags|=1,$t(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x0(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return lf(t,e,n,i,r)}function S0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Qe(Rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Qe(Rs,hn),hn|=i;return $t(t,e,r,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,i,r){var s=sn(n)?Br:Vt.current;return s=Ws(e,s),ks(e,r),n=Sh(t,e,n,i,s,r),i=Mh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(nt&&i&&uh(e),e.flags|=1,$t(t,e,n,r),e.child)}function dm(t,e,n,i,r){if(sn(n)){var s=!0;ou(e)}else s=!1;if(ks(e,r),e.stateNode===null)Gl(t,e),Y_(e,n,i),of(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=sn(n)?Br:Vt.current,u=Ws(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&nm(e,o,i,u),ji=!1;var h=e.memoizedState;o.state=h,du(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||ji?(typeof d=="function"&&(sf(e,n,d,i),l=e.memoizedState),(a=ji||tm(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,X_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=sn(n)?Br:Vt.current,l=Ws(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&nm(e,o,i,l),ji=!1,h=e.memoizedState,o.state=h,du(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||rn.current||ji?(typeof p=="function"&&(sf(e,n,p,i),_=e.memoizedState),(u=ji||tm(e,n,u,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return uf(t,e,n,i,s,r)}function uf(t,e,n,i,r,s){M0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kp(e,n,!1),Di(t,e,s);i=e.stateNode,L1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),vh(t,e.containerInfo)}function fm(t,e,n,i,r){return js(),dh(r),e.flags|=256,$t(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function w0(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(ot,r&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=cf,t):Th(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return D1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Th(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&dh(i),$s(e,t.child,null,n),t=Th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=kc(Error(te(422))),el(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zu({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=cf,s);if(!(e.mode&1))return el(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=kc(s,i,void 0),el(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),qn(i,t,r,-1))}return Lh(),i=kc(Error(te(421))),el(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=tr(r.nextSibling),gn=e,nt=!0,Hn=null,t!==null&&(En[wn++]=wi,En[wn++]=Ti,En[wn++]=Hr,wi=t.id,Ti=t.overflow,Hr=e),e=Th(e,i.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rf(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function T0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I1(t,e,n){switch(e.tag){case 3:E0(e),js();break;case 5:Z_(e);break;case 1:sn(e.type)&&ou(e);break;case 4:vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?w0(t,e,n):(Qe(ot,ot.current&1),t=Di(t,e,n),t!==null?t.sibling:null);Qe(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return T0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return Di(t,e,n)}var A0,ff,b0,C0;A0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};b0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(ai.current);var s=null;switch(n){case"input":r=Id(t,r),i=Id(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=kd(t,r),i=kd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}Fd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};C0=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function U1(t,e,n){var i=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return sn(e.type)&&su(),Ot(e),null;case 3:return i=e.stateNode,Xs(),Je(rn),Je(Vt),yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(xf(Hn),Hn=null))),ff(t,e),Ot(e),null;case 5:_h(e);var r=Dr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ot(e),null}if(t=Dr(ai.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)Ze(Co[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Mp(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":wp(i,s),Ze("invalid",i)}Fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(n){case"input":Ga(i),Ep(i,s,!0);break;case"textarea":Ga(i),Tp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[ia]=i,A0(t,e,!1,!1),e.stateNode=t;e:{switch(o=zd(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)Ze(Co[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":Mp(t,i),r=Id(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":wp(t,i),r=kd(t,i),Ze("invalid",t);break;default:r=i}Fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",t):l!=null&&Yf(t,s,l,o))}switch(n){case"input":Ga(t),Ep(t,i,!1);break;case"textarea":Ga(t),Tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Dr(sa.current),Dr(ai.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Ot(e),null;case 13:if(Je(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&pn!==null&&e.mode&1&&!(e.flags&128))j_(),js(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ri]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Hn!==null&&(xf(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?xt===0&&(xt=3):Lh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Xs(),ff(t,e),t===null&&ta(e.stateNode.containerInfo),Ot(e),null;case 10:return ph(e.type._context),Ot(e),null;case 17:return sn(e.type)&&su(),Ot(e),null;case 19:if(Je(ot),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>Ys&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Ot(e),null}else 2*pt()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=ot.current,Qe(ot,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Ph(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function N1(t,e){switch(ch(e),e.tag){case 1:return sn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Je(rn),Je(Vt),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _h(e),null;case 13:if(Je(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Je(ot),null;case 4:return Xs(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var tl=!1,Bt=!1,k1=typeof WeakSet=="function"?WeakSet:Set,he=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function hf(t,e,n){try{n()}catch(i){dt(t,e,i)}}var pm=!1;function O1(t,e){if(Yd=tu,t=D_(),lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},tu=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),g);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=pm,pm=!1,_}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,n,s)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[ia],delete e[Jd],delete e[y1],delete e[x1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P0(t){return t.tag===5||t.tag===3||t.tag===4}function mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var Pt=null,Bn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:Bt||Cs(n,e);case 6:var i=Pt,r=Bn;Pt=null,Ni(t,e,n),Pt=i,Bn=r,Pt!==null&&(Bn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Bn?(t=Pt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Zo(t)):Pc(Pt,n.stateNode));break;case 4:i=Pt,r=Bn,Pt=n.stateNode.containerInfo,Bn=!0,Ni(t,e,n),Pt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Bt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ni(t,e,n),Bt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k1),e.forEach(function(i){var r=$1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Bn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Bn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Pt===null)throw Error(te(160));L0(s,o,r),Pt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}function D0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{zo(3,t,t.return),Ou(3,t)}catch(y){dt(t,t.return,y)}try{zo(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jv(r,s),zd(a,o);var u=zd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?r_(r,f):d==="dangerouslySetInnerHTML"?n_(r,f):d==="children"?qo(r,f):Yf(r,d,f,u)}switch(a){case"input":Ud(r,s);break;case"textarea":e_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(y){dt(t,t.return,y)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){dt(t,t.return,y)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=pt())),i&4&&gm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||d,Un(e,t),Bt=u):Un(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(f=he=d;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:Cs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){_m(f);continue}}p!==null?(p.return=h,he=p):_m(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i_("display",o))}catch(y){dt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){dt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&gm(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=mm(t);gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=mm(t);mf(t,a,o);break;default:throw Error(te(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F1(t,e,n){he=t,I0(t)}function I0(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=tl;var u=Bt;if(tl=o,(Bt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?ym(r):l!==null?(l.return=o,he=l):ym(r);for(;s!==null;)he=s,I0(s),s=s.sibling;he=r,tl=a,Bt=u}vm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):vm(t)}}function vm(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&pf(e)}catch(h){dt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function _m(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function ym(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{pf(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{pf(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var z1=Math.ceil,mu=Ii.ReactCurrentDispatcher,Ah=Ii.ReactCurrentOwner,Pn=Ii.ReactCurrentBatchConfig,Ge=0,Ct=null,vt=null,Dt=0,hn=0,Rs=fr(0),xt=0,ua=null,Gr=0,Fu=0,bh=0,Bo=null,en=null,Ch=0,Ys=1/0,xi=null,gu=!1,vf=null,ir=null,nl=!1,Yi=null,vu=0,Ho=0,_f=null,Wl=-1,jl=0;function qt(){return Ge&6?pt():Wl!==-1?Wl:Wl=pt()}function rr(t){return t.mode&1?Ge&2&&Dt!==0?Dt&-Dt:M1.transition!==null?(jl===0&&(jl=g_()),jl):(t=$e,t!==0||(t=window.event,t=t===void 0?16:E_(t.type)),t):1}function qn(t,e,n,i){if(50<Ho)throw Ho=0,_f=null,Error(te(185));Sa(t,n,i),(!(Ge&2)||t!==Ct)&&(t===Ct&&(!(Ge&2)&&(Fu|=n),xt===4&&Xi(t,Dt)),on(t,i),n===1&&Ge===0&&!(e.mode&1)&&(Ys=pt()+500,Uu&&hr()))}function on(t,e){var n=t.callbackNode;MS(t,e);var i=eu(t,t===Ct?Dt:0);if(i===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?S1(xm.bind(null,t)):V_(xm.bind(null,t)),v1(function(){!(Ge&6)&&hr()}),n=null;else{switch(v_(i)){case 1:n=eh;break;case 4:n=p_;break;case 16:n=Jl;break;case 536870912:n=m_;break;default:n=Jl}n=H0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(Wl=-1,jl=0,Ge&6)throw Error(te(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=eu(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_u(t,i);else{e=i;var r=Ge;Ge|=2;var s=k0();(Ct!==t||Dt!==e)&&(xi=null,Ys=pt()+500,Nr(t,e));do try{V1();break}catch(a){N0(t,a)}while(1);hh(),mu.current=s,Ge=r,vt!==null?e=0:(Ct=null,Dt=0,e=xt)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=ua,Nr(t,0),Xi(t,i),on(t,pt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!B1(r)&&(e=_u(t,i),e===2&&(s=Wd(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=ua,Nr(t,0),Xi(t,i),on(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:wr(t,en,xi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Ch+500-pt(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd(wr.bind(null,t,en,xi),e);break}wr(t,en,xi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z1(i/1960))-i,10<i){t.timeoutHandle=Zd(wr.bind(null,t,en,xi),i);break}wr(t,en,xi);break;case 5:wr(t,en,xi);break;default:throw Error(te(329))}}}return on(t,pt()),t.callbackNode===n?U0.bind(null,t):null}function yf(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=_u(t,e),t!==2&&(e=en,en=n,e!==null&&xf(e)),t}function xf(t){en===null?en=t:en.push.apply(en,t)}function B1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~bh,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(Ge&6)throw Error(te(327));Os();var e=eu(t,0);if(!(e&1))return on(t,pt()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=ua,Nr(t,0),Xi(t,e),on(t,pt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,en,xi),on(t,pt()),null}function Rh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(Ys=pt()+500,Uu&&hr())}}function Wr(t){Yi!==null&&Yi.tag===0&&!(Ge&6)&&Os();var e=Ge;Ge|=1;var n=Pn.transition,i=$e;try{if(Pn.transition=null,$e=1,t)return t()}finally{$e=i,Pn.transition=n,Ge=e,!(Ge&6)&&hr()}}function Ph(){hn=Rs.current,Je(Rs)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g1(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:Xs(),Je(rn),Je(Vt),yh();break;case 5:_h(i);break;case 4:Xs();break;case 13:Je(ot);break;case 19:Je(ot);break;case 10:ph(i.type._context);break;case 22:case 23:Ph()}n=n.return}if(Ct=t,vt=t=sr(t.current,null),Dt=hn=e,xt=0,ua=null,bh=Fu=Gr=0,en=Bo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function N0(t,e){do{var n=vt;try{if(hh(),Hl.current=pu,hu){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(Vr=0,bt=yt=at=null,Fo=!1,oa=0,Ah.current=null,n===null||n.return===null){xt=1,ua=e,vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=am(o);if(p!==null){p.flags&=-257,lm(p,o,a,s,e),p.mode&1&&om(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){om(s,u,e),Lh();break e}l=Error(te(426))}}else if(nt&&a.mode&1){var g=am(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),lm(g,o,a,s,e),dh(qs(l,a));break e}}s=l=qs(l,a),xt!==4&&(xt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=_0(s,l,e);Jp(s,c);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=y0(s,a,e);Jp(s,x);break e}}s=s.return}while(s!==null)}F0(n)}catch(M){e=M,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(1)}function k0(){var t=mu.current;return mu.current=pu,t===null?pu:t}function Lh(){(xt===0||xt===3||xt===2)&&(xt=4),Ct===null||!(Gr&268435455)&&!(Fu&268435455)||Xi(Ct,Dt)}function _u(t,e){var n=Ge;Ge|=2;var i=k0();(Ct!==t||Dt!==e)&&(xi=null,Nr(t,e));do try{H1();break}catch(r){N0(t,r)}while(1);if(hh(),Ge=n,mu.current=i,vt!==null)throw Error(te(261));return Ct=null,Dt=0,xt}function H1(){for(;vt!==null;)O0(vt)}function V1(){for(;vt!==null&&!hS();)O0(vt)}function O0(t){var e=B0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?F0(t):vt=e,Ah.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=N1(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,vt=null;return}}else if(n=U1(n,e,hn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);xt===0&&(xt=5)}function wr(t,e,n){var i=$e,r=Pn.transition;try{Pn.transition=null,$e=1,G1(t,e,n,i)}finally{Pn.transition=r,$e=i}return null}function G1(t,e,n,i){do Os();while(Yi!==null);if(Ge&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ES(t,s),t===Ct&&(vt=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,H0(Jl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=$e;$e=1;var a=Ge;Ge|=4,Ah.current=null,O1(t,n),D0(n,t),u1(Kd),tu=!!Yd,Kd=Yd=null,t.current=n,F1(n),pS(),Ge=a,$e=o,Pn.transition=s}else t.current=n;if(nl&&(nl=!1,Yi=t,vu=r),s=t.pendingLanes,s===0&&(ir=null),vS(n.stateNode),on(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=vf,vf=null,t;return vu&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===_f?Ho++:(Ho=0,_f=t):Ho=0,hr(),null}function Os(){if(Yi!==null){var t=v_(vu),e=Pn.transition,n=$e;try{if(Pn.transition=null,$e=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,vu=0,Ge&6)throw Error(te(331));var r=Ge;for(Ge|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:zo(8,d,s)}var f=d.child;if(f!==null)f.return=d,he=f;else for(;he!==null;){d=he;var h=d.sibling,p=d.return;if(R0(d),d===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,he=c;break e}he=s.return}}var m=t.current;for(he=m;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=m;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(M){dt(a,a.return,M)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if(Ge=r,hr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Ru,t)}catch{}i=!0}return i}finally{$e=n,Pn.transition=e}}return!1}function Sm(t,e,n){e=qs(n,e),e=_0(t,e,1),t=nr(t,e,1),e=qt(),t!==null&&(Sa(t,1,e),on(t,e))}function dt(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=qs(n,t),t=y0(e,t,1),e=nr(e,t,1),t=qt(),e!==null&&(Sa(e,1,t),on(e,t));break}}e=e.return}}function W1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(xt===4||xt===3&&(Dt&130023424)===Dt&&500>pt()-Ch?Nr(t,0):bh|=n),on(t,e)}function z0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=qt();t=Li(t,e),t!==null&&(Sa(t,e,n),on(t,n))}function j1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z0(t,n)}function $1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),z0(t,n)}var B0;B0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,I1(t,e,n);nn=!!(t.flags&131072)}else nn=!1,nt&&e.flags&1048576&&G_(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(t,e),t=e.pendingProps;var r=Ws(e,Vt.current);ks(e,n),r=Sh(null,e,i,t,r,n);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gh(e),r.updater=Nu,e.stateNode=r,r._reactInternals=e,of(e,i,t,n),e=uf(null,e,i,!0,s,n)):(e.tag=0,nt&&s&&uh(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q1(i),t=zn(i,t),r){case 0:e=lf(null,e,i,t,n);break e;case 1:e=dm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=cm(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),dm(t,e,i,r,n);case 3:e:{if(E0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,X_(t,e),du(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(te(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(te(424)),e),e=fm(t,e,i,n,r);break e}else for(pn=tr(e.stateNode.containerInfo.firstChild),gn=e,nt=!0,Hn=null,n=Q_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Di(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Z_(e),t===null&&nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qd(i,r)?o=null:s!==null&&Qd(i,s)&&(e.flags|=32),M0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return w0(t,e,n);case 4:return vh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),um(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Qe(uu,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!rn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=Ln(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),cm(t,e,i,r,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Gl(t,e),e.tag=1,sn(i)?(t=!0,ou(e)):t=!1,ks(e,n),Y_(e,i,r),of(e,i,r,n),uf(null,e,i,!0,t,n);case 19:return T0(t,e,n);case 22:return S0(t,e,n)}throw Error(te(156,e.tag))};function H0(t,e){return h_(t,e)}function X1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new X1(t,e,n,i)}function Dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q1(t){if(typeof t=="function")return Dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Zf)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return kr(n.children,r,s,e);case Kf:o=8,r|=8;break;case Rd:return t=Rn(12,n,e,r|2),t.elementType=Rd,t.lanes=s,t;case Pd:return t=Rn(13,n,e,r),t.elementType=Pd,t.lanes=s,t;case Ld:return t=Rn(19,n,e,r),t.elementType=Ld,t.lanes=s,t;case Kv:return zu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qv:o=10;break e;case Yv:o=9;break e;case Qf:o=11;break e;case Zf:o=14;break e;case Wi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function zu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Kv,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,i,r,s,o,a,l){return t=new Y1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(s),t}function K1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function V0(t){if(!t)return ur;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return H_(t,n,e)}return e}function G0(t,e,n,i,r,s,o,a,l){return t=Ih(n,i,!0,t,r,s,o,a,l),t.context=V0(null),n=t.current,i=qt(),r=rr(n),s=bi(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,Sa(t,r,i),on(t,i),t}function Bu(t,e,n,i){var r=e.current,s=qt(),o=rr(r);return n=V0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(qn(t,r,o,s),Bl(t,r,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function Q1(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Hu.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Bu(t,e,null,null)};Hu.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Bu(null,t,null,null)}),e[Pi]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=x_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&M_(t)}};function kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function Z1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yu(o);s.call(u)}}var o=G0(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=o,t[Pi]=o.current,ta(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yu(l);a.call(u)}}var l=Ih(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Pi]=l.current,ta(t.nodeType===8?t.parentNode:t),Wr(function(){Bu(e,l,n,i)}),l}function Gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yu(o);a.call(l)}}Bu(e,o,t,r)}else o=Z1(n,e,t,r,i);return yu(o)}__=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(th(e,n|1),on(e,pt()),!(Ge&6)&&(Ys=pt()+500,hr()))}break;case 13:Wr(function(){var i=Li(t,1);if(i!==null){var r=qt();qn(i,t,1,r)}}),Uh(t,1)}};nh=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=qt();qn(e,t,134217728,n)}Uh(t,134217728)}};y_=function(t){if(t.tag===13){var e=rr(t),n=Li(t,e);if(n!==null){var i=qt();qn(n,t,e,i)}Uh(t,e)}};x_=function(){return $e};S_=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Hd=function(t,e,n){switch(e){case"input":if(Ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(te(90));Zv(i),Ud(i,r)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};a_=Rh;l_=Wr;var J1={usingClientEntryPoint:!1,Events:[Ea,Es,Iu,s_,o_,Rh]},vo={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eM={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Ru=il.inject(eM),oi=il}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kh(e))throw Error(te(200));return K1(t,e,null,n)};yn.createRoot=function(t,e){if(!kh(t))throw Error(te(299));var n=!1,i="",r=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,ta(t.nodeType===8?t.parentNode:t),new Nh(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Wr(t)};yn.hydrate=function(t,e,n){if(!Vu(e))throw Error(te(200));return Gu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!kh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=W0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=G0(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hu(e)};yn.render=function(t,e,n){if(!Vu(e))throw Error(te(200));return Gu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(te(40));return t._reactRootContainer?(Wr(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};yn.unstable_batchedUpdates=Rh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Gu(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),Gv.exports=yn;var Oh=Gv.exports,wm=Oh;bd.createRoot=wm.createRoot,bd.hydrateRoot=wm.hydrateRoot;var ct={},Fh={},Ta={},Aa={},$0="Expected a function",Tm=0/0,tM="[object Symbol]",nM=/^\s+|\s+$/g,iM=/^[-+]0x[0-9a-f]+$/i,rM=/^0b[01]+$/i,sM=/^0o[0-7]+$/i,oM=parseInt,aM=typeof Ba=="object"&&Ba&&Ba.Object===Object&&Ba,lM=typeof self=="object"&&self&&self.Object===Object&&self,uM=aM||lM||Function("return this")(),cM=Object.prototype,dM=cM.toString,fM=Math.max,hM=Math.min,Bc=function(){return uM.Date.now()};function pM(t,e,n){var i,r,s,o,a,l,u=0,d=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError($0);e=Am(e)||0,xu(n)&&(d=!!n.leading,f="maxWait"in n,s=f?fM(Am(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function p(w){var C=i,L=r;return i=r=void 0,u=w,o=t.apply(L,C),o}function _(w){return u=w,a=setTimeout(c,e),d?p(w):o}function y(w){var C=w-l,L=w-u,S=e-C;return f?hM(S,s-L):S}function g(w){var C=w-l,L=w-u;return l===void 0||C>=e||C<0||f&&L>=s}function c(){var w=Bc();if(g(w))return m(w);a=setTimeout(c,y(w))}function m(w){return a=void 0,h&&i?p(w):(i=r=void 0,o)}function v(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function x(){return a===void 0?o:m(Bc())}function M(){var w=Bc(),C=g(w);if(i=arguments,r=this,l=w,C){if(a===void 0)return _(l);if(f)return a=setTimeout(c,e),p(l)}return a===void 0&&(a=setTimeout(c,e)),o}return M.cancel=v,M.flush=x,M}function mM(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError($0);return xu(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),pM(t,e,{leading:i,maxWait:e,trailing:r})}function xu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function gM(t){return!!t&&typeof t=="object"}function vM(t){return typeof t=="symbol"||gM(t)&&dM.call(t)==tM}function Am(t){if(typeof t=="number")return t;if(vM(t))return Tm;if(xu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(nM,"");var n=rM.test(t);return n||sM.test(t)?oM(t.slice(2),n?2:8):iM.test(t)?Tm:+t}var _M=mM,ba={};Object.defineProperty(ba,"__esModule",{value:!0});ba.addPassiveEventListener=function(e,n,i){var r=function(){var s=!1;try{var o=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,o)}catch{}return s}();e.addEventListener(n,i,r?{passive:!0}:!1)};ba.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i)};Object.defineProperty(Aa,"__esModule",{value:!0});var yM=_M,xM=MM(yM),SM=ba;function MM(t){return t&&t.__esModule?t:{default:t}}var EM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,xM.default)(e,n)},rt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=EM(function(r){rt.scrollHandler(e)},n);rt.scrollSpyContainers.push(e),(0,SM.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return rt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=rt.scrollSpyContainers[rt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(rt.currentPositionX(e),rt.currentPositionY(e))})},addStateHandler:function(e){rt.spySetState.push(e)},addSpyHandler:function(e,n){var i=rt.scrollSpyContainers[rt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(rt.currentPositionX(n),rt.currentPositionY(n))},updateStates:function(){rt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){rt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),rt.spySetState&&rt.spySetState.length&&rt.spySetState.indexOf(e)>-1&&rt.spySetState.splice(rt.spySetState.indexOf(e),1),document.removeEventListener("scroll",rt.scrollHandler)},update:function(){return rt.scrollSpyContainers.forEach(function(e){return rt.scrollHandler(e)})}};Aa.default=rt;var ro={},Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});var wM=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},TM=function(){return window.location.hash.replace(/^#/,"")},AM=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},bM=function(e){return getComputedStyle(e).position!=="static"},Hc=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},CM=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(bM(e)){if(n.offsetParent!==e){var r=function(d){return d===e||d===document},s=Hc(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(d){return d===document};return Hc(n,l).offsetTop-Hc(e,l).offsetTop};Ca.default={updateHash:wM,getHash:TM,filterElementInContainer:AM,scrollOffset:CM};var Wu={},zh={};Object.defineProperty(zh,"__esModule",{value:!0});zh.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Bh={};Object.defineProperty(Bh,"__esModule",{value:!0});var RM=ba,PM=["mousedown","mousewheel","touchmove","keydown"];Bh.default={subscribe:function(e){return typeof document<"u"&&PM.forEach(function(n){return(0,RM.addPassiveEventListener)(document,n,e)})}};var Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});var Sf={registered:{},scrollEvent:{register:function(e,n){Sf.registered[e]=n},remove:function(e){Sf.registered[e]=null}}};Ra.default=Sf;Object.defineProperty(Wu,"__esModule",{value:!0});var LM=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},DM=Ca;ju(DM);var IM=zh,bm=ju(IM),UM=Bh,NM=ju(UM),kM=Ra,ni=ju(kM);function ju(t){return t&&t.__esModule?t:{default:t}}var X0=function(e){return bm.default[e.smooth]||bm.default.defaultEasing},OM=function(e){return typeof e=="function"?e:function(){return e}},FM=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Mf=function(){return FM()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),q0=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Y0=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},K0=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},zM=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},BM=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},HM=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){ni.default.registered.end&&ni.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);Mf.call(window,s);return}ni.default.registered.end&&ni.default.registered.end(r.to,r.target,r.currentPosition)},Hh=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Pa=function(e,n,i,r){if(n.data=n.data||q0(),window.clearTimeout(n.data.delayTimeout),NM.default.subscribe(function(){n.data.cancel=!0}),Hh(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Y0(n):K0(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ni.default.registered.end&&ni.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=OM(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var s=X0(n),o=HM.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ni.default.registered.begin&&ni.default.registered.begin(n.data.to,n.data.target),Mf.call(window,o)},n.delay);return}ni.default.registered.begin&&ni.default.registered.begin(n.data.to,n.data.target),Mf.call(window,o)},$u=function(e){return e=LM({},e),e.data=e.data||q0(),e.absolute=!0,e},VM=function(e){Pa(0,$u(e))},GM=function(e,n){Pa(e,$u(n))},WM=function(e){e=$u(e),Hh(e),Pa(e.horizontal?zM(e):BM(e),e)},jM=function(e,n){n=$u(n),Hh(n);var i=n.horizontal?Y0(n):K0(n);Pa(e+i,n)};Wu.default={animateTopScroll:Pa,getAnimationType:X0,scrollToTop:VM,scrollToBottom:WM,scrollTo:GM,scrollMore:jM};Object.defineProperty(ro,"__esModule",{value:!0});var $M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},XM=Ca,qM=Vh(XM),YM=Wu,KM=Vh(YM),QM=Ra,rl=Vh(QM);function Vh(t){return t&&t.__esModule?t:{default:t}}var sl={},Cm=void 0;ro.default={unmount:function(){sl={}},register:function(e,n){sl[e]=n},unregister:function(e){delete sl[e]},get:function(e){return sl[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Cm=e},getActiveLink:function(){return Cm},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=$M({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=qM.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){rl.default.registered.begin&&rl.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,rl.default.registered.end&&rl.default.registered.end(e,i);return}KM.default.animateTopScroll(l,n,e,i)}};var Q0={exports:{}},ZM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JM=ZM,eE=JM;function Z0(){}function J0(){}J0.resetWarningCache=Z0;var tE=function(){function t(i,r,s,o,a,l){if(l!==eE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J0,resetWarningCache:Z0};return n.PropTypes=n,n};Q0.exports=tE();var Xu=Q0.exports,qu={};Object.defineProperty(qu,"__esModule",{value:!0});var nE=Ca,Vc=iE(nE);function iE(t){return t&&t.__esModule?t:{default:t}}var rE={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return Vc.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Vc.default.getHash()!==e&&Vc.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};qu.default=rE;Object.defineProperty(Ta,"__esModule",{value:!0});var ol=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sE=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),oE=Me,Rm=La(oE),aE=Aa,al=La(aE),lE=ro,uE=La(lE),cE=Xu,tt=La(cE),dE=qu,ki=La(dE);function La(t){return t&&t.__esModule?t:{default:t}}function fE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function pE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Pm={to:tt.default.string.isRequired,containerId:tt.default.string,container:tt.default.object,activeClass:tt.default.string,activeStyle:tt.default.object,spy:tt.default.bool,horizontal:tt.default.bool,smooth:tt.default.oneOfType([tt.default.bool,tt.default.string]),offset:tt.default.number,delay:tt.default.number,isDynamic:tt.default.bool,onClick:tt.default.func,duration:tt.default.oneOfType([tt.default.number,tt.default.func]),absolute:tt.default.bool,onSetActive:tt.default.func,onSetInactive:tt.default.func,ignoreCancelEvents:tt.default.bool,hashSpy:tt.default.bool,saveHashHistory:tt.default.bool,spyThrottle:tt.default.number};Ta.default=function(t,e){var n=e||uE.default,i=function(s){pE(o,s);function o(a){fE(this,o);var l=hE(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l}return sE(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();al.default.isMounted(l)||al.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(ki.default.isMounted()||ki.default.mount(n),ki.default.mapContainer(this.props.to,l)),al.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){al.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=ol({},this.props.style,this.props.activeStyle):u=ol({},this.props.style);var d=ol({},this.props);for(var f in Pm)d.hasOwnProperty(f)&&delete d[f];return d.className=l,d.style=u,d.onClick=this.handleClick,Rm.default.createElement(t,d)}}]),o}(Rm.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,ol({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!(ki.default.isMounted()&&!ki.default.isInitialized())){var d=o.props.horizontal,f=o.props.to,h=null,p=void 0,_=void 0;if(d){var y=0,g=0,c=0;if(u.getBoundingClientRect){var m=u.getBoundingClientRect();c=m.left}if(!h||o.props.isDynamic){if(h=n.get(f),!h)return;var v=h.getBoundingClientRect();y=v.left-c+a,g=y+v.width}var x=a-o.props.offset;p=x>=Math.floor(y)&&x<Math.floor(g),_=x<Math.floor(y)||x>=Math.floor(g)}else{var M=0,w=0,C=0;if(u.getBoundingClientRect){var L=u.getBoundingClientRect();C=L.top}if(!h||o.props.isDynamic){if(h=n.get(f),!h)return;var S=h.getBoundingClientRect();M=S.top-C+l,w=M+S.height}var A=l-o.props.offset;p=A>=Math.floor(M)&&A<Math.floor(w),_=A<Math.floor(M)||A>=Math.floor(w)}var Y=n.getActiveLink();if(_){if(f===Y&&n.setActiveLink(void 0),o.props.hashSpy&&ki.default.getHash()===f){var V=o.props.saveHashHistory,I=V===void 0?!1:V;ki.default.changeHash("",I)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(f,h))}if(p&&(Y!==f||o.state.active===!1)){n.setActiveLink(f);var F=o.props.saveHashHistory,j=F===void 0?!1:F;o.props.hashSpy&&ki.default.changeHash(f,j),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(f,h))}}}};return i.propTypes=Pm,i.defaultProps={offset:0},i};Object.defineProperty(Fh,"__esModule",{value:!0});var mE=Me,Lm=ey(mE),gE=Ta,vE=ey(gE);function ey(t){return t&&t.__esModule?t:{default:t}}function _E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dm(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function yE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var xE=function(t){yE(e,t);function e(){var n,i,r,s;_E(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=Dm(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return Lm.default.createElement("a",r.props,r.props.children)},i),Dm(r,s)}return e}(Lm.default.Component);Fh.default=(0,vE.default)(xE);var Gh={};Object.defineProperty(Gh,"__esModule",{value:!0});var SE=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ME=Me,Im=ty(ME),EE=Ta,wE=ty(EE);function ty(t){return t&&t.__esModule?t:{default:t}}function TE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function AE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function bE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var CE=function(t){bE(e,t);function e(){return TE(this,e),AE(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return SE(e,[{key:"render",value:function(){return Im.default.createElement("input",this.props,this.props.children)}}]),e}(Im.default.Component);Gh.default=(0,wE.default)(CE);var Wh={},Yu={};Object.defineProperty(Yu,"__esModule",{value:!0});var RE=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},PE=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),LE=Me,Um=Ku(LE),DE=Oh;Ku(DE);var IE=ro,Nm=Ku(IE),UE=Xu,km=Ku(UE);function Ku(t){return t&&t.__esModule?t:{default:t}}function NE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function OE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Yu.default=function(t){var e=function(n){OE(i,n);function i(r){NE(this,i);var s=kE(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return PE(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Nm.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){Nm.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Um.default.createElement(t,RE({},this.props,{parentBindings:this.childBindings}))}}]),i}(Um.default.Component);return e.propTypes={name:km.default.string,id:km.default.string},e};Object.defineProperty(Wh,"__esModule",{value:!0});var Om=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},FE=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),zE=Me,Fm=jh(zE),BE=Yu,HE=jh(BE),VE=Xu,zm=jh(VE);function jh(t){return t&&t.__esModule?t:{default:t}}function GE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function WE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function jE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ny=function(t){jE(e,t);function e(){return GE(this,e),WE(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return FE(e,[{key:"render",value:function(){var i=this,r=Om({},this.props);return r.parentBindings&&delete r.parentBindings,Fm.default.createElement("div",Om({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Fm.default.Component);ny.propTypes={name:zm.default.string,id:zm.default.string};Wh.default=(0,HE.default)(ny);var Gc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bm=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Hm(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vm(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Gm(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ll=Me,_r=Aa,Wc=ro,st=Xu,Oi=qu,Wm={to:st.string.isRequired,containerId:st.string,container:st.object,activeClass:st.string,spy:st.bool,smooth:st.oneOfType([st.bool,st.string]),offset:st.number,delay:st.number,isDynamic:st.bool,onClick:st.func,duration:st.oneOfType([st.number,st.func]),absolute:st.bool,onSetActive:st.func,onSetInactive:st.func,ignoreCancelEvents:st.bool,hashSpy:st.bool,spyThrottle:st.number},$E={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Wc,r=function(o){Gm(a,o);function a(l){Hm(this,a);var u=Vm(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return Bm(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();_r.isMounted(u)||_r.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Oi.isMounted()||Oi.mount(i),Oi.mapContainer(this.props.to,u)),this.props.spy&&_r.addStateHandler(this.stateHandler),_r.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){_r.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=Gc({},this.props);for(var f in Wm)d.hasOwnProperty(f)&&delete d[f];return d.className=u,d.onClick=this.handleClick,ll.createElement(e,d)}}]),a}(ll.Component),s=function(){var a=this;this.scrollTo=function(l,u){i.scrollTo(l,Gc({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Oi.isMounted()&&!Oi.isInitialized())){var d=a.props.to,f=null,h=0,p=0,_=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();_=y.top}if(!f||a.props.isDynamic){if(f=i.get(d),!f)return;var g=f.getBoundingClientRect();h=g.top-_+l,p=h+g.height}var c=l-a.props.offset,m=c>=Math.floor(h)&&c<Math.floor(p),v=c<Math.floor(h)||c>=Math.floor(p),x=i.getActiveLink();if(v)return d===x&&i.setActiveLink(void 0),a.props.hashSpy&&Oi.getHash()===d&&Oi.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),_r.updateStates();if(m&&x!==d)return i.setActiveLink(d),a.props.hashSpy&&Oi.changeHash(d),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d)),_r.updateStates()}}};return r.propTypes=Wm,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){Gm(r,i);function r(s){Hm(this,r);var o=Vm(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Bm(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Wc.unregister(this.props.name)}},{key:"registerElems",value:function(o){Wc.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return ll.createElement(e,Gc({},this.props,{parentBindings:this.childBindings}))}}]),r}(ll.Component);return n.propTypes={name:st.string,id:st.string},n}},XE=$E;Object.defineProperty(ct,"__esModule",{value:!0});ct.Helpers=ct.ScrollElement=ct.ScrollLink=ct.animateScroll=ct.scrollSpy=ct.Events=ct.scroller=gs=ct.Element=ct.Button=br=ct.Link=void 0;var qE=Fh,iy=fi(qE),YE=Gh,ry=fi(YE),KE=Wh,sy=fi(KE),QE=ro,oy=fi(QE),ZE=Ra,ay=fi(ZE),JE=Aa,ly=fi(JE),ew=Wu,uy=fi(ew),tw=Ta,cy=fi(tw),nw=Yu,dy=fi(nw),iw=XE,fy=fi(iw);function fi(t){return t&&t.__esModule?t:{default:t}}var br=ct.Link=iy.default;ct.Button=ry.default;var gs=ct.Element=sy.default;ct.scroller=oy.default;ct.Events=ay.default;ct.scrollSpy=ly.default;ct.animateScroll=uy.default;ct.ScrollLink=cy.default;ct.ScrollElement=dy.default;ct.Helpers=fy.default;ct.default={Link:iy.default,Button:ry.default,Element:sy.default,scroller:oy.default,Events:ay.default,scrollSpy:ly.default,animateScroll:uy.default,ScrollLink:cy.default,ScrollElement:dy.default,Helpers:fy.default};const Qu="/assets/github-mark-white-60d03f0f.png",rw="_name_itpv4_1",sw="_updown_itpv4_1",ow="_navbar_itpv4_41",aw="_left_itpv4_49",lw="_navbarContainer_itpv4_58",uw="_icons_itpv4_77",cw="_dropBtn_itpv4_83",dw="_githubLogo_itpv4_96",Zt={name:rw,updown:sw,"updown-out":"_updown-out_itpv4_1",navbar:ow,left:aw,navbarContainer:lw,icons:uw,dropBtn:cw,githubLogo:dw},fw="/assets/docketeerlogo2-2a4aeb80.png",hw=()=>{const t=function(){const e=document.querySelectorAll("li");for(let n=0;n<e.length;n++){const i=e[n];i.style.visibility==="visible"?i.style.visibility="hidden":i.style.visibility="visible"}};return $.jsx("nav",{className:Zt.navbar,children:$.jsxs("div",{className:Zt.navbarContainer,children:[$.jsxs("div",{className:Zt.left,children:[$.jsx("h1",{className:Zt.name,children:"Docketeer"}),$.jsx("img",{style:{paddingLeft:"8px"},width:"45px",height:"45px",src:fw,alt:"none"})]}),$.jsxs("ul",{children:[$.jsx("div",{onClick:()=>t(),children:$.jsx("svg",{className:Zt.dropBtn,xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"white",viewBox:"0 0 16 16",children:$.jsx("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),$.jsx("li",{className:Zt.link,children:$.jsx(br,{to:"home",smooth:!0,hashSpy:!0,spy:!0,duration:600,children:"Home"})}),$.jsx("li",{className:Zt.link,children:$.jsx(br,{to:"features",spy:!0,hashSpy:!0,smooth:!0,duration:600,children:"Features"})}),$.jsx("li",{className:Zt.link,children:$.jsx(br,{to:"demo",smooth:!0,hashSpy:!0,spy:!0,duration:600,children:"Demo"})}),$.jsx("li",{className:Zt.link,children:$.jsx(br,{to:"getstarted",smooth:!0,hashSpy:!0,spy:!0,duration:600,children:"Get Started"})}),$.jsx("li",{className:Zt.link,children:$.jsx(br,{to:"team",smooth:!0,hashSpy:!0,spy:!0,duration:600,children:"Team"})}),$.jsxs("div",{className:Zt.icons,children:[$.jsx("li",{className:Zt.link,children:$.jsx("a",{href:"https://github.com/open-source-labs/Docketeer-Extension",target:"_blank",children:$.jsx("img",{className:Zt.githubLogo,width:"23px",height:"23px",src:Qu,alt:"github_photo"})})}),$.jsx("li",{className:Zt.link,children:$.jsx("a",{href:"https://www.linkedin.com/company/docketeer/",target:"_blank",children:$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"white",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:$.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})})]})]})]})})},pw="_homeLoaded_154tq_1",mw="_left_154tq_11",gw="_description_154tq_14",vw="_right_154tq_17",_w="_homeDisplay_154tq_23",yw="_mainTitle_154tq_29",xw="_explore_154tq_44",Sw="_updown_154tq_1",yr={homeLoaded:pw,"zoom-in":"_zoom-in_154tq_1",left:mw,description:gw,right:vw,homeDisplay:_w,mainTitle:yw,explore:xw,updown:Sw},Mw="/assets/docketeerlogo-7bb47e0e.png",Ew=()=>{const[t,e]=Me.useState(!1),[n,i]=Me.useState(!1),r=Me.useRef(null);return Me.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting?(e(!0),i(!0),s.unobserve(a.target)):i(!1)},{threshold:.5}),o=r.current;return o&&s.observe(o),()=>{o&&s.unobserve(o)}},[]),$.jsxs("div",{className:t&&n?yr.homeLoaded:yr.homeDisplay,ref:r,children:[$.jsx("div",{className:yr.left,children:$.jsxs("div",{className:yr.description,children:[$.jsx("h1",{className:yr.mainTitle,children:"Introducing Docketeer XX"}),$.jsx("p",{children:"Docketeer is a user-friendly container management application with intuitive interfaces and visualization tools for Docker containers and Kubernetes clusters."}),$.jsx("br",{}),$.jsxs("div",{className:yr.explore,children:[$.jsx(br,{to:"features",smooth:!0,hashSpy:!0,spy:!0,duration:600,children:"Start Exploring"}),$.jsx("br",{})]})]})}),$.jsx("div",{className:yr.right,children:$.jsx("img",{width:"350px",height:"auto",src:Mw,alt:"docketeer_img"})})]})},ww="_featureCard_1sz8y_1",Tw="_updown_1sz8y_1",Aw="_featuresContainer_1sz8y_17",bw="_features_1sz8y_17",Cw="_featureCards_1sz8y_32",Rw="_article_1sz8y_56",Ps={featureCard:ww,updown:Tw,featuresContainer:Aw,features:bw,featureCards:Cw,article:Rw};var $h=Ia(),Re=t=>Da(t,$h),Xh=Ia();Re.write=t=>Da(t,Xh);var Zu=Ia();Re.onStart=t=>Da(t,Zu);var qh=Ia();Re.onFrame=t=>Da(t,qh);var Yh=Ia();Re.onFinish=t=>Da(t,Yh);var Fs=[];Re.setTimeout=(t,e)=>{let n=Re.now()+e,i=()=>{let s=Fs.findIndex(o=>o.cancel==i);~s&&Fs.splice(s,1),Qi-=~s?1:0},r={time:n,handler:t,cancel:i};return Fs.splice(hy(n),0,r),Qi+=1,py(),r};var hy=t=>~(~Fs.findIndex(e=>e.time>t)||~Fs.length);Re.cancel=t=>{Zu.delete(t),qh.delete(t),Yh.delete(t),$h.delete(t),Xh.delete(t)};Re.sync=t=>{Ef=!0,Re.batchedUpdates(t),Ef=!1};Re.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function i(...r){e=r,Re.onStart(n)}return i.handler=t,i.cancel=()=>{Zu.delete(n),e=null},i};var Kh=typeof window<"u"?window.requestAnimationFrame:()=>{};Re.use=t=>Kh=t;Re.now=typeof performance<"u"?()=>performance.now():Date.now;Re.batchedUpdates=t=>t();Re.catch=console.error;Re.frameLoop="always";Re.advance=()=>{Re.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):gy()};var Ki=-1,Qi=0,Ef=!1;function Da(t,e){Ef?(e.delete(t),t(0)):(e.add(t),py())}function py(){Ki<0&&(Ki=0,Re.frameLoop!=="demand"&&Kh(my))}function Pw(){Ki=-1}function my(){~Ki&&(Kh(my),Re.batchedUpdates(gy))}function gy(){let t=Ki;Ki=Re.now();let e=hy(Ki);if(e&&(vy(Fs.splice(0,e),n=>n.handler()),Qi-=e),!Qi){Pw();return}Zu.flush(),$h.flush(t?Math.min(64,Ki-t):16.667),qh.flush(),Xh.flush(),Yh.flush()}function Ia(){let t=new Set,e=t;return{add(n){Qi+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return Qi-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,Qi-=e.size,vy(e,i=>i(n)&&t.add(i)),Qi+=t.size,e=t)}}}function vy(t,e){t.forEach(n=>{try{e(n)}catch(i){Re.catch(i)}})}var Lw=Object.defineProperty,Dw=(t,e)=>{for(var n in e)Lw(t,n,{get:e[n],enumerable:!0})},Kn={};Dw(Kn,{assign:()=>Uw,colors:()=>or,createStringInterpolator:()=>Zh,skipAnimation:()=>yy,to:()=>_y,willAdvance:()=>Jh});function wf(){}var Iw=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),re={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Si(t,e){if(re.arr(t)){if(!re.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var Be=(t,e)=>t.forEach(e);function ci(t,e,n){if(re.arr(t)){for(let i=0;i<t.length;i++)e.call(n,t[i],`${i}`);return}for(let i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i)}var mn=t=>re.und(t)?[]:re.arr(t)?t:[t];function Vo(t,e){if(t.size){let n=Array.from(t);t.clear(),Be(n,e)}}var Ro=(t,...e)=>Vo(t,n=>n(...e)),Qh=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Zh,_y,or=null,yy=!1,Jh=wf,Uw=t=>{t.to&&(_y=t.to),t.now&&(Re.now=t.now),t.colors!==void 0&&(or=t.colors),t.skipAnimation!=null&&(yy=t.skipAnimation),t.createStringInterpolator&&(Zh=t.createStringInterpolator),t.requestAnimationFrame&&Re.use(t.requestAnimationFrame),t.batchedUpdates&&(Re.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Jh=t.willAdvance),t.frameLoop&&(Re.frameLoop=t.frameLoop)},Go=new Set,Cn=[],jc=[],Su=0,Ju={get idle(){return!Go.size&&!Cn.length},start(t){Su>t.priority?(Go.add(t),Re.onStart(Nw)):(xy(t),Re(Tf))},advance:Tf,sort(t){if(Su)Re.onFrame(()=>Ju.sort(t));else{let e=Cn.indexOf(t);~e&&(Cn.splice(e,1),Sy(t))}},clear(){Cn=[],Go.clear()}};function Nw(){Go.forEach(xy),Go.clear(),Re(Tf)}function xy(t){Cn.includes(t)||Sy(t)}function Sy(t){Cn.splice(kw(Cn,e=>e.priority>t.priority),0,t)}function Tf(t){let e=jc;for(let n=0;n<Cn.length;n++){let i=Cn[n];Su=i.priority,i.idle||(Jh(i),i.advance(t),i.idle||e.push(i))}return Su=0,jc=Cn,jc.length=0,Cn=e,Cn.length>0}function kw(t,e){let n=t.findIndex(e);return n<0?t.length:n}var Ow=(t,e,n)=>Math.min(Math.max(n,t),e),Fw={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},$n="[-+]?\\d*\\.?\\d+",Mu=$n+"%";function ec(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var zw=new RegExp("rgb"+ec($n,$n,$n)),Bw=new RegExp("rgba"+ec($n,$n,$n,$n)),Hw=new RegExp("hsl"+ec($n,Mu,Mu)),Vw=new RegExp("hsla"+ec($n,Mu,Mu,$n)),Gw=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ww=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,jw=/^#([0-9a-fA-F]{6})$/,$w=/^#([0-9a-fA-F]{8})$/;function Xw(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=jw.exec(t))?parseInt(e[1]+"ff",16)>>>0:or&&or[t]!==void 0?or[t]:(e=zw.exec(t))?(Jr(e[1])<<24|Jr(e[2])<<16|Jr(e[3])<<8|255)>>>0:(e=Bw.exec(t))?(Jr(e[1])<<24|Jr(e[2])<<16|Jr(e[3])<<8|Xm(e[4]))>>>0:(e=Gw.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=$w.exec(t))?parseInt(e[1],16)>>>0:(e=Ww.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=Hw.exec(t))?(jm($m(e[1]),ul(e[2]),ul(e[3]))|255)>>>0:(e=Vw.exec(t))?(jm($m(e[1]),ul(e[2]),ul(e[3]))|Xm(e[4]))>>>0:null}function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function jm(t,e,n){let i=n<.5?n*(1+e):n+e-n*e,r=2*n-i,s=$c(r,i,t+1/3),o=$c(r,i,t),a=$c(r,i,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Jr(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function $m(t){return(parseFloat(t)%360+360)%360/360}function Xm(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function ul(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function qm(t){let e=Xw(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,i=(e&16711680)>>>16,r=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${i}, ${r}, ${s})`}var ca=(t,e,n)=>{if(re.fun(t))return t;if(re.arr(t))return ca({range:t,output:e,extrapolate:n});if(re.str(t.output[0]))return Zh(t);let i=t,r=i.output,s=i.range||[0,1],o=i.extrapolateLeft||i.extrapolate||"extend",a=i.extrapolateRight||i.extrapolate||"extend",l=i.easing||(u=>u);return u=>{let d=Yw(u,s);return qw(u,s[d],s[d+1],r[d],r[d+1],l,o,a,i.map)}};function qw(t,e,n,i,r,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return i===r?i:e===n?t<=e?i:r:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),i===-1/0?u=-u:r===1/0?u=u+i:u=u*(r-i)+i,u)}function Yw(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var Kw=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let i=n*t,r=e==="end"?Math.floor(i):Math.ceil(i);return Ow(0,1,r/t)},Eu=1.70158,cl=Eu*1.525,Ym=Eu+1,Km=2*Math.PI/3,Qm=2*Math.PI/4.5,dl=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,Qw={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>Ym*t*t*t-Eu*t*t,easeOutBack:t=>1+Ym*Math.pow(t-1,3)+Eu*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((cl+1)*2*t-cl)/2:(Math.pow(2*t-2,2)*((cl+1)*(t*2-2)+cl)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Km),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Km)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Qm))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Qm)/2+1,easeInBounce:t=>1-dl(1-t),easeOutBounce:dl,easeInOutBounce:t=>t<.5?(1-dl(1-2*t))/2:(1+dl(2*t-1))/2,steps:Kw},Ks=Symbol.for("FluidValue.get"),jr=Symbol.for("FluidValue.observers"),Tn=t=>!!(t&&t[Ks]),Jt=t=>t&&t[Ks]?t[Ks]():t,Zm=t=>t[jr]||null;function Zw(t,e){t.eventObserved?t.eventObserved(e):t(e)}function da(t,e){let n=t[jr];n&&n.forEach(i=>{Zw(i,e)})}var N3,k3,Dv,My=(Dv=class{constructor(t){fe(this,N3);fe(this,k3);if(!t&&!(t=this.get))throw Error("Unknown getter");Jw(this,t)}},N3=Ks,k3=jr,Dv),Jw=(t,e)=>Ey(t,Ks,e);function so(t,e){if(t[Ks]){let n=t[jr];n||Ey(t,jr,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function fa(t,e){let n=t[jr];if(n&&n.has(e)){let i=n.size-1;i?n.delete(e):t[jr]=null,t.observerRemoved&&t.observerRemoved(i,e)}}var Ey=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),Xl=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,eT=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Jm=new RegExp(`(${Xl.source})(%|[a-z]+)`,"i"),tT=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,tc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,wy=t=>{let[e,n]=nT(t);if(!e||Qh())return t;let i=window.getComputedStyle(document.documentElement).getPropertyValue(e);return i?i.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&tc.test(n)?wy(n):n||t},nT=t=>{let e=tc.exec(t);if(!e)return[,];let[,n,i]=e;return[n,i]},Xc,iT=(t,e,n,i,r)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(i)}, ${r})`,Ty=t=>{Xc||(Xc=or?new RegExp(`(${Object.keys(or).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(r=>Jt(r).replace(tc,wy).replace(eT,qm).replace(Xc,qm)),n=e.map(r=>r.match(Xl).map(Number)),i=n[0].map((r,s)=>n.map(o=>{if(!(s in o))throw Error('The arity of each "output" value must be equal');return o[s]})).map(r=>ca({...t,output:r}));return r=>{var a;let s=!Jm.test(e[0])&&((a=e.find(l=>Jm.test(l)))==null?void 0:a.replace(Xl,"")),o=0;return e[0].replace(Xl,()=>`${i[o++](r)}${s||""}`).replace(tT,iT)}},ep="react-spring: ",Ay=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${ep}once requires a function parameter`);return(...i)=>{n||(e(...i),n=!0)}},rT=Ay(console.warn);function sT(){rT(`${ep}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var oT=Ay(console.warn);function aT(){oT(`${ep}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function nc(t){return re.str(t)&&(t[0]=="#"||/\d/.test(t)||!Qh()&&tc.test(t)||t in(or||{}))}var tp=Qh()?Me.useEffect:Me.useLayoutEffect,lT=()=>{let t=Me.useRef(!1);return tp(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function by(){let t=Me.useState()[1],e=lT();return()=>{e.current&&t(Math.random())}}function uT(t,e){let[n]=Me.useState(()=>({inputs:e,result:t()})),i=Me.useRef(),r=i.current,s=r;return s?e&&s.inputs&&cT(e,s.inputs)||(s={inputs:e,result:t()}):s=n,Me.useEffect(()=>{i.current=s,r==n&&(n.inputs=n.result=void 0)},[s]),s.result}function cT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var Cy=t=>Me.useEffect(t,dT),dT=[];function eg(t){let e=Me.useRef();return Me.useEffect(()=>{e.current=t}),e.current}var ha=Symbol.for("Animated:node"),fT=t=>!!t&&t[ha]===t,ti=t=>t&&t[ha],np=(t,e)=>Iw(t,ha,e),ic=t=>t&&t[ha]&&t[ha].getPayload(),Ry=class{constructor(){fe(this,"payload");np(this,this)}getPayload(){return this.payload||[]}},Ua=class extends Ry{constructor(e){super();fe(this,"done",!0);fe(this,"elapsedTime");fe(this,"lastPosition");fe(this,"lastVelocity");fe(this,"v0");fe(this,"durationProgress",0);this._value=e,re.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ua(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,n){return re.num(e)&&(this.lastPosition=e,n&&(e=Math.round(e/n)*n,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,re.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},pa=class extends Ua{constructor(e){super(0);fe(this,"_string",null);fe(this,"_toString");this._toString=ca({output:[e,e]})}static create(e){return new pa(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(re.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=ca({output:[this.getValue(),e]})),this._value=0,super.reset()}},wu={dependencies:null},rc=class extends Ry{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return ci(this.source,(n,i)=>{fT(n)?e[i]=n.getValue(t):Tn(n)?e[i]=Jt(n):t||(e[i]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&Be(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return ci(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){wu.dependencies&&Tn(t)&&wu.dependencies.add(t);let e=ic(t);e&&Be(e,n=>this.add(n))}},Py=class extends rc{constructor(e){super(e)}static create(e){return new Py(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((i,r)=>i.setValue(e[r])).some(Boolean):(super.setValue(e.map(hT)),!0)}};function hT(t){return(nc(t)?pa:Ua).create(t)}function Af(t){let e=ti(t);return e?e.constructor:re.arr(t)?Py:nc(t)?pa:Ua}var tg=(t,e)=>{let n=!re.fun(t)||t.prototype&&t.prototype.isReactComponent;return Me.forwardRef((i,r)=>{let s=Me.useRef(null),o=n&&Me.useCallback(_=>{s.current=gT(r,_)},[r]),[a,l]=mT(i,e),u=by(),d=()=>{let _=s.current;n&&!_||(_?e.applyAnimatedValues(_,a.getValue(!0)):!1)===!1&&u()},f=new pT(d,l),h=Me.useRef();tp(()=>(h.current=f,Be(l,_=>so(_,f)),()=>{h.current&&(Be(h.current.deps,_=>fa(_,h.current)),Re.cancel(h.current.update))})),Me.useEffect(d,[]),Cy(()=>()=>{let _=h.current;Be(_.deps,y=>fa(y,_))});let p=e.getComponentProps(a.getValue());return Me.createElement(t,{...p,ref:o})})},pT=class{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){t.type=="change"&&Re.write(this.update)}};function mT(t,e){let n=new Set;return wu.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new rc(t),wu.dependencies=null,[t,n]}function gT(t,e){return t&&(re.fun(t)?t(e):t.current=e),e}var ng=Symbol.for("AnimatedComponent"),vT=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=r=>new rc(r),getComponentProps:i=r=>r}={})=>{let r={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:i},s=o=>{let a=ig(o)||"Anonymous";return re.str(o)?o=s[o]||(s[o]=tg(o,r)):o=o[ng]||(o[ng]=tg(o,r)),o.displayName=`Animated(${a})`,o};return ci(t,(o,a)=>{re.arr(t)&&(a=ig(o)),s[a]=s(o)}),{animated:s}},ig=t=>re.str(t)?t:t&&re.str(t.displayName)?t.displayName:re.fun(t)&&t.name||null;function Cr(t,...e){return re.fun(t)?t(...e):t}var Wo=(t,e)=>t===!0||!!(e&&t&&(re.fun(t)?t(e):mn(t).includes(e))),Ly=(t,e)=>re.obj(t)?e&&t[e]:t,Dy=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,_T=t=>t,ip=(t,e=_T)=>{let n=yT;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let i={};for(let r of n){let s=e(t[r],r);re.und(s)||(i[r]=s)}return i},yT=["config","onProps","onStart","onChange","onPause","onResume","onRest"],xT={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ST(t){let e={},n=0;if(ci(t,(i,r)=>{xT[r]||(e[r]=i,n++)}),n)return e}function Iy(t){let e=ST(t);if(e){let n={to:e};return ci(t,(i,r)=>r in e||(n[r]=i)),n}return{...t}}function ma(t){return t=Jt(t),re.arr(t)?t.map(ma):nc(t)?Kn.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function MT(t){for(let e in t)return!0;return!1}function bf(t){return re.fun(t)||re.arr(t)&&re.obj(t[0])}function ET(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function wT(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var rp={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Cf={...rp.default,mass:1,damping:1,easing:Qw.linear,clamp:!1},TT=class{constructor(){fe(this,"tension");fe(this,"friction");fe(this,"frequency");fe(this,"damping");fe(this,"mass");fe(this,"velocity",0);fe(this,"restVelocity");fe(this,"precision");fe(this,"progress");fe(this,"duration");fe(this,"easing");fe(this,"clamp");fe(this,"bounce");fe(this,"decay");fe(this,"round");Object.assign(this,Cf)}};function AT(t,e,n){n&&(n={...n},rg(n,e),e={...n,...e}),rg(t,e),Object.assign(t,e);for(let o in Cf)t[o]==null&&(t[o]=Cf[o]);let{frequency:i,damping:r}=t,{mass:s}=t;return re.und(i)||(i<.01&&(i=.01),r<0&&(r=0),t.tension=Math.pow(2*Math.PI/i,2)*s,t.friction=4*Math.PI*r*s/i),t}function rg(t,e){if(!re.und(e.decay))t.duration=void 0;else{let n=!re.und(e.tension)||!re.und(e.friction);(n||!re.und(e.frequency)||!re.und(e.damping)||!re.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var sg=[],bT=class{constructor(){fe(this,"changed",!1);fe(this,"values",sg);fe(this,"toValues",null);fe(this,"fromValues",sg);fe(this,"to");fe(this,"from");fe(this,"config",new TT);fe(this,"immediate",!1)}};function Uy(t,{key:e,props:n,defaultProps:i,state:r,actions:s}){return new Promise((o,a)=>{let l,u,d=Wo(n.cancel??(i==null?void 0:i.cancel),e);if(d)p();else{re.und(n.pause)||(r.paused=Wo(n.pause,e));let _=i==null?void 0:i.pause;_!==!0&&(_=r.paused||Wo(_,e)),l=Cr(n.delay||0,e),_?(r.resumeQueue.add(h),s.pause()):(s.resume(),h())}function f(){r.resumeQueue.add(h),r.timeouts.delete(u),u.cancel(),l=u.time-Re.now()}function h(){l>0&&!Kn.skipAnimation?(r.delayed=!0,u=Re.setTimeout(p,l),r.pauseQueue.add(f),r.timeouts.add(u)):p()}function p(){r.delayed&&(r.delayed=!1),r.pauseQueue.delete(f),r.timeouts.delete(u),t<=(r.cancelId||0)&&(d=!0);try{s.start({...n,callId:t,cancel:d},o)}catch(_){a(_)}}})}var sp=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?zs(t.get()):e.every(n=>n.noop)?Ny(t.get()):Vn(t.get(),e.every(n=>n.finished)),Ny=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Vn=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),zs=t=>({value:t,cancelled:!0,finished:!1});function ky(t,e,n,i){let{callId:r,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=r,n.asyncTo=t;let u=ip(e,(g,c)=>c==="onRest"?void 0:g),d,f,h=new Promise((g,c)=>(d=g,f=c)),p=g=>{let c=r<=(n.cancelId||0)&&zs(i)||r!==n.asyncId&&Vn(i,!1);if(c)throw g.result=c,f(g),g},_=(g,c)=>{let m=new og,v=new ag;return(async()=>{if(Kn.skipAnimation)throw ga(n),v.result=Vn(i,!1),f(v),v;p(m);let x=re.obj(g)?{...g}:{...c,to:g};x.parentId=r,ci(u,(w,C)=>{re.und(x[C])&&(x[C]=w)});let M=await i.start(x);return p(m),n.paused&&await new Promise(w=>{n.resumeQueue.add(w)}),M})()},y;if(Kn.skipAnimation)return ga(n),Vn(i,!1);try{let g;re.arr(t)?g=(async c=>{for(let m of c)await _(m)})(t):g=Promise.resolve(t(_,i.stop.bind(i))),await Promise.all([g.then(d),h]),y=Vn(i.get(),!0,!1)}catch(g){if(g instanceof og)y=g.result;else if(g instanceof ag)y=g.result;else throw g}finally{r==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return re.fun(o)&&Re.batchedUpdates(()=>{o(y,i,i.item)}),y})()}function ga(t,e){Vo(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var og=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");fe(this,"result")}},ag=class extends Error{constructor(){super("SkipAnimationSignal");fe(this,"result")}},Rf=t=>t instanceof op,CT=1,op=class extends My{constructor(){super(...arguments);fe(this,"id",CT++);fe(this,"_priority",0)}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=ti(this);return e&&e.getValue()}to(...e){return Kn.to(this,e)}interpolate(...e){return sT(),Kn.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,n=!1){da(this,{type:"change",parent:this,value:e,idle:n})}_onPriorityChange(e){this.idle||Ju.sort(this),da(this,{type:"priority",parent:this,priority:e})}},$r=Symbol.for("SpringPhase"),Oy=1,Pf=2,Lf=4,qc=t=>(t[$r]&Oy)>0,Fi=t=>(t[$r]&Pf)>0,_o=t=>(t[$r]&Lf)>0,lg=(t,e)=>e?t[$r]|=Pf|Oy:t[$r]&=~Pf,ug=(t,e)=>e?t[$r]|=Lf:t[$r]&=~Lf,RT=class extends op{constructor(e,n){super();fe(this,"key");fe(this,"animation",new bT);fe(this,"queue");fe(this,"defaultProps",{});fe(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});fe(this,"_pendingCalls",new Set);fe(this,"_lastCallId",0);fe(this,"_lastToId",0);fe(this,"_memoizedDuration",0);if(!re.und(e)||!re.und(n)){let i=re.obj(e)?{...e}:{...n,from:e};re.und(i.default)&&(i.default=!0),this.start(i)}}get idle(){return!(Fi(this)||this._state.asyncTo)||_o(this)}get goal(){return Jt(this.animation.to)}get velocity(){let e=ti(this);return e instanceof Ua?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return qc(this)}get isAnimating(){return Fi(this)}get isPaused(){return _o(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,i=!1,r=this.animation,{toValues:s}=r,{config:o}=r,a=ic(r.to);!a&&Tn(r.to)&&(s=mn(Jt(r.to))),r.values.forEach((d,f)=>{if(d.done)return;let h=d.constructor==pa?1:a?a[f].lastPosition:s[f],p=r.immediate,_=h;if(!p){if(_=d.lastPosition,o.tension<=0){d.done=!0;return}let y=d.elapsedTime+=e,g=r.fromValues[f],c=d.v0!=null?d.v0:d.v0=re.arr(o.velocity)?o.velocity[f]:o.velocity,m,v=o.precision||(g==h?.005:Math.min(1,Math.abs(h-g)*.001));if(re.und(o.duration))if(o.decay){let x=o.decay===!0?.998:o.decay,M=Math.exp(-(1-x)*y);_=g+c/(1-x)*(1-M),p=Math.abs(d.lastPosition-_)<=v,m=c*M}else{m=d.lastVelocity==null?c:d.lastVelocity;let x=o.restVelocity||v/10,M=o.clamp?0:o.bounce,w=!re.und(M),C=g==h?d.v0>0:g<h,L,S=!1,A=1,Y=Math.ceil(e/A);for(let V=0;V<Y&&(L=Math.abs(m)>x,!(!L&&(p=Math.abs(h-_)<=v,p)));++V){w&&(S=_==h||_>h==C,S&&(m=-m*M,_=h));let I=-o.tension*1e-6*(_-h),F=-o.friction*.001*m,j=(I+F)/o.mass;m=m+j*A,_=_+m*A}}else{let x=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,d.durationProgress>0&&(d.elapsedTime=o.duration*d.durationProgress,y=d.elapsedTime+=e)),x=(o.progress||0)+y/this._memoizedDuration,x=x>1?1:x<0?0:x,d.durationProgress=x),_=g+o.easing(x)*(h-g),m=(_-d.lastPosition)/e,p=x==1}d.lastVelocity=m,Number.isNaN(_)&&(console.warn("Got NaN while animating:",this),p=!0)}a&&!a[f].done&&(p=!1),p?d.done=!0:n=!1,d.setValue(_,o.round)&&(i=!0)});let l=ti(this),u=l.getValue();if(n){let d=Jt(r.to);(u!==d||i)&&!o.decay?(l.setValue(d),this._onChange(d)):i&&o.decay&&this._onChange(u),this._stop()}else i&&this._onChange(u)}set(e){return Re.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Fi(this)){let{to:e,config:n}=this.animation;Re.batchedUpdates(()=>{this._onStart(),n.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,n){let i;return re.und(e)?(i=this.queue||[],this.queue=[]):i=[re.obj(e)?e:{...n,to:e}],Promise.all(i.map(r=>this._update(r))).then(r=>sp(this,r))}stop(e){let{to:n}=this.animation;return this._focus(this.get()),ga(this._state,e&&this._lastCallId),Re.batchedUpdates(()=>this._stop(n,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){let n=this.key||"",{to:i,from:r}=e;i=re.obj(i)?i[n]:i,(i==null||bf(i))&&(i=void 0),r=re.obj(r)?r[n]:r,r==null&&(r=void 0);let s={to:i,from:r};return qc(this)||(e.reverse&&([i,r]=[r,i]),r=Jt(r),re.und(r)?ti(this)||this._set(i):this._set(r)),s}_update({...e},n){let{key:i,defaultProps:r}=this;e.default&&Object.assign(r,ip(e,(a,l)=>/^on/.test(l)?Ly(a,i):a)),dg(this,e,"onProps"),xo(this,"onProps",e,this);let s=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return Uy(++this._lastCallId,{key:i,props:e,defaultProps:r,state:o,actions:{pause:()=>{_o(this)||(ug(this,!0),Ro(o.pauseQueue),xo(this,"onPause",Vn(this,yo(this,this.animation.to)),this))},resume:()=>{_o(this)&&(ug(this,!1),Fi(this)&&this._resume(),Ro(o.resumeQueue),xo(this,"onResume",Vn(this,yo(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(a=>{if(e.loop&&a.finished&&!(n&&a.noop)){let l=Fy(e);if(l)return this._update(l,!0)}return a})}_merge(e,n,i){if(n.cancel)return this.stop(!0),i(zs(this));let r=!re.und(e.to),s=!re.und(e.from);if(r||s)if(n.callId>this._lastToId)this._lastToId=n.callId;else return i(zs(this));let{key:o,defaultProps:a,animation:l}=this,{to:u,from:d}=l,{to:f=u,from:h=d}=e;s&&!r&&(!n.default||re.und(f))&&(f=h),n.reverse&&([f,h]=[h,f]);let p=!Si(h,d);p&&(l.from=h),h=Jt(h);let _=!Si(f,u);_&&this._focus(f);let y=bf(n.to),{config:g}=l,{decay:c,velocity:m}=g;(r||s)&&(g.velocity=0),n.config&&!y&&AT(g,Cr(n.config,o),n.config!==a.config?Cr(a.config,o):void 0);let v=ti(this);if(!v||re.und(f))return i(Vn(this,!0));let x=re.und(n.reset)?s&&!n.default:!re.und(h)&&Wo(n.reset,o),M=x?h:this.get(),w=ma(f),C=re.num(w)||re.arr(w)||nc(w),L=!y&&(!C||Wo(a.immediate||n.immediate,o));if(_){let V=Af(f);if(V!==v.constructor)if(L)v=this._set(w);else throw Error(`Cannot animate between ${v.constructor.name} and ${V.name}, as the "to" prop suggests`)}let S=v.constructor,A=Tn(f),Y=!1;if(!A){let V=x||!qc(this)&&p;(_||V)&&(Y=Si(ma(M),w),A=!Y),(!Si(l.immediate,L)&&!L||!Si(g.decay,c)||!Si(g.velocity,m))&&(A=!0)}if(Y&&Fi(this)&&(l.changed&&!x?A=!0:A||this._stop(u)),!y&&((A||Tn(u))&&(l.values=v.getPayload(),l.toValues=Tn(f)?null:S==pa?[1]:mn(w)),l.immediate!=L&&(l.immediate=L,!L&&!x&&this._set(u)),A)){let{onRest:V}=l;Be(LT,F=>dg(this,n,F));let I=Vn(this,yo(this,u));Ro(this._pendingCalls,I),this._pendingCalls.add(i),l.changed&&Re.batchedUpdates(()=>{var F;l.changed=!x,V==null||V(I,this),x?Cr(a.onRest,I):(F=l.onStart)==null||F.call(l,I,this)})}x&&this._set(M),y?i(ky(n.to,n,this._state,this)):A?this._start():Fi(this)&&!_?this._pendingCalls.add(i):i(Ny(M))}_focus(e){let n=this.animation;e!==n.to&&(Zm(this)&&this._detach(),n.to=e,Zm(this)&&this._attach())}_attach(){let e=0,{to:n}=this.animation;Tn(n)&&(so(n,this),Rf(n)&&(e=n.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;Tn(e)&&fa(e,this)}_set(e,n=!0){let i=Jt(e);if(!re.und(i)){let r=ti(this);if(!r||!Si(i,r.getValue())){let s=Af(i);!r||r.constructor!=s?np(this,s.create(i)):r.setValue(i),r&&Re.batchedUpdates(()=>{this._onChange(i,n)})}}return ti(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,xo(this,"onStart",Vn(this,yo(this,e.to)),this))}_onChange(e,n){n||(this._onStart(),Cr(this.animation.onChange,e,this)),Cr(this.defaultProps.onChange,e,this),super._onChange(e,n)}_start(){let e=this.animation;ti(this).reset(Jt(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),Fi(this)||(lg(this,!0),_o(this)||this._resume())}_resume(){Kn.skipAnimation?this.finish():Ju.start(this)}_stop(e,n){if(Fi(this)){lg(this,!1);let i=this.animation;Be(i.values,s=>{s.done=!0}),i.toValues&&(i.onChange=i.onPause=i.onResume=void 0),da(this,{type:"idle",parent:this});let r=n?zs(this.get()):Vn(this.get(),yo(this,e??i.to));Ro(this._pendingCalls,r),i.changed&&(i.changed=!1,xo(this,"onRest",r,this))}}};function yo(t,e){let n=ma(e),i=ma(t.get());return Si(i,n)}function Fy(t,e=t.loop,n=t.to){let i=Cr(e);if(i){let r=i!==!0&&Iy(i),s=(r||t).reverse,o=!r||r.reset;return va({...t,loop:e,default:!1,pause:void 0,to:!s||bf(n)?n:void 0,from:o?t.from:void 0,reset:o,...r})}}function va(t){let{to:e,from:n}=t=Iy(t),i=new Set;return re.obj(e)&&cg(e,i),re.obj(n)&&cg(n,i),t.keys=i.size?Array.from(i):null,t}function PT(t){let e=va(t);return re.und(e.default)&&(e.default=ip(e)),e}function cg(t,e){ci(t,(n,i)=>n!=null&&e.add(i))}var LT=["onStart","onRest","onChange","onPause","onResume"];function dg(t,e,n){t.animation[n]=e[n]!==Dy(e,n)?Ly(e[n],t.key):void 0}function xo(t,e,...n){var i,r,s,o;(r=(i=t.animation)[e])==null||r.call(i,...n),(o=(s=t.defaultProps)[e])==null||o.call(s,...n)}var DT=["onStart","onChange","onRest"],IT=1,UT=class{constructor(t,e){fe(this,"id",IT++);fe(this,"springs",{});fe(this,"queue",[]);fe(this,"ref");fe(this,"_flush");fe(this,"_initialProps");fe(this,"_lastAsyncId",0);fe(this,"_active",new Set);fe(this,"_changed",new Set);fe(this,"_started",!1);fe(this,"_item");fe(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});fe(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){let t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(let e in t){let n=t[e];re.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(va(t)),this}start(t){let{queue:e}=this;return t?e=mn(t).map(va):this.queue=[],this._flush?this._flush(this,e):(Gy(this,e),Df(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){let n=this.springs;Be(mn(e),i=>n[i].stop(!!t))}else ga(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(re.und(t))this.start({pause:!0});else{let e=this.springs;Be(mn(t),n=>e[n].pause())}return this}resume(t){if(re.und(t))this.start({pause:!1});else{let e=this.springs;Be(mn(t),n=>e[n].resume())}return this}each(t){ci(this.springs,t)}_onFrame(){let{onStart:t,onChange:e,onRest:n}=this._events,i=this._active.size>0,r=this._changed.size>0;(i&&!this._started||r&&!this._started)&&(this._started=!0,Vo(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));let s=!i&&this._started,o=r||s&&n.size?this.get():null;r&&e.size&&Vo(e,([a,l])=>{l.value=o,a(l,this,this._item)}),s&&(this._started=!1,Vo(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;Re.onFrame(this._onFrame)}};function Df(t,e){return Promise.all(e.map(n=>zy(t,n))).then(n=>sp(t,n))}async function zy(t,e,n){let{keys:i,to:r,from:s,loop:o,onRest:a,onResolve:l}=e,u=re.obj(e.default)&&e.default;o&&(e.loop=!1),r===!1&&(e.to=null),s===!1&&(e.from=null);let d=re.arr(r)||re.fun(r)?r:void 0;d?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):Be(DT,y=>{let g=e[y];if(re.fun(g)){let c=t._events[y];e[y]=({finished:m,cancelled:v})=>{let x=c.get(g);x?(m||(x.finished=!1),v&&(x.cancelled=!0)):c.set(g,{value:null,finished:m||!1,cancelled:v||!1})},u&&(u[y]=e[y])}});let f=t._state;e.pause===!f.paused?(f.paused=e.pause,Ro(e.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(e.pause=!0);let h=(i||Object.keys(t.springs)).map(y=>t.springs[y].start(e)),p=e.cancel===!0||Dy(e,"cancel")===!0;(d||p&&f.asyncId)&&h.push(Uy(++t._lastAsyncId,{props:e,state:f,actions:{pause:wf,resume:wf,start(y,g){p?(ga(f,t._lastAsyncId),g(zs(t))):(y.onRest=a,g(ky(d,y,f,t)))}}})),f.paused&&await new Promise(y=>{f.resumeQueue.add(y)});let _=sp(t,await Promise.all(h));if(o&&_.finished&&!(n&&_.noop)){let y=Fy(e,o,r);if(y)return Gy(t,[y]),zy(t,y,!0)}return l&&Re.batchedUpdates(()=>l(_,t,t.item)),_}function fg(t,e){let n={...t.springs};return e&&Be(mn(e),i=>{re.und(i.keys)&&(i=va(i)),re.obj(i.to)||(i={...i,to:void 0}),Vy(n,i,r=>Hy(r))}),By(t,n),n}function By(t,e){ci(e,(n,i)=>{t.springs[i]||(t.springs[i]=n,so(n,t))})}function Hy(t,e){let n=new RT;return n.key=t,e&&so(n,e),n}function Vy(t,e,n){e.keys&&Be(e.keys,i=>{(t[i]||(t[i]=n(i)))._prepareNode(e)})}function Gy(t,e){Be(e,n=>{Vy(t.springs,n,i=>Hy(i,t))})}var sc=({children:t,...e})=>{let n=Me.useContext(Tu),i=e.pause||!!n.pause,r=e.immediate||!!n.immediate;e=uT(()=>({pause:i,immediate:r}),[i,r]);let{Provider:s}=Tu;return Me.createElement(s,{value:e},t)},Tu=NT(sc,{});sc.Provider=Tu.Provider;sc.Consumer=Tu.Consumer;function NT(t,e){return Object.assign(t,Me.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var kT=()=>{let t=[],e=function(i){aT();let r=[];return Be(t,(s,o)=>{if(re.und(i))r.push(s.start());else{let a=n(i,s,o);a&&r.push(s.start(a))}}),r};e.current=t,e.add=function(i){t.includes(i)||t.push(i)},e.delete=function(i){let r=t.indexOf(i);~r&&t.splice(r,1)},e.pause=function(){return Be(t,i=>i.pause(...arguments)),this},e.resume=function(){return Be(t,i=>i.resume(...arguments)),this},e.set=function(i){Be(t,(r,s)=>{let o=re.fun(i)?i(s,r):i;o&&r.set(o)})},e.start=function(i){let r=[];return Be(t,(s,o)=>{if(re.und(i))r.push(s.start());else{let a=this._getProps(i,s,o);a&&r.push(s.start(a))}}),r},e.stop=function(){return Be(t,i=>i.stop(...arguments)),this},e.update=function(i){return Be(t,(r,s)=>r.update(this._getProps(i,r,s))),this};let n=function(i,r,s){return re.fun(i)?i(s,r):i};return e._getProps=n,e};function Wy(t,e,n){let i=re.fun(e)&&e;i&&!n&&(n=[]);let r=Me.useMemo(()=>i||arguments.length==3?kT():void 0,[]),s=Me.useRef(0),o=by(),a=Me.useMemo(()=>({ctrls:[],queue:[],flush(c,m){let v=fg(c,m);return s.current>0&&!a.queue.length&&!Object.keys(v).some(x=>!c.springs[x])?Df(c,m):new Promise(x=>{By(c,v),a.queue.push(()=>{x(Df(c,m))}),o()})}}),[]),l=Me.useRef([...a.ctrls]),u=[],d=eg(t)||0;Me.useMemo(()=>{Be(l.current.slice(t,d),c=>{ET(c,r),c.stop(!0)}),l.current.length=t,f(d,t)},[t]),Me.useMemo(()=>{f(0,Math.min(d,t))},n);function f(c,m){for(let v=c;v<m;v++){let x=l.current[v]||(l.current[v]=new UT(null,a.flush)),M=i?i(v,x):e[v];M&&(u[v]=PT(M))}}let h=l.current.map((c,m)=>fg(c,u[m])),p=Me.useContext(sc),_=eg(p),y=p!==_&&MT(p);tp(()=>{s.current++,a.ctrls=l.current;let{queue:c}=a;c.length&&(a.queue=[],Be(c,m=>m())),Be(l.current,(m,v)=>{r==null||r.add(m),y&&m.start({default:p});let x=u[v];x&&(wT(m,x.ref),m.ref?m.queue.push(x):m.start(x))})}),Cy(()=>()=>{Be(a.ctrls,c=>c.stop(!0))});let g=h.map(c=>({...c}));return r?[g,r]:g}var OT=class extends op{constructor(e,n){super();fe(this,"key");fe(this,"idle",!0);fe(this,"calc");fe(this,"_active",new Set);this.source=e,this.calc=ca(...n);let i=this._get(),r=Af(i);np(this,r.create(i))}advance(e){let n=this._get(),i=this.get();Si(n,i)||(ti(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&hg(this._active)&&Yc(this)}_get(){let e=re.arr(this.source)?this.source.map(Jt):mn(Jt(this.source));return this.calc(...e)}_start(){this.idle&&!hg(this._active)&&(this.idle=!1,Be(ic(this),e=>{e.done=!1}),Kn.skipAnimation?(Re.batchedUpdates(()=>this.advance()),Yc(this)):Ju.start(this))}_attach(){let e=1;Be(mn(this.source),n=>{Tn(n)&&so(n,this),Rf(n)&&(n.idle||this._active.add(n),e=Math.max(e,n.priority+1))}),this.priority=e,this._start()}_detach(){Be(mn(this.source),e=>{Tn(e)&&fa(e,this)}),this._active.clear(),Yc(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=mn(this.source).reduce((n,i)=>Math.max(n,(Rf(i)?i.priority:0)+1),0))}};function FT(t){return t.idle!==!1}function hg(t){return!t.size||Array.from(t).every(FT)}function Yc(t){t.idle||(t.idle=!0,Be(ic(t),e=>{e.done=!0}),da(t,{type:"idle",parent:t}))}Kn.assign({createStringInterpolator:Ty,to:(t,e)=>new OT(t,e)});var jy=/^--/;function zT(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!jy.test(t)&&!(jo.hasOwnProperty(t)&&jo[t])?e+"px":(""+e).trim()}var pg={};function BT(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:i,children:r,scrollTop:s,scrollLeft:o,viewBox:a,...l}=e,u=Object.values(l),d=Object.keys(l).map(f=>n||t.hasAttribute(f)?f:pg[f]||(pg[f]=f.replace(/([A-Z])/g,h=>"-"+h.toLowerCase())));r!==void 0&&(t.textContent=r);for(let f in i)if(i.hasOwnProperty(f)){let h=zT(f,i[f]);jy.test(f)?t.style.setProperty(f,h):t.style[f]=h}d.forEach((f,h)=>{t.setAttribute(f,u[h])}),s!==void 0&&(t.scrollTop=s),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var jo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HT=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),VT=["Webkit","Ms","Moz","O"];jo=Object.keys(jo).reduce((t,e)=>(VT.forEach(n=>t[HT(n,e)]=t[e]),t),jo);var GT=/^(matrix|translate|scale|rotate|skew)/,WT=/^(translate)/,jT=/^(rotate|skew)/,Kc=(t,e)=>re.num(t)&&t!==0?t+e:t,ql=(t,e)=>re.arr(t)?t.every(n=>ql(n,e)):re.num(t)?t===e:parseFloat(t)===e,$T=class extends rc{constructor({x:t,y:e,z:n,...i}){let r=[],s=[];(t||e||n)&&(r.push([t||0,e||0,n||0]),s.push(o=>[`translate3d(${o.map(a=>Kc(a,"px")).join(",")})`,ql(o,0)])),ci(i,(o,a)=>{if(a==="transform")r.push([o||""]),s.push(l=>[l,l===""]);else if(GT.test(a)){if(delete i[a],re.und(o))return;let l=WT.test(a)?"px":jT.test(a)?"deg":"";r.push(mn(o)),s.push(a==="rotate3d"?([u,d,f,h])=>[`rotate3d(${u},${d},${f},${Kc(h,l)})`,ql(h,0)]:u=>[`${a}(${u.map(d=>Kc(d,l)).join(",")})`,ql(u,a.startsWith("scale")?1:0)])}}),r.length&&(i.transform=new XT(r,s)),super(i)}},XT=class extends My{constructor(e,n){super();fe(this,"_value",null);this.inputs=e,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let e="",n=!0;return Be(this.inputs,(i,r)=>{let s=Jt(i[0]),[o,a]=this.transforms[r](re.arr(s)?s:i.map(Jt));e+=" "+o,n=n&&a}),n?"none":e}observerAdded(e){e==1&&Be(this.inputs,n=>Be(n,i=>Tn(i)&&so(i,this)))}observerRemoved(e){e==0&&Be(this.inputs,n=>Be(n,i=>Tn(i)&&fa(i,this)))}eventObserved(e){e.type=="change"&&(this._value=null),da(this,e)}},qT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Kn.assign({batchedUpdates:Oh.unstable_batchedUpdates,createStringInterpolator:Ty,colors:Fw});var YT=vT(qT,{applyAnimatedValues:BT,createAnimatedStyle:t=>new $T(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),$y=YT.animated;const KT=({animation:t,header:e,img:n,info:i})=>$.jsxs($y.div,{className:Ps.featureCard,style:t,"data-testid":"feature-card",children:[$.jsx("h3",{children:e}),$.jsx("img",{className:Ps.img,src:n,alt:"img"}),$.jsx("p",{children:i})]}),QT="/assets/containers-d1c64555.svg",ZT="/assets/network-b55bf10b.svg",JT="/assets/images-5b337207.svg",e2="/assets/kubernetes-16f31520.svg",t2="/assets/logs-58d40e0e.svg",n2="/assets/metrics-bc8ae15e.svg",i2="/assets/prune-01b6841e.svg",r2="/assets/configurations-3f850ada.svg",s2="/assets/snapshot-f1debd3c.svg",If=new Map,fl=new WeakMap;let mg=0,o2;function a2(t){return t?(fl.has(t)||(mg+=1,fl.set(t,mg.toString())),fl.get(t)):"0"}function l2(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?a2(t.root):t[e]}`).toString()}function u2(t){let e=l2(t),n=If.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&r.some(d=>a.intersectionRatio>=d);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=i.get(a.target))==null||l.forEach(d=>{d(u,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},If.set(e,n)}return n}function c2(t,e,n={},i=o2){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=u2(n);let a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),If.delete(r))}}function Xy({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var d;const[f,h]=Me.useState(null),p=Me.useRef(),[_,y]=Me.useState({inView:!!a,entry:void 0});p.current=u,Me.useEffect(()=>{if(o||!f)return;let v;return v=c2(f,(x,M)=>{y({inView:x,entry:M}),p.current&&p.current(x,M),M.isIntersecting&&s&&v&&(v(),v=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{v&&v()}},[Array.isArray(t)?t.toString():t,f,r,i,s,o,n,l,e]);const g=(d=_.entry)==null?void 0:d.target,c=Me.useRef();!f&&g&&!s&&!o&&c.current!==g&&(c.current=g,y({inView:!!a,entry:void 0}));const m=[h,_.inView,_.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const d2=()=>{const[t,e]=Xy({threshold:.1}),n=Wy(9,[0,150,300,450,600,750,900,1050,1200].map(r=>({opacity:e?1:0,transform:e?"translateY(0)":"translateY(50px)",config:rp.slow,delay:e?r:0}))),i=[{header:"Container Management",img:QT,info:"Create, start, stop, and delete Docker containers all in one place"},{header:"Network Management",img:ZT,info:"Network support and intuitive visualization for seamless container networking"},{header:"Image Management",img:JT,info:"Easily view, run, and remove Docker images and explore vulnerabilities for each image"},{header:"Container Metrics",img:n2,info:"Access and save metrics related to containers in a dashboard with rich visualizations"},{header:"Snapshots",img:s2,info:"View and compare previously captured container metrics"},{header:"Cluster Metrics",img:e2,info:"Access metrics related to Kubernetes clusters in a dashboard with rich visualizations"},{header:"Detailed Process Logs",img:t2,info:"View, search and download process logs related to containers"},{header:"System Prune",img:i2,info:"Clear up unused images or networks to ensure optimized performance"},{header:"Prometheus Configurations",img:r2,info:"Dynamically configure Prometheus targets to scrape data"}];return $.jsx("div",{className:Ps.featuresContainer,ref:t,children:$.jsxs("div",{className:Ps.features,children:[$.jsx("h1",{children:"Features"}),$.jsx("a",{className:Ps.article,href:"https://medium.com/@ellissong/docketeer-xix-new-features-in-uncharted-seas-3baf72099488",target:"_blank",rel:"noopener noreferrer",children:"Read about us on Medium!"}),$.jsx("div",{className:Ps.featureCards,children:i.map((r,s)=>$.jsx(KT,{header:r.header,img:r.img,info:r.info,animation:n[s]},s))})]})})},f2="_demoDisplayLoaded_1jv4b_1",h2="_demoDisplay_1jv4b_1",p2="_demoContainer_1jv4b_20",m2="_descriptions_1jv4b_27",g2="_mainContainer_1jv4b_31",v2="_toggleContainer_1jv4b_39",_2="_action_1jv4b_48",y2="_toggle_1jv4b_39",x2="_gifContainer_1jv4b_75",S2="_gifs_1jv4b_79",M2="_gifMobile_1jv4b_118",E2="_gifMobileButtonsBox_1jv4b_124",w2="_gifMobileButtons_1jv4b_124",T2="_mobileDesc_1jv4b_143",Ht={demoDisplayLoaded:f2,"zoom-in":"_zoom-in_1jv4b_1",demoDisplay:h2,demoContainer:p2,descriptions:m2,mainContainer:g2,toggleContainer:v2,action:_2,toggle:y2,gifContainer:x2,gifs:S2,gifMobile:M2,gifMobileButtonsBox:E2,gifMobileButtons:w2,mobileDesc:T2},A2=({setCurrentGif:t,currentGif:e})=>{const n=["Start, stop, or remove your containers at the click of a button.","View, run, or remove images with ease.","Visualize your package vulnerability information.","Save Scan, Rescan, Compare your scans with a click of a button.","Monitor your container metrics.","View Kubernetes cluster metrics for nodes and kubelets.","Dynamically alter Prometheus targets to customize displayed metrics","Many more options to monitor your metrics."],i=s=>{t(s)},r=["Containers","Images","Data Visualization","Time-Series","Metrics","Cluster Metrics","Configurations","Others"];return $.jsxs("div",{className:Ht.mainContainer,children:[$.jsx("p",{className:Ht.action,children:"Click to see a demo of each feature!"}),$.jsx("div",{className:Ht.toggleContainer,children:r.map((s,o)=>$.jsx("div",{className:Ht.toggle,onClick:()=>i(o),children:s}))}),$.jsx("p",{className:Ht.descriptions,children:n[e]})]})},b2="/assets/ContainersFilters_v20-94349884.gif",C2="/assets/Images_v20-872975c0.gif",qy="/assets/imageTab2-new-304b53c5.gif",Yy="/assets/imageTab3-new-ed8ddb2f.gif",R2="/assets/ContainersMetrics_v20-989b5d65.gif",P2="/assets/KubernetesClusterHealthMetrics_v20-872f6232.gif",L2="/assets/Navigation_v20-ad78db64.gif",D2="/assets/Configurations_v20-784c280b.png",I2=({currentGif:t})=>{const e=[b2,C2,qy,Yy,R2,P2,D2,L2];return $.jsx("div",{className:Ht.gifContainer,children:$.jsx("img",{className:Ht.gifs,src:e[t]})})},U2="/assets/containerTab-new-781fd8ff.gif",N2="/assets/imageTab1-new-a634555c.gif",k2="/assets/metricTab-new-5454a47c.gif",O2="/assets/k8Tab-new-ba8e0909.gif",F2="/assets/hamburgerTab-new-68fbb938.gif",z2="/assets/configuration-bc698ce5.gif",B2=()=>{const t=[{name:"Containers",url:U2},{name:"Images",url:N2},{name:"Data Visualization",url:qy},{name:"Time-Series",url:Yy},{name:"Metrics",url:k2},{name:"Cluster Metrics",url:O2},{name:"Configuration",url:z2},{name:"Others",url:F2}],e=["Start, stop, or remove your containers at the click of a button.","View, run, or remove images with ease.","Visualize your package vulnerability information.","Save Scan, Rescan, Compare your scans with a click of a button.","Monitor your container metrics.","View Kubernetes cluster metrics for nodes and kubelets.","Dynamically alter Prometheus targets to customize displayed metrics","Many more options to monitor your metrics."],[n,i]=Me.useState(0),r=s=>{if(s==="right"){if(n===5)return i(0);{const o=n+1;return i(o)}}else{if(n===0)return i(5);{const o=n-1;return i(o)}}};return $.jsxs("div",{children:[$.jsx("img",{className:Ht.gifMobile,src:t[n].url}),$.jsx("div",{children:t[n].name}),$.jsxs("div",{className:Ht.gifMobileButtonsBox,children:[$.jsx("div",{className:Ht.gifMobileButtons,onClick:()=>r(""),children:"←"}),$.jsx("div",{className:Ht.gifMobileButtons,onClick:()=>r("right"),children:"→"})]}),$.jsx("p",{className:Ht.mobileDesc,children:e[n]})]})},H2=()=>{const[t,e]=Me.useState(0),[n,i]=Me.useState(!1),[r,s]=Me.useState(!1),[o,a]=Me.useState(window.innerWidth<=700),l=Me.useRef(null);return Me.useLayoutEffect(()=>{const u=new IntersectionObserver(([h])=>{h.isIntersecting?(i(!0),s(!0),u.unobserve(h.target)):s(!1)},{threshold:.5}),d=l.current;d&&u.observe(d);const f=()=>{a(window.innerWidth<=700)};return window.addEventListener("resize",f),()=>{d&&u.unobserve(d),window.removeEventListener("resize",f)}},[]),$.jsxs("div",{className:n&&r?Ht.demoDisplayLoaded:Ht.demoDisplay,ref:l,children:[$.jsx("h1",{className:Ht.title,children:"See Docketeer in Action"}),o?$.jsx(B2,{}):$.jsxs("div",{className:Ht.demoContainer,children:[$.jsx(A2,{setCurrentGif:e,currentGif:t}),$.jsx(I2,{currentGif:t})]})]})},V2="_getStartedDisplay_r6mqm_1",G2="_githubLink_r6mqm_10",W2="_buttonContainer_r6mqm_19",j2="_githubButton_r6mqm_24",$2="_logo_r6mqm_36",zi={getStartedDisplay:V2,githubLink:G2,buttonContainer:W2,githubButton:j2,logo:$2},X2="/assets/04-symbol_light-blue-docker-logo-9e2466fe.png",q2=()=>$.jsxs("div",{className:zi.getStartedDisplay,children:[$.jsx("h1",{children:"Get Started"}),$.jsxs("p",{children:["Getting started with Docketeer is easy!",$.jsx("br",{}),'Navigate to our GitHub page and follow our detailed instructions under "Installation".',$.jsx("br",{}),"Or find us on the Docker Desktop Extensions Marketplace and simply click install."]}),$.jsxs("div",{className:zi.buttonContainer,children:[$.jsx("div",{className:zi.githubButton,children:$.jsxs("a",{className:zi.githubLink,href:"https://github.com/open-source-labs/Docketeer-Extension",target:"blank",children:["GitHub ",$.jsx("img",{className:zi.logo,src:Qu})]})}),$.jsx("div",{className:zi.githubButton,children:$.jsxs("a",{className:zi.githubLink,href:"https://hub.docker.com/extensions/docketeerxiv/docketeer-extension",target:"blank",children:["Dockerhub ",$.jsx("img",{className:zi.logo,src:X2})]})})]})]}),Y2="_teamContainer_ozn64_1",K2="_othersContainer_ozn64_11",Q2="_homeContainer_ozn64_19",Z2="_home_ozn64_19",J2="_left_ozn64_27",eA="_description_ozn64_30",tA="_right_ozn64_33",nA="_osp4Container_ozn64_41",iA="_github_ozn64_52",rA="_docketeerXVIIContainer_ozn64_57",sA="_osp4box_ozn64_75",oA="_person_ozn64_80",aA="_osp4Pic_ozn64_84",si={teamContainer:Y2,othersContainer:K2,homeContainer:Q2,home:Z2,left:J2,description:eA,right:tA,osp4Container:nA,github:iA,docketeerXVIIContainer:rA,osp4box:sA,person:oA,osp4Pic:aA},lA=({img:t,name:e,linkedin:n,github:i,animation:r})=>$.jsxs($y.div,{className:si.osp4box,style:r,children:[$.jsx("img",{className:si.osp4Pic,src:t}),$.jsx("p",{children:e}),$.jsx("a",{href:i,target:"blank",children:$.jsx("img",{className:si.github,src:Qu})}),$.jsx("a",{href:n,target:"blank",children:$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"white",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:$.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]}),uA=({name:t,linkedin:e,github:n})=>$.jsx("div",{children:$.jsxs("p",{className:si.person,children:[t,$.jsxs("span",{className:si.links,children:[$.jsx("a",{href:n,children:$.jsx("img",{className:si.github,src:Qu})})," ",$.jsx("a",{href:e,children:$.jsx("svg",{className:si.linkedin,xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"white",viewBox:"0 0 16 16",children:$.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})]})}),cA=[{name:"Chelsea Lau",linkedin:"https://www.linkedin.com/in/chelsea-wklau",github:"https://github.com/chelsea01688"},{name:"Giovanni Cortes Morales",linkedin:"https://www.linkedin.com/in/giovanni-cortes/",github:"https://github.com/GiovanniCortes19"},{name:"Jade Chan",linkedin:"https://www.linkedin.com/in/jade-melissa-chan/",github:"https://github.com/JadeChan03"},{name:"Jessica Grant",linkedin:"https://www.linkedin.com/in/jessicargrant/",github:"https://github.com/jessicarobyn10"},{name:"Robin Zhang",linkedin:"https://www.linkedin.com/in/yuchen-robin-zhang",github:"https://github.com/yuchen-z"},{name:"Gabriela Pleitez Gomez",linkedin:"https://www.linkedin.com/in/gabriela-pleitez-gomez",github:"https://github.com/gabyspg"},{name:"Alicia Zhang",linkedin:"https://www.linkedin.com/in/alicia-zhang-a1aaa2138/",github:"https://github.com/AliciaZ429"},{name:"Peter Chung",linkedin:"https://www.linkedin.com/in/peterminkichung/",github:"https://github.com/peterchung"},{name:"Wei Wang",linkedin:"https://www.linkedin.com/in/wei-cheng-wang-2a92b4120/",github:"https://github.com/weiwang0305"},{name:"Jonathan Gray",linkedin:"https://www.linkedin.com/in/jonathan-lee-gray",github:"https://github.com/thejohnny5"},{name:"Cristian Morales",linkedin:"https://www.linkedin.com/in/cris-morales",github:"https://github.com/Cris-Morales"},{name:"Josh Nelson",linkedin:"https://www.linkedin.com/in/josh-nelson-7aba19284/",github:"https://github.com/JoshNelson98"},{name:"Christian Lyon",linkedin:"https://www.linkedin.com/in/christiandoescoding",github:"https://github.com/christianDoesCoding"},{name:"Jacob Melendez",linkedin:"https://www.linkedin.com/in/jacob-melendez/",github:"https://github.com/JacobAMelendez"},{name:"Tristan Keester",linkedin:"https://www.linkedin.com/in/tristan-keester/",github:"https://github.com/Ronagens"},{name:"Tristan Krause",linkedin:"https://www.linkedin.com/in/krausetristan",github:"https://github.com/tristanyukio"},{name:"Grant Schussler",linkedin:"https://www.linkedin.com/in/grant-schussler",github:"https://github.com/gschussler"},{name:"Adrian Kormier",linkedin:"https://www.linkedin.com/in/adrian-kormier/",github:"https://github.com/adriankormier"},{name:"Garrett Allen",linkedin:"https://www.linkedin.com/in/garrettallen0",github:"https://github.com/garrettallen0"},{name:"Michael Liu",linkedin:"https://www.linkedin.com/in/michael-kwon-liu/",github:"https://github.com/KwonJiyongGD"},{name:"Shuai Shao",linkedin:"https://www.linkedin.com/in/shuai-sh/",github:"https://github.com/shao-shuai"},{name:"John Jong Oun Kim",linkedin:"https://www.linkedin.com/in/john-jong-oun-kim-01b4a3246/",github:"https://github.com/jayoo0621"},{name:"Anna Tran",linkedin:"https://www.linkedin.com/in/annatran10/",github:"https://github.com/annamullike"},{name:"Emily Johl",linkedin:"https://www.linkedin.com/in/emily-johl-5093ab137/",github:"https://github.com/emilyjohl"},{name:"Jaeni Lee",linkedin:"https://www.linkedin.com/in/jaenilee/",github:"https://github.com/jaenixlee"},{name:"Joseph Salgado",linkedin:"https://www.linkedin.com/in/joseph-salgado-76410620b/",github:"https://github.com/Jaysalgado"},{name:"Michael Angelo Garcia",linkedin:"https://www.linkedin.com/in/michael-angelo-garcia-053848265/",github:"https://github.com/MichaelAngelo13"},{name:"Benjamin Huang",linkedin:"https://www.linkedin.com/in/bh4120/",github:"https://github.com/byhuang4100"},{name:"Mason Royal",linkedin:"https://www.linkedin.com/in/masonroyal/",github:"https://github.com/masonroyal"},{name:"Saad Hamdani",linkedin:"https://www.linkedin.com/in/saadh123/",github:"https://github.com/saadh123"},{name:"Edward Kenny",linkedin:"https://www.linkedin.com/in/edward-kenny-8949b8136/",github:"https://github.com/EdwardKenny"},{name:"Alex Schmidt",linkedin:"https://www.linkedin.com/in/alex-schmidt1/",github:"https://github.com/redafroninja"},{name:"Dillon Patel",linkedin:"https://www.linkedin.com/in/d-hp",github:"https://github.com/d-hp"},{name:"Kennan Budnik",linkedin:"https://www.linkedin.com/in/kobudnik/",github:"https://github.com/kobudnik"},{name:"Garima Bhatia",linkedin:"https://www.linkedin.com/in/GarimaB06/",github:"https://github.com/garimab06"},{name:"Nathan Cho",linkedin:"https://www.linkedin.com/in/nathanycho/",github:"https://github.com/nathanycho"},{name:"Eshaan Joshi",linkedin:"https://www.linkedin.com/in/eshaanjoshi/",github:"https://github.com/eshaan32"},{name:"Jonathan Wong",linkedin:"https://www.linkedin.com/in/jon-wong-00/",github:"https://github.com/WongJonathann"},{name:"Drew Manley",linkedin:"https://www.linkedin.com/in/andrewmanley13/",github:"https://github.com/DrewManley"},{name:"Tiffany Chau",linkedin:"https://www.linkedin.com/in/tiffanynchau/",github:"https://github.com/tiffanynchau/"},{name:"Cedar Cooper",linkedin:"https://github.com/CedarCooper",github:"https://www.linkedin.com/in/cedar-cooper/"},{name:"Sarah Moosa",linkedin:"https://www.linkedin.com/in/sarah-moosa-4b05721b6/",github:"https://github.com/Sbethm?tab=repositories"},{name:"Jack Yuan",linkedin:"https://www.linkedin.com/in/jackyuan1/",github:"https://github.com/jackyuan1"},{name:"Abigail Gerig",linkedin:"https://www.linkedin.com/in/abigail-gerig/",github:"https://github.com/4estgirl"},{name:"Matt Dias",linkedin:"https://www.linkedin.com/in/matthew-j-dias/",github:"https://github.com/Schmang13"},{name:"Trine Medina",linkedin:"https://www.linkedin.com/in/trinemedina/",github:"https://github.com/TrineMedina"},{name:"Ruli Warner-Rosen",linkedin:"https://www.linkedin.com/in/ruliwr/",github:"https://github.com/Ruliwr"},{name:"Christian Looff",linkedin:"https://www.linkedin.com/in/christian-looff/",github:"https://github.com/cmlooff"},{name:"Christina Son",linkedin:"http://www.linkedin.com/in/christinason17",github:"https://github.com/cson17"},{name:"Austin Andrews",linkedin:"http://www.linkedin.com/in/austinandrews17",github:"https://github.com/austinandrews"},{name:"Fernando Luna",linkedin:"http://www.linkedin.com/in/fernando-luna",github:"https://github.com/lunaf-github"},{name:"Eric Lay",linkedin:"http://www.linkedin.com/in/ericlay14",github:"https://github.com/ericlay14"},{name:"Dylan Feldman",linkedin:"http://www.linkedin.com/in/dylan-feldman",github:"https://github.com/dfeldman24"},{name:"Eric Lee",linkedin:"https://www.linkedin.com/in/errc-lee/",github:"https://github.com/errc-lee"},{name:"Kenneth Hui",linkedin:"https://www.linkedin.com/in/kenneth-hui/",github:"https://github.com/kennethhui121"},{name:"Kristine Aguda",linkedin:"https://www.linkedin.com/in/kristine-aguda/",github:"https://github.com/kaguda"},{name:"Tre Hultzen",linkedin:"https://www.linkedin.com/in/tre-hultzen/",github:"https://github.com/THultz"},{name:"Emma Czech",linkedin:"https://www.linkedin.com/in/emczech",github:"https://github.com/emczech"},{name:"May Li",linkedin:"https://www.linkedin.com/in/maysli",github:"https://github.com/msscloudy"},{name:"Ricardo Cortez",linkedin:"https://www.linkedin.com/in/rcortez88/",github:"https://github.com/rcortez88"},{name:"Brent Speight",linkedin:"https://www.linkedin.com/in/brent-speight/",github:"https://github.com/brentspeight"},{name:"Lorenzo Guevara",linkedin:"https://www.linkedin.com/in/lorenzoguevara/",github:"https://github.com/lo-guevara"},{name:"Catherine Larcheveque",linkedin:"https://www.linkedin.com/in/clarcheveque/",github:"https://github.com/clarcheveque"},{name:"Charles Ryu",linkedin:"https://www.linkedin.com/in/charcharryu/",github:"https://github.com/charcharryu"},{name:"Griffin Silver",linkedin:"https://www.linkedin.com/in/griffin-silver-1ab675140/",github:"https://github.com/griffinrogersilver"},{name:"Alex Smith",linkedin:"http://www.linkedin.com/in/ajsmith925",github:"https://github.com/ajsmith925"},{name:"Anton Abdukhamidov",linkedin:"https://www.linkedin.com/in/anton-abdukhamidov-1163733b/",github:"https://github.com/abdukhamidov-anton"},{name:"Chai Lee",linkedin:"https://www.linkedin.com/in/chai-lee-5a064649/",github:"https://github.com/seachai"},{name:"Matt Jones",linkedin:"https://www.linkedin.com/in/mc-jones/",github:"https://github.com/mc-jones"},{name:"Richie Edwards",linkedin:"https://www.linkedin.com/in/richieedwards/",github:"https://github.com/richie-edwards"},{name:"Mitesh Patel",linkedin:"https://www.linkedin.com/in/mitesh-patel-8702728b/",github:"https://github.com/mit1812"},{name:"Minchan Jun",linkedin:"https://www.linkedin.com/in/minchan-jun/",github:"https://github.com/MinchanJun"},{name:"Kadir Gundogdu",linkedin:"https://www.linkedin.com/in/kadirgund/",github:"https://github.com/kadirgund"},{name:"Dan Lin",linkedin:"https://www.linkedin.com/in/danlin91/",github:"https://github.com/DanLin91"},{name:"Wilmer Sinchi",linkedin:"https://www.linkedin.com/in/wilmer-sinchi-143b7681/",github:"https://github.com/sinchiw"}],dA="/assets/Alex-e813b666.jpg",fA="/assets/Andy-9ccf3700.jpg",hA="/assets/Nick-ecdf98d0.jpg",pA="/assets/Quan-641fb4e4.jpg",mA="/assets/Chris-5b7e4b5a.jpg",gA="/assets/Aiden-f66b172e.jpg",vA="/assets/Dylan-21e48d3c.png",_A="/assets/Joseph-92375131.jpg",yA="/assets/Ellis-3a9ec9b6.jpg",xA="/assets/Arthur-618b8f33.jpg",SA="/assets/Rachel-f4204164.png",MA="/assets/ChrisS-19389cd1.jpg",EA="/assets/Nika-bf9875d8.jpg",wA=[{img:xA,name:"Arthur Jin",linkedin:"https://www.linkedin.com/in/arthur-jin/",github:"https://github.com/ArthurJZL"},{img:MA,name:"Christopher Schiro",linkedin:"https://www.linkedin.com/in/chris-schiro/",github:"https://github.com/cschiro"},{img:EA,name:"Nika Mamaladze",linkedin:"https://www.linkedin.com/in/nika-mamaladze-b06b53326/",github:"https://github.com/nikamamaladze92"},{img:SA,name:"Rachel Baek",linkedin:"https://www.linkedin.com/in/rachel-baek/",github:"https://github.com/rsbaek"},{img:mA,name:"Chris Rodriguez",linkedin:"https://www.linkedin.com/in/chris-kossky-rodriguez/",github:"https://github.com/chrisr0892"},{img:gA,name:"Aiden Carere",linkedin:"https://www.linkedin.com/in/aiden-carere",github:"https://github.com/AidenCarere"},{img:_A,name:"Joseph Ahn",linkedin:"https://www.linkedin.com/in/dohyun-joseph-ahn/",github:"https://github.com/joeahn95"},{img:vA,name:"Dylan Sterling",linkedin:"https://www.linkedin.com/in/dylan-sterling-2b7256180/",github:"https://github.com/dsterling7"},{img:yA,name:"Ellis Song",linkedin:"http://www.linkedin.com/in/ellissong",github:"https://github.com/elsong86"},{img:dA,name:"Alexander David",linkedin:"https://www.linkedin.com/in/alexander-joseph-david/",github:"https://github.com/alexjosephdavid"},{img:hA,name:"Nick Kravchuk",linkedin:"https://www.linkedin.com/in/nickkravchuk/",github:"https://github.com/kravchuknick"},{img:pA,name:"Quan Nguyen",linkedin:"https://www.linkedin.com/in/quan-nguyen27/",github:"https://github.com/ZinWR"},{img:fA,name:"Andy White",linkedin:"https://www.linkedin.com/in/andywhite5/",github:"https://github.com/ComfyClicks"}],TA=()=>{const[t,e]=Xy({threshold:.2}),n=Wy(8,[0,150,300,450,600].map(i=>({opacity:e?1:0,transform:e?"translateY(0)":"translateY(50px)",config:rp.slow,delay:e?i:0})));return $.jsxs("div",{className:si.teamContainer,children:[$.jsx("h2",{children:"Meet The Docketeer Team!"}),$.jsx("div",{className:si.docketeerXVIIContainer,ref:t,children:wA.map((i,r)=>$.jsx(lA,{img:i.img,name:i.name,linkedin:i.linkedin,github:i.github,animation:n[r]},r))}),$.jsx("div",{className:si.othersContainer,children:cA.map((i,r)=>$.jsx(uA,{name:i.name,linkedin:i.linkedin,github:i.github},r))})]})},AA=()=>$.jsxs("div",{className:"pageContainer",children:[$.jsx(hw,{}),$.jsx(gs,{name:"home",children:$.jsx(Ew,{})}),$.jsx(gs,{name:"features",children:$.jsx(d2,{})}),$.jsx(gs,{name:"demo",children:$.jsx("div",{children:$.jsx(H2,{})})}),$.jsx(gs,{name:"getstarted",children:$.jsx(q2,{})}),$.jsx(gs,{name:"team",children:$.jsx(TA,{})})]});function bA(){return $.jsx("div",{children:$.jsx(AA,{})})}bd.createRoot(document.getElementById("root")).render($.jsx(jx.StrictMode,{children:$.jsx(bA,{})}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="152",CA=0,gg=1,RA=2,Ky=1,PA=2,yi=3,cr=0,an=1,Ei=2,ar=0,Bs=1,vg=2,_g=3,yg=4,LA=5,vs=100,DA=101,IA=102,xg=103,Sg=104,UA=200,NA=201,kA=202,OA=203,Qy=204,Zy=205,FA=206,zA=207,BA=208,HA=209,VA=210,GA=0,WA=1,jA=2,Uf=3,$A=4,XA=5,qA=6,YA=7,Jy=0,KA=1,QA=2,Ci=0,ZA=1,JA=2,eb=3,tb=4,nb=5,ex=300,Qs=301,Zs=302,Nf=303,kf=304,oc=306,Of=1e3,Wn=1001,Ff=1002,Xt=1003,Mg=1004,Qc=1005,An=1006,ib=1007,_a=1008,Xr=1009,rb=1010,sb=1011,tx=1012,ob=1013,Ir=1014,Ur=1015,ya=1016,ab=1017,lb=1018,Hs=1020,ub=1021,jn=1023,cb=1024,db=1025,Or=1026,Js=1027,fb=1028,hb=1029,pb=1030,mb=1031,gb=1033,Zc=33776,Jc=33777,ed=33778,td=33779,Eg=35840,wg=35841,Tg=35842,Ag=35843,vb=36196,bg=37492,Cg=37496,Rg=37808,Pg=37809,Lg=37810,Dg=37811,Ig=37812,Ug=37813,Ng=37814,kg=37815,Og=37816,Fg=37817,zg=37818,Bg=37819,Hg=37820,Vg=37821,nd=36492,_b=36283,Gg=36284,Wg=36285,jg=36286,nx=3e3,Fr=3001,yb=3200,xb=3201,Sb=0,Mb=1,zr="",Le="srgb",di="srgb-linear",ix="display-p3",id=7680,Eb=519,$g=35044,Xg="300 es",zf=1035;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Bf=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function wb(t,e){return(t%e+e)%e}function sd(t,e,n){return(1-n)*t+n*e}function qg(t){return(t&t-1)===0&&t!==0}function Tb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hl(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],y=r[0],g=r[3],c=r[6],m=r[1],v=r[4],x=r[7],M=r[2],w=r[5],C=r[8];return s[0]=o*y+a*m+l*M,s[3]=o*g+a*v+l*w,s[6]=o*c+a*x+l*C,s[1]=u*y+d*m+f*M,s[4]=u*g+d*v+f*w,s[7]=u*c+d*x+f*C,s[2]=h*y+p*m+_*M,s[5]=h*g+p*v+_*w,s[8]=h*c+p*x+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*s,p=u*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(od.makeScale(e,n)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,n){return this.premultiply(od.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ze;function rx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Au(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Yg={};function $o(t){t in Yg||(Yg[t]=!0,console.warn(t))}function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ad(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ab=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),bb=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cb(t){return t.convertSRGBToLinear().applyMatrix3(bb)}function Rb(t){return t.applyMatrix3(Ab).convertLinearToSRGB()}const Pb={[di]:t=>t,[Le]:t=>t.convertSRGBToLinear(),[ix]:Cb},Lb={[di]:t=>t,[Le]:t=>t.convertLinearToSRGB(),[ix]:Rb},Nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return di},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Pb[e],r=Lb[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let es;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=Au("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Au("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ox{constructor(e=null){this.isSource=!0,this.uuid=Na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ld(r[o].image)):s.push(ld(r[o]))}else s=ld(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Db=0;class ln extends oo{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Wn,r=Wn,s=An,o=_a,a=jn,l=Xr,u=ln.DEFAULT_ANISOTROPY,d=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Na(),this.name="",this.source=new ox(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:($o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Fr?Le:zr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Fr:nx}set encoding(e){$o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?Le:zr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ex;ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],g=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,M=(c+1)/2,w=(d+h)/4,C=(f+y)/4,L=(_+g)/4;return v>x&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=C/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=L/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=L/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-y)/m,this.z=(h-d)/m,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qr extends oo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&($o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?Le:zr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ox(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ax extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ib extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||u!==p||d!==_){let g=1-a;const c=l*h+u*p+d*_+f*y,m=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,c*m);g=Math.sin(g*w)/M,a=Math.sin(a*w)/M}const x=a*m;if(l=l*g+h*x,u=u*g+p*x,d=d*g+_*x,f=f*g+y*x,g===1-a){const M=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=M,u*=M,d*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*p-u*h,e[n+1]=l*_+d*h+u*f-a*p,e[n+2]=u*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"YZX":this._x=h*d*f+u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f-h*p*_;break;case"XZY":this._x=h*d*f-u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,d=l*i+a*n-s*r,f=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+d*-a-f*-o,this.y=d*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new k,Kg=new ka;class Oa{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else r.boundingBox===null&&r.computeBoundingBox(),ts.copy(r.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),pl.subVectors(this.max,So),ns.subVectors(e.a,So),is.subVectors(e.b,So),rs.subVectors(e.c,So),Bi.subVectors(is,ns),Hi.subVectors(rs,is),xr.subVectors(ns,rs);let n=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-xr.z,xr.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,xr.z,0,-xr.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-xr.y,xr.x,0];return!cd(n,ns,is,rs,pl)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,ns,is,rs,pl))?!1:(ml.crossVectors(Bi,Hi),n=[ml.x,ml.y,ml.z],cd(n,ns,is,rs,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new k,new k,new k,new k,new k,new k,new k,new k],pi=new k,ts=new Oa,ns=new k,is=new k,rs=new k,Bi=new k,Hi=new k,xr=new k,So=new k,pl=new k,ml=new k,Sr=new k;function cd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),u=n.dot(Sr),d=i.dot(Sr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Ub=new Oa,Mo=new k,dd=new k;class lp{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(dd)),this.expandByPoint(Mo.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new k,fd=new k,gl=new k,Vi=new k,hd=new k,vl=new k,pd=new k;class Nb{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fd.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(fd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(gl),a=Vi.dot(this.direction),l=-Vi.dot(gl),u=Vi.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fd).addScaledVector(gl,h),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){hd.subVectors(n,e),vl.subVectors(i,e),pd.crossVectors(hd,vl);let o=this.direction.dot(pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(vl.crossVectors(Vi,vl));if(l<0)return null;const u=a*this.direction.dot(hd.cross(Vi));if(u<0||l+u>o)return null;const d=-a*Vi.dot(pd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,d,f,h,p,_,y,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=_,c[11]=y,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=u*d,y=u*f;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=u*d,y=u*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+y,n[5]=o*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kb,e,Ob)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Gi.crossVectors(i,dn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Gi.crossVectors(i,dn)),Gi.normalize(),_l.crossVectors(dn,Gi),r[0]=Gi.x,r[4]=_l.x,r[8]=dn.x,r[1]=Gi.y,r[5]=_l.y,r[9]=dn.y,r[2]=Gi.z,r[6]=_l.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],y=i[6],g=i[10],c=i[14],m=i[3],v=i[7],x=i[11],M=i[15],w=r[0],C=r[4],L=r[8],S=r[12],A=r[1],Y=r[5],V=r[9],I=r[13],F=r[2],j=r[6],J=r[10],Q=r[14],D=r[3],z=r[7],O=r[11],ue=r[15];return s[0]=o*w+a*A+l*F+u*D,s[4]=o*C+a*Y+l*j+u*z,s[8]=o*L+a*V+l*J+u*O,s[12]=o*S+a*I+l*Q+u*ue,s[1]=d*w+f*A+h*F+p*D,s[5]=d*C+f*Y+h*j+p*z,s[9]=d*L+f*V+h*J+p*O,s[13]=d*S+f*I+h*Q+p*ue,s[2]=_*w+y*A+g*F+c*D,s[6]=_*C+y*Y+g*j+c*z,s[10]=_*L+y*V+g*J+c*O,s[14]=_*S+y*I+g*Q+c*ue,s[3]=m*w+v*A+x*F+M*D,s[7]=m*C+v*Y+x*j+M*z,s[11]=m*L+v*V+x*J+M*O,s[15]=m*S+v*I+x*Q+M*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],g=e[11],c=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*d-s*l*d)+g*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],g=e[14],c=e[15],m=f*g*u-y*h*u+y*l*p-a*g*p-f*l*c+a*h*c,v=_*h*u-d*g*u-_*l*p+o*g*p+d*l*c-o*h*c,x=d*y*u-_*f*u+_*a*p-o*y*p-d*a*c+o*f*c,M=_*f*l-d*y*l-_*a*h+o*y*h+d*a*g-o*f*g,w=n*m+i*v+r*x+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=m*C,e[1]=(y*h*s-f*g*s-y*r*p+i*g*p+f*r*c-i*h*c)*C,e[2]=(a*g*s-y*l*s+y*r*u-i*g*u-a*r*c+i*l*c)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(d*g*s-_*h*s+_*r*p-n*g*p-d*r*c+n*h*c)*C,e[6]=(_*l*s-o*g*s-_*r*u+n*g*u+o*r*c-n*l*c)*C,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*p+n*l*p)*C,e[8]=x*C,e[9]=(_*f*s-d*y*s-_*i*p+n*y*p+d*i*c-n*f*c)*C,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*c+n*a*c)*C,e[11]=(d*a*s-o*f*s-d*i*u+n*f*u+o*i*p-n*a*p)*C,e[12]=M*C,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*g+n*f*g)*C,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*C,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,f=a+a,h=s*u,p=s*d,_=s*f,y=o*d,g=o*f,c=a*f,m=l*u,v=l*d,x=l*f,M=i.x,w=i.y,C=i.z;return r[0]=(1-(y+c))*M,r[1]=(p+x)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(h+c))*w,r[6]=(g+m)*w,r[7]=0,r[8]=(_+v)*C,r[9]=(g-m)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/s,d=1/o,f=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*l,h=(i+r)*u,p=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new k,kn=new It,kb=new k(0,0,0),Ob=new k(1,1,1),Gi=new k,_l=new k,dn=new k,Qg=new It,Zg=new ka;class ac{constructor(e=0,n=0,i=0,r=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ac.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fb=0;const Jg=new k,os=new ka,gi=new It,yl=new k,Eo=new k,zb=new k,Bb=new ka,ev=new k(1,0,0),tv=new k(0,1,0),nv=new k(0,0,1),Hb={type:"added"},iv={type:"removed"};class vn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new k,n=new ac,i=new ka,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,n){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Eo,yl,this.up):gi.lookAt(yl,Eo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(iv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,zb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new k(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new k,vi=new k,md=new k,_i=new k,as=new k,ls=new k,rv=new k,gd=new k,vd=new k,_d=new k;let xl=!1;class Gn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),vi.subVectors(i,n),md.subVectors(e,n);const o=On.dot(On),a=On.dot(vi),l=On.dot(md),u=vi.dot(vi),d=vi.dot(md),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(u*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,n,i,r,s,o,a,l){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i),l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),vi.subVectors(e,n),On.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),On.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),gd.subVectors(e,i);const l=as.dot(gd),u=ls.dot(gd);if(l<=0&&u<=0)return n.copy(i);vd.subVectors(e,r);const d=as.dot(vd),f=ls.dot(vd);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(as,o);_d.subVectors(e,s);const p=as.dot(_d),_=ls.dot(_d);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ls,a);const g=d*_-p*f;if(g<=0&&f-d>=0&&p-_>=0)return rv.subVectors(s,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(rv,a);const c=1/(g+y+h);return o=y*c,a=h*c,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vb=0;class lc extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=Bs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qy,this.blendDst=Zy,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function yd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Nn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Nn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Nn.workingColorSpace){if(e=wb(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yd(o,s,e+1/3),this.g=yd(o,s,e),this.b=yd(o,s,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,n=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Le){const i=ux[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=ad(e.r),this.g=ad(e.g),this.b=ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Nn.fromWorkingColorSpace(zt.copy(this),e),Math.round(tn(zt.r*255,0,255))*65536+Math.round(tn(zt.g*255,0,255))*256+Math.round(tn(zt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nn.workingColorSpace){Nn.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Le){Nn.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Le?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fn),Fn.h+=e,Fn.s+=n,Fn.l+=i,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fn),e.getHSL(Sl);const i=sd(Fn.h,Sl.h,n),r=sd(Fn.s,Sl.s,n),s=sd(Fn.l,Sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=ux;class up extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new k,Ml=new et;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$g,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hl(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hl(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hl(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$g&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cx extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dx extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Gb=0;const Mn=new It,xd=new vn,us=new k,fn=new Oa,wo=new Oa,At=new k;class pr extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?dx:cx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(fn.min,wo.min),fn.expandByPoint(At),At.addVectors(fn.max,wo.max),fn.expandByPoint(At)):(fn.expandByPoint(wo.min),fn.expandByPoint(wo.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)At.fromBufferAttribute(a,u),l&&(us.fromBufferAttribute(e,u),At.add(us)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let A=0;A<a;A++)u[A]=new k,d[A]=new k;const f=new k,h=new k,p=new k,_=new et,y=new et,g=new et,c=new k,m=new k;function v(A,Y,V){f.fromArray(r,A*3),h.fromArray(r,Y*3),p.fromArray(r,V*3),_.fromArray(o,A*2),y.fromArray(o,Y*2),g.fromArray(o,V*2),h.sub(f),p.sub(f),y.sub(_),g.sub(_);const I=1/(y.x*g.y-g.x*y.y);isFinite(I)&&(c.copy(h).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(I),m.copy(p).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(I),u[A].add(c),u[Y].add(c),u[V].add(c),d[A].add(m),d[Y].add(m),d[V].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,Y=x.length;A<Y;++A){const V=x[A],I=V.start,F=V.count;for(let j=I,J=I+F;j<J;j+=3)v(i[j+0],i[j+1],i[j+2])}const M=new k,w=new k,C=new k,L=new k;function S(A){C.fromArray(s,A*3),L.copy(C);const Y=u[A];M.copy(Y),M.sub(C.multiplyScalar(C.dot(Y))).normalize(),w.crossVectors(L,Y);const I=w.dot(d[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=I}for(let A=0,Y=x.length;A<Y;++A){const V=x[A],I=V.start,F=V.count;for(let j=I,J=I+F;j<J;j+=3)S(i[j+0]),S(i[j+1]),S(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let c=0;c<d;c++)h[_++]=u[p++]}return new li(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sv=new It,Jn=new Nb,El=new lp,ov=new k,cs=new k,ds=new k,fs=new k,Sd=new k,wl=new k,Tl=new et,Al=new et,bl=new et,av=new k,lv=new k,uv=new k,Cl=new k,Rl=new k;class Ai extends vn{constructor(e=new pr,n=new up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],f=s[l];d!==0&&(Sd.fromBufferAttribute(f,e),o?wl.addScaledVector(Sd,d):wl.addScaledVector(Sd.sub(n),d))}n.add(wl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(El.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(El,ov)===null||Jn.origin.distanceToSquared(ov)>(e.far-e.near)**2))&&(sv.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(sv),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const y=f[p],g=s[y.materialIndex],c=Math.max(y.start,h.start),m=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let v=c,x=m;v<x;v+=3){const M=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);i=Pl(this,g,e,Jn,l,u,d,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=y.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let y=p,g=_;y<g;y+=3){const c=o.getX(y),m=o.getX(y+1),v=o.getX(y+2);i=Pl(this,s,e,Jn,l,u,d,c,m,v),i&&(i.faceIndex=Math.floor(y/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const y=f[p],g=s[y.materialIndex],c=Math.max(y.start,h.start),m=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let v=c,x=m;v<x;v+=3){const M=v,w=v+1,C=v+2;i=Pl(this,g,e,Jn,l,u,d,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=y.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let y=p,g=_;y<g;y+=3){const c=y,m=y+1,v=y+2;i=Pl(this,s,e,Jn,l,u,d,c,m,v),i&&(i.faceIndex=Math.floor(y/3),n.push(i))}}}}function Wb(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Rl);return u<n.near||u>n.far?null:{distance:u,point:Rl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,cs),t.getVertexPosition(l,ds),t.getVertexPosition(u,fs);const d=Wb(t,e,n,i,cs,ds,fs,Cl);if(d){r&&(Tl.fromBufferAttribute(r,a),Al.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,u),d.uv=Gn.getInterpolation(Cl,cs,ds,fs,Tl,Al,bl,new et)),s&&(Tl.fromBufferAttribute(s,a),Al.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,u),d.uv1=Gn.getInterpolation(Cl,cs,ds,fs,Tl,Al,bl,new et),d.uv2=d.uv1),o&&(av.fromBufferAttribute(o,a),lv.fromBufferAttribute(o,l),uv.fromBufferAttribute(o,u),d.normal=Gn.getInterpolation(Cl,cs,ds,fs,av,lv,uv,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new k,materialIndex:0};Gn.getNormal(cs,ds,fs,f.normal),d.face=f}return d}class Fa extends pr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(u,3)),this.setAttribute("normal",new ui(d,3)),this.setAttribute("uv",new ui(f,2));function _(y,g,c,m,v,x,M,w,C,L,S){const A=x/C,Y=M/L,V=x/2,I=M/2,F=w/2,j=C+1,J=L+1;let Q=0,D=0;const z=new k;for(let O=0;O<J;O++){const ue=O*Y-I;for(let Z=0;Z<j;Z++){const B=Z*A-V;z[y]=B*m,z[g]=ue*v,z[c]=F,u.push(z.x,z.y,z.z),z[y]=0,z[g]=0,z[c]=w>0?1:-1,d.push(z.x,z.y,z.z),f.push(Z/C),f.push(1-O/L),Q+=1}}for(let O=0;O<L;O++)for(let ue=0;ue<C;ue++){const Z=h+ue+j*O,B=h+ue+j*(O+1),K=h+(ue+1)+j*(O+1),se=h+(ue+1)+j*O;l.push(Z,B,se),l.push(B,K,se),D+=6}a.addGroup(p,D,S),p+=D,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=eo(t[n]);for(const r in i)e[r]=i[r]}return e}function jb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fx(t){return t.getRenderTarget()===null?t.outputColorSpace:di}const $b={clone:eo,merge:jt};var Xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=jb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hx extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends hx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class Yb extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new bn(hs,ps,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new bn(hs,ps,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new bn(hs,ps,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new bn(hs,ps,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new bn(hs,ps,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new bn(hs,ps,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ci,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class px extends ln{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kb extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&($o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fr?Le:zr),this.texture=new px(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ar});s.uniforms.tEquirect.value=n;const o=new Ai(r,s),a=n.minFilter;return n.minFilter===_a&&(n.minFilter=An),new Yb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Md=new k,Qb=new k,Zb=new ze;class Tr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Md.subVectors(i,n).cross(Qb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Md),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Zb.getNormalMatrix(e),r=this.coplanarPoint(Md).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new lp,Ll=new k;class mx{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],d=i[6],f=i[7],h=i[8],p=i[9],_=i[10],y=i[11],g=i[12],c=i[13],m=i[14],v=i[15];return n[0].setComponents(a-r,f-l,y-h,v-g).normalize(),n[1].setComponents(a+r,f+l,y+h,v+g).normalize(),n[2].setComponents(a+s,f+u,y+p,v+c).normalize(),n[3].setComponents(a-s,f-u,y-p,v-c).normalize(),n[4].setComponents(a-o,f-d,y-_,v-m).normalize(),n[5].setComponents(a+o,f+d,y+_,v+m).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Jb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(d,p),t.bufferData(d,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,d,f){const h=d.array,p=d.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(s(f.buffer,u,d),f.version=u.version)}return{get:o,remove:a,update:l}}class cp extends pr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],y=[],g=[];for(let c=0;c<d;c++){const m=c*h-o;for(let v=0;v<u;v++){const x=v*f-s;_.push(x,-m,0),y.push(0,0,1),g.push(v/a),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<a;m++){const v=m+u*c,x=m+u*(c+1),M=m+1+u*(c+1),w=m+1+u*c;p.push(v,x,w),p.push(x,M,w)}this.setIndex(p),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.width,e.height,e.widthSegments,e.heightSegments)}}var eC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oC="vec3 transformed = vec3( position );",aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uC=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,cC=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_C=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yC=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,SC=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AC="gl_FragColor = linearToOutputTexel( gl_FragColor );",bC=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,RC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PC=`#ifdef USE_ENVMAP
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
#endif`,LC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DC=`#ifdef USE_ENVMAP
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
#endif`,IC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OC=`#ifdef USE_GRADIENTMAP
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
}`,FC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,GC=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,WC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$C=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,YC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,KC=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,JC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iR=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oR=`#if defined( USE_POINTS_UV )
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
#endif`,aR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,pR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,yR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ER=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,TR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,DR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,OR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FR=`#ifdef USE_SKINNING
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
#endif`,zR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GR=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,WR=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jR=`#ifdef USE_UV
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
#endif`,$R=`#ifdef USE_UV
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
#endif`,XR=`#ifdef USE_UV
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
#endif`,qR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tP=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,rP=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aP=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uP=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,cP=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,fP=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pP=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gP=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,_P=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xP=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SP=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,MP=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EP=`uniform float size;
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
}`,wP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TP=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,AP=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,CP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:eC,alphamap_pars_fragment:tC,alphatest_fragment:nC,alphatest_pars_fragment:iC,aomap_fragment:rC,aomap_pars_fragment:sC,begin_vertex:oC,beginnormal_vertex:aC,bsdfs:lC,iridescence_fragment:uC,bumpmap_pars_fragment:cC,clipping_planes_fragment:dC,clipping_planes_pars_fragment:fC,clipping_planes_pars_vertex:hC,clipping_planes_vertex:pC,color_fragment:mC,color_pars_fragment:gC,color_pars_vertex:vC,color_vertex:_C,common:yC,cube_uv_reflection_fragment:xC,defaultnormal_vertex:SC,displacementmap_pars_vertex:MC,displacementmap_vertex:EC,emissivemap_fragment:wC,emissivemap_pars_fragment:TC,encodings_fragment:AC,encodings_pars_fragment:bC,envmap_fragment:CC,envmap_common_pars_fragment:RC,envmap_pars_fragment:PC,envmap_pars_vertex:LC,envmap_physical_pars_fragment:GC,envmap_vertex:DC,fog_vertex:IC,fog_pars_vertex:UC,fog_fragment:NC,fog_pars_fragment:kC,gradientmap_pars_fragment:OC,lightmap_fragment:FC,lightmap_pars_fragment:zC,lights_lambert_fragment:BC,lights_lambert_pars_fragment:HC,lights_pars_begin:VC,lights_toon_fragment:WC,lights_toon_pars_fragment:jC,lights_phong_fragment:$C,lights_phong_pars_fragment:XC,lights_physical_fragment:qC,lights_physical_pars_fragment:YC,lights_fragment_begin:KC,lights_fragment_maps:QC,lights_fragment_end:ZC,logdepthbuf_fragment:JC,logdepthbuf_pars_fragment:eR,logdepthbuf_pars_vertex:tR,logdepthbuf_vertex:nR,map_fragment:iR,map_pars_fragment:rR,map_particle_fragment:sR,map_particle_pars_fragment:oR,metalnessmap_fragment:aR,metalnessmap_pars_fragment:lR,morphcolor_vertex:uR,morphnormal_vertex:cR,morphtarget_pars_vertex:dR,morphtarget_vertex:fR,normal_fragment_begin:hR,normal_fragment_maps:pR,normal_pars_fragment:mR,normal_pars_vertex:gR,normal_vertex:vR,normalmap_pars_fragment:_R,clearcoat_normal_fragment_begin:yR,clearcoat_normal_fragment_maps:xR,clearcoat_pars_fragment:SR,iridescence_pars_fragment:MR,output_fragment:ER,packing:wR,premultiplied_alpha_fragment:TR,project_vertex:AR,dithering_fragment:bR,dithering_pars_fragment:CR,roughnessmap_fragment:RR,roughnessmap_pars_fragment:PR,shadowmap_pars_fragment:LR,shadowmap_pars_vertex:DR,shadowmap_vertex:IR,shadowmask_pars_fragment:UR,skinbase_vertex:NR,skinning_pars_vertex:kR,skinning_vertex:OR,skinnormal_vertex:FR,specularmap_fragment:zR,specularmap_pars_fragment:BR,tonemapping_fragment:HR,tonemapping_pars_fragment:VR,transmission_fragment:GR,transmission_pars_fragment:WR,uv_pars_fragment:jR,uv_pars_vertex:$R,uv_vertex:XR,worldpos_vertex:qR,background_vert:YR,background_frag:KR,backgroundCube_vert:QR,backgroundCube_frag:ZR,cube_vert:JR,cube_frag:eP,depth_vert:tP,depth_frag:nP,distanceRGBA_vert:iP,distanceRGBA_frag:rP,equirect_vert:sP,equirect_frag:oP,linedashed_vert:aP,linedashed_frag:lP,meshbasic_vert:uP,meshbasic_frag:cP,meshlambert_vert:dP,meshlambert_frag:fP,meshmatcap_vert:hP,meshmatcap_frag:pP,meshnormal_vert:mP,meshnormal_frag:gP,meshphong_vert:vP,meshphong_frag:_P,meshphysical_vert:yP,meshphysical_frag:xP,meshtoon_vert:SP,meshtoon_frag:MP,points_vert:EP,points_frag:wP,shadow_vert:TP,shadow_frag:AP,sprite_vert:bP,sprite_frag:CP},oe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},ii={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new it(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ii.physical={uniforms:jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Dl={r:0,b:0,g:0};function RP(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,u,d,f=null,h=0,p=null;function _(g,c){let m=!1,v=c.isScene===!0?c.background:null;switch(v&&v.isTexture&&(v=(c.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),m=!0),t.xr.getEnvironmentBlendMode()){case"opaque":m=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),m=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),m=!0;break}(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===oc)?(d===void 0&&(d=new Ai(new Fa(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:eo(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=v.colorSpace!==Le,(f!==v||h!==v.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ai(new cp(2,2),new Yr({name:"BackgroundMaterial",uniforms:eo(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,c){g.getRGB(Dl,fx(t)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(g,c=1){a.set(g),l=c,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function PP(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,d=!1;function f(F,j,J,Q,D){let z=!1;if(o){const O=y(Q,J,j);u!==O&&(u=O,p(u.object)),z=c(F,Q,J,D),z&&m(F,Q,J,D)}else{const O=j.wireframe===!0;(u.geometry!==Q.id||u.program!==J.id||u.wireframe!==O)&&(u.geometry=Q.id,u.program=J.id,u.wireframe=O,z=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,L(F,j,J,Q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function y(F,j,J){const Q=J.wireframe===!0;let D=a[F.id];D===void 0&&(D={},a[F.id]=D);let z=D[j.id];z===void 0&&(z={},D[j.id]=z);let O=z[Q];return O===void 0&&(O=g(h()),z[Q]=O),O}function g(F){const j=[],J=[],Q=[];for(let D=0;D<r;D++)j[D]=0,J[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:Q,object:F,attributes:{},index:null}}function c(F,j,J,Q){const D=u.attributes,z=j.attributes;let O=0;const ue=J.getAttributes();for(const Z in ue)if(ue[Z].location>=0){const K=D[Z];let se=z[Z];if(se===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;O++}return u.attributesNum!==O||u.index!==Q}function m(F,j,J,Q){const D={},z=j.attributes;let O=0;const ue=J.getAttributes();for(const Z in ue)if(ue[Z].location>=0){let K=z[Z];K===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),D[Z]=se,O++}u.attributes=D,u.attributesNum=O,u.index=Q}function v(){const F=u.newAttributes;for(let j=0,J=F.length;j<J;j++)F[j]=0}function x(F){M(F,0)}function M(F,j){const J=u.newAttributes,Q=u.enabledAttributes,D=u.attributeDivisors;J[F]=1,Q[F]===0&&(t.enableVertexAttribArray(F),Q[F]=1),D[F]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),D[F]=j)}function w(){const F=u.newAttributes,j=u.enabledAttributes;for(let J=0,Q=j.length;J<Q;J++)j[J]!==F[J]&&(t.disableVertexAttribArray(J),j[J]=0)}function C(F,j,J,Q,D,z){i.isWebGL2===!0&&(J===t.INT||J===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,j,J,D,z):t.vertexAttribPointer(F,j,J,Q,D,z)}function L(F,j,J,Q){if(i.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Q.attributes,z=J.getAttributes(),O=j.defaultAttributeValues;for(const ue in z){const Z=z[ue];if(Z.location>=0){let B=D[ue];if(B===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(B=F.instanceColor)),B!==void 0){const K=B.normalized,se=B.itemSize,ae=n.get(B);if(ae===void 0)continue;const P=ae.buffer,Pe=ae.type,be=ae.bytesPerElement;if(B.isInterleavedBufferAttribute){const le=B.data,Te=le.stride,We=B.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)M(Z.location+ye,le.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<Z.locationSize;ye++)x(Z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,P);for(let ye=0;ye<Z.locationSize;ye++)C(Z.location+ye,se/Z.locationSize,Pe,K,Te*be,(We+se/Z.locationSize*ye)*be)}else{if(B.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)M(Z.location+le,B.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let le=0;le<Z.locationSize;le++)x(Z.location+le);t.bindBuffer(t.ARRAY_BUFFER,P);for(let le=0;le<Z.locationSize;le++)C(Z.location+le,se/Z.locationSize,Pe,K,se*be,se/Z.locationSize*le*be)}}else if(O!==void 0){const K=O[ue];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}w()}function S(){V();for(const F in a){const j=a[F];for(const J in j){const Q=j[J];for(const D in Q)_(Q[D].object),delete Q[D];delete j[J]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const j=a[F.id];for(const J in j){const Q=j[J];for(const D in Q)_(Q[D].object),delete Q[D];delete j[J]}delete a[F.id]}function Y(F){for(const j in a){const J=a[j];if(J[F.id]===void 0)continue;const Q=J[F.id];for(const D in Q)_(Q[D].object),delete Q[D];delete J[F.id]}}function V(){I(),d=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function LP(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,d,f),n.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function DP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,x=o||e.has("OES_texture_float"),M=v&&x,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:w}}function IP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,c=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):u();else{const m=s?0:i,v=m*4;let x=c.clippingState||null;l.value=x,x=d(_,h,v,p);for(let M=0;M!==v;++M)x[M]=n[M];c.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const c=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function UP(t){let e=new WeakMap;function n(o,a){return a===Nf?o.mapping=Qs:a===kf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nf||a===kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Kb(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class NP extends hx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,cv=[.125,.215,.35,.446,.526,.582],Rr=20,Ed=new NP,dv=new it;let wd=null;const Ar=(1+Math.sqrt(5))/2,ms=1/Ar,fv=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Ar,ms),new k(0,Ar,-ms),new k(ms,0,Ar),new k(-ms,0,Ar),new k(Ar,ms,0),new k(-Ar,ms,0)];class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){wd=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd),e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:ya,format:jn,colorSpace:di,depthBuffer:!1},r=pv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kP(s)),this._blurMaterial=OP(s,e,n)}return r}_compileMaterial(e){const n=new Ai(this._lodPlanes[0],e);this._renderer.compile(n,Ed)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(dv),d.toneMapping=Ci,d.autoClear=!1;const p=new up({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Ai(new Fa,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(dv),y=!0);for(let c=0;c<6;c++){const m=c%3;m===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):m===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;Il(r,m*v,c>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qs||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fv[(r-1)%fv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ai(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):Rr;g>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Rr}`);const c=[];let m=0;for(let C=0;C<Rr;++C){const L=C/y,S=Math.exp(-L*L/2);c.push(S),C===0?m+=S:C<g&&(m+=2*S)}for(let C=0;C<c.length;C++)c[C]=c[C]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const x=this._sizeLods[r],M=3*x*(r>v-Ls?r-v+Ls:0),w=4*(this._cubeSize-x);Il(n,M,w,3*x,2*x),l.setRenderTarget(n),l.render(f,Ed)}}function kP(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+cv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=cv[o-t+Ls-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,y=3,g=2,c=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),x=new Float32Array(c*_*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,L=w>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];m.set(S,y*_*w),v.set(h,g*_*w);const A=[w,w,w,w,w,w];x.set(A,c*_*w)}const M=new pr;M.setAttribute("position",new li(m,y)),M.setAttribute("uv",new li(v,g)),M.setAttribute("faceIndex",new li(x,c)),e.push(M),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pv(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OP(t,e,n){const i=new Float32Array(Rr),r=new k(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function mv(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function gv(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function FP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nf||l===kf,d=l===Qs||l===Zs;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new hv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new hv(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BP(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,c=y.length;g<c;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let v=0,x=m.length;v<x;v+=3){const M=m[v+0],w=m[v+1],C=m[v+2];h.push(M,w,w,C,C,M)}}else{const m=_.array;y=_.version;for(let v=0,x=m.length/3-1;v<x;v+=3){const M=v+0,w=v+1,C=v+2;h.push(M,w,w,C,C,M)}}const g=new(rx(h)?dx:cx)(h,1);g.version=y;const c=s.get(f);c&&e.remove(c),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function HP(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function d(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function f(h,p,_){if(_===0)return;let y,g;if(r)y=t,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,p,a,h*l,_),n.update(p,s,_)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f}function VP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GP(t,e){return t[0]-e[0]}function WP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jP(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==y){let j=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",j)};var p=j;g!==void 0&&g.texture.dispose();const v=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),M===!0&&(S=3);let A=d.attributes.position.count*S,Y=1;A>e.maxTextureSize&&(Y=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const V=new Float32Array(A*Y*4*y),I=new ax(V,A,Y,y);I.type=Ur,I.needsUpdate=!0;const F=S*4;for(let J=0;J<y;J++){const Q=w[J],D=C[J],z=L[J],O=A*Y*4*J;for(let ue=0;ue<Q.count;ue++){const Z=ue*F;v===!0&&(o.fromBufferAttribute(Q,ue),V[O+Z+0]=o.x,V[O+Z+1]=o.y,V[O+Z+2]=o.z,V[O+Z+3]=0),x===!0&&(o.fromBufferAttribute(D,ue),V[O+Z+4]=o.x,V[O+Z+5]=o.y,V[O+Z+6]=o.z,V[O+Z+7]=0),M===!0&&(o.fromBufferAttribute(z,ue),V[O+Z+8]=o.x,V[O+Z+9]=o.y,V[O+Z+10]=o.z,V[O+Z+11]=z.itemSize===4?o.w:1)}}g={count:y,texture:I,size:new et(A,Y)},s.set(d,g),d.addEventListener("dispose",j)}let c=0;for(let v=0;v<h.length;v++)c+=h[v];const m=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const M=y[x];M[0]=x,M[1]=h[x]}y.sort(WP);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(GP);const g=d.morphAttributes.position,c=d.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const M=a[x],w=M[0],C=M[1];w!==Number.MAX_SAFE_INTEGER&&C?(g&&d.getAttribute("morphTarget"+x)!==g[w]&&d.setAttribute("morphTarget"+x,g[w]),c&&d.getAttribute("morphNormal"+x)!==c[w]&&d.setAttribute("morphNormal"+x,c[w]),r[x]=C,m+=C):(g&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),c&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const v=d.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $P(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const vx=new ln,_x=new ax,yx=new Ib,xx=new px,vv=[],_v=[],yv=new Float32Array(16),xv=new Float32Array(9),Sv=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vv[r];if(s===void 0&&(s=new Float32Array(r),vv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=_v[e];n===void 0&&(n=new Int32Array(e),_v[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function QP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;Sv.set(i),t.uniformMatrix2fv(this.addr,!1,Sv),Mt(n,i)}}function ZP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;xv.set(i),t.uniformMatrix3fv(this.addr,!1,xv),Mt(n,i)}}function JP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;yv.set(i),t.uniformMatrix4fv(this.addr,!1,yv),Mt(n,i)}}function eL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function nL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function rL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function oL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function lL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||vx,r)}function uL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yx,r)}function cL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xx,r)}function dL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_x,r)}function fL(t){switch(t){case 5126:return XP;case 35664:return qP;case 35665:return YP;case 35666:return KP;case 35674:return QP;case 35675:return ZP;case 35676:return JP;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return sL;case 36295:return oL;case 36296:return aL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return dL}}function hL(t,e){t.uniform1fv(this.addr,e)}function pL(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function mL(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function gL(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function vL(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _L(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yL(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xL(t,e){t.uniform1iv(this.addr,e)}function SL(t,e){t.uniform2iv(this.addr,e)}function ML(t,e){t.uniform3iv(this.addr,e)}function EL(t,e){t.uniform4iv(this.addr,e)}function wL(t,e){t.uniform1uiv(this.addr,e)}function TL(t,e){t.uniform2uiv(this.addr,e)}function AL(t,e){t.uniform3uiv(this.addr,e)}function bL(t,e){t.uniform4uiv(this.addr,e)}function CL(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||vx,s[o])}function RL(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||yx,s[o])}function PL(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xx,s[o])}function LL(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||_x,s[o])}function DL(t){switch(t){case 5126:return hL;case 35664:return pL;case 35665:return mL;case 35666:return gL;case 35674:return vL;case 35675:return _L;case 35676:return yL;case 5124:case 35670:return xL;case 35667:case 35671:return SL;case 35668:case 35672:return ML;case 35669:case 35673:return EL;case 5125:return wL;case 36294:return TL;case 36295:return AL;case 36296:return bL;case 35678:case 36198:case 36298:case 36306:case 35682:return CL;case 35679:case 36299:case 36307:return RL;case 35680:case 36300:case 36308:case 36293:return PL;case 36289:case 36303:case 36311:case 36292:return LL}}class IL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=fL(n.type)}}class UL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DL(n.type)}}class NL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Mv(t,e){t.seq.push(e),t.map[e.id]=e}function kL(t,e,n){const i=t.name,r=i.length;for(Td.lastIndex=0;;){const s=Td.exec(i),o=Td.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mv(n,u===void 0?new IL(a,t,e):new UL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new NL(a),Mv(n,f)),n=f}}}class Yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);kL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ev(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let OL=0;function FL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function zL(t){switch(t){case di:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function wv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FL(t.getShaderSource(e),o)}else return r}function BL(t,e){const n=zL(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function HL(t,e){let n;switch(e){case ZA:n="Linear";break;case JA:n="Reinhard";break;case eb:n="OptimizedCineon";break;case tb:n="ACESFilmic";break;case nb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Po).join(`
`)}function GL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Po(t){return t!==""}function Tv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(jL,$L)}function $L(t,e){const n=Ie[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Hf(n)}const XL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(t){return t.replace(XL,qL)}function qL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function KL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case Zs:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function ZL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jy:e="ENVMAP_BLENDING_MULTIPLY";break;case KA:e="ENVMAP_BLENDING_MIX";break;case QA:e="ENVMAP_BLENDING_ADD";break}return e}function JL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=YL(n),u=KL(n),d=QL(n),f=ZL(n),h=JL(n),p=n.isWebGL2?"":VL(n),_=GL(s),y=r.createProgram();let g,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=[_].filter(Po).join(`
`),g.length>0&&(g+=`
`),c=[p,_].filter(Po).join(`
`),c.length>0&&(c+=`
`)):(g=[Cv(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),c=[p,Cv(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Ci?HL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,BL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=Hf(o),o=Tv(o,n),o=Av(o,n),a=Hf(a),a=Tv(a,n),a=Av(a,n),o=bv(o),a=bv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=m+g+o,x=m+c+a,M=Ev(r,r.VERTEX_SHADER,v),w=Ev(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,M),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(y).trim(),A=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(w).trim();let V=!0,I=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,M,w);else{const F=wv(r,M,"vertex"),j=wv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+F+`
`+j)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||Y==="")&&(I=!1);I&&(this.diagnostics={runnable:V,programLog:S,vertexShader:{log:A,prefix:g},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(M),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Yl(r,y)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=WL(r,y)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=OL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}let t3=0;class n3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i3(e),n.set(e,i)),i}}class i3{constructor(e){this.id=t3++,this.code=e,this.usedTimes=0}}function r3(t,e,n,i,r,s,o){const a=new lx,l=new n3,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function g(S,A,Y,V,I){const F=V.fog,j=I.geometry,J=S.isMeshStandardMaterial?V.environment:null,Q=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),D=Q&&Q.mapping===oc?Q.image.height:null,z=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const O=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=O!==void 0?O.length:0;let Z=0;j.morphAttributes.position!==void 0&&(Z=1),j.morphAttributes.normal!==void 0&&(Z=2),j.morphAttributes.color!==void 0&&(Z=3);let B,K,se,ae;if(z){const Ye=ii[z];B=Ye.vertexShader,K=Ye.fragmentShader}else B=S.vertexShader,K=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const P=t.getRenderTarget(),Pe=I.isInstancedMesh===!0,be=!!S.map,le=!!S.matcap,Te=!!Q,We=!!S.aoMap,ye=!!S.lightMap,ke=!!S.bumpMap,Et=!!S.normalMap,Rt=!!S.displacementMap,wt=!!S.emissiveMap,_t=!!S.metalnessMap,je=!!S.roughnessMap,ut=S.clearcoat>0,Qt=S.iridescence>0,b=S.sheen>0,E=S.transmission>0,H=ut&&!!S.clearcoatMap,ne=ut&&!!S.clearcoatNormalMap,ie=ut&&!!S.clearcoatRoughnessMap,ce=Qt&&!!S.iridescenceMap,Ae=Qt&&!!S.iridescenceThicknessMap,me=b&&!!S.sheenColorMap,X=b&&!!S.sheenRoughnessMap,ve=!!S.specularMap,xe=!!S.specularColorMap,Ee=!!S.specularIntensityMap,pe=E&&!!S.transmissionMap,_e=E&&!!S.thicknessMap,He=!!S.gradientMap,Xe=!!S.alphaMap,ft=S.alphaTest>0,R=!!S.extensions,G=!!j.attributes.uv1,ee=!!j.attributes.uv2,de=!!j.attributes.uv3;return{isWebGL2:d,shaderID:z,shaderName:S.type,vertexShader:B,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:P===null?t.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:di,map:be,matcap:le,envMap:Te,envMapMode:Te&&Q.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:ye,bumpMap:ke,normalMap:Et,displacementMap:h&&Rt,emissiveMap:wt,normalMapObjectSpace:Et&&S.normalMapType===Mb,normalMapTangentSpace:Et&&S.normalMapType===Sb,metalnessMap:_t,roughnessMap:je,clearcoat:ut,clearcoatMap:H,clearcoatNormalMap:ne,clearcoatRoughnessMap:ie,iridescence:Qt,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:b,sheenColorMap:me,sheenRoughnessMap:X,specularMap:ve,specularColorMap:xe,specularIntensityMap:Ee,transmission:E,transmissionMap:pe,thicknessMap:_e,gradientMap:He,opaque:S.transparent===!1&&S.blending===Bs,alphaMap:Xe,alphaTest:ft,combine:S.combine,mapUv:be&&y(S.map.channel),aoMapUv:We&&y(S.aoMap.channel),lightMapUv:ye&&y(S.lightMap.channel),bumpMapUv:ke&&y(S.bumpMap.channel),normalMapUv:Et&&y(S.normalMap.channel),displacementMapUv:Rt&&y(S.displacementMap.channel),emissiveMapUv:wt&&y(S.emissiveMap.channel),metalnessMapUv:_t&&y(S.metalnessMap.channel),roughnessMapUv:je&&y(S.roughnessMap.channel),clearcoatMapUv:H&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:X&&y(S.sheenRoughnessMap.channel),specularMapUv:ve&&y(S.specularMap.channel),specularColorMapUv:xe&&y(S.specularColorMap.channel),specularIntensityMapUv:Ee&&y(S.specularIntensityMap.channel),transmissionMapUv:pe&&y(S.transmissionMap.channel),thicknessMapUv:_e&&y(S.thicknessMap.channel),alphaMapUv:Xe&&y(S.alphaMap.channel),vertexTangents:Et&&!!j.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:ee,vertexUv3s:de,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(be||Xe),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Ci,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ei,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:R&&S.extensions.derivatives===!0,extensionFragDepth:R&&S.extensions.fragDepth===!0,extensionDrawBuffers:R&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)A.push(Y),A.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(m(A,S),v(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function m(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),S.push(a.mask)}function x(S){const A=_[S.type];let Y;if(A){const V=ii[A];Y=$b.clone(V.uniforms)}else Y=S.uniforms;return Y}function M(S,A){let Y;for(let V=0,I=u.length;V<I;V++){const F=u[V];if(F.cacheKey===A){Y=F,++Y.usedTimes;break}}return Y===void 0&&(Y=new e3(t,A,S,s),u.push(Y)),Y}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function s3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function o3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,y,g){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=y,c.group=g),e++,c}function a(f,h,p,_,y,g){const c=o(f,h,p,_,y,g);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,h,p,_,y,g){const c=o(f,h,p,_,y,g);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||o3),i.length>1&&i.sort(h||Rv),r.length>1&&r.sort(h||Rv)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function a3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pv,t.set(i,[o])):r>=s.length?(o=new Pv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function l3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new it};break;case"SpotLight":n={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function u3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let c3=0;function d3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function f3(t,e){const n=new l3,i=u3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new k);const s=new k,o=new It,a=new It;function l(d,f){let h=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,g=0,c=0,m=0,v=0,x=0,M=0,w=0,C=0,L=0;d.sort(d3);const S=f===!0?Math.PI:1;for(let Y=0,V=d.length;Y<V;Y++){const I=d[Y],F=I.color,j=I.intensity,J=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*j*S,p+=F.g*j*S,_+=F.b*j*S;else if(I.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(I.sh.coefficients[D],j);else if(I.isDirectionalLight){const D=n.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const z=I.shadow,O=i.get(I);O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=D,y++}else if(I.isSpotLight){const D=n.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(F).multiplyScalar(j*S),D.distance=J,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,r.spot[c]=D;const z=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,z.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[c]=z.matrix,I.castShadow){const O=i.get(I);O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,r.spotShadow[c]=O,r.spotShadowMap[c]=Q,w++}c++}else if(I.isRectAreaLight){const D=n.get(I);D.color.copy(F).multiplyScalar(j),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=D,m++}else if(I.isPointLight){const D=n.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*S),D.distance=I.distance,D.decay=I.decay,I.castShadow){const z=I.shadow,O=i.get(I);O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,r.pointShadow[g]=O,r.pointShadowMap[g]=Q,r.pointShadowMatrix[g]=I.shadow.matrix,M++}r.point[g]=D,g++}else if(I.isHemisphereLight){const D=n.get(I);D.skyColor.copy(I.color).multiplyScalar(j*S),D.groundColor.copy(I.groundColor).multiplyScalar(j*S),r.hemi[v]=D,v++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==y||A.pointLength!==g||A.spotLength!==c||A.rectAreaLength!==m||A.hemiLength!==v||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==w||A.numSpotMaps!==C)&&(r.directional.length=y,r.spot.length=c,r.rectArea.length=m,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=w+C-L,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=L,A.directionalLength=y,A.pointLength=g,A.spotLength=c,A.rectAreaLength=m,A.hemiLength=v,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=w,A.numSpotMaps=C,r.version=c3++)}function u(d,f){let h=0,p=0,_=0,y=0,g=0;const c=f.matrixWorldInverse;for(let m=0,v=d.length;m<v;m++){const x=d[m];if(x.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),h++}else if(x.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),_++}else if(x.isRectAreaLight){const M=r.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),a.identity(),o.copy(x.matrixWorld),o.premultiply(c),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(c),g++}}}return{setup:l,setupView:u,state:r}}function Lv(t,e){const n=new f3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function h3(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Lv(t,e),n.set(s,[l])):o>=a.length?(l=new Lv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class p3 extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m3 extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v3=`uniform sampler2D shadow_pass;
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
}`;function _3(t,e,n){let i=new mx;const r=new et,s=new et,o=new Lt,a=new p3({depthPacking:xb}),l=new m3,u={},d=n.maxTextureSize,f={[cr]:an,[an]:cr,[Ei]:Ei},h=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:g3,fragmentShader:v3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pr;_.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ai(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let c=this.type;this.render=function(M,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ar),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const V=c!==yi&&this.type===yi,I=c===yi&&this.type!==yi;for(let F=0,j=M.length;F<j;F++){const J=M[F],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const D=Q.getFrameExtents();if(r.multiply(D),s.copy(Q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/D.x),r.x=s.x*D.x,Q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/D.y),r.y=s.y*D.y,Q.mapSize.y=s.y)),Q.map===null||V===!0||I===!0){const O=this.type!==yi?{minFilter:Xt,magFilter:Xt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new qr(r.x,r.y,O),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}t.setRenderTarget(Q.map),t.clear();const z=Q.getViewportCount();for(let O=0;O<z;O++){const ue=Q.getViewport(O);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),Y.viewport(o),Q.updateMatrices(J,O),i=Q.getFrustum(),x(w,C,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===yi&&m(Q,C),Q.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(L,S,A)};function m(M,w){const C=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(w,null,C,h,y,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(w,null,C,p,y,null)}function v(M,w,C,L){let S=null;const A=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=S.uuid,V=w.uuid;let I=u[Y];I===void 0&&(I={},u[Y]=I);let F=I[V];F===void 0&&(F=S.clone(),I[V]=F),S=F}if(S.visible=w.visible,S.wireframe=w.wireframe,L===yi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=t.properties.get(S);Y.light=C}return S}function x(M,w,C,L,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const V=e.update(M),I=M.material;if(Array.isArray(I)){const F=V.groups;for(let j=0,J=F.length;j<J;j++){const Q=F[j],D=I[Q.materialIndex];if(D&&D.visible){const z=v(M,D,L,S);t.renderBufferDirect(C,null,V,z,M,Q)}}}else if(I.visible){const F=v(M,I,L,S);t.renderBufferDirect(C,null,V,F,M,null)}}const Y=M.children;for(let V=0,I=Y.length;V<I;V++)x(Y[V],w,C,L,S)}}function y3(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const G=new Lt;let ee=null;const de=new Lt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!R&&(t.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Ye,Ke,Nt,Ui){Ui===!0&&(ge*=Nt,Ye*=Nt,Ke*=Nt),G.set(ge,Ye,Ke,Nt),de.equals(G)===!1&&(t.clearColor(ge,Ye,Ke,Nt),de.copy(G))},reset:function(){R=!1,ee=null,de.set(-1,0,0,0)}}}function s(){let R=!1,G=null,ee=null,de=null;return{setTest:function(ge){ge?P(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ge){G!==ge&&!R&&(t.depthMask(ge),G=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case GA:t.depthFunc(t.NEVER);break;case WA:t.depthFunc(t.ALWAYS);break;case jA:t.depthFunc(t.LESS);break;case Uf:t.depthFunc(t.LEQUAL);break;case $A:t.depthFunc(t.EQUAL);break;case XA:t.depthFunc(t.GEQUAL);break;case qA:t.depthFunc(t.GREATER);break;case YA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ge}},setLocked:function(ge){R=ge},setClear:function(ge){de!==ge&&(t.clearDepth(ge),de=ge)},reset:function(){R=!1,G=null,ee=null,de=null}}}function o(){let R=!1,G=null,ee=null,de=null,ge=null,Ye=null,Ke=null,Nt=null,Ui=null;return{setTest:function(ht){R||(ht?P(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(ht){G!==ht&&!R&&(t.stencilMask(ht),G=ht)},setFunc:function(ht,Sn,Qn){(ee!==ht||de!==Sn||ge!==Qn)&&(t.stencilFunc(ht,Sn,Qn),ee=ht,de=Sn,ge=Qn)},setOp:function(ht,Sn,Qn){(Ye!==ht||Ke!==Sn||Nt!==Qn)&&(t.stencilOp(ht,Sn,Qn),Ye=ht,Ke=Sn,Nt=Qn)},setLocked:function(ht){R=ht},setClear:function(ht){Ui!==ht&&(t.clearStencil(ht),Ui=ht)},reset:function(){R=!1,G=null,ee=null,de=null,ge=null,Ye=null,Ke=null,Nt=null,Ui=null}}}const a=new r,l=new s,u=new o,d=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,y=[],g=null,c=!1,m=null,v=null,x=null,M=null,w=null,C=null,L=null,S=!1,A=null,Y=null,V=null,I=null,F=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(D)[1]),J=Q>=1):D.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),J=Q>=2);let z=null,O={};const ue=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),B=new Lt().fromArray(ue),K=new Lt().fromArray(Z);function se(R,G,ee,de){const ge=new Uint8Array(4),Ye=t.createTexture();t.bindTexture(R,Ye),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<ee;Ke++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(G,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(G+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Ye}const ae={};ae[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),P(t.DEPTH_TEST),l.setFunc(Uf),Rt(!1),wt(gg),P(t.CULL_FACE),ke(ar);function P(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function Pe(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function be(R,G){return p[R]!==G?(t.bindFramebuffer(R,G),p[R]=G,i&&(R===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=G),R===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=G)),!0):!1}function le(R,G){let ee=y,de=!1;if(R)if(ee=_.get(G),ee===void 0&&(ee=[],_.set(G,ee)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(ee.length!==ge.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ye=0,Ke=ge.length;Ye<Ke;Ye++)ee[Ye]=t.COLOR_ATTACHMENT0+Ye;ee.length=ge.length,de=!0}}else ee[0]!==t.COLOR_ATTACHMENT0&&(ee[0]=t.COLOR_ATTACHMENT0,de=!0);else ee[0]!==t.BACK&&(ee[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Te(R){return g!==R?(t.useProgram(R),g=R,!0):!1}const We={[vs]:t.FUNC_ADD,[DA]:t.FUNC_SUBTRACT,[IA]:t.FUNC_REVERSE_SUBTRACT};if(i)We[xg]=t.MIN,We[Sg]=t.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(We[xg]=R.MIN_EXT,We[Sg]=R.MAX_EXT)}const ye={[UA]:t.ZERO,[NA]:t.ONE,[kA]:t.SRC_COLOR,[Qy]:t.SRC_ALPHA,[VA]:t.SRC_ALPHA_SATURATE,[BA]:t.DST_COLOR,[FA]:t.DST_ALPHA,[OA]:t.ONE_MINUS_SRC_COLOR,[Zy]:t.ONE_MINUS_SRC_ALPHA,[HA]:t.ONE_MINUS_DST_COLOR,[zA]:t.ONE_MINUS_DST_ALPHA};function ke(R,G,ee,de,ge,Ye,Ke,Nt){if(R===ar){c===!0&&(Pe(t.BLEND),c=!1);return}if(c===!1&&(P(t.BLEND),c=!0),R!==LA){if(R!==m||Nt!==S){if((v!==vs||w!==vs)&&(t.blendEquation(t.FUNC_ADD),v=vs,w=vs),Nt)switch(R){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.ONE,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,M=null,C=null,L=null,m=R,S=Nt}return}ge=ge||G,Ye=Ye||ee,Ke=Ke||de,(G!==v||ge!==w)&&(t.blendEquationSeparate(We[G],We[ge]),v=G,w=ge),(ee!==x||de!==M||Ye!==C||Ke!==L)&&(t.blendFuncSeparate(ye[ee],ye[de],ye[Ye],ye[Ke]),x=ee,M=de,C=Ye,L=Ke),m=R,S=!1}function Et(R,G){R.side===Ei?Pe(t.CULL_FACE):P(t.CULL_FACE);let ee=R.side===an;G&&(ee=!ee),Rt(ee),R.blending===Bs&&R.transparent===!1?ke(ar):ke(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const de=R.stencilWrite;u.setTest(de),de&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?P(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(R){A!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),A=R)}function wt(R){R!==CA?(P(t.CULL_FACE),R!==Y&&(R===gg?t.cullFace(t.BACK):R===RA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),Y=R}function _t(R){R!==V&&(J&&t.lineWidth(R),V=R)}function je(R,G,ee){R?(P(t.POLYGON_OFFSET_FILL),(I!==G||F!==ee)&&(t.polygonOffset(G,ee),I=G,F=ee)):Pe(t.POLYGON_OFFSET_FILL)}function ut(R){R?P(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Qt(R){R===void 0&&(R=t.TEXTURE0+j-1),z!==R&&(t.activeTexture(R),z=R)}function b(R,G,ee){ee===void 0&&(z===null?ee=t.TEXTURE0+j-1:ee=z);let de=O[ee];de===void 0&&(de={type:void 0,texture:void 0},O[ee]=de),(de.type!==R||de.texture!==G)&&(z!==ee&&(t.activeTexture(ee),z=ee),t.bindTexture(R,G||ae[R]),de.type=R,de.texture=G)}function E(){const R=O[z];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(R){B.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),B.copy(R))}function _e(R){K.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),K.copy(R))}function He(R,G){let ee=f.get(G);ee===void 0&&(ee=new WeakMap,f.set(G,ee));let de=ee.get(R);de===void 0&&(de=t.getUniformBlockIndex(G,R.name),ee.set(R,de))}function Xe(R,G){const de=f.get(G).get(R);d.get(G)!==de&&(t.uniformBlockBinding(G,de,R.__bindingPointIndex),d.set(G,de))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},z=null,O={},p={},_=new WeakMap,y=[],g=null,c=!1,m=null,v=null,x=null,M=null,w=null,C=null,L=null,S=!1,A=null,Y=null,V=null,I=null,F=null,B.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:P,disable:Pe,bindFramebuffer:be,drawBuffers:le,useProgram:Te,setBlending:ke,setMaterial:Et,setFlipSided:Rt,setCullFace:wt,setLineWidth:_t,setPolygonOffset:je,setScissorTest:ut,activeTexture:Qt,bindTexture:b,unbindTexture:E,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:X,texStorage3D:ve,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:Ae,compressedTexSubImage3D:me,scissor:pe,viewport:_e,reset:ft}}function x3(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const g=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,E){return c?new OffscreenCanvas(b,E):Au("canvas")}function v(b,E,H,ne){let ie=1;if((b.width>ne||b.height>ne)&&(ie=ne/Math.max(b.width,b.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=E?Tb:Math.floor,Ae=ce(ie*b.width),me=ce(ie*b.height);y===void 0&&(y=m(Ae,me));const X=H?m(Ae,me):y;return X.width=Ae,X.height=me,X.getContext("2d").drawImage(b,0,0,Ae,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ae+"x"+me+")."),X}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return qg(b.width)&&qg(b.height)}function M(b){return a?!1:b.wrapS!==Wn||b.wrapT!==Wn||b.minFilter!==Xt&&b.minFilter!==An}function w(b,E){return b.generateMipmaps&&E&&b.minFilter!==Xt&&b.minFilter!==An}function C(b){t.generateMipmap(b)}function L(b,E,H,ne,ie=!1){if(a===!1)return E;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;return E===t.RED&&(H===t.FLOAT&&(ce=t.R32F),H===t.HALF_FLOAT&&(ce=t.R16F),H===t.UNSIGNED_BYTE&&(ce=t.R8)),E===t.RG&&(H===t.FLOAT&&(ce=t.RG32F),H===t.HALF_FLOAT&&(ce=t.RG16F),H===t.UNSIGNED_BYTE&&(ce=t.RG8)),E===t.RGBA&&(H===t.FLOAT&&(ce=t.RGBA32F),H===t.HALF_FLOAT&&(ce=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ce=ne===Le&&ie===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(b,E,H){return w(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function A(b){return b===Xt||b===Mg||b===Qc?t.NEAREST:t.LINEAR}function Y(b){const E=b.target;E.removeEventListener("dispose",Y),I(E),E.isVideoTexture&&_.delete(E)}function V(b){const E=b.target;E.removeEventListener("dispose",V),j(E)}function I(b){const E=i.get(b);if(E.__webglInit===void 0)return;const H=b.source,ne=g.get(H);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(b),Object.keys(ne).length===0&&g.delete(H)}i.remove(b)}function F(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const H=b.source,ne=g.get(H);delete ne[E.__cacheKey],o.memory.textures--}function j(b){const E=b.texture,H=i.get(b),ne=i.get(E);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ce=E.length;ie<ce;ie++){const Ae=i.get(E[ie]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(b)}let J=0;function Q(){J=0}function D(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function z(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function O(b,E){const H=i.get(b);if(b.isVideoTexture&&ut(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,b,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function ue(b,E){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Pe(H,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function Z(b,E){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Pe(H,b,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function B(b,E){const H=i.get(b);if(b.version>0&&H.__version!==b.version){be(H,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const K={[Of]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Ff]:t.MIRRORED_REPEAT},se={[Xt]:t.NEAREST,[Mg]:t.NEAREST_MIPMAP_NEAREST,[Qc]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[ib]:t.LINEAR_MIPMAP_NEAREST,[_a]:t.LINEAR_MIPMAP_LINEAR};function ae(b,E,H){if(H?(t.texParameteri(b,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,K[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,se[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,se[E.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Xt&&E.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Xt||E.minFilter!==Qc&&E.minFilter!==_a||E.type===Ur&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function P(b,E){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",Y));const ne=E.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const ce=z(E);if(ce!==b.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[ce].usedTimes++;const Ae=ie[b.__cacheKey];Ae!==void 0&&(ie[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&F(E)),b.__cacheKey=ce,b.__webglTexture=ie[ce].texture}return H}function Pe(b,E,H){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=P(b,E),ce=E.source;n.bindTexture(ne,b.__webglTexture,t.TEXTURE0+H);const Ae=i.get(ce);if(ce.version!==Ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const me=M(E)&&x(E.image)===!1;let X=v(E.image,me,!1,d);X=Qt(E,X);const ve=x(X)||a,xe=s.convert(E.format,E.colorSpace);let Ee=s.convert(E.type),pe=L(E.internalFormat,xe,Ee,E.colorSpace);ae(ne,E,ve);let _e;const He=E.mipmaps,Xe=a&&E.isVideoTexture!==!0,ft=Ae.__version===void 0||ie===!0,R=S(E,X,ve);if(E.isDepthTexture)pe=t.DEPTH_COMPONENT,a?E.type===Ur?pe=t.DEPTH_COMPONENT32F:E.type===Ir?pe=t.DEPTH_COMPONENT24:E.type===Hs?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:E.type===Ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Or&&pe===t.DEPTH_COMPONENT&&E.type!==tx&&E.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ir,Ee=s.convert(E.type)),E.format===Js&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,E.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Hs,Ee=s.convert(E.type))),ft&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,pe,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,pe,X.width,X.height,0,xe,Ee,null));else if(E.isDataTexture)if(He.length>0&&ve){Xe&&ft&&n.texStorage2D(t.TEXTURE_2D,R,pe,He[0].width,He[0].height);for(let G=0,ee=He.length;G<ee;G++)_e=He[G],Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,xe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,G,pe,_e.width,_e.height,0,xe,Ee,_e.data);E.generateMipmaps=!1}else Xe?(ft&&n.texStorage2D(t.TEXTURE_2D,R,pe,X.width,X.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,X.width,X.height,xe,Ee,X.data)):n.texImage2D(t.TEXTURE_2D,0,pe,X.width,X.height,0,xe,Ee,X.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,R,pe,He[0].width,He[0].height,X.depth);for(let G=0,ee=He.length;G<ee;G++)_e=He[G],E.format!==jn?xe!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,X.depth,xe,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,pe,_e.width,_e.height,X.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,X.depth,xe,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,pe,_e.width,_e.height,X.depth,0,xe,Ee,_e.data)}else{Xe&&ft&&n.texStorage2D(t.TEXTURE_2D,R,pe,He[0].width,He[0].height);for(let G=0,ee=He.length;G<ee;G++)_e=He[G],E.format!==jn?xe!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,G,pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e.width,_e.height,xe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,G,pe,_e.width,_e.height,0,xe,Ee,_e.data)}else if(E.isDataArrayTexture)Xe?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,R,pe,X.width,X.height,X.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,xe,Ee,X.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,X.width,X.height,X.depth,0,xe,Ee,X.data);else if(E.isData3DTexture)Xe?(ft&&n.texStorage3D(t.TEXTURE_3D,R,pe,X.width,X.height,X.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,xe,Ee,X.data)):n.texImage3D(t.TEXTURE_3D,0,pe,X.width,X.height,X.depth,0,xe,Ee,X.data);else if(E.isFramebufferTexture){if(ft)if(Xe)n.texStorage2D(t.TEXTURE_2D,R,pe,X.width,X.height);else{let G=X.width,ee=X.height;for(let de=0;de<R;de++)n.texImage2D(t.TEXTURE_2D,de,pe,G,ee,0,xe,Ee,null),G>>=1,ee>>=1}}else if(He.length>0&&ve){Xe&&ft&&n.texStorage2D(t.TEXTURE_2D,R,pe,He[0].width,He[0].height);for(let G=0,ee=He.length;G<ee;G++)_e=He[G],Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe,Ee,_e):n.texImage2D(t.TEXTURE_2D,G,pe,xe,Ee,_e);E.generateMipmaps=!1}else Xe?(ft&&n.texStorage2D(t.TEXTURE_2D,R,pe,X.width,X.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ee,X)):n.texImage2D(t.TEXTURE_2D,0,pe,xe,Ee,X);w(E,ve)&&C(ne),Ae.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function be(b,E,H){if(E.image.length!==6)return;const ne=P(b,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const ce=i.get(ie);if(ie.version!==ce.__version||ne===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,X=[];for(let G=0;G<6;G++)!Ae&&!me?X[G]=v(E.image[G],!1,!0,u):X[G]=me?E.image[G].image:E.image[G],X[G]=Qt(E,X[G]);const ve=X[0],xe=x(ve)||a,Ee=s.convert(E.format,E.colorSpace),pe=s.convert(E.type),_e=L(E.internalFormat,Ee,pe,E.colorSpace),He=a&&E.isVideoTexture!==!0,Xe=ce.__version===void 0||ne===!0;let ft=S(E,ve,xe);ae(t.TEXTURE_CUBE_MAP,E,xe);let R;if(Ae){He&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,_e,ve.width,ve.height);for(let G=0;G<6;G++){R=X[G].mipmaps;for(let ee=0;ee<R.length;ee++){const de=R[ee];E.format!==jn?Ee!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,0,0,de.width,de.height,Ee,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,0,0,de.width,de.height,Ee,pe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,_e,de.width,de.height,0,Ee,pe,de.data)}}}else{R=E.mipmaps,He&&Xe&&(R.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,_e,X[0].width,X[0].height));for(let G=0;G<6;G++)if(me){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,X[G].width,X[G].height,Ee,pe,X[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,_e,X[G].width,X[G].height,0,Ee,pe,X[G].data);for(let ee=0;ee<R.length;ee++){const ge=R[ee].image[G].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,0,0,ge.width,ge.height,Ee,pe,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,_e,ge.width,ge.height,0,Ee,pe,ge.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ee,pe,X[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,_e,Ee,pe,X[G]);for(let ee=0;ee<R.length;ee++){const de=R[ee];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,0,0,Ee,pe,de.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,_e,Ee,pe,de.image[G])}}}w(E,xe)&&C(t.TEXTURE_CUBE_MAP),ce.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function le(b,E,H,ne,ie){const ce=s.convert(H.format,H.colorSpace),Ae=s.convert(H.type),me=L(H.internalFormat,ce,Ae,H.colorSpace);i.get(E).__hasExternalTextures||(ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,me,E.width,E.height,E.depth,0,ce,Ae,null):n.texImage2D(ie,0,me,E.width,E.height,0,ce,Ae,null)),n.bindFramebuffer(t.FRAMEBUFFER,b),je(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,i.get(H).__webglTexture,0,_t(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,i.get(H).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(b,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let ne=t.DEPTH_COMPONENT16;if(H||je(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ur?ne=t.DEPTH_COMPONENT32F:ie.type===Ir&&(ne=t.DEPTH_COMPONENT24));const ce=_t(E);je(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const ne=_t(E);H&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):je(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],Ae=s.convert(ce.format,ce.colorSpace),me=s.convert(ce.type),X=L(ce.internalFormat,Ae,me,ce.colorSpace),ve=_t(E);H&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,X,E.width,E.height):je(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,ie=_t(E);if(E.depthTexture.format===Or)je(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Js)je(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ye(b){const E=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,b)}else if(H){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),Te(E.__webglDepthbuffer[ne],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Te(E.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(b,E,H){const ne=i.get(b);E!==void 0&&le(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),H!==void 0&&ye(b)}function Et(b){const E=b.texture,H=i.get(b),ne=i.get(E);b.addEventListener("dispose",V),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,Ae=x(b)||a;if(ie){H.__webglFramebuffer=[];for(let me=0;me<6;me++)H.__webglFramebuffer[me]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const me=b.texture;for(let X=0,ve=me.length;X<ve;X++){const xe=i.get(me[X]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&je(b)===!1){const me=ce?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<me.length;X++){const ve=me[X];H.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[X]);const xe=s.convert(ve.format,ve.colorSpace),Ee=s.convert(ve.type),pe=L(ve.internalFormat,xe,Ee,ve.colorSpace,b.isXRRenderTarget===!0),_e=_t(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,H.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E,Ae);for(let me=0;me<6;me++)le(H.__webglFramebuffer[me],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me);w(E,Ae)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const me=b.texture;for(let X=0,ve=me.length;X<ve;X++){const xe=me[X],Ee=i.get(xe);n.bindTexture(t.TEXTURE_2D,Ee.__webglTexture),ae(t.TEXTURE_2D,xe,Ae),le(H.__webglFramebuffer,b,xe,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D),w(xe,Ae)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?me=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,ne.__webglTexture),ae(me,E,Ae),le(H.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,me),w(E,Ae)&&C(me),n.unbindTexture()}b.depthBuffer&&ye(b)}function Rt(b){const E=x(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,ie=H.length;ne<ie;ne++){const ce=H[ne];if(w(ce,E)){const Ae=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ce).__webglTexture;n.bindTexture(Ae,me),C(Ae),n.unbindTexture()}}}function wt(b){if(a&&b.samples>0&&je(b)===!1){const E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ne=b.height;let ie=t.COLOR_BUFFER_BIT;const ce=[],Ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),X=b.isWebGLMultipleRenderTargets===!0;if(X)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){ce.push(t.COLOR_ATTACHMENT0+ve),b.depthBuffer&&ce.push(Ae);const xe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(xe===!1&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),X&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ve]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),X){const Ee=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,ie,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);const xe=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function _t(b){return Math.min(f,b.samples)}function je(b){const E=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(b){const E=o.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function Qt(b,E){const H=b.colorSpace,ne=b.format,ie=b.type;return b.isCompressedTexture===!0||b.format===zf||H!==di&&H!==zr&&(H===Le?a===!1?e.has("EXT_sRGB")===!0&&ne===jn?(b.format=zf,b.minFilter=An,b.generateMipmaps=!1):E=sx.sRGBToLinear(E):(ne!==jn||ie!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=O,this.setTexture2DArray=ue,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=ke,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=je}function S3(t,e,n){const i=n.isWebGL2;function r(s,o=zr){let a;if(s===Xr)return t.UNSIGNED_BYTE;if(s===ab)return t.UNSIGNED_SHORT_4_4_4_4;if(s===lb)return t.UNSIGNED_SHORT_5_5_5_1;if(s===rb)return t.BYTE;if(s===sb)return t.SHORT;if(s===tx)return t.UNSIGNED_SHORT;if(s===ob)return t.INT;if(s===Ir)return t.UNSIGNED_INT;if(s===Ur)return t.FLOAT;if(s===ya)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ub)return t.ALPHA;if(s===jn)return t.RGBA;if(s===cb)return t.LUMINANCE;if(s===db)return t.LUMINANCE_ALPHA;if(s===Or)return t.DEPTH_COMPONENT;if(s===Js)return t.DEPTH_STENCIL;if(s===zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===fb)return t.RED;if(s===hb)return t.RED_INTEGER;if(s===pb)return t.RG;if(s===mb)return t.RG_INTEGER;if(s===gb)return t.RGBA_INTEGER;if(s===Zc||s===Jc||s===ed||s===td)if(o===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eg||s===wg||s===Tg||s===Ag)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ag)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bg||s===Cg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bg)return o===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rg||s===Pg||s===Lg||s===Dg||s===Ig||s===Ug||s===Ng||s===kg||s===Og||s===Fg||s===zg||s===Bg||s===Hg||s===Vg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ig)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ug)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ng)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Og)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vg)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nd)return o===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===_b||s===Gg||s===Wg||s===jg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class M3 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ul extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E3={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),c=this._getHandJoint(u,y);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=g.radius),c.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class w3 extends ln{constructor(e,n,i,r,s,o,a,l,u,d){if(d=d!==void 0?d:Or,d!==Or&&d!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Or&&(i=Ir),i===void 0&&d===Js&&(i=Hs),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1}}class T3 extends oo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,_=null;const y=n.getContextAttributes();let g=null,c=null;const m=[],v=[],x=new Set,M=new Map,w=new bn;w.layers.enable(1),w.viewport=new Lt;const C=new bn;C.layers.enable(2),C.viewport=new Lt;const L=[w,C],S=new M3;S.layers.enable(1),S.layers.enable(2);let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=m[B];return K===void 0&&(K=new Ad,m[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=m[B];return K===void 0&&(K=new Ad,m[B]=K),K.getGripSpace()},this.getHand=function(B){let K=m[B];return K===void 0&&(K=new Ad,m[B]=K),K.getHandSpace()};function V(B){const K=v.indexOf(B.inputSource);if(K===-1)return;const se=m[K];se!==void 0&&se.dispatchEvent({type:B.type,data:B.inputSource})}function I(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let B=0;B<m.length;B++){const K=v[B];K!==null&&(v[B]=null,m[B].disconnect(K))}A=null,Y=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,c=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),c=new qr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Xr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,se=null,ae=null;y.depth&&(ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?Js:Or,se=y.stencil?Hs:Ir);const P={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(P),r.updateRenderState({layers:[h]}),c=new qr(h.textureWidth,h.textureHeight,{format:jn,type:Xr,depthTexture:new w3(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Pe=e.properties.get(c);Pe.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(B){for(let K=0;K<B.removed.length;K++){const se=B.removed[K],ae=v.indexOf(se);ae>=0&&(v[ae]=null,m[ae].disconnect(se))}for(let K=0;K<B.added.length;K++){const se=B.added[K];let ae=v.indexOf(se);if(ae===-1){for(let Pe=0;Pe<m.length;Pe++)if(Pe>=v.length){v.push(se),ae=Pe;break}else if(v[Pe]===null){v[Pe]=se,ae=Pe;break}if(ae===-1)break}const P=m[ae];P&&P.connect(se)}}const j=new k,J=new k;function Q(B,K,se){j.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);const ae=j.distanceTo(J),P=K.projectionMatrix.elements,Pe=se.projectionMatrix.elements,be=P[14]/(P[10]-1),le=P[14]/(P[10]+1),Te=(P[9]+1)/P[5],We=(P[9]-1)/P[5],ye=(P[8]-1)/P[0],ke=(Pe[8]+1)/Pe[0],Et=be*ye,Rt=be*ke,wt=ae/(-ye+ke),_t=wt*-ye;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(_t),B.translateZ(wt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const je=be+wt,ut=le+wt,Qt=Et-_t,b=Rt+(ae-_t),E=Te*le/ut*je,H=We*le/ut*je;B.projectionMatrix.makePerspective(Qt,b,E,H,je,ut),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function D(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;S.near=C.near=w.near=B.near,S.far=C.far=w.far=B.far,(A!==S.near||Y!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,Y=S.far);const K=B.parent,se=S.cameras;D(S,K);for(let ae=0;ae<se.length;ae++)D(se[ae],K);se.length===2?Q(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),z(B,S,K)};function z(B,K,se){se===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(se.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const ae=B.children;for(let P=0,Pe=ae.length;P<Pe;P++)ae[P].updateMatrixWorld(!0);B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Bf*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.getPlanes=function(){return x};let O=null;function ue(B,K){if(d=K.getViewerPose(u||o),_=K,d!==null){const se=d.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let ae=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let P=0;P<se.length;P++){const Pe=se[P];let be=null;if(p!==null)be=p.getViewport(Pe);else{const Te=f.getViewSubImage(h,Pe);be=Te.viewport,P===0&&(e.setRenderTargetTextures(c,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(c))}let le=L[P];le===void 0&&(le=new bn,le.layers.enable(P),le.viewport=new Lt,L[P]=le),le.matrix.fromArray(Pe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Pe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(be.x,be.y,be.width,be.height),P===0&&(S.matrix.copy(le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(le)}}for(let se=0;se<m.length;se++){const ae=v[se],P=m[se];ae!==null&&P!==void 0&&P.update(ae,K,u||o)}if(O&&O(B,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let se=null;for(const ae of x)K.detectedPlanes.has(ae)||(se===null&&(se=[]),se.push(ae));if(se!==null)for(const ae of se)x.delete(ae),M.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of K.detectedPlanes)if(!x.has(ae))x.add(ae),M.set(ae,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const P=M.get(ae);ae.lastChangedTime>P&&(M.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const Z=new gx;Z.setAnimationLoop(ue),this.setAnimationLoop=function(B){O=B},this.dispose=function(){}}}function A3(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,fx(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,m,v,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(g,c):c.isMeshToonMaterial?(s(g,c),f(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c)):c.isMeshStandardMaterial?(s(g,c),h(g,c),c.isMeshPhysicalMaterial&&p(g,c,x)):c.isMeshMatcapMaterial?(s(g,c),_(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),y(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(o(g,c),c.isLineDashedMaterial&&a(g,c)):c.isPointsMaterial?l(g,c,m,v):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===an&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===an&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap){g.lightMap.value=c.lightMap;const v=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=c.lightMapIntensity*v,n(c.lightMap,g.lightMapTransform)}c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function o(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function a(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,v){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=v*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function f(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function h(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),e.get(c).envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,m){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&g.clearcoatNormalScale.value.negate())),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,c){c.matcap&&(g.matcap.value=c.matcap)}function y(g,c){const m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b3(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const x=v.program;i.uniformBlockBinding(m,x)}function u(m,v){let x=r[m.id];x===void 0&&(_(m),x=d(m),r[m.id]=x,m.addEventListener("dispose",g));const M=v.program;i.updateUBOMapping(m,M);const w=e.render.frame;s[m.id]!==w&&(h(m),s[m.id]=w)}function d(m){const v=f();m.__bindingPointIndex=v;const x=t.createBuffer(),M=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],x=m.uniforms,M=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,C=x.length;w<C;w++){const L=x[w];if(p(L,w,M)===!0){const S=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let V=0;V<A.length;V++){const I=A[V],F=y(I);typeof I=="number"?(L.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,S+Y,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,x){const M=m.value;if(x[v]===void 0){if(typeof M=="number")x[v]=M;else{const w=Array.isArray(M)?M:[M],C=[];for(let L=0;L<w.length;L++)C.push(w[L].clone());x[v]=C}return!0}else if(typeof M=="number"){if(x[v]!==M)return x[v]=M,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],C=Array.isArray(M)?M:[M];for(let L=0;L<w.length;L++){const S=w[L];if(S.equals(C[L])===!1)return S.copy(C[L]),!0}}return!1}function _(m){const v=m.uniforms;let x=0;const M=16;let w=0;for(let C=0,L=v.length;C<L;C++){const S=v[C],A={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let V=0,I=Y.length;V<I;V++){const F=Y[V],j=y(F);A.boundary+=j.boundary,A.storage+=j.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,C>0){w=x%M;const V=M-w;w!==0&&V-A.boundary<0&&(x+=M-w,S.__offset=x)}x+=A.storage}return w=x%M,w>0&&(x+=M-w),m.__size=x,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function C3(){const t=Au("canvas");return t.style.display="block",t}class Sx{constructor(e={}){const{canvas:n=C3(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,_=null;const y=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=Ci,this.toneMappingExposure=1;const c=this;let m=!1,v=0,x=0,M=null,w=-1,C=null;const L=new Lt,S=new Lt;let A=null,Y=n.width,V=n.height,I=1,F=null,j=null;const J=new Lt(0,0,Y,V),Q=new Lt(0,0,Y,V);let D=!1;const z=new mx;let O=!1,ue=!1,Z=null;const B=new It,K=new k,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?I:1}let P=i;function Pe(T,N){for(let W=0;W<T.length;W++){const U=T[W],q=n.getContext(U,N);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),P===null){const N=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&N.shift(),P=Pe(N,T),P===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,le,Te,We,ye,ke,Et,Rt,wt,_t,je,ut,Qt,b,E,H,ne,ie,ce,Ae,me,X,ve,xe;function Ee(){be=new zP(P),le=new DP(P,be,e),be.init(le),X=new S3(P,be,le),Te=new y3(P,be,le),We=new VP(P),ye=new s3,ke=new x3(P,be,Te,ye,le,X,We),Et=new UP(c),Rt=new FP(c),wt=new Jb(P,le),ve=new PP(P,be,wt,le),_t=new BP(P,wt,We,ve),je=new $P(P,_t,wt,We),ce=new jP(P,le,ke),H=new IP(ye),ut=new r3(c,Et,Rt,be,le,ve,H),Qt=new A3(c,ye),b=new a3,E=new h3(be,le),ie=new RP(c,Et,Rt,Te,je,h,l),ne=new _3(c,je,le),xe=new b3(P,We,le,Te),Ae=new LP(P,be,We,le),me=new HP(P,be,We,le),We.programs=ut.programs,c.capabilities=le,c.extensions=be,c.properties=ye,c.renderLists=b,c.shadowMap=ne,c.state=Te,c.info=We}Ee();const pe=new T3(c,P);this.xr=pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(Y,V,!1))},this.getSize=function(T){return T.set(Y,V)},this.setSize=function(T,N,W=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,V=N,n.width=Math.floor(T*I),n.height=Math.floor(N*I),W===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Y*I,V*I).floor()},this.setDrawingBufferSize=function(T,N,W){Y=T,V=N,I=W,n.width=Math.floor(T*W),n.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,N,W,U){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,N,W,U),Te.viewport(L.copy(J).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,N,W,U){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,N,W,U),Te.scissor(S.copy(Q).multiplyScalar(I).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(T){Te.setScissorTest(D=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(T=!0,N=!0,W=!0){let U=0;T&&(U|=P.COLOR_BUFFER_BIT),N&&(U|=P.DEPTH_BUFFER_BIT),W&&(U|=P.STENCIL_BUFFER_BIT),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),b.dispose(),E.dispose(),ye.dispose(),Et.dispose(),Rt.dispose(),je.dispose(),ve.dispose(),xe.dispose(),ut.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ge),pe.removeEventListener("sessionend",Ye),Z&&(Z.dispose(),Z=null),Ke.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=We.autoReset,N=ne.enabled,W=ne.autoUpdate,U=ne.needsUpdate,q=ne.type;Ee(),We.autoReset=T,ne.enabled=N,ne.autoUpdate=W,ne.needsUpdate=U,ne.type=q}function Xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ft(T){const N=T.target;N.removeEventListener("dispose",ft),R(N)}function R(T){G(T),ye.remove(T)}function G(T){const N=ye.get(T).programs;N!==void 0&&(N.forEach(function(W){ut.releaseProgram(W)}),T.isShaderMaterial&&ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,U,q,Se){N===null&&(N=se);const we=q.isMesh&&q.matrixWorld.determinant()<0,Ce=Ex(T,N,W,U,q);Te.setMaterial(U,we);let De=W.index,Ue=1;U.wireframe===!0&&(De=_t.getWireframeAttribute(W),Ue=2);const Ne=W.drawRange,Oe=W.attributes.position;let qe=Ne.start*Ue,Gt=(Ne.start+Ne.count)*Ue;Se!==null&&(qe=Math.max(qe,Se.start*Ue),Gt=Math.min(Gt,(Se.start+Se.count)*Ue)),De!==null?(qe=Math.max(qe,0),Gt=Math.min(Gt,De.count)):Oe!=null&&(qe=Math.max(qe,0),Gt=Math.min(Gt,Oe.count));const In=Gt-qe;if(In<0||In===1/0)return;ve.setup(q,U,Ce,W,De);let mr,mt=Ae;if(De!==null&&(mr=wt.get(De),mt=me,mt.setIndex(mr)),q.isMesh)U.wireframe===!0?(Te.setLineWidth(U.wireframeLinewidth*ae()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(q.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Te.setLineWidth(Ve*ae()),q.isLineSegments?mt.setMode(P.LINES):q.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else q.isPoints?mt.setMode(P.POINTS):q.isSprite&&mt.setMode(P.TRIANGLES);if(q.isInstancedMesh)mt.renderInstances(qe,In,q.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,cc=Math.min(W.instanceCount,Ve);mt.renderInstances(qe,In,cc)}else mt.render(qe,In)},this.compile=function(T,N){function W(U,q,Se){U.transparent===!0&&U.side===Ei&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,za(U,q,Se),U.side=cr,U.needsUpdate=!0,za(U,q,Se),U.side=Ei):za(U,q,Se)}_=E.get(T),_.init(),g.push(_),T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(c.useLegacyLights),T.traverse(function(U){const q=U.material;if(q)if(Array.isArray(q))for(let Se=0;Se<q.length;Se++){const we=q[Se];W(we,T,U)}else W(q,T,U)}),g.pop(),_=null};let ee=null;function de(T){ee&&ee(T)}function ge(){Ke.stop()}function Ye(){Ke.start()}const Ke=new gx;Ke.setAnimationLoop(de),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){ee=T,pe.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},pe.addEventListener("sessionstart",ge),pe.addEventListener("sessionend",Ye),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(N),N=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(c,T,N,M),_=E.get(T,g.length),_.init(),g.push(_),B.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(B),ue=this.localClippingEnabled,O=H.init(this.clippingPlanes,ue),p=b.get(T,y.length),p.init(),y.push(p),Nt(T,N,0,c.sortObjects),p.finish(),c.sortObjects===!0&&p.sort(F,j),O===!0&&H.beginShadows();const W=_.state.shadowsArray;if(ne.render(W,T,N),O===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,T),_.setupLights(c.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let q=0,Se=U.length;q<Se;q++){const we=U[q];Ui(p,T,we,we.viewport)}}else Ui(p,T,N);M!==null&&(ke.updateMultisampleRenderTarget(M),ke.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(c,T,N),ve.resetDefaultState(),w=-1,C=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Nt(T,N,W,U){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||z.intersectsSprite(T)){U&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const we=je.update(T),Ce=T.material;Ce.visible&&p.push(T,we,Ce,W,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||z.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==We.render.frame&&(T.skeleton.update(),T.skeleton.frame=We.render.frame);const we=je.update(T),Ce=T.material;if(U&&(we.boundingSphere===null&&we.computeBoundingSphere(),K.copy(we.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(B)),Array.isArray(Ce)){const De=we.groups;for(let Ue=0,Ne=De.length;Ue<Ne;Ue++){const Oe=De[Ue],qe=Ce[Oe.materialIndex];qe&&qe.visible&&p.push(T,we,qe,W,K.z,Oe)}}else Ce.visible&&p.push(T,we,Ce,W,K.z,null)}}const Se=T.children;for(let we=0,Ce=Se.length;we<Ce;we++)Nt(Se[we],N,W,U)}function Ui(T,N,W,U){const q=T.opaque,Se=T.transmissive,we=T.transparent;_.setupLightsView(W),O===!0&&H.setGlobalState(c.clippingPlanes,W),Se.length>0&&ht(q,Se,N,W),U&&Te.viewport(L.copy(U)),q.length>0&&Sn(q,N,W),Se.length>0&&Sn(Se,N,W),we.length>0&&Sn(we,N,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ht(T,N,W,U){if(Z===null){const Ce=le.isWebGL2;Z=new qr(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ya:Xr,minFilter:_a,samples:Ce&&a===!0?4:0})}const q=c.getRenderTarget();c.setRenderTarget(Z),c.clear();const Se=c.toneMapping;c.toneMapping=Ci,Sn(T,W,U),ke.updateMultisampleRenderTarget(Z),ke.updateRenderTargetMipmap(Z);let we=!1;for(let Ce=0,De=N.length;Ce<De;Ce++){const Ue=N[Ce],Ne=Ue.object,Oe=Ue.geometry,qe=Ue.material,Gt=Ue.group;if(qe.side===Ei&&Ne.layers.test(U.layers)){const In=qe.side;qe.side=an,qe.needsUpdate=!0,Qn(Ne,W,U,Oe,qe,Gt),qe.side=In,qe.needsUpdate=!0,we=!0}}we===!0&&(ke.updateMultisampleRenderTarget(Z),ke.updateRenderTargetMipmap(Z)),c.setRenderTarget(q),c.toneMapping=Se}function Sn(T,N,W){const U=N.isScene===!0?N.overrideMaterial:null;for(let q=0,Se=T.length;q<Se;q++){const we=T[q],Ce=we.object,De=we.geometry,Ue=U===null?we.material:U,Ne=we.group;Ce.layers.test(W.layers)&&Qn(Ce,N,W,De,Ue,Ne)}}function Qn(T,N,W,U,q,Se){T.onBeforeRender(c,N,W,U,q,Se),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(c,N,W,U,T,Se),q.transparent===!0&&q.side===Ei&&q.forceSinglePass===!1?(q.side=an,q.needsUpdate=!0,c.renderBufferDirect(W,N,U,q,T,Se),q.side=cr,q.needsUpdate=!0,c.renderBufferDirect(W,N,U,q,T,Se),q.side=Ei):c.renderBufferDirect(W,N,U,q,T,Se),T.onAfterRender(c,N,W,U,q,Se)}function za(T,N,W){N.isScene!==!0&&(N=se);const U=ye.get(T),q=_.state.lights,Se=_.state.shadowsArray,we=q.state.version,Ce=ut.getParameters(T,q.state,Se,N,W),De=ut.getProgramCacheKey(Ce);let Ue=U.programs;U.environment=T.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(T.isMeshStandardMaterial?Rt:Et).get(T.envMap||U.environment),Ue===void 0&&(T.addEventListener("dispose",ft),Ue=new Map,U.programs=Ue);let Ne=Ue.get(De);if(Ne!==void 0){if(U.currentProgram===Ne&&U.lightsStateVersion===we)return hp(T,Ce),Ne}else Ce.uniforms=ut.getUniforms(T),T.onBuild(W,Ce,c),T.onBeforeCompile(Ce,c),Ne=ut.acquireProgram(Ce,De),Ue.set(De,Ne),U.uniforms=Ce.uniforms;const Oe=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=H.uniform),hp(T,Ce),U.needsLights=Tx(T),U.lightsStateVersion=we,U.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix);const qe=Ne.getUniforms(),Gt=Yl.seqWithValue(qe.seq,Oe);return U.currentProgram=Ne,U.uniformsList=Gt,Ne}function hp(T,N){const W=ye.get(T);W.outputColorSpace=N.outputColorSpace,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ex(T,N,W,U,q){N.isScene!==!0&&(N=se),ke.resetTextureUnits();const Se=N.fog,we=U.isMeshStandardMaterial?N.environment:null,Ce=M===null?c.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:di,De=(U.isMeshStandardMaterial?Rt:Et).get(U.envMap||we),Ue=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!U.normalMap&&!!W.attributes.tangent,Oe=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,Gt=!!W.morphAttributes.color,In=U.toneMapped?c.toneMapping:Ci,mr=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=mr!==void 0?mr.length:0,Ve=ye.get(U),cc=_.state.lights;if(O===!0&&(ue===!0||T!==C)){const un=T===C&&U.id===w;H.setState(U,T,un)}let Tt=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==cc.state.version||Ve.outputColorSpace!==Ce||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==De||U.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==H.numPlanes||Ve.numIntersection!==H.numIntersection)||Ve.vertexAlphas!==Ue||Ve.vertexTangents!==Ne||Ve.morphTargets!==Oe||Ve.morphNormals!==qe||Ve.morphColors!==Gt||Ve.toneMapping!==In||le.isWebGL2===!0&&Ve.morphTargetsCount!==mt)&&(Tt=!0):(Tt=!0,Ve.__version=U.version);let gr=Ve.currentProgram;Tt===!0&&(gr=za(U,N,q));let pp=!1,lo=!1,dc=!1;const Wt=gr.getUniforms(),vr=Ve.uniforms;if(Te.useProgram(gr.program)&&(pp=!0,lo=!0,dc=!0),U.id!==w&&(w=U.id,lo=!0),pp||C!==T){if(Wt.setValue(P,"projectionMatrix",T.projectionMatrix),le.logarithmicDepthBuffer&&Wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),C!==T&&(C=T,lo=!0,dc=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const un=Wt.map.cameraPosition;un!==void 0&&un.setValue(P,K.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||q.isSkinnedMesh)&&Wt.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Wt.setOptional(P,q,"bindMatrix"),Wt.setOptional(P,q,"bindMatrixInverse");const un=q.skeleton;un&&(le.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Wt.setValue(P,"boneTexture",un.boneTexture,ke),Wt.setValue(P,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fc=W.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&le.isWebGL2===!0)&&ce.update(q,W,gr),(lo||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,Wt.setValue(P,"receiveShadow",q.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(vr.envMap.value=De,vr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),lo&&(Wt.setValue(P,"toneMappingExposure",c.toneMappingExposure),Ve.needsLights&&wx(vr,dc),Se&&U.fog===!0&&Qt.refreshFogUniforms(vr,Se),Qt.refreshMaterialUniforms(vr,U,I,V,Z),Yl.upload(P,Ve.uniformsList,vr,ke)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Yl.upload(P,Ve.uniformsList,vr,ke),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Wt.setValue(P,"center",q.center),Wt.setValue(P,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(P,"normalMatrix",q.normalMatrix),Wt.setValue(P,"modelMatrix",q.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const un=U.uniformsGroups;for(let hc=0,Ax=un.length;hc<Ax;hc++)if(le.isWebGL2){const mp=un[hc];xe.update(mp,gr),xe.bind(mp,gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gr}function wx(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Tx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,N,W){ye.get(T.texture).__webglTexture=N,ye.get(T.depthTexture).__webglTexture=W;const U=ye.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const W=ye.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){M=T,v=N,x=W;let U=!0,q=null,Se=!1,we=!1;if(T){const De=ye.get(T);De.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):De.__webglFramebuffer===void 0?ke.setupRenderTarget(T):De.__hasExternalTextures&&ke.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Ne=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ne[N],Se=!0):le.isWebGL2&&T.samples>0&&ke.useMultisampledRTT(T)===!1?q=ye.get(T).__webglMultisampledFramebuffer:q=Ne,L.copy(T.viewport),S.copy(T.scissor),A=T.scissorTest}else L.copy(J).multiplyScalar(I).floor(),S.copy(Q).multiplyScalar(I).floor(),A=D;if(Te.bindFramebuffer(P.FRAMEBUFFER,q)&&le.drawBuffers&&U&&Te.drawBuffers(T,q),Te.viewport(L),Te.scissor(S),Te.setScissorTest(A),Se){const De=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,W)}else if(we){const De=ye.get(T.texture),Ue=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,W||0,Ue)}w=-1},this.readRenderTargetPixels=function(T,N,W,U,q,Se,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){Te.bindFramebuffer(P.FRAMEBUFFER,Ce);try{const De=T.texture,Ue=De.format,Ne=De.type;if(Ue!==jn&&X.convert(Ue)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===ya&&(be.has("EXT_color_buffer_half_float")||le.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ne!==Xr&&X.convert(Ne)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Ur&&(le.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-U&&W>=0&&W<=T.height-q&&P.readPixels(N,W,U,q,X.convert(Ue),X.convert(Ne),Se)}finally{const De=M!==null?ye.get(M).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,N,W=0){const U=Math.pow(2,-W),q=Math.floor(N.image.width*U),Se=Math.floor(N.image.height*U);ke.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,T.x,T.y,q,Se),Te.unbindTexture()},this.copyTextureToTexture=function(T,N,W,U=0){const q=N.image.width,Se=N.image.height,we=X.convert(W.format),Ce=X.convert(W.type);ke.setTexture2D(W,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,T.x,T.y,q,Se,we,Ce,N.image.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,we,N.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,T.x,T.y,we,Ce,N.image),U===0&&W.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W,U,q=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,De=X.convert(U.format),Ue=X.convert(U.type);let Ne;if(U.isData3DTexture)ke.setTexture3D(U,0),Ne=P.TEXTURE_3D;else if(U.isDataArrayTexture)ke.setTexture2DArray(U,0),Ne=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Oe=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Gt=P.getParameter(P.UNPACK_SKIP_PIXELS),In=P.getParameter(P.UNPACK_SKIP_ROWS),mr=P.getParameter(P.UNPACK_SKIP_IMAGES),mt=W.isCompressedTexture?W.mipmaps[0]:W.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?P.texSubImage3D(Ne,q,N.x,N.y,N.z,Se,we,Ce,De,Ue,mt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ne,q,N.x,N.y,N.z,Se,we,Ce,De,mt.data)):P.texSubImage3D(Ne,q,N.x,N.y,N.z,Se,we,Ce,De,Ue,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,In),P.pixelStorei(P.UNPACK_SKIP_IMAGES,mr),q===0&&U.generateMipmaps&&P.generateMipmap(Ne),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,Te.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Fr:nx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?Le:di}}class R3 extends Sx{}R3.prototype.isWebGL1Renderer=!0;class P3 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class L3 extends ln{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fp extends pr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const d=[],f=new k,h=new k,p=[],_=[],y=[],g=[];for(let c=0;c<=i;c++){const m=[],v=c/i;let x=0;c===0&&o===0?x=.5/n:c===i&&l===Math.PI&&(x=-.5/n);for(let M=0;M<=n;M++){const w=M/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(w+x,1-v),m.push(u++)}d.push(m)}for(let c=0;c<i;c++)for(let m=0;m<n;m++){const v=d[c][m+1],x=d[c][m],M=d[c+1][m],w=d[c+1][m+1];(c!==0||o>0)&&p.push(v,x,w),(c!==i-1||l<Math.PI)&&p.push(x,M,w)}this.setIndex(p),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);let Lo,bu,Do,Vf=[];function D3(){Lo=new bn(45,window.innerWidth/window.innerHeight,1,1e3),Lo.position.z=1,bu=new P3;const t=document.createElement("canvas"),e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;let n=e.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#000000"),n.addColorStop(1,"#000005"),e.fillStyle=n,e.fillRect(0,0,window.innerWidth,window.innerHeight);const i=new L3(t);bu.background=i,Do=new Sx,Do.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Do.domElement),window.addEventListener("resize",function(){Do.setSize(window.innerWidth,window.innerHeight),Lo.aspect=window.innerWidth/window.innerHeight,Lo.updateProjectionMatrix(),t.width=window.innerWidth,t.height=window.innerHeight,n=e.createLinearGradient(0,0,0,t.height),n.addColorStop(0,"#000000"),n.addColorStop(1,"#000005"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height)})}function I3(){for(let t=-2e4;t<2e4;t+=60){let e=new fp(.5,32,32),n=new up({color:16777215}),i=new Ai(e,n);i.position.x=Math.random()*1e3-500,i.position.y=Math.random()*1e3-500,i.position.z=t,i.scale.x=i.scale.y=1,bu.add(i),Vf.push(i)}}function U3(){for(let t=0;t<Vf.length;t++){let e=Vf[t];e.position.z+=t/150,e.position.z>1e3&&(e.position.z-=2e3)}}function Mx(){requestAnimationFrame(Mx),Do.render(bu,Lo),U3()}D3();I3();Mx();
