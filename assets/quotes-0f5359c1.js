import{a as n}from"./vendor-fd853f38.js";import{saveQuoteToLocalStorage as s}from"./localStorage-f11723c5.js";import{refs as a}from"./refs-89afcfb6.js";import{showLoader as u,hideLoader as c}from"./visibility-9f0213da.js";import{errorResult as l}from"./iziToast-1329ba30.js";const i="https://energyflow.b.goit.study/api",d="quote";function f(e){const t=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");t.textContent=e.quote,o.textContent=e.author}m();async function m(){const e=JSON.parse(localStorage.getItem("quoteResponse")),t=JSON.parse(localStorage.getItem("savedDate")),o=new Date;u(a.loaderModal);try{let r;t&&e?o.getFullYear()===t.year&&o.getMonth()+1===t.month&&o.getDate()===t.day&&(r=e):(r=await p(),s(r)),f(r)}catch{l("Server Quotes did not respond")}finally{c(a.loaderModal)}}async function p(){return(await n.get(`${i}/${d}`)).data}
//# sourceMappingURL=quotes-0f5359c1.js.map
