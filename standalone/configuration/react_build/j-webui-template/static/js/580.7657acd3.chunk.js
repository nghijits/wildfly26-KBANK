(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[580,25,244,342,352,491,492,493,494,495,496,497,498,499],{1078:function(t,e,a){"use strict";function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a.d(e,"a",(function(){return o}))},15:function(t,e,a){"use strict";a.r(e);var l=a(1),i=a(2),o=a(5),n=a(4),s=a(0),r=a.n(s),d=a(3),u=a(480),c=function(t){Object(o.a)(a,t);var e=Object(n.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).abstract_changeDeviceReal=function(t,e){i.setState({device:t,width:e.window_size.width})},i.type_component="uTableBodyRow",i.code_component="malibu.uTableBodyRow",i.id_theme_component=Object(d.c)(),i.state={device:Object(d.f)(),skin_config:Object(u.configTemplate_getTheme)(),isDisMount:"none"},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){Object(d.b)(this,this.id_theme_component)}},{key:"componentWillUnmount",value:function(){Object(d.i)(this.id_theme_component)}},{key:"renderForDevice",value:function(){return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?this.props.children:"mobile"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"malibu-mobile-uTable-column-header"}),this.props.children):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){var t=this;return r.a.createElement("tr",{className:this.props.isCheck?"malibu-check":"",onClick:function(e){void 0!==t.props.abs_Click&&t.props.abs_Click(t.props.dataItem)}},this.renderForDevice())}}]),a}(s.Component);e.default=c},22:function(t,e,a){"use strict";a.r(e);var l=a(1),i=a(2),o=a(5),n=a(4),s=a(0),r=a.n(s),d=a(6),u=function(t){Object(o.a)(a,t);var e=Object(n.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).class_desktop="malibu-tooltip-button",i.state={},i}return Object(i.a)(a,[{key:"getPaddingForm",value:function(){}},{key:"getPosition",value:function(){if(void 0!==this.ref_myToolTipButton&&null!==this.ref_myToolTipButton){var t;(null===(t=this.props.dataFull.mode)||void 0===t?void 0:t.isTable)||(this.ref_myToolTipButton.style.bottom="-19px"),this.setState({render:"render"})}}},{key:"componentDidMount",value:function(){this.getPosition()}},{key:"renderForCondition",value:function(){var t=this;return r.a.createElement("div",{className:this.class_desktop,ref:function(e){t.ref_myToolTipButton=e},onMouseDown:function(e){var a;e.preventDefault(),e.stopPropagation(),(null===(a=t.props.dataFull.mode)||void 0===a?void 0:a.isTable)&&void 0!==t.props.dataFull.abs_Click&&t.props.dataFull.abs_Click(t.props.dataFull.value)},onClick:function(){void 0!==t.props.dataFull.abs_Click&&t.props.dataFull.abs_Click(t.props.dataFull.value)}},r.a.createElement(d.default,{val:this.props.dataFull.icon,style:{width:"18px",height:"18px",fontSize:"18px"}}),r.a.createElement("div",{className:this.class_desktop+"-title"},this.props.dataFull.title))}},{key:"render",value:function(){return this.renderForCondition()}}]),a}(s.Component);e.default=u},539:function(t,e,a){"use strict";a.r(e);var l=a(1078),i=a(1),o=a(2),n=a(5),s=a(4),r=a(0),d=a.n(r),u=a(26),c=a(15),p=a(3),m=a(21),h=a(71),f=a(61),b=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(t){var l;return Object(i.a)(this,a),(l=e.call(this,t)).class_desktop="malibu-desktop-jwebui_roleProfile",l.state={search_left:{val_search:""},search_right:{val_search:""},tabItem:1},l}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.table_key;return d.a.createElement("div",{className:"malibu-role_profile-div",style:{width:"100%",marginTop:"32px",display:"inline-block"}},d.a.createElement(m.default,this.props.stateData.list_app[e].btn_save),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-xl-9 c0l-lg-9 col-md-8 col-sm-8",style:{position:"relative"}},d.a.createElement("div",{style:{paddingTop:"20px"}},d.a.createElement("div",{className:this.class_desktop+"-title-table"},this.props.stateData.list_app[e].table_list_forms.title),d.a.createElement(u.default,{dataFull:this.props.stateData.list_app[e].table_list_forms.table.dataFull},this.props.stateData.list_app[e].table_list_forms.table_data.map((function(a,i){var o=t.props.stateData.list_app[e].table_list_forms.table_config;return d.a.createElement(c.default,{key:i},a.data.map((function(t,e){var a=p.a.managerTemplate_getComponent(o[e].type);return d.a.createElement(a,{key:e,dataFull:Object(l.a)(Object(l.a)({},t),{},{config:o[e].config})})})))})))),d.a.createElement("div",{style:{paddingTop:"20px"}},d.a.createElement("div",{className:this.class_desktop+"-title-table"},this.props.stateData.list_app[e].table_list_lang.title),d.a.createElement(u.default,{dataFull:this.props.stateData.list_app[e].table_list_lang.table},this.props.stateData.list_app[e].table_list_lang.table_data.data.map((function(a,i){return d.a.createElement(c.default,{key:i},a.all_column.map((function(a,o){return 0===o?d.a.createElement(f.default,{key:o,dataFull:Object(l.a)(Object(l.a)({},a),{},{title_parent:t.props.stateData.list_app[e].table_list_lang.table.Header.data[o].title})}):d.a.createElement(h.default,{key:o,dataFull:Object(l.a)(Object(l.a)({},a),{},{title_parent:t.props.stateData.list_app[e].table_list_lang.table.Header.data[o].title,index_row:i,index_col:o})})})))})))))))}}]),a}(r.Component);e.default=b},61:function(t,e,a){"use strict";a.r(e);var l=a(1078),i=a(1),o=a(2),n=a(5),s=a(4),r=a(0),d=a.n(r),u=a(22),c=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(t){var l;return Object(i.a)(this,a),(l=e.call(this,t)).abs_ClickTooltip=function(t){window.getSelection&&(window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()),l.ref_myData.blur(),void 0!==l.props.dataFull.abs_Copy&&l.props.dataFull.abs_Copy(t)},l.state={tooltip_copy:{value:"",isShow:"",mousePosition:{clientX:0,offset_item:0,clientY:0}}},l}return Object(o.a)(a,[{key:"getPaddingOutLine",value:function(){return(window.innerWidth-this.getTableParent(this.ref_myData).offsetWidth)/2}},{key:"getOffsetItem",value:function(){return this.ref_myData.offsetLeft-this.getTableParent(this.ref_myData).scrollLeft}},{key:"checkClassName",value:function(t){for(var e=0;e<t.length;e++)if("malibu-desktop-uTable"===t[e])return!0;return!1}},{key:"getTableParent",value:function(t){return t?this.checkClassName(t.classList)?t:this.getTableParent(t.parentElement):null}},{key:"getEqual",value:function(t,e){return t.trim()===e.trim()}},{key:"render",value:function(){var t,e,a,i=this;return d.a.createElement("td",{className:"malibu-desktop-uTable-td"+((null===(t=this.props.dataFull.config)||void 0===t?void 0:t.isFrozen)?" frozen":"")+" malibu-desktop-uTableColumnDefault"+("right"===(null===(e=this.props.dataFull.config)||void 0===e?void 0:e.mode)?"-right":"center"===(null===(a=this.props.dataFull.config)||void 0===a?void 0:a.mode)?"-center":"-left"),tabIndex:-1,ref:function(t){i.ref_myData=t},style:{outline:"none"},onBlur:function(t){i.setState({tooltip_copy:{isShow:!1,value:"",mousePosition:{clientX:0,clientY:0,offset_item:0}}})},onMouseDown:function(){window.getSelection&&(window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges())},onMouseUp:function(t){i.ref_myData.focus();var e=i.state.tooltip_copy;window.getSelection().toString()&&i.getEqual(window.getSelection().toString(),i.props.dataFull.data)&&i.props.dataFull.tooltip_copy?(e.value=window.getSelection().toString(),e.isShow=!0,e.mousePosition.clientX=t.clientX,e.mousePosition.clientY=0,e.mousePosition.offset_item=i.getOffsetItem()):(e.value="",e.isShow=!1,e.mousePosition={clientX:0,clientY:0,offset_item:0}),i.setState({tooltip_copy:e})},"data-title":this.props.dataFull.title_parent},d.a.createElement("div",{className:"malibu-desktop-uTableColumnDefault-value"},this.props.dataFull.data),this.state.tooltip_copy.isShow&&this.props.dataFull.tooltip_copy&&d.a.createElement(u.default,{dataFull:Object(l.a)(Object(l.a)({},this.props.dataFull.tooltip_copy),{},{mousePosition:this.state.tooltip_copy.mousePosition,value:this.state.tooltip_copy.value,abs_Click:this.abs_ClickTooltip,mode:{isTable:!0}})}))}}]),a}(r.Component);e.default=c},71:function(t,e,a){"use strict";a.r(e);var l=a(1),i=a(2),o=a(5),n=a(4),s=a(0),r=a.n(s),d=a(6),u=function(t){Object(o.a)(a,t);var e=Object(n.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).class_desktop="malibu-desktop-uTableColumnEditInput",i.readOnly=!0,i.state={readOnly:i.readOnly,valueDefault:i.props.dataFull.data,isChange:!1,isChanged:!1},i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(t){void 0!==this.props.dataFull.data&&void 0!==t.dataFull.data&&this.props.dataFull.data!==t.dataFull.data&&(this.props.dataFull.data!==this.state.valueDefault&&this.state.isChanged?this.setState({isChange:!0}):this.setState({isChange:!1})),void 0!==this.props.dataFull.isUpdate&&this.props.dataFull.isUpdate!==t.dataFull.isUpdate&&!0===this.props.dataFull.isUpdate&&this.setState({isChange:!1,isChanged:!1,valueDefault:this.props.dataFull.data})}},{key:"render",value:function(){var t,e,a,l,i,o,n=this;return r.a.createElement("td",{className:"malibu-desktop-uTable-td malibu-uTableColumnEditInput-td"+((null===(t=this.props.dataFull.config)||void 0===t?void 0:t.isFrozen)?" frozen":""),"data-title":this.props.dataFull.title_parent},r.a.createElement("div",{className:"row malibu-uTableColumnEditInput-div"},r.a.createElement("div",{className:this.class_desktop},this.state.readOnly?r.a.createElement("div",{className:this.class_desktop+"-title"+(!1!==this.props.dataFull.hasChange&&this.state.isChange?" change":""),style:{textAlign:(null===(e=this.props.dataFull.default)||void 0===e?void 0:e.textAlign)||"left"}},this.props.dataFull.data):r.a.createElement("input",{ref:function(t){n.myImgEdit=t},className:this.class_desktop+"-input"+(this.state.readOnly?"":" edit")+(!1!==this.props.dataFull.hasChange&&this.state.isChange?" change":""),value:this.props.dataFull.data||"",readOnly:this.state.readOnly,disabled:!!(null===(a=this.props.dataFull.cmd)||void 0===a?void 0:a.disable),onChange:function(t){var e;void 0===n.props.dataFull.abs_Change||n.readOnly||(null===(e=n.props.dataFull.cmd)||void 0===e?void 0:e.disable)||n.props.dataFull.abs_Change(t,n.props.dataFull.dataItem,n.props.dataFull.index_row,n.props.dataFull.index_col),n.setState({isChanged:!0})},onKeyDown:function(t){var e;void 0===n.props.dataFull.abs_KeyDown||n.readOnly||(null===(e=n.props.dataFull.cmd)||void 0===e?void 0:e.disable)||n.props.dataFull.abs_KeyDown(t,n.props.dataFull.dataItem,n.props.dataFull.index_row,n.props.dataFull.index_col)},onBlur:function(){n.setState({readOnly:!0},(function(){n.readOnly=!0,n.props.dataFull.abs_Submit&&n.props.dataFull.abs_Submit(n.props.dataFull.dataItem,n.props.dataFull.index_row,n.props.dataFull.index_col)}))},style:{width:this.state.readOnly?this.props.dataFull.data.length+3+"ch":"100%",background:(null===(l=this.props.dataFull.cmd)||void 0===l?void 0:l.disabled)?"rgba(227, 228, 229, 0.8)":"transparent",textAlign:(null===(i=this.props.dataFull.default)||void 0===i?void 0:i.textAlign)||"left"}}),!(null===(o=this.props.dataFull.cmd)||void 0===o?void 0:o.disable)&&r.a.createElement("div",{className:this.class_desktop+"-edit",onClick:function(){n.setState({readOnly:!1},(function(){n.readOnly=!1,void 0!==n.myImgEdit&&n.myImgEdit.focus()}))}},r.a.createElement(d.default,{val:"edit",style:{fontSize:"20px"},title:"edit"})))))}}]),a}(s.Component);e.default=u}}]);