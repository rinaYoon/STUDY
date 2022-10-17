document.addEventListener("DOMContentLoaded",function(){ 
  // ↑↑↑ body마지막에 js를 첨부해서 이미 본문이 다 읽힌다음에 로드가 되므로 굳이 DOMContentLoaded 를 쓸 필요 x,
  // (대신 실제 작업시엔 개발팀으로 인해 첨부 위치가 달라질 수도 있음.)


  let count = 0;
  let duration = 5000;
  let restartTimer = null;
  let autoTimer = null;

  function init(){
    makeClone();
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
    movement.next();
  }

  let slideWrapper = document.querySelector(".slide-container .slide-wrapper");
  let slide = document.querySelectorAll(".slide-container .slide__item");
  let slideLength = slide.length;
  let slideAmount = slideLength - 1;

  let movement = {
    prev: function(){
      slide = document.querySelectorAll(".slide-container .slide__item");
      slideLength = slide.length;
      slideAmount = slideLength - 1;

      count--;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";
  
      if(count == -1){
        slideWrapper.style.transform = "translateX(-" + slideAmount + "00vw)";
        count = slideAmount;
      }
    },
    next: function(){
      slide = document.querySelectorAll(".slide-container .slide__item");
      slideLength = slide.length;
      slideAmount = slideLength - 1;

      count++;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";

      if(count > slideAmount){
        slideWrapper.style.transform = "translateX(-" + 0 + "00vw)";
        count = 0;
      }
    }
  }

  function makeClone(){

    let firstCloneSlide = slide[0].cloneNode(true);
    firstCloneSlide.classList.add('last-clone');
    slideWrapper.appendChild(firstCloneSlide);

    let lastClineSlide = slide[slideAmount].cloneNode(true);
    lastClineSlide.classList.add('first-clone');
    slideWrapper.prepend(lastClineSlide);

    slideWrapperWidth();
  }

  function slideWrapperWidth(){
    slide = document.querySelectorAll(".slide-container .slide__item");
    slideLength = slide.length;

    slideWrapper.style.width = "calc(100% *" + slideLength + ")";
  }




//버튼
  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");

  buttonWrap.addEventListener("click", function(e){

    pause();
    rePlay();

    if(e.target === prevButton){
      movement.prev();
    }else if(e.target === nextButton){
      movement.next();
    }
  });



  init();



});