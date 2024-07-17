const menu = document.getElementById('menu');

document.getElementById('menu-open-button')
    .addEventListener('click', () => {
        menu.classList.add('visible');
        document.body.classList.add('overflow');
    });

document.getElementById('menu-close-button')
    .addEventListener('click', () => {
        menu.classList.remove('visible');
        document.body.classList.remove('overflow');
    });

window.addEventListener('load', initMainSlider);
window.addEventListener('load', initTestimonialSlider);


function initMainSlider() {

    const numbersElement = document.getElementsByClassName('slide-numbers')[0];
    const current = numbersElement.getElementsByClassName('current-slide-number')[0];
    const total = numbersElement.getElementsByClassName('total-slides')[0];

    new Swiper('#main-slider', {
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        spaceBetween:20,
        navigation: {
            nextEl: '.main-slider-next-btn',
            prevEl: '.main-slider-prev-btn',
            disabledClass: 'disabled',
        },

        on: {
            init: function (){

                const slidesCount = this.slides.length;

                if (slidesCount > 1){

                    total.textContent = slidesCount >= 10 ? slidesCount : "0" +slidesCount;

                    current.textContent = slidesCount >= 10 ? this.realIndex+1 : "0" + (this.realIndex+1);

                    if(document.body.clientWidth >= 768){

                        numbersElement.style.display = "block";
                    }
                }
            },

            slideChange: function () {
                current.textContent = this.slides.length >= 10 ? this.realIndex+1 : "0" + (this.realIndex+1);
            }
        }
    });
}


function initTestimonialSlider() {
    new Swiper('#testimonial-slider', {
        speed: 1000,
        loop:true,
        navigation: {
            nextEl: '.testimonials-slider-next',
            prevEl: '.testimonials-slider-prev',
        },
    });
}
