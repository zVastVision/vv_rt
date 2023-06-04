import{b as G,r as H,q as $,m as Q,J as W,t as X,I as Y,e as Z,f as q,o as r,h as d,i as e,j as i,u as s,F as k,z as I,v as p,c as g,y as f,w as D,B as w,d as P,_ as L}from"./entry.bbefaf41.js";import{_ as ee}from"./TextInput.209286f2.js";import{_ as te}from"./TextArea.e6b77f3a.js";import{_ as se}from"./CheckBox.eb706d2c.js";import{_ as oe,a as ne}from"./Loader.cf68234a.js";import{_ as le}from"./TableRow.74e93b63.js";import{_ as ae}from"./TheTable.vue.2670ac42.js";import{_ as re}from"./SearchInput.vue.b95c3b48.js";import{u as de}from"./debounce.2d63c4c2.js";import{u as ie}from"./asyncData.35e0061c.js";import{u as ue}from"./inventory.a3e76661.js";import{t as me,z as x}from"./vee-validate-zod.esm.225d6f64.js";import"./Auth.625ee0a0.js";import"./index.aeb2a4e3.js";const ce=P(()=>L(()=>import("./DefaultModal.189406ac.js"),["./DefaultModal.189406ac.js","./entry.bbefaf41.js","./entry.d612fb7e.css"],import.meta.url).then(c=>c.default||c)),_e=P(()=>L(()=>import("./ConfirmationModal.845951d5.js"),["./ConfirmationModal.845951d5.js","./entry.bbefaf41.js","./entry.d612fb7e.css","./ConfirmationModal.7ec1ebe7.css"],import.meta.url).then(c=>c.default||c)),pe={class:"mt-6 mb-4"},he=e("h1",{class:"text-4xl font-bold text-white"}," Create Kit ",-1),ve=e("small",{class:"text-base text-vvn-gray"},"Albuquerque facility",-1),be={class:"flex justify-end"},ye=["href"],fe=e("button",{class:"btn btn--primary",type:"submit"}," Save ",-1),xe={class:"border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4"},ke={class:"flex gap-6"},ge={class:"flex-1 border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4"},Ve=e("p",{class:"text-2xl text-vvn-green mb-3"}," Basic Information ",-1),qe={class:"w-full mr-4"},Ie=e("label",{for:"name",class:"text-vvn-gray text-base mb-2 inline-block"},"Main Identifier",-1),we=e("label",{for:"description",class:"text-vvn-gray text-base mb-2 mt-4 inline-block"},"Description",-1),Ce={class:"border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4 w-[378px]"},Te=e("p",{class:"text-2xl text-vvn-green mb-3"}," Inventory ",-1),Fe={class:"w-full mr-4"},Ue=e("label",{for:"name",class:"text-vvn-gray text-base mb-2 inline-block"},"Current Inventory",-1),Ae={class:"mt-4"},Se=e("label",{for:"trackThreshold",class:"text-vvn-gray text-base mb-2 block"},"Track Inventory Threshold",-1),$e={class:"mt-4"},Pe=e("label",{for:"threshold",class:"text-vvn-gray text-base mb-2"},"Inventory Threshold",-1),Le={class:"border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-6"},Me=e("p",{class:"text-2xl text-vvn-green mb-3"}," Custom Fields ",-1),ze={class:"mr-4 w-52"},Ne=e("label",{for:"name",class:"text-vvn-gray text-base mb-2 inline-block"},"Name",-1),Re={class:"mr-4 w-[500px]"},Be=e("label",{for:"name",class:"text-vvn-gray text-base mb-2 inline-block"},"Value",-1),je=["onClick"],Ee={class:"bg-vvn-white-04 mt-9 rounded-xl px-5 py-6"},Ke={class:"flex justify-between"},Oe={class:"text-vvn-green"},Je={key:0},Ge={key:1},He=e("span",null,"Add Item",-1),Qe=[He],We={class:"pr-3"},Xe={class:"text-base"},Ye={class:"text-xs text-vvn-gray line-clamp-1"},Ze={class:"flex rounded-lg bg-vvn-gray-50 w-max items-center px-2 py-1 text-xs border-2 border-vvn-gray"},De={key:0,class:"rounded-full bg-red-600 h-2 w-2 mr-2"},et={key:1,class:"rounded-full bg-green-600 h-2 w-2 mr-2"},tt={key:0},st={key:1},ot={class:"text-base"},nt=e("h1",{class:"text-3xl font-bold text-white"}," Search Inventory ",-1),lt=e("small",{class:"text-base text-vvn-gray"},"Albuquerque facility",-1),at={class:"w-80 mt-5 mb-7"},rt={class:"text-base"},dt=e("small",{class:"text-xs text-vvn-gray"},"Used on mobile unit",-1),it={class:"flex rounded-lg bg-vvn-gray-50 w-max items-center px-2 py-1 text-xs border-2 border-vvn-gray"},ut={key:0,class:"rounded-full bg-red-600 h-2 w-2 mr-2"},mt={key:1,class:"rounded-full bg-green-600 h-2 w-2 mr-2"},ct={key:0},_t={key:1},pt={class:"text-base"},ht={class:"flex justify-end"},vt=["onClick"],bt=e("h5",{class:"text-2xl text-white text-center mt-4"}," Kit created successfully ",-1),yt={class:"flex justify-center mt-8"},Pt=G({__name:"create-kit",async setup(c){let C,T;const t=H({name:"",description:"",quantity:0,trackThreshold:!1,threshold:0,kitParts:[],counterList:{},extraFields:[]}),h=$(!1),v=de("",200),_=$(!1),M=Q(),b=ue();[C,T]=W(()=>ie("",()=>b.getInventoryItems({page:0,size:5}))),await C,T();const V=X(()=>v.value==""?b.inventoryList:b.inventorySearch);Y(v,async u=>{b.searchInventoryItem(u,{page:0,size:5})});const z=me(x.object({name:x.string().nonempty("Name is required"),description:x.string().nonempty("Description is required"),quantity:x.number().min(0),threshold:x.number().min(0)})),F=Z({validationSchema:z}).handleSubmit(u=>{if(t.kitParts.length==0)q().error("Kit items cannot be empty");else{const o={name:u.name,description:u.description,quantity:u.quantity,trackThreshold:t.trackThreshold,threshold:u.threshold,extraDetails:t.extraFields.map(m=>({name:m.name,value:m.value})),warehouseID:M.params.warehouseId};b.createKit(o,t.kitParts.map(m=>({partId:m.id,quantity:m.quantity}))),document.getElementById("form").reset(),t.kitParts=[],_.value=!0}}),N=(u,o)=>{u.quantity<=0?q().error("Invalid item quantity"):(t.kitParts.push(u),t.counterList[o]=1,q().success(`${u.name} added to kit items`))},R=()=>{t.extraFields.push({name:"",value:""})};return(u,o)=>{const m=ee,B=te,j=se,U=oe,A=le,S=ae,E=re,K=ne,O=ce,J=_e;return r(),d(k,null,[e("form",{id:"form",class:"p-6",onSubmit:o[6]||(o[6]=D((...n)=>s(F)&&s(F)(...n),["prevent"]))},[e("div",pe,[he,ve,e("div",be,[e("a",{href:`/warehouse-${u.$route.params.warehouseId}/inventory`,class:"btn btn--secondary flex mr-2"}," Cancel ",8,ye),fe])]),e("div",xe,[e("div",ke,[e("div",ge,[Ve,e("div",qe,[Ie,i(m,{id:"name",modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=n=>s(t).name=n),name:"name",rules:"required|min:2"},null,8,["modelValue"])]),e("div",null,[we,i(B,{id:"description",modelValue:s(t).description,"onUpdate:modelValue":o[1]||(o[1]=n=>s(t).description=n),name:"description",rules:"required|min:2"},null,8,["modelValue"])])]),e("div",Ce,[Te,e("div",Fe,[Ue,i(m,{id:"quantity",modelValue:s(t).quantity,"onUpdate:modelValue":o[2]||(o[2]=n=>s(t).quantity=n),modelModifiers:{number:!0},type:"number",name:"quantity",rules:"required|numeric"},null,8,["modelValue"])]),e("div",Ae,[Se,i(j,{modelValue:s(t).trackThreshold,"onUpdate:modelValue":o[3]||(o[3]=n=>s(t).trackThreshold=n),modelModifiers:{number:!0},class:"block",value:!1,name:"trackThreshold",rules:"required|numeric"},null,8,["modelValue"])]),e("div",$e,[Pe,i(m,{id:"threshold",modelValue:s(t).threshold,"onUpdate:modelValue":o[4]||(o[4]=n=>s(t).threshold=n),modelModifiers:{number:!0},name:"threshold",rules:"required|numeric",disabled:!s(t).trackThreshold},null,8,["modelValue","disabled"])])])]),e("div",Le,[Me,e("div",null,[(r(!0),d(k,null,I(s(t).extraFields.length,(n,l)=>(r(),d("div",{key:l,class:"flex items-end mb-4"},[e("div",ze,[Ne,i(m,{id:"name",modelValue:s(t).extraFields[l].name,"onUpdate:modelValue":a=>s(t).extraFields[l].name=a,name:`customField${l}-name`},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Re,[Be,i(m,{id:"name",modelValue:s(t).extraFields[l].value,"onUpdate:modelValue":a=>s(t).extraFields[l].value=a,name:`customField${l}-value`},null,8,["modelValue","onUpdate:modelValue","name"])]),e("button",{class:"btn btn--secondary mb-1",type:"button",onClick:a=>s(t).extraFields.splice(l,1)}," Remove field ",8,je)]))),128))]),e("button",{class:"btn btn--secondary mt-5",type:"button",onClick:R}," Add Field ")]),e("div",Ee,[e("div",Ke,[e("h5",Oe,[s(t).kitParts.length==0?(r(),d("span",Je,"Add parts to kit")):(r(),d("span",Ge," Kit parts"))]),e("button",{class:"btn btn--primary",type:"button",onClick:o[5]||(o[5]=n=>h.value=!0)},Qe)]),i(S,{rows:["Item Name","Status","Available Stock","",""],"template-columns":{"grid-template-columns":"40% 20% 15% 15% 10%"}},{default:p(()=>[(r(!0),d(k,null,I(s(t).kitParts,(n,l)=>(r(),g(A,{key:l,data:n,class:"mb-3","toggle-details":!1,"template-columns":{"grid-template-columns":"40% 20% 15% 15% 10%"}},{"row-data":p(a=>[e("td",We,[e("p",Xe,f(a.name),1),e("small",Ye,f(a.description),1)]),e("td",null,[e("div",Ze,[a.threshold<a.quantity?(r(),d("div",De)):(r(),d("div",et)),e("p",null,[a.threshold<a.quantity?(r(),d("span",tt,"Need Attention")):(r(),d("span",st,"Okay"))])])]),e("td",ot,f(a.quantity),1),e("td",null,[i(U,{modelValue:s(t).kitParts[l].quantity,"onUpdate:modelValue":y=>s(t).kitParts[l].quantity=y,modelModifiers:{number:!0},onChange:y=>s(t).kitParts[l].quantity==0?s(t).kitParts.splice(l,1):null},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:2},1032,["data"]))),128))]),_:1})])])],32),i(O,{modelValue:s(h),"onUpdate:modelValue":o[9]||(o[9]=n=>w(h)?h.value=n:null),onClose:o[10]||(o[10]=n=>h.value=!1)},{default:p(()=>[nt,lt,e("div",at,[i(E,{modelValue:s(v),"onUpdate:modelValue":o[7]||(o[7]=n=>w(v)?v.value=n:null),modelModifiers:{trim:!0,lazy:!0},"show-secondary-icon":!0,onInput:o[8]||(o[8]=n=>V.value=[])},null,8,["modelValue"])]),s(V).length!=0?(r(),g(S,{key:0,rows:["Item Name","Status","Inventory","Available Stock",""],"template-columns":{"grid-template-columns":"40% 20% 15% 15% 10%"}},{default:p(()=>[(r(!0),d(k,null,I(s(V),(n,l)=>(r(),g(A,{key:l,data:n,class:"mb-3","toggle-details":!1,"template-columns":{"grid-template-columns":"40% 20% 15% 15% 10%"}},{"row-data":p(a=>[e("td",null,[e("p",rt,f(a.name),1),dt]),e("td",null,[e("div",it,[a.threshold<a.quantity?(r(),d("div",ut)):(r(),d("div",mt)),e("p",null,[a.threshold<a.quantity?(r(),d("span",ct,"Needs Attention")):(r(),d("span",_t,"Okay"))])])]),e("td",pt,f(a.quantity),1),e("td",null,[i(U,{modelValue:s(t).counterList[l],"onUpdate:modelValue":y=>s(t).counterList[l]=y,modelModifiers:{number:!0}},null,8,["modelValue","onUpdate:modelValue"])]),e("td",ht,[e("button",{class:"btn btn--primary",type:"button",onClick:y=>N({...a,quantity:s(t).counterList[l]||0},l)}," Add ",8,vt)])]),_:2},1032,["data"]))),128))]),_:1})):(r(),g(K,{key:1}))]),_:1},8,["modelValue"]),i(J,{modelValue:s(_),"onUpdate:modelValue":o[12]||(o[12]=n=>w(_)?_.value=n:null)},{default:p(()=>[bt,e("div",yt,[e("button",{class:"btn btn--primary mr-5",style:{"background-color":"transparent","border-color":"white"},onClick:o[11]||(o[11]=n=>_.value=!s(_))}," Close ")])]),_:1},8,["modelValue"])],64)}}});export{Pt as default};