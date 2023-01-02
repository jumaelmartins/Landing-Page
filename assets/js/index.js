let hamburguer = document.querySelector(".hamburguer");
let closeMenu = document.querySelector(".close");
let menuItems = document.querySelector(".menu");
let checkBox = document.querySelector(".inputCheckBox");
let menu = document.querySelector(".hamburguerMenu");

function ShowMenu() {
  menu.addEventListener("click", (e) => {
    if (menuItems.classList.contains("hidden")) {
      console.log("true");
      menuItems.classList.remove("hidden");
      closeMenu.classList.remove("hidden");
      hamburguer.classList.add("hidden");
    } else {
      console.log("false");
      menuItems.classList.add("hidden");
      closeMenu.classList.add("hidden");
      hamburguer.classList.remove("hidden");
    }
  });
}
ShowMenu();
