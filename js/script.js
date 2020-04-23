$(document).ready(() => {
    $('.carousel.carousel-slider').carousel({
        fullWidth: false,
        indicators: true,
        duration: 500
    });

    autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
});