/*
~~~~~~~~~~~~~~ 연  습  장  ~~~~~~~~~~~~~~~~~~~~~~


해야하는거..

- NO. 갯수만큼 숫자표기 (OK)
- 체크박스 2개부터 item-button__once로 바뀜 (OK)

- .item-bundle : 사용가능, lable을 black변경, 체크버튼__desable을 none변경 (OK)
- .item-bundle__typegroup : '그룹' 변경 + type-num 추가

- .item-bundle__desable : 사용불가, lable을 none변경, 체크버튼__desable을 black변경 (OK)
- .item-bundle__used : 사용완료, lable을 none변경, 체크버튼__desable을 black변경 (OK)




bundleInit == bundleTypegroup  //속성비슷함(Type빼고)
bundleDesable == bundleUsed  //완전히같음
bundleTypegroup =/= bundleInit, bundleDesable, bundleUsed  //Type다름



이런 방법은 없나?

  function itemStatus(i){

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
    →성립이 안됨. 지금 i는 bundleAll(tr태그)의 갯수를 말하고 있음.
    그러므로 이름1.[i].[i] 는 변수 이름1을 가리키지 않음.

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




---------------------------------------------------------



    //const 이름1 = [bundleInit, bundleTypegroup, bundleDesable, bundleUsed]

    const 이름1 = [bundleInit, bundleTypegroup]
    const 이름2 = [bundleDesable, bundleUsed]

    //console.log(이름1[i]); //다 잘나오는데 3개가 남음 → for문돌려서 남는거

    ~ 변수 + 문자열 = 변수 같은건 없나? ~
예) 이름1[i][i] + "Status" + [i] = 하면
bundleInitStatus[i] 또는 bundleTypegroupStatus[i] 가 되는거 <<이거는안됨



    if(이름1[i]){
    이름1[i] + 'Status'[i].innerHTML='사용가능';
    이름1[i] + 'Lable'[i].style.display = "block";
    이름1[i] + 'Lable'[i].nextElementSibling.style.display = "none";
    이름1[i] + 'Type'[i].innerHTML='일반';
    이름1[i] + 'Type'[i].nextElementSibling.style.display = "none";

      if(Typegroup){
        이름1[i] + 'Type'[i].innerHTML='그룹';
        이름1[i] + 'Type'[i].nextElementSibling.style.display = "block";
      }

    }else if(이름2[i]){
      이름2[i] + 'Status'[i].innerHTML='사용불가';
      이름2[i] + 'Lable'[i].style.display = "none";
      이름2[i] + 'Lable'[i].nextElementSibling.style.display = "block";
      이름2[i] + 'Type'[i].innerHTML='일반';
      이름2[i] + 'Type'[i].nextElementSibling.style.display = "none";
    }
  }



---------------------------------------------------------



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

if(test.group1.init === bundleInit){
  console.log('이게되네');
}

// 이상하게됨
  const 이름1 = [bundleInit, bundleTypegroup]
  const 이름2 = [bundleDesable, bundleUsed]

  이름1[0][0].style.backgroundColor = "Tomato";











*/