(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[47,25,491,492,493,494,495,496,497,498,499,630,644],{1078:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a.d(e,"a",(function(){return s}))},1079:function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function n(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,l=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){o=!0,s=t},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw s}}}}a.d(e,"a",(function(){return n}))},12:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(3),d=a(480),u=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n,s;return Object(i.a)(this,a),(n=e.call(this,t)).abstract_changeDevice=function(t){n.setState({device:t})},n.type_component="uFormLoading",n.code_component="malibu.uFormLoading",n.id_theme_component=Object(c.c)(),s=void 0===n.props.time_out?1e4:n.props.time_out,n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),time_out:s},n}return Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.i)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"malibu-desktop-uFormLoading ",style:{display:"flex",alignItems:"center",height:"100%",justifyContent:"center",position:"fixed",paddingBottom:"120px",background:"transparent",zIndex:"98",cursor:"wait"}},r.a.createElement("div",null,r.a.createElement("div",{className:"onclic-loading"}))))}}]),a}(o.Component);e.default=u},13:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(3),d=a(480),u=a(12),p=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(i.a)(this,a),(n=e.call(this,t)).abstract_changeDevice=function(t){n.setState({device:t})},n.class_desktop="malibu-desktop-uForm",n.type_component="uForm",n.code_component="malibu.uForm",n.id_theme_component=Object(c.c)();var s=n.props.sysStyle;return void 0===s&&(s={show:""}),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),sysStyle:s,isDisMount:"none"},n}return Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.i)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"componentDidUpdate",value:function(t){void 0!==this.props.sysStyle&&(void 0===t.sysStyle||this.props.sysStyle.show!==t.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var t,e,a,i,n,s,l,o;return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?r.a.createElement("div",{className:this.class_desktop+" "+(this.props.class?this.props.class:"col-12"),style:{display:this.props.dataFull.cmd.visibility}},(null===(t=this.props.dataFull)||void 0===t||null===(e=t.config)||void 0===e||null===(a=e.default)||void 0===a?void 0:a.title)?r.a.createElement("div",{className:this.class_desktop+"-title"},this.props.dataFull.config.default.title):null,(null===(i=this.props.dataFull)||void 0===i||null===(n=i.config)||void 0===n||null===(s=n.default)||void 0===s?void 0:s.title_sub)?r.a.createElement("div",{className:this.class_desktop+"-title-sub"},this.props.dataFull.config.default.title_sub):null,r.a.createElement("div",{className:this.class_desktop+"-content ",style:{paddingTop:this.props.dataFull.config.default.title?"28px":""}},(null===(l=this.props.dataFull.cmd)||void 0===l?void 0:l.isLoading)?r.a.createElement(u.default,null):null,this.props.children)):"mobile"===this.state.device?r.a.createElement("div",{className:this.class_desktop+" "+this.state.class,style:{display:this.props.dataFull.cmd.visibility}},r.a.createElement("div",{className:this.class_desktop+"-content ",style:{paddingTop:this.props.dataFull.config.default.title?"28px":""}},(null===(o=this.props.dataFull.cmd)||void 0===o?void 0:o.isLoading)?r.a.createElement(u.default,null):null,this.props.children)):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(o.Component);e.default=p},15:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(3),d=a(480),u=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).abstract_changeDeviceReal=function(t,e){n.setState({device:t,width:e.window_size.width})},n.type_component="uTableBodyRow",n.code_component="malibu.uTableBodyRow",n.id_theme_component=Object(c.c)(),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),isDisMount:"none"},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"componentWillUnmount",value:function(){Object(c.i)(this.id_theme_component)}},{key:"renderForDevice",value:function(){return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?this.props.children:"mobile"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"malibu-mobile-uTable-column-header"}),this.props.children):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){var t=this;return r.a.createElement("tr",{className:this.props.isCheck?"malibu-check":"",onClick:function(e){void 0!==t.props.abs_Click&&t.props.abs_Click(t.props.dataItem)}},this.renderForDevice())}}]),a}(o.Component);e.default=u},24:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(3),d=a(480),u=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).abstract_changeDevice=function(t){n.setState({device:t})},n.type_component="uView",n.code_component="malibu.uView",n.id_theme_component=Object(c.c)(),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)()},n}return Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.i)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"renderForDevice",value:function(){return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device||"mobile"===this.state.device?this.props.children:r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){var t,e,a,i,n,s,l,o,c,d,u,p,m,h,v;return r.a.createElement("div",{className:"malibu-desktop-uView"+((null===(t=this.props.dataFull)||void 0===t||null===(e=t.config)||void 0===e||null===(a=e.default)||void 0===a?void 0:a.class)?" "+(null===(i=this.props.dataFull)||void 0===i||null===(n=i.config)||void 0===n||null===(s=n.default)||void 0===s?void 0:s.class):" col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12")+((null===(l=this.props.dataFull)||void 0===l||null===(o=l.config)||void 0===o||null===(c=o.default)||void 0===c?void 0:c.isBorder)?" malibu-view-border":"")},r.a.createElement("div",{className:"malibu-desktop-uView-content"+((null===(d=this.props.dataFull)||void 0===d||null===(u=d.config)||void 0===u||null===(p=u.default)||void 0===p?void 0:p.isBorder)?" malibu-view-border":"")},(null===(m=this.props.dataFull)||void 0===m||null===(h=m.config)||void 0===h||null===(v=h.default)||void 0===v?void 0:v.title)?r.a.createElement("span",{className:"malibu-desktop-uView-title"},this.props.dataFull.config.default.title):null,r.a.createElement("div",{className:"row"},this.renderForDevice())))}}]),a}(o.Component);e.default=u},31:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(3),d=a(480),u=a(500),p=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n,s,l,o;Object(i.a)(this,a),(o=e.call(this,t)).abstract_changeDeviceReal=function(t,e){o.setState({device:t,width:e.window_size.width})},o.uFormTab_selectItem=function(t,e){var a,i=o.state.tabItem;if(i.length>0)for(var n=0;n<i.length;n++)i[n].sysStyle&&"show"===i[n].sysStyle.show&&(a=n),i[n].sysStyle={show:""};t!==a?void 0!==i[t].sysStyle&&(i[t].sysStyle={show:"show"}):i[t].sysStyle={show:"show"},o.setState({tabItem:i}),void 0!==o.props.dataFull.abs_select&&o.props.dataFull.abs_select(i,e)},o.class_desktop="malibu-desktop-uFormTab",o.class_mobile="malibu-mobile-uFormTab",o.type_component="uFormTab",o.code_component="malibu.uFormTab",o.id_theme_component=Object(c.c)();var r=null===(n=o.props.dataFull)||void 0===n?void 0:n.data,u=o.props.dataFull.isLoadingEnd;return void 0===u&&(u=!0),o.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),isOpenDefault:u,tabItem:r,tabSelected:null===r||void 0===r||null===(s=r[0])||void 0===s||null===(l=s.tabInfo)||void 0===l?void 0:l.id,isDisMount:"none"},o}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(t){if(void 0!==this.props.dataFull.isLoadingEnd&&void 0!==t.dataFull.isLoadingEnd&&this.props.dataFull.isLoadingEnd!==t.dataFull.isLoadingEnd&&!0===this.props.dataFull.isLoadingEnd&&this.props.dataFull.isLoadingEnd!==this.state.isOpenDefault&&this.setState({isOpenDefault:!0}),void 0!==this.props.dataFull.data&&void 0!==t.dataFull.data&&this.props.dataFull.data!==t.dataFull.data){var e=this.props.dataFull.data.filter((function(t){var e;return"show"===(null===t||void 0===t||null===(e=t.sysStyle)||void 0===e?void 0:e.show)})),a=this.state.tabSelected;e.length>0&&(a=e[0].tabInfo.id),this.setState({tabItem:this.props.dataFull.data,tabSelected:a})}}},{key:"componentWillUnmount",value:function(){Object(c.i)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"getDisplay",value:function(t){if(this.state.isOpenDefault)return t?"none":"block"}},{key:"renderForDevice",value:function(){var t,e,a=this;return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?(null===(t=this.props.dataFull.data)||void 0===t?void 0:t.length)>0&&r.a.createElement("div",{className:this.class_desktop+" col-md-12 col-lg-12 col-xl-12 "},r.a.createElement("div",{className:this.class_desktop+"-menu row"},this.state.tabItem.map((function(t,e){return void 0===t.sysStyle&&(t.sysStyle={show:""}),r.a.createElement(u.default,{key:t.codeHidden?t.codeHidden:e,index:e,device:a.state.device,tabInfo:t.tabInfo,uFormTab_selectItem:function(e,i){a.setState({tabSelected:t.tabInfo.id},(function(){return a.uFormTab_selectItem(e,i)}))},sysStyle:t.tabInfo.id===a.state.tabSelected?{show:"show"}:""})}))),this.state.tabItem.map((function(t){var e=t.tabInfo.id!==a.state.tabSelected;return r.a.createElement("div",{key:t.tabInfo.id,className:a.class_desktop+"-content col-sm-12 col-12 col-lg-12 ",style:{visibility:a.state.isOpenDefault?"":"hidden",display:a.getDisplay(e)}},t.DOM_elm)}))):"mobile"===this.state.device?(null===(e=this.props.dataFull.data)||void 0===e?void 0:e.length)>0&&r.a.createElement("div",{className:this.class_mobile+" col-md-12 col-lg-12 col-xl-12 "},r.a.createElement("div",{className:this.class_mobile+"-menu-div"},r.a.createElement("div",{className:this.class_mobile+"-menu"},this.state.tabItem.map((function(t,e){return void 0===t.sysStyle&&(t.sysStyle={show:""}),r.a.createElement(u.default,{key:t.codeHidden?t.codeHidden:e,index:e,device:a.state.device,tabInfo:t.tabInfo,modeStaticForm:a.props.dataFull.modeStaticForm,uFormTab_selectItem:function(e,i){a.setState({tabSelected:t.tabInfo.id},(function(){return a.uFormTab_selectItem(e,i)}))},sysStyle:t.tabInfo.id===a.state.tabSelected?{show:"show"}:""})})))),this.state.tabItem.map((function(t){var e=t.tabInfo.id!==a.state.tabSelected;return r.a.createElement("div",{key:t.tabInfo.id,className:a.class_mobile+"-content col-sm-12 col-12 col-lg-12 ",style:{visibility:a.state.isOpenDefault?"":"hidden",display:a.getDisplay(e)}},t.DOM_elm)}))):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(o.Component);e.default=p},469:function(t,e,a){"use strict";a.r(e);var i=a(1078),n=a(1079),s=a(1),l=a(2),o=a(5),r=a(4),c=a(0),d=a.n(c),u=a(13),p=a(24),m=a(21),h=a(26),v=a(31),b=a(545),f=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"renderTableDevice",value:function(t){var e=this;return d.a.createElement(p.default,{key:t},"1"===t&&d.a.createElement("div",{className:"malibu-FER-div",style:{width:"99.969%",display:"inline-block"}},d.a.createElement("div",{className:"row"},d.a.createElement("div",{style:{fontWeight:"550",marginRight:"5px"}},this.props.stateData.dateTimeUpdate.title),d.a.createElement("div",{style:{paddingLeft:"26px"}},this.props.stateData.dateTimeUpdate.date)),d.a.createElement("hr",{style:{width:"100%",border:"1px solid #E3E4E5",marginTop:"32px"}}),d.a.createElement(h.default,{dataFull:this.props.stateData.table.dataFull},this.props.stateData.table_data.map((function(t,a){var i=e.props.stateData.table_config;return d.a.createElement(b.default,{title_parent_data:e.props.stateData.table.dataFull.Header.data,key:a,index_row:a,data_config:i,data_column:t})})))),"2"===t&&d.a.createElement("div",{className:"malibu-FER-div",style:{width:"99.969%",display:"inline-block"}},d.a.createElement("div",{className:"row"},d.a.createElement("div",{style:{fontWeight:"550",marginRight:"5px"}},this.props.stateData.last_update_local.title),d.a.createElement("div",{style:{paddingLeft:"26px"}},this.props.stateData.last_update_local.date)),d.a.createElement("hr",{style:{width:"100%",border:"1px solid #E3E4E5",marginTop:"32px"}}),d.a.createElement(h.default,{dataFull:this.props.stateData.table_local.dataFull},this.props.stateData.table_local_data.map((function(t,a){var i=e.props.stateData.table_local_config;return d.a.createElement(b.default,{key:a,index_row:a,data_config:i,data_column:t,title_parent_data:e.props.stateData.table.dataFull.Header.data})})))))}},{key:"renderForDevice",value:function(){var t,e=[],a=Object(n.a)(this.props.stateData.tab);try{for(a.s();!(t=a.n()).done;){var s=t.value;e.push({tabInfo:{title:s.title,id:s.id},DOM_elm:this.renderTableDevice(s.id)})}}catch(l){a.e(l)}finally{a.f()}return e={data:e},d.a.createElement(u.default,{dataFull:this.props.stateData.form},d.a.createElement("div",{className:"row"},d.a.createElement(m.default,{dataFull:Object(i.a)(Object(i.a)({},this.props.stateData.modify_rate.dataFull),{},{abs_Click:this.props.stateData.modify_rate.abs_Click})}),d.a.createElement(m.default,{dataFull:Object(i.a)(Object(i.a)({},this.props.stateData.save_rate.dataFull),{},{abs_Click:this.props.stateData.save_rate.abs_Click})}),d.a.createElement(m.default,{dataFull:Object(i.a)(Object(i.a)({},this.props.stateData.view_modify.dataFull),{},{abs_Click:this.props.stateData.view_modify.abs_Click})}),d.a.createElement(m.default,{dataFull:Object(i.a)(Object(i.a)({},this.props.stateData.approve.dataFull),{},{abs_Click:this.props.stateData.approve.abs_Click})}),d.a.createElement(m.default,{dataFull:Object(i.a)(Object(i.a)({},this.props.stateData.reject.dataFull),{},{abs_Click:this.props.stateData.reject.abs_Click})})),d.a.createElement(v.default,{dataFull:Object(i.a)(Object(i.a)({},e),{},{modeStaticForm:!0})}))}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(c.Component);e.default=f},500:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(i.a)(this,a);var s=(n=e.call(this,t)).props.sysStyle;return n.state={sysStyle:s},n}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(t){void 0!==this.props.sysStyle&&(void 0===t.sysStyle||this.props.sysStyle.show!==t.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var t=this;return"desktop"===this.props.device||"desktop_small"===this.props.device||"desktop_small"===this.props.device||"tablet"===this.props.device?r.a.createElement("div",{className:"malibu-desktop-uFormTabItem-info "+this.state.sysStyle.show,onClick:function(){t.props.uFormTab_selectItem(t.props.index,t.props.tabInfo.id)}},this.props.tabInfo.title?r.a.createElement("span",{className:"malibu-desktop-uFormTabItem-span",style:this.state.style},r.a.createElement("div",null,this.props.tabInfo.title)):null):"mobile"===this.props.device?r.a.createElement("div",{className:"malibu-mobile-uFormTabItem-info  "+this.state.sysStyle.show+(this.props.modeStaticForm?" col malibu-mode_staticForm":""),onClick:function(){t.props.uFormTab_selectItem(t.props.index,t.props.tabInfo.id)}},this.props.tabInfo.title?r.a.createElement("div",{className:"malibu-mobile-uFormTabItem-span",style:this.state.style},r.a.createElement("div",null,this.props.tabInfo.title)):null):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(o.Component);e.default=c},534:function(t,e,a){"use strict";a.r(e);var i=a(1078),n=a(1),s=a(2),l=a(5),o=a(4),r=a(0),c=a.n(r),d=a(3),u=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=d.a.managerTemplate_getComponent(this.props.type);return c.a.createElement(t,{dataFull:Object(i.a)(Object(i.a)({},this.props.item),{},{title_parent:this.props.title_parent,config:this.props.data_config[this.props.index_col].config,index_row:this.props.index_row,index_col:this.props.index_col})})}}]),a}(r.PureComponent);e.default=u},545:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(2),s=a(5),l=a(4),o=a(0),r=a.n(o),c=a(534),d=a(15),u=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(d.default,null,this.props.data_column.map((function(e,a){return r.a.createElement(c.default,{key:a,item:e,index_row:t.props.index_row,index_col:a,data_config:t.props.data_config,type:t.props.data_config[a].type,title_parent:t.props.title_parent_data[a].title})})))}}]),a}(o.PureComponent);e.default=u}}]);