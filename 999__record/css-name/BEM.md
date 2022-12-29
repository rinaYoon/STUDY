# BEM 정리
BEM(Block Element Modifier)   
ui를 독립된 블록으로 분리하고 복잡한 페이지도 간단하고 신속하게 개발하는것이 목적이다.  
기본적으로 모듈 기반의 방법이지만, 다른 css방법론에 비해 엄격하고 강하다.    
(요약 : 이름을 짓기 어렵다면 규칙이 빡세지만 그만큼 효율성이 좋은 BEM을 쓰자.)
<br>


## BEM의 큰 틀
* 블록(Block)__엘리먼트(Element)--모디파이어(Modifier) 3가지로 나눈다.
* 엘리먼트는 언더바 2개(__)로 구분한다.
* 모디파이어는 하이픈 2개(--)로 구분한다.
* id는 절대 사용하지 않는다.
* 오직 class만 사용한다.
* 외관이 아닌 **목적**에 따라 이름을 짓는다.   
    (ex: 에러메시지를 띄우는 빨간색의 p태그 이름지을때   
    👉 .error ⭕️   
    👉 .red   ❌)
* 이름을 연결할때는 block-name과 같이 하이픈(-) 하나만 써서 연결한다.   
    (ex: seafch-form)

```css
.header__navigation--navi-text{
	color: red;
}
```
>위의 css로 예시를 들면   
header는 블록(Block), __navigation은 엘리먼트(Element), --navi-text은 모디파이어(Modifier)이다.

<br>

## 블록(block, 컴포넌트)
문단 전체에 적용된 엘리먼트, 또는 엘리먼트를 담고있는 큰 컨테이너이다.   
(ex. header, logo, login-form, menu, nav, search-form..등등)
내가 아는 한 뭉탱이, 한 덩어리라고 생각하면 쉽다.

### 블록(block)의 특징
1. 블록은 독립적인 페이지 컴포넌트 이며 재사용이 가능하다.   
    >굳이 메인페이지만이 아닌, 서브페이지나 다른곳에서도 써먹을 수 있다.  
    예를들어 logo같은건 헤더뿐만 아니라 푸터에도 쓸 수 있는 그런 것..
2. html에서 블록은 class 속성으로 나타내며, css에서도 class 셀렉터를 사용.
    >이는 상세도를 가능한 균일하게 유지하고   
    Modifier, Mix를 사용한 덮어쓰기를 쉽게하기 위함이라 한다.
3. 블록은 환경에 미치지 않아야 한다.   
   즉 블록 자체에 대한 외부 지오메트리(margin) 또는 블록의 위치(position)를 설정하지 않아야 한다.
    >이유 : 외부 환경에 의존적이게 되는데, 기능적으로 독립적이어야 한다는 블록의 정의와 맞지 않기 때문. (블록 안에는 블록만을 위한 스타일만 작성한다.)   
    예를들면 독립적인 페이지 전체에 쓰일법한 공통 버튼을 만들때다.(OOCSS기법, 모디파이어..?)
    ```css
    .main-btn {
        font-size : 20px;
        padding : 15px;
        border : none;
        cursor : pointer;

        margin-left : 100px
        /*기껏 벼와 쌀을 분리했는데 거기에 마진 또는 포지션을 넣으면..?*/
    }

    .bg-red {
        background : red;
    }
    .bg-blue {
        background : blue;
    }
    ```
4. 블록들은 서로 중첩이 가능하다. (몇 겹으로 중첩되는것도 허용)
    ```html
    <header><!-- 블록 -->
        <div class="logo"><!-- 블록 -->
            내용
        </div>
    </header>
    ```
    
    위의 `.header > .logo`는 둘 다 블록이다. 블록안에 블록이 들어가있다.

5. 블록의 이름 규칙 : 상태(외관)가 아닌 용도로!   
    > `main_button` ← 메인페이지에서만 사용되는 버튼 (⭕️ 용도를 뜻함)  
    > `red_big_button` ← 빨갛고 큰 버튼 (❌ 상태,외관을 설명하고있음)
6. 블록의 이름이 매우길고 어려우면 하이픈(-)으로 연결한다.   
    >(ex. `search-form`)

<br>

## 엘리먼트(Element, html요소)
블럭을 구성하는 단위 라고한다.(=블록의 일부 장기)   
독립적이지 않고 일부에 소속된, 의존적인 형태다. 그래서 자신이 속한 블럭 내에서만 의미를 가지기 때문에 블럭 안에 있는걸 떼다가 다른데에 쓸 수 없다.   

    엘리먼트는 언더바 2개(__)를 추가하여 사용한다.

