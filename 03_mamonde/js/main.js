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
  /* 스와이퍼 디폴트값 */
  function swiperDefault(param,speed,slidesPerView,spaceBetween,allowTouchMove,auto,paginationClass,nextButton,prevButton,stopButton){

    if(param==true){param=true}else{param=false}
    if(auto==false){auto==false}else{'{delay: 2500,disableOnInteraction: false,}'}

    return{
      parallax: param,
      speed: speed,
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      loop: true,
      loopAdditionalSlides: 2,
      keyboard: true,
      allowTouchMove: allowTouchMove,
      autoplay: auto,
      a11y: {
        prevSlideMessage: '이전 배너보기',
        nextSlideMessage: '다음 배너보기',
        slideLabelMessage: '총 {{slidesLength}}장의 배너 중 {{index}}번 배너 입니다.',
      },
      pagination: {
        el: paginationClass,
        clickable: true,
      },
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      on: {
        init: function(){
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
        },
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
    }
  }

  // section-visual
  var visualswiper = new Swiper(".section-visual .swiper", swiperDefault(true,1000,1,0,true,true,".section-visual .swiper-pagination",".section-visual .button-arrow-next",".section-visual .button-arrow-prev",true));
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
    keyboard: true,
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
  
  
  // section04
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