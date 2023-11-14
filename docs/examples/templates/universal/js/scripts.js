const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('mobile-menu-button').addEventListener('click', function(){
    mobileMenu.classList.add('visible');
    document.body.style.overflow = "hidden";
});

document.getElementById('menu-close-button').addEventListener('click', function(){
    mobileMenu.classList.remove('visible');
    document.body.style.overflow = "visible";
});

$(document).ready(function(){
    $('#slider').slick({
        speed: 1000,
        nextArrow: document.getElementById('slider-button-next'),
        prevArrow: document.getElementById('slider-button-prev'),

    });
});