window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Trigger change 50px from the top
        header.classList.add('small-header');
    } else {
        header.classList.remove('small-header');
    }
});