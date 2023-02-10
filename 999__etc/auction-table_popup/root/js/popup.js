
const itemPossible = document.querySelector('[class^="area-"] .slot-item tbody .item-bundle .status');
const itemDesable = document.querySelector('[class^="area-"] .slot-item tbody .item-bundle__desable .status');
const itemUsed = document.querySelector('[class^="area-"] .slot-item tbody .item-bundle__used .status');
const itemGroup = document.querySelector('[class^="area-"] .slot-item tbody .item-bundle__typegroup .item-type');

function itemStatus(){
  if(itemPossible){
    itemPossible.innerHTML="사용가능";
    // 체크불가한 체크박스 원상태로
  }

  if(itemDesable){
    itemDesable.innerHTML="사용불가";
    // 체크박스 막기
  }

  if(itemUsed){
    itemUsed.innerHTML="사용완료";
    // 체크박스 막기
  }

  if(itemGroup){
    // 타입 일반 -> 그룹 바꾸기
    // 그룹에 엘리먼트 추가하기 (<span class="type-num">0</span>)
  }
}


document.addEventListener("DOMContentLoaded",function(){
  itemStatus();
});



// appendChild(slide[0])