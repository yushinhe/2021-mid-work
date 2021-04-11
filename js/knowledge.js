var flex = document.querySelector('.flex');
var msnry = new Masonry(flex, {
    itemSelector: '.grid-item',
});
//  button
let button=document.querySelectorAll('button')
console.log(button);
button.forEach(e=>{
    e.addEventListener('click',()=>{
        window.location.href ="../article.html"
    })
})