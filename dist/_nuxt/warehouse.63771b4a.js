import{a as o}from"./entry.bbefaf41.js";import{i as s,W as t}from"./index.aeb2a4e3.js";const i=o("warehouse",{state:()=>({warehouse:null}),actions:{async findById(a){const e=await s.query(t,a);this.warehouse={name:e.name,location:e.location}}}});export{i as u};
