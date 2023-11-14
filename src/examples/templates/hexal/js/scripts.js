$(document).ready(function(){

    const mobileMenu = document.getElementById('mobile-menu');

    document.getElementById('menu-open-button').addEventListener('click', function(){
        document.body.style.overflow = "hidden";
        mobileMenu.classList.add('visible');
    });

    document.getElementById('menu-close-button').addEventListener('click', function(){
        mobileMenu.classList.remove('visible');
        document.body.style.overflow = "auto";
    });
    
    $("#main-slider").slick({
        dots: true,
        appendDots: $("#slider .slider-dots"),
        initialSlide: 2,
        nextArrow: "",
        prevArrow: "",
    });
});