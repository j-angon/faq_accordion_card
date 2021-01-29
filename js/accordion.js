const accordion = document.getElementsByClassName("content-box");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      for (var a = 0; a < accordion.length; a++) {
        if (accordion[a].classList.contains("active")) {
          accordion[a].classList.remove("active");
        }
      }
      this.classList.add("active");
    }
  });
}
