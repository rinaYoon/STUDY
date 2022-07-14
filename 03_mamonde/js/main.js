// section-visual - 패럴랙스 응용이 안됨, 루프가 이상함
var swiper = new Swiper(".section-visual .swiper", {
  speed: 1000,
  //parallax: true,
  slidesPerView: 1,
  spaceBetween: 0,
  //loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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

// section04
var swiper = new Swiper(".section04 .swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".section04 .button-arrow-next",
    prevEl: ".section04 .button-arrow-prev",
  },
});

//윈도우 스크롤
$(window).scroll(function(){
  var curr = $(window).scrollTop();
  var height = $(document).outerHeight(true);

  if(curr > 300){
    $('.wrapper__top .top-button').addClass('on');
  }else{
    $('.wrapper__top .top-button').removeClass('on');
  }

  console.log(height);
});

//top 버튼
$('.wrapper__top .top-button').click(function(){
  $('html, body').stop().animate({scrollTop:0},500);
});