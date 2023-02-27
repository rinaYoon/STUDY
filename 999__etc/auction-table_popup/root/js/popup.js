/*
해야하는거..

- NO. 갯수만큼 숫자표기 (OK)
- 체크박스 2개부터 item-button__once로 바뀜 (OK)

- .item-bundle : 사용가능, lable을 black변경, 체크버튼__desable을 none변경 (OK)
- .item-bundle__desable : 사용불가, lable을 none변경, 체크버튼__desable을 black변경 (OK)
- .item-bundle__used : 사용완료, lable을 none변경, 체크버튼__desable을 black변경 (OK)
- .item-bundle__typegroup : '그룹' 변경 + type-num 추가
*/


const bundleAll = document.querySelectorAll('[class^="area-"] .slot-item tbody [class^="item-bundle"]'); //tr 갯수

const number = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-number .number');

const checkButton = document.querySelectorAll('[class^="area-"] .slot-item tbody input[type="checkbox"]');
const itemButton = document.querySelectorAll('[class^="area-"] .division-coupon .item-button');
const itemButtonOnes = document.querySelectorAll('[class^="area-"] .division-coupon .item-button__once');

const bundleInit = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle');
const bundleInitStatus = document.querySelectorAll('[class^="area-"] .item-bundle .status');
const bundleInitLable = document.querySelectorAll('[class^="area-"] .item-bundle label');
const bundleInitType = document.querySelectorAll('[class^="area-"] .item-bundle .type');

const bundleDesable = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__desable');
const bundleDesableStatus = document.querySelectorAll('[class^="area-"] .item-bundle__desable .status');
const bundleDesableLable = document.querySelectorAll('[class^="area-"] .item-bundle__desable label');
const bundleDesableType = document.querySelectorAll('[class^="area-"] .item-bundle__desable .type');

const bundleUsed = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__used');
const bundleUsedStatus = document.querySelectorAll('[class^="area-"] .item-bundle__used .status');
const bundleUsedLable = document.querySelectorAll('[class^="area-"] .item-bundle__used label');
const bundleUsedType = document.querySelectorAll('[class^="area-"] .item-bundle__used .type');

const bundleTypegroup = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__typegroup');
const bundleTypegroupStatus = document.querySelectorAll('[class^="area-"] .item-bundle__typegroup .status');
const bundleTypegroupLable = document.querySelectorAll('[class^="area-"] .item-bundle__typegroup label');
const bundleTypegroupType = document.querySelectorAll('[class^="area-"] .item-bundle__typegroup .type');

let count = 0;

function couponInit(){
  for (let i = 0; i < bundleAll.length; i++) {
    numberIndex(i);
    itemCheckBox(i);
    itemStatus(i);
  }
}

function numberIndex(i){
  number[i].innerHTML= i+1;
}

function itemCheckBox(i){

  checkButton[i].addEventListener('click', function(){

    if(checkButton[i].checked === true){
      count ++;

      if(count > 1){
        itemButton[0].style.display = "none";
        itemButtonOnes[0].style.display = "block";
      }

    }else if(checkButton[i].checked === false){
      count --;

      if(count < 2){
        itemButton[0].style.display = "block";
        itemButtonOnes[0].style.display = "none";
      }
    }
  });
}

function itemStatus(i){
/*
bundleInit == bundleTypegroup  //속성비슷함(Type빼고)
bundleDesable == bundleUsed  //완전히같음

bundleTypegroup =/= bundleInit, bundleDesable, bundleUsed  //Type다름
*/

/*
이런 방법은 없나?

  const 이름1 = {
    init: bundleInit,
    Desable: bundleDesable,
    Used: bundleUsed,
    Typegroup: bundleTypegroup,
  };

  function 이름2(이름1추출){
    if(이름1추출[i] === true){ // <<근데 무엇에 대한 기준으로 true라고 하지?
    이름1추출Status[i].innerHTML='사용가능';
    이름1추출Lable[i].style.display = "block";
    이름1추출Lable[i].nextElementSibling.style.display = "none";
    이름1추출Type[i].innerHTML='일반';
    이름1추출Type[i].nextElementSibling.style.display = "none";

      if(만약에 bundleTypegroup 이라면){
        이름1추출Type[i].innerHTML='그룹';
        이름1추출Type[i].nextElementSibling.style.display = "block";
      }

    }else if(이름1추출[i] === false){
      이름1추출Status[i].innerHTML='사용불가';
      이름1추출Lable[i].style.display = "none";
      이름1추출Lable[i].nextElementSibling.style.display = "block";
      이름1추출Type[i].innerHTML='일반';
      이름1추출Type[i].nextElementSibling.style.display = "none";
    }
  }
*/
  if(bundleInit[i]){
    bundleInitStatus[i].innerHTML='사용가능';
    bundleInitLable[i].style.display = "block";
    bundleInitLable[i].nextElementSibling.style.display = "none";
    bundleInitType[i].innerHTML='일반';
    bundleInitType[i].nextElementSibling.style.display = "none";
  }

  if(bundleDesable[i]){
    bundleDesableStatus[i].innerHTML='사용불가';
    bundleDesableLable[i].style.display = "none";
    bundleDesableLable[i].nextElementSibling.style.display = "block";
    bundleDesableType[i].innerHTML='일반';
    bundleDesableType[i].nextElementSibling.style.display = "none";
  }

  if(bundleUsed[i]){
    bundleUsedStatus[i].innerHTML='사용완료';
    bundleUsedLable[i].style.display = "none";
    bundleUsedLable[i].nextElementSibling.style.display = "block";
    bundleUsedType[i].innerHTML='일반';
    bundleUsedType[i].nextElementSibling.style.display = "none";
  }

  if(bundleTypegroup[i]){
    bundleTypegroupStatus[i].innerHTML='사용가능';
    bundleTypegroupLable[i].style.display = "block";
    bundleTypegroupLable[i].nextElementSibling.style.display = "none";
    bundleTypegroupType[i].innerHTML='그룹';
    bundleTypegroupType[i].nextElementSibling.style.display = "block";
  }
}



document.addEventListener("DOMContentLoaded",function(){
  couponInit();
});
