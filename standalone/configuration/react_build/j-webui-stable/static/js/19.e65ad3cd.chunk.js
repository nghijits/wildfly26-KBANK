(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[19],{181:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),l=a(207),o=a(206),n=a(204),r=a(205),g=a(203),u=a(1);class d extends i.Component{constructor(t){var e,a,i;super(t);let s=u.g.context_get("user_acc");this.additionalConfig={dataHeader:{info_server_time:{tooltip:{title_big:u.g.getLang("header_desktopO9_workingDate")},title:(null===s||void 0===s||null===(e=s.RESULT)||void 0===e?void 0:e.WORKINGDATE)||""},info_server_branch:{tooltip:{title_status:u.g.getLang("header_desktopO9_branchOpen")},isClose:!1,title:(null===s||void 0===s||null===(a=s.RESULT)||void 0===a?void 0:a.BRNAME)||"",code:(null===s||void 0===s||null===(i=s.RESULT)||void 0===i?void 0:i.BRANCD)||""},persist_info_user_add:{tooltip:{title_bold:"Bank "+u.g.getLang("header_isopen"),title_big:u.g.context_get("user_jwebui.email"),title_sub:(null===s||void 0===s?void 0:s.usrname)||"",isClose:!1}}}}}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,null),s.a.createElement(r.a,null),s.a.createElement(l.a,{additionalConfig:this.additionalConfig}),s.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},s.a.createElement("div",{className:"main-activity",style:{width:"100%"}},s.a.createElement("div",{className:"col",style:{width:"calc(100% - 294px)"}},s.a.createElement(n.a,null),s.a.createElement(o.a,null)))))}}e.default=d},203:function(t,e,a){"use strict";var i=a(6),s=a(0),l=a.n(s),o=a(1),n=a(4),r=a(8),g=a(3),u=a(54);class d extends s.Component{constructor(t){super(t),this.onLogin=()=>{let t=this.LOGIC_PASSWORD.getPasswordDecode();Object(n.b)([{txcode:"#sys:bo-relogin-login",input:{p:t,pin:t}}],{}).then(t=>{this.stausLogin(o.g.foGetData("login-status",t))},t=>{})},this.abs_Change=t=>{let{dataFull:e}=this.state;e.PIN.data=this.LOGIC_PASSWORD.setPassword(t.target.value.trim()),this.setState({dataFull:e})},this.startRelogin=()=>{this.setState({show:"block"},()=>{r.a.quickPost([{txcode:"#sys:bo-relogin-lockToken",input:{}}],{})})},this.LOGIC_PASSWORD=new u.a,this.USER_INFO=o.g.context_get("user_jwebui");let e=o.g.relogin_getStatus();e=e?"block":"none";let a=o.g.profileUser_get("bgrelogin");""===a.trim()&&(a="../rs/global/img/lock_screen.jpg");let i=o.g.profileUser_get("avatar");""===i.trim()&&(i="../rs/global/img/avatar.jpg");let s=o.g.relogin_loginFalseCurrent();this.state={dataFull:{status:{title:this.getStatusTitle()},PIN:{placeholder:this.getPINPlaceholder(),data:"",abs_Change:this.abs_Change,abs_Submit:this.onLogin},number_import:{title:this.getNumberWrongPassword(s)},background:{value:a},avatar:{value:i},mode:{disable:{status:!1,title:"Your screen is disabled"}}},show:e},this.flag_Unmount=!1}getStatusTitle(){return this.USER_INFO.email}getPINPlaceholder(){return o.g.getLang("unlock_password_placeholder")}getNumberWrongPassword(t){return`${o.g.getLang("number_times_remaining")}: ${o.g.relogin_maxLoginFalse()-t}`}stausLogin(t){let{dataFull:e}=this.state;if(e.PIN.data="",this.setState({dataFull:e}),void 0!==t){if(void 0!==t.status_login&&"login#127"===t.status_login)return e.number_import.title=this.getNumberWrongPassword(0),this.setState({show:"none",dataFull:e}),o.g.relogin_resetCount(),void o.g.relogin_setStatus(!1);void 0!==t.error_login&&(o.g.relogin_up_loginFalse(),e.number_import.title=this.getNumberWrongPassword(o.g.relogin_loginFalseCurrent()),this.setState({dataFull:e}),alert(o.g.getLang(t.error_login)),o.g.relogin_checkOverLoadLoginFalse()&&r.a.fo([{txcode:"#sys:fo-goto-pageLogin",input:{}}],{}))}}componentWillUnmount(){this.flag_Unmount=!0}componentDidMount(){o.g.relogin_setForm(this)}render(){const t=Object(g.b)("uLockScreen");return l.a.createElement(t,{dataFull:Object(i.a)(Object(i.a)({},this.state.dataFull),{isShow:"none"!==this.state.show})})}}e.a=d}}]);