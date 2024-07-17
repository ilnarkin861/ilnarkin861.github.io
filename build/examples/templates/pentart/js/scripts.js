const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('mobile-menu-button')
    .addEventListener('click', () => {
        document.body.classList.add('hidden');
        mobileMenu.classList.add('visible');
    });

document.getElementById('menu-close-button')
    .addEventListener('click', () => {
        mobileMenu.classList.remove('visible');
        setTimeout(() => document.body.classList.remove('hidden'), 300);
    });

window.addEventListener('load', initMainSlider);
window.addEventListener('load', initImageSlider);


function initMainSlider(){
    new Swiper('#main-slider', {
        speed: 1000,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main-slider-next',
            prevEl: '.main-slider-prev'
        },
    });
}

function initImageSlider(){
    new Swiper('#image-slider', {
        speed: 500,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.image-slider-next',
            prevEl: '.image-slider-prev'
        },
    });
}

function auto_grow(element) {
    element.style.height = "38px";
    element.style.height = (element.scrollHeight)+"px";
}