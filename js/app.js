const tl = gsap.timeline({ default: { ease: "power1.out" } })
tl.to("#intro .txt", { y: "0%", opacity: 1, duration: 1, stagger: .25 })
tl.to('#slider', { y: "-100%", opacity: 1, duration: 1, delay: 0.5 })
tl.to('#intro', { y: "-100%", duration: 1 }, "-=1")

let nav = document.querySelector('.main-nav')
window.addEventListener('scroll', console.log('hi'))

// menu
let menuBtn = document.querySelector('.menu-btn')
let subMenu = document.querySelector('.sub-menu')
menuBtn.addEventListener('click', toggleMenu)
function toggleMenu() {
    menuBtn.classList.toggle('active')
    subMenu.classList.toggle('active')
}
//swiper img
let swiperWrapper = document.querySelector('.swiper-wrapper')
let swiperImg = ['book2.png', 'book3.png', 'book4.png', 'book5.png', 'book6.png', 'book7.png']
let swiperSlide
for (let i = 0; i < swiperImg.length; i++) {
    swiperSlide += ` <div class="swiper-slide"><img src="./product-img/${swiperImg[i]}"></div>`
    swiperWrapper.innerHTML = swiperSlide;
}

// banner-out
tl.to('.banner .bg', { x: "100%", duration: 1, delay: 0.5 })
tl.from('.banner h2', { y: "50px", opacity: 0, duration: 1, stagger: .25 })