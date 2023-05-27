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
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        //Cerrar el aside de shopping cart
        aside.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
    
};


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        //Cerrar el aside de shopping cart
        aside.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    const isMobilemenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobilemenuClosed) {
        //Cerrar el menu mobile
        mobileMenu.classList.add('inactive');
    } 

    if (!isDesktopMenuClosed) {
        //Cerrar el menu del desktop
        desktopMenu.classList.add('inactive');
    } 

    aside.classList.toggle('inactive');
};
    
