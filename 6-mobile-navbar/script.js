const openbtn = document.querySelector(".icon-mobile-nav[name='menu-outline']");
const closebtn = document.querySelector(
  ".icon-mobile-nav[name='close-outline']",
);
const header = document.querySelector(".header");

openbtn.addEventListener("click", () => {
  header.classList.add("nav-open");
});

closebtn.addEventListener("click", () => {
  header.classList.remove("nav-open");
});
