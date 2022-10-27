const tabs = Array.from(document.querySelectorAll(".tab-btn"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabs.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    tabPanels.forEach((panel) => {
      if (tabs[tabPanels.indexOf(panel)].classList.contains("active")) {
        panel.classList.replace("hidden", "flex-col");
      } else {
        panel.classList.replace("flex-col", "hidden");
      }
    });
  });
});
