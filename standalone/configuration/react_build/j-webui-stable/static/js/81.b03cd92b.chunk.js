(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[81],{142:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),o=t(3),i=t(1);class d extends l.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Config_label:e}=this.state,a=e.mode_use_title.dataFull.data.find(e=>e.selected),t=e.isBold.dataFull.data.find(e=>e.selected);return{structable:e.collection_method.dataFull.value,structable_read:e.read_data.dataFull.value,data_default:e.data_default.dataFull.value,action:this.data.action,isLookup:this.data.isLookup,callform:this.data.callform,callform_detail:this.data.callform_detail,callform_detail_mode:this.data.callform_detail_mode,data_view:this.data.data_view,data_value:this.data.data_value,color:e.color.dataFull.value,isUseTitle:a.value,fontSize:e.fontSize.dataFull.value,isBold:t.value}},this.loadDataToState=()=>({collection_method:{dataFull:{config:{default:{title:i.g.getLang("designForm_cp_structable"),class:"col-md-12 ",required:!1,placeholder:i.g.getLang("designForm_cp_structable"),helper:i.g.getLang("designForm_cp_structable"),code_form_component:"collection_method"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},fontSize:{dataFull:{config:{default:{title:i.g.getLang("designForm_fontSize"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_fontSize"),helper:i.g.getLang("designForm_fontSize"),code_form_component:"fontSize"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.fontSize,abs_Change:this.onChangeValue}},isBold:{dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_isBold")},helper:i.g.getLang("designForm_isBold"),data_status:"No Result",title:i.g.getLang("designForm_isBold"),class:"col-md-6",required:!1,code_form_component:"isBold"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:i.g.getLang("designForm_yes"),value:"true",selected:"true"===this.data.isBold},{title:i.g.getLang("designForm_no"),value:"false",selected:"false"===this.data.isBold}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},read_data:{dataFull:{config:{default:{title:i.g.getLang("designForm_cTextInput_structable_read"),class:"col-md-12 ",required:!1,placeholder:i.g.getLang("designForm_cTextInput_structable_read"),helper:i.g.getLang("designForm_cTextInput_structable_read"),code_form_component:"read_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},data_default:{dataFull:{config:{default:{title:i.g.getLang("designForm_cTextInput_data_default"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_cTextInput_data_default"),helper:i.g.getLang("designForm_cTextInput_data_default"),code_form_component:"data_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},color:{dataFull:{config:{default:{title:i.g.getLang("designForm_cTextInput_color"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_cTextInput_color"),helper:i.g.getLang("designForm_cTextInput_color"),code_form_component:"color"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.color,abs_Change:this.onChangeValue}},mode_use_title:{dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_cTextInput_is_use_title")},helper:i.g.getLang("designForm_cTextInput_is_use_title"),data_status:"No Result",title:i.g.getLang("designForm_cTextInput_is_use_title"),class:"col-md-6",required:!1,code_form_component:"mode_use_title"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"No ",value:"false",selected:"false"===this.data.isUseTitle},{title:"Use title replace data",value:"true",selected:"true"===this.data.isUseTitle}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_label:this.loadDataToState()})},this.onChangeValue=(e,a)=>{let{CCP_Default_Config_label:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Config_label:t})},this.onChangeValueSelect=(e,a,t)=>{let{CCP_Default_Config_label:l}=this.state;for(const s of l[t].dataFull.data)s.selected=s.value===e;this.setState({CCP_Default_Config_label:l})},this.CCP_Default_Config_label=Object(o.c)("CCP_Default_Config_label"),this.data=this.readConfig(this.props.configComponent.configItem.config),this.state={CCP_Default_Config_label:{}}}readConfig(e){var a={};return void 0===e&&(e={}),null!=e.action?a.action=e.action:a.action="",null!=e.structable?a.structable=e.structable:a.structable="",null!=e.structable_read?a.structable_read=e.structable_read:a.structable_read="",null!=e.data_default?a.data_default=e.data_default:a.data_default="",null!=e.isLookup?a.isLookup=e.isLookup:a.isLookup="false",null!=e.callform?a.callform=e.callform:a.callform="",null!=e.callform_detail?a.callform_detail=e.callform_detail:a.callform_detail="",null!=e.callform_detail_mode?a.callform_detail_mode=e.callform_detail_mode:a.callform_detail_mode="modal",null!=e.data_view?a.data_view=e.data_view:a.data_view="",null!=e.data_value?a.data_value=e.data_value:a.data_value="",null!=e.color?a.color=e.color:a.color="",null!=e.isUseTitle?a.isUseTitle=e.isUseTitle:a.isUseTitle="false",null!=e.fontSize?a.fontSize=e.fontSize:a.fontSize="",null!=e.isBold?a.isBold=e.isBold:a.isBold="false",a}render(){const e=this.CCP_Default_Config_label;return s.a.createElement(e,{stateData:this.state.CCP_Default_Config_label})}}a.default=d}}]);