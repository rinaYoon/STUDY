// section-visual - 패럴랙스 응용이 안됨, 루프가 이상함
var swiper = new Swiper(".section-visual .swiper", {
  speed: 1000,
  //parallax: true,
  slidesPerView: 1,
  spaceBetween: 0,
  //loop: true,
  pagination: {
    el: ".section-visual .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".section-visual .button-arrow-next",
    prevEl: ".section-visual .button-arrow-prev",
  },
});

$('.stop-btn').click(function(){
  $('.stop-btn').addClass('start');
});

// section01 - 해시태그 연동하는 방법
var swiper = new Swiper(".section01 .swiper", {
  slidesPerView: 4,
  spaceBetween: 14,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".section01 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".section01 .button-arrow-next",
    prevEl: ".section01 .button-arrow-prev",
  },
});

// section02 - 이전, 다음으로 넘어갈때 text-wrap 이 안움직임
var section02Swiper = new Swiper(".section02 .swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".section02 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".section02 .button-arrow-next",
    prevEl: ".section02 .button-arrow-prev",
  },
});
section02Swiper.on('slideNextTransitionStart', function(){
  $('.section02 .swiper-slide-active .text-wrap').animate({left:500},500);
});
section02Swiper.on('slideResetTransitionStart', function(){
  $('.section02 .swiper-slide-active .text-wrap').animate({right:500},500);
});