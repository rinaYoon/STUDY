# WAI-ARIA

* [role 속성 모음 바로가기](role.md)
* [Property + State 모음 바로가기](aria.md) 

<br>

* * *

<br>

## ✨잘 쓰일것 같은 role + aria-* 모음
* `role="tablist | tab | tabpanel"`
  - tablist: 탭 리스트 (ul같은거)
  - tab: 탭 (li같은거)
  - tabpanel: 탭 판넬(탭의 내용물(따로떨어져있을때))
* `role="tooltip"`: 툴팁
* `role="alert"`: 알럿(경고창)
* `role="alertdialog"`: 알럿 대화상자
* `role="dialog"`: 대화상자
* `nav, role="navigation"`: 탐색
* `aside, role="complementary"`: 보충
* `role="none 또는 presentation"`: 의미 없음
* SET) `aria-label="한글로적어도댐"`: 간결한 설명
* SET) `aria-labelledby="ID, reference, list"`: 간결한 설명 참조
* SET) `aria-describedby="ID, reference, list"`: 자세한 설명 참조
* `aria-current="token"`: 현재 상태
* `aria-selected="true | false | undefined"`: 선택 상태
* `aria-haspopup="token"`: 팝업 상태
* `aria-expanded="true | false | undefined"`: 확장 상태
* `aria-pressed="tristate"`: 눌림 상태
* `aria-hidden="true | false | undefined"`: 숨김 상태
* `aria-controls="ID 또는 reference 또는 list"`: 제어 대상(컨트롤러)
* `aria-live="token"`: 실시간
* `aria-modal="true | false"`: 모달

<br>

* * *

<br>

## 왜 생겼는지 궁금할까봐 써놓은것
HTML 요소는 키보드지원(select), 초점지원(a, input)등 접근성 기능을 제공하고 그 요소를 활용해왔지만  
'(팝업, 탭메뉴 같은) 특정 콘텐츠' 작업에 있어서 HTML만으로는 무리가 있다.  
또 이런 컨텐츠들은 표준화 된 요소가 없기때문에  
단순히 DIV로 팝업을 만들고 탭메뉴를 ul > li등으로 만들어서인지 이런 컨텐츠에 맞는 규격화된 요소가 없다.   
(특히 화면낭독기는 이게 뭐에 쓰이는 UI인지 자세하게 말해주지 않으니께)

그래서 이렇게 UI를 날먹하지 않고 더 자세하게 규격화 해주는게 WAI-ARIA이다.  

* ARIA는 W3C에 의해 제정된 RIA의 웹 접근성에 대한 표준 기술 규격을 의미하며 HTML에 추가할 수 있는 속성이다.
  >RIA(Rich Internet Applications)란?  
  정적인 HTML과 단순한 자바스크립트 환경의 웹이 아닌 동적인 자바스크립트와 Ajax와 같은 기술을 사용한 환경에서 수준높은 UX(사용자경험)을 제공하는 웹 어플리케이션
* ARIA는 화면낭독기와 같은 보조기술들에 접근성을 향상 시킨다. 
* HTML5가 안먹히는 환경에선 이걸 쓰는게 더 짱일듯.
* 할 수 있는 태그 기능이 있음에도 부득이하게 다른 역활이 주어졌을때 사용할 수 있음(근데 이건 최후의수단)

ARIA는 `role, Property, State`총 3가지로 정의 할 수 있다. 

<br>

* * *

<br>

## WAI-ARIA 종류 3가지
### 💁‍♀️ role
[role 속성 모음 바로가기](role.md)
* 역할을 의미한다.  
* UI(+엘리먼트)에 특정 컴포넌트의 역할을 정의한다.
* 역할을 부여하여 사용자에게 정보를 제공
* 부여된 역할은 동적으로 변경할 수 없다.
* HTML 5가 어려운 환경에선 역활이 쓸만할수도.

예를들어 만약 (btn태그가 있음에도 불구하고) a 링크로 버튼을 만들게 될 때  
`role` 속성을 이용해 button 으로 읽어줄 수 있게(인식) 하거나,

HTML5 를 사용할 수 없는 환경에선 이렇게 역할을 정의할 수 있다.
```html
<a href="" role="button">팝업여는 버튼</a>
<div class="header" role="header"></div>
```
role은 아래의 카테고리로 분류되고 따른다.
- Abstract Roles
- Widget Roles
- Document Structure Roles
- Landmark Roles
- Live Region Roles
- Window Roles

<br>

### 💁‍♀️ Property
[Property + State 모음 바로가기](aria.md)
* 속성(특징이나 상황)을 의미한다.
* 해당 컴포넌트에 속성명으로 aria-?? 라는 접두사를 사용 또는 정의한다.

읽기 전용인지, 필수 항목인지, 사용자 입력에 대해 자동완성 기능을 지원할 것인지, 드래그가 가능한지, 팝업이 뜨는지, 업데이트된 정보가 있는지.. 등의 상황을 사용자가 인지할 수 있도록 한다.

예를들어 input 창으로 아이디 입력란을 만들었는데 반드시 입력해야하는 필수항목이다. 그래서 
`aria-required` 속성을 이용해서  
'필수로 입력해야하는 폼'으로 인식하고 사용자에게 전달할 수 있다.
```html
<label for="id">아이디</label>
<input type="text" id="id" aria-required="true">
```
> **Property 속성들**
> - aria-`readonly`: 읽기 전용인지 여부
> - aria-`haspopup`: 팝업 뜨는지 여부
> - aria-`required`: 필수 항목 여부
> - aria-`live`: 업데이트 여부
> - aria-`autocomplete`: 자동완성 기능 지원 여부
> - aria-`grabbed`: 드래그 가능 여부

