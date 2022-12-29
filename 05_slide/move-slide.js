document.addEventListener("DOMContentLoaded",function(){ 
  updateWidth();
  init();
});

  const slideWrapper = document.querySelector('.slide-container .slide-wrapper');
  let slide = document.querySelectorAll(".slide-container .slide__item");
  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");
  let duration = 7000;
  let restartTimer = null;
  let autoTimer = null;
  let played = true; //버튼 제어 장치
  let slideNextControl = null; //Next 슬라이드 트랜지션종료


  function init(){
    autoPlay();
  }

  function autoPlay(){
    autoTimer = setInterval(repetition, duration);
  }

  function pause(){
    clearInterval(autoTimer);
  }

  function rePlay(){
    clearTimeout(restartTimer);
    restartTimer = setTimeout(autoPlay, duration);
  }

  function repetition(){
    slideNext();
  }



  function addAnimation(){
    slideWrapper.classList.add("animation");
  }

  function removeAnimation(){
    slideWrapper.classList.remove("animation");
  }

  function updateWidth(){
    slide = document.querySelectorAll(".slide-container .slide__item");
    let slideLength = slide.length;
  
    slideWrapper.style.width = "calc(100% *" + slideLength + ")";
  }



  function slidePrev(){
    slide = document.querySelectorAll(".slide-container .slide__item");
    let slideLength = slide.length;
    let initPosition = 100 / slideLength;
    
    removeAnimation();
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)"
    slideWrapper.prepend(slide[slideLength - 1]);
    slide[slideLength - 1].classList.add("slide-active");
    slide[0].classList.remove("slide-active");

    test = setTimeout(function(){
      addAnimation();
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
    },100);
  }

  function prevButtonContent(){
    //Next슬라이드 이동 중에 Prev버튼을 눌렀을때의 대응
    if(slideNextControl === true){
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
      slideNextControl = false;
      played = true;
    }else{
      slidePrev();
    }
  }

  function slideNext(){
    slide = document.querySelectorAll(".slide-container .slide__item");
    let slideLength = slide.length;
    let initPosition = 100 / slideLength;

    addAnimation();
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
    slideNextControl = true;
    slide[1].classList.add("slide-active");
    slide[0].classList.remove("slide-active");
  }

  function slideNextEventContent(){
    if(slideNextControl === true){
      slide = document.querySelectorAll(".slide-container .slide__item");

      slideNextControl = false;
      removeAnimation();
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
      slideWrapper.appendChild(slide[0]);
    }
  }



  // Prev, Next 슬라이드 트랜지션 이벤트
  slideWrapper.addEventListener('transitionend', function(){
    slideNextEventContent();
    played = true;
  });

  buttonWrap.addEventListener("click", function(e){
    pause();
    rePlay();
    
    if(played === true){
      played = false;

      if(e.target === prevButton){
        prevButtonContent();
      }else if(e.target === nextButton){
        slideNext();
      }
    }
  });



/*
  1. 슬라이드 숫자만큼 불릿을 생성한다.
  2. 불릿을 클릭한 인덱스 숫자 기준으로 클래스이름 2개를 만든다.
    ex) 3을찍었다면 >> 만약 3보다 작으면 클래스1, 아니면 만약 3보다 크다면 클래스2
    (단, 찍은숫자(3)의 -1 숫자(2)는 클래스를 붙이지 않는다(그래야 next때 안이상해짐))
  3. 그렇게 적용한 클래스를 가지고 appendChild 랑 prepend 를 사용하여 옮긴다.
    (근데 모든 클래스가 안움직일테니 for문 써야할지도)

------
- 자연스럽게 넘길라면 현재 액티브슬라이드의 옆에 있어야함 (next = 오른쪽, prev = 왼쪽)
  - 일단 액티브클래스를 만들어야 하는듯
  - 액티브 기준으로 옆에있게 빠르게 이동
- 트랜지션이 끝난 후 그 순서를 어떻게 해야할지..
- 그리고 이것들 전부 반복일텐데 이 흐름을 어떻게?

1. 일단 '현재 화면에 보이는 슬라이드' 를 slide-active 라는 클래스 부여하기. (완료)
2. ...
*/