
document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementsByClassName('menu')[0].classList.toggle('active');
    document.getElementsByClassName('main-content')[0].classList.toggle('active');
});