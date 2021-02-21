let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function (event) {
  event.preventDefault();

  if (window.scrollY <= 40) {
    nav.style.backgroundColor = "transparent";
  } else {
    nav.style.backgroundColor = "#24a9e0";
    nav.style.opacity = "0.9";
    nav.style.transition = "0.4s ease";
  }
});
