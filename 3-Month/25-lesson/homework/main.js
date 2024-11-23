let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./images/light.svg";
  } else {
    this.firstElementChild.src = "./images/dark.svg";
  }
  document.body.classList.toggle("light");
});
