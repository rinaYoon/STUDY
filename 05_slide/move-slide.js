document.addEventListener("DOMContentLoaded",function(){ 
  updateWidth();
  init();
});

  const slideWrapper = document.querySelector('.slide-container .slide-wrapper');
  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;
  let animationTime = null;
  let played = null;
  let playedTimer = null;
  let slideNextControl = null;


  function init(){
    animationTime = setTimeout(addAnimation, 100);
    autoPlay();
  }

  function autoPlay(){
    autoTimer = setInterval(repetition, duration);
    played = true;
    clearTimeout(playedTimer);
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
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
  
    slideWrapper.style.width = "calc(100% *" + updateSlideLength + ")";
  }



  function slidePrev(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;

    removeAnimation();
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)"
    slideWrapper.prepend(updateSlide[updateSlideLength - 1]);
    //console.log(updateSlide[updateSlideLength - 1]);
    test = setTimeout(function(){
      addAnimation();
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
    },100);
  }

  function slideNext(){ //트랜지션 일어나는동안 버튼 반응X,
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;

    slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
    slideNextControl = true;
    //console.log('A___'+slideNextControl);
  }

  function slideNextEventContent(){//트랜지션 끝날 때 버튼 반응 O, 또는 promise나 async/await 찾아보기
    if(slideNextControl === true){
      let updateSlide = document.querySelectorAll(".slide-container .slide__item");

      slideNextControl = false;
      removeAnimation();
      clearTimeout(animationTime);
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
      slideWrapper.appendChild(updateSlide[0]);
      animationTime = setTimeout(addAnimation, 100);
      //console.log('B___'+slideNextControl); 
    }
  }



  // Next슬라이드전용 슬라이드들 위치 바꾸는 이벤트
  slideWrapper.addEventListener('transitionend', slideNextEventContent);

  buttonWrap.addEventListener("click", function(e){
    pause();
    rePlay();
    
    //버튼제어장치
    if(played === true){
      played = false;
      playedTimer = setTimeout(function(){//<<< 삭제
        played = true;
      } ,1500); 

      if(e.target === prevButton){
        //console.log('prev click___'+slideNextControl);
        
        //Next슬라이드 이동 중에 Prev버튼을 눌렀을때의 대응
        if(slideNextControl === true){
          slideWrapper.style.transform = "translateX(" + 0 + "%)";
          slideNextControl = false;
        }else{
          slidePrev();
        }
      }else if(e.target === nextButton){ 
        //console.log('naxt click');
        slideNext();
      }
    }
  });
