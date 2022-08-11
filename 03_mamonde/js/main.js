$(function(){

  //윈도우 스크롤
  function scrollEvent(){
    var curr = $(window).scrollTop();
    var windowHeight = $(window).height();
    var pageHeight = $(document).outerHeight(true);
    var footerHeight = $('.footer-wrapper').outerHeight();
  
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
  $(window).scroll(function(){
    scrollEvent();
  });
  
  //top 버튼
  $('.wrapper__top .top-button').click(function(){
    $('html, body').stop().animate({scrollTop:0},500);
  });
  
  //헤더 메뉴바  
  function headerMenu(){
    $('.gnb-list__item').mouseover(function(){
      $('.header-navbar').addClass('scroll');
      $('.search-box').removeClass('open');
      $('.gnb-list__item .sub-box').removeClass('hover');
      $(this).children('.sub-box').addClass('hover');
      $('.gnb-list__item').children('.gnb-list__link').removeClass('hover');
      $(this).children('.gnb-list__link').addClass('hover');
      
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
      $('.gnb-list__item').children('.gnb-list__link').removeClass('hover');
    
      if(curr > 100){
        $('.header-navbar').addClass('scroll');
      }
    
      if($('.search-box').hasClass('open')){
        $('.header-navbar').addClass('scroll');
        $('.menu_bg').addClass('on');
      }
    });
  }
  headerMenu();
  
  // 검색창
  function search(){
    $('.util-list__item .util-search').click(function(){
      $('.header-navbar').addClass('scroll');
      $('.search-box').addClass('open');
      $('.menu_bg').addClass('on');
    })
    $('#search-go').click(function(){
      $('.header-navbar').addClass('scroll');
      $('.search-box').addClass('open');
      $('.search-bar').focus();
      $('.menu_bg').addClass('on');
      $('.skip-nav').hide();
    })
    
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
  }
  search();
  
  
  

  
  //main
  // section-visual
  var visualswiper = new Swiper(".section-visual .swiper", {
    parallax: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    a11y: {
      prevSlideMessage: '이전 배너보기',
      nextSlideMessage: '다음 배너보기',
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
    pagination: {
      el: ".section-visual .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".section-visual .button-arrow-next",
      prevEl: ".section-visual .button-arrow-prev",
    },
    on: {
      init: function(){
        thisSlide = this;
        $('.stop-btn').click(function(){
          if(!$('.stop-btn').hasClass('start')){
            $('.stop-btn').addClass('start');
            thisSlide.autoplay.stop();
            $('.stop-btn .blind').text("재생하기");
            $('.stop-btn').attr({"aria-pressed":"true"});
          }else{
            $('.stop-btn').removeClass('start');
            thisSlide.autoplay.start();
            $('.stop-btn .blind').text("정지하기");
            $('.stop-btn').attr({"aria-pressed":"false"});
          }
        });
      }
    }
  });
  /*
  //💩일시정지, 재생버튼 스와이퍼 안에다 넣고, aria-pressed와 blind 내용을 변경
  $('.stop-btn').click(function(){
    if(!$('.stop-btn').hasClass('start')){
      $('.stop-btn').addClass('start');
      visualswiper.autoplay.stop();
    }else{
      $('.stop-btn').removeClass('start');
      visualswiper.autoplay.start();
    }
  });
  */
  
  // section01
  var section01swiper = new Swiper(".section01 .swiper", {
    slidesPerView: 4,
    spaceBetween: 14,
    loop: true,
    loopFillGroupWithBlank: true,
    a11y: {
      prevSlideMessage: '이전 배너보기',
      nextSlideMessage: '다음 배너보기',
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
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
        /* 💩 */
        // if(this.realIndex === 0){
        //   $('.hash-button.active').removeClass('active');
        //   $('.hash-button').eq(0).addClass('active');
        // }else if(this.realIndex === 1){
        //   $('.hash-button.active').removeClass('active');
        //   $('.hash-button').eq(1).addClass('active');
        // }else if(this.realIndex === 2){
        //   $('.hash-button.active').removeClass('active');
        //   $('.hash-button').eq(2).addClass('active');
        // }else if(this.realIndex === 3){
        //   $('.hash-button.active').removeClass('active');
        //   $('.hash-button').eq(3).addClass('active');
        // }else{
        //   $('.hash-button.active').removeClass('active');
        // }
        $('.hash-button.active').removeClass('active');
        $('.hash-button').eq(this.realIndex).addClass('active');
      }
    }
  });
  
  /* 💩 */
  // $('.hash-button').eq(0).click(function(){
  //     $('.hash-button.active').removeClass('active');
  //     $(this).addClass('active');
  //     section01swiper.slideToLoop(0, 500, false);
  // });
  // $('.hash-button').eq(1).click(function(){
  //     $('.hash-button.active').removeClass('active');
  //     $(this).addClass('active');
  //     section01swiper.slideToLoop(1, 500, false);
  // });
  // $('.hash-button').eq(2).click(function(){
  //     $('.hash-button.active').removeClass('active');
  //     $(this).addClass('active');
  //     section01swiper.slideToLoop(2, 500, false);
  // });
  // $('.hash-button').eq(3).click(function(){
  //     $('.hash-button.active').removeClass('active');
  //     $(this).addClass('active');
  //     section01swiper.slideToLoop(3, 500, false);
  // });
    $('.hash-button').click(function(){
      var i = $(this).parent('.hash-list__item').index();
  
      $('.hash-button.active').removeClass('active');
      $(this).addClass('active');
  
      section01swiper.slideToLoop(i, 500, false);
    });
    
    
  
  // section02
  var section02Swiper = new Swiper(".section02 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    loopAdditionalSlides: 2,
    keyboard: true,
    parallax: true,
    speed : 1000,
    a11y: {
      prevSlideMessage: '이전 배너보기',
      nextSlideMessage: '다음 배너보기',
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
    pagination: {
      el: ".section02 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".section02 .button-arrow-next",
      prevEl: ".section02 .button-arrow-prev",
    }
  });
  
  
  // section04 : cssMode 적용 시 nextEl 방향으로 loop가 되지 않습니다!
  var section04swiper = new Swiper(".section04 .swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 2,
    loopFillGroupWithBlank: true,
    allowTouchMove: false,
    a11y: {
      prevSlideMessage: '이전 배너보기',
      nextSlideMessage: '다음 배너보기',
      slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
    },
    navigation: {
      nextEl: ".section04 .button-arrow-next",
      prevEl: ".section04 .button-arrow-prev",
    }
  });
  
  
  
  
  });