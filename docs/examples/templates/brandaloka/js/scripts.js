$(document).ready(function(){

    $("#main-slider").slick({
        dots: true,
        appendDots: $("#slider-pagination"),
        initialSlide: 1,
        nextArrow: document.getElementById('main-slider-next'),
        prevArrow: document.getElementById('main-slider-prev'),

    });

    $("#brands-slider").slick({
        slidesToShow: 4,
        nextArrow: document.getElementById('brands-slider-next'),
        prevArrow: document.getElementById('brands-slider-prev'),

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    let skills_section = $('#skills');
    let inited = false;

    $(window).scroll(function(){
        if(inited) return;
        if($(this).scrollTop()+$(this).height()+50<skills_section.offset().top) return;
        $('.circle').each(function () {
            let id = '#'+$(this).attr('id');
            let percent = $(this).data('skill-percent');
            let percentText = $(this).find('.percentage');
            let bar = new ProgressBar.Circle(id, {
                trailColor: '#eeeeee',
                trailWidth: 4,
                color: '#e83a93',
                duration: 2000,
                easing: 'easeInOut',
                strokeWidth: 4,
                step: function(state, bar) {
                    percentText.text(Math.round(bar.value()*100) +'%')
                }
            });
            bar.animate(parseInt(percent)/100);
        });

        inited = true

    });

    $('#banner .menu-item a, #banner a.scroller').on('click',function (e) {
        e.preventDefault();
        let link = $(this).attr('href');
        let $target = $(link);
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 900, 'swing');
    });

    new WOW().init();
});