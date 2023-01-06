const redioSelect = document.querySelector(".slot-form--03 .select-list");
const consentButton = document.querySelectorAll(".slot-form--03 .radio-select input")[0];
const disagreeButton = document.querySelectorAll(".slot-form--03 .radio-select input")[1];
const dimdBg = document.querySelector(".division-alert .dimd");
const alertType = document.querySelectorAll(".division-alert .alert-type");

function consent(){
  redioSelect.addEventListener('click', function(e){
    dimd();

    if(e.target === consentButton){
      alertType[0].style = "";
      alertType[1].style.display = "none";
      
    }else if(e.target === disagreeButton){
      alertType[1].style = "";
      alertType[0].style.display = "none";
    }
  });
}

function dimd(){
  dimdBg.style = "";
}

document.addEventListener("DOMContentLoaded",function(){
  consent();
});