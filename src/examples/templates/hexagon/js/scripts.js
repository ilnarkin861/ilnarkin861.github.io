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

    $('#main-slider').slick({
        nextArrow: document.getElementById('main-slider-next'),
        prevArrow: document.getElementById('main-slider-prev'),
    });

    $('#portfolio .filter-buttons button').on('click', function(){
        let value = $(this).attr('data-filter');
        let buttons = $(this).parents('ul');
        buttons.find('.active').removeClass('active');
        $(this).addClass('active');
        let items = $('#portfolio .projects li');
        items.removeClass('visible');
        items.addClass('hidden');

        if(value === "*"){
            items.addClass('all');
            items.addClass('visible');
        }
        
        else{
            items.removeClass('all');
            items.parents('ul').find(value).addClass('visible');
        }
    });
});