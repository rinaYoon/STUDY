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



  //버튼호버(CSS)
  userButton.mouseover(function(){
    userButtonControl.cssBorderRemove();
    $(this).addClass('hover');
  });
  userButton.mouseleave(function(){
    userButtonControl.cssBorderRemove();
  });



  // 버튼 클릭 이벤트 (클릭 후 3초 일시중지)
  userButton.click(function() {

    userButtonControl.off();
    $(this).addClass('hover');

    clearInterval(roopTime);

    setTimeout(function(){
      roopTime = setInterval(imgRoop, 100);
      userButtonControl.on();
      userButtonControl.cssBorderRemove();
      //가위바위보 결과값 이후 기본멘트로 초기화
      $('.text-box .text').text("가위! 바위! 보!");
    },3000);

    
    // 클릭한 버튼과 출력한 이미지 비교하기
    var selectedButton = userButton.index(this);

    if(selectedButton == 0){

      if(a == 0){
        $('.text').text('비겼다!');
      }else if(a == 1){
        $('.text').text('졌다!');
      }else if(a == 2){
        $('.text').text('이겼다!');
      }

    }else if(selectedButton == 1){
      
      if(a == 0){
        $('.text').text('이겼다!');
      }else if(a == 1){
        $('.text').text('비겼다!');
      }else if(a == 2){
        $('.text').text('졌다!');
      }

    }else if(selectedButton == 2){
      
      if(a == 0){
        $('.text').text('졌다!');
      }else if(a == 1){
        $('.text').text('이겼다!');
      }else if(a == 2){
        $('.text').text('비겼다!');
      }
    }
  });




});