<br>

### 💁‍♀️ State
* 현재상태를 정의한다.
* 해당 컴포넌트의 상태 정보를 정의, 제공한다.

예를들어 열림/닫힘 기능을 가진 버튼이 있는데,  
이걸 클릭하기전에 이 열림 내용이 이미 열려있는지 닫혀있는지 상태를 알려줄 수 있다.
```html
<button aria-expanded="true">열기</button>
<div>열은 내용</div>

<button aria-expanded="false">닫혀있음</button>
```

> **State 속성들**
> - aria-`expanded`: 확장된(펼쳐진,열린) 상태인가?
> - aria-`invaild`: 적절하지 못한 값이 입력되었는가?
> - aria-`hidden`: 콘텐츠가 숨김 상태인가?
>    - 시각적뿐만 아니라 의미적으로도 숨겨지므로 사용자에게 '시각적으로만 안보이게'할 경우 사용ㄴㄴ

<br>

## 주의할점
* WAI-ARIA속성 지원하는 스크린 리더기 잘 봐야한다.
  - '센스리더'는 아예 지원 안함
  - 'JAWS', 'JAWS for Windows'는 Speech Verbosity를 Beginner이나   
    Intermediate으로 레벨이 조정되어 있어야만 해당 속성을 지원함
  - 'NVDA' 지원 가능
* 올바르고 의미있는 HTML요소를 사용하는것을 목표로 작업을 해야한다. (a태그에 role="button"부터가 별로임)
* HTML5의 시맨틱 태그와 비슷한 역할을 쓰지 않는다.
* 키보드 사용 보장되게 `tabindex`를 사용한다.
  * `tabindex`: 포커스오게 유도함. 포커스가 안오는 div나 span에 role="button"을 사용하면 포커스는 오지않고 그냥 건너뛰므로 꼭 적어야 한다.
    > **tabindex 속성**
    > - 0값(`tabindex="0"`): 포커스 줌
    > - 양수(`tabindex="1~9999"`): 포커스(탭)순서를 지정, 숫자가 낮을수록 우선순위가 높음
    > - 음수(`tabindex="-1"`): 포커스 없앰
* 숨김콘텐츠 똑바로쓰기
  - 버튼에 `aria-hidden="true"`이나 `role="presentation"`을 쓰지않는다.   
  (버튼은 특별한 의미가 있는건데 의미적으로 완전히 가리거나 별 의미없게 만들어버리면 용도가 틀어짐)  
  만약 가린다면 아래와같이 css와 같이 쓰기
    ```
    button{display:none}
    <button aria-hidden="true">버튼안씀</button>
    ```
* 대화형 UI 경우 반드시 레이블제공 해야함. html에 레이블요소를 사용을 권장하지만, aria 관련속성을 사용하여 레이블 제공도 가능.
  ```html
  <div>
  <div id="user-name">사용자 이름</div>
  <input type="text" id="name" aria-labelledby="user-name">
  </div>
  ```
* 유효성검사는 꼭 하쇼 [유효성검사링크](https://validator.w3.org/#validate_by_input+with_options)

<br>

* * *

<br>

## 참고 링크
### 리벤하얀
* [ARIA에 대해서 HTML 접근성 향상시키기](https://www.youtube.com/watch?v=MQHNTzdqet0)
* [WAI-ARIA : Role에 대해서](https://www.youtube.com/watch?v=OzxKLC6B1wE)
* [https://www.youtube.com/watch?v=CwlNSWUluVc](https://www.youtube.com/watch?v=OzxKLC6B1wE)
* [ARIA 관련 재생목록](https://www.youtube.com/playlist?list=PL_6yF2upGJYsCCXzMnAmeV6LWLEnaeEeX)
* [그 외 접근성 관련 재생목록 - 웹접근성기초](https://www.youtube.com/playlist?list=PL_6yF2upGJYs6IzIl9UiCt12eIM17k2Xe)
* [그 외 접근성 관련 재생목록 - 접근성(웹,모바일) 실무](https://www.youtube.com/playlist?list=PL_6yF2upGJYvJhBtxMn797AG0Dl23WAFe)

### AOA11Y
AOA11Y 유투브 채널 자체가 접근성 콘텐츠 전용 채널이므로 시간날때 보는게 좋을거 같다.
* [AIRA 간단 소개 재생목록](https://www.youtube.com/playlist?list=PLtaz5vK7MbK355QFGb4q8DfFPbh3NQDda)
* [ARIA를 이용한 탭 콘텐츠 접근성](https://www.youtube.com/watch?v=31EtVp36qCU&list=PLtaz5vK7MbK2v9j4GW6l9L4dEkze9myE5&index=8)
* [그 외 접근성 관련 재생목록들](https://www.youtube.com/c/AOA11Y/playlists)

### 그 외
* [WAI-ARIA 사례집](https://www.wah.or.kr:444/board/boardView.asp?brd_sn=5&brd_idx=1019)
* [자, 그래서 WAI-ARIA가 뭔데?](https://velog.io/@dev-tinkerbell/%EC%9B%B9%EC%A0%91%EA%B7%BC%EC%84%B1-%EC%96%B4%EB%94%94%EA%B9%8C%EC%A7%80-%EC%8B%A0%EA%B2%BD%EC%8D%A8%EB%B4%A4%EB%8B%88)