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


// banner-out
tl.to('.banner .bg', { x: "100%", duration: 1, delay: 0.5 })
tl.from('.banner h2', { y: "50px", opacity: 0, duration: 1, stagger: .25 })