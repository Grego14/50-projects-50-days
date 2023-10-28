const blur = document.querySelector(".blur")
const h1 = document.querySelector("h1")

window.onload = (e) =>{
  blur.style.animation = "blur 4s linear"
}

blur.addEventListener("animationstart", e =>{
  let count = 1;
  const interval = setInterval(() => {
    count++;
    h1.textContent = `${count}%`
    if(count === 100){
      clearInterval(interval)
      h1.textContent = ''
    }
  }, 40);
})
