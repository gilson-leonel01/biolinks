function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const type = document.querySelector(".typing")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar/avatar-light.png")
    type.setAttribute("style", "color: red;")
  } else {
    img.setAttribute("src", "./assets/avatar/avatar-dark.png")
    type.setAttribute("style", "color: orange;")
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var showYear = document.getElementById("currentYear");

  const currentYear = new Date().getFullYear();
  
  showYear.textContent = " " + currentYear;
});

let typed = new Typed(".typing", {
  strings: [
    "Web Developer", 
    "Mobile Developer",
    "UI/UX Designer"
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})