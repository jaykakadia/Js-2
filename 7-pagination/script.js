const pagesContainer = document.getElementById("pages");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cardsContainer = document.querySelector(".cards");

let currentPage = 1;
let totalPages = 30; // Changed to 30 for demonstration

// 1. Generate demo content for all 30 pages dynamically
function generateDummyContent() {
  cardsContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const card = document.createElement("div");
    card.className = `Page-${i}`;
    if (i === currentPage) card.classList.add("active-page");
    card.textContent = `content of page ${i}`;
    cardsContainer.appendChild(card);
  }
}

// 2. Generate pagination links dynamically based on currentPage and totalPages
function updatePagination() {
  pagesContainer.innerHTML = '';

  let pagesToShow = [];

  // Logic to determine which numbers to show
  // e.g. [1, "...", 4, 5, 6, "...", 30]
  if (totalPages <= 7) {
    // If total pages are small, show all of them
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    // Always show the first page
    pagesToShow.push(1);

    // Show left dots if we are far from the first page
    if (currentPage > 3) {
      pagesToShow.push("...");
    }

    // Determine the middle pages (current page and its neighbors)
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust in case we are at the very beginning or end
    if (currentPage === 1) {
      end = 3;
    } else if (currentPage === totalPages) {
      start = totalPages - 2;
    }

    // Push the middle pages
    for (let i = start; i <= end; i++) {
      pagesToShow.push(i);
    }

    // Show right dots if we are far from the last page
    if (currentPage < totalPages - 2) {
      pagesToShow.push("...");
    }

    // Always show the last page
    pagesToShow.push(totalPages);
  }

  // Render the links inside #pages container
  pagesToShow.forEach(item => {
    if (item === "...") {
      const span = document.createElement("span");
      span.textContent = "...";
      // Basic styling to match the links layout
      span.style.padding = "10px 15px";
      span.style.color = "rgba(0, 0, 0, 0.328)";
      span.style.border = "1px solid #dee2e6";
      span.style.marginLeft = "-1px"; // overlap borders
      span.style.display = "flex";
      span.style.alignItems = "center";
      span.style.justifyContent = "center";
      span.style.backgroundColor = "inherit";
      pagesContainer.appendChild(span);
    } else {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item;
      a.className = `for-page-${item}`;
      if (item === currentPage) {
        a.classList.add("active");
      }
      
      a.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = item;
        showPage(currentPage);
        updatePagination();
        checkButtonState();
      });

      pagesContainer.appendChild(a);
    }
  });
}

function showPage(page) {
  document.querySelectorAll(".cards div").forEach((card) => {
    card.classList.remove("active-page");
  });
  
  const targetPage = document.querySelector(`.Page-${page}`);
  if (targetPage) {
    targetPage.classList.add("active-page");
  }
}

function checkButtonState() {
  prev.disabled = currentPage === 1;
  next.disabled = currentPage === totalPages;
}

next.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    updatePagination();
    checkButtonState();
  }
});

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updatePagination();
    checkButtonState();
  }
});

// Initialization
generateDummyContent();
updatePagination();
checkButtonState();
