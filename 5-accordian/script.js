const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionContent = document.querySelectorAll(".accordion-content");


for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener("click", () => {
        accordionContent[i].classList.toggle("active");
        accordionHeader[i].classList.toggle("header-active");
    });
}
