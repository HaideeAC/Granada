function openMenu() {
  document.getElementById("fruitMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("fruitMenu").classList.remove("active");
}

// Close menu with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});
