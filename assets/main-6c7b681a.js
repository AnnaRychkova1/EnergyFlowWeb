(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function _(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(r){if(r.ep)return;r.ep=!0;const e=_(r);fetch(r.href,e)}})();const f="modulepreload",E=function(t){return"/EnergyFlowWeb/"+t},d={},o=function(s,_,c){if(!_||_.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(_.map(e=>{if(e=E(e),e in d)return;d[e]=!0;const i=e.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!c)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===e&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":f,i||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),i)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e})};o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.h),[]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.m),[]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.a),[]);o(()=>import("./quotes-e7eae6a5.js"),["assets/quotes-e7eae6a5.js","assets/mainApi-a350fbdd.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css","assets/refs-78569e0c.js","assets/localStorage-f11723c5.js"]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.e),[]);o(()=>import("./mainApi-a350fbdd.js").then(t=>t.e),["assets/mainApi-a350fbdd.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css","assets/refs-78569e0c.js"]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.f),[]);o(()=>import("./favorites-4c0916c1.js"),["assets/favorites-4c0916c1.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css","assets/mainApi-a350fbdd.js","assets/refs-78569e0c.js","assets/visibility-9f0213da.js"]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.b),[]);o(()=>import("./localStorage-f11723c5.js"),[]);o(()=>import("./refs-78569e0c.js"),[]);o(()=>import("./isiToast-0af6fe6e.js"),["assets/isiToast-0af6fe6e.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css"]);o(()=>import("./mainApi-a350fbdd.js").then(t=>t.m),["assets/mainApi-a350fbdd.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css","assets/refs-78569e0c.js"]);o(()=>import("./notify-e5e4596e.js"),["assets/notify-e5e4596e.js","assets/vendor-0f51b997.js","assets/vendor-e5212ee8.css"]);o(()=>import("./tui-pagination-44a5ac97.js").then(t=>t.t),[]);o(()=>import("./visibility-9f0213da.js"),[]);
//# sourceMappingURL=main-6c7b681a.js.map