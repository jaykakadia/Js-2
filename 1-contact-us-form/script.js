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
