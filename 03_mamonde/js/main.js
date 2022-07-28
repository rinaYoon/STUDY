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

  // section01
  var section01swiper = new Swiper(".section01 .swiper", {
    slidesPerView: 4,
    spaceBetween: 14,
    loop: true,
    keyboard: true,
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
        /* 삽질 */
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
  
  /* 삽질 */
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
    

  /*
  ~스와이퍼 자주 쓰이는거~
  .on{}: 스와이퍼 이 외에 따른 이벤트같은거 넣을때 쓰임

  slideChange: 슬라이드가 바뀔때마다(=액티브가 될때마다) 이벤트가 실행

  slideChangeTransitionStart: 이전, 다음 슬라이드로 넘기기 시작할때 이벤트 발생
  slideChangeTransitionEnd: 이전, 다음 슬라이드로 넘어가서 끝날때 이벤트 발생

  slideNextTransitionStart: "slideChangeTransitionStart"와 같음, next만
  slideNextTransitionEnd: "slideChangeTransitionEnd"와 같음, next만

  slidePrevTransitionStart: "slideChangeTransitionStart"와 같음, Prev만
  slidePrevTransitionEnd: "slideChangeTransitionEnd"와 같음, Prev만

  스와이퍼이름.realIndex: 슬라이드 ㄹㅇ찐번호 loop적용중일땐 이거 쓰는게 나음
  스와이퍼이름.activeIndex: 현대 액티브가 된 슬라이드 번호, 근데 loop일때는 양이 늘어나서 번호가 바뀜

  스와이퍼이름.slideTo(index(슬라이드번호), speed(속도), runCallbacks(전환이벤트여부)): '특정'슬라이드로 이동함
  스와이퍼이름.slideToLoop(index(슬라이드번호), speed(속도), runCallbacks(전환이벤트여부)): '특정'슬라이드로 이동함(loop설정되어있을때 전용)

  스와이퍼이름.slidePrev(index, speed, runCallbacks): 이전 슬라이드로 이동
  스와이퍼이름.slideNext(index, speed, runCallbacks): 다음 슬라이드로 이동

  Keyboard Control
  watchOverflow: 슬라이드가1개라서 슬라이드가 되지 않을때 버튼,페이징버튼 숨겨짐
  */


  // section02
  var section02Swiper = new Swiper(".section02 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    loopAdditionalSlides: 2,
    keyboard: true,
    parallax: true,
    speed : 1000,
    pagination: {
      el: ".section02 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".section02 .button-arrow-next",
      prevEl: ".section02 .button-arrow-prev",
    },
    on: {
      slideChange: function(){
        // $('.section02 .text-wrap').eq(this.realIndex).animate({
        //   left:0,
        //   opacity:1
        // },500);
        $('')
      }
    }
  });
// 마저하기







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