// lecture-detail
let know = document.querySelectorAll('.know')
let lectureDetail = document.querySelector('.lecture-detail');
let closePage = document.querySelector('.detail-close')
know.forEach(e => e.addEventListener('click', openDetailPage))
closePage.addEventListener('click', closeDetailPage)
function openDetailPage() {
    lectureDetail.classList.add('active')
}
function closeDetailPage() {
    lectureDetail.classList.remove('active')
}

//countdown
let startTime = new Date(document.querySelector('#start-time').innerHTML)
let lectureDate = document.querySelector('.lecture-date')
const countDown = () => {
    let currentTime = new Date();
    let diff = startTime - currentTime;
    let days = parseInt(diff / 1000 / 60 / 60 / 24);
    let hours = parseInt(diff / 1000 / 60 / 60 % 24) >= 10 ? parseInt(diff / 1000 / 60 / 60 % 24) : '0' + parseInt(diff / 1000 / 60 / 60 % 24);
    let mins = parseInt(diff / 1000 / 60 % 60) >= 10 ? parseInt(diff / 1000 / 60 % 60) : '0' + parseInt(diff / 1000 / 60 % 60);
    let seconds = parseInt(diff / 1000 % 60) >= 10 ? parseInt(diff / 1000 % 60) : '0' + parseInt(diff / 1000 % 60);
    lectureDate.innerHTML = `距離活動開始 <br> 還有 ${days}天 ${hours}時 ${mins}分 ${seconds}秒`
}
countDown();
setInterval(countDown, 1000)
// applyForm
let applyForm = document.querySelector('.apply-form')
let closeForm = document.querySelector('.apply-close')
let apply = document.querySelectorAll('.apply')
let guestName = document.getElementById('name')
let submit = document.getElementById('submit')
submit.addEventListener('click', applySuccess)
apply.forEach(e => e.addEventListener('click', openApplyForm));
closeForm.addEventListener('click', closeApplyForm);
function openApplyForm() {
    applyForm.classList.add('active')
}
function closeApplyForm() {
    applyForm.classList.remove('active')
}
function applySuccess() {
    window.alert(`${guestName.value}，您報名的印尼種族問題討論研討會已報名成功`)
}