(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[87],{91:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(3);class i extends s.Component{constructor(e){super(e),this.getData=()=>({}),this.loadDataToState=()=>({is_danger:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Danger",data_status:"No Result",title:"Danger",class:"col-md-6",required:!1,code_form_component:"is_danger"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.danger},{title:"No",value:"false",selected:"false"===this.data.danger}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},is_warning:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Warning",data_status:"No Result",title:"Warning",class:"col-md-6",required:!1,code_form_component:"is_warning"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.warning},{title:"No",value:"false",selected:"false"===this.data.warning}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Essence_config:this.loadDataToState()})},this.onChangeValueSelect=(e,t,a)=>{let{CCP_Default_Essence_config:s}=this.state;if(a){for(const t of s[a].dataFull.data)t.selected=t.value===e;this.setState({CCP_Default_Essence_config:s})}},this.CCP_Default_Essence_textInput=Object(l.c)("CCP_Default_Essence_maskInput"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.property),this.state={CCP_Default_Essence_config:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.danger?t.danger=e.danger:t.danger="false",null!=e.warning?t.warning=e.warning:t.warning="false",t}render(){const e=this.CCP_Default_Essence_textInput;return n.a.createElement(e,{stateData:this.state.CCP_Default_Essence_config})}}t.default=i}}]);