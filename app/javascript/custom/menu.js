function addToggleListener(selectedId, menuId, toggleClass) {
  let selectedElement = document.getElementById(selectedId);
  selectedElement.addEventListener("click", function (e) {
    e.preventDefault();
    let menu = document.getElementById(menuId);
    menu.classList.toggle(toggleClass);
  });
}

document.addEventListener("turbo:load", function () {
  addToggleListener("hamburger", "navbar-menu", "collapse");
  addToggleListener("account", "dropdown-menu", "active");
});
