import{a as s}from"./vendor-fd853f38.js";import{saveQuoteToLocalStorage as u}from"./localStorage-f11723c5.js";import{refs as a}from"./refs-89afcfb6.js";import{showLoader as c,hideLoader as i}from"./visibility-9f0213da.js";import{errorResult as l}from"./iziToast-62242ea8.js";const d="https://energyflow.b.goit.study/api",f="quote";m();async function m(){const e=JSON.parse(localStorage.getItem("quoteResponse")),t=JSON.parse(localStorage.getItem("savedDate")),r=new Date;c(a.loaderModal);try{let o;t&&e&&r.getFullYear()===t.year&&r.getMonth()+1===t.month&&r.getDate()===t.day&&(o=e,n(o)),o=await p(),u(o),n(o)}catch{l("Server Quotes did not respond")}finally{i(a.loaderModal)}}function n(e){const t=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");t.textContent=e.quote,r.textContent=e.author}async function p(){return(await s.get(`${d}/${f}`)).data}
//# sourceMappingURL=quotes-a2c5da3e.js.map
