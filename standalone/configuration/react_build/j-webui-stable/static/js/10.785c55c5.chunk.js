(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[10],{42:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),s=a(3),i=a(1);class n extends l.Component{constructor(e){super(e),this.getData=()=>{let{form:e}=this.state;const t=e.rule_getInfo.how_to_set_data.dataFull.data.find(e=>e.selected),a=e.rule_getInfo.action.dataFull.data.find(e=>e.selected),l=e.rule_getInfo.type_data.dataFull.data.find(e=>e.selected),o=e.rule_getInfo.is_set_back_data.dataFull.data.find(e=>e.selected),s=e.rule_getInfo.isAutoDefault.dataFull.data.find(e=>e.selected);this.validateDataAction()?this.props.func_save_rule_and_close({component_action:e.rule_getInfo.active.dataFull.value,component_event:a.value,isSetCode:t.value,data_type:l.value,is_data_to_form:o.value,api_id:"api"===l.value?e.rule_getInfo.id_API.dataFull.value:this.data.api_id,component_result:e.rule_getInfo.get_data.dataFull.value,exception:this.data.exception,api_bo:this.data.api_bo,sql_bo:this.data.sql_bo,data_bo:this.data.data_bo,data_table:"data"===l.value?e.rule_getInfo.id_API.dataFull.value:this.data.data_table,sql_id:"sql"===l.value?e.rule_getInfo.id_API.dataFull.value:this.data.sql_id,isAutoDefault:s.value,error_configs:e.rule_getInfo.error_configs.dataFull.value,condition:e.rule_getInfo.option.dataFull.value}):(e.rule_getInfo.button_save.dataFull.config.default.type="danger",this.setState({form:e}))},this.validateDataAction=()=>{let{form:e}=this.state;return void 0!==e.rule_getInfo.action.dataFull.data.find(e=>e.selected)||(e.rule_getInfo.action.dataFull.config.cmd.error.message=" required",this.setState({form:e}),!1)},this.convert_action_template=()=>{let e=[],t=[{name:"Enter/Tab",val:"enter_tab"},{name:"Change",val:"on_change"},{name:"Click",val:"on_click"},{name:"Checked",val:"checked"},{name:"All",val:"all"}];for(let a=0;a<t.length;a++)e.push({title:t[a].name,value:t[a].val,selected:t[a].val===this.data.component_event});return{dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_rule_action")},helper:i.g.getLang("designForm_rule_action_helper"),data_status:"No Result",title:i.g.getLang("designForm_rule_action"),class:"col-md-6",required:!0,code_form_component:"action"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:e,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}},this.convert_active_template=()=>({dataFull:{config:{default:{title:i.g.getLang("designForm_rule_component_action"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_rule_component_action"),helper:i.g.getLang("designForm_rule_component_action_helper"),code_form_component:"active"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_action,abs_Change:this.onChangeValue}}),this.convert_how_to_set_data_template=()=>({dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_rule_is_set_code")},helper:i.g.getLang("designForm_rule_is_set_code_helper"),data_status:"No Result",title:i.g.getLang("designForm_rule_is_set_code"),class:"col-md-6",required:!1,code_form_component:"how_to_set_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:i.g.getLang("designForm_rule_set_by_code"),value:"true",selected:"true"===this.data.isSetCode},{title:i.g.getLang("designForm_rule_set_by_codeHidden"),value:"false",selected:"false"===this.data.isSetCode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.convert_get_data_template=()=>({dataFull:{config:{default:{title:i.g.getLang("designForm_rule_component_result"),class:"col-md-12 ",required:!1,placeholder:i.g.getLang("designForm_rule_component_result"),helper:i.g.getLang("designForm_rule_component_result_helper"),code_form_component:"get_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_result,abs_Change:this.onChangeValue}}),this.onChangeValueSelect_getData=(e,t,a)=>{let{form:l}=this.state;if(a){let e=[],o=[];e=l.rule_getInfo[a].dataFull.data.filter(e=>e.selected),o=l.rule_getInfo[a].dataFull.data.filter((e,a)=>a===t),e.length>0&&(e[0].selected=!1),o.length>0&&(o[0].selected=!0),l.rule_getInfo.id_API={dataFull:{config:{default:{title:o[0].title,class:"col-md-6 ",required:!1,placeholder:o[0].title,helper:o[0].title,code_form_component:o[0].value},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:"",abs_Change:this.onChangeValue_data_}},this.setState({form:l})}},this.onChangeValue_data_=e=>{let{form:t}=this.state;t.rule_getInfo.id_API.dataFull.value=e.target.value,this.setState({form:t})},this.convert_type_data_template=()=>{let e=[];const t=[{name:"API ID",val:"api"},{name:"SQL ID",val:"sql"},{name:"Data table",val:"data"}];for(let a=0;a<t.length;a++)e.push({title:t[a].name,value:t[a].val,selected:t[a].val===this.data.data_type});return e.find(e=>e.selected)||(e[0].selected=!0),{dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_rule_type_data")},helper:i.g.getLang("designForm_rule_type_data_helper"),data_status:"No Result",title:i.g.getLang("designForm_rule_type_data"),class:"col-md-6",required:!1,code_form_component:"type_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:e,search_value:"",abs_Change:this.onChangeValueSelect_getData,abs_search:this.search}}},this.convert_id_api_template=()=>{let e="API ",t="id_API";return"api"===this.data.data_type&&(e="API",t="api_id"),"sql"===this.data.data_type&&(e="SQL ID",t="sql_id"),"data"===this.data.data_type&&(e="Data table",t="data_table"),{dataFull:{config:{default:{title:e,class:"col-md-6 ",required:!1,placeholder:e,helper:e,code_form_component:t},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data[t],abs_Change:this.onChangeValue_data_}}},this.convert_is_set_back_data_template=()=>({dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_rule_is_data_to_form")},helper:i.g.getLang("designForm_rule_is_data_to_form_helper"),data_status:"No Result",title:i.g.getLang("designForm_rule_is_data_to_form"),class:"col-md-6",required:!1,code_form_component:"is_set_back_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Set to form",value:"true",selected:"true"===this.data.is_data_to_form},{title:"No",value:"false",selected:"true"!==this.data.is_data_to_form}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.convert_option_template=()=>({dataFull:{config:{default:{title:i.g.getLang("designForm_rule_condition"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_rule_condition"),helper:i.g.getLang("designForm_rule_condition_helper"),code_form_component:"option"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.condition,abs_Change:this.onChangeValue}}),this.convert_error_configs_template=()=>({dataFull:{config:{default:{helper:i.g.getLang("designForm_rule_getInfo_error_configs"),title:i.g.getLang("designForm_rule_getInfo_error_configs"),class:"col-md-12",rows:7,code_form_component:"error_configs"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:this.data.error_configs,abs_Change:this.onChangeValue,abs_Blur:this.onBlurTextArea}}),this.convert_isAutoDefault_template=()=>({dataFull:{config:{default:{search:{placeholder:i.g.getLang("designForm_rule_getInfo_isAutoDefault")},helper:i.g.getLang("designForm_rule_getInfo_error_isAutoDefault_helper"),data_status:"No Result",title:i.g.getLang("designForm_rule_getInfo_isAutoDefault"),class:"col-md-6",required:!1,code_form_component:"isAutoDefault"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isAutoDefault},{title:"No",value:"false",selected:"true"!==this.data.isAutoDefault}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.loadDataToState=()=>{let e={};return e.title=i.g.getLang("designForm_rule_getInfo_title"),e.status_form=this.props.modal_edit_rule_func.ruleStrong_default.isStatus,e.order=this.props.modal_edit_rule_func.ruleStrong_default.order,e.begin=this.props.modal_edit_rule_func.ruleStrong_default.isStart,e.status=this.props.modal_edit_rule_func.ruleStrong_default.inUse,e.error_configs=this.convert_error_configs_template(),e.isAutoDefault=this.convert_isAutoDefault_template(),e.active=this.convert_active_template(),e.option=this.convert_option_template(),e.get_data=this.convert_get_data_template(),e.how_to_set_data=this.convert_how_to_set_data_template(),e.type_data=this.convert_type_data_template(),e.id_API=this.convert_id_api_template(),e.action=this.convert_action_template(),e.is_set_back_data=this.convert_is_set_back_data_template(),e.isDidStart=this.props.modal_edit_rule_func.ruleStrong_default.isDidStart,e.isOpenFromOther=this.props.modal_edit_rule_func.ruleStrong_default.isOpenFromOther,e.button_save={dataFull:{config:{default:{title:i.g.getLang("designForm_rule_save"),type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}},e},this.componentDidMount=()=>{let{modal:e}=this.state,{form:t}=this.state;e={title:i.g.getLang("designForm_rule_modal_title"),helper:i.g.getLang("designForm_rule_modal_title_helper"),abs_Close:this.func_close_modal,visibility:!0},t.rule_getInfo=this.loadDataToState(),t.list_component={title:i.g.getLang("designForm_rule_listcp"),helper:i.g.getLang("designForm_rule_listcp_helper"),table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}}],table_header:{dataFull:{Header:{data:[{title:"Layout",config:{width:"",isFrozen:!1}},{title:"View",config:{isFrozen:!1}},{title:"Name",config:{isFrozen:!1}},{title:"Code",config:{isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:this.props.modal_edit_rule_func.list_components},this.setState({modal:e,form:t})},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.onChangeValue=(e,t)=>{let{form:a}=this.state;a.rule_getInfo[t].dataFull.value=e.target.value,this.setState({form:a})},this.onBlurTextArea=(e,t)=>{let{form:a}=this.state;try{a.rule_getInfo[t].dataFull.value=JSON.stringify(JSON.parse(e.target.value),null,4),this.setState({form:a})}catch(l){alert(l)}},this.onChangeValueSelect=(e,t,a)=>{let{form:l}=this.state;if(a){for(const t of l.rule_getInfo[a].dataFull.data)t.selected=t.value===e;this.setState({form:l})}},this.Modal_GetInfo_Rule=Object(s.c)("designFormModal_ruleFunction_getInfo"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.modal_edit_rule_func.ruleStrong_detail),this.state={modal:{},form:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.component_event&&""!==e.component_event?t.component_event=e.component_event:t.component_event="enter_tab",null!=e.component_action?t.component_action=e.component_action:t.component_action="",null!=e.component_result?t.component_result=e.component_result:t.component_result="",null!=e.isSetCode?t.isSetCode=e.isSetCode:t.isSetCode="false",null!=e.data_type?t.data_type=e.data_type:t.data_type="api",null!=e.api_id?t.api_id=e.api_id:t.api_id="",null!=e.sql_id?t.sql_id=e.sql_id:t.sql_id="",null!=e.data_table?t.data_table=e.data_table:t.data_table="",null!=e.exception?t.exception=e.exception:t.exception="",null!=e.api_bo?t.api_bo=e.api_bo:t.api_bo="",null!=e.sql_bo?t.sql_bo=e.sql_bo:t.sql_bo="",null!=e.data_bo?t.data_bo=e.data_bo:t.data_bo="",null!=e.is_data_to_form?t.is_data_to_form=e.is_data_to_form:t.is_data_to_form="false",null!=e.error_configs?t.error_configs=e.error_configs:t.error_configs="[]",null!=e.isAutoDefault?t.isAutoDefault=e.isAutoDefault:t.isAutoDefault="false",null!=e.condition?t.condition=e.condition:t.condition="",t}render(){const e=this.Modal_GetInfo_Rule;return o.a.createElement(e,{stateData:this.state})}}t.default=n}}]);