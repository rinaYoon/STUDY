document.addEventListener("DOMContentLoaded",function(){

  let count = 0;
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;

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
    restartTimer = setInterval(autoPlay, duration);
  }

  function repetition(){
    movement.next();
  }

  const slideWrapper = document.querySelectorAll(".slide-container .slide-wrapper")[0];
  const slideLength = document.querySelectorAll(".slide-container .slide__item").length;
  const slideAmount = slideLength - 1;
  let movement = {
    next: function(){
      count++;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";

      if(count > slideAmount){
        slideWrapper.style.transform = "translateX(-" + 0 + "00vw)";
        count = 0;
      }
    },
    prev: function(){
      count--;
      slideWrapper.style.transform = "translateX(-" + count + "00vw)";
  
      if(count == -1){
        slideWrapper.style.transform = "translateX(-" + slideAmount + "00vw)";
        count = slideAmount;
      }
    }
  }


  //for문 돌려야할듯, index(this)<<이거 바꿔야됨
  //https://gurtn.tistory.com/134
  const slideButton = document.querySelectorAll(".slide-container .botton")[0];

  slideButton.addEventListener("click", function(){
    let thisButton = slideButton.index(this);

    pause();
    rePlay();

    if(thisButton === 0){
      movement.prev();
    }else if(thisButton === 1){
      movement.next();
    }
  });



  init();



});