window.addEventListener('scroll', function () {
    var header = document.getElementById('mainHeader');
    var scrollValue = window.scrollY;

    if (scrollValue > 50) { // Changes start after 50px of scrolling
        header.classList.add('small');
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // More transparent on scroll
    } else {
        header.classList.remove('small');
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Less transparent
    }
});







