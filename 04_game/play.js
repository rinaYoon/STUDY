$(document).ready(function(){

  // 이미지 반복
  var i = 0;
  var img = $('.system .tool img')

  var roopTime = setInterval(imgRoop, 100);

  function imgRoop(){
    img.hide();
    img.eq(i).show();
    i++;
    if(i >= img.length){
      i = 0;
    }
  }


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
    }
  }

  userButton.click(function() {
    userButtonControl.off();

    clearInterval(roopTime);

    setTimeout(function(){
      roopTime = setInterval(imgRoop, 100);
      userButtonControl.on();
      $('.text-box .text').text("가위! 바위! 보!");
      //위에 text 있는 이유 : 가위바위보 결과값 이후 기본멘트로 초기화
    },3000);
  });
  

  // 비교하기, 결과값을 폰트에 나타내기
  // (setTimeout의 시간안에 나오고 사라져야함)






























});