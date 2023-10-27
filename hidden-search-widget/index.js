const svg = document.querySelector(".sc_svg")
const input = document.querySelector(".sc_input")

svg.addEventListener('click', e => {
  input.classList.toggle("hide")
})
