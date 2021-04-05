const tl = gsap.timeline({ default: { ease: "power1.out" } })
tl.to("#intro .txt", { y: "0%", opacity: 1, duration: 1, stagger: .25 })
tl.to('#slider', { y: "-100%", opacity: 1, duration: 1, delay: 0.5 })
tl.to('#intro', { y: "-100%", duration: 1 }, "-=1")

let nav = document.querySelector('.main-nav')
window.addEventListener('scroll', console.log('hi'))

// log inface
let toLog = document.getElementById('to-log')
let log = document.getElementById('log')
let modalClose = document.querySelector('.modal-close')
function logInterface() {
    log.classList.add('active')
}
function closeModal() {
    log.classList.remove('active')
}
toLog.addEventListener('click', logInterface);
modalClose.addEventListener('click', closeModal)