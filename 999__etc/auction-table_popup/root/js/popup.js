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
  }

  if(bundleUsed[i]){
    bundleUsedStatus[i].innerHTML='사용완료';
    bundleUsedLable[i].style.display = "none";
    bundleUsedLable[i].nextElementSibling.style.display = "block";
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