const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOptions = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuOptions.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        //Cerrar el aside de shopping cart
        shoppingCartContainer.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
    
};


function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        //Cerrar el aside de shopping cart
        shoppingCartContainer.classList.add('inactive');
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

    shoppingCartContainer.classList.toggle('inactive');
};
    

const productList = [];

productList.push({
    name: 'Limpieza Facial',
    price: 320,
    image: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Toxina Botulinica',
    price: 1100,
    image: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Masaje Reductor',
    price: 540,
    image: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});



function renderProducts(array) {
    for (product of array) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product = {name, price, image} --> product.image
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // Aqui estamos agregando el precio y el nombre del producto a la etiqueta div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Aqui estamos agregando la imagen del icono del carrito a la etiqueta figure
        productInfoFigure.appendChild(productImgCart);
    
        // Aqui estamos agregando el div que contiene el precio y el nombre, y el figure dentro del div product-info
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Aqui estamos agregando la imagen y el div product-info dentro del div product-card
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

