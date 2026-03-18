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

const getOrCreateErrorMsg = (element) => {
  const container = element.closest('.form-group') || element.closest('.privacy-group');
  if (!container) return null;
  let errorMsg = container.querySelector('.error-message');
  if (!errorMsg) {
    errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    container.appendChild(errorMsg);
  }
  return errorMsg;
};

const validateElement = (element, isSubmit = false) => {
  const errorMsg = getOrCreateErrorMsg(element);
  const value = element.value ? element.value.trim() : "";

  if (element.type === "checkbox") {
    if (element.checked) {
      element.classList.remove("error");
      element.classList.add("success");
      if (errorMsg) errorMsg.style.display = 'none';
    } else {
      element.classList.remove("success");
      if (isSubmit) {
        element.classList.add("error");
        if (errorMsg) {
          errorMsg.textContent = "This field is required to proceed";
          errorMsg.style.display = 'block';
        }
      } else {
        element.classList.remove("error");
        if (errorMsg) errorMsg.style.display = 'none';
      }
    }
  } else if (element.type === "email" || element.id === "email") {
    if (value === "") {
      element.classList.remove("success");
      if (isSubmit) {
        element.classList.add("error");
        if (errorMsg) {
          errorMsg.textContent = "This field is required to proceed";
          errorMsg.style.display = 'block';
        }
      } else {
        element.classList.remove("error");
        if (errorMsg) errorMsg.style.display = 'none';
      }
    } else if (!value.includes("@") || !value.includes(".com")) {
      element.classList.remove("success");
      element.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "Please enter a valid email address with @ and .com";
        errorMsg.style.display = 'block';
      }
    } else {
      element.classList.remove("error");
      element.classList.add("success");
      if (errorMsg) errorMsg.style.display = 'none';
    }
  } else if (element.type === "tel" || element.id === "phone") {
    if (value === "") {
      element.classList.remove("success");
      if (isSubmit) {
        element.classList.add("error");
        if (errorMsg) {
          errorMsg.textContent = "This field is required to proceed";
          errorMsg.style.display = 'block';
        }
      } else {
        element.classList.remove("error");
        if (errorMsg) errorMsg.style.display = 'none';
      }
    } else if (!/^\d+$/.test(value)) {
      element.classList.remove("success");
      element.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "Please enter numbers only";
        errorMsg.style.display = 'block';
      }
    } else {
      element.classList.remove("error");
      element.classList.add("success");
      if (errorMsg) errorMsg.style.display = 'none';
    }
  } else {
    if (value !== "") {
      element.classList.remove("error");
      element.classList.add("success");
      if (errorMsg) errorMsg.style.display = 'none';
    } else {
      element.classList.remove("success");
      if (isSubmit) {
        element.classList.add("error");
        if (errorMsg) {
          errorMsg.textContent = "This field is required to proceed";
          errorMsg.style.display = 'block';
        }
      } else {
        element.classList.remove("error");
        if (errorMsg) errorMsg.style.display = 'none';
      }
    }
  }
};

const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    validateElement(e.target, false);
  });
}

requiredElements.forEach(element => {
  element.addEventListener("input", () => validateElement(element, false));
  element.addEventListener("change", () => validateElement(element, false));
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  requiredElements.forEach(element => {
    validateElement(element, true);
  });
});
