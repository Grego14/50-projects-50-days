document.body.querySelectorAll(".box_item").forEach(item => {
  item.addEventListener("click", function(e){
    let $clicked = document.querySelector(".box_item.clicked")

    if(this === $clicked){
      return null
    }else if(this !== $clicked){
      $clicked.classList.remove("clicked")

      this.classList.add("clicked")
      $clicked = this
    }
  },)
})
