(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[634,25,491,492,493,494,495,496,497,498,499],{1078:function(t,e,i){"use strict";function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i.d(e,"a",(function(){return n}))},548:function(t,e,i){"use strict";i.r(e);var l=i(1),o=i(2),n=i(5),a=i(4),s=i(0),r=i.n(s),u=i(3),c=i(480),d=i(6),f=function(t){Object(n.a)(i,t);var e=Object(a.a)(i);function i(t){var o,n,a,s;return Object(l.a)(this,i),void 0!==(null===(o=(a=e.call(this,t)).props.dataFull.config)||void 0===o||null===(n=o.default)||void 0===n?void 0:n.icon)&&(s="8px"),a.state={device:Object(u.f)(),skin_config:Object(c.configTemplate_getTheme)(),style_title:s},a}return Object(o.a)(i,[{key:"createRipple",value:function(t){var e=this,i=document.createElement("div");this.myButton.appendChild(i);var l=Math.max(this.myButton.offsetWidth,this.myButton.offsetHeight);i.style.width=i.style.height=l+"px",i.style.left=t.offsetWidth-this.myButton.offsetWidth-l/2+"px",i.style.top=t.offsetHeight-this.myButton.offsetHeight-l/2+"px",i.classList.add("ripple"),setTimeout((function(){void 0!==e.myButton&&e.myButton.removeChild(i)}),1e3)}},{key:"render",value:function(){var t,e,i,l,o,n,a,s,c,f=this;return r.a.createElement("div",{className:"malibu-desktop-jwebui_roleUser_button"+((null===(t=this.props.dataFull.config.default)||void 0===t?void 0:t.type)?" "+this.props.dataFull.config.default.type:"")+((null===(e=this.props.dataFull.config.default)||void 0===e?void 0:e.class)?" "+this.props.dataFull.config.default.class:"")+((null===(i=this.props.dataFull.config)||void 0===i||null===(l=i.default)||void 0===l?void 0:l.icon)?" icon":""),onClick:function(t){f.createRipple(t),void 0!==f.props.dataFull.abs_Click&&f.props.dataFull.abs_Click(t,f.props.dataFull.dataItem)},ref:function(t){f.myButton=t},style:(this.props.dataFull.config.default.class,{})},r.a.createElement("div",{className:"malibu-desktop-jwebui_roleUser_button-content row"},(null===(o=this.props.dataFull.config.default)||void 0===o?void 0:o.icon)?r.a.createElement(d.default,{val:Object(u.d)(this.props.dataFull.config.default.icon),style:{fontSize:"24px"},title:(null===(n=this.props.dataFull.config.default)||void 0===n?void 0:n.title)?this.props.dataFull.config.default.title:""}):null,(null===(a=this.props.dataFull.config.default)||void 0===a?void 0:a.icondouble)?r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"material-icons-outlined",style:{fontSize:"24px"}},null===(s=this.props.dataFull.config.default)||void 0===s?void 0:s.icondouble),r.a.createElement("i",{className:"material-icons-outlined ",style:{fontSize:"24px",marginLeft:"-15px"}},null===(c=this.props.dataFull.config.default)||void 0===c?void 0:c.icondouble)):null))}}]),i}(s.Component);e.default=f}}]);