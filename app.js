const mainHead = document.querySelector(".main-head");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    mainHead.classList.add("slidedown");
  } else {
    mainHead.classList.remove("slidedown");
  }
});
