(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[583,25,238,491,492,493,494,495,496,497,498,499,646],{1078:function(e,t,a){"use strict";function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return n}))},14:function(e,t,a){"use strict";a.r(t);var i=a(1),l=a(2),n=a(5),s=a(4),r=a(0),o=a.n(r),u=a(3),c=a(480),m=a(498),d=a(6),b=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var l;Object(i.a)(this,a),(l=t.call(this,e)).abstract_changeDevice=function(e){l.setState({device:e})},l.abs_changeLang=function(e){l.setState({sidebarBody:e})},l.uSidebarMenu_selectItem=function(e){var t,a=l.state.sidebarBody;if(a.length>0)for(var i=0;i<a.length;i++){a[i].sysStyle&&!0===a[i].sysStyle.show&&(t=i),a[i].sysStyle={show:!1};for(var n=0;n<a[i].data.length;n++)a[i].data[n].sysStyle&&!0===a[i].data[n].sysStyle.show&&(t=n),a[i].data[n].sysStyle={show:!1}}e!==t&&(a[e].sysStyle={show:!0}),l.setState({sidebarBody:a})},l.uSidebarMenu_selectItemChild=function(e,t){var a,i=l.state.sidebarBody;if(i.length>0)for(var n=0;n<i.length;n++)for(var s=0;s<i[n].data.length;s++)i[n].data[s].sysStyle&&!0===i[n].data[s].sysStyle.show&&(a=s),i[n].data[s].sysStyle={show:!1};t!==a&&(i[e].data[t].sysStyle={show:!0}),l.setState({sidebarBody:i})},l.checkData=function(){for(var e=l.state.sidebarBody,t=0;t<e.length;t++)void 0===e[t].sysStyle&&(e[t].sysStyle={}),void 0!==e[t].sysStyle.show&&"show"!==e[t].sysStyle.show||(e[t].sysStyle.show="");l.setState({sidebarBody:e})},l.closeNav=function(){l.checkData(),l.setState({show:""}),"mobile"!==l.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100})},l.type_component="uSlidebar",l.code_component="malibu.uSidebarMenu",l.id_theme_component=Object(u.c)();var n=l.props.dataFull.sidebarBody;return void 0===n&&(n=[]),l.state={device:Object(u.f)(),skin_config:Object(c.configTemplate_getTheme)(),sidebarBody:n,show:"",isDisMount:"none"},l}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){Object(u.i)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(u.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-header",style:{userSelect:"none"}},o.a.createElement("div",{tabIndex:0,className:"malibu-desktop-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu"},o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,device_option:t.device_option,device:e.state.device,data:t.data,sysStyle:t.sysStyle,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))),o.a.createElement("div",{className:"blank"})):"mobile"===this.state.device?o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},o.a.createElement("div",{className:"malibu-mobile-uSidebarMenu-header",style:{userSelect:"none",background:"unset "}},o.a.createElement("div",{tabIndex:0,className:"malibu-mobile-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},o.a.createElement("i",{className:"material-icons-outlined"},"menu"))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu ",onClick:function(e){e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-div",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),e.target.focus(),e.stopPropagation(),e.preventDefault()}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header"},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header-button_close",onClick:function(){e.closeNav()}},o.a.createElement(d.default,{val:"close",style:{fontSize:"28px"}}))),o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-content"},o.a.createElement("ul",{className:"malibu-mobile-uSidebarMenu-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.stopPropagation(),e.preventDefault()},style:{padding:"0px 16px"}},this.state.sidebarBody.map((function(t,a){return o.a.createElement(m.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,data:t.data,device_option:t.device_option,sysStyle:t.sysStyle,device:e.state.device,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))))):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openNav",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:500,duration:100})):(this.setState({show:""}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100}),this.checkData())}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component);t.default=b},15:function(e,t,a){"use strict";a.r(t);var i=a(1),l=a(2),n=a(5),s=a(4),r=a(0),o=a.n(r),u=a(3),c=a(480),m=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).abstract_changeDeviceReal=function(e,t){l.setState({device:e,width:t.window_size.width})},l.type_component="uTableBodyRow",l.code_component="malibu.uTableBodyRow",l.id_theme_component=Object(u.c)(),l.state={device:Object(u.f)(),skin_config:Object(c.configTemplate_getTheme)(),isDisMount:"none"},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){Object(u.b)(this,this.id_theme_component)}},{key:"componentWillUnmount",value:function(){Object(u.i)(this.id_theme_component)}},{key:"renderForDevice",value:function(){return"desktop"===this.state.device||"desktop_small"===this.state.device||"tablet"===this.state.device?this.props.children:"mobile"===this.state.device?o.a.createElement(o.a.Fragment,null,o.a.createElement("td",{className:"malibu-mobile-uTable-column-header"}),this.props.children):o.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){var e=this;return o.a.createElement("tr",{className:this.props.isCheck?"malibu-check":"",onClick:function(t){void 0!==e.props.abs_Click&&e.props.abs_Click(e.props.dataItem)}},this.renderForDevice())}}]),a}(r.Component);t.default=m},498:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var i=a(1),l=a(2),n=a(5),s=a(4),r=a(0),o=a.n(r),u=a(3),c=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={sysStyle:{show:!1}},l}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){void 0!==this.props.sysStyle&&(void 0===e.sysStyle||this.props.sysStyle.show!==e.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.props.device||"desktop_small"===this.props.device||"desktop_small"===this.props.device||"tablet"===this.props.device?o.a.createElement("li",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li "+this.state.sysStyle.show},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-title",onClick:function(){0===e.props.data.length&&e.props.closeNav()}},o.a.createElement("span",{"aria-hidden":"true",className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-icon material-icons-outlined "},Object(u.d)(this.props.icon)),o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("div",{className:"transparent"}),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul"},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=""),o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length&&(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav())}},o.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-title"},o.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),o.a.createElement("div",{className:"transparent-child"}),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul "},t.data.map((function(t,a){return o.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul-li",onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()},style:{cursor:"pointer"}},t.title)}))))})))):"mobile"===this.props.device?o.a.createElement("li",{className:"malibu-mobile-navbar-list-menu-ul-li "+(this.state.sysStyle.show?"expand":"")},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-ul-li-title ",onClick:function(){0===e.props.data.length?e.props.closeNav():e.props.uSidebarMenu_chooseItem(e.props.index)}},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-1"},"keyboard_arrow_right")),this.props.data.length>0&&o.a.createElement("ul",{className:"malibu-mobile-navbar-list-menu-child-ul",style:{display:this.state.sysStyle.show?"block":"none"}},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=!1),o.a.createElement("li",{key:a,className:"malibu-mobile-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length?(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()):void 0!==e.props.uSidebarMenu_selectItemChild&&e.props.uSidebarMenu_selectItemChild(e.props.index,a)}},o.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-child-ul-li-title "+(t.sysStyle.show?"expand":"")},o.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&o.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-2"},"keyboard_arrow_right")),t.data.length>0&&o.a.createElement("ul",{key:a,className:"malibu-mobile-navbar-list-menu-child-child-ul ",style:{display:t.sysStyle.show?"block":"none"}},t.data.map((function(a,i){return o.a.createElement("li",{key:i,className:"malibu-mobile-navbar-list-menu-child-child-ul-li "+(0===i?"first":"")+(i===t.data.length-1?"last":""),onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(a),e.props.closeNav()},style:{cursor:"pointer"}},a.title)}))))})))):null}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(r.Component)},614:function(e,t,a){"use strict";a.r(t);var i=a(1078),l=a(1),n=a(2),s=a(5),r=a(4),o=a(0),u=a.n(o),c=a(26),m=a(3),d=a(14),b=a(34),p=a(15),h=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).abs_autoCallBackData=function(){},i.state={table_header:i.getTableHeaderConfigStepSummary(),table_data:[i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary(),i.getTableDataStepSummary()],table_config:i.getTableConfigStepSummary()},i}return Object(n.a)(a,[{key:"getTableHeaderConfigStepSummary",value:function(){return{dataFull:{Header:{data:[{title:"Select",config:{width:"",isFrozen:!1}},{title:"Step Name",config:{width:"",isFrozen:!1}},{title:"Comment",config:{width:"",isFrozen:!1}},{title:"Status",config:{width:"",isFrozen:!1}},{title:"Percent Started",config:{width:"",isFrozen:!1}},{title:"Status Decs",config:{width:"",isFrozen:!1}},{title:"Start At",config:{width:"",isFrozen:!1}},{title:"End At",config:{width:"",isFrozen:!1}},{title:"Threads Created",config:{width:"",isFrozen:!1}},{title:"Threads Running",config:{width:"",isFrozen:!1}},{title:"Threads Completed",config:{width:"",isFrozen:!1}},{title:"Threads Canceled",config:{width:"",isFrozen:!1}},{title:"Threads Failed",config:{width:"",isFrozen:!1}},{title:"Total Threads",config:{width:"",isFrozen:!1}},{title:"Total Started",config:{width:"",isFrozen:!1}},{title:"Total Duration",config:{width:"",isFrozen:!1}},{title:"Total Remaining",config:{width:"",isFrozen:!1}}],config:{mode:{hasSearch:!1}}},config:{},abs_autoCallBackData:this.abs_autoCallBackData}}}},{key:"getTableConfigStepSummary",value:function(){return[{type:"uTableColumnCheckbox"},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnIcon"},{type:"uTableColumnProgressBar"},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}}]}},{key:"getTableDataStepSummary",value:function(){return{data:[{isCheck:!0,dataItem:{},abs_Click:this.checkStepHandler},{data:"item.stepname"},{data:"item.comments"},{data:[{val:"add_circle",color:"blue",title:"warning",class:"-round"}]},{percent:"item.percentstarted"},{data:"item.statusdesc"}],dataItem:{},abs_Click:this.onClickRowTableStepSummary}}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"d-flex col-12 malibu-desktop-header"},u.a.createElement(d.default,{dataFull:this.props.dataFull.uSlidebarMenu}),u.a.createElement("div",{className:"main",style:{width:"100%"}},u.a.createElement(b.default,{sysCallBack:this.sysCallBack,dataFull:this.props.dataFull.uHeader}))),u.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},u.a.createElement("div",{className:"main",style:{width:"100%",paddingLeft:"16px"}},u.a.createElement(c.default,this.state.table_header,this.state.table_data.map((function(t,a){var l=e.state.table_config;return u.a.createElement(p.default,{key:a,abs_Click:t.abs_Click,dataItem:t.dataItem},t.data.map((function(e,t){var n=m.a.managerTemplate_getComponent(l[t].type);return u.a.createElement(n,{key:t,dataFull:Object(i.a)(Object(i.a)({},e),{},{config:l[t].config,index_row:a,index_col:t})})})))}))))))}}]),a}(o.Component);t.default=h}}]);