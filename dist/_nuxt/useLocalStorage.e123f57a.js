const a=t=>{const e=localStorage.getItem(t);if(e==null)return null;try{return JSON.parse(e)}catch{return null}},l=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};export{l as a,a as u};
