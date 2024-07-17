const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('menu-open-button').addEventListener('click', function(){
    document.body.classList.add('overflow');
    mobileMenu.classList.add('visible');
});

document.getElementById('menu-close-button').addEventListener('click', function(){
    mobileMenu.classList.remove('visible');
    document.body.classList.remove('overflow');
});