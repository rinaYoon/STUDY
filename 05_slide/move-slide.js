document.addEventListener("DOMContentLoaded",function(){ 
  updateWidth();
  init();
});

  const slideWrapper = document.querySelector('.slide-container .slide-wrapper');
  let slide = document.querySelectorAll(".slide-container .slide__item");
  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;
  let played = true; //버튼 제어 장치
  let slideNextControl = null; //Next 슬라이드 트랜지션


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
    slideWrapper.classList.add('animation');
  }

  function removeAnimation(){
    slideWrapper.classList.remove('animation');
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

슬라이드 페이지 네이션 불릿 만들기
- 특징:
  - 슬라이드 페이지 갯수만큼 불릿이 생성됨
  - 클릭하면 숫자만큼의 슬라이드로 나타남 (3번불릿 -> 3번슬라이드)
  - 이동한 불릿과 슬라이드의 왼쪽, 오른쪽 기준으로
    왼쪽 선택시 Prev, 오른쪽 선택하면 Next
  - 슬라이드 이동될때마다 불릿도 똑같이 active 상태가 되야함 (표시)

- 룰
  - 일단 next방향부터 해보기.....
  - 클릭한 불릿의 인덱스 = 슬라이드 인덱스
  - 불릿 기준으로 prev이동, next이동 (단, slideWrapper 이동은 여전히 100만큼만 움직인다. 고정임.)
    (즉 이동 연출은 그대로, 슬라이드를 이동시킨다.)
  - 불릿+슬라이드 인덱스 번호를 통해 이전, 다음에 있는 나머지 슬라이드를
    어케 뒤나 앞으로 보내는지 생각해보기
    - 똑같이 appendChild 랑 prepend 쓰면될듯
    - 나머지 슬라이드를 몽땅 보내야 하는 이유 : 이동 후 이전, 다음기능이 자연스럽게 이어져야 해서

- 생각
  - 1. 슬라이드 숫자만큼 불릿을 생성한다.
  - 2. 불릿을 클릭한 인덱스 숫자 기준으로 클래스이름 2개를 만든다.
    - ex) 3을찍었다면 >> 만약 3보다 작으면 클래스1, 아니면 만약 3보다 크다면 클래스2
  - 3. 그렇게 적용한 클래스를 가지고 appendChild 랑 prepend 를 사용하여 옮긴다.

*/