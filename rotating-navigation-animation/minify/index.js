const bars=document.querySelector(".circle .circle_bars"),cross=document.querySelector(".circle .circle_cross"),menu=document.querySelector(".menu"),container=document.querySelector(".container");bars.addEventListener("click",()=>{menu.classList.add("show"),container.classList.add("show")}),cross.addEventListener("click",()=>{menu.classList.remove("show"),container.classList.remove("show")});
