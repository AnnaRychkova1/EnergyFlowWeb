import{a as i}from"./vendor-fd853f38.js";import{refs as s}from"./refs-89afcfb6.js";import{showLoader as n,hideLoader as a}from"./visibility-9f0213da.js";import{e as r,s as u}from"./iziToast-dd52dda5.js";const t=document.querySelector(".footer-form");t&&t.addEventListener("submit",function(o){o.preventDefault();const e=document.querySelector(".footer-input").value.trim().toLowerCase();e?(n(s.loaderModal),c(e),a(s.loaderModal)):r("Invalid email entered. Please check the format and try again.")});async function c(o){await i.post("https://energyflow.b.goit.study/api/subscription",{email:o}).then(function(e){u("Your subscription is succesfully"),t.reset()}).catch(function(e){e.response.status===409?r("Subscription already exists."):r("An error occured while sending the request. Please try again.")}).finally(function(){t.reset()})}
//# sourceMappingURL=footer-e40a4782.js.map
