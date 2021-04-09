   //carsoul
   let prev = document.querySelector('.prev')
   let next = document.querySelector('.next')
   let items = document.querySelectorAll('.item')
   let count = 0;

   prev.addEventListener('click', () => {
       console.log(count);
       count += 1
       for (let i = 0; i < items.length; i++) {
           if (count > 0) count--
           items[i].style.left = 0 + 100 * count + 'px';
           console.log(items[i].style.left);
       }
   })
   next.addEventListener('click', () => {
       console.log(count);
       count -= 1
       for (let i = 0; i < items.length; i++) {
           if (count < -3) count++
           items[i].style.left = 0 + 100 * count + 'px';
           console.log(items[i].style.left);
       }

   })
   //changeImg
   let mainImg = document.getElementById('main-img')
   console.log(mainImg.src);
   items.forEach(e => {
       e.addEventListener('click', () => {
           mainImg.src = e.src
           e.classList.remove('active')
       })

   });
   for (let i = 0; i < items.length; i++) {
       items[i].addEventListener('click', () => {
           mainImg.src = items[i].src
           items.forEach(e => {
               e.classList.remove('active')
           })
           items[i].classList.add('active')
       })
   }

   // collect
   let like = document.querySelector('.like')
   console.log(like.innerHTML);
   like.addEventListener('click', () => {
       if (like.innerHTML == '<i class="far fa-heart"></i> 加入收藏') {
           like.innerHTML = '<i class="fas fa-heart"></i> 已加入收藏';
       } else {
           like.innerHTML = '<i class="far fa-heart"></i> 加入收藏';
       }
   })
   //amount
   let amount = document.getElementById('amount')
   let subtraction = document.getElementById('subtraction')
   let plus = document.getElementById('plus')
   console.log(amount.max);
   amount.addEventListener('input', () => {
       if (parseInt(amount.value) > amount.max) amount.value = amount.max
   })
   if (amount.value <= 1) subtraction.disabled = true;
   function amountSub() {
       amount.value--;
       if (amount.value < 5) plus.disabled = false;
       if (amount.value <= 1) subtraction.disabled = true;
       return;
   }
   function amountPlus() {
       amount.value++;
       if (amount.value >= 5) plus.disabled = true;
       if (amount.value > 1) subtraction.disabled = false;
       return;
   }

   subtraction.addEventListener('click', amountSub);
   plus.addEventListener('click', amountPlus);
   //toggle
   let introTitle = document.querySelectorAll('.intro-title')
   let introContent = document.querySelectorAll('.intro-content')
   for (let i = 0; i < introTitle.length; i++) {
       introTitle[i].addEventListener('click', () => {
           introTitle.forEach((e) =>
               e.classList.remove('active')
           )
           introTitle[i].classList.add("active");
           introContent.forEach((e) =>
               e.classList.remove('active')
           )
           introContent[i].classList.add("active");
       });
   }
   // swiper
   var swiper = new Swiper('.swiper-container', {
       slidesPerView: 4,
       slidesPerGroup: 2,
       loop: true,
       loopFillGroupWithBlank: true,
       pagination: {
           el: '.swiper-pagination',
           clickable: true,
       },
       autoplay: {
           speed: 400,
       },
       navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
       },
   });