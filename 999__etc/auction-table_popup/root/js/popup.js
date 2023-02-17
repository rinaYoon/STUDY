/*
해야하는거..

- NO. 갯수만큼 숫자표기 (OK)
- 체크박스 2개부터 item-button__once로 바뀜

- 타입, 상태에 따라 사용부분이랑 그룹으로 바뀌는거
  - find대체용 찾기, 자식선택찾기
  - for또는 forEach 필요할듯

- item-bundle : 쿠폰상태 문구 사용가능으로 변경, 체크박스 checked onclick="return false;" 삭제

- __desable : 쿠폰상태 문구 '사용불가'변경, 체크버튼 checked onclick="return false;" 추가
- __used : 쿠폰상태 문구 '사용완료'변경, 체크버튼 checked onclick="return false;" 추가
- __typegroup : 쿠폰타입 문구 '그룹'변경 + type-num 추가
*/

const number = document.querySelectorAll('[class^="area-"] .slot-item tbody .item-number .number');
function numberIndex(){
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML= i+1;
  }
}





document.addEventListener("DOMContentLoaded",function(){
  numberIndex();
});



// appendChild(slide[0])