// ~ 디벨롭 하기 전에 있던 것들 ~


//[1]--------------------------------------------------------------------
/*
  ~ css에 slide-wrapper가 transform: translateX(); 움직이는지 확인 ~

  1. 버튼 클릭 할때마다 슬라이드 오른쪽, 왼쪽 가게 하기 
  2. 오토슬라이드 (일정 시간 마다 자동으로 우 방향으로 이동)
    - 셋 인터벌
  3. 오토슬라이드 중에 버튼을 누르면 일시멈추고 다시 슬라이드 시작
  
  */


  const slideButton = $('.slide-container .botton');
  const slideWrapper = $('.slide-container .slide-wrapper');
  const slideLength = $('.slide-container .slide__item').length;
  let count = 0;
  let duration = 3000;
  let slideAmount = slideLength - 1;


  //슬라이드 증가
  function slideIncrease(){
    count++;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count > slideAmount){
      slideWrapper.css({"transform" : "translateX(-" + 0 + "00vw)" });
      count = 0;
    }
  }

  //슬라이드 감소
  function slideDecrease(){
    count--;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count == -1){
      slideWrapper.css({"transform" : "translateX(-" + slideAmount + "00vw)" });
      count = slideAmount;
    }
  }


  // 오른쪽으로 자동이동
  // let autoSlide = function(){
  //   slideIncrease();
  // }
  let autoTimer = setInterval(slideIncrease, duration);


  //클리어 후 재시작
  function timeReSet(){
    clearInterval(autoTimer);
    setTimeout(reStart,duration);

    function reStart(){
      clearTimeout(autoTimer);
      autoTimer = setInterval(slideIncrease, duration);
    }
  }


  //버튼클릭 - 클리어 후 재시작, 이전+다음 기능추가
  slideButton.click(function(){
    let thisButton = slideButton.index(this);

    timeReSet();

    if(thisButton === 0){
      slideDecrease();
    }else if(thisButton === 1){
      slideIncrease();
    }
  });


//[2]-------------------------------------------------------------


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
  restartTimer = setTimeout(autoPlay, duration);
}

function repetition(){
  movement.next();
}

const slideWrapper = $('.slide-container .slide-wrapper');
const slideLength = $('.slide-container .slide__item').length;
const slideAmount = slideLength - 1;
let movement = {
  next: function(){
    count++;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count > slideAmount){
      slideWrapper.css({"transform" : "translateX(-" + 0 + "00vw)" });
      count = 0;
    }
  },
  prev: function(){
    count--;
    slideWrapper.css({"transform" : "translateX(-" + count + "00vw)" });

    if(count == -1){
      slideWrapper.css({"transform" : "translateX(-" + slideAmount + "00vw)" });
      count = slideAmount;
    }
  }
}


const slideButton = $('.slide-container .botton');
slideButton.click(function(){
  let thisButton = slideButton.index(this);

  pause();
  rePlay();

  if(thisButton === 0){
    movement.prev();
  }else if(thisButton === 1){
    movement.next();
  }
});


//[2(바닐라버전)]-------------------------------------------------------------

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


// [3]-------------------------------------------------------------------------------------------------

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
