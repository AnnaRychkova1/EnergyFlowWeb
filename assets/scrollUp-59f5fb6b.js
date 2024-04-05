const o=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",l);console.log(window.scrollY);function l(){window.scrollY>200?o.classList.add("scroll-up-btn-show"):o.classList.remove("scroll-up-btn-show")}o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=scrollUp-59f5fb6b.js.map
