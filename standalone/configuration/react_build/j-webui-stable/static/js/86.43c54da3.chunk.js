(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[86],{73:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),o=t(1),i=t(3);class d extends l.Component{constructor(e){super(e),this.getListFormByApp=()=>{let e=this.props.data.form_detail.info.app;return void 0===e&&(e="o9"),this.props.getAllFormByApp(e)},this.getData=()=>{let{CCP_Default_Config_maskInput:e}=this.state;const a=e.mask_typeData.dataFull.data.find(e=>e.selected),t=e.mask_mode_time.dataFull.data.find(e=>e.selected),l=e.is_lookup.dataFull.data.find(e=>e.selected),s=e.DI_typeData.dataFull.data.find(e=>e.selected),o=e.callform.dataFull.data.find(e=>e.selected),i=e.callform_detail.dataFull.data.find(e=>e.selected),d=e.isLabel.dataFull.data.find(e=>e.selected),r=e.callform_detail_mode.dataFull.data.find(e=>e.selected),c=e.content_style.dataFull.data.find(e=>e.selected);return{structable:e.GS_collectionMethod.dataFull.value,structable_read:e.GS_readData.dataFull.value,data_default:e.DI_dataDefault.dataFull.value,data_type:this.data.data_type,component_title:this.data.component_title,mask_mode_time:t.value,mask_format:e.mask_format.dataFull.value,mask_data_format:e.mask_formatFromData.dataFull.value,value_type:s.value,auto_delete:this.data.auto_delete,mask_mode:a.value,isLookup:l.value,callform:o.value,callform_detail:i.value,callform_detail_mode:r.value,data_view:e.data_view.dataFull.value,data_value:e.data_value.dataFull.value,status:this.data.status,reg_remove:this.data.reg_remove,content_style:c.value,isLabel:d.value,format_value_type_string:e.format_value_type_string.dataFull.value}},this.validateCallForm=()=>{let{CCP_Default_Config_maskInput:e}=this.state;const a=e.callform.dataFull.data.find(e=>e.selected),t=e.callform_detail.dataFull.data.find(e=>e.selected);return"true"!==e.is_lookup.dataFull.data.find(e=>e.selected).value||""===a.value||a.value!==t.value||(e.callform.dataFull.config.cmd.error.message="Call data form must be different from Form detail",this.setState({CCP_Default_Config_maskInput:e}),!1)},this.search=(e,a)=>{let{CCP_Default_Config_maskInput:t}=this.state;t[a].dataFull.search_value=e.target.value;const l=this.formByApp.filter(a=>a.info.title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())||a.info.form_code.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())),s=this.createListForms(l,this.data[a]);t[a].dataFull.data=s,this.setState({CCP_Default_Config_maskInput:t})},this.createListForms=(e,a)=>{let t=[];for(let l=-1;l<e.length;l++)-1===l?t.push({title:"",value:""}):t.push({title:e[l].info.title,value:e[l].info.form_code,selected:a===e[l].info.form_code});return t.find(e=>e.selected)||(t[0].selected=!0),t},this.loadDataToState=()=>({is_lookup:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Use lookup",data_status:"No Result",title:"Use lookup",class:"col-md-6",required:!1,code_form_component:"is_lookup"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isLookup},{title:"No",value:"false",selected:"true"!==this.data.isLookup}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},callform:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Get data form",data_status:"No Result",title:"Get data form",class:"col-md-6",required:!1,code_form_component:"callform"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isLookup,isFocus:!1,error:{message:"",type:""}},mode:{}},data:o.g.cloneJson(this.createListForms(this.formByApp,this.data.callform)),search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},callform_detail:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Form Detail",data_status:"No Result",title:"Form Detail",class:"col-md-6",required:!1,code_form_component:"callform_detail"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isLookup,isFocus:!1,error:{message:"",type:""}},mode:{}},data:o.g.cloneJson(this.createListForms(this.formByApp,this.data.callform_detail)),search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},isLabel:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:o.g.getLang("designForm_jMaskInput_isLabel"),data_status:"No Result",title:o.g.getLang("designForm_jMaskInput_isLabel"),class:"col-md-6",required:!1,code_form_component:"isLabel"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isLabel},{title:"No",value:"false",selected:"true"!==this.data.isLabel}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},callform_detail_mode:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Form detail mode",data_status:"No Result",title:"Form detail mode",class:"col-md-6",required:!1,code_form_component:"callform_detail_mode"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isLookup,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Modal",value:"modal",selected:"modal"===this.data.callform_detail_mode},{title:"Main",value:"main",selected:"main"===this.data.callform_detail_mode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},data_view:{dataFull:{config:{default:{title:"Data OOP view",class:"col-md-6 ",required:!1,placeholder:"Data OOP view",helper:"Data OOP view",code_form_component:"data_view"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isLookup,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_view,abs_Change:this.onChangeValue}},data_value:{dataFull:{config:{default:{title:"Data OOP value",class:"col-md-6 ",required:!1,placeholder:"Data OOP value",helper:"Data OOP value",code_form_component:"data_value"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isLookup,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_value,abs_Change:this.onChangeValue}},content_style:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Content Style",data_status:"No Result",title:"Content Style",class:"col-md-6",required:!1,code_form_component:"content_style"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"No style",value:"",selected:""===this.data.content_style},{title:"UpperCase",value:"UPPER",selected:"UPPER"===this.data.content_style},{title:"LowerCase",value:"LOWER",selected:"LOWER"===this.data.content_style}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},GS_multiValue:{dataFull:{config:{default:{title:"GET AND SET DATA"},cmd:{visible:!0}}}},GS_collectionMethod:{dataFull:{config:{default:{title:o.g.getLang("designForm_cp_structable"),class:"col-md-12 ",required:!1,placeholder:o.g.getLang("designForm_cp_structable"),helper:o.g.getLang("designForm_cp_structable_helper"),code_form_component:"GS_collectionMethod"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},GS_readData:{dataFull:{config:{default:{title:o.g.getLang("designForm_cp_structable"),class:"col-md-12 ",required:!1,placeholder:o.g.getLang("designForm_cp_structable"),helper:o.g.getLang("designForm_cp_structable_helper"),code_form_component:"GS_readData"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},mask_multiValue:{dataFull:{config:{default:{title:"MASK"},cmd:{visible:!0}}}},mask_typeData:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Type Data",data_status:"No Result",title:"Type Data",class:"col-md-6",required:!1,code_form_component:"mask_typeData"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Default",value:"default",selected:"default"===this.data.mask_mode},{title:"Date",value:"date",selected:"date"===this.data.mask_mode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},mask_mode_time:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Time mode",data_status:"No Result",title:"Time mode",class:"col-md-6",required:!1,code_form_component:"mask_mode_time"},cmd:{isHelper:!0,disable:!1,visible:"date"===this.data.mask_mode,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Timezone Client",value:"time_zone_c",selected:"time_zone_c"===this.data.mask_mode_time},{title:"UTC",value:"utc",selected:"utc"===this.data.mask_mode_time}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},mask_format:{dataFull:{config:{default:{helper:"Mask format",title:"Mask format",class:"col-md-12 ",required:!1,placeholder:"Mask format",code_form_component:"mask_format"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.mask_format,abs_Change:this.onChangeValue}},mask_formatFromData:{dataFull:{config:{default:{helper:"Format mask from data",title:"Format mask from data",class:"col-md-12 ",required:!1,placeholder:"Format mask from data",code_form_component:"mask_formatFromData"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.mask_data_format,abs_Change:this.onChangeValue}},DI_multiValue:{dataFull:{config:{default:{title:"DATA INPUT"},cmd:{visible:!0}}}},DI_dataDefault:{dataFull:{config:{default:{helper:"Default data",title:"Default data",class:"col-md-6 ",required:!1,placeholder:"Search",code_form_component:"DI_dataDefault"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},DI_typeData:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Data type",data_status:"No Result",title:"Data type",class:"col-md-6",required:!1,code_form_component:"DI_typeData"},cmd:{isHelper:!0,disable:!1,visible:"date"===this.data.mask_mode,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Long",value:"long",selected:"long"===this.data.value_type},{title:"String",value:"string",selected:"string"===this.data.value_type}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},format_value_type_string:{dataFull:{config:{default:{helper:"Format type data string",title:"Format type data string",class:"col-md-6 ",required:!1,placeholder:"Search",code_form_component:"format_value_type_string"},cmd:{isHelper:!0,disable:!1,visible:"date"===this.data.mask_mode&&"string"===this.data.value_type,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.format_value_type_string,abs_Change:this.onChangeValue}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_maskInput:this.loadDataToState()})},this.onChangeValue=(e,a)=>{let{CCP_Default_Config_maskInput:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Config_maskInput:t})},this.onChangeValueSelect=(e,a,t)=>{let{CCP_Default_Config_maskInput:l}=this.state;if(t){"is_lookup"===t&&(l.callform.dataFull.config.cmd.visible="true"===e,l.callform_detail.dataFull.config.cmd.visible="true"===e,l.callform_detail_mode.dataFull.config.cmd.visible="true"===e,l.data_view.dataFull.config.cmd.visible="true"===e,l.data_value.dataFull.config.cmd.visible="true"===e),"mask_typeData"===t&&(l.DI_typeData.dataFull.config.cmd.visible="date"===e,l.format_value_type_string.dataFull.config.cmd.visible="date"===e&&!0===l.DI_typeData.dataFull.data[1].selected,l.mask_mode_time.dataFull.config.cmd.visible="date"===e,"date"===e&&(l.mask_format.dataFull.value="DD/MM/YYYY")),"DI_typeData"===t&&(l.format_value_type_string.dataFull.config.cmd.visible="string"===e);for(const a of l[t].dataFull.data)a.selected=a.value===e;this.setState({CCP_Default_Config_maskInput:l})}},this.CCP_Default_Config_maskInput=Object(i.c)("CCP_Default_Config_maskInput"),this.formByApp=this.getListFormByApp(),this.data=this.readConfig(this.props.configComponent.configItem.config),this.state={CCP_Default_Config_maskInput:{}}}readConfig(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={},t={structable:"",structable_read:"",data_default:"",data_type:"edit",component_title:"",mask_format:"",mask_data_format:"",mask_mode_time:"time_zone_c",value_type:"long",auto_delete:"true",mask_mode:"default",status:"",reg_remove:"",content_style:"",isLabel:"false",format_value_type_string:""};for(let l in t)a[l]=e[l]||t[l];return"long"!==a.value_type&&"string"!==a.value_type&&(a.value_type="long"),void 0!==e.isLookup?a.isLookup=e.isLookup:a.isLookup="false",void 0!==e.callform?a.callform=e.callform:a.callform=this.formByApp[0].info.form_code,void 0!==e.callform_detail?a.callform_detail=e.callform_detail:a.callform_detail=this.formByApp[0].info.form_code,void 0!==e.callform_detail_mode?a.callform_detail_mode=e.callform_detail_mode:a.callform_detail_mode="modal",void 0!==e.data_view?a.data_view=e.data_view:a.data_view="",void 0!==e.data_value?a.data_value=e.data_value:a.data_value="",a}render(){const e=this.CCP_Default_Config_maskInput;return s.a.createElement(e,{stateData:this.state.CCP_Default_Config_maskInput})}}a.default=d}}]);