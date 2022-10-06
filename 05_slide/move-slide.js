$(function(){
  /*
  ~ css에 slide-wrapper가 transform: translateX(); 움직이는지 확인 ~

  1. 버튼 클릭 할때마다 슬라이드 오른쪽, 왼쪽 가게 하기 
  2. 오토슬라이드 (일정 시간 마다 자동으로 우 방향으로 이동)
    - 셋 인터벌
  3. 오토슬라이드 중에 버튼을 누르면 일시멈추고 다시 슬라이드 시작
  
  */

  
  const slideButton = $('.slide-container .botton');

  const slideWrapper = $('.slide-container .slide-wrapper');
  const slideAmount = $('.slide-container .slide__item').length;

  let count = 0;


  //슬라이드증가
  function slideIncrease(){
    count++;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count > slideAmount - 1){
      slideWrapper.css({"transform" : "translateX(-" + 0 + "00vw)" });
      count = 0;
    }
  }

  //슬라이드감소
  function slideDecrease(){
    count--;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count == -1){
      slideWrapper.css({"transform" : "translateX(-" + 5 + "00vw)" });
      count = 5;
    }
  }

  //재시작
  function reStart(){
    clearTimeout(roopTime);
    roopTime = setInterval(autoSlide, 3000);
  }



  // 오른쪽으로 자동이동
  let autoSlide = function(){
    slideIncrease();
  }
  let roopTime = setInterval(autoSlide, 3000);


  //버튼을 누르면 roopTime이 클리어됨 + 이전,다음버튼 기능 추가
  slideButton.click(function(){
    let thisButton = slideButton.index(this);

    clearInterval(roopTime);
    setTimeout(reStart,3000);

    if(thisButton == 0){
      slideDecrease();
    }else if(thisButton == 1){
      slideIncrease();
    }
  });




































});