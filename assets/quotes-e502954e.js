import{f as a}from"./mainApi-6264b820.js";import{saveQuoteToLocalStorage as n}from"./localStorage-f11723c5.js";import"./vendor-65c0bc71.js";import"./visibility-9f0213da.js";import"./refs-8a8ab5b0.js";import"./isiToast-262f9325.js";function u(o){const e=document.querySelector(".quote-text"),t=document.querySelector(".quote-author");e.textContent=o.quote,t.textContent=o.author}async function c(){const o=JSON.parse(localStorage.getItem("quoteResponse")),e=JSON.parse(localStorage.getItem("savedDate"));try{let t;if(e&&o){const r=new Date;r.getFullYear()===e.year&&r.getMonth()+1===e.month&&r.getDate()===e.day?t=o:(t=await a(),n(t))}else t=await a(),n(t);u(t)}catch(t){console.log(t)}}c();export{c as getQuoteOffTheDay};
//# sourceMappingURL=quotes-e502954e.js.map