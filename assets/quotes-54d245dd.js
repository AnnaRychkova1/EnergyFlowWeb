import{a as s}from"./vendor-8cce9181.js";async function n(){try{return(await s.get("${BASE_URL}/${END_POINT}")).data}catch(t){throw console.log(t),t}}function r(t){const o=new Date,e={year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()};localStorage.setItem("quoteResponse",JSON.stringify(t)),localStorage.setItem("savedDate",JSON.stringify(e))}function c(t){const o=document.querySelector(".quote-text"),e=document.querySelector(".quote-author");o.textContent=t.quote,e.textContent=t.author}async function u(){const t=JSON.parse(localStorage.getItem("quoteResponse")),o=JSON.parse(localStorage.getItem("savedDate"));try{let e;if(o&&t){const a=new Date;a.getFullYear()===o.year&&a.getMonth()+1===o.month&&a.getDate()===o.day?e=t:(e=await n(),r(e))}else e=await n(),r(e);c(e)}catch(e){console.log(e)}}u();export{u as getQuoteOffTheDay};
//# sourceMappingURL=quotes-54d245dd.js.map
