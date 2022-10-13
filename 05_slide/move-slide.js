document.addEventListener("DOMContentLoaded",function(){

  let count = 0;
  let duration = 5000;
  let restartTimer = null;
  let autoTimer = null;

  function init(){
    slideWrapperWidth();
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

  const slideWrapper = document.querySelector(".slide-container .slide-wrapper");
  const slideLength = document.querySelectorAll(".slide-container .slide__item").length;
  const slideAmount = slideLength - 1;
  let movement = {
    prev: function(){
      count--;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";
  
      if(count == -1){
        slideWrapper.style.transform = "translateX(-" + slideAmount + "00vw)";
        count = slideAmount;
      }
    },
    next: function(){
      count++;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";

      if(count > slideAmount){
        slideWrapper.style.transform = "translateX(-" + 0 + "00vw)";
        count = 0;
      }
    }
  }

  function slideWrapperWidth(){
    slideWrapper.style.width = "calc(100% *" + slideLength + ")";
  }



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