(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[108],{148:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),i=a(3);class d extends s.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Role_config:e}=this.state,t=e.disable.dataFull.data.find(e=>e.selected),a=e.visible.dataFull.data.find(e=>e.selected);return{disabled:t.value,visible:a.value}},this.loadDataToState=()=>({disable:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Disabled",data_status:"No Result",title:"Disabled",class:"col-md-6",required:!0,code_form_component:"disable"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.disabled},{title:"No",value:"false",selected:"true"!==this.data.disabled}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},visible:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Visible",data_status:"No Result",title:"Visible",class:"col-md-6",required:!0,code_form_component:"visible"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.visible},{title:"No",value:"false",selected:"true"!==this.data.visible}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Role_config:this.loadDataToState()})},this.onChangeValueSelect=(e,t,a)=>{let{CCP_Default_Role_config:s}=this.state;if(a){for(const t of s[a].dataFull.data)t.selected=t.value===e;this.setState({CCP_Default_Role_config:s})}},this.CCP_Default_Role_textInput=Object(i.c)("CCP_Default_Role_sameMain"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.role),this.state={CCP_Default_Role_config:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.visible?t.visible=e.visible:t.visible="false",null!=e.disabled?t.disabled=e.disabled:t.disabled="false",t}render(){const e=this.CCP_Default_Role_textInput;return l.a.createElement(e,{stateData:this.state.CCP_Default_Role_config})}}t.default=d}}]);