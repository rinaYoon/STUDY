const infoText = document.querySelector(".section-info .text");
const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");
const accountInput = document.querySelector("#account");
const mapCodeInput = document.querySelector("#mapCode");

let loginAccount = ["aaa", "bbb", "ccc", "ddd", "eee"];
let mapLink = ["map-test", "map-test02"];

function loginCheck(){
  if (loginAccount.includes(accountInput.value)) {
    mapCheak();

  }else{
    if(accountInput.value === ""){
      alert("계정을 입력하십시오.");
    }else{
      alert("계정이 일치하지 않습니다.");
    }
  }
}

function mapCheak(){
    if (mapLink.includes(mapCodeInput.value)) {
      addMapLink();

    }else{
      if(mapCodeInput.value === ""){
        alert("코드를 입력하십시오.");
      }else{
        alert("코드가 일치하지 않습니다.");
      }
    }
}

function addMapLink(){
  loginForm.setAttribute("action", "../map/"+mapCodeInput.value+".html");
  infoText.innerHTML = `계정 및 코드가 확인되었습니다...<br>접속하기 버튼을 눌러 이동하십시오.`;
  submitButton.innerText = "접속하기";
  loginForm.removeEventListener("submit", addButtonEvent);
}

function addButtonEvent(event){
  event.preventDefault();
  loginCheck();
}

loginForm.addEventListener("submit", addButtonEvent);