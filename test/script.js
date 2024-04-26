document.addEventListener("DOMContentLoaded", function () {
    const bullets = document.querySelectorAll('.img-bullet');
    const mainContent = document.getElementById('main-content');
    const tl = gsap.timeline({
        onComplete: function () {
            window.location.href = 'index.html'; // Redirect to index.html
        }
    });

    // Fade in and out the images horizontally
    tl.to(bullets, { opacity: 1, duration: 0.5, stagger: 0.5 })
        .to(bullets, { opacity: 0, duration: 0.5, stagger: 0.5, delay: 1 });
});