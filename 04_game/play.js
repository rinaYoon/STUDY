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
  var userButtonSet = {
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
    userButtonSet.off();
    clearInterval(roopTime);
    setTimeout(function(){
      roopTime = setInterval(imgRoop, 100);
      userButtonSet.on();
    },2000);
  });
  






























});