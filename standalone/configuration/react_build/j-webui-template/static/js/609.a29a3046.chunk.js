(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[609,25,348,491,492,493,494,495,496,497,498,499],{1078:function(t,e,a){"use strict";function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a.d(e,"a",(function(){return i}))},519:function(t,e,a){"use strict";a.r(e);var l=a(1),s=a(2),i=a(5),r=a(4),n=a(0),o=a.n(n),c=a(6),p=a(52),d=function(t){Object(i.a)(a,t);var e=Object(r.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).class_desktop="malibu-desktop-uActivityItem",s.class_tablet="malibu-tablet-uActivityItem",s.class_mobile="malibu-mobile-uActivityItem",s.state={},s}return Object(s.a)(a,[{key:"renderForDevice",value:function(){var t,e,a=this;return"desktop"===this.props.device||"desktop_small"===this.props.device?o.a.createElement("div",{className:this.class_desktop+" row"+((null===(t=this.props.dataFull.cmd)||void 0===t?void 0:t.disable)?" malibu-no-pointer":""),onClick:function(){var t;!0!==(null===(t=a.props.dataFull.cmd)||void 0===t?void 0:t.disable)&&a.props.dataFull.abs_Click(a.props.dataFull.dataItem)}},o.a.createElement("div",{className:this.class_desktop+"-avatar-div"},o.a.createElement(c.default,{val:this.props.dataFull.img,style:{width:"50px",height:"50px",objectFit:"cover",objectPosition:"center"},title:this.props.dataFull.title_bold,isPointer:!1})),o.a.createElement("div",{className:this.class_desktop+"-content-div"},o.a.createElement("span",{className:this.class_desktop+"-content-title row"},o.a.createElement("span",null,o.a.createElement("label",{className:this.class_desktop+"-content-title-bold"},this.props.dataFull.title_bold),this.props.dataFull.title)),o.a.createElement("span",{className:this.class_desktop+"-tooltip-content"},o.a.createElement("span",null,o.a.createElement("label",{className:this.class_desktop+"-content-title-bold"},this.props.dataFull.title_bold),this.props.dataFull.title)),this.props.dataFull.table_more&&o.a.createElement(p.default,{dataFull:this.props.dataFull.table_more}),o.a.createElement("div",{className:this.class_desktop+"-content-title-time"},this.props.dataFull.time))):"tablet"===this.props.device?o.a.createElement("div",{className:this.class_tablet+" row"+((null===(e=this.props.dataFull.cmd)||void 0===e?void 0:e.disable)?" malibu-no-pointer":""),onClick:function(){var t;!0!==(null===(t=a.props.dataFull.cmd)||void 0===t?void 0:t.disable)&&void 0!==a.props.dataFull.abs_Click&&a.props.dataFull.abs_Click(a.props.dataFull.dataItem)}},o.a.createElement("div",{className:this.class_tablet+"-avatar-div"},o.a.createElement(c.default,{val:this.props.dataFull.img,style:{width:"50px",height:"50px",objectFit:"cover",objectPosition:"center"},title:this.props.dataFull.title_bold,isPointer:!1})),o.a.createElement("div",{className:this.class_tablet+"-content-div"},o.a.createElement("span",{className:this.class_tablet+"-content-title row"},o.a.createElement("span",null,o.a.createElement("label",{className:this.class_tablet+"-content-title-bold"},this.props.dataFull.title_bold),this.props.dataFull.title)),o.a.createElement("span",{className:this.class_tablet+"-tooltip-content"},o.a.createElement("span",null,o.a.createElement("label",{className:this.class_tablet+"-content-title-bold"},this.props.dataFull.title_bold),this.props.dataFull.title)),this.props.dataFull.table_more&&o.a.createElement(p.default,{dataFull:this.props.dataFull.table_more}),o.a.createElement("div",{className:this.class_tablet+"-content-title-time"},this.props.dataFull.time))):"mobile"===this.props.device?o.a.createElement("div",null):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(n.Component);e.default=d},52:function(t,e,a){"use strict";a.r(e);var l=a(1078),s=a(1),i=a(2),r=a(5),n=a(4),o=a(0),c=a.n(o),p=a(3),d=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("table",{className:"malibu-desktop-uTableVertical"},c.a.createElement("tbody",null,this.props.dataFull.header.dataFull.Header.data.map((function(e,a){var s=p.a.managerTemplate_getComponent(t.props.dataFull.config_row[a].type);return c.a.createElement("tr",{key:a},c.a.createElement("td",null,e.title),c.a.createElement(s,{key:a,dataFull:Object(l.a)(Object(l.a)({},t.props.dataFull.data[a]),{},{config:t.props.dataFull.config_row[a].config,index_col:a})}))}))))}}]),a}(o.Component);e.default=d}}]);