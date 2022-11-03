const resultText = {
  init: "가위! 바위! 보!",
  win: "이겼다!",
  lost: "졌다!",
  tie: "무승부다!",
};

let systemState = null;
let state = null;
let loopTimer = null;
let restartTimer = null;
let roopDuration = 100;
let restartDelay = 3000;
let imgLoopCouter = 0;
let played = false;

function init() {
  // 1. state 값을 설정 한다.
  state = "init"; //output확인

  output();

  // 2. 이미지 루프를 실행한다.
  start();
}

function start() {
  played = true;
  const images = $(".system .tool .system__img");

  loopTimer = setInterval(function () {
    loopImg(images);
  }, roopDuration);
}

function stop() {
  played = false;
  clearInterval(loopTimer);
}

function restart() {
  clearTimeout(restartTimer);
  restartTimer = setTimeout(start, restartDelay);
}

function loopImg(images) {
  // **이미지 루프 동작
  images.hide(); //images는 start에있음
  images.eq(imgLoopCouter).show();

  systemState = imgLoopCouter;

  imgLoopCouter++;
  if (imgLoopCouter >= images.length) {
    imgLoopCouter = 0;
  }
}

function result(index) {
  // 클릭한 버튼과 출력한 이미지 비교하기

  let userScissors = index == 0; //변수 index는 if문의 변수 played 안에 지정되어있다 (옮겨담기인듯)
  let userRock = index == 1;
  let userPaper = index == 2;

  let systemScissors = systemState == 0;
  let systemRock = systemState == 1;
  let systemPaper = systemState == 2;

  if (userScissors) {
    if (systemScissors) {
      state = "tie";
    } else if (systemRock) {
      state = "lost";
    } else if (systemPaper) {
      state = "win";
    }
  } else if (userRock) {
    if (systemScissors) {
      state = "win";
    } else if (systemRock) {
      state = "tie";
    } else if (systemPaper) {
      state = "lost";
    }
  } else if (userPaper) {
    if (systemScissors) {
      state = "lost";
    } else if (systemRock) {
      state = "win";
    } else if (systemPaper) {
      state = "tie";
    }
  }

  output();
}

function output() {
  $(".text-box .text").text(resultText[state]); //문자열로 안가게 []로 함
}

const userButton = $(".user .tool .tool__button");
userButton.click(function () {
  // 버튼 클릭 이벤트 (클릭 후 3초 일시중지, 비교 후 결과)
  if (played) {
    const index = $(this).index();
    stop(); //played = false;로 해서 버튼이 눌려도 아무반응x
    result(index); // 변수 index -> 파라미터로 지정
    restart();
  }
});

init();
