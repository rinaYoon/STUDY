$(function(){
  //전역변수 설정
  var current = $(window).scrollTop();
  //console.log(current);
  var windowHeight = $(window).height();
  var pageHeight = $(document).outerHeight(true);
  var footerHeight = $('.footer-wrapper').outerHeight();



  /* 초기화 */
  function initEvent(){
    topButtonInit();
  }
  initEvent();

  /* 스크롤 */
  $(window).scroll(function(){
    scrollEvent();
  });
  

  //스크롤이벤트스타일 add, remove 선택적용
  var scrollStyle = {
    add: function(addScrollOn){
      switch (addScrollOn) {
        case 'scroll':
          $('.header-navbar').addClass('scroll');
          break;
        case 'bgOn':
          $('.menu_bg').addClass('on');
          break;
        case 'scrollAndBgOn':
          $('.header-navbar').addClass('scroll');
          $('.menu_bg').addClass('on');
          break;
      }
    },
    remove: function(removeScrollOn){
      switch (removeScrollOn) {
        case 'scroll':
          $('.header-navbar').removeClass('scroll');
          break;
        case 'bgOn':
          $('.menu_bg').removeClass('on');
          break;
        case 'scrollAndBgOn':
          $('.header-navbar').removeClass('scroll');
          $('.menu_bg').removeClass('on');
          break;
      }
    }
  }

  function scrollEvent(){
    current = $(window).scrollTop();
    //console.log("scrollEvent:", current);
    headerScrollEvent();
    topButtonScrollEvent();
    gnbMenuTebMovelastBlur();
  }

  function headerScrollEvent(){
    if(current > 100){
      scrollStyle.add('scroll');
    }else{
      scrollStyle.remove('scrollAndBgOn');
      submenuKeepUp();
      searchKeepUp();
    }
  }

  //헤더 메뉴바  
  $('.gnb-list__item').mouseover(function(){
    scrollStyle.add('scroll');
    $('.gnb-list__item .sub-box').removeClass('hover');
    $(this).children('.sub-box').addClass('hover');
    $('.gnb-list__item').children('.gnb-list__link').removeClass('hover');
    $(this).children('.gnb-list__link').addClass('hover');
    $('.search-box').removeClass('open');
    
    if($('.sub-box').hasClass('hover')){
      scrollStyle.add('bgOn');
    }else{
      scrollStyle.remove('bgOn');
    }
  });

  $('.gnb-list__link').focus(function(){
    scrollStyle.add('scroll');
    $('.sub-box').removeClass('hover');
    $(this).siblings('.sub-box').addClass('hover');
  });
  
  function gnbMenuTebMovelastBlur(){
    $('.gnb-list__item:last-child .sub-benner__link').blur(function(){

      scrollStyle.remove('scroll');
      $('.sub-box').removeClass('hover');

      if(current > 100){  
        scrollStyle.add('scroll');
      }
    });
  }

  $('.header').mouseleave(function(){
    scrollStyle.remove('scrollAndBgOn');
    $('.gnb-list__item .sub-box').removeClass('hover');
    $('.gnb-list__item').children('.gnb-list__link').removeClass('hover');
    
    if($('.search-box').hasClass('open')){
      scrollStyle.add('scrollAndBgOn');
    }
  
    if(current > 100){
      scrollStyle.add('scroll');
    }
  });

  function submenuKeepUp(){
    if($('.sub-box').hasClass('hover')){
      scrollStyle.add('scrollAndBgOn');
    }else{
      $('.gnb-list__item .sub-box').removeClass('hover');
    }
  }
    
  // 검색창
  function searchKeepUp(){
    if($('.search-box').hasClass('open')){
      scrollStyle.add('scrollAndBgOn');
    }
  }

  $('.util-list__item .util-search').click(function(){
    scrollStyle.add('scrollAndBgOn');
    $('.search-box').addClass('open');
  })

  $('#search-go').click(function(){
    scrollStyle.add('scrollAndBgOn');
    $('.search-box').addClass('open');
    $('.search-bar').focus();
    $('.skip-nav').hide();
  })
  
  $('.search-box .close-button').click(function(){
    scrollStyle.remove('scrollAndBgOn');
    $('.search-box').removeClass('open');
  });

  //탑버튼
  function topButtonScrollEvent(){
    if(current > 300){
      $('.wrapper__top .top-button').addClass('on');
  
      if(current > pageHeight-windowHeight-footerHeight){
        $('.wrapper__top').addClass('fixed');
      }else{
        $('.wrapper__top').removeClass('fixed');
      }
    }else{
      $('.wrapper__top .top-button').removeClass('on');
    }
  }

  function topButtonInit() {
    $('.wrapper__top .top-button').click(function(){
      $('html, body').stop().animate({scrollTop:0},500);
    });
  }


  //main
  /* 스와이퍼 옵션값 모음 */
  function autoTime(time){return{delay: time, disableOnInteraction: false,}}
  function swiperOption(parallax,slidesPerView,spaceBetween,allowTouchMove,autoTime,paginationClass,nextButton,prevButton,stopButton){

    return{
      parallax: parallax, // 패럴렉스 사용유무(true / false)
      slidesPerView: slidesPerView, // 화면에 보여질 슬라이드 갯수 (숫자표현)
      spaceBetween: spaceBetween, // 슬라이드 간격 조절 (숫자표현)
      allowTouchMove: allowTouchMove, // 슬라이드 터치 넘김 유무(true / false)
      autoplay: autoTime, //자동슬라이드 유무 (false / autoTime(속도숫자))
      pagination: {
        el: paginationClass,  // 해당 슬라이드 페이지네이션 클래스이름 기재
        clickable: true,
      },
      navigation: {
        nextEl: nextButton, // 해당 슬라이드 다음 버튼 클래스이름 기재
        prevEl: prevButton, // 해당 슬라이드 이전 버튼 클래스이름 기재
      },
      on: {
        init: function(){
          // 자동슬라이드 정지, 재생 버튼기능 유무(true / false)
          thisSlide = this;
          if (stopButton==true) {
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
      },
      speed: 1000,
      loop: true,
      loopAdditionalSlides: 2,
      keyboard: true,
      a11y: {
        prevSlideMessage: '이전 배너보기',
        nextSlideMessage: '다음 배너보기',
        slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
      }
    }
  }
  /* //스와이퍼 옵션값 모음 */


  // section-visual
  new Swiper(".section-visual .swiper", swiperOption(
    true,
    1,
    0,
    true,
    autoTime(2000),
    ".section-visual .swiper-pagination",
    ".section-visual .button-arrow-next",
    ".section-visual .button-arrow-prev",
    true
    ));


  // section01
  var section01swiper = new Swiper(".section01 .swiper", swiperOption(
    false,
    4,
    14,
    true,
    false,
    ".section01 .swiper-pagination",
    ".section01 .button-arrow-next",
    ".section01 .button-arrow-prev",
    false
    ));

  section01swiper.on('slideChange',function(){
    $('.hash-button.active').removeClass('active');
    $('.hash-button').eq(this.realIndex).addClass('active');
  });

  $('.hash-button').click(function(){
    var i = $(this).parent('.hash-list__item').index();

    $('.hash-button.active').removeClass('active');
    $(this).addClass('active');
    section01swiper.slideToLoop(i, 500, false);
  });


  // section02
  new Swiper(".section02 .swiper", swiperOption(
    true,
    "auto",
    15,
    true,
    false,
    ".section02 .swiper-pagination",
    ".section02 .button-arrow-next",
    ".section02 .button-arrow-prev",
    false
    ));
  
  
  // section04
  new Swiper(".section04 .swiper", swiperOption(
    false,
    "auto",
    10,
    false,
    false,
    ".section04 .swiper-pagination",
    ".section04 .button-arrow-next",
    ".section04 .button-arrow-prev",
    false
    ));  
  
  });