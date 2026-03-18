document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitchLabel = document.querySelector(".toggle-switch");
  const checkbox = document.getElementById("privacy");

  if (toggleSwitchLabel && checkbox) {
    if (checkbox.checked) {
      toggleSwitchLabel.classList.add("active");
    }

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        toggleSwitchLabel.classList.add("active");
      } else {
        toggleSwitchLabel.classList.remove("active");
      }
    });

    toggleSwitchLabel.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        checkbox.checked = !checkbox.checked;

        checkbox.dispatchEvent(new Event("change"));
      }
    });
  }
});




const submitButton = document.querySelector(".submit-button");
const requiredElements = document.querySelectorAll("[required]");

const validateElement = (element) => {
  if (element.type === "checkbox") {
    if (element.checked) {
      element.classList.remove("error");
      element.classList.add("success");
    } else {
      element.classList.remove("success");
    }
  } else {
    if (element.value.trim() !== "") {
      element.classList.remove("error");
      element.classList.add("success");
    } else {
      element.classList.remove("success");
    }
  }
};

requiredElements.forEach(element => {
  element.addEventListener("input", () => validateElement(element));
  element.addEventListener("change", () => validateElement(element));
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  requiredElements.forEach(element => {
    if (element.type === "checkbox") {
      if (!element.checked) {
        element.classList.add("error");
        element.classList.remove("success");
      } else {
        element.classList.remove("error");
        element.classList.add("success");
      }
    } else {
      if (!element.value.trim()) {
        element.classList.add("error");
        element.classList.remove("success");
      } else {
        element.classList.remove("error");
        element.classList.add("success");
      }
    }
  });
});
