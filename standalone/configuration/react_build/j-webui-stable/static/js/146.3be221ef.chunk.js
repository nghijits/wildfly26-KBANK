(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[146],{228:function(e,t,a){"use strict";a.r(t);var s=a(6),l=a(0),i=a.n(l),r=a(1),h=a(8),o=a(3);class c extends l.Component{constructor(e){super(e),this.getUsersNotInRole=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===t||0===t.length)return e;{let a=[];return e.forEach(e=>{t.includes(e.user.user_id)||a.push(e)}),a}},this.getUsersInRole=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===t||0===t.length)return[];{let a=[];return e.forEach(e=>{t.includes(e.user.user_id)&&a.push(e)}),a}},this.checkDataLeftHandler=e=>{if(e.index>=0){let t=this.tableKey.left;this.checkOneItemTableHandler(e.index,t.tableKey,t.tableDataKey,t.mappingKeyToIndex.check,t.usersKey,t.checkedUsersNumberKey)}},this.checkOneItemTableHandler=(e,t,a,s,l,i)=>{let{stateData:r}=this.state,h=r[a][e].data[s].value,o=this.logicState[l].length;r[a][e].data[s].value=!h,r[a][e].config.isCheck=!h,this.setState({stateData:r}),this.logicState[i]=h?this.logicState[i]-1:this.logicState[i]+1;let c=void 0;0===this.logicState[i]?c=!1:this.logicState[i]===o?c=!0:this.logicState[i]<o&&(c="-"),this.setValueCheckboxHeader(t,s,c)},this.setValueCheckboxHeader=(e,t,a)=>{let{stateData:s}=this.state;s[e].dataFull.Header.data[t].data.value=a,this.setState({stateData:s})},this.getCheckboxHeaderValue=(e,t)=>this.state.stateData[e].dataFull.Header.data[t].data.value,this.checkDataRightHandler=e=>{if(e.index>=0){let t=this.tableKey.right;this.checkOneItemTableHandler(e.index,t.tableKey,t.tableDataKey,t.mappingKeyToIndex.check,t.usersKey,t.checkedUsersNumberKey)}},this.checkAllLeftDataHandler=()=>{let e=this.tableKey.left;this.checkAllHandler(e.mappingKeyToIndex.check,e.tableKey,e.tableDataKey,e.usersKey,e.checkedUsersNumberKey)},this.checkAllHandler=(e,t,a,s,l)=>{let{stateData:i}=this.state,r=!0!==this.getCheckboxHeaderValue(t,e);for(let h=0;h<i[a].length;h++)i[a][h].data[e].value=r,i[a][h].config.isCheck=r;this.logicState[l]=r?this.logicState[s].length:0,i[t].dataFull.Header.data[e].data.value=r,this.setState({stateData:i})},this.checkAllRightDataHandler=()=>{let e=this.tableKey.right;this.checkAllHandler(e.mappingKeyToIndex.check,e.tableKey,e.tableDataKey,e.usersKey,e.checkedUsersNumberKey)},this.clickRemoveSelectedUsersHandler=(e,t)=>{let a=this.getSelectedUsers(this.tableKey.right);if(a.length>0){this.logicState.usersLeftTable=this.logicState.usersLeftTable.concat(a),this.logicState.usersRightTable=this.getUnselectedUsers(this.tableKey.right),this.logicState.usersSearchData=this.logicState.usersLeftTable,this.uncheckAllTableData(),this.user_change=a;let{stateData:e}=this.state;e.table_left_data=this.getUsersLeftTableConfig(this.logicState.usersLeftTable),e.table_right_data=this.getUsersRightTableConfig(this.logicState.usersRightTable),this.setState({stateData:e}),this.autoSaveRole(this.logicState.usersRightTable)}},this.clickRemoveAllUsersHander=(e,t)=>{let a=this.logicState.usersRightTable;if(a.length>0){this.logicState.usersLeftTable=this.logicState.usersLeftTable.concat(this.logicState.usersRightTable),this.logicState.usersRightTable=[],this.logicState.usersSearchData=this.logicState.usersLeftTable,this.uncheckAllTableData(),this.user_change=a;let{stateData:e}=this.state;e.table_left_data=this.getUsersLeftTableConfig(this.logicState.usersLeftTable),e.table_right_data=this.getUsersRightTableConfig(this.logicState.usersRightTable),this.setState({stateData:e}),this.autoSaveRole(this.logicState.usersRightTable)}},this.clickAddSelectedUsersHandler=(e,t)=>{let a=this.getSelectedUsers(this.tableKey.left);if(a.length>0){this.logicState.usersRightTable=this.logicState.usersRightTable.concat(a),this.logicState.usersLeftTable=this.getUnselectedUsers(this.tableKey.left),this.logicState.usersSearchData=this.logicState.usersLeftTable,this.uncheckAllTableData(),this.user_change=a;let{stateData:e}=this.state;e.table_left_data=this.getUsersLeftTableConfig(this.logicState.usersLeftTable),e.table_right_data=this.getUsersRightTableConfig(this.logicState.usersRightTable),this.setState({stateData:e}),this.autoSaveRole(this.logicState.usersRightTable)}},this.clickAddAllUsersHander=(e,t)=>{let a=this.logicState.usersLeftTable;if(a.length>0){this.logicState.usersRightTable=this.logicState.usersRightTable.concat(this.logicState.usersLeftTable),this.logicState.usersLeftTable=[],this.logicState.usersSearchData=[],this.uncheckAllTableData(),this.user_change=a;let{stateData:e}=this.state;e.table_left_data=this.getUsersLeftTableConfig(this.logicState.usersLeftTable),e.table_right_data=this.getUsersRightTableConfig(this.logicState.usersRightTable),this.setState({stateData:e}),this.autoSaveRole(this.logicState.usersRightTable)}},this.onSearchDropdown=e=>{let t=e.target.value.trim(),a=[],{stateData:s}=this.state;s.role_choose.dataFull.search_value=t,a=""===t?this.logicState.role_system:this.logicState.role_system.filter(e=>{let a=e.role_system.role_system_name;return r.g.searchPerfect(t,a)}),s.role_choose.dataFull.data=this.getDataSelectItem(a,this.selectedRoleId),this.setState({stateData:s})},this.searchUserHandler=e=>{let t=e.target.value,{stateData:a}=this.state;if(""!==t.trim()){let e=this.logicState.usersSearchData,s=[];for(let a=0;a<e.length;a++){let l="";for(let t in e[a])for(let s in e[a][t])"full_name"!==s&&"email"!==s||(l+=e[a][t][s]+" ");l.toLowerCase().includes(t.toLowerCase())&&(s[s.length]=e[a])}this.logicState.usersLeftTable=s,a.table_left_data=this.getUsersLeftTableConfig(this.logicState.usersLeftTable)}else{let e=this.role_all[this.selectedRoleId],t=[];for(let a=0;a<this.logicState.allUsers.length;a++)this.checkUserHasSelect_for_changeRole(this.logicState.allUsers[a].user.user_id,e)&&(t[t.length]=this.logicState.allUsers[a]);this.logicState.usersLeftTable=t,this.logicState.usersSearchData=t,a.table_left_data=this.getUsersLeftTableConfig(t)}this.setState({stateData:a})},this.changeKeyLanguage=e=>{let t={note:r.g.getLang("note"),title_:r.g.getLang("roleUser_title"),des_:r.g.getLang("roleUser_des"),user:r.g.getLang("roleUser_user"),search:r.g.getLang("roleUser_search"),stt:r.g.getLang("stt"),user_has_no_role:r.g.getLang("roleUser_userHasNoRole"),double_click_to_move:r.g.getLang("roleUser_doubleClickToMove"),full_name:r.g.getLang("roleUser_fullName"),status:r.g.getLang("roleUser_status"),role:r.g.getLang("roleUser_role"),user_belongs_to_the_role:r.g.getLang("roleUser_userBelongsToTheRole")};if(void 0!==e)return t;let a=this.logicState.infoA;a.title=r.g.getLang("roleUser_title"),a.des=r.g.getLang("roleUser_des"),a.lang_form.vi=r.g.getLang("roleUser_title"),a.lang_form.en=r.g.getLang("roleUser_title"),this.setLogicState({languages:t,infoA:a}),this.changeLanguageTemplate(t)},this.onChangeValueSelect=(e,t,a)=>{this.selectedRoleId=e;let s=[],l=[];void 0!==this.role_all[this.selectedRoleId]?(s=this.getUsersInRole(this.logicState.allUsers,this.role_all[e]),l=this.getUsersNotInRole(this.logicState.allUsers,this.role_all[e])):l=this.logicState.allUsers,this.logicState.usersLeftTable=l,this.logicState.usersRightTable=s;let{stateData:i}=this.state;i.table_left_data=this.getUsersLeftTableConfig(l),i.table_right_data=this.getUsersRightTableConfig(s);let r=i.role_choose.dataFull.data.filter(e=>!0===e.selected);r.length>0&&(r[0].selected=!1);let h=i.role_choose.dataFull.data.filter((e,a)=>a===t);h.length>0&&(i.role_choose.dataFull.input_value=h[0].title,h[0].selected=!0),this.setState({stateData:i}),this.logicState.usersSearchData=l,this.uncheckAllTableData()},this.getInfoA=()=>this.logicState.infoA,this.getKeyFormAuto=()=>this.key_form,this.callSetHidden=e=>{this.setLogicState({visibility:e}),this.setState({invokeReload:!this.state.invokeReload})},this.key_form="roleUser";let t=this.changeKeyLanguage("start"),a=r.g.getData("user");this.roleUserForm=Object(o.c)("jwebui_roleUser");let s=r.g.getData("role_system");this.selectedRoleId=void 0!==s&&s.length>0?s[0].role_system.role_system_id:"",this.tableKey={left:{mappingKeyToIndex:{check:1},tableKey:"table_left",tableDataKey:"table_left_data",usersKey:"usersLeftTable",checkedUsersNumberKey:"checkedLeftTableNumber"},right:{mappingKeyToIndex:{check:1},tableKey:"table_right",tableDataKey:"table_right_data",usersKey:"usersRightTable",checkedUsersNumberKey:"checkedRightTableNumber"}};let l=this.getUsersNotInRole(a,this.props.data[this.selectedRoleId]);this.logicState={checkedLeftTableNumber:0,checkedRightTableNumber:0,usersSearchData:l,allUsers:a,usersLeftTable:l,usersRightTable:this.getUsersInRole(a,this.props.data[this.selectedRoleId]),role_system:s,data:[],visibility:"",infoA:{lang_form:{vi:r.g.getLang("roleUser_title"),en:r.g.getLang("roleUser_title")},title:"Permissions And Users",des:"Quan h\u1ec7 gi\u1eefa quy\u1ec1n truy c\u1eadp v\xe0 ng\u01b0\u1eddi d\xf9ng!",openOne:"true",ofModal:!1},languages:t},this.state={invokeReload:!1,stateData:this.getConfigTemplate(this.logicState.role_system,this.logicState.usersLeftTable,this.logicState.usersRightTable)},this.role_all=this.props.data,this.user_change=[]}getUsersLeftTableConfig(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e,t)=>({data:[{data:t+1},{value:!1,dataItem:{index:t},abs_Click:this.checkDataLeftHandler},{data:e.user.full_name},{data:e.user.email}],config:{isCheck:!1}}))}getUsersRightTableConfig(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e,t)=>({data:[{data:t+1},{value:!1,dataItem:{index:t},abs_Click:this.checkDataRightHandler},{data:e.user.full_name}],config:{isCheck:!1}}))}getDataSelectItem(e,t){return e.map((e,a)=>({title:e.role_system.role_system_name,value:e.role_system.role_system_id,selected:t===e.role_system.role_system_id}))}getConfigTemplate(){var e,t;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],{languages:i}=this.logicState;return{form:{dataFull:{config:{default:{title:i.title_,title_sub:i.des_}},cmd:{visibility:""}}},role:{title:i.role},user:{title:i.user},role_choose:{dataFull:{config:{default:{search:{placeholder:"Search"},data_status:"No result",title:"",type:"text",class:"col-md-12",code_form_component:"role_choose"},cmd:{disable:!1,visible:!0,error:{message:"",type:""}},mode:{noTitle:!0}},data:this.getDataSelectItem(a,null===(e=a[0])||void 0===e?void 0:e.role_system.role_system_id),input_value:null===(t=a[0])||void 0===t?void 0:t.role_system.role_system_name,search_value:""},abs_Change:this.onChangeValueSelect,abs_search:this.onSearchDropdown},search:{placeholder:i.search,abs_search:this.searchUserHandler},preview:{dataFull:{config:{default:{title:"",type:"",icon:"keyboard_arrow_left"}}},abs_Click:this.clickRemoveSelectedUsersHandler},preview_all:{dataFull:{config:{default:{icondouble:"keyboard_arrow_left"}}},abs_Click:this.clickRemoveAllUsersHander},next_all:{dataFull:{config:{default:{type:"",icondouble:"keyboard_arrow_right"}}},abs_Click:this.clickAddAllUsersHander},next:{dataFull:{config:{default:{type:"",icon:"keyboard_arrow_right"}}},abs_Click:this.clickAddSelectedUsersHandler},table_left:{dataFull:{Header:{data:[{title:i.stt,config:{width:"50px",isFrozen:!1}},{title:"",data:{value:!1,abs_Click:this.checkAllLeftDataHandler},config:{hasCheck:!0,width:"",isFrozen:!1}},{title:i.full_name,config:{width:"",isFrozen:!1}},{title:"Email",config:{width:"",isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_left_config:[{type:"uTableColumnDefault",config:{mode:"center",isFrozen:!1}},{type:"uTableColumnCheckbox"},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnAction"}],table_left_data:this.getUsersLeftTableConfig(s),table_right:{dataFull:{Header:{data:[{title:i.stt,config:{width:"50px",isFrozen:!1}},{title:"",data:{value:!1,abs_Click:this.checkAllRightDataHandler},config:{hasCheck:!0,width:"",isFrozen:!1}},{title:i.full_name,config:{width:"",isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_right_config:[{type:"uTableColumnDefault",config:{mode:"center",isFrozen:!1}},{type:"uTableColumnCheckbox"},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnAction"}],table_right_data:this.getUsersRightTableConfig(l)}}setLogicState(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logicState=Object(s.a)(Object(s.a)({},this.logicState),e)}uncheckAllTableData(){this.logicState.checkedRightTableNumber=0,this.logicState.checkedLeftTableNumber=0,this.setValueCheckboxHeader(this.tableKey.left.tableKey,this.tableKey.left.mappingKeyToIndex.check,!1),this.setValueCheckboxHeader(this.tableKey.right.tableKey,this.tableKey.right.mappingKeyToIndex.check,!1)}getSelectedUsers(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableKey.left,t=[];return this.state.stateData[e.tableDataKey].forEach((a,s)=>{!0===a.config.isCheck&&t.push(this.logicState[e.usersKey][s])}),t}getUnselectedUsers(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableKey.left,t=[];return this.state.stateData[e.tableDataKey].forEach((a,s)=>{!1===a.config.isCheck&&t.push(this.logicState[e.usersKey][s])}),t}changeLanguageTemplate(e){let{stateData:t}=this.state;t.form.dataFull.config.default.title=e.title_,t.form.dataFull.config.default.title_sub=e.des_,t.search.placeholder=e.search,t.role.title=e.role,t.user.title=e.user,t.table_left.dataFull.Header.data[0].title=e.stt,t.table_left.dataFull.Header.data[2].title=e.full_name,t.table_left.dataFull.Header.data[4].title=e.status,t.table_right.dataFull.Header.data[0].title=e.stt,t.table_right.dataFull.Header.data[2].title=e.full_name,t.table_right.dataFull.Header.data[3].title=e.status,this.setState({stateData:t})}checkUserHasSelect_for_changeRole(e,t){for(let a=0;a<t.length;a++)if(t[a]===e)return!1;return!0}autoSaveRole(e){let t=e.map(e=>e.user.user_id);this.role_all[this.selectedRoleId]=t;let a=[];for(let s=0;s<this.user_change.length;s++){let e=[],t=this.user_change[s].user.user_id;for(let a in this.role_all)this.role_all[a].includes(t)&&(e[e.length]=a);let l={};l.user_id=t,l.role=JSON.stringify(e),a[a.length]=l}h.a.quickPost([{txcode:"#sys:bo-save-roleUser",input:{list_user_role:a,role_user_all:JSON.stringify(this.role_all)}}],{}),this.user_change=[]}checkData(e,t){for(let a=0;a<t.length;a++)if(void 0!==t[a].user&&t[a].user.user_id===e)return!1;return!0}checkUserHasSelect_OOP(e,t){for(let a=0;a<t.length;a++)if(t[a].user.user_id===e)return!1;return!0}render(){if("none"===this.logicState.visibility)return null;const e=this.roleUserForm;return i.a.createElement(e,{stateData:this.state.stateData})}componentDidMount(){r.g.addAppAuto(this.key_form,this,this.logicState.infoA.ofModal),r.g.form_addMapping(this.key_form,this.props.mapping_key)}}t.default=c}}]);