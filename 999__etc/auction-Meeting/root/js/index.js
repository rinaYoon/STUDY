const redioSelect = document.querySelector(".slot-form--03 .select-list");
const consentButton = document.querySelectorAll(".slot-form--03 .radio-select input")[0];
const disagreeButton = document.querySelectorAll(".slot-form--03 .radio-select input")[1];

const dimdBg = document.querySelector(".event-alert .dimd");
const alertType = document.querySelectorAll(".event-alert .alert-type");

const alertClossButton = document.querySelectorAll(".event-alert .alert-link");

function consent(){
  redioSelect.addEventListener('click', function(e){
    alertCloss();

    if(e.target === consentButton){
      alertType[0].style = "";
      alertType[1].style.display = "none";
      
    }else if(e.target === disagreeButton){
      alertType[1].style = "";
      alertType[0].style.display = "none";
    }
  });
}

function alertCloss(){
  for (let i = 0; i < alertClossButton.length; i++) {
    alertClossButton[i].addEventListener('click', function(e){
      e.preventDefault();
      
      alertType[i].style.display = "none";
    });
  }
}


document.addEventListener("DOMContentLoaded",function(){
  consent();  
});