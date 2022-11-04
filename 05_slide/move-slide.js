document.addEventListener("DOMContentLoaded",function(){ 

  let slideWrapper = document.querySelector('.slide-container .slide-wrapper');
  let slide = document.querySelectorAll('.slide-container .slide__item');
  let slideLength = slide.length;
  let slideIndex = slideLength - 1;
  let userCount = 0;
  let duration = 3000;
  let restartTimer = null;
  let autoTimer = null;
  let animationTime = null;
  let played = true;
  let playedTimer = null;


  function init(){
    animationTime = setTimeout(addAnimation, 100);
    //autoPlay();
    updateWidth();
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


  // ~~~~~~ 할거 ~~~~~~
  // 클론 지우고 prev, next 기능에 첫번째 슬라이드를 끝으로 이동하는거 추가하기
  // 이동하는방법 알아보기, append, prepend, after, before 도 알아보기
  
  /* 봉인 
  function makeClone(){
    let firstSlideClone = slide[slideIndex].cloneNode(true);
    firstSlideClone.classList.add('prev-clone');
    slideWrapper.prepend(firstSlideClone);
    
    updateWidth();
    setPosition();
  }

  function setPosition(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;
    
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
  }
  */

  function updateWidth(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
  
    slideWrapper.style.width = "calc(100% *" + updateSlideLength + ")";
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

    let slideOne = document.querySelector('.slide01');

    //userCount++;      
    //slideWrapper.style.transform = "translateX(" + -(initPosition * userCount) + "%)";
    slideWrapper.appendChild(updateSlide[0]);




    // slideWrapper.addEventListener('transitionend', function(){
    //   if(userCount === updateSlideIndex){
    //     slideWrapper.appendChild(slideOne);
    //     pause();
    //   }
    // });


    // slideWrapper.addEventListener('transitionend', function(){
    
      // if(userCount === updateSlideLength){
      //   slideWrapper.prepend(appendSlide);

      //   userCount = 0;
      //   slideWrapper.style.transform = "translateX(" + 0 + "%)";
        
      //   removeAnimation();
      //   clearTimeout(animationTime);
      //   animationTime = setTimeout(addAnimation, 100);
      // }
    // });
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