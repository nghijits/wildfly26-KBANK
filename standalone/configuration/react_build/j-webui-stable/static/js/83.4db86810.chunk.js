(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[83],{145:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(1),i=a(3);class o extends n.Component{constructor(t){super(t),this.getData=()=>{let t={};return this.lang_system.forEach(e=>{const a=this.state.CCP_Default_Lang_config.list_lang_inputs.find(t=>t.dataFull.config.default.code_form_component===e.key);t[e.key]=a.dataFull.value}),t},this.loadDataToState=()=>({title:"Component name (languages)",helper:"Component name (languages)",list_lang_inputs:this.lang_system.map(t=>({dataFull:{config:{default:{title:t.view,class:"col-md-6 ",required:!1,placeholder:t.view,helper_description:"abc",code_form_component:t.key},cmd:{isHelper:!1,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data[t.key],abs_Change:this.onChangeValue}}))}),this.componentDidMount=()=>{this.setState({CCP_Default_Lang_config:this.loadDataToState()})},this.onChangeValue=(t,e)=>{let{CCP_Default_Lang_config:a}=this.state;a.list_lang_inputs.find(t=>t.dataFull.config.default.code_form_component===e).dataFull.value=t.target.value,this.setState({CCP_Default_Lang_config:a})},this.CCP_Default_Lang_textInput=Object(i.c)("CCP_Default_Lang_label"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.lang_system=l.g.getConfigUserDefault("list_lang_config"),this.data=this.readConfig(this.props.configComponent.configItem.lang),this.state={CCP_Default_Lang_config:{}}}readConfig(t){var e={};return void 0===t&&(t={}),this.lang_system.forEach(a=>{null!=t[a.key]?e[a.key]=t[a.key]:e[a.key]=""}),e}render(){const t=this.CCP_Default_Lang_textInput;return s.a.createElement(t,{stateData:this.state.CCP_Default_Lang_config})}}e.default=o}}]);