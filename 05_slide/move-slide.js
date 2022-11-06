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
    autoPlay();
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
    //slideNext();
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



  let dummy = true;

  function slidePrev(){

    /*
    
    $('.prev').on('click', function(){
      $('.wrap').css({left: -itemW});
      $('.wrap').prepend($('.item').last());
      $('.wrap').animate({left: 0});
    });

    */

    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;



    slideWrapper.prependChild(updateSlide[updateSlideLength - 1]);
    //이거 아니래 찾아보기



    // slideWrapper.style.transform = "translateX(" + -initPosition + "%)"

    // slideWrapper.addEventListener('transitionend', function(){
    //   removeAnimation();
    //   clearTimeout(addAnimation);

    //   slideWrapper.style.transform = "translateX(" + 0 + "%)";
    //   slideWrapper.prependChild(updateSlide[updateSlideLength - 1]);

    //   animationTime = setTimeout(addAnimation, 100);
    // });

    console.log(updateSlide[updateSlideLength - 1]);
  }

  function slideNext(){
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;


    slideWrapper.style.transform = "translateX(" + -initPosition + "%)"

    slideWrapper.addEventListener('transitionend', function(){
      if(dummy){
        removeAnimation();
        clearTimeout(addAnimation);

        slideWrapper.style.transform = "translateX(" + 0 + "%)";
        slideWrapper.appendChild(updateSlide[0]);

        animationTime = setTimeout(addAnimation, 100);
      }
    });
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