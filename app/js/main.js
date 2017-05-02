$(document).ready(function () {
    console.log('ready');
    var swiper = new Swiper('.swiper-container', {
        initialSlide: 5,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows : false
        }
    });
});
