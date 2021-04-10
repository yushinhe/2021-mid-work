let more = document.getElementById('more')
let one = document.getElementById('one')
let cardGroup = document.querySelector('.card-group')
let toggleBtn = document.querySelectorAll('.toggle .btn')


more.addEventListener('click', clickMore)
one.addEventListener('click', clickOne)
function clickMore() {
    cardGroup.classList.add('active')
    toggleBtn[0].classList.remove('active')
    toggleBtn[1].classList.add('active')
}
function clickOne() {
    cardGroup.classList.remove('active')
    toggleBtn[0].classList.add('active')
    toggleBtn[1].classList.remove('active');
}