### 엘리먼트(Element)의 특징
1. 블록의 일부 이므로 엘리먼트 혼자 블럭처럼 사용할 수 없다.
    ```html
    <header>
        <nav><!-- 블록 -->
            <ul><!-- 블록 -->
                <li></li><!-- 엘리먼트 -->
            </ul>
        </nav>
    </header>
    ```
2. 엘리먼트의 풀네임은 block-name__(언더바2개)element-name 이름으로 한다.
    ```html
    <form class="search-form"><!-- 블록 -->
        <input class="search-form__input"/><!-- 엘리먼트 -->
        <button class="search-form__button">Search</button><!-- 엘리먼트 -->
    </form>
    ```
    > 위 예시를 보면 search-form은 블록이므로 떼다가 다른곳에 붙여도 가능하며, 엘리먼트 요소들은 블록안에서만 의미가 있는것을 알 수 있다.
3. 엘리먼트의 이름이 길다면 하이픈(-)으로 연결한다.
    >(ex. `__submenu` -> `__sub-menu`)

4. 엘리먼트의 이름 규칙 : 상태(외관)가 아닌 용도로!   
    > `__item` ~~안의 아이템(item, text…) (← ⭕️ 용도를 뜻함)   
    > `__red_big_text` ~~안의 빨갛고 큰 텍스트 (← ❌ 상태,외관을 설명하고있음)
5. 모든 블록이 엘리먼트를 갖고있는것은 아니다. 어떤 블록은 엘리먼트 없이 단독으로 사용된다.
6. 엘리먼트는 중첩이 가능하지만 이름에 제한이 있다.   
    * 블록이름__엘리먼트이름1__엘리먼트이름2 은 사용할 수 없다.
    * 블록이름 다음에 엘리먼트 이름을 넣는것이 규칙이다.
    * **_만약 엘리먼트가 다른곳에서도 잘 쓰일것 같으면 블록인지 검토해야한다._**
    * 예시 👇
    > `search-form__content__input`(← ❌ 블록이름__엘리먼트1__엘리먼트2)   
    > `search-form__input` 또는 `search-form__content-input`   
    >(↑ ⭕️ 블록>엘리먼트>엘리먼트 이더라도 블록__엘리먼트를 지키거나,   
    후자처럼 하이픈(-)을 이용해 엘리먼트를 표시해주는것이 좋다.)
    ```html
    <!-- 이 예시는 블록이름__엘리먼트1__엘리먼트2 이므로 사용하지 않는다. -->
    <form class="search-form">
        <div class="search-form__content">
            <input class="search-form__content__input"/>
            <button class="search-form__content__button">Search</button>
        </div>
    </form>
    ```
    ```html
    <!-- 이 예시처럼 사용하기 -->
    <form class="search-form">
        <div class="search-form__content">
            <input class="search-form__input"/>
            <button class="search-form__button">Search</button>
        </div>
    </form>
    ```
<br>

### _💡블록을 만들어야 할까?, 엘리먼트를 만들어야 할까?_
* 구현된 다른페이지 컴포넌트에 의존하지 않고 코드가 재사용될때
    > 블록을 사용합시다.
* 부모 엔티티(블록)없이 구분해서 사용할 수 없을때
    > 엘리먼트로 사용합시다.
* 더 작은 부분으로 나뉘어져야 하는 엘리먼트
    > 블록을 더 추가합시다.(Mix 기법)   
    BEM에서는 엘리먼트의 엘리먼트는 만들 수 없기 때문에   
    엘리먼트가 더 작은 부분으로 나눠져야 할 것 같으면 블록을 추가해야한다.

<br>

## 모디파이어(Modifier, 수식어)
블럭이나 엘리먼트의 속성을 담당한다.   
생긴 게 조금 다르거나, 다르게 동작하는 블럭이나 엘리먼트를 만들 때 사용한다.

    모디파이어는 하이픈 두개(--)를 추가하여 사용한다.

### 모디파이어(Modifier)의 특징
1. 블록 또는 엘리먼트의 외관, 상태, 동작을 정의한다.
    >예를들면 메인공통 버튼이 있는데 색만 다를때
2. Modifier의 이름지을땐 모양, 상태, 동작등등 으로 한다.
    > `--size_s`, `--theme_islands`, `--bg-red` (← 모양, 테마, 사이즈)   
    `--disabled`, `--focused`, `--etc` (← 상태)   
    `(블록 또는 엘리먼트이름)--left-top` (← 동작)
