(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[623,25,491,492,493,494,495,496,497,498,499],{1078:function(e,t,s){"use strict";function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}s.d(t,"a",(function(){return o}))},515:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(2),o=s(5),r=s(4),l=s(0),n=s.n(l),p=s(6),c=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).class_desktop="malibu-desktop-uHeaderItemMoreOption",a.class_mobile="malibu-mobile-uHeaderItemMoreOption",a.class_tablet="malibu-tablet-uHeaderItemMoreOption",a}return Object(a.a)(s,[{key:"open",value:function(){var e=this.state.show;e="expand"!==e?"expand":"",this.setState({show:e})}},{key:"close",value:function(){this.setState({show:""})}},{key:"renderForDevice",value:function(){var e,t,s,i,a,o,r=this;return"desktop"===this.props.device||"desktop_small"===this.props.device?n.a.createElement("div",{className:this.class_desktop+"-div row "},n.a.createElement("div",{className:this.class_desktop+"-info "+this.class_desktop+"-hover-unset "+this.class_desktop+"-dropdown ",ref:function(e){r.ref_item=e}},n.a.createElement(p.default,{val:this.props.icon,style:{width:"28px",height:"28px",borderRadius:"50%",fontSize:"28px"},class:"-round "+this.props.color,title:this.props.title,isPointer:null===(e=this.props.config)||void 0===e?void 0:e.isPointer}),n.a.createElement("span",{className:this.class_desktop+"-span-hover malibu-working_time-tooltip"},n.a.createElement("div",{className:this.class_desktop+"-tooltip-title_large"},null===(t=this.props.tooltip)||void 0===t?void 0:t.title_big)),n.a.createElement("span",{className:this.class_desktop+"-span",style:{paddingLeft:"6px"}},n.a.createElement("div",null,this.props.title_big)))):"tablet"===this.props.device?n.a.createElement("div",{className:this.class_tablet+"-div row "},n.a.createElement("div",{className:this.class_tablet+"-info "+this.class_tablet+"-hover-unset "+this.class_tablet+"-dropdown ",ref:function(e){r.ref_item=e}},n.a.createElement(p.default,{val:this.props.icon,style:{width:"28px",height:"28px",borderRadius:"50%",fontSize:"28px"},class:"-round "+this.props.color,title:this.props.title,isPointer:null===(s=this.props.config)||void 0===s?void 0:s.isPointer}),n.a.createElement("span",{className:this.class_tablet+"-span-hover malibu-working_time-tooltip"},n.a.createElement("div",{className:this.class_tablet+"-tooltip-title_large"},null===(i=this.props.tooltip)||void 0===i?void 0:i.title_big)),n.a.createElement("span",{className:this.class_tablet+"-span",style:{paddingLeft:"6px"}},n.a.createElement("div",null,this.props.title_big)))):"mobile"===this.props.device?n.a.createElement("div",{className:this.class_desktop+"-div row "},n.a.createElement("div",{className:this.class_desktop+"-info "+this.class_desktop+"-hover-unset "+this.class_desktop+"-dropdown ",ref:function(e){r.ref_item=e}},n.a.createElement(p.default,{val:this.props.icon,style:{width:"28px",height:"28px",borderRadius:"50%",fontSize:"28px"},class:"-round "+this.props.color,title:this.props.title,isPointer:null===(a=this.props.config)||void 0===a?void 0:a.isPointer}),n.a.createElement("span",{className:this.class_desktop+"-span-hover malibu-working_time-tooltip"},n.a.createElement("div",{className:this.class_desktop+"-tooltip-title_large"},null===(o=this.props.tooltip)||void 0===o?void 0:o.title_big)),n.a.createElement("span",{className:this.class_desktop+"-span",style:{paddingLeft:"6px"}},n.a.createElement("div",null,this.props.title_big)))):n.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){return this.renderForDevice()}}]),s}(l.Component);t.default=c}}]);