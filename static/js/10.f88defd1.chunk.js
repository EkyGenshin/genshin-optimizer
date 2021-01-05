(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[10],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var c=a(86),r=a(81),n=a(2),s=a(83),i=a(23),l=(a(0),a(159)),j=a(160),d=a(101),o=a(31),h=a(30),b=a(40),x=a(16),O=a(91),u=a(128),m=a(99),f=a(113),p=a(85),g=a(105),N=a(93),v=a(90);function C(e){var t,a=e.characterId,C=e.onEdit,y=e.onDelete,E=v.a.getCharacter(a);if(!E)return null;var S=N.a.calculateBuild(E),k=S.setToSlots,w=E.characterKey,I=E.name,T=E.weapon,W=E.constellation,K=N.a.getElementalKey(w),B=N.a.getWeaponTypeKey(w),z=g.a.getWeaponName(T.key),A=g.a.getWeaponMainStatValWithOverride(T),D=g.a.getWeaponSubStatKey(T.key),L=g.a.getWeaponSubStatValWithOverride(T),M=g.a.getLevelName(T.levelKey),R=g.a.getWeaponPassiveName(T.key);return Object(n.jsxs)(o.a,{className:e.cardClassName,bg:e.bg?e.bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(o.a.Header,{className:"pr-2",children:Object(n.jsxs)(b.a,{className:"no-gutters",children:[Object(n.jsx)(h.a,{children:e.header?e.header:Object(n.jsx)("h6",{children:Object(n.jsx)("b",{children:I})})}),Object(n.jsx)(h.a,{xs:"auto",children:Object(n.jsxs)("span",{className:"float-right align-top ml-1",children:[e.onEdit&&Object(n.jsx)(d.a,{variant:"primary",size:"sm",className:"mr-1",onClick:C,children:Object(n.jsx)(i.a,{icon:s.f})}),e.onDelete&&Object(n.jsx)(d.a,{variant:"danger",size:"sm",onClick:y,children:Object(n.jsx)(i.a,{icon:s.B})})]})})]})}),Object(n.jsxs)(o.a.Body,{onClick:C,style:{cursor:C?"pointer":"default"},children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{xs:"auto",className:"pr-0",children:Object(n.jsx)(l.a,{src:N.a.getThumb(w),className:"h-100 w-auto my-n1",rounded:!0})}),Object(n.jsxs)(h.a,{children:[Object(n.jsxs)("h4",{children:[N.a.getName(w)," ",Object(n.jsx)(l.a,{src:u.a.elements[K],className:"inline-icon"})," ",Object(n.jsx)(l.a,{src:null===(t=u.a.weaponTypes)||void 0===t?void 0:t[B],className:"inline-icon"})]}),Object(n.jsx)("h6",{children:Object(n.jsx)(m.a,{stars:N.a.getStar(w),colored:!0})}),Object(n.jsx)("span",{children:"Lvl. ".concat(N.a.getLevelWithOverride(E)," C").concat(W)})]})]}),Object(n.jsx)(b.a,{className:"mb-2",children:Object(n.jsxs)(h.a,{children:[Object(n.jsxs)("h6",{className:"mb-0",children:[z,R&&"(".concat(T.refineIndex+1,")")," ",M]}),Object(n.jsxs)("span",{children:["ATK: ",A,"  ",R&&Object(n.jsxs)("span",{children:[p.e.getStatName(D),": ",L,p.e.getStatUnit(D)]})]})]})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{children:Object.entries(O.a.getArtifactSetEffects(k)).map((function(e){var t=Object(r.a)(e,2),a=t[0],s=t[1],i=O.a.getArtifactSetName(a),l=Math.max.apply(Math,Object(c.a)(s));return Object(n.jsx)("h5",{children:Object(n.jsxs)(j.a,{variant:"secondary",children:[i," ",Object(n.jsx)(j.a,{variant:"success",children:l})]})},a)}))})}),Object(n.jsx)(b.a,{children:["hp","atk","def","ele_mas","crit_rate","crit_dmg","ener_rech"].map((function(e){var t=p.e.getStatUnit(e),a=S.finalStats[e];return Object(n.jsxs)(h.a,{xs:12,children:[Object(n.jsxs)("h6",{className:"d-inline",children:[Object(f.a)(e)," ",p.e.getStatName(e)]}),Object(n.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(p.e.fixedUnit(e)))+t})]},e)}))})]}),e.footer&&Object(n.jsx)(o.a.Footer,{children:Object(n.jsx)(d.a,{as:x.b,to:{pathname:"/build",selectedCharacterId:a},children:"Generate Builds"})})]})}},206:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var c=a(2),r=a(82),n=a(89),s=a(98),i=a(97),l=a(83),j=a(23),d=a(0),o=a.n(d),h=a(55),b=a(40),x=a(30),O=a(101),u=a(31),m=a(104),f=a(93),p=a(126),g=a(90),N=a(130),v=a(17),C=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).deleteCharacter=function(e){f.a.removeCharacter(e),c.forceUpdate()},c.editCharacter=function(e){return c.setState({charIdToEdit:e,showEditor:!0},(function(){return c.scrollRef.current.scrollIntoView({behavior:"smooth"})}))},c.cancelEditCharacter=function(){return c.setState({charIdToEdit:null,showEditor:!1})},Object(m.a)(),c.state={charIdToEdit:"",showEditor:!1},v.a.pageview("/character"),c}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.scrollRef=o.a.createRef()}},{key:"render",value:function(){var e=this,t=g.a.getCharacterIdList();return Object(c.jsxs)(h.a,{ref:this.scrollRef,children:[this.state.showEditor?Object(c.jsx)(b.a,{className:"mt-2",children:Object(c.jsx)(x.a,{children:Object(c.jsx)(N.a,{editable:!0,characterId:this.state.charIdToEdit,onClose:this.cancelEditCharacter,footer:Object(c.jsx)(O.a,{variant:"danger",onClick:this.cancelEditCharacter,children:"Close"})})})}):null,Object(c.jsxs)(b.a,{className:"mt-2",children:[this.state.showEditor?null:Object(c.jsx)(x.a,{lg:4,md:6,className:"mb-2",children:Object(c.jsxs)(u.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(c.jsx)(u.a.Header,{className:"pr-2",children:Object(c.jsx)("span",{children:"Add New Character"})}),Object(c.jsx)(u.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(c.jsx)(b.a,{className:"d-flex flex-row justify-content-center",children:Object(c.jsx)(x.a,{xs:"auto",children:Object(c.jsx)(O.a,{onClick:function(){return e.editCharacter("")},children:Object(c.jsx)("h1",{children:Object(c.jsx)(j.a,{icon:l.o,className:"fa-fw"})})})})})})]})}),t.map((function(t){return Object(c.jsx)(x.a,{lg:4,md:6,className:"mb-2",children:Object(c.jsx)(p.a,{cardClassName:"h-100",characterId:t,onDelete:function(){return e.deleteCharacter(t)},onEdit:function(){return e.editCharacter(t)}})},t)}))]})]})}}]),a}(o.a.Component)}}]);
//# sourceMappingURL=10.f88defd1.chunk.js.map