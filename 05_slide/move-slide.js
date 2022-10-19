document.addEventListener("DOMContentLoaded",function(){ 

  let slideWrapper = document.querySelector(".slide-container .slide-wrapper");
  let slide = document.querySelectorAll(".slide-container .slide__item");
  let slideLength = slide.length;
  let slideAmount = slideLength - 1;
  let slideSize = 100;
  let slideCount = 1;
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
    slideMove(slideCount + 1);
  }


  function makeClone(){

    let firstCloneSlide = slide[0].cloneNode(true);
    firstCloneSlide.classList.add('last-clone');
    slideWrapper.appendChild(firstCloneSlide);

    let lastClineSlide = slide[slideAmount].cloneNode(true);
    lastClineSlide.classList.add('first-clone');
    slideWrapper.prepend(lastClineSlide);

    updateWidth();
    setPosition();

    setTimeout(function(){
      slideWrapper.classList.add('animation');
    }, 100);
  }


  function updateWidth(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;

    slideWrapper.style.width = "calc(100% *" + updateSlideLength + ")";
  }


  function setPosition(){
    let initPosition = -slideSize;
    slideWrapper.style.transform = "translateX(" + initPosition + "vw)";
  }


  function slideMove(num){
    slide = document.querySelectorAll(".slide-container .slide__item");
    slideLength = slide.length;
    slideAmount = slideLength - 1;

    slideCount = num;

    slideWrapper.style.transform = "translateX(-" + slideCount*slideSize + "vw)";

    if(slideCount === 0){

      setTimeout(function(){
        slideWrapper.style.transform = "translateX(-" + (slideAmount - 1)*slideSize + "vw)";
        slideCount = slideAmount - 1;
        slideWrapper.classList.remove('animation');
      }, 1000);
      setTimeout(function(){
        slideWrapper.classList.add('animation');
      }, 1100);

    }else if(slideCount === slideAmount){

      setTimeout(function(){
        slideWrapper.style.transform = "translateX(-" + slideSize + "vw)";
        slideCount = 1;
        slideWrapper.classList.remove('animation');
      }, 1000);
      setTimeout(function(){
        slideWrapper.classList.add('animation');
      }, 1100);
    }
  }



//버튼
  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");

  buttonWrap.addEventListener("click", function(e){

    pause();
    rePlay();

    if(e.target === prevButton){
      slideMove(slideCount - 1);
      
    }else if(e.target === nextButton){
      slideMove(slideCount + 1);
    }
  });



  init();



});