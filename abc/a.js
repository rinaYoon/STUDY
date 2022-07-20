
function aaa(){
for(i=0; i<test.length; i++){

  let txt = "";
  
  txt += test[i].name + " " + test[i].age + " " +
        test[i].address+ " " + test[i].height + "<br>";

  document.getElementById('demo').innerHTML = txt;
}
}

aaa();

//https://chlee21.tistory.com/119