const qs = (s)=> document.querySelector(s)
const qsa = (s)=> document.querySelectorAll(s)

const prev = qs(".prev"), next = qs(".next");
const circles = qsa(".circle")
const bar = qs(".bar-progress")
let currentActiveCircle = qs(".circle.active")
let percentage = 0;

const buttonsHandler = () => {
  if(circles[1].classList.contains("active")){
    prev.removeAttribute("disabled")
    prev.classList.add("active")
  }else{
    prev.setAttribute("disabled", "")
  }

  if(circles[3].classList.contains("active")){
    next.setAttribute("disabled", "")
  }else{
    next.removeAttribute("disabled")
  }
}

next.addEventListener("click", function(){
  currentActiveCircle.nextElementSibling.classList.add("active")
  currentActiveCircle = currentActiveCircle.nextElementSibling
  buttonsHandler()
  percentage = percentage + 33
  bar.style.width = `${percentage}%`
})

prev.addEventListener("click", function(){
  currentActiveCircle.classList.remove("active")
  currentActiveCircle = currentActiveCircle.previousElementSibling
  buttonsHandler()
  percentage = percentage - 33

  bar.style.width = `${percentage}%`
})
