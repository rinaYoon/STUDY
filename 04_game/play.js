$(document).ready(function(){

  // 이미지 반복
  let i = 0;
  let a = 0;
  let images = $('.system .tool .system__img')

  let imgRoop = function(){
    images.hide();
    images.eq(i).show();
    a = i;
    i++;
    if(i >= images.length){
      i = 0;
    }
  }

  let roopTime = setInterval(imgRoop, 100);



  // 버튼, 버튼컨트롤(일시중지 표현)
  let userButton = $('.user .tool .tool__button');
  let userButtonControl = {
    off: function(){
      userButton.attr("disabled", "disabled");
      userButton.css("cursor", "default");
    },
    on: function(){
      userButton.removeAttr("disabled");
      userButton.css("cursor", "pointer");
    },
    cssBorderRemove: function(){
      userButton.removeClass('hover');
    }
  }

  //버튼호버기능
  userButton.mouseover(function(){
    userButtonControl.cssBorderRemove();
    $(this).addClass('hover');
  });
  userButton.mouseleave(function(){
    userButtonControl.cssBorderRemove();
  });



  // 버튼 클릭 이벤트 (클릭 후 3초 일시중지, 비교 후 결과)
  userButton.click(function() {

    let selectedButton = userButton.index(this);

    userButtonControl.off();
    clearInterval(roopTime);

    comparisonOfResults(selectedButton);

    setTimeout(reStart,3000);
    $(this).addClass('hover');
  });



  // 클릭한 버튼과 출력한 이미지 비교하기, 텍스트상태변화
  let textStatus = {
    init: function(){
      $('.text-box .text').text("가위! 바위! 보!");
    },
    win: function(){
      $('.text-box .text').text("이겼다!");
    },
    lost: function(){
      $('.text-box .text').text("졌다!");
    },
    tie: function(){
      $('.text-box .text').text("무승부다!");
    },
  }

  function comparisonOfResults(selectedButton){

    let userScissors = selectedButton == 0;
    let userRock = selectedButton == 1;
    let userPaper = selectedButton == 2;

    let systemScissors = a == 0;
    let systemRock = a == 1;
    let systemPaper = a == 2;

    if(userScissors){

      if(systemScissors){
        textStatus.tie();
      }else if(systemRock){
        textStatus.lost();
      }else if(systemPaper){
        textStatus.win();
      }

    }else if(userRock){
      
      if(systemScissors){
        textStatus.win();
      }else if(systemRock){
        textStatus.tie();
      }else if(systemPaper){
        textStatus.lost();
      }

    }else if(userPaper){
      
      if(systemScissors){
        textStatus.lost();
      }else if(systemRock){
        textStatus.win();
      }else if(systemPaper){
        textStatus.tie();
      }
    }
  }

  // switch문 (안됨)
  // function comparisonOfResults01(selectedButton){

  //   let userScissors = selectedButton == 0;
  //   let userRock = selectedButton == 1;
  //   let userPaper = selectedButton == 2;

  //   let systemScissors = a == 0;
  //   let systemRock = a == 1;
  //   let systemPaper = a == 2;

  //   switch (selectedButton) {

  //     case userScissors:
  //       switch (a) {
  //         case systemScissors:
  //           textStatus.tie();
  //           break;

  //         case systemRock:
  //           textStatus.lost();
  //           break;

  //         case systemPaper:
  //           textStatus.win();
  //           break;
  //       }
  //       break;

  //     case userRock:
  //       switch (a) {
  //         case systemScissors:
  //           textStatus.win();
  //           break;

  //         case systemRock:
  //           textStatus.tie();
  //           break;

  //         case systemPaper:
  //           textStatus.lost();
  //           break;
  //       }
  //       break;

  //     case userPaper:
  //       switch (a) {
  //         case systemScissors:
  //           textStatus.lost();
  //           break;

  //         case systemRock:
  //           textStatus.win();
  //           break;

  //         case systemPaper:
  //           textStatus.tie();
  //           break;
  //       }
  //       break;
    
  //   }
  // }



  //재시작
  function reStart(){
    roopTime = setInterval(imgRoop, 100);
    userButtonControl.on();
    userButtonControl.cssBorderRemove();
    textStatus.init();
  }
});