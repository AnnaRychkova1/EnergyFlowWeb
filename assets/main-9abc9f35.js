(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function _(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=_(t);fetch(t.href,e)}})();const E="modulepreload",f=function(r){return"/EnergyFlowWeb/"+r},d={},o=function(s,_,c){if(!_||_.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(_.map(e=>{if(e=f(e),e in d)return;d[e]=!0;const i=e.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":E,i||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),i)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e})};o(()=>import("./tui-pagination-a95d4c63.js").then(r=>r.h),[]);o(()=>import("./mobile-menu-dc04c21e.js"),[]);o(()=>import("./tui-pagination-a95d4c63.js").then(r=>r.a),[]);o(()=>import("./quotes-beef3e1c.js"),["assets/quotes-beef3e1c.js","assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js","assets/localStorage-f11723c5.js"]);o(()=>import("./mainApi-54a47030.js").then(r=>r.a),["assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js"]);o(()=>import("./mainApi-54a47030.js").then(r=>r.e),["assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js"]);o(()=>import("./footer-c2e45b9c.js"),["assets/footer-c2e45b9c.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css"]);o(()=>import("./favorites-f66dafa7.js"),["assets/favorites-f66dafa7.js","assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js"]);o(()=>import("./mainApi-54a47030.js").then(r=>r.m),["assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js"]);o(()=>import("./localStorage-f11723c5.js"),[]);o(()=>import("./refs-8a8ab5b0.js"),[]);o(()=>import("./isiToast-262f9325.js"),["assets/isiToast-262f9325.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css"]);o(()=>import("./mainApi-54a47030.js").then(r=>r.b),["assets/mainApi-54a47030.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css","assets/visibility-9f0213da.js","assets/refs-8a8ab5b0.js","assets/isiToast-262f9325.js"]);o(()=>import("./notify-804b4084.js"),["assets/notify-804b4084.js","assets/vendor-65c0bc71.js","assets/vendor-e5212ee8.css"]);o(()=>import("./tui-pagination-a95d4c63.js").then(r=>r.t),[]);o(()=>import("./visibility-9f0213da.js"),[]);
//# sourceMappingURL=main-9abc9f35.js.map
