/*
해야하는거..

- NO. 갯수만큼 숫자표기 (OK)
- 체크박스 2개부터 item-button__once로 바뀜 (OK)

- 타입, 상태에 따라 사용부분이랑 그룹으로 바뀌는거
  - find대체용 찾기, 자식선택찾기
  - for또는 forEach 필요할듯

- .item-bundle : 사용가능, lable을 black변경, 체크버튼__desable을 none변경
- .item-bundle__desable : 사용불가, lable을 none변경, 체크버튼__desable을 black변경
- .item-bundle__used : 사용완료, lable을 none변경, 체크버튼__desable을 black변경
- .item-bundle__typegroup : '그룹' 변경 + type-num 추가
*/


const bundleAll = document.querySelectorAll('[class^="area-"] .slot-item tbody [class^="item-bundle"]');

const bundleInit = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle');
const bundleDesable = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__desable');
const bundleUsed = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__used');
const bundleTypegroup = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-bundle__typegroup');

const number = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-number .number');

const checkButton = document.querySelectorAll('[class^="area-"] .slot-item tbody input[type="checkbox"]');
const itemButton = document.querySelectorAll('[class^="area-"] .division-coupon .item-button');
const itemButtonOnes = document.querySelectorAll('[class^="area-"] .division-coupon .item-button__once');

let count = 0;

function couponInit(){
  for (let i = 0; i < bundleAll.length; i++) {
    numberIndex(i);
    itemCheckBox(i);

    // 만약 bundleInit 가 있다면
    if(bundleInit[i]){
      // innerHTML = '사용가능'
      // lable을 black변경, 체크버튼__desable을 none변경
    }
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







document.addEventListener("DOMContentLoaded",function(){
  couponInit();
});



// appendChild(slide[0])