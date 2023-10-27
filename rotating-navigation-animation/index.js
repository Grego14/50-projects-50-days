const bars = document.querySelector(".circle .circle_bars")
const cross = document.querySelector(".circle .circle_cross")
const menu = document.querySelector(".menu")
const container = document.querySelector(".container")

bars.addEventListener('click', () => {
  menu.classList.add("show");
  container.classList.add("show")
})

cross.addEventListener('click', () => {
  menu.classList.remove("show")
  container.classList.remove("show")
  console.log("heyhey")
})
