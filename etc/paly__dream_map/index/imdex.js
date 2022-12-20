// document.addEventListener("DOMContentLoaded", function(){

// });

const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");
const accountInput = document.querySelector("#account");
const mapCodeInput = document.querySelector("#mapCode");

let loginAccount = ["aaa", "bbb", "ccc", "ddd", "eee"];
let mapLink = ["map-test.html", "map-test02.html"]

/*
  1. input에서 입력한 value값이 위의 array안에 있는 값중 1개라도 일치하다면 addMapLink(); 함수실행.
  2. 그 외에 input에서 입력한 value값이 하나도 다 안맞으면 alert 뜸.(마지막에한번만)

  문제 1. 첫번째값 ("aaa")는 무조건 잘 되지만,
  두번째값부터 ("bbb" ~ "eee") 입력하면 alert가 뜸.

  문제 2. else 부분을
  else if(!accountInput.value == loginAccount[i]) 이걸로 바꾼 후 위의 array가 아닌
  다른 걸로 입력 시 alert가 뜨지 않음.

*/

function loginCheck(){ 
  for (let i = 0; i < loginAccount.length; i++) {

    //문제 1
    // if (accountInput.value == loginAccount[i]) {
    //   addMapLink();
    //   return;

    // }else{
    //   alert('계정이 일치하지 않습니다.');
    //   return;
    // }

    //문제 2
    if (accountInput.value == loginAccount[i]) {
      addMapLink();
      return;

    }else if(!accountInput.value == loginAccount[loginAccount.length - 1]){
      alert('계정이 일치하지 않습니다.');
      return;
    }
  }
}

function addMapLink(){
  for (let i = 0; i < mapLink.length; i++) {
    if (mapCodeInput.value == mapLink[i]) {
      alert(mapCodeInput.value);
      return;
    }else{
      alert('코드가 일치하지 않습니다.');
      return;
    }
  }
}

loginForm.addEventListener("submit", function(event){
  event.preventDefault();
  loginCheck();
});