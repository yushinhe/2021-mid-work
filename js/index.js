// swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1000,
        speed: 400,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
//changeHTML
