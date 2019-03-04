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


$(document).scroll(function(){
  var scrollAmt = $(document).scrollTop() + $(window).height();
  var hackOffset = $('.job-3').offset().top + $('.job-3').height();
  var uclaOffset = $('.job-1').offset().top + $('.job-1').height();
  var appOffset = $('.job-2').offset().top + $('.job-2').height();
  var hamburger = $('.button-line');

  if (scrollAmt >= hackOffset){

    console.log($('.pic-3'));
    $('.pic-3').removeClass('hidepic1');
  }

  if (scrollAmt >= uclaOffset){
    $('.pic-1').removeClass('hidepic2');
  }

  if (scrollAmt >= appOffset){
    $('.pic-2').removeClass('hidepic1');
  }

  if ($(document).scrollTop() >= $('#about').height()){

    hamburger.addClass("drk");
  }else if($(document).scrollTop() <= $('#about').height()){
      hamburger.removeClass("drk");
  }
});
