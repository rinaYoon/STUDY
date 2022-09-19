$(document).ready(function(){

  // 이미지 반복
  var i = 0;
  var images = $('.system .tool .system__img')

  var imgRoop = function(){
    images.hide();
    images.eq(i).show();
    i++;
    if(i >= images.length){
      i = 0;
    }
  }

  var roopTime = setInterval(imgRoop, 100);

  console.log();


  // 버튼을 클릭하면 3초 반복이미지 중단
  var userButton = $('.user .tool .tool__button');
  var userButtonControl = {
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

  userButton.click(function() {
    userButtonControl.off();

    clearInterval(roopTime);

    setTimeout(function(){
      roopTime = setInterval(imgRoop, 100);
      userButtonControl.on();
      userButtonControl.cssBorderRemove();
      //가위바위보 결과값 이후 기본멘트로 초기화
      $('.text-box .text').text("가위! 바위! 보!");
    },3000);

    
    // 클릭한 버튼과 출력한 이미지 비교하기
    if(userButton.index(this) == 0){
      $('.text').text('가위 누름');
      //만약에 현재 노출되고있는 이미지가 이미지index값 이라면
      //이미지의 index값을 구해야함
    }else if(userButton.index(this) == 1){
      $('.text').text('바위 누름');
    }else if(userButton.index(this) == 2){
      $('.text').text('보 누름');
    }

  });



  //버튼호버
  userButton.mouseover(function(){
    userButtonControl.cssBorderRemove();
    $(this).addClass('hover');
  });
  userButton.mouseleave(function(){
    userButtonControl.cssBorderRemove();
  });

















});