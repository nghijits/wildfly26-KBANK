(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[140],{233:function(t,e,a){"use strict";a.r(e);var s=a(6),i=a(0),o=a.n(i),l=a(1),n=a(8),d=a(3);const r="info",g="input",c="actions",u="request";var h=a(7);class f extends i.Component{constructor(t){super(t),this.changeKeyLanguage=t=>{let e={note:l.g.getLang("note"),title:l.g.getLang("flowFo_title"),des:l.g.getLang("flowFo_des"),stt:l.g.getLang("stt"),btn_view:l.g.getLang("btnView"),status:l.g.getLang("flowFo_status"),active:l.g.getLang("flowFo_active"),inactive:l.g.getLang("flowFo_inactive"),btn_save:l.g.getLang("flowFo_btnSave"),version:l.g.getLang("flowFo_version"),update_time:l.g.getLang("flowFo_updateTime")};if(void 0!==t)return e;let a=this.state.infoA;a.title=l.g.getLang("flowFo_title"),a.des=l.g.getLang("flowFo_des"),a.lang_form.vi=l.g.getLang("flowFo_title"),a.lang_form.en=l.g.getLang("flowFo_title"),this.setState({languages:e,infoA:a}),this.changeLanguageTemplate(e)},this.getInfoA=()=>this.state.infoA,this.getKeyFormAuto=()=>this.key_form,this.callSetHidden=t=>{this.setState({visibility:t})},this.onSaveFlow=()=>{let t=this.state.data;void 0!==t.input&&""!==t.input&&(t.input=JSON.parse(t.input)),void 0!==t.actions&&""!==t.actions&&(t.actions=JSON.parse(t.actions)),void 0!==t.request&&""!==t.request&&(t.request=JSON.parse(t.request));let e=this.state.all_txcode;if(t.isOld){for(let s=0;s<e.length;s++)if(e[s].txcode===t.txcode){void 0!==t.version?t.version=t.version+1:t.version=2,t.updateTime=l.g.getLongTime(),e[s]=t;break}}else e.push(t);let a=this.getDataDefault();this.setState({all_txcode:e,data:a},()=>this.setState({stateData:this.getFlowFOConfig(a,this.state.languages,!1)})),n.a.quickPost([{txcode:"#sys:bo-save-txFo",input:{txCode:this.state.data.txcode,txCodeContent:t}}],{})},this.changeInputHandler=(t,e)=>{let{stateData:a}=this.state,s=a.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(s.length>0){s[0].components[e].dataFull.value=t.target.value;let{data:i}=this.state;i[e]=t.target.value,this.setState({stateData:a,data:i})}},this.changeSelectHandler=(t,e,a)=>{let{stateData:s}=this.state,i=s.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(i.length>0){let o=[],l=[];if(o=i[0].components[a].dataFull.data.filter(t=>t.selected),l=i[0].components[a].dataFull.data.filter((t,a)=>a===e),o.length>0&&(o[0].selected=!1),l.length>0){let{data:e}=this.state;e[a]=t,l[0].selected=!0,this.setState({stateData:s,data:e})}}},this.changeTextAreaHandler=(t,e)=>{let{stateData:a}=this.state,s=a.formTabs.data.filter(t=>t.tabInfo.id===this.state.selectedTabId);if(s.length>0){s[0].components[e].dataFull.value=t.target.value;let{data:i}=this.state;i[e]=t.target.value,this.setState({stateData:a,data:i})}},this.clickViewButtonHandler=(t,e)=>{let a=e;a.isOld=!0,void 0!==a.request&&""!==a.request&&(a.request=JSON.stringify(a.request,null,4)),void 0!==a.actions&&""!==a.actions&&(a.actions=JSON.stringify(a.actions,null,4)),void 0!==a.input&&""!==a.input&&(a.input=JSON.stringify(a.input,null,4));let s=this.getFlowFOConfig(e,this.state.languages,!1,!0);this.setState({data:a,stateData:s})},this.changeTabHandler=(t,e)=>{void 0!==e&&this.setState({selectedTabId:e})},this.key_form="flow_fo";let e=this.changeKeyLanguage("start");this.flowFOFOrm=Object(d.c)("flowFO"),this.dateFormat=l.g.getParameterSystem("DATE_FORMAT");let a=this.getDataDefault();this.state={visibility:"",errorJson:!1,infoA:{lang_form:{vi:l.g.getLang("flowFo_title"),en:l.g.getLang("flowFo_title")},title:"Client process",des:"Y\xeau c\u1ea7u l\xe0m tr\xean Desktop",openOne:"true",form_code:this.key_form,ofModal:!1},all_txcode:this.props.all_txcode,data:a,languages:e,selectedTabId:r,stateData:this.getFlowFOConfig(a,e,!0)}}changeLanguageTemplate(t){let{stateData:e}=this.state;e.form.config.default.title=t.title,e.formTabs.data[0].components.version.dataFull.config.default.title=t.version,e.formTabs.data[0].components.status.dataFull.config.default.title=t.status,e.foTable.Header.data[0].title=t.stt,e.foTable.Header.data[3].title=t.status,e.foTable.Header.data[5].title=t.version,e.foTable.Header.data[6].title=t.update_time,e.foTable.button.config.title=t.btn_view,e.saveButton.dataFull.config.default.title=t.btn_save,this.setState({stateData:e})}getDataDefault(){return{input:JSON.stringify({},null,4),actions:JSON.stringify([{name:"",function:"",type:"javascript",status:"A",para:[],request:{_default_:{bo:[{txcode:"",input:{}}]}}}],null,4),status:"A",txtype:"bo",txcode:"",txname:"",version:1,updateTime:l.g.getLongTime(),isOld:!1,request:JSON.stringify({bo:[{txcode:"",input:{}}]},null,4)}}componentDidMount(){l.g.addAppAuto(this.key_form,this,this.state.infoA.ofModal),l.g.form_addMapping(this.key_form,this.props.mapping_key)}onChange(t,e){var a=this.state.data;a[t]=e.target.value,this.setState({data:a,errorJson:!1})}onBlur(t,e){var a=this.state.data,s=!1;if("input"===t||"actions"===t||"request"===t)try{var i=JSON.parse(e.target.value);a[t]=JSON.stringify(i,null,4)}catch(o){s=!0,alert(o)}this.setState({data:a,errorJson:s})}makeSmoothDataTable(){let t=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e,a)=>{t.push(Object(s.a)(Object(s.a)({},e),{},{order:a+1,updateTime:Object(h.d)(e.updateTime,this.dateFormat)}))}),t}getDataTxType(t){const e=[{value:"bo",title:"bo"},{value:"message",title:"message"},{value:"system",title:"system"}];let a=e.filter(e=>e.value===t);return a.length>0&&(a[0].selected=!0),e}getDataStatus(t){const e=[{title:"Active",value:"A"},{title:"Inactive",value:"I"}];let a=e.filter(e=>e.value===t);return a.length>0&&(a[0].selected=!0),e}getFlowFOConfig(t,e){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?this.makeSmoothDataTable(this.props.all_txcode||[]):this.makeSmoothDataTable(this.state.all_txcode);return{form:{config:{default:{title:e.title}},cmd:{visibility:""}},formTabs:{data:[{tabInfo:{title:"info",id:r},components:{txcode:{dataFull:{config:{default:{title:"txCode",type:"text",class:"col-sm-4",code_form_component:"txcode",required:!1},cmd:{disable:!!a,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.txcode},abs_Change:this.changeInputHandler},txname:{dataFull:{config:{default:{title:"txName",type:"text",class:"col-sm-4",code_form_component:"txname",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.txname},abs_Change:this.changeInputHandler},version:{dataFull:{config:{default:{title:e.version,type:"text",class:"col-sm-4",code_form_component:"version",required:!1},cmd:{disable:!0,visible:!0,error:{message:"",type:""}},mode:{textAlign:"right",letterSpacing:""}},data:[],value:t.version},abs_Change:this.changeInputHandler},txtype:{dataFull:{config:{default:{title:"txType",type:"",class:"col-sm-6",code_form_component:"txtype",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{}},data:this.getDataTxType(t.txtype),value:""},abs_Change:this.changeSelectHandler},status:{dataFull:{config:{default:{title:e.status,type:"",class:"col-sm-6",code_form_component:"status",required:!1},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{}},data:this.getDataStatus(t.status),value:""},abs_Change:this.changeSelectHandler}}},{tabInfo:{title:"input",id:g},sysStyle:{show:""},components:{input:{dataFull:{config:{default:{title:"",class:"col-md-12",code_form_component:"input",rows:10,required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.input},abs_Change:this.changeTextAreaHandler}}},{tabInfo:{title:"actions",id:c},sysStyle:{show:""},components:{actions:{dataFull:{config:{default:{title:"",class:"col-sm-12",rows:10,code_form_component:"actions",required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.actions},abs_Change:this.changeTextAreaHandler}}},{tabInfo:{title:"request",id:u},sysStyle:{show:""},components:{request:{dataFull:{config:{default:{title:"",class:"col-md-12",rows:10,code_form_component:"request",required:!1},error:{message:"",type:""},cmd:{disable:!1,visible:!0},mode:{}},data:[],value:t.request},abs_Change:this.changeTextAreaHandler}}}],abs_Change:this.changeTabHandler},foTable:{Header:{data:[{title:e.stt,id:"order",config:{width:"20px"}},{title:"txCode",id:"txcode",config:{width:""}},{title:"txName",id:"txname",config:{width:""}},{title:e.status,id:"status",config:{width:""}},{title:"txType",id:"txtype",config:{width:""}},{title:e.version,id:"version",config:{width:""}},{title:e.update_time,id:"updateTime",config:{width:""}},{title:"",id:"button",config:{width:""}}],config:{mode:{hasSearch:!1}}},config:{mode:"",noHeader:!1},data:s,button:{config:{title:e.btn_view},abs_Click:this.clickViewButtonHandler}},saveButton:{dataFull:{config:{default:{title:e.btn_save,type:"submit",class:""}}},abs_Click:this.onSaveFlow}}}render(){if("none"===this.state.visibility)return null;const t=this.flowFOFOrm;return o.a.createElement(t,{stateData:this.state.stateData})}}e.default=f}}]);