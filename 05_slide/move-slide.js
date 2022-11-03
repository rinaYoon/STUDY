document.addEventListener("DOMContentLoaded",function(){ 

  // https://webisfree.com/2020-08-07/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8-%EC%95%9E-%EB%98%90%EB%8A%94-%EB%92%A4%EC%97%90-%EC%9A%94%EC%86%8C-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-append()-appendchild()-prepend()-insertbefore() 이거보기




  let slideWrapper = document.querySelector('.slide-container .slide-wrapper'); // ul
  let slide = document.querySelectorAll('.slide-container .slide__item'); // li
  let slideLength = slide.length;
  let slideIndex = slideLength - 1;
  let userCount = 1;
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;
  let animationTime = null;
  let played = true;
  let playedTimer = null;


  function init(){
    animationTime = setTimeout(addAnimation, 100);
    makeClone();
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



  function makeClone(){
    let firstSlideClone = slide[slideIndex].cloneNode(true);
    firstSlideClone.classList.add('prev-clone');
    slideWrapper.prepend(firstSlideClone);
    
    updateWidth();
    setPosition();
  }

  function updateWidth(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
  
    slideWrapper.style.width = "calc(100% *" + updateSlideLength + ")";
  }

  function setPosition(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;
    
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
  }



  function slidePrev(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;
    let updateSlideIndex = updateSlideLength - 1;

    userCount--;
    slideWrapper.style.transform = "translateX(" + -(initPosition * userCount) + "%)";

    slideWrapper.addEventListener('transitionend', function(){
      if(userCount === 0){
        slideWrapper.style.transform = "translateX(" + -(initPosition * updateSlideIndex) + "%)";
        userCount = updateSlideIndex;

        removeAnimation();
        clearTimeout(animationTime);
  
        animationTime = setTimeout(addAnimation, 100);
      }
    });
  }

  function slideNext(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;
    let updateSlideIndex = updateSlideLength - 1;

    userCount++;      
    slideWrapper.style.transform = "translateX(" + -(initPosition * userCount) + "%)";

    slideWrapper.addEventListener('transitionend', function(){
      if(userCount === updateSlideIndex){
          userCount = 0;
          slideWrapper.style.transform = "translateX(" + 0 + "%)";
  
          removeAnimation();
          clearTimeout(animationTime);
    
          animationTime = setTimeout(addAnimation, 100);
      }
    });

    if(userCount > updateSlideIndex){
      let overTime = setTimeout(function(){
        slideWrapper.style.transform = "translateX(" + 0 + "%)";
        userCount = 0;

        clearTimeout(animationTime);
        removeAnimation();
      });
      clearTimeout(overTime);
      animationTime = setTimeout(addAnimation, 100);
    }
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




  init();
});