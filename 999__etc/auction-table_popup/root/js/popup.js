/*
해야하는거..

- NO. 갯수만큼 숫자표기 (OK)
- 체크박스 2개부터 item-button__once로 바뀜 (OK)

- 타입, 상태에 따라 사용부분이랑 그룹으로 바뀌는거
  - find대체용 찾기, 자식선택찾기
  - for또는 forEach 필요할듯

- .item-bundle : 사용가능, lable을 black변경, 버튼__desable을 none변경
- .item-bundle__desable : 사용불가, lable을 none변경, 버튼__desable을 black변경
- .item-bundle__used : 사용완료, lable을 none변경, 버튼__desable을 black변경
- .item-bundle__typegroup : '그룹' 변경 + type-num 추가
*/

let count = 0;


const number = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-number .number');
function numberIndex(){
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML= i+1;
  }
}

const checkButton = document.querySelectorAll('[class^="area-"] .slot-item tbody input[type="checkbox"]');
const itemButton = document.querySelectorAll('[class^="area-"] .division-coupon .item-button');
const itemButtonOnes = document.querySelectorAll('[class^="area-"] .division-coupon .item-button__once');
function itemCheckBox(){
  for (let i = 0; i < checkButton.length; i++) {

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
}







document.addEventListener("DOMContentLoaded",function(){
  numberIndex();
  itemCheckBox();
});



// appendChild(slide[0])