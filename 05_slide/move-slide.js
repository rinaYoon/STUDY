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
  let currentIndex = 0;

  
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

    currentIndex --;
    if(currentIndex === -1){
      currentIndex = slideLength - 1;
    }
    
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

    currentIndex ++;
    if(currentIndex > slideLength - 1){
      currentIndex = 0;
    }

    console.log(currentIndex + 1);
    console.log(slide[1]);
    console.log(slideLength === currentIndex + 1);

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