const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(scrollY);

  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });       
    //badgeEl.style.display = 'none';
    // 탑버튼보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else{
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    // 탑버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, ms단위 시간)

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo : 0, //화면을 0px 위치로 옮겨줌    
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index+1) *.7, // 0.7, 1.4, 2.1, 2.8
    opacity : 1   
  }); 
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데
  autoplay : {
    delay : 5000 // 기본값 3000(3초)
  },
  loop : true,
  pagination : {
    el : '.promotion .swiper-pagination', //페이지네이션 선택자
    clickable : true
  },
  navigation:{
    nextEl: '.promotion .swiper-next',
    prevEl: '.promotion .swiper-prev',
  }
});

new Swiper('.awards .swiper', {
  slidesPerView : 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 30, // 슬라이드 사이 여백(px)
  autoplay : {
    delay : 5000 // 기본값 3000(3초)
  },
  loop : true,
  navigation:{
    nextEl: '.awards .swiper-next',
    prevEl: '.awards .swiper-prev',
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function (){
  isHidePromotion = !isHidePromotion; // 스위칭
  if (isHidePromotion) {
    //숨김
    promotionEl.classList.add('hide');
  } else {
    //보여줌
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5),  //애니메이션 동작시간
    { //옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true, // 역재생
      ease: Power1.easeInOut,
      delay : random(0, delay)  
  });
}


floatingObject('.floating1', 1, 15);

floatingObject('.floating2', 0.5, 15);

floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');


spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene( {
      triggerElement : spyEl, // 보여짐 여부를 감시
      triggerHook : .8, 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})

