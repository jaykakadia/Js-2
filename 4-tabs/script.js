const tabHeader = document.querySelectorAll(".tab-header div");
const tabContent = document.querySelectorAll(".tab-content div");

for (let i = 0; i < tabHeader.length; i++) {
  tabHeader[i].addEventListener("click", () => {
    removeActive();
    tabContent[i].classList.toggle("active");
    tabHeader[i].classList.toggle("header-active");
  });
}

function removeActive() {
  for (let i = 0; i < tabHeader.length; i++) {
    tabContent[i].classList.remove("active");
    tabHeader[i].classList.remove("header-active");
  }
}