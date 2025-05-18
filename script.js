console.log("Hello World");

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down -> Hide Header
    header.style.top = "-100px"; // Move it out of view
  } else {
    // Scroll Up -> Show Header
    header.style.top = "0";
  }
  
  lastScrollTop = scrollTop;
});
