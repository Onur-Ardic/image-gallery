const panels = document.querySelectorAll(".panel");

panels.forEach((panelItem) => {
  panelItem.addEventListener("click", () => {
    removeActive();
    panelItem.classList.add("active");
    panelItem.style.color = "white";
  });
});

function removeActive() {
  panels.forEach((panelItem) => {
    panelItem.classList.remove("active");
    panelItem.style.color = "blue";
  });
}
