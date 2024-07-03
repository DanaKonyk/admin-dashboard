import{R as p}from"./index-Co8NjIC-.js";var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Ye=e=>typeof e=="object";var S=e=>!L(e)&&!Array.isArray(e)&&Ye(e)&&!se(e),yr=e=>S(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,hr=(e,s)=>e.has(gr(s)),vr=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!vr(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=N(e[n]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],x=e=>e===void 0,d=(e,s,t)=>{if(!s||!S(e))return t;const n=fe(s.split(/[,[\].]+?/)).reduce((a,l)=>L(a)?a:a[l],e);return x(n)||n===e?x(e[s])?t:e[s]:n},J=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),Ze=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let n=-1;const a=Le(s)?[s]:Ze(s),l=a.length,g=l-1;for(;++n<l;){const h=a[n];let B=t;if(n!==g){const q=e[h];B=S(q)||Array.isArray(q)?q:isNaN(+a[n+1])?{}:[]}if(h==="__proto__")return;e[h]=B,e=e[h]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};p.createContext(null);var _r=(e,s,t,n=!0)=>{const a={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const g=l;return s._proxyFormState[g]!==P.all&&(s._proxyFormState[g]=!n||P.all),e[g]}});return a},C=e=>S(e)&&!Object.keys(e).length,br=(e,s,t,n)=>{t(e);const{name:a,...l}=e;return C(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(g=>s[g]===P.all)},Ee=e=>Array.isArray(e)?e:[e];function Vr(e){const s=p.useRef(e);s.current=e,p.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Fr=(e,s,t,n,a)=>W(e)?(n&&s.watch.add(e),d(t,e,a)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),d(t,l))):(n&&(s.watchAll=!0),t),Ar=(e,s,t,n,a)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ae=(e,s,t,n)=>{for(const a of t||Object.keys(e)){const l=d(e,a);if(l){const{_f:g,...h}=l;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],a)&&!n)break;if(g.ref&&s(g.ref,g.name)&&!n)break;ae(h,s)}else S(h)&&ae(h,s)}}};var xr=(e,s,t)=>{const n=fe(d(e,t));return A(n,"root",s[t]),A(e,t,n),e},Re=e=>e.type==="file",Q=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>W(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const je={value:!1,isValid:!1},ze={value:!0,isValid:!0};var er=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!x(e[0].attributes.value)?x(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:je}return je};const Ge={isValid:!1,value:null};var rr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ge):Ge;function Je(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||J(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var te=e=>S(e)&&!_e(e)?e:{value:e,message:""},Qe=async(e,s,t,n,a)=>{const{ref:l,refs:g,required:h,maxLength:B,minLength:q,min:w,max:_,pattern:ce,validate:j,name:R,valueAsNumber:Fe,mount:z,disabled:G}=e._f,b=d(s,R);if(!z||G)return{};const H=g?g[0]:l,$=v=>{n&&H.reportValidity&&(H.setCustomValidity(J(v)?"":v||""),H.reportValidity())},E={},Z=Oe(l),de=oe(l),X=Z||de,ee=(Fe||Re(l))&&x(l.value)&&x(b)||ve(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,U=Ar.bind(null,R,t,E),ye=(v,V,k,T=K.maxLength,I=K.minLength)=>{const M=v?V:k;E[R]={type:v?T:I,message:M,ref:l,...U(v?T:I,M)}};if(a?!Array.isArray(b)||!b.length:h&&(!X&&(ee||L(b))||J(b)&&!b||de&&!er(g).isValid||Z&&!rr(g).isValid)){const{value:v,message:V}=he(h)?{value:!!h,message:h}:te(h);if(v&&(E[R]={type:K.required,message:V,ref:H,...U(K.required,V)},!t))return $(V),E}if(!ee&&(!L(w)||!L(_))){let v,V;const k=te(_),T=te(w);if(!L(b)&&!isNaN(b)){const I=l.valueAsNumber||b&&+b;L(k.value)||(v=I>k.value),L(T.value)||(V=I<T.value)}else{const I=l.valueAsDate||new Date(b),M=le=>new Date(new Date().toDateString()+" "+le),ie=l.type=="time",ue=l.type=="week";W(k.value)&&b&&(v=ie?M(b)>M(k.value):ue?b>k.value:I>new Date(k.value)),W(T.value)&&b&&(V=ie?M(b)<M(T.value):ue?b<T.value:I<new Date(T.value))}if((v||V)&&(ye(!!v,k.message,T.message,K.max,K.min),!t))return $(E[R].message),E}if((B||q)&&!ee&&(W(b)||a&&Array.isArray(b))){const v=te(B),V=te(q),k=!L(v.value)&&b.length>+v.value,T=!L(V.value)&&b.length<+V.value;if((k||T)&&(ye(k,v.message,V.message),!t))return $(E[R].message),E}if(ce&&!ee&&W(b)){const{value:v,message:V}=te(ce);if(_e(v)&&!b.match(v)&&(E[R]={type:K.pattern,message:V,ref:l,...U(K.pattern,V)},!t))return $(V),E}if(j){if(Q(j)){const v=await j(b,s),V=Je(v,H);if(V&&(E[R]={...V,...U(K.validate,V.message)},!t))return $(V.message),E}else if(S(j)){let v={};for(const V in j){if(!C(v)&&!t)break;const k=Je(await j[V](b,s),H,V);k&&(v={...k,...U(V,k.message)},$(k.message),t&&(E[R]=v))}if(!C(v)&&(E[R]={ref:H,...v},!t))return E}}return $(!0),E};function wr(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=x(e)?n++:e[s[n++]];return e}function Dr(e){for(const s in e)if(e.hasOwnProperty(s)&&!x(e[s]))return!1;return!0}function m(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:Ze(s),n=t.length===1?e:wr(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(S(n)&&C(n)||Array.isArray(n)&&Dr(n))&&m(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!Ye(e);function Y(e,s){if(be(e)||be(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const a of t){const l=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const g=s[a];if(se(l)&&se(g)||S(l)&&S(g)||Array.isArray(l)&&Array.isArray(g)?!Y(l,g):l!==g)return!1}}return!0}var tr=e=>e.type==="select-multiple",Er=e=>Oe(e)||oe(e),me=e=>ve(e)&&e.isConnected,sr=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Ve(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const n in e)Array.isArray(e[n])||S(e[n])&&!sr(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Ve(e[n],s[n])):L(e[n])||(s[n]=!0);return s}function ir(e,s,t){const n=Array.isArray(e);if(S(e)||n)for(const a in e)Array.isArray(e[a])||S(e[a])&&!sr(e[a])?x(s)||be(t[a])?t[a]=Array.isArray(e[a])?Ve(e[a],[]):{...Ve(e[a])}:ir(e[a],L(s)?{}:s[a],t[a]):t[a]=!Y(e[a],s[a]);return t}var ge=(e,s)=>ir(e,s,Ve(s)),ur=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>x(e)?e:s?e===""?NaN:e&&+e:t&&W(e)?new Date(e):n?n(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Re(s)?s.files:Oe(s)?rr(e.refs).value:tr(s)?[...s.selectedOptions].map(({value:t})=>t):oe(s)?er(e.refs).value:ur(x(s.value)?e.ref.value:s.value,e)}var kr=(e,s,t,n)=>{const a={};for(const l of e){const g=d(s,l);g&&A(a,l,g._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ne=e=>x(e)?e:_e(e)?e.source:S(e)?_e(e.value)?e.value.source:e.value:e,mr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,t){const n=d(e,t);if(n||Le(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),g=d(s,l),h=d(e,l);if(g&&!Array.isArray(g)&&t!==l)return{name:t};if(h&&h.type)return{name:l,error:h};a.pop()}return{name:t}}var Sr=(e,s,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Tr=(e,s)=>!fe(d(e,s)).length&&m(e,s);const Lr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Rr(e={}){let s={...Lr,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},a=S(s.defaultValues)||S(s.values)?N(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:N(a),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},B,q=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:ke(),array:ke(),state:ke()},ce=$e(s.mode),j=$e(s.reValidateMode),R=s.criteriaMode===P.all,Fe=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},z=async r=>{if(w.isValid||r){const i=s.resolver?C((await X()).errors):await U(n,!0);i!==t.isValid&&_.state.next({isValid:i})}},G=(r,i)=>{(w.isValidating||w.validatingFields)&&((r||Array.from(h.mount)).forEach(u=>{u&&(i?A(t.validatingFields,u,i):m(t.validatingFields,u))}),_.state.next({validatingFields:t.validatingFields,isValidating:!C(t.validatingFields)}))},b=(r,i=[],u,c,f=!0,o=!0)=>{if(c&&u){if(g.action=!0,o&&Array.isArray(d(n,r))){const y=u(d(n,r),c.argA,c.argB);f&&A(n,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=u(d(t.errors,r),c.argA,c.argB);f&&A(t.errors,r,y),Tr(t.errors,r)}if(w.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=u(d(t.touchedFields,r),c.argA,c.argB);f&&A(t.touchedFields,r,y)}w.dirtyFields&&(t.dirtyFields=ge(a,l)),_.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(l,r,i)},H=(r,i)=>{A(t.errors,r,i),_.state.next({errors:t.errors})},$=r=>{t.errors=r,_.state.next({errors:t.errors,isValid:!1})},E=(r,i,u,c)=>{const f=d(n,r);if(f){const o=d(l,r,x(u)?d(a,r):u);x(o)||c&&c.defaultChecked||i?A(l,r,i?o:Se(f._f)):T(r,o),g.mount&&z()}},Z=(r,i,u,c,f)=>{let o=!1,y=!1;const F={name:r},D=!!(d(n,r)&&d(n,r)._f&&d(n,r)._f.disabled);if(!u||c){w.isDirty&&(y=t.isDirty,t.isDirty=F.isDirty=v(),o=y!==F.isDirty);const O=D||Y(d(a,r),i);y=!!(!D&&d(t.dirtyFields,r)),O||D?m(t.dirtyFields,r):A(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,o=o||w.dirtyFields&&y!==!O}if(u){const O=d(t.touchedFields,r);O||(A(t.touchedFields,r,u),F.touchedFields=t.touchedFields,o=o||w.touchedFields&&O!==u)}return o&&f&&_.state.next(F),o?F:{}},de=(r,i,u,c)=>{const f=d(t.errors,r),o=w.isValid&&J(i)&&t.isValid!==i;if(e.delayError&&u?(B=Fe(()=>H(r,u)),B(e.delayError)):(clearTimeout(q),B=null,u?A(t.errors,r,u):m(t.errors,r)),(u?!Y(f,u):f)||!C(c)||o){const y={...c,...o&&J(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},_.state.next(y)}},X=async r=>{G(r,!0);const i=await s.resolver(l,s.context,kr(r||h.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return G(r),i},ee=async r=>{const{errors:i}=await X(r);if(r)for(const u of r){const c=d(i,u);c?A(t.errors,u,c):m(t.errors,u)}else t.errors=i;return i},U=async(r,i,u={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const F=h.array.has(o.name);G([c],!0);const D=await Qe(f,l,R,s.shouldUseNativeValidation&&!i,F);if(G([c]),D[o.name]&&(u.valid=!1,i))break;!i&&(d(D,o.name)?F?xr(t.errors,D,o.name):A(t.errors,o.name,D[o.name]):m(t.errors,o.name))}y&&await U(y,i,u)}}return u.valid},ye=()=>{for(const r of h.unMount){const i=d(n,r);i&&(i._f.refs?i._f.refs.every(u=>!me(u)):!me(i._f.ref))&&Ae(r)}h.unMount=new Set},v=(r,i)=>(r&&i&&A(l,r,i),!Y(Ce(),a)),V=(r,i,u)=>Fr(r,h,{...g.mount?l:x(i)?a:W(r)?{[r]:i}:i},u,i),k=r=>fe(d(g.mount?l:a,r,e.shouldUnregister?d(a,r,[]):[])),T=(r,i,u={})=>{const c=d(n,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(l,r,ur(i,o)),f=ve(o.ref)&&L(i)?"":i,tr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(F=>F===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Re(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:r,values:{...l}})))}(u.shouldDirty||u.shouldTouch)&&Z(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&le(r)},I=(r,i,u)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(n,o);(h.array.has(r)||!be(f)||y&&!y._f)&&!se(f)?I(o,f,u):T(o,f,u)}},M=(r,i,u={})=>{const c=d(n,r),f=h.array.has(r),o=N(i);A(l,r,o),f?(_.array.next({name:r,values:{...l}}),(w.isDirty||w.dirtyFields)&&u.shouldDirty&&_.state.next({name:r,dirtyFields:ge(a,l),isDirty:v(r,o)})):c&&!c._f&&!L(o)?I(r,o,u):T(r,o,u),Ke(r,h)&&_.state.next({...t}),_.values.next({name:g.mount?r:void 0,values:{...l}})},ie=async r=>{g.mount=!0;const i=r.target;let u=i.name,c=!0;const f=d(n,u),o=()=>i.type?Se(f._f):yr(r),y=F=>{c=Number.isNaN(F)||F===d(l,u,F)};if(f){let F,D;const O=o(),re=r.type===He.BLUR||r.type===He.FOCUS_OUT,fr=!mr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||Sr(re,d(t.touchedFields,u),t.isSubmitted,j,ce),we=Ke(u,h,re);A(l,u,O),re?(f._f.onBlur&&f._f.onBlur(r),B&&B(0)):f._f.onChange&&f._f.onChange(r);const De=Z(u,O,re,!1),cr=!C(De)||we;if(!re&&_.values.next({name:u,type:r.type,values:{...l}}),fr)return w.isValid&&z(),cr&&_.state.next({name:u,...we?{}:De});if(!re&&we&&_.state.next({...t}),s.resolver){const{errors:qe}=await X([u]);if(y(O),c){const dr=Xe(t.errors,n,u),We=Xe(qe,n,dr.name||u);F=We.error,u=We.name,D=C(qe)}}else G([u],!0),F=(await Qe(f,l,R,s.shouldUseNativeValidation))[u],G([u]),y(O),c&&(F?D=!1:w.isValid&&(D=await U(n,!0)));c&&(f._f.deps&&le(f._f.deps),de(u,D,F,De))}},ue=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let u,c;const f=Ee(r);if(s.resolver){const o=await ee(x(r)?r:f);u=C(o),c=r?!f.some(y=>d(o,y)):u}else r?(c=(await Promise.all(f.map(async o=>{const y=d(n,o);return await U(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&z()):c=u=await U(n);return _.state.next({...!W(r)||w.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors}),i.shouldFocus&&!c&&ae(n,ue,r?f:h.mount),c},Ce=r=>{const i={...g.mount?l:a};return x(r)?i:W(r)?d(i,r):r.map(u=>d(i,u))},Ue=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),lr=r=>{r&&Ee(r).forEach(i=>m(t.errors,i)),_.state.next({errors:r?t.errors:{}})},Me=(r,i,u)=>{const c=(d(n,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:y,type:F,...D}=f;A(t.errors,r,{...D,...i,ref:c}),_.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&c&&c.focus&&c.focus()},nr=(r,i)=>Q(r)?_.values.subscribe({next:u=>r(V(void 0,i),u)}):V(r,i,!0),Ae=(r,i={})=>{for(const u of r?Ee(r):h.mount)h.mount.delete(u),h.array.delete(u),i.keepValue||(m(n,u),m(l,u)),!i.keepError&&m(t.errors,u),!i.keepDirty&&m(t.dirtyFields,u),!i.keepTouched&&m(t.touchedFields,u),!i.keepIsValidating&&m(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&m(a,u);_.values.next({values:{...l}}),_.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&z()},Ne=({disabled:r,name:i,field:u,fields:c,value:f})=>{if(J(r)&&g.mount||r){const o=r?void 0:x(f)?Se(u?u._f:d(c,i)._f):f;A(l,i,o),Z(i,o,!1,!1,!0)}},xe=(r,i={})=>{let u=d(n,r);const c=J(i.disabled);return A(n,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),u?Ne({field:u,disabled:i.disabled,name:r,value:i.value}):E(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(r,i),u=d(n,r);const o=x(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=Er(o),F=u._f.refs||[];if(y?F.find(D=>D===o):o===u._f.ref)return;A(n,r,{_f:{...u._f,...y?{refs:[...F.filter(me),o,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),E(r,!1,void 0,o)}else u=d(n,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(hr(h.array,r)&&g.action)&&h.unMount.add(r)}}},pe=()=>s.shouldFocusError&&ae(n,ue,h.mount),ar=r=>{J(r)&&(_.state.next({disabled:r}),ae(n,(i,u)=>{const c=d(n,u);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Be=(r,i)=>async u=>{let c;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=N(l);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();t.errors=o,f=y}else await U(n);if(m(t.errors,"root"),C(t.errors)){_.state.next({errors:{}});try{await r(f,u)}catch(o){c=o}}else i&&await i({...t.errors},u),pe(),setTimeout(pe);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},or=(r,i={})=>{d(n,r)&&(x(i.defaultValue)?M(r,N(d(a,r))):(M(r,i.defaultValue),A(a,r,N(i.defaultValue))),i.keepTouched||m(t.touchedFields,r),i.keepDirty||(m(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,N(d(a,r))):v()),i.keepError||(m(t.errors,r),w.isValid&&z()),_.state.next({...t}))},Ie=(r,i={})=>{const u=r?N(r):a,c=N(u),f=C(r),o=f?a:c;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?A(o,y,d(l,y)):M(y,d(o,y));else{if(Te&&x(r))for(const y of h.mount){const F=d(n,y);if(F&&F._f){const D=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(ve(D)){const O=D.closest("form");if(O){O.reset();break}}}}n={}}l=e.shouldUnregister?i.keepDefaultValues?N(a):{}:N(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!w.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Y(r,a)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&l?ge(a,l):t.dirtyFields:i.keepDefaultValues&&r?ge(a,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(r,i)=>Ie(Q(r)?r(l):r,i);return{control:{register:xe,unregister:Ae,getFieldState:Ue,handleSubmit:Be,setError:Me,_executeSchema:X,_getWatch:V,_getDirty:v,_updateValid:z,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Ne,_getFieldArray:k,_reset:Ie,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:ar,_subjects:_,_proxyFormState:w,_setErrors:$,get _fields(){return n},get _formValues(){return l},get _state(){return g},set _state(r){g=r},get _defaultValues(){return a},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:xe,handleSubmit:Be,watch:nr,setValue:M,getValues:Ce,reset:Pe,resetField:or,clearErrors:lr,unregister:Ae,setError:Me,setFocus:(r,i={})=>{const u=d(n,r),c=u&&u._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ue}}function Nr(e={}){const s=p.useRef(),t=p.useRef(),[n,a]=p.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Rr(e),formState:n});const l=s.current.control;return l._options=e,Vr({subject:l._subjects.state,next:g=>{br(g,l._proxyFormState,l._updateFormState)&&a({...l._formState})}}),p.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),p.useEffect(()=>{if(l._proxyFormState.isDirty){const g=l._getDirty();g!==n.isDirty&&l._subjects.state.next({isDirty:g})}},[l,n.isDirty]),p.useEffect(()=>{e.values&&!Y(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,a(g=>({...g}))):l._resetDefaultValues()},[e.values,l]),p.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),p.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),p.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=_r(n,l),s.current}export{Ar as a,d as g,Nr as u};
