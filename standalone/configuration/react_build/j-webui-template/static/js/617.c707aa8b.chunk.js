(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[617,25,491,492,493,494,495,496,497,498,499],{1078:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return s}))},499:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(5),i=r(4),c=r(0),l=r.n(c),p=r(6),o=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(e){var n;Object(a.a)(this,r);var s={paddingLeft:"8px"};return(n=t.call(this,e)).props.icon||(s={}),n.state={style:s,style_icon:{fontSize:"27.98px",float:"left"}},n}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:" app-item-card",style:{userSelect:"none"},onClick:function(t){void 0!==e.props.appItem_Select&&e.props.appItem_Select(e.props.dataItem,t)}},l.a.createElement("div",{className:"app-item "},l.a.createElement("div",{className:"malibu-uApp-img "},this.props.val?l.a.createElement("div",{className:"app-img"},l.a.createElement(p.default,{val:this.props.val,class:" ",style:{width:"70px",height:"70px"},title:this.props.title})):null),l.a.createElement("div",{className:"malibu-uApp-title "},this.props.title?l.a.createElement("span",{className:"dHeader-span",style:this.state.style},l.a.createElement("div",{style:this.state.style_title},this.props.title)):null)))}}]),r}(c.Component);t.default=o}}]);