(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[2],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),c=a(83),r=a(23),i={hp:c.A,hp_:c.A,atk:c.i,atk_:c.i,def:c.s,def_:c.s,ele_mas:c.n,crit_rate:c.d,crit_dmg:c.e,ener_rech:c.y,heal_bonu:c.h},s=function(e){return i[e]?Object(n.jsx)(r.a,{icon:i[e],className:"fa-fw"}):null};t.b=i},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(94),c=a(2),r=a(95),i=a(83),s=a(23),l=a(0),j=a.n(l),d=a(157),o=a(193),b=a(101);function h(e){var t=e.conditional,a=e.conditionalNum,l=e.setConditional,h=e.defEle,u=e.disabled;if(!t)return h;if(Array.isArray(t)){var O,x=a,m=null,v=Object(r.a)(t);try{for(v.s();!(O=v.n()).done;){var p=O.value;if(!(x>p.maxStack)){m=p;break}x-=p.maxStack}}catch(N){v.e(N)}finally{v.f()}m||(x=0,m=t[0]);var f=0===x?"Not Active":m.condition+(m.maxStack>1?": ".concat(x," stack").concat(x>1?"s":""):""),g=Object(c.jsx)(d.a,{variant:0===x?"secondary":"success",children:f}),y=0;return Object(c.jsxs)(o.a,{disabled:u,children:[Object(c.jsx)(o.a.Toggle,{size:"sm",children:Object(c.jsxs)("h6",{className:"mb-0 d-inline",children:[h," ",g]})}),Object(c.jsxs)(o.a.Menu,{children:[Object(c.jsx)(o.a.Item,{onClick:function(){return l(0)},children:Object(c.jsx)("span",{children:"Not Active"})}),t.map((function(e){return Object(c.jsx)(j.a.Fragment,{children:Object(n.a)(Array(e.maxStack).keys()).map((function(e){return e+1})).map((function(t){var a=++y;return Object(c.jsxs)(o.a.Item,{onClick:function(){return l(a)},children:[e.condition,m.maxStack>1?": ".concat(t," stack").concat(t>1?"s":""):""]},a)}))},e.condition)}))]})]})}if(t.maxStack>1){var S=Object(c.jsx)(d.a,{variant:0===a?"secondary":"success",children:a>0?"".concat(a," stack").concat(a>1?"s":""):"Not Active"});return Object(c.jsxs)(o.a,{disabled:u,children:[Object(c.jsx)(o.a.Toggle,{size:"sm",children:Object(c.jsxs)("h6",{className:"mb-0 d-inline",children:[h," ",S]})}),Object(c.jsxs)(o.a.Menu,{children:[Object(c.jsx)(o.a.Item,{onClick:function(){return l(0)},children:Object(c.jsx)("span",{children:"Not Active"})}),Object(n.a)(Array(t.maxStack).keys()).map((function(e){return e+1})).map((function(e){return Object(c.jsx)(o.a.Item,{onClick:function(){return l(e)},children:"".concat(e," stack").concat(e>1?"s":"")},e)}))]})]})}return 1===t.maxStack?Object(c.jsx)(b.a,{size:"sm",onClick:function(){return l(a?0:1)},disabled:u,children:Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsx)(s.a,{icon:a?i.b:i.w})," ",h]})}):void 0}},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return Ce}));var n=a(90),c=a(2),r=a(82),i=a(87),s=a(99),l=a(98),j=a(83),d=a(23),o=a(0),b=a.n(o),h=a(156),u=a(159),O=a(193),x=a(200),m=a(199),v=a(158),p=a(8),f=a(24),g=a(46),y=a(13),S=function(e){var t=Object(f.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,c=t.onSelect,r=t.activeKey,i=t.transition,s=t.mountOnEnter,l=t.unmountOnExit,j=t.children,d=Object(o.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),h=Object(o.useMemo)((function(){return{onSelect:c,activeKey:r,transition:i,mountOnEnter:s||!1,unmountOnExit:l||!1,getControlledId:function(e){return d(e,"tabpane")},getControllerId:function(e){return d(e,"tab")}}}),[c,r,i,s,l,d]);return b.a.createElement(g.a.Provider,{value:h},b.a.createElement(y.a.Provider,{value:c||null},j))},N=a(1),C=a(3),k=a(5),E=a.n(k),K=a(6),_=b.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,c=void 0===n?"div":n,r=e.className,i=Object(C.a)(e,["bsPrefix","as","className"]),s=Object(K.a)(a,"tab-content");return b.a.createElement(c,Object(N.a)({ref:t},i,{className:E()(r,s)}))})),w=a(110);var I=b.a.forwardRef((function(e,t){var a=function(e){var t=Object(o.useContext)(g.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,c=t.getControllerId,r=Object(C.a)(t,["activeKey","getControlledId","getControllerId"]),i=!1!==e.transition&&!1!==r.transition,s=Object(y.b)(e.eventKey);return Object(N.a)({},e,{active:null==e.active&&null!=s?Object(y.b)(a)===s:e.active,id:n(e.eventKey),"aria-labelledby":c(e.eventKey),transition:i&&(e.transition||r.transition||w.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:r.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:r.unmountOnExit})}(e),n=a.bsPrefix,c=a.className,r=a.active,i=a.onEnter,s=a.onEntering,l=a.onEntered,j=a.onExit,d=a.onExiting,h=a.onExited,u=a.mountOnEnter,O=a.unmountOnExit,x=a.transition,m=a.as,v=void 0===m?"div":m,p=(a.eventKey,Object(C.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),f=Object(K.a)(n,"tab-pane");if(!r&&!x&&O)return null;var S=b.a.createElement(v,Object(N.a)({},p,{ref:t,role:"tabpanel","aria-hidden":!r,className:E()(c,f,{active:r})}));return x&&(S=b.a.createElement(x,{in:r,onEnter:i,onEntering:s,onEntered:l,onExit:j,onExiting:d,onExited:h,mountOnEnter:u,unmountOnExit:O},S)),b.a.createElement(g.a.Provider,{value:null},b.a.createElement(y.a.Provider,{value:null},S))}));I.displayName="TabPane";var T=I,A=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(b.a.Component);A.Container=S,A.Content=_,A.Pane=T;var W=A,V=a(12),B=a(157),P=a(101),U=a(31),z=a(30),L=a(122),q=a(40),F=a(113),R=a(104),M=a(91),D=a(97),H=a(88),X=a(85),J=a(81),G=b.a.createContext(null);G.displayName="AccordionContext";var Q=G;var Y=b.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"button":a,c=e.children,r=e.eventKey,i=e.onClick,s=Object(C.a)(e,["as","children","eventKey","onClick"]),l=function(e,t){var a=Object(o.useContext)(Q),n=Object(o.useContext)(y.a);return function(c){n&&n(e===a?null:e,c),t&&t(c)}}(r,i);return"button"===n&&(s.type="button"),b.a.createElement(n,Object(N.a)({ref:t,onClick:l},s),c)})),Z=a(48),$=b.a.forwardRef((function(e,t){var a=e.children,n=e.eventKey,c=Object(C.a)(e,["children","eventKey"]),r=Object(o.useContext)(Q);return b.a.createElement(y.a.Provider,{value:null},b.a.createElement(Z.a,Object(N.a)({ref:t,in:r===n},c),b.a.createElement("div",null,b.a.Children.only(a))))}));$.displayName="AccordionCollapse";var ee=$,te=b.a.forwardRef((function(e,t){var a=Object(f.a)(e,{activeKey:"onSelect"}),n=a.as,c=void 0===n?"div":n,r=a.activeKey,i=a.bsPrefix,s=a.children,l=a.className,j=a.onSelect,d=Object(C.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),o=E()(l,Object(K.a)(i,"accordion"));return b.a.createElement(Q.Provider,{value:r||null},b.a.createElement(y.a.Provider,{value:j||null},b.a.createElement(c,Object(N.a)({ref:t},d,{className:o}),s)))}));te.displayName="Accordion",te.Toggle=Y,te.Collapse=ee;var ae=te,ne=a(89),ce=a(132),re=a(128),ie=a(112),se=a(86),le=a(116);var je=function(e){var t=Object(o.useState)(!1),a=Object(J.a)(t,2),n=a[0],r=a[1],i=e.character,s=i.characterKey,l=i.compareAgainstEquipped,j=i.artifactConditionals,d=e.equippedBuild,b=e.newBuild,h=e.editable,u=e.forceUpdate,O=e.setState,x=e.character,m=b||d;b&&(j=b.artifactConditionals);var v=H.a.getElementalKey(s),p=["hp","atk","def","ele_mas","crit_rate","crit_dmg","crit_multi","ener_rech","heal_bonu","phy_dmg","phy_atk"];p.push("".concat(v,"_ele_dmg")),p.push("".concat(v,"_ele_atk"));var f=["inc_heal","pow_shield","red_cd","phy_dmg","phy_res","norm_atk_dmg","char_atk_dmg","skill_dmg","burst_dmg"];H.a.getElementalKeys().forEach((function(e){f.push("".concat(e,"_ele_dmg")),f.push("".concat(e,"_ele_res"))})),f=f.filter((function(e){return!p.includes(e)}));var g=function(e){var t,a=H.a.getStatValueWithOverride(x,e),n=se.a.getStatUnit(e),r=((null===m||void 0===m||null===(t=m.finalStats)||void 0===t?void 0:t[e])||0)-a;return Object(c.jsxs)(z.a,{xs:12,md:6,lg:4,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(ie.a)(e)," ",se.a.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(h&&H.a.hasOverride(x,e)?"text-warning":""),children:[(null===a||void 0===a?void 0:a.toFixed(se.a.fixedUnit(e)))+n,r?Object(c.jsxs)("span",{className:r>0?"text-success":"text-danger",children:[" ",r>0&&"+",(null===r||void 0===r?void 0:r.toFixed(se.a.fixedUnit(e)))+n]}):null]})]},e)},y=function(e){var t,a,n,r=(null===d||void 0===d||null===(t=d.finalStats)||void 0===t?void 0:t[e])||H.a.getStatValueWithOverride(x,e),i=se.a.getStatUnit(e),s=((null===b||void 0===b||null===(a=b.finalStats)||void 0===a?void 0:a[e])||0)-((null===d||void 0===d||null===(n=d.finalStats)||void 0===n?void 0:n[e])||0);return Object(c.jsxs)(z.a,{xs:12,md:6,lg:4,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(ie.a)(e)," ",se.a.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(h&&H.a.hasOverride(x,e)?"text-warning":""),children:[(null===r||void 0===r?void 0:r.toFixed(se.a.fixedUnit(e)))+i,s?Object(c.jsxs)("span",{className:s>0?"text-success":"text-danger",children:[" (",s>0?"+":"",(null===s||void 0===s?void 0:s.toFixed(se.a.fixedUnit(e)))+i,")"]}):null]})]},e)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{className:"mb-2",children:Object(c.jsx)(ae,{children:Object(c.jsxs)(U.a,{className:"h-100",bg:"lightcontent",text:"lightfont",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{children:Object(c.jsx)("span",{children:"Character Stats"})}),Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(ae.Toggle,{as:P.a,variant:"info",eventKey:"showOtherStats",onClick:function(){return r(!n)},size:"sm",children:"".concat(n?"Hide":"Show"," Other Stats")})})]})}),Object(c.jsxs)(U.a.Body,{children:[Object(c.jsx)(q.a,{children:b&&l?p.map(y):p.map(g)}),Object(c.jsx)(ae.Collapse,{eventKey:"showOtherStats",children:Object(c.jsx)(q.a,{children:b&&l?f.map(y):f.map(g)})})]}),b?Object(c.jsx)(U.a.Footer,{children:Object(c.jsx)(P.a,{size:"sm",onClick:function(){H.a.equipArtifacts(x.id,b.artifactIds),null===u||void 0===u||u()},children:"Equip All artifacts to current character"})}):null]})})})}),Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{sm:6,lg:4,className:"mb-2",children:Object(c.jsxs)(U.a,{className:"h-100 d-flex flex-column",bg:"lightcontent",text:"lightfont",children:[Object(c.jsx)(U.a.Header,{children:"Artifact Set Effects"}),Object(c.jsx)(U.a.Body,{className:"flex-grow-1",children:Object(c.jsx)(q.a,{children:Object.entries(ne.a.getArtifactSetEffects(m.setToSlots)).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(z.a,{xs:12,className:"mb-2",children:[Object(c.jsx)("h5",{children:ne.a.getArtifactSetName(a)}),Object(c.jsx)(q.a,{children:n.map((function(e){var t=ne.a.getArtifactSetNumStats(a,e),n=0,r=ne.a.getArtifactSetEffectConditional(a,e);if(r){n=le.a.getConditionalNum(j,a,e);var i=ne.a.getArtifactConditionalStats(a,e,n);i&&(t||(t={}),Object.entries(i).forEach((function(e){var a=Object(J.a)(e,2),n=a[0],c=a[1];return t[n]=(t[n]||0)+c})))}var s=Object(c.jsx)(re.a,{disabled:!!b,conditional:r,conditionalNum:n,setConditional:function(t){return function(e,t,a){return O((function(n){return{artifactConditionals:le.a.setConditional(n.artifactConditionals,e,t,a)}}))}(a,e,t)},defEle:Object(c.jsxs)(B.a,{variant:"success",children:[e,"-Set"]})});return Object(c.jsxs)(z.a,{xs:12,className:"mb-2",children:[Object(c.jsxs)("h6",{children:[s," ",ne.a.getArtifactSetEffectText(a,e,m.finalStats)]}),t?Object(c.jsx)(q.a,{children:Object.entries(t).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(z.a,{xs:12,children:[se.a.getStatName(a),": ",n,se.a.getStatUnit(a)]},a)}))}):null]},e)}))})]},a)}))})})]})}),Object.values(m.artifactIds).map((function(e){return e?Object(c.jsx)(z.a,{sm:6,lg:4,className:"mb-2",children:Object(c.jsx)(ce.a,{artifactId:e,forceUpdate:u})},e):null}))]})})})]})},de=a(94),oe=a(212),be=a(197),he=a(107),ue=a(108),Oe=a(100),xe=a(115);function me(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var ve=function(e){var t=e.value,a=e.placeholder,r=e.defaultValue,i=e.onValueChange,s=e.percent,l=me(e,["value","placeholder","defaultValue","onValueChange","percent"]);return Object(c.jsxs)(m.a,Object(n.a)(Object(n.a)({},l),{},{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsx)(m.a.Text,{children:e.name})}),s?Object(c.jsx)(ue.a,{placeholder:a,value:t,onValueChange:i}):Object(c.jsx)(ue.b,{placeholder:a,value:t,onValueChange:i}),s?Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(m.a.Text,{children:"%"})}):null,void 0!==r?Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(oe.a,{placement:"top",overlay:Object(c.jsx)(be.a,{children:"Reset this override to the default value."}),children:Object(c.jsx)("span",{className:"d-inline-block",children:Object(c.jsx)(P.a,{onClick:function(){return i(r)},disabled:t===r,style:t===r?{pointerEvents:"none"}:{},children:Object(c.jsx)(d.a,{icon:j.C})})})})}):null]}))};function pe(e){var t,a,r,i,s=e.character,l=s.characterKey,b=s.constellation,u=e.editable,O=e.setOverridelevel,x=e.setConstellation,v=Object(o.useState)(!1),p=Object(J.a)(v,2),f=p[0],g=p[1],y=H.a.getElementalKey(l),S=H.a.getWeaponTypeKey(l),N=H.a.getLevelWithOverride(e.character);return Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{xs:12,lg:3,children:Object(c.jsxs)(U.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(U.a.Img,{src:H.a.getCard(l),className:"w-100 h-auto"}),Object(c.jsx)(U.a.Body,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsxs)(z.a,{xs:12,children:[Object(c.jsxs)("h3",{children:[H.a.getName(l)," ",Object(c.jsx)(h.a,{src:he.a.elements[y],className:"inline-icon"})," ",Object(c.jsx)(h.a,{src:null===(t=he.a.weaponTypes)||void 0===t?void 0:t[S],className:"inline-icon"})]}),Object(c.jsx)("h6",{children:Object(c.jsx)(Oe.a,{stars:H.a.getStar(l),colored:!0})})]}),Object(c.jsx)(z.a,{children:f?Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsx)(m.a.Text,{children:"Lvl."})}),Object(c.jsx)(ue.b,{onValueChange:O,value:N}),Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(oe.a,{placement:"bottom",overlay:Object(c.jsx)(be.a,{children:"Changes the display level. Cosmetic only."}),children:Object(c.jsx)(P.a,{variant:"danger",onClick:function(){return g(!f)},size:"sm",children:Object(c.jsx)("span",{children:Object(c.jsx)(d.a,{icon:j.r})})})})})]})})}):Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{children:Object(c.jsxs)("h5",{children:["Level: ",N]})}),u?Object(c.jsx)(z.a,{xs:"auto",className:"pr-1 pl-1",children:Object(c.jsx)(P.a,{variant:"info",onClick:function(){return g(!f)},size:"sm",children:Object(c.jsx)("span",{children:Object(c.jsx)(d.a,{icon:j.f})})})}):null]})}),Object(c.jsx)(z.a,{xs:12,children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{xs:12,children:Object(c.jsx)("h5",{children:H.a.getConstellationName(l)})}),Object(c.jsx)(z.a,{children:Object(c.jsx)(q.a,{className:"px-2",children:null===(a=he.a.characters)||void 0===a||null===(r=a[l])||void 0===r||null===(i=r.constellation)||void 0===i?void 0:i.map((function(e,t){return Object(c.jsx)(z.a,{xs:4,className:"p-1",children:Object(c.jsx)(h.a,{src:e,className:"w-100 h-auto ".concat(b>t?"":"overlay-dark"),style:{cursor:"pointer"},roundedCircle:!0,onClick:u?function(){return x(t+1===b?t:t+1)}:null})},t)}))})})]})})]})})]})}),Object(c.jsxs)(z.a,{xs:12,lg:9,children:[Object(c.jsx)(fe,Object(n.a)({},e)),Object(c.jsx)(ge,Object(n.a)({},e))]})]})}function fe(e){var t=Object(o.useState)(!1),a=Object(J.a)(t,2),n=a[0],r=a[1],i=Object(o.useState)(!1),s=Object(J.a)(i,2),l=s[0],u=s[1],m=e.character,v=m.characterKey,p=m.weapon,f=e.editable,g=e.setState,y=e.equippedBuild,S=e.newBuild,N=S||y,C=function(e,t){return g((function(a){return"key"===e&&(a.weapon.conditionalNum=0),a.weapon[e]=t,{weapon:a.weapon}}))},k=D.a.getWeaponSubStatKey(p.key),E=H.a.getWeaponTypeKey(v),K=p.overrideMainVal||D.a.getWeaponMainStatVal(p.key,p.levelKey),_=p.overrideSubVal||D.a.getWeaponSubStatVal(p.key,p.levelKey),w=D.a.getWeaponPassiveName(p.key),I=D.a.getWeaponBonusStat(p.key,p.refineIndex),T=D.a.getWeaponConditionalStat(p.key,p.refineIndex,p.conditionalNum),A=D.a.getWeaponConditional(p.key),W=p.conditionalNum,V=Object(c.jsx)(re.a,{conditional:A,conditionalNum:W,setConditional:function(e){return C("conditionalNum",e)},defEle:Object(c.jsx)("h6",{className:"d-inline mb-0",children:w})});return Object(c.jsxs)(U.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{children:Object(c.jsx)("span",{children:"Weapon"})}),Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(P.a,{variant:"info",size:"sm",onClick:function(){return u(!l)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:j.q})," ",l?"Hide Desc.":"Show Desc."]})})}),f?Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(P.a,{variant:n?"danger":"info",onClick:function(){return r(!n)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:n?j.r:j.f})," ",n?"EXIT":"EDIT"]})})}):null]})}),Object(c.jsxs)(U.a.Body,{children:[Object(c.jsxs)(q.a,{className:"mb-2",children:[Object(c.jsx)(z.a,{xs:12,md:3,children:Object(c.jsx)(h.a,{src:he.a.weapons[p.key],className:"w-100 h-auto",thumbnail:!0})}),n?Object(c.jsx)(z.a,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{lg:"auto",xs:6,className:"mb-2 pr-0",children:Object(c.jsx)(x.a,{title:D.a.getWeaponName(p.key),children:Object(de.a)(Array(5).keys()).reverse().map((function(e){return e+1})).map((function(e,t,a){return Object(c.jsxs)(b.a.Fragment,{children:[Object(c.jsx)(O.a.ItemText,{children:Object(c.jsx)(Oe.a,{stars:e})},"star"+e),Object.entries(D.a.getWeaponsOfType(E)).filter((function(t){var a=Object(J.a)(t,2);a[0];return a[1].rarity===e})).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(O.a.Item,{onClick:function(){return C("key",a)},children:n.name},a)})),t!==a.length-1&&Object(c.jsx)(O.a.Divider,{})]},e)}))})}),Object(c.jsx)(z.a,{lg:"auto",xs:6,className:"mb-2 pr-0",children:Object(c.jsxs)(x.a,{title:D.a.getLevelName(p.levelKey),children:[Object(c.jsx)(O.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Weapon Level"})}),Object.entries(F.a).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(O.a.Item,{onClick:function(){return C("levelKey",a)},children:n},a)}))]})}),w&&Object(c.jsx)(z.a,{lg:"auto",xs:6,className:"mb-2",children:Object(c.jsxs)(x.a,{title:"Refinement ".concat(p.refineIndex+1),className:"w-100",children:[Object(c.jsx)(O.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Weapon Refinment"})}),Object(de.a)(Array(5).keys()).map((function(e){return Object(c.jsx)(O.a.Item,{onClick:function(){return C("refineIndex",e)},children:"Refinement ".concat(e+1)},e)}))]})}),Object(c.jsx)(z.a,{xs:12,className:"mb-2",children:Object(c.jsx)(ve,{name:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:j.j,className:"mr-2"}),"ATK"]}),placeholder:"Weapon Attack",value:K,percent:!1,onValueChange:function(e){return C("overrideMainVal",e)},defaultValue:D.a.getWeaponMainStatVal(p.key,p.levelKey)})}),k&&Object(c.jsx)(z.a,{xs:12,className:"mb-2",children:Object(c.jsx)(ve,{name:Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{className:"mr-2",children:Object(ie.a)(k)}),se.a.getStatName(k)]}),placeholder:"Weapon Substat",value:_,percent:"%"===se.a.getStatUnit(k),onValueChange:function(e){return C("overrideSubVal",e)},defaultValue:D.a.getWeaponSubStatVal(p.key,p.levelKey)})})]})}):Object(c.jsxs)(z.a,{children:[Object(c.jsx)(q.a,{className:"mb-2",children:Object(c.jsxs)(z.a,{children:[Object(c.jsxs)("h5",{className:"mb-0",children:[D.a.getWeaponName(p.key)," ",D.a.getLevelName(p.levelKey)," ",w&&"(Refinement ".concat(p.refineIndex+1,")")]}),Object(c.jsx)("small",{children:Object(c.jsx)(Oe.a,{stars:D.a.getWeaponRarity(p.key)})})]})}),Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{children:V})}),Object(c.jsx)("p",{children:w&&D.a.getWeaponPassiveDescription(p.key,p.refineIndex,N.finalStats)}),Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{xs:12,md:6,children:Object(c.jsxs)("h5",{children:["ATK: ",K]})}),k&&Object(c.jsx)(z.a,{xs:12,md:6,children:Object(c.jsxs)("h5",{children:[se.a.getStatName(k),": ",_,se.a.getStatUnit(k)]})})]}),Object(c.jsxs)(q.a,{children:[(T||I)&&Object(c.jsx)(z.a,{xs:12,children:Object(c.jsx)("h6",{className:"mb-0",children:"Bonus Stats:"})}),I&&Object.entries(I).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(z.a,{xs:12,md:6,children:[se.a.getStatName(a),": ",n,se.a.getStatUnit(a)]},"bonu"+a)})),T&&Object.entries(T).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(z.a,{xs:12,md:6,children:[se.a.getStatName(a),": ",n,se.a.getStatUnit(a)]},"cond"+a)}))]})]})]}),l&&Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{children:Object(c.jsx)("small",{children:D.a.getWeaponDescription(p.key)})})})]})]})}function ge(e){var t=Object(o.useState)(!1),a=Object(J.a)(t,2),r=a[0],i=a[1],s=Object(o.useState)(!1),l=Object(J.a)(s,2),b=l[0],h=l[1],u=["hp","atk","def","ele_mas","crit_rate","crit_dmg","ener_rech","heal_bonu"],v=["stam","inc_heal","pow_shield","red_cd","phy_dmg","phy_res"];H.a.getElementalKeys().forEach((function(e){v.push("".concat(e,"_ele_dmg")),v.push("".concat(e,"_ele_res"))}));var p=["norm_atk_dmg","char_atk_dmg","skill_dmg","burst_dmg","skill_crit_rate","burst_crit_rate","crit_multi","dmg","move_spd","atk_spd","weakspot_dmg"],f=e.editable,g=e.character,y=e.setOverride,S=e.equippedBuild,N=e.newBuild,C=e.character.compareAgainstEquipped,k=N||S,E=H.a.getStatValueWithOverride(g,"specializedStatKey"),K=H.a.getStatValueWithOverride(g,"specializedStatVal"),_=se.a.getStatUnit(E),w="%"===se.a.getStatUnit(E),I={placeholder:"Character Special Stat",value:H.a.getStatValueWithOverride(g,"specializedStatVal"),onValueChange:function(e){return y("specializedStatVal",e)}},T=w?Object(c.jsx)(ue.a,Object(n.a)({},I)):Object(c.jsx)(ue.b,Object(n.a)({},I)),A=function(e){var t,a=H.a.getStatValueWithOverride(g,e),n=se.a.getStatUnit(e),r=((null===k||void 0===k||null===(t=k.finalStats)||void 0===t?void 0:t[e])||0)-a;return Object(c.jsxs)(z.a,{xs:12,lg:6,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(ie.a)(e)," ",se.a.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(f&&H.a.hasOverride(g,e)?"text-warning":""),children:[(null===a||void 0===a?void 0:a.toFixed(se.a.fixedUnit(e)))+n,r?Object(c.jsxs)("span",{className:r>0?"text-success":"text-danger",children:[" ",r>0&&"+",(null===r||void 0===r?void 0:r.toFixed(se.a.fixedUnit(e)))+n]}):null]})]},e)},W=function(e){var t,a,n,r=(null===S||void 0===S||null===(t=S.finalStats)||void 0===t?void 0:t[e])||H.a.getStatValueWithOverride(g,e),i=se.a.getStatUnit(e),s=((null===N||void 0===N||null===(a=N.finalStats)||void 0===a?void 0:a[e])||0)-((null===S||void 0===S||null===(n=S.finalStats)||void 0===n?void 0:n[e])||0);return Object(c.jsxs)(z.a,{xs:12,lg:6,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(ie.a)(e)," ",se.a.getStatName(e)]}),Object(c.jsxs)("span",{className:"float-right ".concat(f&&H.a.hasOverride(g,e)?"text-warning":""),children:[(null===r||void 0===r?void 0:r.toFixed(se.a.fixedUnit(e)))+i,s?Object(c.jsxs)("span",{className:s>0?"text-success":"text-danger",children:[" (",s>0&&"+",(null===s||void 0===s?void 0:s.toFixed(se.a.fixedUnit(e)))+i,")"]}):null]})]},e)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(U.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{children:Object(c.jsx)("span",{children:"Main Base Stats"})}),f?Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(P.a,{variant:r?"danger":"info",onClick:function(){return i(!r)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:r?j.r:j.f})," ",r?"EXIT":"EDIT"]})})}):null]})}),r?Object(c.jsx)(U.a.Body,{children:Object(c.jsxs)(q.a,{className:"mb-2",children:[u.map((function(t){return Object(c.jsx)(z.a,{lg:6,xs:12,children:Object(c.jsx)(ye,Object(n.a)(Object(n.a)({},e),{statKey:t,icon:ie.b[t]}))},t)})),Object(c.jsx)(z.a,{lg:6,xs:12,children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(x.a,{title:se.a.getStatNameWithPercent(E,"Specialized Stat"),as:m.a.Prepend,children:[Object(c.jsx)(O.a.ItemText,{children:"Select Specialized Stat "}),xe.b.map((function(e){return Object(c.jsx)(O.a.Item,{onClick:function(){return y("specializedStatKey",e)},children:se.a.getStatNameWithPercent(e)},e)}))]}),T,w&&Object(c.jsx)(m.a.Append,{children:Object(c.jsx)(m.a.Text,{children:"%"})})]})})]})}):Object(c.jsx)(U.a.Body,{children:Object(c.jsxs)(q.a,{className:"mb-2",children:[N&&C?u.map(W):u.map(A),K?Object(c.jsxs)(z.a,{lg:6,xs:12,children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"Specialized:"})," ",Object(c.jsx)("span",{className:H.a.hasOverride(g,"specializedStatKey")?"text-warning":"",children:se.a.getStatName(E)})]}),Object(c.jsx)("span",{className:"float-right ".concat(H.a.hasOverride(g,"specializedStatVal")?"text-warning":""),children:"".concat(K).concat(_)})]}):null]})})]}),Object(c.jsxs)(U.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{children:Object(c.jsx)("span",{children:"Other Stats"})}),f?Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(P.a,{variant:b?"danger":"info",onClick:function(){return h(!b)},size:"sm",children:Object(c.jsxs)("span",{children:[Object(c.jsx)(d.a,{icon:b?j.r:j.f})," ",b?"EXIT":"EDIT"]})})}):null]})}),b?Object(c.jsx)(U.a.Body,{children:Object(c.jsx)(q.a,{className:"mb-2",children:v.map((function(t){return Object(c.jsx)(z.a,{lg:6,xs:12,children:Object(c.jsx)(ye,Object(n.a)(Object(n.a)({},e),{statKey:t,icon:ie.b[t]}))},t)}))})}):Object(c.jsx)(U.a.Body,{children:Object(c.jsx)(q.a,{className:"mb-2",children:N&&C?v.map(W):v.map(A)})})]}),Object(c.jsxs)(U.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsx)(q.a,{children:Object(c.jsx)(z.a,{children:Object(c.jsx)("span",{children:"Misc Stats"})})})}),Object(c.jsx)(U.a.Body,{children:Object(c.jsx)(q.a,{className:"mb-2",children:N&&C?p.map(W):p.map(A)})})]})]})}function ye(e){var t=e.character,a=t.characterKey,n=t.levelKey,r=e.statKey,i=e.icon,s=e.setOverride;return Object(c.jsx)(ve,{className:"mb-2",name:Object(c.jsxs)("span",{children:[i&&Object(c.jsx)(d.a,{icon:i,className:"fa-fw"})," ",se.a.getStatName(r)]}),placeholder:"Base ".concat(se.a.getStatName(r)),value:H.a.getStatValueWithOverride(e.character,r),percent:!1,onValueChange:function(e){return s(r,e)},defaultValue:H.a.getBaseStatValue(a,n,r)})}var Se=function(e){var t,a,n=e.character.characterKey,r=null===(t=he.a.characters)||void 0===t||null===(a=t[n])||void 0===a?void 0:a.talent;return Object(c.jsx)(q.a,{children:r&&Object.entries(r).map((function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)(h.a,{src:n},a)}))})},Ne=b.a.forwardRef((function(e,t){var a=e.children,n=e.style,r=e.className,i=e["aria-labelledby"];return Object(c.jsx)("div",{ref:t,style:{style:n,minWidth:"25rem"},className:r,"aria-labelledby":i,children:Object(c.jsx)(q.a,{children:b.a.Children.toArray(a).map((function(e){return Object(c.jsx)(z.a,{xs:6,children:e})}))})})})),Ce=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).forceUpdateComponent=function(){n.state.id&&n.setState(X.a.getCharacter(n.state.id)),n.props.forceUpdate?n.props.forceUpdate():n.forceUpdate()},n.setSetState=function(e){return n.setState(e)},n.setCharacterKey=function(e){return n.setState({characterKey:e,name:Object(M.g)(H.a.getTitles(e)),weapon:a.getIntialWeapon(e)})},n.setLevelKey=function(e){return n.setState({levelKey:e,baseStatOverrides:{}})},n.setOverride=function(e,t){return n.setState((function(a){var c=Object(M.e)(a.baseStatOverrides);return H.a.getBaseStatValue(n.state.characterKey,n.state.levelKey,e)===t?(delete c[e],{baseStatOverrides:c}):(c[e]=t,{baseStatOverrides:c})}))},n.setOverridelevel=function(e){return n.setState((function(t){var a=H.a.getLevel(t.levelKey);return e===a?{overrideLevel:0}:{overrideLevel:e}}))},n.setConstellation=function(e){return n.setState({constellation:e})},Object(R.a)(),e.characterToEdit?n.state=e.characterToEdit:n.state=a.getInitialState(),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){if(this.props.characterToEdit&&this.state.id!==this.props.characterToEdit.id&&this.setState(this.props.characterToEdit),this.props.editable){var e=Object(M.e)(this.state);if(delete e.compareAgainstEquipped,this.state.id)X.a.updateCharacter(e);else{var t=X.a.addCharacter(e);this.setState({id:t})}}}},{key:"render",value:function(){var e,t=this,a=this.props,r=a.footer,i=a.newBuild,s=a.editable,l=this.state,o=this.state,b=o.characterKey,p=o.levelKey,f=o.compareAgainstEquipped,g=H.a.calculateBuild(this.state),y=Object(c.jsxs)("span",{children:[Object(c.jsx)(h.a,{src:H.a.getThumb(b),className:"thumb-small my-n1 ml-n2",roundedCircle:!0}),Object(c.jsxs)("h6",{className:"d-inline",children:[" ",H.a.getName(b)," "]})]});return Object(c.jsxs)(U.a,{bg:"darkcontent",text:"lightfont",children:[Object(c.jsx)(U.a.Header,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(z.a,{xs:"auto",children:s?Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(O.a,{children:[Object(c.jsx)(L.a,{as:P.a,children:y}),Object(c.jsx)(O.a.Menu,{as:Ne,children:H.a.getAllCharacterKeys().map((function(e){return Object(c.jsx)(O.a.Item,{onClick:function(){return t.setCharacterKey(e)},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(h.a,{src:H.a.getThumb(e),className:"thumb-small my-n1",roundedCircle:!0}),Object(c.jsxs)("h6",{className:"d-inline",children:[H.a.getName(e)," "]})]})},e)}))})]}),Object(c.jsxs)(x.a,{as:u.a,title:Object(c.jsxs)("h6",{className:"d-inline",children:[H.a.getlevelNames(p)," "]}),children:[Object(c.jsx)(O.a.ItemText,{children:Object(c.jsx)("span",{children:"Select Base Stat Template"})}),H.a.getlevelKeys().map((function(e){return Object(c.jsx)(O.a.Item,{onClick:function(){return t.setLevelKey(e)},children:Object(c.jsxs)("h6",{children:[H.a.getlevelNames(e)," "]})},e)}))]})]}):Object(c.jsxs)("span",{children:[y," Lvl. ",H.a.getLevelWithOverride(this.state)]})}),Object(c.jsx)(z.a,{className:"pl-0 pr-0",children:s?Object(c.jsxs)(m.a,{children:[Object(c.jsx)(m.a.Prepend,{children:Object(c.jsxs)(m.a.Text,{children:[Object(c.jsx)(d.a,{icon:j.t})," Name"]})}),Object(c.jsx)(v.a,{placeholder:"Name",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})}})]}):Object(c.jsx)(U.a.Title,{className:"mb-0 align-self-center",children:Object(c.jsx)("span",{children:this.state.name})})}),i?Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(P.a,{variant:"success",disabled:!f,onClick:function(){return t.setState({compareAgainstEquipped:!1})},children:Object(c.jsx)("small",{children:"Show New artiact Stats"})}),Object(c.jsx)(P.a,{variant:"info",disabled:f,onClick:function(){return t.setState({compareAgainstEquipped:!0})},children:Object(c.jsx)("small",{children:"Compare against equipped artifact"})})]})}):null,Object(c.jsx)(z.a,{xs:"auto",children:Object(c.jsx)(P.a,{variant:"danger",onClick:null===(e=this.props)||void 0===e?void 0:e.onClose,children:Object(c.jsx)(d.a,{icon:j.z})})})]})}),Object(c.jsx)(U.a.Body,{children:Object(c.jsxs)(W.Container,{defaultActiveKey:i?"newartifacts":"character",children:[Object(c.jsxs)(V.a,{variant:"pills",className:"mb-2 ml-2",children:[Object(c.jsx)(V.a.Item,{children:Object(c.jsx)(V.a.Link,{eventKey:"character",children:"Character"})}),i?Object(c.jsx)(V.a.Item,{children:Object(c.jsx)(V.a.Link,{eventKey:"newartifacts",children:"New Artifacts"})}):null,Object(c.jsx)(V.a.Item,{children:Object(c.jsx)(V.a.Link,{eventKey:"artifacts",children:i?"Current Artifacts":"Artifacts"})}),Object(c.jsx)(V.a.Item,{children:Object(c.jsxs)(V.a.Link,{eventKey:"talent",disabled:!0,children:["Talents ",Object(c.jsx)(B.a,{variant:"warning",children:"WIP"})]})}),Object(c.jsx)(V.a.Item,{children:Object(c.jsxs)(V.a.Link,{eventKey:"team",disabled:!0,children:["Team ",Object(c.jsx)(B.a,{variant:"warning",children:"WIP"})]})})]}),Object(c.jsxs)(W.Content,{children:[Object(c.jsx)(W.Pane,{eventKey:"character",children:Object(c.jsx)(pe,Object(n.a)({setState:this.setSetState,setOverride:this.setOverride,setOverridelevel:this.setOverridelevel,setConstellation:this.setConstellation},{character:l,editable:s,equippedBuild:g,newBuild:i}))}),Object(c.jsx)(W.Pane,{eventKey:"artifacts",children:Object(c.jsx)(je,Object(n.a)(Object(n.a)({},{character:l,equippedBuild:g,editable:s}),{},{setState:this.setSetState}))}),i?Object(c.jsx)(W.Pane,{eventKey:"newartifacts",children:Object(c.jsx)(je,Object(n.a)({},{character:l,newBuild:i,equippedBuild:g,editable:s,forceUpdate:this.forceUpdateComponent}))}):null,Object(c.jsx)(W.Pane,{eventKey:"talent",children:Object(c.jsx)(Se,Object(n.a)({},{character:l,newBuild:i,equippedBuild:g,editable:s}))})]})]})}),r&&Object(c.jsx)(U.a.Footer,{children:r})]})}}]),a}(b.a.Component);Ce.initialState={name:"",characterKey:"",levelKey:"L1",overrideLevel:0,equippedArtifacts:{},artifactConditionals:[],baseStatOverrides:{},weapon:{key:"",levelKey:F.c[0],refineIndex:0,overrideMainVal:0,overrideSubVal:0,conditionalNum:0},constellation:0,compareAgainstEquipped:!1},Ce.getIntialWeapon=function(e){var t=Object(M.e)(Ce.initialState.weapon);return t.key=Object.keys(D.a.getWeaponsOfType(H.a.getWeaponTypeKey(e)))[0],t},Ce.getInitialState=function(){var e=Object(M.e)(Ce.initialState);return e.characterKey=Object(M.g)(H.a.getAllCharacterKeys()),e.name=Object(M.g)(H.a.getTitles(e.characterKey)),e.weapon=Ce.getIntialWeapon(e.characterKey),e}}}]);
//# sourceMappingURL=2.1d8882d6.chunk.js.map