(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[30,14,131],{102:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),o=a(3),i=a(1),d=a(68);class r extends s.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Config_textInput:e}=this.state,t=e.action.action_callForm.dataFull.data.find(e=>e.selected),a=e.is_upcase.dataFull.data.find(e=>e.selected),s=e.is_lookup.dataFull.data.find(e=>e.selected),l=e.is_password.dataFull.data.find(e=>e.selected);return{useAction:t.value,txFoActions:"true"===t.value?e.action.action_textarea.dataFull.value:this.data.txFoActions,txFo:"true"!==t.value?e.action.action_textarea.dataFull.value:this.data.txFo,structable:e.collection_method.dataFull.value,structable_read:e.read_data.dataFull.value,data_default:e.data_default.dataFull.value,isLookup:s.value,is_upperCase:a.value,callform:this.data.callform,callform_detail:this.data.callform_detail,callform_detail_mode:this.data.callform_detail_mode,data_view:this.data.data_view,data_value:this.data.data_value,is_password:l.value,is_upper:this.data.is_upper,action:this.data.action}},this.readConfig=e=>{var t={};return void 0===e&&(e={}),null!=e.txFoActions?t.txFoActions=e.txFoActions:t.txFoActions=JSON.stringify([{function:"",status:"A",para:[]}],null,4),null!=e.txFo?t.txFo=e.txFo:t.txFo=JSON.stringify([{txcode:"",input:{}}],null,4),null!=e.useAction?t.useAction=e.useAction:t.useAction="true",void 0!==e.is_upperCase?t.is_upperCase=e.is_upperCase:t.is_upperCase="false",void 0!==e.action?t.action=e.action:t.action="",void 0!==e.structable?t.structable=e.structable:t.structable="",void 0!==e.structable_read?t.structable_read=e.structable_read:t.structable_read="",void 0!==e.data_default?t.data_default=e.data_default:t.data_default="",void 0!==e.isLookup?t.isLookup=e.isLookup:t.isLookup="false",void 0!==e.callform?t.callform=e.callform:t.callform="",void 0!==e.callform_detail?t.callform_detail=e.callform_detail:t.callform_detail="",void 0!==e.callform_detail_mode?t.callform_detail_mode=e.callform_detail_mode:t.callform_detail_mode="modal",void 0!==e.data_view?t.data_view=e.data_view:t.data_view="",void 0!==e.data_value?t.data_value=e.data_value:t.data_value="",void 0!==e.is_password?t.is_password=e.is_password:t.is_password="false",void 0!==e.is_upper?t.is_upper=e.is_upper:t.is_upper="false",t},this.loadDataToState=()=>({collection_method:{dataFull:{config:{default:{title:i.g.getLang("designForm_cp_structable"),class:"col-md-12 ",required:!1,placeholder:i.g.getLang("designForm_cp_structable"),helper:i.g.getLang("designForm_cp_structable"),code_form_component:"collection_method"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},read_data:{dataFull:{config:{default:{title:i.g.getLang("designForm_cTextInput_structable_read"),class:"col-md-12 ",required:!1,placeholder:i.g.getLang("designForm_cTextInput_structable_read"),helper:i.g.getLang("designForm_cTextInput_structable_read"),code_form_component:"read_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},data_default:{dataFull:{config:{default:{title:i.g.getLang("designForm_cTextInput_data_default"),class:"col-md-6 ",required:!1,placeholder:i.g.getLang("designForm_cTextInput_data_default"),helper:i.g.getLang("designForm_cTextInput_data_default"),code_form_component:"data_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},is_password:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:i.g.getLang("designForm_cTextInput_is_password"),data_status:"No Result",title:i.g.getLang("designForm_cTextInput_is_password"),class:"col-md-6",required:!1,code_form_component:"is_password"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"false",value:"false",selected:"false"===this.data.is_password},{title:"true",value:"true",selected:"true"===this.data.is_password}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},is_upcase:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:i.g.getLang("designForm_cTextInput_is_upcase"),data_status:"No Result",title:i.g.getLang("designForm_cTextInput_is_upcase"),class:"col-md-6",required:!1,code_form_component:"is_upcase"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"false",value:"false",selected:"false"===this.data.is_upperCase},{title:"true",value:"true",selected:"true"===this.data.is_upperCase}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},is_lookup:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:i.g.getLang("designForm_cTextInput_is_lookup"),data_status:"No Result",title:i.g.getLang("designForm_cTextInput_is_lookup"),class:"col-md-6",required:!1,code_form_component:"is_lookup"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"No ",value:"false",selected:"false"===this.data.isLookup},{title:"Use lookup",value:"true",selected:"true"===this.data.isLookup}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},action:{action_multiValue:{dataFull:{config:{default:{title:"ACTIONS"},cmd:{visible:!0}}}},action_callForm:this.obj_render_txFo.useActionConfig,action_textarea:this.obj_render_txFo.txFoConfig}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_textInput:this.loadDataToState()})},this.onChangeValue=(e,t)=>{let{CCP_Default_Config_textInput:a}=this.state;a[t].dataFull.value=e.target.value,this.setState({CCP_Default_Config_textInput:a})},this.onChangeValue_ActionContent=(e,t)=>{let{CCP_Default_Config_textInput:a}=this.state;a.action.action_textarea.dataFull.value=e.target.value,this.setState({CCP_Default_Config_textInput:a})},this.onChangeValueSelect=(e,t,a)=>{let{CCP_Default_Config_textInput:s}=this.state;if(a){if("action_event"===a){let e=[],a=[];e=s.action.action_callForm.dataFull.data.filter(e=>e.selected),a=s.action.action_callForm.dataFull.data.filter((e,a)=>a===t),e.length>0&&(e[0].selected=!1),a.length>0&&(a[0].selected=!0),s.action.action_textarea={dataFull:{config:{default:{helper:a[0].title,title:a[0].title,class:"col-md-12",rows:10,code_form_component:"true"===a[0].value?"txFoAction":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===a[0].value?this.data.txFoActions:this.data.txFo,abs_Change:this.onChangeValue_ActionContent}}}else for(const t of s[a].dataFull.data)t.selected=t.value===e;this.setState({CCP_Default_Config_textInput:s})}},this.CCP_Default_Config_radiobox=Object(o.c)("CCP_Default_Config_radioBox"),this.data=this.readConfig(this.props.configComponent.configItem.config),this.obj_render_txFo=d.default.readConfigData(this.data,this.onChangeValueSelect,this.onChangeValue_ActionContent),this.state={CCP_Default_Config_radiobox:{}}}render(){const e=this.CCP_Default_Config_radiobox;return l.a.createElement(e,{stateData:this.state.CCP_Default_Config_radiobox})}}t.default=r},68:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var s=a(1);class l{}l.readConfigData=(e,t,a)=>{let o={},i=[{title:"txFo",code:"false"},{title:"txFo Actions",code:"true"}],d=[];for(let s=0;s<i.length;s++)d.push({title:i[s].title,value:i[s].code,selected:i[s].code===e.useAction});return o.useActionConfig={dataFull:{config:{default:{search:{placeholder:s.g.getLang("designForm_useAction")},helper:s.g.getLang("designForm_useAction_helper"),data_status:"No Result",title:s.g.getLang("designForm_useAction"),class:"col-md-6",required:!1,code_form_component:"action_event"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:d,search_value:"",abs_Change:t,abs_search:l.search}},o.txFoConfig={dataFull:{config:{default:{helper:"true"===e.useAction?"txFoActions":"txFo",title:"true"===e.useAction?"txFoActions":"txFo",class:"col-md-12",rows:10,code_form_component:"true"===e.useAction?"txFoActions":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===e.useAction?e.txFoActions:e.txFo,abs_Change:a}},o}}}]);