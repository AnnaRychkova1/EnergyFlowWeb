import{i as t,a as o}from"./vendor-8cce9181.js";const i=document.querySelector(".footer-form");i&&i.addEventListener("submit",function(s){s.preventDefault();const e=document.querySelector(".footer-input").value.trim().toLowerCase();e?r(e):t.error({title:"Error!",message:"Invalid email entered. Please check the format and try again.",position:"topRight"})});async function r(s){await o.post("https://energyflow.b.goit.study/api/subscription",{email:s}).then(function(e){t.success({title:"Successfully!",message:e.data.message,position:"topRight"}),i.reset()}).catch(function(e){e.response.status===409?t.info({title:"Info!",message:"Subscription already exists.",position:"topRight"}):t.error({title:"Error!",message:"An error occured while sending the request. Please try again.",position:"topRight"})}).finally(function(){i.reset()})}
//# sourceMappingURL=footer-543ea65e.js.map
