import{C as ne,s as D,a7 as F,ah as de,ai as M,aj as P,k as R,r as x,ak as q,al as ee,o as r,m as p,b as n,w as o,E as $,c as _,v as S,a9 as ue,F as b,l as B,H as fe,q as C,am as ge,e as m,g as j,p as w,M as J,P as W,u as me,t as V,O as E,J as I,Q as A,I as ve,h as H,af as pe,y as ce,f as _e,n as he,j as ye,K as N}from"./index-11f1cd8c.js";import{A as k}from"./AstrBotConfig-568869c1.js";import{W as ae}from"./WaitingForRestart-0476b659.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./common-34a2a7ab.js";var be=Object.defineProperty,Ve=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,G=(a,e,t)=>e in a?be(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,U=(a,e)=>{for(var t in e||(e={}))we.call(e,t)&&G(a,t,e[t]);if(X)for(var t of X(e))Ce.call(e,t)&&G(a,t,e[t]);return a},Oe=(a,e)=>Ve(a,Se(e));const z={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Me(a,e){const t=F(()=>{const{width:l,height:g}=a;return Oe(U({},z.wrapper),{width:l,height:g})}),s=F(()=>U(U({},z.fullWidth),!e.value&&z.hide));return{wrapperStyle:t,containerStyle:s}}function ke(){const a=D(q.__getMonacoInstance()),e=x(!1);let t;return R(()=>{a.value||(t=q.init(),t.then(l=>a.value=l).catch(l=>{(l==null?void 0:l.type)!=="cancelation"&&(e.value=!0,console.error("Monaco initialization error:",l))}))}),{monacoRef:a,unload:()=>t==null?void 0:t.cancel(),isLoadFailed:e}}function Q(a){return typeof a=="function"?a():a}function L(a){return a===void 0}function te(a,e,t,s){return Te(a,s)||Pe(a,e,t,s)}function Te(a,e){return a.editor.getModel(le(a,e))}function Pe(a,e,t,s){return a.editor.createModel(e,t,s?le(a,s):void 0)}function le(a,e){return a.Uri.parse(e)}var $e=Object.defineProperty,Y=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Z=(a,e,t)=>e in a?$e(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ie=(a,e)=>{for(var t in e||(e={}))je.call(e,t)&&Z(a,t,e[t]);if(Y)for(var t of Y(e))Ee.call(e,t)&&Z(a,t,e[t]);return a};const Ne={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var se=ne({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(a,e){const t=new Map,s=D(null),{monacoRef:l,unload:g,isLoadFailed:h}=ke(),{editorRef:i}=Ue(e,a,l,s),{disposeValidator:y}=ze(e,a,l,i),c=F(()=>!!l.value&&!!i.value),{wrapperStyle:f,containerStyle:u}=Me(a,c);return de(()=>{var d,v;(d=y.value)==null||d.call(y),i.value?((v=i.value.getModel())==null||v.dispose(),i.value.dispose()):g()}),M([()=>a.path,()=>a.value,()=>a.language,()=>a.line],([d,v,T,O],[K,Ae,ie,oe])=>{if(c.value){if(d!==K){const re=te(l.value,v||a.defaultValue||"",T||a.defaultLanguage||"",d||a.defaultPath||"");a.saveViewState&&t.set(K,i.value.saveViewState()),i.value.setModel(re),a.saveViewState&&i.value.restoreViewState(t.get(d)),L(O)||i.value.revealLine(O);return}i.value.getValue()!==v&&i.value.setValue(v),T!==ie&&l.value.editor.setModelLanguage(i.value.getModel(),T),!L(O)&&O!==oe&&i.value.revealLine(O)}}),M(()=>a.options,d=>i.value&&i.value.updateOptions(d),{deep:!0}),M(()=>a.theme,d=>l.value&&l.value.editor.setTheme(d)),{containerRef:s,isEditorReady:c,isLoadFailed:h,wrapperStyle:f,containerStyle:u}},render(){const{$slots:a,isEditorReady:e,isLoadFailed:t,wrapperStyle:s,containerStyle:l,className:g}=this;return P("div",{style:s},[!e&&P("div",{style:Ne},t?a.failure?Q(a.failure):"load failed":a.default?Q(a.default):"loading..."),P("div",{ref:"containerRef",key:"monaco_editor_container",style:l,class:g})])}});function Ue({emit:a},e,t,s){const l=D(null);R(()=>{const h=M(t,()=>{s.value&&t.value&&(ee(()=>h()),g())},{immediate:!0})});function g(){var h;if(!s.value||!t.value||l.value)return;a("beforeMount",t.value);const i=e.path||e.defaultPath,y=te(t.value,e.value||e.defaultValue||"",e.language||e.defaultLanguage||"",i||"");l.value=t.value.editor.create(s.value,Ie({model:y,theme:e.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},e.options),e.overrideServices),(h=l.value)==null||h.onDidChangeModelContent(c=>{const f=l.value.getValue();f!==e.value&&(a("update:value",f),a("change",f,c))}),l.value&&!L(e.line)&&l.value.revealLine(e.line),a("mount",l.value,t.value)}return{editorRef:l}}function ze({emit:a},e,t,s){const l=x(null),g=M([t,s],()=>{if(t.value&&s.value){ee(()=>g());const h=t.value.editor.onDidChangeMarkers(i=>{var y,c;const f=(c=(y=s.value)==null?void 0:y.getModel())==null?void 0:c.uri;if(f&&i.find(d=>d.path===f.path)){const d=t.value.editor.getModelMarkers({resource:f});a("validate",d)}});l.value=()=>h==null?void 0:h.dispose()}});return{disposeValidator:l}}const Fe={key:2,style:{"margin-left":"16px"}},Le=C("span",{style:{"font-weight":"1000"}},"再",-1),De={key:0,style:{border:"1px solid #e0e0e0",padding:"8px","margin-bottom":"16px","border-radius":"10px"}},Ke={style:{padding:"16px"}},qe={key:1},Be={key:0,style:{border:"1px solid #e0e0e0",padding:"8px","margin-bottom":"16px","border-radius":"10px"}},Je=C("div",{style:{"margin-left":"16px","padding-bottom":"16px"}},[C("small",null,[m("不了解配置？请见 "),C("a",{href:"https://astrbot.app/"},"官方文档"),m(" 或 "),C("a",{href:"https://qm.qq.com/cgi-bin/qm/qr?k=EYGsuUTfe00_iOu9JTXS7_TEpMkXOvwv&jump_from=webapi&authKey=uUEMKCROfsseS+8IzqPjzV3y1tzy4AkykwTib2jNkOFdzezF9s9XknqnIaf3CDft"},"加群询问"),m("。")])],-1),We={name:"ConfigPage",components:{AstrBotConfig:k,VueMonacoEditor:se,WaitingForRestart:ae},watch:{config_data_str:function(a){this.config_data_has_changed=!0}},data(){return{config_data_has_changed:!1,config_data_str:"",config_data:{config:{}},fetched:!1,metadata:{},provider_config_tmpl:{},adapter_config_tmpl:{},save_message_snack:!1,save_message:"",save_message_success:"",namespace:"",tab:0,editorTab:0,config_template_tab:0}},mounted(){this.getConfig()},methods:{getConfig(){B.get("/api/config/get").then(a=>{this.config_data=a.data.data.config,this.fetched=!0,this.metadata=a.data.data.metadata,this.provider_config_tmpl=a.data.data.provider_config_tmpl,this.adapter_config_tmpl=a.data.data.adapter_config_tmpl}).catch(a=>{save_message=a,save_message_snack=!0,save_message_success="error"})},updateConfig(){this.fetched&&B.post("/api/config/astrbot/update",this.config_data).then(a=>{a.data.status==="ok"?(this.save_message=a.data.message,this.save_message_snack=!0,this.save_message_success="success",this.$refs.wfr.check()):(this.save_message=a.data.message,this.save_message_snack=!0,this.save_message_success="error")}).catch(a=>{this.save_message=a,this.save_message_snack=!0,this.save_message_success="error"})},configToString(){this.config_data_str=JSON.stringify(this.config_data,null,2),this.config_data_has_changed=!1},applyStrConfig(){try{this.config_data=JSON.parse(this.config_data_str),this.config_data_has_changed=!1,this.save_message_success="success",this.save_message="配置成功应用。如要保存，需再点击右下角保存按钮。",this.save_message_snack=!0}catch{this.save_message_success="error",this.save_message="配置未应用，Json 格式错误。",this.save_message_snack=!0}},addFromDefaultConfigTmpl(a,e,t){console.log(a);let s=this.metadata[e].metadata[t].config_template[a],l=JSON.parse(JSON.stringify(s));this.config_data[t].push(l),this.config_template_tab=this.config_data[t].length-1},deleteItem(a,e){console.log(a,e);let t=[];for(let s=0;s<this.config_data[a].length;s++)s!==e&&t.push(this.config_data[a][s]);this.config_data[a]=t,this.config_template_tab>0&&(this.config_template_tab-=1)}}},Ze=Object.assign(We,{setup(a){return(e,t)=>(r(),p(b,null,[n($,{style:{"margin-bottom":"16px"}},{default:o(()=>[n(fe,{style:{padding:"0"}},{default:o(()=>[C("div",null,[n(ge,{variant:"outlined",divided:""},{default:o(()=>[n(S,{icon:"mdi-text-box-edit-outline",style:{width:"80px"},color:e.editorTab===0?"primary":"",onClick:t[0]||(t[0]=s=>e.editorTab=0)},null,8,["color"]),n(S,{icon:"mdi-code-json",style:{width:"80px"},color:e.editorTab===1?"primary":"",onClick:t[1]||(t[1]=s=>{e.configToString(),e.editorTab=1})},null,8,["color"])]),_:1}),e.editorTab===1?(r(),_(S,{key:0,style:{"margin-left":"16px"},size:"small",onClick:t[2]||(t[2]=s=>e.configToString())},{default:o(()=>[m("回到更改前的代码")]),_:1})):j("",!0),e.editorTab===1&&e.config_data_has_changed?(r(),_(S,{key:1,style:{"margin-left":"16px"},size:"small",onClick:t[3]||(t[3]=s=>e.applyStrConfig())},{default:o(()=>[m("应用此配置")]),_:1})):j("",!0),e.editorTab===1?(r(),p("small",Fe,[m("💡 `应用此配置` 将配置暂存并应用到可视化。如要保存，需"),Le,m("点击右下角保存按钮。")])):j("",!0)])]),_:1})]),_:1}),e.editorTab===0?(r(),_($,{key:0},{default:o(()=>[n(J,{modelValue:e.tab,"onUpdate:modelValue":t[4]||(t[4]=s=>e.tab=s),"align-tabs":"left",color:"deep-purple-accent-4"},{default:o(()=>[(r(!0),p(b,null,w(e.metadata,(s,l,g)=>(r(),_(E,{key:g,value:g,style:{"font-weight":"1000","font-size":"15px"}},{default:o(()=>[m(V(e.metadata[l].name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n(W,{modelValue:e.tab,"onUpdate:modelValue":t[7]||(t[7]=s=>e.tab=s)},{default:o(()=>[(r(!0),p(b,null,w(e.metadata,(s,l,g)=>I((r(),_(A,{key:g},{default:o(()=>[n(ve,{fluid:""},{default:o(()=>[(r(!0),p(b,null,w(e.metadata[l].metadata,(h,i,y)=>{var c;return r(),p("div",null,[(c=e.metadata[l].metadata[i])!=null&&c.config_template?I((r(),p("div",De,[n(H,{style:{"font-weight":"bold"}},{default:o(()=>[m(V(e.metadata[l].metadata[i].description)+" ("+V(i)+") ",1)]),_:2},1024),n(J,{style:{"margin-top":"16px"},"align-tabs":"left",color:"deep-purple-accent-4",modelValue:e.config_template_tab,"onUpdate:modelValue":t[5]||(t[5]=f=>e.config_template_tab=f)},{default:o(()=>{var f;return[(f=e.metadata[l].metadata[i])!=null&&f.tmpl_display_title?(r(!0),p(b,{key:0},w(e.config_data[i],(u,d)=>(r(),_(E,{key:d,value:d},{default:o(()=>{var v;return[m(V(u[(v=e.metadata[l].metadata[i])==null?void 0:v.tmpl_display_title]),1)]}),_:2},1032,["value"]))),128)):(r(!0),p(b,{key:1},w(e.config_data[i],(u,d)=>(r(),_(E,{key:d+"_",value:d},{default:o(()=>[m(V(u.id)+"("+V(u.type)+") ",1)]),_:2},1032,["value"]))),128)),n(pe,null,{activator:o(({props:u})=>[n(S,ce({variant:"plain",size:"large"},u),{default:o(()=>[n(_e,null,{default:o(()=>[m("mdi-plus")]),_:1})]),_:2},1040)]),default:o(()=>[n(he,{"onUpdate:selected":u=>e.addFromDefaultConfigTmpl(u,l,i)},{default:o(()=>{var u;return[(r(!0),p(b,null,w((u=e.metadata[l].metadata[i])==null?void 0:u.config_template,(d,v)=>(r(),_(ye,{key:v,value:v},{default:o(()=>[n(H,null,{default:o(()=>[m(V(v),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]}),_:2},1032,["onUpdate:selected"])]),_:2},1024)]}),_:2},1032,["modelValue"]),n(W,{modelValue:e.config_template_tab,"onUpdate:modelValue":t[6]||(t[6]=f=>e.config_template_tab=f)},{default:o(()=>[(r(!0),p(b,null,w(e.config_data[i],(f,u)=>I((r(),_(A,{key:u,value:u},{default:o(()=>[C("div",Ke,[n(S,{variant:"tonal",rounded:"xl",color:"error",onClick:d=>e.deleteItem(i,u)},{default:o(()=>[m(" 删除这项 ")]),_:2},1032,["onClick"]),n(k,{metadata:e.metadata[l].metadata,iterable:f,metadataKey:i},null,8,["metadata","iterable","metadataKey"])])]),_:2},1032,["value"])),[[N,e.config_template_tab===u]])),128))]),_:2},1032,["modelValue"])],512)),[[N,i!=="platform"&&i!=="provider"]]):(r(),p("div",qe,[e.metadata[l].metadata[i].type=="object"?(r(),p("div",Be,[n(k,{metadata:e.metadata[l].metadata,iterable:e.config_data[i],metadataKey:i},null,8,["metadata","iterable","metadataKey"])])):(r(),_(k,{key:1,metadata:e.metadata[l].metadata,iterable:e.config_data,metadataKey:i},null,8,["metadata","iterable","metadataKey"]))]))])}),256))]),_:2},1024)]),_:2},1024)),[[N,g==e.tab]])),128)),Je]),_:1},8,["modelValue"])]),_:1})):(r(),_($,{key:1,style:{"background-color":"#1e1e1e"}},{default:o(()=>[n(me(se),{theme:"vs-dark",language:"json",height:"80vh",style:{"padding-top":"16px","padding-bottom":"16px"},value:e.config_data_str,"onUpdate:value":t[8]||(t[8]=s=>e.config_data_str=s)},null,8,["value"])]),_:1})),n(S,{icon:"mdi-content-save",size:"x-large",style:{position:"fixed",right:"52px",bottom:"52px"},color:"darkprimary",onClick:e.updateConfig},null,8,["onClick"]),n(ue,{timeout:3e3,elevation:"24",color:e.save_message_success,modelValue:e.save_message_snack,"onUpdate:modelValue":t[9]||(t[9]=s=>e.save_message_snack=s)},{default:o(()=>[m(V(e.save_message),1)]),_:1},8,["color","modelValue"]),n(ae,{ref:"wfr"},null,512)],64))}});export{Ze as default};
