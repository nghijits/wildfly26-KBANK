(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[6,32],{45:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(3),s=a(1),r=a(69);class i extends l.Component{constructor(e){super(e),this.convert_action_template=()=>{let e={},t=[];for(let a=0;a<r.listActions.length;a++)t.push({title:r.listActions[a].name,value:r.listActions[a].val,selected:r.listActions[a].val===this.data.component_event});return t.find(e=>e.selected)||(t[0].selected=!0),e={dataFull:{config:{default:{search:{placeholder:s.g.getLang("designForm_rule_action")},helper:s.g.getLang("designForm_rule_action_helper"),data_status:"No Result",title:s.g.getLang("designForm_rule_action"),class:"col-md-6",required:!1,code_form_component:"action"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:t,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},e},this.convert_active_template=()=>({dataFull:{config:{default:{title:s.g.getLang("designForm_rule_component_action"),class:"col-md-6 ",required:!1,placeholder:s.g.getLang("designForm_rule_component_action"),helper:s.g.getLang("designForm_rule_component_action_helper"),code_form_component:"code_active"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_action,abs_Change:this.onChangeValue}}),this.convert_code_get_data_template=()=>{let e={};return e={dataFull:{config:{default:{title:s.g.getLang("designForm_rule_component_result"),class:"col-md-12 ",required:!1,placeholder:s.g.getLang("designForm_rule_component_result"),helper:s.g.getLang("designForm_rule_component_result_helper"),rows:7,code_form_component:"code_get_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},data:[],value:this.data.component_result,abs_Change:this.onChangeValue}},e},this.convert_get_data_OOP_template=()=>({dataFull:{config:{default:{search:{placeholder:s.g.getLang("designForm_rule_isGetOOP")},helper:s.g.getLang("designForm_rule_isGetOOP_helper"),data_status:"No Result",title:s.g.getLang("designForm_rule_isGetOOP"),class:"col-md-12",required:!1,code_form_component:"get_data_OOP"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isGetOOP},{title:"No",value:"false",selected:"false"===this.data.isGetOOP}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.convert_get_OOP_format_template=()=>{let e={};return e={dataFull:{config:{default:{title:s.g.getLang("designForm_rule_setValue_get_OOP_format"),class:"col-md-12 ",required:!1,placeholder:s.g.getLang("designForm_rule_setValue_get_OOP_format"),helper:s.g.getLang("designForm_rule_setValue_get_OOP_format_helper"),rows:10,code_form_component:"get_OOP_format"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.isGetOOP,isFocus:!1,error:{message:"",type:""}}},data:[],value:this.data.getOOPFormat,abs_Change:this.onChangeValue}},e},this.getData=()=>{let{form:e}=this.state,t=e.rule_setValue.action.dataFull.data.find(e=>e.selected),a=e.rule_setValue.get_data_OOP.dataFull.data.find(e=>e.selected);this.props.func_save_rule_and_close({component_action:e.rule_setValue.code_active.dataFull.value,component_result:e.rule_setValue.code_get_data.dataFull.value,component_event:t.value,isGetOOP:a.value,getOOPFormat:e.rule_setValue.get_OOP_format.dataFull.value})},this.loadDataToState=()=>{let e={};return e.title=s.g.getLang("designForm_rule_modalSetValue_title"),e.status_form=this.props.modal_edit_rule_func.ruleStrong_default.isStatus,e.order=this.props.modal_edit_rule_func.ruleStrong_default.order,e.action=this.convert_action_template(),e.code_get_data=this.convert_code_get_data_template(),e.get_data_OOP=this.convert_get_data_OOP_template(),e.code_active=this.convert_active_template(),e.begin=this.props.modal_edit_rule_func.ruleStrong_default.isStart,e.status=this.props.modal_edit_rule_func.ruleStrong_default.inUse,e.isDidStart=this.props.modal_edit_rule_func.ruleStrong_default.isDidStart,e.get_OOP_format=this.convert_get_OOP_format_template(),e.isOpenFromOther=this.props.modal_edit_rule_func.ruleStrong_default.isOpenFromOther,e.button_save={dataFull:{config:{default:{title:s.g.getLang("designForm_rule_save"),type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}},e},this.componentDidMount=()=>{let{modal:e}=this.state,{form:t}=this.state;e={title:s.g.getLang("designForm_rule_modal_title"),helper:s.g.getLang("designForm_rule_modal_title_helper"),abs_Close:this.func_close_modal,visibility:!0},t.rule_setValue=this.loadDataToState(),t.list_component={title:s.g.getLang("designForm_rule_listcp"),helper:s.g.getLang("designForm_rule_listcp_helper"),table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}}],table_header:{dataFull:{Header:{data:[{title:"Layout",config:{width:"",isFrozen:!1}},{title:"View",config:{isFrozen:!1}},{title:"Name",config:{isFrozen:!1}},{title:"Code",config:{isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:this.props.modal_edit_rule_func.list_components},this.setState({modal:e,form:t})},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.onChangeValue=(e,t)=>{let{form:a}=this.state;a.rule_setValue[t].dataFull.value=e.target.value,this.setState({form:a})},this.onChangeValueSelect=(e,t,a)=>{let{form:l}=this.state;if(a){"get_data_OOP"===a&&(l.rule_setValue.get_OOP_format.dataFull.config.cmd.visible="true"===e,l.rule_setValue.code_get_data.dataFull.config.cmd.visible="false"===e);for(const t of l.rule_setValue[a].dataFull.data)t.selected=t.value===e;this.setState({form:l})}},this.Modal_SetValue_Rule=Object(n.c)("designFormModal_ruleFunction_setValue"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.modal_edit_rule_func.ruleStrong_detail),this.state={modal:{},form:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.component_event&&""!==e.component_event?t.component_event=e.component_event:t.component_event="",null!=e.component_action?t.component_action=e.component_action:t.component_action="",null!=e.component_result?t.component_result=e.component_result:t.component_result="",null!=e.isGetOOP?t.isGetOOP=e.isGetOOP:t.isGetOOP="false",null!=e.getOOPFormat?t.getOOPFormat=e.getOOPFormat:t.getOOPFormat='{\n    "component_code_1": "col.col_1",\n    "component_code_2": "col.col_2"\n}',t}getConfigSelectItem(){let e=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(t=>({title:t.title,value:t.value,selected:t.value===e}))}render(){const e=this.Modal_SetValue_Rule;return o.a.createElement(e,{stateData:this.state})}}t.default=i},69:function(e,t,a){"use strict";a.r(t),a.d(t,"listRuleFormStatus",(function(){return l})),a.d(t,"listActions",(function(){return o})),a.d(t,"listDisabled",(function(){return n}));let l=[{name:"Kh\xf4ng d\xf9ng",val:-1},{name:"noError",val:0},{name:"successLoadData",val:1},{name:"errorLoadData",val:11},{name:"successSave",val:2},{name:"errorSave",val:21},{name:"errorDuplicateData",val:22},{name:"successUpdate",val:3},{name:"errorUpdate",val:31},{name:"successDelete",val:4},{name:"errorDelete",val:41},{name:"errorNotExistDelete",val:42},{name:"successView",val:5},{name:"errorView",val:51},{name:"successClear",val:6},{name:"errorClear",val:61}],o=[{name:"Enter/Tab",val:"enter_tab"},{name:"Change",val:"on_change"},{name:"Click",val:"on_click"},{name:"Checked",val:"checked"},{name:"All",val:"all"}],n=[{name:"enabled",val:"false"},{name:"disabled",val:"true"},{name:"Not Use",val:"not_use"}]}}]);