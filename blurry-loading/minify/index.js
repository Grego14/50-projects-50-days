const blur=document.querySelector(".blur"),h1=document.querySelector("h1");window.onload=t=>{blur.style.animation="blur 4s linear"},blur.addEventListener("animationstart",t=>{let e=1,n=setInterval(()=>{e++,h1.textContent=`${e}%`,100===e&&(clearInterval(n),h1.textContent="")},40)});
