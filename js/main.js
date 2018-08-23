const menuButton = document.querySelector(".menu-button");
const menuNav = document.querySelector(".menu-nav");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(!showMenu){
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach( function (item) {
      console.log(item);
      item.classList.add("show");
    });

    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach( function (item) {
      console.log(item);
      item.classList.remove("show");
    });
    showMenu = false;
  }
}
