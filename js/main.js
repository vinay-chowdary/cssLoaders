const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav-bar");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    nav.style.display = "block";
    setTimeout(() => {
      main.style.opacity = 1;
      nav.style.opacity = 1;
    }, 50);
  }, 4000);
}

init();
