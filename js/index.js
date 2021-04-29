//swiper img
let swiperWrapper = document.querySelector('.swiper-wrapper')
let swiperImg = ['book2.png', 'book3.png', 'book4.png', 'book5.png', 'book6.png', 'book7.png']
let swiperSlide
for (let i = 0; i < swiperImg.length; i++) {
    swiperSlide += ` <div class="swiper-slide"><img src="./product-img/${swiperImg[i]}"></div>`
    swiperWrapper.innerHTML = swiperSlide;
}
// swiper
var swiper = new Swiper('.swiper-container', {
    effect: '',
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

