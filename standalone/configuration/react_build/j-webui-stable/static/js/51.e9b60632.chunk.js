(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[51],{74:function(e,o,a){"use strict";a.r(o);var t=a(0),n=a.n(t),l=a(1),s=a(3);class i extends t.Component{constructor(e){super(e),this.componentDidMount=()=>{let{CCP_Default_Default_config:e}=this.state;e=this.loadDataToState(),this.setState({CCP_Default_Default_config:e})},this.getData=()=>{let{CCP_Default_Default_config:e}=this.state;return{name:e.name_component.dataFull.value,code:e.code_component.dataFull.value,class:e.class_component.dataFull.value,role:e.permission_component.dataFull.value,condition:e.condition_component.dataFull.value,ofgroup:e.of_group.dataFull.value,class_ofgroup:e.class_ofgroup.dataFull.value,codeHidden:e.codeHidden_component.dataFull.value}},this.onChangeValue=(e,o)=>{let{CCP_Default_Default_config:a}=this.state;a[o].dataFull.value=e.target.value,this.setState({CCP_Default_Default_config:a})},this.loadDataToState=()=>{let e={};return e.name_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_name"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_name"),helper:l.g.getLang("designForm_componentDefault_name_helper"),code_form_component:"name_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.name,abs_Change:this.onChangeValue}},e.code_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_code"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_code"),helper:l.g.getLang("designForm_componentDefault_code_helper"),code_form_component:"code_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.code,abs_Change:this.onChangeValue}},e.codeHidden_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_codeHidden"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_codeHidden"),helper:l.g.getLang("designForm_componentDefault_codeHidden_helper"),code_form_component:"codeHidden_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.codeHidden,abs_Change:this.onChangeValue}},e.class_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_class"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_class"),helper:l.g.getLang("designForm_componentDefault_class_helper"),code_form_component:"class_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.class,abs_Change:this.onChangeValue}},e.permission_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_permission"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_permission"),helper:l.g.getLang("designForm_componentDefault_permission_helper"),code_form_component:"permission_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.role,abs_Change:this.onChangeValue}},e.condition_component={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_condition"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_condition"),helper:l.g.getLang("designForm_componentDefault_condition_helper"),code_form_component:"condition_component"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.condition,abs_Change:this.onChangeValue}},e.of_group={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_of_group"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_of_group"),helper:l.g.getLang("designForm_componentDefault_of_group_helper"),code_form_component:"of_group"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.ofgroup,abs_Change:this.onChangeValue}},e.class_ofgroup={dataFull:{config:{default:{title:l.g.getLang("designForm_componentDefault_class_of_group"),class:"col-md-6 ",required:!1,placeholder:l.g.getLang("designForm_componentDefault_class_of_group"),helper:l.g.getLang("designForm_componentDefault_class_of_group_helper"),code_form_component:"class_ofgroup"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.class_ofgroup,abs_Change:this.onChangeValue}},e},this.CCP_Default_Default_button=Object(s.c)("CCP_Default_Default_button"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.default),this.state={CCP_Default_Default_config:{}}}readConfig(e){var o={};return void 0===e&&(e={}),void 0!==e.name?o.name=e.name:o.name="",void 0!==e.code?o.code=e.code:o.code=l.g.autoID(),""===o.code.trim()&&(o.code=l.g.autoID()),void 0!==e.codeHidden?o.codeHidden=e.codeHidden:o.codeHidden=l.g.autoID(),void 0!==e.class?o.class=e.class:o.class="col-sm-12 col-md-12",void 0!==e.condition?o.condition=e.condition:o.condition="",void 0!==e.ofgroup?o.ofgroup=e.ofgroup:o.ofgroup="",void 0!==e.class_ofgroup?o.class_ofgroup=e.class_ofgroup:o.class_ofgroup="col-sm-12 col-md-12",void 0!==e.role?o.role=e.role:o.role="",o}render(){const e=this.CCP_Default_Default_button;return n.a.createElement(e,{stateData:this.state.CCP_Default_Default_config})}}o.default=i}}]);