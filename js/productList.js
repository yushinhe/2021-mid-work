import item from './bookdata.js'
let more = document.getElementById('more')
let one = document.getElementById('one')
let cardGroup = document.querySelector('.card-group')
let toggleBtn = document.querySelectorAll('.toggle .btn')
//價錢排序
let priceSort = document.getElementById('price-sort');
priceSort.addEventListener('change', sortByPrice)
// item.sort((a, b) => a.price - b.price)
function sortByPrice() {
    if (priceSort.value == 'asort') {
        item.sort((a, b) => a.price - b.price)
    }
    if (priceSort.value == 'sort') {
        item.sort((a, b) => b.price - a.price)
    }
    productCard();
}

const productCard = () => {
    let card = "";
    for (let i = 0; i < item.length; i++) {
        card += `  <div class="card">
    <a href="./product-detail.html" class="product-img">
        <img src="${item[i].img}" alt="">
    </a>
    <a href="./product-detail.html" class="info">
        <h3>${item[i].name}</h3>
        <div class="detail-info">
            <h4 class="author">作者:${item[i].arthur}</h4>
            <h4>出版社:${item[i].publing}</h4>
            <h4>出版日期:${item[i].publingDate}</h4>
        </div>
    </a>
    <div class="toBuy">
        <p class="price">$ ${item[i].price}</p>
        <button class="btn btn-red"><i class="fas fa-shopping-cart"></i> 加入購物車</button>
    </div>
    <button class="buy"><i class="fas fa-shopping-cart "></i></button>
</div>`
        cardGroup.innerHTML = card;
    }
}
productCard();

//切換商品
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