const mobileMenu = document.getElementById('menu');

document.getElementById('menu-open-button')
    .addEventListener('click', () => {
        document.body.classList.add('hidden');
        mobileMenu.classList.add('visible');
    });


document.getElementById('menu-close-button')
    .addEventListener('click', () => {
        mobileMenu.classList.remove('visible');
        setTimeout(() => document.body.classList.remove('hidden'), 300);
    });


$(document).ready(function(){

    equalizeHeiqht('works-slider', 'slide', ['title', 'section-text']);
    equalizeHeiqht('features-items', 'feature-item', ['title', 'section-text']);


    $('.main-slider').slick({
        speed: 1000,
        nextArrow: document.getElementById('main-slider-next'),
        prevArrow: document.getElementById('main-slider-prev'),

    });


    $('.works-slider').slick({
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: document.getElementById('works-slider-next'),
        prevArrow: document.getElementById('works-slider-prev'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.blog-posts-slider').slick({
        speed: 1000,
        nextArrow: document.getElementById('posts-slider-next'),
        prevArrow: document.getElementById('posts-slider-prev'),
    });


    $('.testimonial-slider').slick({
        speed: 1000,
        slidesToShow: 2,
        nextArrow: document.getElementById('testimonial-slider-next'),
        prevArrow: document.getElementById('testimonial-slider-prev'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

function equalizeHeiqht(parentClass, childrenClasses, elementsClasses){

    let elements = document.getElementsByClassName(parentClass)[0].getElementsByClassName(childrenClasses);
    let height = 0;

    for(let i =0; i < elementsClasses.length; i++){
    
        for(let j = 0; j < elements.length; j++){
            let current = elements[j].getElementsByClassName(elementsClasses[i])[0].clientHeight;
            if(current >= height ) height = current;
        }
    
        for(let k = 0; k < elements.length; k++){
            elements[k].getElementsByClassName(elementsClasses[i])[0].style.height = height +'px';
        }

        height = 0;
    }
  }