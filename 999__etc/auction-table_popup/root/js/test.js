/*
~~~~~~~~~~~~~~ 연  습  장  ~~~~~~~~~~~~~~~~~~~~~~

bundleInit == bundleTypegroup  //속성비슷함(Type빼고)
bundleDesable == bundleUsed  //완전히같음
bundleTypegroup =/= bundleInit, bundleDesable, bundleUsed  //Type다름



이런 방법은 없나?
=> 성립이 안됨. 지금 i는 bundleAll(tr태그)의 갯수를 말하고 있음.
그러므로 이름1.[i].[i] 는 변수를 가리키지 않음.


  const 이름1 = {
    그룹1: {
      init: bundleInit,
      Typegroup: bundleTypegroup,
    },
    그룹2: {
      Desable: bundleDesable,
      Used: bundleUsed,
    },
  };

  function 이름2(이름1, i){
    if(이름1.[i].[i]이 그룹1에 속한다면){
    이름1.[i].[i] + 'Status'[i].innerHTML='사용가능';
    이름1.[i].[i] + 'Lable'[i].style.display = "block";
    이름1.[i].[i] + 'Lable'[i].nextElementSibling.style.display = "none";
    이름1.[i].[i] + 'Type'[i].innerHTML='일반';
    이름1.[i].[i] + 'Type'[i].nextElementSibling.style.display = "none";

      if(이름1.그룹1.Typegroup){
        이름1.[i].[i] + 'Type'[i].innerHTML='그룹';
        이름1.[i].[i] + 'Type'[i].nextElementSibling.style.display = "block";
      }

    }else if(이름1.[i].[i]이 그룹2에 속한다면){
      이름1.[i].[i] + 'Status'[i].innerHTML='사용불가';
      이름1.[i].[i] + 'Lable'[i].style.display = "none";
      이름1.[i].[i] + 'Lable'[i].nextElementSibling.style.display = "block";
      이름1.[i].[i] + 'Type'[i].innerHTML='일반';
      이름1.[i].[i] + 'Type'[i].nextElementSibling.style.display = "none";
    }
  }



  const test = {
  group1: {
    init: bundleInit,
    Typegroup: bundleTypegroup,
  },
  group2: {
    Desable: bundleDesable,
    Used: bundleUsed,
  },
};

// 이름1.[i].[i]이 그룹1에 속한다면
if(test.group1.init === bundleInit){
  console.log('이게되네');
}














*/