(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[110],{107:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),d=t(1),i=t(3);const c={structable:"",structable_read:"",cdlist:{cdgrp:"",cdname:"",query:""},data_default:"",data_mode:"query",query_data:"",is_multi_select:"false",is_multi_col:"false",get_data_format:"c_cdlist.cdid",selected_view_format:"@c_cdlist.caption",table_format:'[\n            {\n                "title": "Name",\n                "code": "col.col_name"\n            },\n            {\n                "title": "ID",\n                "code": "col.col_id"\n            }\n        ]',col_format:"@c_cdlist.caption",json_data:'[\n            {\n                "col": {\n                    "col_name": "val_1",\n                    "col_id": "val_2"\n                }\n            },\n            {\n                "col": {\n                    "col_name": "val_3",\n                    "col_id": "val_4"\n                }\n            }\n        ]',index_view_value:"0",key_selected:"c_cdlist.cdid",useAction:"false",isAutoDefault:"true",isLabel:"false",isHasDataNull:"false"};class r extends l.Component{constructor(e){if(super(e),this.getData=()=>{let{CCP_Default_Config_select:e}=this.state,a=e.cdgrp.dataFull.data.find(e=>e.selected),t=e.cdname.dataFull.data.find(e=>e.selected),l=e.interface_selectMethod.dataFull.data.find(e=>e.selected),s=e.interface_formatTable.dataFull.data.find(e=>e.selected),i=e.SD_typeData.dataFull.data.find(e=>e.selected),c=e.auto_default.dataFull.data.find(e=>e.selected),r=e.isLabel.dataFull.data.find(e=>e.selected),o=e.isHasDataNull.dataFull.data.find(e=>e.selected),u=d.g.cloneJson(this.data.cdlist),n={cdgrp:a?a.value:void 0,cdname:t?t.value:void 0};for(let d in u)void 0!==n[d]&&(u[d]=n[d]);return{structable:e.collection_method.dataFull.value,structable_read:e.read_data.dataFull.value,cdlist:u,data_default:e.data_default.dataFull.value,data_mode:i.value,query_data:e.SD_queryData.dataFull.value,is_multi_select:l.value,is_multi_col:s.value,get_data_format:e.config_data.dataFull.value,selected_view_format:e.interface_renderData.dataFull.value,table_format:e.table_format.dataFull.value,index_view_value:e.index_view_value.dataFull.value,col_format:e.interface_configColumn.dataFull.value,json_data:e.SD_textarea.dataFull.value,key_selected:e.key_data.dataFull.value,useAction:this.data.useAction,isAutoDefault:c.value,isLabel:r.value,isHasDataNull:o.value}},this.readConfig=e=>{var a={};for(let t in c)a[t]=e[t]||c[t];return this.data_cdgrp.length>0&&(void 0!==a.cdlist.cdgrp&&""!==a.cdlist.cdgrp||(a.cdlist.cdgrp=this.data_cdgrp[0]),void 0!==a.cdlist.cdname&&""!==a.cdlist.cdname||(a.cdlist.cdname=this.data_cdname[this.data_cdgrp[0]][0])),a},this.buildlistcdlist=e=>{let a=[];switch(e){case"cdgrp":this.data_cdgrp.map(e=>a.push({title:e,value:e,selected:this.state.CCP_Default_Config_select.cdgrp.dataFull.data.find(e=>e.selected)===e})),a.find(e=>e.selected)||(a[0].selected=!0);break;case"cdname":this.data_cdname[this.state.CCP_Default_Config_select.cdgrp.dataFull.data.find(e=>e.selected).value].map(e=>a.push({title:e,value:e,selected:this.state.CCP_Default_Config_select.cdname.dataFull.data.find(e=>e.selected)===e})),a.find(e=>e.selected)||(a[0].selected=!0)}return a},this.loadDataToState=()=>{let e=[],a=[];return this.data_cdgrp.map(a=>e.push({title:a,value:a,selected:this.data.cdlist.cdgrp===a})),void 0===this.data_cdname[this.data.cdlist.cdgrp]&&(this.data_cdname[this.data.cdlist.cdgrp]=[]),this.data_cdname[this.data.cdlist.cdgrp].map(e=>a.push({title:e,value:e,selected:this.data.cdlist.cdname===e})),e.find(e=>e.selected)||void 0!==e[0]&&(e[0].selected=!0),a.find(e=>e.selected)||void 0!==a[0]&&(a[0].selected=!0),{collection_method:{dataFull:{config:{default:{title:d.g.getLang("designForm_cp_structable"),class:"col-md-12 ",required:!1,placeholder:d.g.getLang("designForm_cp_structable"),helper:d.g.getLang("designForm_cp_structable"),code_form_component:"collection_method"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},read_data:{dataFull:{config:{default:{title:d.g.getLang("designForm_cp_structable_read"),class:"col-md-12 ",required:!1,placeholder:d.g.getLang("designForm_cp_structable_read"),helper:d.g.getLang("designForm_cp_structable_read"),code_form_component:"read_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},data_default:{dataFull:{config:{default:{title:d.g.getLang("designForm_cTextArea_data_default"),class:"col-md-12 ",required:!1,placeholder:d.g.getLang("designForm_cTextArea_data_default"),helper:d.g.getLang("designForm_cTextArea_data_default"),code_form_component:"data_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},config_data:{dataFull:{config:{default:{title:d.g.getLang("designForm_jSelect_config_data"),class:"col-md-12 ",required:!0,placeholder:d.g.getLang("designForm_jSelect_config_data"),helper:d.g.getLang("designForm_jSelect_config_data"),code_form_component:"config_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.get_data_format,abs_Change:this.onChangeValue}},key_data:{dataFull:{config:{default:{title:d.g.getLang("designForm_jSelect_key_data"),class:"col-md-12 ",required:!0,placeholder:d.g.getLang("designForm_jSelect_key_data"),helper:d.g.getLang("designForm_jSelect_key_data"),code_form_component:"key_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.key_selected,abs_Change:this.onChangeValue}},auto_default:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:d.g.getLang("designForm_jSelect_auto_default"),data_status:"No Result",title:d.g.getLang("designForm_jSelect_auto_default"),class:"col-md-6",required:!1,code_form_component:"auto_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Use",value:"true",selected:"true"===this.data.isAutoDefault},{title:"No use",value:"false",selected:"true"!==this.data.isAutoDefault}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},isLabel:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:d.g.getLang("designForm_jSelect_isLabel"),data_status:"No Result",title:d.g.getLang("designForm_jSelect_isLabel"),class:"col-md-6",required:!1,code_form_component:"isLabel"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isLabel},{title:"No",value:"false",selected:"true"!==this.data.isLabel}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},isHasDataNull:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:d.g.getLang("designForm_jSelect_isHasDataNull"),data_status:"No Result",title:d.g.getLang("designForm_jSelect_isHasDataNull"),class:"col-md-6",required:!1,code_form_component:"isHasDataNull"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Yes",value:"true",selected:"true"===this.data.isHasDataNull},{title:"No",value:"false",selected:"true"!==this.data.isHasDataNull}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},SD_multiValue:{dataFull:{config:{default:{title:d.g.getLang("designForm_jSelect_multi")},cmd:{visible:!0}}}},SD_typeData:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:d.g.getLang("designForm_jSelect_data_type"),data_status:"No Result",title:d.g.getLang("designForm_jSelect_data_type"),class:"col-md-6",required:!1,code_form_component:"SD_typeData"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Query",value:"query",selected:"query"===this.data.data_mode},{title:"CDLIST",value:"cdlist",selected:"cdlist"===this.data.data_mode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},SD_queryData:{dataFull:{config:{default:{helper:d.g.getLang("designForm_jSelect_query_data"),title:d.g.getLang("designForm_jSelect_query_data"),class:"col-md-12 ",required:!1,placeholder:"Search",code_form_component:"SD_queryData"},cmd:{isHelper:!0,disable:!1,visible:"query"===this.data.data_mode,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.query_data,abs_Change:this.onChangeValue}},SD_textarea:{dataFull:{config:{default:{helper:"JSON data",title:"JSON data",class:"col-md-12",rows:10,code_form_component:"SD_textarea"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:this.data.json_data,abs_Change:this.onChangeValue}},cdgrp:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"cdgrp",data_status:"No Result",title:"cdgrp",class:"col-md-6",required:!1,code_form_component:"cdgrp"},cmd:{isHelper:!0,disable:!1,visible:"cdlist"===this.data.data_mode,isFocus:!1,error:{message:"",type:""}},mode:{}},data:e,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},cdname:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"cdname",data_status:"No Result",title:"cdname",class:"col-md-12",required:!1,code_form_component:"cdname"},cmd:{isHelper:!0,disable:!1,visible:"cdlist"===this.data.data_mode,isFocus:!1,error:{message:"",type:""}},mode:{}},data:a,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},interface_multiValue:{dataFull:{config:{default:{title:"INTERFACE"},cmd:{visible:!0}}}},interface_formatTable:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Table format",data_status:"No Result",title:"Table format",class:"col-md-6",required:!1,code_form_component:"interface_formatTable"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Multi column",value:"true",selected:"true"===this.data.is_multi_col},{title:"Single column",value:"false",selected:"false"===this.data.is_multi_col}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},interface_selectMethod:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Select Method",data_status:"No Result",title:"Select Method",class:"col-md-6",required:!1,code_form_component:"interface_selectMethod"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Multi Select",value:"true",selected:"true"===this.data.is_multi_select},{title:"Single Select",value:"false",selected:"false"===this.data.is_multi_select}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},interface_configColumn:{dataFull:{config:{default:{helper:"Single column format",title:"Single column format",class:"col-md-12 ",required:!1,placeholder:"Search",code_form_component:"interface_configColumn"},cmd:{isHelper:!0,disable:!1,visible:"false"===this.data.is_multi_col,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.col_format,abs_Change:this.onChangeValue}},table_format:{dataFull:{config:{default:{helper:"Format Table",title:"Format Table",class:"col-md-12",rows:10,code_form_component:"table_format"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.is_multi_col,error:{message:"",type:""}}},data:[],value:this.data.table_format,abs_Change:this.onChangeValue}},index_view_value:{dataFull:{config:{default:{helper:"Index view value",title:"Index view value",class:"col-md-12 ",required:!1,placeholder:"Search",code_form_component:"index_view_value"},cmd:{isHelper:!0,disable:!1,visible:"true"===this.data.is_multi_col,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.index_view_value,abs_Change:this.onChangeValue}},interface_renderData:{dataFull:{config:{default:{helper:"Render data selected",title:"Render data selected",class:"col-md-12 ",required:!1,placeholder:"Search",code_form_component:"interface_renderData"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.selected_view_format,abs_Change:this.onChangeValue}}}},this.onChangeValue=(e,a)=>{let{CCP_Default_Config_select:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Config_select:t})},this.search=(e,a)=>{let{CCP_Default_Config_select:t}=this.state,l=this.buildlistcdlist(a);t[a].dataFull.search_value=e.target.value;const s=l.filter(a=>a.title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()));t[a].dataFull.data=s,this.setState({CCP_Default_Config_select:t})},this.onChangeValueSelect=(e,a,t)=>{let{CCP_Default_Config_select:l}=this.state;if(t){if("SD_typeData"===t&&(l.cdname.dataFull.config.cmd.visible="cdlist"===e,l.cdgrp.dataFull.config.cmd.visible="cdlist"===e,l.SD_queryData.dataFull.config.cmd.visible="query"===e),"interface_formatTable"===t&&(l.table_format.dataFull.config.cmd.visible="true"===e,l.index_view_value.dataFull.config.cmd.visible="true"===e,l.interface_configColumn.dataFull.config.cmd.visible="false"===e),"cdgrp"===t){let a=[];this.data_cdname[e].map(e=>a.push({title:e,value:e,selected:this.data.cdname===e})),a[0].selected=!0,l.cdname.dataFull.data=a}for(const a of l[t].dataFull.data)a.selected=a.value===e;this.setState({CCP_Default_Config_select:l})}},this.componentDidMount=()=>{this.setState({CCP_Default_Config_select:this.loadDataToState()})},this.CCP_Default_Config_select=Object(i.c)("CCP_Default_Config_select"),this.data_cdlist=this.props.data.data_cdlist,this.data_cdname={},this.data_cdgrp=[],this.data_cdlist)for(let a=0;a<this.data_cdlist.length;a++){const e=this.data_cdlist[a].c_cdlist;void 0===this.data_cdname[e.cdgrp]&&(this.data_cdname[e.cdgrp]=[],this.data_cdgrp.push(e.cdgrp)),!1===this.data_cdname[e.cdgrp].includes(e.cdname)&&this.data_cdname[e.cdgrp].push(e.cdname)}this.data_cdgrp.sort();for(let a in this.data_cdname)this.data_cdname[a].sort();this.data=this.readConfig(this.props.configComponent.configItem.config),this.state={CCP_Default_Config_select:{}}}render(){const e=this.CCP_Default_Config_select;return s.a.createElement(e,{stateData:this.state.CCP_Default_Config_select})}}a.default=r}}]);