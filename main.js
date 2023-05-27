const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOptions = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuOptions.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
};


function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
};
    
