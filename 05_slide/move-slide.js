document.addEventListener("DOMContentLoaded",function(){ 

  let slideWrapper = document.querySelector('.slide-container .slide-wrapper'); // ul
  let slide = document.querySelectorAll('.slide-container .slide__item'); // li
  let slideLength = slide.length;
  let slideIndex = slideLength - 1;
  let userCount = 1;


  makeClone();


  function makeClone(){
    // li의 첫번째 부분만 클론(이전버튼용도)
    let firstSlideClone = slide[slideIndex].cloneNode(true);
    firstSlideClone.classList.add('prev-clone');
    slideWrapper.prepend(firstSlideClone);
    
    updateWidth();
    setPosition();

    setTimeout(function(){
      slideWrapper.classList.add('animation');
    }, 100);
  }


  function updateWidth(){
    // ul 전체 width길이 구함
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
  
    slideWrapper.style.width = "calc(100% *" + updateSlideLength + ")";
  }


  function setPosition(){
    // ul 초기포지션 세팅
    let updateSlide = document.querySelectorAll(".slide-container .slide__item");
    let updateSlideLength = updateSlide.length;
    let initPosition = 100 / updateSlideLength;
    
    slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
  }


  let movement = {
    prev: function(){
      let updateSlide = document.querySelectorAll(".slide-container .slide__item");
      let updateSlideLength = updateSlide.length;
      let initPosition = 100 / updateSlideLength;
      let updateSlideIndex = updateSlideLength - 1;

      userCount--;
      slideWrapper.style.transform = "translateX(" + -(initPosition * userCount) + "%)";

      if(userCount === -1){
        slideWrapper.style.transform = "translateX(" + -(initPosition * updateSlideIndex) + "%)";
        userCount = updateSlideIndex;
      }

      //console.log('slide : ' + initPosition * userCount , '             userCount : ' + userCount);
      console.log(userCount);
    },
    next: function(){
      let updateSlide = document.querySelectorAll(".slide-container .slide__item");
      let updateSlideLength = updateSlide.length;
      let initPosition = 100 / updateSlideLength;

      userCount++;      
      slideWrapper.style.transform = "translateX(" + -(initPosition * userCount) + "%)";

      if(userCount === updateSlideLength){
        slideWrapper.style.transform = "translateX(" + -initPosition + "%)";
        userCount = 1;
      }
      //console.log('slide : '+ initPosition * userCount , '             userCount : '+userCount);
    }
  }












  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");

  buttonWrap.addEventListener("click", function(e){

    if(e.target === prevButton){
      movement.prev();
    }else if(e.target === nextButton){
      movement.next();
    }
  });





































});