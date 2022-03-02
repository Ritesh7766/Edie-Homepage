document.getElementsByClassName('menu-icon')[0].addEventListener('click', function() {
    this.classList.toggle('active-menu');
    document.getElementsByClassName('container')[0].classList.toggle('active-menu');
    document.getElementsByClassName('nav-1')[0].classList.toggle('active-menu');
    document.getElementsByClassName('total-center')[0].classList.toggle('active-menu');
    document.getElementsByClassName('menu-options')[0].classList.toggle('active-menu');
    document.getElementsByClassName('mobile-menu')[0].classList.toggle('active');
    document.getElementsByClassName('logo')[0].classList.toggle('active');
    document.getElementsByClassName('main-content')[0].classList.toggle('active');
});