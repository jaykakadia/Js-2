const pages = document.getElementById("pages");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentPage = 1;
let totalPages = 5;
next.addEventListener("click", () => {
    if (currentPage<totalPages){
        currentPage++;
        showPage(currentPage);
        checkButtonState();
        changeactiveinbottom();
    }

});
prev.addEventListener("click", () => {
    if (currentPage>1){
        currentPage--;
        showPage(currentPage);  
        checkButtonState();
        changeactiveinbottom();
    }
});
function showPage(page) {
    document.querySelectorAll(".cards div").forEach((page) => {
        page.classList.remove("active-page");
    });
    document.querySelector(`.Page-${page}`).classList.add("active-page");
}
function checkButtonState(){
    if (currentPage === 1){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    }
    if (currentPage === totalPages){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
}
function changeactiveinbottom(){
    document.querySelectorAll("#pages a").forEach((page) => {
        page.classList.remove("active");
    });
    document.querySelector(`#pages a:nth-child(${currentPage})`).classList.add("active");
}   

// for (let i = 0; i < tabHeader.length; i++) {
//   tabHeader[i].addEventListener("click", () => {
//     removeActive();
//     tabContent[i].classList.toggle("active");
//     tabHeader[i].classList.toggle("header-active");
//   });
// }

// function removeActive() {
//   for (let i = 0; i < tabHeader.length; i++) {
//     tabContent[i].classList.remove("active");
//     tabHeader[i].classList.remove("header-active");
//   }
// }