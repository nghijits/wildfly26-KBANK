(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[41],{129:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),s=t(3),r=t(1);class u extends l.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Validate_config:e}=this.state;return{request:e.is_required.dataFull.value,min:e.min_words.dataFull.value,max:e.max_words.dataFull.value,regex_format:e.structure_regex.dataFull.value,validate_html:this.data.validate_html}},this.loadDataToState=()=>({is_required:{dataFull:{value:this.data.request,title:r.g.getLang("designForm_cTableDefault_is_required"),class:"col-md-12",config:{cmd:{visible:!1,disable:!1,error:{message:"",type:""}}},abs_Click:this.onClickValue}},min_words:{dataFull:{config:{default:{title:r.g.getLang("designForm_cTableDefault_min"),class:"col-md-6 ",required:!1,placeholder:r.g.getLang("designForm_cTableDefault_min"),helper:r.g.getLang("designForm_cTableDefault_min_helper"),code_form_component:"min_words"},cmd:{isHelper:!0,disable:!1,visible:!1,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.min,abs_Change:this.onChangeValue}},max_words:{dataFull:{config:{default:{title:r.g.getLang("designForm_cTableDefault_max"),class:"col-md-6 ",required:!1,placeholder:r.g.getLang("designForm_cTableDefault_max"),helper:r.g.getLang("designForm_cTableDefault_max_helper"),code_form_component:"max_words"},cmd:{isHelper:!0,disable:!1,visible:!1,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.max,abs_Change:this.onChangeValue}},structure_regex:{dataFull:{config:{default:{title:r.g.getLang("designForm_cTableDefault_structure_regex"),class:"col-md-6 ",required:!1,placeholder:r.g.getLang("designForm_cTableDefault_structure_regex"),helper:r.g.getLang("designForm_cTableDefault_structure_regex_helper"),code_form_component:"structure_regex"},cmd:{isHelper:!0,disable:!1,visible:!1,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.regex_format,abs_Change:this.onChangeValue}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Validate_config:this.loadDataToState()})},this.onChangeValue=(e,a)=>{let{CCP_Default_Validate_config:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Validate_config:t})},this.onClickValue=()=>{let{CCP_Default_Validate_config:e}=this.state;e.is_required.dataFull.value=!e.is_required.dataFull.value,this.setState({CCP_Default_Validate_config:e})},this.CCP_Default_Validate_textInput=Object(s.c)("CCP_Default_Validate_tableDefault"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.validate),this.state={CCP_Default_Validate_config:{}}}readConfig(e){var a={};return void 0===e&&(e={}),null!=e.request?a.request=e.request:a.request=!1,null!=e.min?a.min=e.min:a.min="",null!=e.max?a.max=e.max:a.max="",null!=e.regex_format?a.regex_format=e.regex_format:a.regex_format="",void 0!==e.validate_html?a.validate_html=e.validate_html:a.validate_html="true",a}render(){const e=this.CCP_Default_Validate_textInput;return i.a.createElement(e,{stateData:this.state.CCP_Default_Validate_config})}}a.default=u}}]);