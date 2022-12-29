document.addEventListener("DOMContentLoaded",function(){
  init();
});
  
  // 랜덤, 랜덤한갯수, 랜덤한 인덱스, 그럴려면 array를 해야함, array를 인덱스 순서로 만들고 거기러 랜덤 인덱스를 뽑아서 그 값에 맞는 트렌스폼을 조절
  // https://velog.io/@hyowon_lee/JavaScript-transitionend-%EC%9D%B4%EB%B2%A4%ED%8A%B8 


  const faceWrap = document.querySelector('.face .face-list');
  const face = document.querySelectorAll('.face .face-list .list__item');
  let faceLength = face.length;
  let faceIndex = faceLength - 1;

  const eyeWrap = document.querySelector('.eye .eye-list');
  const eye = document.querySelectorAll('.eye .eye-list .list__item');
  let eyeLength = eye.length;
  let eyeIndex = eyeLength - 1;

  const mouthWrap = document.querySelector('.mouth .mouth-list');
  const mouth = document.querySelectorAll('.mouth .mouth-list .list__item');
  let mouthLength = mouth.length;
  let mouthIndex = mouthLength - 1;

  const randomButton = document.querySelector('.button-wrap button');

  let click = true;
  let clickTimer = null;



  function init(){
    setWidth();
  }

  function addAni(){
    faceWrap.classList.add('is__animation');
    eyeWrap.classList.add('is__animation');
    mouthWrap.classList.add('is__animation');
  }

  function removeAni(){
    faceWrap.classList.remove('is__animation');
    eyeWrap.classList.remove('is__animation');
    mouthWrap.classList.remove('is__animation');
  }

  function setWidth(){
    faceWrap.style.width = 'calc(100% *'+ faceLength +')';
    eyeWrap.style.height = 'calc(100% *'+ faceLength +')';
    mouthWrap.style.height = 'calc(100% *'+ faceLength +')';
  }



  function faceSetMove(){
    let randomCount = Math.floor(Math.random() * faceLength);
    faceWrap.style.transform = 'translateX('+ -(100 / faceLength * randomCount) +'%)';
  }

  function eyeSetMove(){
    let randomCount = Math.floor(Math.random() * faceLength);
    eyeWrap.style.transform = 'translateY('+ -(100 / faceLength * randomCount) +'%)';
  }

  function mouthSetMove(){
    let randomCount = Math.floor(Math.random() * faceLength);
    mouthWrap.style.transform = 'translateY('+ -(100 / faceLength * randomCount) +'%)';
  }



  randomButton.addEventListener('click', function(){
    if(click === true){
      click = false;
      clickTimer = setTimeout(function(){
        click = true;
        clearTimeout(clickTimer);
      } ,1500);

      addAni();
      faceSetMove();
      eyeSetMove();
      mouthSetMove();
    }
  });