3. 홀로 사용되지 않는다.   
    모양이나 행동, 상태를 변경하는 용도일뿐 독단적으로 대체되지 않는다.
    >쉽게생각하면 `--bg-red` 가 있다.   
    어떤 개체 하나 없는 그냥 빨강색이다.   
    만약 div태그에 저런 클래스만 있다면 의미없는 시뻘건 상자일 뿐이다.
4. 동일한 유형의 모디파이어를 동시에 사용할 수 없다.
    >예를들어 `(블록 또는 엘리먼트이름)--bg-red--bg-pink`은 사용할수 없다.   
    BEM의 모든 엔티티는 동일한 상세도를 가지기 때문에   
    Cascading(css 우선순위)의 원칙에 따라 마지막에 선언한 css속성이 허용되지만,   
    이러한 사용법은 BEM에서는 금지하고있다.

<br>

### 모디파이어(Modifier)의 유형
모디파이어는 Boolean, Key-Value의 두가지 유형이 있다.   
* 불린(Boolean)
    * 모디파이어 유무만 중요, 값이 무관할 때 사용한다.
        >`--disabled`, `--focused` 등 무언가 상태일때
    * Boolean modifier가 있으면 해당 값이 참으로 간주된다.
    ```html
    <!-- 불린타입의 예시, 값은 true 라고 가정한다. -->
    <ul class="tab">
        <li class="tab__item tab__item--focused">탭 01</li>
        <li class="tab__item">탭 02</li>
        <li class="tab__item">탭 03</li>
    </ul>
    ```
* 키 밸류(Key-Value)
    * 모디파이어 값이 중요한 경우에만 사용된다.
    * 하이픈(-)으로 성질-내용을 작성한다.
        >`size-s`, `theme-islands`   
        여기서 size는 Key(성질), -s는 Value(내용)을 가진다.
    ```html
    <!--
        --color-gray, --theme-special가 Key-Value 타입이다.
    -->
    <div class="column">
    <strong class="title title--color-gray">VIP 로그인 (준비중)</strong>
        <form class="form-login form-login--theme-special form-login--disabled">
            <input type="text" class="form-login__id"/>
            <input type="password" class="form-login__password"/>
        </form>
    </div>
    ```
<br>

### _대충 알고있음 좋은 상식_
#### [ MindBEMding ]
Modifier 전후의 구분 문자를 언더바 한 개에서(_) 하이픈 두 개(—)로 변경한 것이다.   
이거 나온 이후 마인드 BEMding 방식을 따라서 표기하고 있다고 한다.
> ex.   
>* `block-name_modifier-name` → `block-name—modifier-name` 
>* `block-name__element-name_modifier-name`   
 → `block-name__element-name—modifier-name`   

>* `block-name_modifier-Boolean_modifier-Value`   
 → `block-name—modifier-Boolean—modifier-Value`,   
>* `block-name__element-Boolean_modifier-name_modifier-Value`   
 → `block-name__element-Boolean—modifier-name—modifier-Value`

 <br>

 ## 혼합 사용(Mix)
 * 블록+블록__엘리먼트가 하나의 html 요소에 존재하는것을 말한다.
    >`Search-form header__search-form` 처럼   
    블록과 블록+엘리먼트를 사용할 수 있다.
 * 코드 중복을 피하면서 여러 BEM 엔티티의 동작과 스타일을 결합한다.
 * 가급적 상세도를 높이지 않고 블록의 독립성을 유지할 수 있다.
 * 블록+엘리먼트, 블록+블록, 엘리먼트+엘리먼트 등등 믹스도 가능하다.
    ```html
    <div class="header">
        <div class="button button--state-success"></div> 
    </div>
    <!-- 
        block2__element 으로 여백이나 위치 등 스타일을 지정하고
        block1은 독립적으로 유지할 수 있다.
     -->
    ```

<br>

 ## 혼합 사용(Mix)
DOM element 와의 관계를 나타내기 위해 js-라는 이름을 사용한다.
```html
<div class="site-navigation js-site-navigation"></div>
```
```js
//the JavaScript code
const nav = document.querySelector(".js-site-navigation");
```
js- 클래스를 보는 사람은 JS 코드에서 DOM element와 관계가 있구나를 이해할 수 있다.

<br>

* * *
 ## 참고한 링크
 https://www.youtube.com/watch?v=B70h37mpD74&t=1335s   

 https://nykim.work/15

 https://velog.io/@solmii/CSS%EB%B0%A9%EB%B2%95%EB%A1%A01-BEM-a.k.a%EC%9E%91%EB%AA%85%EC%86%8C