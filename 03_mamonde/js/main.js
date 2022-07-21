$(function(){

    //윈도우 스크롤
  function scrollEvent(){
    var curr = $(window).scrollTop();
    var windowHeight = $(window).height();
    var pageHeight = $(document).outerHeight(true);
    var footerHeight = $('.footer-wrapper').outerHeight();

    //헤더 메뉴바 스크롤 이벤트 - 검색창은 유지되지만 서브메뉴창은 유지가 되지 않습니다.
    if(curr > 100){
      $('.header-navbar').addClass('scroll');
    }else{
      $('.header-navbar').removeClass('scroll');
      $('.menu_bg').removeClass('on');

      if($('.sub-box').hasClass('hover')){
        $('.header-navbar').addClass('scroll');
        $('.menu_bg').addClass('on');
      }else{
        $('.gnb-list__item .sub-box').removeClass('hover');
      }

      if($('.search-box').hasClass('open')){
        $('.header-navbar').addClass('scroll');
        $('.menu_bg').addClass('on');
      }
    }

    //탑버튼 스크롤 이벤트
    if(curr > 300){
      $('.wrapper__top .top-button').addClass('on');

      //푸터영역
      if(curr > pageHeight-windowHeight-footerHeight){
        $('.wrapper__top').addClass('fixed');
      }else{
        $('.wrapper__top').removeClass('fixed');
      }
    }else{
      $('.wrapper__top .top-button').removeClass('on');
    }
  }

  scrollEvent()

  
  $(window).scroll(function(){
    scrollEvent()
  });

  //top 버튼
  $('.wrapper__top .top-button').click(function(){
    $('html, body').stop().animate({scrollTop:0},500);
  });

  //헤더 메뉴바
  $('.gnb-list__item').mouseover(function(){
    $('.header-navbar').addClass('scroll');
    $('.search-box').removeClass('open');
    $('.gnb-list__item .sub-box').removeClass('hover');
    $(this).children('.sub-box').addClass('hover');
    
    if($('.sub-box').hasClass('hover')){
      $('.menu_bg').addClass('on');
    }else{
      $('.menu_bg').removeClass('on');
    }
  });

  $('.gnb-list__link').focus(function(){
    $('.header-navbar').addClass('scroll');
    $('.sub-box').removeClass('hover');
    $(this).siblings('.sub-box').addClass('hover');
  });

  $('.gnb-list__item:last-child .sub-benner__link').blur(function(){
    var curr = $(window).scrollTop();

    $('.header-navbar').removeClass('scroll');
    $('.sub-box').removeClass('hover');

    if(curr > 100){
      $('.header-navbar').addClass('scroll');
    }
  });

  $('.header').mouseleave(function(){
    var curr = $(window).scrollTop();

    $('.header-navbar').removeClass('scroll');
    $('.gnb-list__item .sub-box').removeClass('hover');
    $('.menu_bg').removeClass('on');

    if(curr > 100){
      $('.header-navbar').addClass('scroll');
    }

    if($('.search-box').hasClass('open')){
      $('.header-navbar').addClass('scroll');
      $('.menu_bg').addClass('on');
    }
  });

  // 검색창
  $('.util-list__item .util-search').click(function(){
    $('.header-navbar').addClass('scroll');
    $('.search-box').addClass('open');
    $('.menu_bg').addClass('on');
  });

  $('.search-box .close-button').click(function(){
    $('.header-navbar').removeClass('scroll');
    $('.search-box').removeClass('open');
    $('.menu_bg').removeClass('on');
  });

  $('.search-box .close-button').keydown(function(){
    var curr = $(window).scrollTop();

    if(e.keyCode == 13, curr > 100){
      $('.header-navbar').addClass('scroll');
    }
  });

  //main
  // section-visual - 패럴랙스 응용 작업중
  var visualswiper = new Swiper(".section-visual .swiper", {
    speed: 1000,
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
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
    if(!$('.stop-btn').hasClass('start')){
      $('.stop-btn').addClass('start');
      visualswiper.autoplay.stop();
    }else{
      $('.stop-btn').removeClass('start');
      visualswiper.autoplay.start();
    }
  });

  // section01 - 해시태그 연동하는 방법
  var section01swiper = new Swiper(".section01 .swiper", {
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
    on: {
      slideChange: function(){
        //console.log(this.realIndex);
      }
    }
  });

  $('.hash-button').click(function(){
    $('.hash-button').removeClass('active');
    $(this).addClass('active');
    console.log(section01swiper.activeIndex);
  });

  //스와이퍼의 realIndex = hash-button.length 를 동일시?






  // section02 - 이전, 다음으로 넘어갈때 text-wrap 의 동작이 이상해집니다.
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
  var section04swiper = new Swiper(".section04 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".section04 .button-arrow-next",
      prevEl: ".section04 .button-arrow-prev",
    },
  });











});