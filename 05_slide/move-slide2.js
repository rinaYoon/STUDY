document.addEventListener("DOMContentLoaded",function(){


  let count = 0;
  let duration = 3000;


  const slideWrapper = document.querySelector(".slide-container .slide-wrapper");
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


  let autoSlide = setInterval(movement.next, duration);


  function stopAndReSet(){
    clearInterval(autoSlide);
    setTimeout(reStart,duration);

    function reStart(){
      clearTimeout(autoSlide);
      autoSlide = setInterval(movement.next, duration);
    }
  }



  const buttonWrap = document.querySelector(".slide-container .slide-controls");
  const prevButton = document.querySelector(".slide-container .button__prev");
  const nextButton = document.querySelector(".slide-container .button__next");

  buttonWrap.addEventListener("click", function(e){

    stopAndReSet();

    if(e.target === prevButton){
      movement.prev();
    }else if(e.target === nextButton){
      movement.next();
    }
  });



});