import{f as r}from"./mainApi-4475aa7f.js";import{saveQuoteToLocalStorage as n}from"./localStorage-f11723c5.js";import"./vendor-0f51b997.js";import"./refs-902e1b5c.js";function u(o){const t=document.querySelector(".quote-text"),e=document.querySelector(".quote-author");t.textContent=o.quote,e.textContent=o.author}async function c(){const o=JSON.parse(localStorage.getItem("quoteResponse")),t=JSON.parse(localStorage.getItem("savedDate"));try{let e;if(t&&o){const a=new Date;a.getFullYear()===t.year&&a.getMonth()+1===t.month&&a.getDate()===t.day?e=o:(e=await r(),n(e))}else e=await r(),n(e);u(e)}catch(e){console.log(e)}}c();export{c as getQuoteOffTheDay};
//# sourceMappingURL=quotes-148a58b4.js.map