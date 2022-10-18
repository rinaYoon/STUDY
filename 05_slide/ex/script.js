
let slides = document.querySelector('.slides'); //ul
let slide = document.querySelectorAll('.slides li'); //li
let slideCount = slide.length; //슬라이드 갯수
let currentIndex = 0; //좌우버튼 클릭했을때 현재 몇번째인지 용도
let slideWidth = 200; // li 크기값
let slideMargin = 30; // li 마진값
let prevButton = document.querySelector('.prev'); //이전버튼
let nextButton = document.querySelector('.next'); //다음버튼

makeClone();

//복사본만들기
//name.cloneNode(), name.cloneNode(true) << 엘리먼트복사, (true)하면 안의 자식요소까지 복사됨
// a.appendChild(b) << a 안의 맨 마지막에 b 를 넣겠다는거
// a.prepend(b) << a안의 맨 앞에 b를 넣음
function makeClone(){
  for(let i=0; i<slideCount; i++){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  for(let i = slideCount - 1; i >= 0; i--){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setPosition();

  // 가로길이계산 + 위치초기화 후 애니메이션 클래스생성
  // 0.1초(안보이게) 위치초기화무빙
  setTimeout(function(){
    slides.classList.add('animated');
  }, 100);
}

//가로길이 계산(클론포함)
function updateWidth(){
  let updateSlide = document.querySelectorAll('.slides li');
  let updateSlideCount = updateSlide.length;

  let newWidth = (slideWidth + slideMargin)*updateSlideCount - slideMargin + 'px';

  slides.style.width = newWidth;
}

//위치초기화
function setPosition(){
  let initTranslateValue = -(slideWidth + slideMargin)*slideCount;
  slides.style.transform = "translateX(" + initTranslateValue + "px)";
}

// 클릭할때 움직임
function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIndex = num;

  if(currentIndex === slideCount || currentIndex === -slideCount){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIndex = 0;
    }, 500);
    setTimeout(function(){
      slides.classList.add('animated');
    }, 600);
  }

  console.log('currentIndex : ' + currentIndex, 'slideCount : ' + slideCount);
}

// 이전
prevButton.addEventListener('click', function(){
  moveSlide(currentIndex - 1);
});

// 다음
nextButton.addEventListener('click', function(){
  moveSlide(currentIndex + 1);
});