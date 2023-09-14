"use strict";(self.webpackChunkbuysaleacademy=self.webpackChunkbuysaleacademy||[]).push([[536],{7536:(e,t,r)=>{r.d(t,{Gc:()=>k,RV:()=>D,cI:()=>De,qo:()=>N});var s=r(7294),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(f&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||d(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e}return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,v=(e,t,r)=>{if(!t||!u(e))return r;const s=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return h(s)||s===e?h(e[t])?r:e[t]:s};const g={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},b="max",_="min",V="maxLength",A="minLength",w="pattern",S="required",x="validate",F=s.createContext(null),k=()=>s.useContext(F),D=e=>{const{children:t,...r}=e;return s.createElement(F.Provider,{value:r},t)};var O=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==p.all&&(t._proxyFormState[a]=!s||p.all),r&&(r[a]=!0),e[a]}});return a},C=e=>u(e)&&!Object.keys(e).length,E=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return C(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||p.all)))},T=e=>Array.isArray(e)?e:[e],U=(e,t,r)=>r&&t?e===t:!e||!t||e===t||T(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function L(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var j=e=>"string"==typeof e,B=(e,t,r,s,a)=>j(e)?(s&&t.watch.add(e),v(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),v(r,e)))):(s&&(t.watchAll=!0),r);function N(e){const t=k(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},u=s.useRef(a);u.current=a,L({disabled:i,subject:r._subjects.values,next:e=>{U(u.current,e.name,o)&&c(y(B(u.current,r._names,e.values||r._formValues,!1,n)))}});const[l,c]=s.useState(r._getWatch(a,n));return s.useEffect((()=>r._removeUnmounted())),l}var M=e=>/^\w*$/.test(e),q=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/));function R(e,t,r){let s=-1;const a=M(t)?[t]:q(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}var P=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{};const W=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=v(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&W(s,t)}}};var H=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),I=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),$=(e,t,r)=>{const s=m(v(e,r));return R(s,"root",t[r]),R(e,r,s),e},G=e=>"boolean"==typeof e,z=e=>"file"===e.type,J=e=>"function"==typeof e,K=e=>{if(!f)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Q=e=>j(e),X=e=>"radio"===e.type,Y=e=>e instanceof RegExp;const Z={value:!1,isValid:!1},ee={value:!0,isValid:!0};var te=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?ee:{value:e[0].value,isValid:!0}:ee:Z}return Z};const re={isValid:!1,value:null};var se=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),re):re;function ae(e,t,r="validate"){if(Q(e)||Array.isArray(e)&&e.every(Q)||G(e)&&!e)return{type:r,message:Q(e)?e:"",ref:t}}var ne=e=>u(e)&&!Y(e)?e:{value:e,message:""},ie=async(e,t,r,s,n)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:f,min:y,max:m,pattern:g,validate:p,name:F,valueAsNumber:k,mount:D,disabled:O}=e._f,E=v(t,F);if(!D||O)return{};const T=l?l[0]:o,U=e=>{s&&T.reportValidity&&(T.setCustomValidity(G(e)?"":e||""),T.reportValidity())},L={},B=X(o),N=a(o),M=B||N,q=(k||z(o))&&h(o.value)&&h(E)||K(o)&&""===o.value||""===E||Array.isArray(E)&&!E.length,R=P.bind(null,F,r,L),W=(e,t,r,s=V,a=A)=>{const n=e?t:r;L[F]={type:e?s:a,message:n,ref:o,...R(e?s:a,n)}};if(n?!Array.isArray(E)||!E.length:c&&(!M&&(q||i(E))||G(E)&&!E||N&&!te(l).isValid||B&&!se(l).isValid)){const{value:e,message:t}=Q(c)?{value:!!c,message:c}:ne(c);if(e&&(L[F]={type:S,message:t,ref:T,...R(S,t)},!r))return U(t),L}if(!(q||i(y)&&i(m))){let e,t;const s=ne(m),a=ne(y);if(i(E)||isNaN(E)){const r=o.valueAsDate||new Date(E),n=e=>new Date((new Date).toDateString()+" "+e),i="time"==o.type,u="week"==o.type;j(s.value)&&E&&(e=i?n(E)>n(s.value):u?E>s.value:r>new Date(s.value)),j(a.value)&&E&&(t=i?n(E)<n(a.value):u?E<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(E?+E:E);i(s.value)||(e=r>s.value),i(a.value)||(t=r<a.value)}if((e||t)&&(W(!!e,s.message,a.message,b,_),!r))return U(L[F].message),L}if((d||f)&&!q&&(j(E)||n&&Array.isArray(E))){const e=ne(d),t=ne(f),s=!i(e.value)&&E.length>+e.value,a=!i(t.value)&&E.length<+t.value;if((s||a)&&(W(s,e.message,t.message),!r))return U(L[F].message),L}if(g&&!q&&j(E)){const{value:e,message:t}=ne(g);if(Y(e)&&!E.match(e)&&(L[F]={type:w,message:t,ref:o,...R(w,t)},!r))return U(t),L}if(p)if(J(p)){const e=ae(await p(E,t),T);if(e&&(L[F]={...e,...R(x,e.message)},!r))return U(e.message),L}else if(u(p)){let e={};for(const s in p){if(!C(e)&&!r)break;const a=ae(await p[s](E,t),T,s);a&&(e={...a,...R(s,a.message)},U(a.message),r&&(L[F]=e))}if(!C(e)&&(L[F]={ref:T,...e},!r))return L}return U(!0),L};function oe(e,t){const r=Array.isArray(t)?t:M(t)?[t]:q(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=h(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(u(s)&&C(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!h(e[t]))return!1;return!0}(s))&&oe(e,r.slice(0,-1)),e}function ue(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var le=e=>i(e)||!o(e);function ce(e,t){if(le(e)||le(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ce(r,e):r!==e)return!1}}return!0}var de=e=>"select-multiple"===e.type,fe=e=>X(e)||a(e),ye=e=>K(e)&&e.isConnected,me=e=>{for(const t in e)if(J(e[t]))return!0;return!1};function he(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!me(e[s])?(t[s]=Array.isArray(e[s])?[]:{},he(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function ve(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!me(e[a])?h(t)||le(r[a])?r[a]=Array.isArray(e[a])?he(e[a],[]):{...he(e[a])}:ve(e[a],i(t)?{}:t[a],r[a]):r[a]=!ce(e[a],t[a]);return r}var ge=(e,t)=>ve(e,t,he(t)),pe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&j(e)?new Date(e):s?s(e):e;function be(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return z(t)?t.files:X(t)?se(e.refs).value:de(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?te(e.refs).value:pe(h(t.value)?e.ref.value:t.value,e)}var _e=(e,t,r,s)=>{const a={};for(const n of e){const e=v(t,n);e&&R(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},Ve=e=>h(e)?e:Y(e)?e.source:u(e)?Y(e.value)?e.value.source:e.value:e,Ae=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function we(e,t,r){const s=v(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=v(t,s),i=v(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Se=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),xe=(e,t)=>!m(v(e,t)).length&&oe(e,t);const Fe={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function ke(e={},t){let r,s={...Fe,...e},o={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},d={},b=(u(s.defaultValues)||u(s.values))&&y(s.defaultValues||s.values)||{},_=s.shouldUnregister?{}:y(b),V={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0;const S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:ue(),array:ue(),state:ue()},F=e.resetOptions&&e.resetOptions.keepDirtyValues,k=H(s.mode),D=H(s.reValidateMode),O=s.criteriaMode===p.all,E=async e=>{if(S.isValid||e){const e=s.resolver?C((await q()).errors):await P(d,!0);e!==o.isValid&&x.state.next({isValid:e})}},U=e=>S.isValidating&&x.state.next({isValidating:e}),L=(e,t,r,s)=>{const a=v(d,e);if(a){const n=v(_,e,h(r)?v(b,e):r);h(n)||s&&s.defaultChecked||t?R(_,e,t?n:be(a._f)):Y(e,n),V.mount&&E()}},N=(e,t,r,s,a)=>{let n=!1,i=!1;const u={name:e};if(!r||s){S.isDirty&&(i=o.isDirty,o.isDirty=u.isDirty=Q(),n=i!==u.isDirty);const r=ce(v(b,e),t);i=v(o.dirtyFields,e),r?oe(o.dirtyFields,e):R(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,n=n||S.dirtyFields&&i!==!r}if(r){const t=v(o.touchedFields,e);t||(R(o.touchedFields,e,r),u.touchedFields=o.touchedFields,n=n||S.touchedFields&&t!==r)}return n&&a&&x.state.next(u),n?u:{}},M=(t,s,a,n)=>{const i=v(o.errors,t),u=S.isValid&&G(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{R(o.errors,e,t),x.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(w),w=setTimeout(l,e)},r(e.delayError)):(clearTimeout(w),r=null,a?R(o.errors,t,a):oe(o.errors,t)),(a?!ce(i,a):i)||!C(n)||u){const e={...n,...u&&G(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},x.state.next(e)}U(!1)},q=async e=>s.resolver(_,s.context,_e(e||A.mount,d,s.criteriaMode,s.shouldUseNativeValidation)),P=async(e,t,r={valid:!0})=>{for(const a in e){const n=e[a];if(n){const{_f:e,...a}=n;if(e){const a=A.array.has(e.name),i=await ie(n,_,O,s.shouldUseNativeValidation&&!t,a);if(i[e.name]&&(r.valid=!1,t))break;!t&&(v(i,e.name)?a?$(o.errors,i,e.name):R(o.errors,e.name,i[e.name]):oe(o.errors,e.name))}a&&await P(a,t,r)}}return r.valid},Q=(e,t)=>(e&&t&&R(_,e,t),!ce(se(),b)),X=(e,t,r)=>B(e,A,{...V.mount?_:h(t)?b:j(e)?{[e]:t}:t},r,t),Y=(e,t,r={})=>{const s=v(d,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&R(_,e,pe(t,r)),n=K(r.ref)&&i(t)?"":t,de(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):z(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||x.values.next({name:e,values:{..._}})))}(r.shouldDirty||r.shouldTouch)&&N(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&re(e)},Z=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,o=v(d,i);!A.array.has(e)&&le(a)&&(!o||o._f)||n(a)?Y(i,a,r):Z(i,a,r)}},ee=(e,r,s={})=>{const a=v(d,e),n=A.array.has(e),u=y(r);R(_,e,u),n?(x.array.next({name:e,values:{..._}}),(S.isDirty||S.dirtyFields)&&s.shouldDirty&&x.state.next({name:e,dirtyFields:ge(b,_),isDirty:Q(e,u)})):!a||a._f||i(u)?Y(e,u,s):Z(e,u,s),I(e,A)&&x.state.next({...o}),x.values.next({name:e,values:{..._}}),!V.mount&&t()},te=async e=>{const t=e.target;let a=t.name,n=!0;const i=v(d,a);if(i){let u,c;const f=t.type?be(i._f):l(e),y=e.type===g.BLUR||e.type===g.FOCUS_OUT,m=!Ae(i._f)&&!s.resolver&&!v(o.errors,a)&&!i._f.deps||Se(y,v(o.touchedFields,a),o.isSubmitted,D,k),h=I(a,A,y);R(_,a,f),y?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);const p=N(a,f,y,!1),b=!C(p)||h;if(!y&&x.values.next({name:a,type:e.type,values:{..._}}),m)return S.isValid&&E(),b&&x.state.next({name:a,...h?{}:p});if(!y&&h&&x.state.next({...o}),U(!0),s.resolver){const{errors:e}=await q([a]),t=we(o.errors,d,a),r=we(e,d,t.name||a);u=r.error,a=r.name,c=C(e)}else u=(await ie(i,_,O,s.shouldUseNativeValidation))[a],n=isNaN(f)||f===v(_,a,f),n&&(u?c=!1:S.isValid&&(c=await P(d,!0)));n&&(i._f.deps&&re(i._f.deps),M(a,c,u,p))}},re=async(e,t={})=>{let r,a;const n=T(e);if(U(!0),s.resolver){const t=await(async e=>{const{errors:t}=await q();if(e)for(const r of e){const e=v(t,r);e?R(o.errors,r,e):oe(o.errors,r)}else o.errors=t;return t})(h(e)?e:n);r=C(t),a=e?!n.some((e=>v(t,e))):r}else e?(a=(await Promise.all(n.map((async e=>{const t=v(d,e);return await P(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||o.isValid)&&E()):a=r=await P(d);return x.state.next({...!j(e)||S.isValid&&r!==o.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!a&&W(d,(e=>e&&v(o.errors,e)),e?n:A.mount),a},se=e=>{const t={...b,...V.mount?_:{}};return h(e)?t:j(e)?v(t,e):e.map((e=>v(t,e)))},ae=(e,t)=>({invalid:!!v((t||o).errors,e),isDirty:!!v((t||o).dirtyFields,e),isTouched:!!v((t||o).touchedFields,e),error:v((t||o).errors,e)}),ne=(e,t,r)=>{const s=(v(d,e,{_f:{}})._f||{}).ref;R(o.errors,e,{...t,ref:s}),x.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},me=(e,t={})=>{for(const r of e?T(e):A.mount)A.mount.delete(r),A.array.delete(r),t.keepValue||(oe(d,r),oe(_,r)),!t.keepError&&oe(o.errors,r),!t.keepDirty&&oe(o.dirtyFields,r),!t.keepTouched&&oe(o.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&oe(b,r);x.values.next({values:{..._}}),x.state.next({...o,...t.keepDirty?{isDirty:Q()}:{}}),!t.keepIsValid&&E()},he=(e,t={})=>{let r=v(d,e);const a=G(t.disabled);return R(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),A.mount.add(e),r?a&&R(_,e,t.disabled?void 0:v(_,e,be(r._f))):L(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:Ve(t.min),max:Ve(t.max),minLength:Ve(t.minLength),maxLength:Ve(t.maxLength),pattern:Ve(t.pattern)}:{},name:e,onChange:te,onBlur:te,ref:a=>{if(a){he(e,t),r=v(d,e);const s=h(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,n=fe(s),i=r._f.refs||[];if(n?i.find((e=>e===s)):s===r._f.ref)return;R(d,e,{_f:{...r._f,...n?{refs:[...i.filter(ye),s,...Array.isArray(v(b,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),L(e,!1,void 0,s)}else r=v(d,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!c(A.array,e)||!V.action)&&A.unMount.add(e)}}},ve=()=>s.shouldFocusError&&W(d,(e=>e&&v(o.errors,e)),A.mount),ke=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=y(_);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await q();o.errors=e,a=t}else await P(d);oe(o.errors,"root"),C(o.errors)?(x.state.next({errors:{}}),await e(a,r)):(t&&await t({...o.errors},r),ve(),setTimeout(ve)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(o.errors),submitCount:o.submitCount+1,errors:o.errors})},De=(r,s={})=>{const a=r||b,n=y(a),i=r&&!C(r)?n:b;if(s.keepDefaultValues||(b=a),!s.keepValues){if(s.keepDirtyValues||F)for(const e of A.mount)v(o.dirtyFields,e)?R(i,e,v(_,e)):ee(e,v(i,e));else{if(f&&h(r))for(const e of A.mount){const t=v(d,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(K(e)){const t=e.closest("form");if(t){t.reset();break}}}}d={}}_=e.shouldUnregister?s.keepDefaultValues?y(b):{}:y(i),x.array.next({values:{...i}}),x.values.next({values:{...i}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&t(),V.mount=!S.isValid||!!s.keepIsValid,V.watch=!!e.shouldUnregister,x.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||ce(r,b)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?ge(b,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Oe=(e,t)=>De(J(e)?e(_):e,t);return{control:{register:he,unregister:me,getFieldState:ae,handleSubmit:ke,setError:ne,_executeSchema:q,_getWatch:X,_getDirty:Q,_updateValid:E,_removeUnmounted:()=>{for(const e of A.unMount){const t=v(d,e);t&&(t._f.refs?t._f.refs.every((e=>!ye(e))):!ye(t._f.ref))&&me(e)}A.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,n=!0)=>{if(s&&r){if(V.action=!0,n&&Array.isArray(v(d,e))){const t=r(v(d,e),s.argA,s.argB);a&&R(d,e,t)}if(n&&Array.isArray(v(o.errors,e))){const t=r(v(o.errors,e),s.argA,s.argB);a&&R(o.errors,e,t),xe(o.errors,e)}if(S.touchedFields&&n&&Array.isArray(v(o.touchedFields,e))){const t=r(v(o.touchedFields,e),s.argA,s.argB);a&&R(o.touchedFields,e,t)}S.dirtyFields&&(o.dirtyFields=ge(b,_)),x.state.next({name:e,isDirty:Q(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else R(_,e,t)},_getFieldArray:t=>m(v(V.mount?_:b,t,e.shouldUnregister?v(b,t,[]):[])),_reset:De,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then((e=>{Oe(e,s.resetOptions),x.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_subjects:x,_proxyFormState:S,get _fields(){return d},get _formValues(){return _},get _state(){return V},set _state(e){V=e},get _defaultValues(){return b},get _names(){return A},set _names(e){A=e},get _formState(){return o},set _formState(e){o=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:re,register:he,handleSubmit:ke,watch:(e,t)=>J(e)?x.values.subscribe({next:r=>e(X(void 0,t),r)}):X(e,t,!0),setValue:ee,getValues:se,reset:Oe,resetField:(e,t={})=>{v(d,e)&&(h(t.defaultValue)?ee(e,v(b,e)):(ee(e,t.defaultValue),R(b,e,t.defaultValue)),t.keepTouched||oe(o.touchedFields,e),t.keepDirty||(oe(o.dirtyFields,e),o.isDirty=t.defaultValue?Q(e,v(b,e)):Q()),t.keepError||(oe(o.errors,e),S.isValid&&E()),x.state.next({...o}))},clearErrors:e=>{e&&T(e).forEach((e=>oe(o.errors,e))),x.state.next({errors:e?o.errors:{}})},unregister:me,setError:ne,setFocus:(e,t={})=>{const r=v(d,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ae}}function De(e={}){const t=s.useRef(),r=s.useRef(),[a,n]=s.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...ke(e,(()=>n((e=>({...e}))))),formState:a});const i=t.current.control;return i._options=e,L({subject:i._subjects.state,next:e=>{E(e,i._proxyFormState,i._updateFormState,!0)&&n({...i._formState})}}),s.useEffect((()=>{e.values&&!ce(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values):i._resetDefaultValues()}),[e.values,i]),s.useEffect((()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()})),t.current.formState=O(a,i),t.current}}}]);