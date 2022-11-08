document.addEventListener("DOMContentLoaded",function(){ 
  updateWidth();
  init();
});

  let slideWrapper = document.querySelector('.slide-container .slide-wrapper');
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;
  let animationTime = null;
  let played = true;
  let playedTimer = null;


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

    slideWrapper.removeEventListener('transitionend', slideNextEventContent);

    removeAnimation();
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)"
    slideWrapper.prepend(updateSlide[updateSlideLength - 1]);

    //console.log(updateSlide[updateSlideLength - 1]);

    test = setTimeout(function(){
      addAnimation();
      slideWrapper.style.transform = "translateX(" + 0 + "%)";
    },100);
  }

  function slideNext(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;

    slideWrapper.style.transform = "translateX(" + -initPosition + "%)"
    
    slideWrapper.addEventListener('transitionend', slideNextEventContent);
  }

  function slideNextEventContent(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");

    removeAnimation();
    clearTimeout(animationTime);

    slideWrapper.style.transform = "translateX(" + 0 + "%)";
    slideWrapper.appendChild(updateSlide[0]);

    //console.log(updateSlide[0]);

    animationTime = setTimeout(addAnimation, 100);
  }



  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");

  buttonWrap.addEventListener("click", function(e){

    pause();
    rePlay();

    if(played){
      if(e.target === prevButton){
        slidePrev();
        played = false;
        playedTimer = setTimeout(function(){
          played = true;
        } ,1000);

      }else if(e.target === nextButton){
        slideNext();
        played = false;
        playedTimer = setTimeout(function(){
          played = true;
        } ,1000);
      }
    }
  });




