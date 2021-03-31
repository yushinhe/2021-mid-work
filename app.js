const tl = gsap.timeline({ default: { ease: "power1.out" } })
tl.to("#intro .txt", {y:"0%", opacity:1, duration: 1, stagger: .25 })
tl.to('#slider', { y: "-100%",opacity:1,duration:1, delay: 0.5 })
tl.to('#intro', { y: "-100%", duration: 1 }, "-=1")
 
let nav=document.querySelector('.main-nav')
window.addEventListener('scroll',console.log('hi'))

