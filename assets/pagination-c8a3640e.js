import{refs as a}from"./refs-89afcfb6.js";import{showLoader as f,hideLoader as g}from"./visibility-9f0213da.js";import{scrollTo as d}from"./scrollTo-6516673a.js";import{errorResult as b}from"./iziToast-772fa351.js";import"./vendor-fd853f38.js";function m(r,s){let n="",e=Math.max(1,r-1),t=Math.min(s,e+3-1);e>1&&(n+='<button class="button-pagination prev" type="button"><<</button>');for(let i=e;i<=t;i++)n+=`<button class="button-pagination ${i===r?"active":""}" type="button">${i}</button>`;return t<s&&(n+='<button class="button-pagination next" type="button">>></button>'),n}function v(r,s,n,c,e){let t=1;return async function(p){const l=p.target;if(l.parentElement.classList.contains(e)){if(l.classList.contains("prev")||l.classList.contains("next")){const o=a.paginationEl.querySelector(".button-pagination.active"),u=parseInt(o.textContent,10);t=l.classList.contains("prev")?u-1:u+1}else t=parseInt(p.target.textContent,10);n.page=t,c.innerHTML="",f(a.loaderModal);try{const{results:o,totalPages:u}=await s(t,n);o&&o.length>0?(r(o),a.paginationEl.innerHTML=m(t,u),d(a.exercisesContainerEl)):b("No results found for this exercise")}catch{b("Server did not responded")}finally{g(a.loaderModal)}}}}export{v as onPaginationClick,m as pagesPagination};
//# sourceMappingURL=pagination-c8a3640e.js.map
