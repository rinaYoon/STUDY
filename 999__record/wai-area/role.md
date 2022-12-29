# Role 속성 모음
이렇게쓰임
```html
<div class="" role=""></div>
```

<br>

## 참고링크
- [Roles사전](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

<br>

## Landmark Roles
웹 페이지의 각 영역을 명확하게 구분하는 목적을 지님.  
영역 역할을 지정할 수 있는 8개의 속성이 있음.  

### 주의할거
HTML5의 시맨틱요소와 속성이 똑같은 태그는 사용 ㄴㄴ
```html
<header role="banner"></header>
```

* application
  - 동일한 역활의 요소 없음
  - 주로 `<div>` 요소와 같이 그룹 역할을 하는 요소로 대체할 수 있다.
* banner
  - 동일한 역할의 요소 없음
  - 비슷한 의미로 `<header>` 요소를 사용할 수 있으나 `<header role="banner">`로 사용은ㄴㄴ   
  한 페이지에서 한 개의 `<header>` 요소만 사용하길 권장
  ```html
  <div class="header" role="banner">
  </div>
  ```
* navigation
  - `<nav>`요소
* main
  - `<main>`요소
  - 페이지 내에 1개만 사용가능
  - `<article>, <aside>, <footer>`의 하위 요소로 사용ㄴㄴ
* complementary
  - `<aside>`요소
  - 연관이 적지만 의미는 있는 콘텐츠영역, 사이드
  - 현재날씨, 관련기사, 주식정보 등등의 부가콘텐츠 같은거
* form
  - `<form>`요소
  - 서버에 전송될 수 있는 콘텐츠
* search
  - 동일한 역할의 요소 없음
  - 검색 역할을 담당하는 서식 영역
  - `<div>, <form>`요소만 사용 권장
* contentinfo
  - 동일한 역할의 요소 없음
  - 비슷한 의미로 `<footer>` 요소를 사용할 수 있으나 `<footer role="contentinfo">`로 사용은ㄴㄴ   
  한 페이지에서 한 개의 `<footer>` 요소만 사용하길 권장
  ```html
  <div class="footer" role="contentinfo">
  </div>
  ```

<br>

## Abstract Roles
roles의 분류체계를 만들고 역활들을 정의함.  
WAI-ARIA를 구축하는 기반.

* `command`: 입력 데이터를 수신하지 않는 위젯 형식
* `composite`: 위젯 탐색 또는 자식을 포함하는 형식
* `input`: 사용자 입력하는 위젯
* `landmark`: 사용자가 쉽게 해당 섹션으로 이동하여 페이지 요약에 나열할 수 있도록 충분히 중요한 내용을 포함하는 인식 가능한 섹션 [참고링크](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role), [참고링크2](https://w3c.github.io/aria/#landmark)
* `range`: 사용자가 설정할 수 있는 값 범위
* `roletype`: 역할이 할당 된 개체에 구조적, 기능적 목적을 설명
* `sectionhead`: section의 주제를 표시하거나 요악하는 구조
* `section`: 문서 또는 응용 프로그램에서 렌더링 가능한 구조 단위
* `select`: 사용자가 선택 항목 집합에서 선택을 할 수 있게 하는 위젯
* `structure`: 문서의 구조 요소
* `widget`: GUI 사용자 인터페이스
* `window`: 브라우저 또는 응용 프로그램 창

<br>

## Widget Roles
독립형 사용자 인터페이스를 동작시키기 위한 목적을 지님.  
더 큰 roles에 포함되거나 복합 위젯의 일부로 사용되기도 함.

### 주의할거
* 이미 속성이 있는 태그에게 저렇게 주지말기
* 속성 태그와 같은 속성 쓰지마셈
* a링크로 버튼을 만들었으면 버튼을 적용하자(근데 왠만하면 버튼태그로 쓰는게 좋다.)
```html
<h1 role="button">고유속성 무시하지 마쇼</h1>
<button role="button">같은 중복속성 ㄴㄴ</button>
<a href="" role="button">왠만하면 버튼태그로 하자</a>
```

### 독립형
* `button`: 버튼, 트리거 동작
* `checkbox`: 체크유무, 다중 체크 가능
* `gridcell`: 그리드, 트리 그리드에서 셀을 만드는데에 사용, `<td>`와 같다.
* `link`: 내부 또는 외부 링크 (a태그인가)
* `menuitem`: 메뉴 또는 선택 세트 옵션
* `menuitemcheckbox`: 체크박스의 참, 거짓, 혼합이 확인 가능한 상태.
* `menuitemradio`: 라디오 버튼, 동일한 역할을 가진 요소 집합에서 확인할 수 있는 메뉴 항목, 한번에 하나만 가능.
* `option`: select 목록에서 선택 가능한 항목
* `progressbar`: 작업의 상태를 표시하는 요소
* `radio`: 역할이 동일한 요소 그룹의 확인 가능한 입력으로 한 번에 하나만 확인 가능
* `scrollbar`: 내용 스크롤을 제어하는 그래픽 객체
* `searchbox`: 검색 기준을 지정하기 위한 텍스트 상자 유형
* `separator`: 구분을 나타냄. `<hr>`같은거.
* `slider`: 슬라이더 크기와 가능한 값의 현재 값 범위를 나타냄
* `spinbutton`: 사용자가 개별 선택 항목 중에서 선택할 수 있는 범위 형식.
  ```html
  <input role="spinbutton" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" type="number" value="25">
  ```
* `switch`: 체크 또는 체크되지 않은 값 (on, off)
* `textbox`: 자유 형식의 텍스트를 값으로 사용할 수 있는 입력 유형
* `treeitem`: 하나의 요소로 하위 레벨의 트리 항목 요소 그룹을 포함하는 경우 확장이나 축소 가능
* `tab`
  - 탭 내용을 선택하기 위한 그룹화 레이블
  - 'tablist'의 자식속성, 탭 자체의 역할
* `tabpanel`: 탭의 본문 역할 (내용물표시)

<br>

### 복합형(단독으로 쓰이지X, 뭔가 감싸는 그룹)
* `combobox`: 확장/축소 가능 요소임을 알린다. 자동완성에 사용할 경우   
일반 자동완성 요소가 아닌 확장/축소할 수 있는 항목형이나 복합형에 사용된다.
* `grid`: 하나 이상의 셀이 있는 하나 이상의 행 컬렉션을 포함하는 그룹
* `listbox`: 선택목록 (드롭다운메뉴 같은거)
* `menu`: 메뉴를 정의, 스크린 리더 사용자가 메뉴 요소로 인지할 수 있게 사용
* `menubar`: 'menu'와 동일한목적, 메뉴 컨테이너(일반적으로 ul 요소)에 menu 역할을 선언한다.  
ul 요소는 aria-labelledby=”labelId” 속성을 사용하여 ul 요소에 적절한 레이블을 제공해야 한다. 하위 메뉴에는 role=”menu”를 사용한다.
* `menuitem`: 스크린 리더 사용자가 요소가 메뉴 역할임을 인지할 수 있도록 하기 위해 사용, menu 및 menubar 역할에 포함한다.   
일반적으로 a 요소의 텍스트 값이 메뉴 항목의 이름으로 사용됨.
  >[메뉴(menu, menubar, menuitem) 관련 링크](https://nuli.navercorp.com/community/article/1132961)
* `radiogroup`: ARIA 라디오 버튼 세트에 대한 컨테이너를 정의
* `tablist`
  - `tab`과 함께 사용되는 복합형 속성(부모속성임)
  - 요소에 탭목록(리스트)
  ```html
    <ul class="list_tab" role="tablist">
        <li tabindex="0" role="tab" aria-selected="ture" aria-controls="section1">
          탭메뉴1
        </li>
        <li tabindex="0" role="tab" aria-selected="false" aria-controls="section2">
          탭메뉴2
        </li>
    </ul>
    
    <div class="tab_content">
        <section id="section1" role="tabpanel" aria-labelledby="tab1">
          탭메뉴1의 본문
        </section>
        <section id="section2" role="tabpanel" aria-labelledby="tab2">
          탭메뉴2의 본문
        </section>
    </div>
  ```
* `tree`: 
* `treegrid`: 

<br>

## Document Structure Roles
문서구조를 설명하는 목적을 지님.

* `application`: 
* `article`: 문서, 페이지, 사이트등의 독립적인 부분을 구성하는 페이지 섹션 (html5의 아티클)
* `cell`: 테이블 컨테이너의 셀
* `columnheader`: 열에 대한 헤더 정보가 들어있는 셀
* `definition`: 	용어 또는 개념의 정의
* `directory`: 목차와 같은 그룹 구성원에 대한 참조 목록
* `document`: 컨텐츠가 포함된 요소
* `feed`: 
* `figure`: 그래픽 문서, 이미지, 예제 텍스트를 포함하는 인식 가능한 컨텐츠
* `group`: 페이지 요약 또는 목차에서 포함되지 않는 일련의 사용자 인터페이스
* `heading`: 페이지 섹션의 제목 (타이틀?)
* `img`: 이미지
* `list`: listitem을 소유하고 있는 section
* `listitem`: 
* `math`: 
* `presentation`: 역할이 없다. 'none'과 같으며 접근성(스크린리더) 자체에 노출되지 않게 한다(display:none같은거)
* `none`: 역할이 없다. 'presentation'과 같다.
* `note`: 
* `row`: 	테이블 형식 컨테이너의 셀 행
* `rowgroup`: 테이블 형식 컨테이너에 하나 이상의 행 요소를 포함하는 구조
* `rowheader`: 격자의 행에 대한 헤더 정보가 들어있는 셀
* `separator`: 
* `table`: section 데이터가 행과 열로 정렬
* `term`: 해당 정의가 있는 단어 또는 구문
* `toolbar`: 시각적 형태로 표현되는 기능 버튼 또는 컨트롤 모음
* `tooltip`: 요소에 대한 설명을 표시하는 상황별 팝업

<br>

## Live Region Roles
라이브 영역 특성에 의해 수정

* `alert`: 경고메세지(알람)
* `log`: 새로운 정보가 의미있는 순서로 추가되고, 오래된 정보가 사라짐
* `marquee`: 중요하지 않은 정보가 자주 변경되는 라이브 영역
* `status`: 사용자를 위한 자문 정보를 위한 라이브 영역
* `timer`: 시작 지점에서 경과된 시간 또는 종료 지점까지 남은 시간을 나타내는 숫자 카운터 라이브 영역

<br>

## Window Roles
브라우저 또는 응용 프로그램 내에서 창 역할을 함

* `alertdialog`: 초기 포커싱 시, 대화 상자의 요소로 이동하는 경고 메세지가 포함된 대화 상자 유형
* `dialog`: 웹 애플리케이션의 기본 하위 창

## WAI-ARIA 1.2 업데이트 추가
2020.12.18에 새로운 WAI-ARIA속성 몇개가 더 나왔다고 한다.  
[출처](https://nuli.navercorp.com/community/article/1133016)
* `blockquote`: 인용문, 인용문에 대한 요소 정보를 blockquote 태그나 q 태그처럼  
role 속성을 추가하여 스크린 리더 사용자에게 제공
* `superscript`, `subscript`: 윗 첨자, 아래 첨자. HTML의 `<sup>`과 `<sub>`태그에 대응하는 커스텀 위 첨자, 아래 첨자을 역할
* `caption`: HTML 네이티브의 `<caption>`와 같으며 조건이 있다.  
  1. 커스텀 캡션(role=”caption”)은 table, grid, figure 역할을 가진 태그에 사용되어야 한다.
  2. grid나 table에 사용 시 캡션은 반드시 셀 시작 전, 첫 번째 요소로 제공해야 한다.
  3. Figure 태그는 예외로 첫 번째나 마지막에 캡션을 제공할 수 있다.
* `code`: 컴퓨터 코드를 적을 때 사용하는 code 태그의 역할을 커스텀으로 제공.  
컴퓨터 언어와 같이 기호가 많이 사용되는 코드의 일부분을 한 줄로 작성하여 사용자에게 보여줄 때 사용되는 code 태그를 role=”code”를 통해 커스텀으로 제공
* `meter`: HTML5에서 고정된 수치의 값을 표시하기 위한 스칼라 수치 막대를 추가하며 조건이있다.  
  1. meter 태그에는 min, max를 통해 최솟값과 최댓값을 정하며, value 속성으로 수치를 제공함. 이와 마찬가지로 role=”meter"에는 이것들을 대체하는 aria-valuemin, aria-valuemax를 제공해야 하며, 현재 값을 나타내기 위한 aria-valuenow를 제공해야함. 즉, 반드시 정해진 최솟값과 최댓값이 있어야 함.
  2. meter 태그(role=”meter”)는 정적인 수치 콘텐츠를 제공해야함: 실시간으로 변경되는 진행률을 표시하기 위한 태그가 아님. 미터 요소를 실시간으로 변경되는 진행률을 표시하는 용도로 사용해서는 안 됨. 실시간 진행률을 표시하려면 role=”progressbar”로 제공해야함.
* `insertion`, `deletion`: 추가와 삭제, HTML의 `<ins>`,`<del>` 태그와 같다.
* `time`: HTML의 `<time>`과 같으며 시간이나 날짜 등을 표기한다.
* `paragraph`: `<p>`태그 요소와 같으며 문단을 나눈다. 
* `generic`: 접근성 API가 인지할 수 있으나 시멘틱 의미를 부여하지 않음.  
  (none, presentation 과는 좀 다르다. 링크에서 읽어보기)