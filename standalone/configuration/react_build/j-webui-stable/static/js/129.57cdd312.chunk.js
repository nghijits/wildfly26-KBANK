(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[129],{174:function(a,t,e){"use strict";e.r(t);var o=e(0),l=e.n(o),i=e(1),n=e(3);class s extends o.Component{constructor(a){super(a),this.getData=()=>{let a=this.state.modal_config_layout.form,t={},e={};a.lang_layout.list_lang_inputs.forEach(a=>{const e=a.dataFull.config.default.code_form_component,o=a.dataFull.value;t[e]=o}),a.guide_layout.list_guide_inputs.forEach(a=>{const t=a.dataFull.config.default.code_form_component,o=a.dataFull.value;e[t]=o}),this.props.func_save_modal_config_layout({name:a.config_layout.name_layout.dataFull.value,class:a.config_layout.class_layout.dataFull.value,des:a.config_layout.guide_layout.dataFull.value,lang:t,lang_des:e,inputtype:this.state.data.inputtype,list_view:this.state.data.list_view,codeHidden:this.state.data.codeHidden})},this.readConfigLayout=a=>{var t={};return void 0===a&&(a={}),null!=a.name?t.name=a.name:t.name="",null!=a.des?t.des=a.des:t.des="",null!=a.class?t.class=a.class:t.class="col-md-12 col-lg-12",null!=a.lang?t.lang=a.lang:t.lang={},null!=a.lang_des?t.lang_des=a.lang_des:t.lang_des={},null!=a.codeHidden?t.codeHidden=a.codeHidden:t.codeHidden=i.g.autoID(),null!=a.inputtype?t.inputtype=a.inputtype:t.inputtype="",null!=a.list_view?t.list_view=a.list_view:t.list_view=[],t},this.nameLayout_configLayout=a=>this.lang_system.map(t=>({dataFull:{config:{default:{title:t.view,class:"col-md-6 ",required:!1,placeholder:t.view,helper:t.view,code_form_component:t.key},cmd:{isHelper:!1,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},value:a.lang[t.key]?a.lang[t.key]:"",abs_Change:this.func_configLayout_langLayout_change}})),this.guideLayout_configLayout=a=>this.lang_system.map(t=>({dataFull:{config:{default:{title:t.view,class:"col-md-6 ",required:!1,placeholder:t.view,helper:t.view,code_form_component:t.key},cmd:{isHelper:!1,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:a.lang_des[t.key]?a.lang_des[t.key]:"",abs_Change:this.func_configLayout_guideLayout_lang_change}})),this.func_configLayout_langLayout_en_change=a=>{let{modal_config_layout:t}=this.state;t.form.lang_layout.list_lang_inputs[1].dataFull.value=a.target.value,this.setState({modal_config_layout:t})},this.func_configLayout_langLayout_change=(a,t)=>{let{modal_config_layout:e}=this.state;e.form.lang_layout.list_lang_inputs.find(a=>a.dataFull.config.default.code_form_component===t).dataFull.value=a.target.value,this.setState({modal_config_layout:e})},this.func_configLayout_guideLayout_lang_change=(a,t)=>{let{modal_config_layout:e}=this.state;e.form.guide_layout.list_guide_inputs.find(a=>a.dataFull.config.default.code_form_component===t).dataFull.value=a.target.value,this.setState({modal_config_layout:e})},this.func_configLayout_change=(a,t)=>{let{modal_config_layout:e}=this.state;e.form.config_layout[t].dataFull.value=a.target.value,this.setState({modal_config_layout:e})},this.func_modalConfig_layout_close=()=>{this.props.func_close_modal_config_layout()},this.loadDataToState=()=>{let a={};return a.list_buttons=[{dataFull:{config:{default:{title:i.g.getLang("designForm_btn_cancel"),type:"",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.func_modalConfig_layout_close}},{dataFull:{config:{default:{title:i.g.getLang("designForm_btn_save"),type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}}],a.config_layout={title:i.g.getLang("designForm_configLayout_title"),name_layout:{dataFull:{config:{default:{title:i.g.getLang("designForm_configLayout_name"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_configLayout_name"),helper:i.g.getLang("designForm_configLayout_name_helper"),code_form_component:"name_layout"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.state.data.name,abs_Change:this.func_configLayout_change}},guide_layout:{dataFull:{config:{default:{title:i.g.getLang("designForm_configLayout_des"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_configLayout_des"),helper:i.g.getLang("designForm_configLayout_des_helper"),code_form_component:"guide_layout"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.state.data.des,abs_Change:this.func_configLayout_change}},class_layout:{dataFull:{config:{default:{title:i.g.getLang("designForm_configLayout_class"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_configLayout_class"),helper:i.g.getLang("designForm_configLayout_class_helper"),code_form_component:"class_layout"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.state.data.class,abs_Change:this.func_configLayout_change}}},a.guide_layout={title:i.g.getLang("designForm_configLayout_langdes"),helper:i.g.getLang("designForm_configLayout_langdes_helper"),list_guide_inputs:this.guideLayout_configLayout(this.state.data)},a.lang_layout={title:i.g.getLang("designForm_configLayout_langname"),helper:i.g.getLang("designForm_configLayout_langname_helper"),list_lang_inputs:this.nameLayout_configLayout(this.state.data)},a},this.componentDidMount=()=>{let{modal_config_layout:a}=this.state;a.form=this.loadDataToState(),a.modal={title:i.g.getLang("designForm_configLayout_title")+this.state.data.name,helper:" ",abs_Close:this.func_modalConfig_layout_close,visibility:!0},this.setState({modal_config_layout:a})},this.Modal_Config_Layout=Object(n.c)("designFormModal_ConfigLayout"),this.lang_system=i.g.getConfigUserDefault("list_lang_config"),this.state={modal_config_layout:{},data:this.readConfigLayout(this.props.data)}}render(){const a=this.Modal_Config_Layout;return l.a.createElement(a,{stateData:this.state.modal_config_layout})}}t.default=s}}]);