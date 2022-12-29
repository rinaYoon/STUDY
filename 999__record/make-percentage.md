# 백분율 계산 쉽게하기
백분율계산은 퍼센트(%), VW 계산에 씌인다.   
네이버 퍼센트계산기에 들어가면 2번째 줄에 있는걸로 수동 계산을 해도 되지만,   
차라리 그럴바엔 변수로 만드는게 어떤가 싶기도 한다.

<br>

## 💡 실제 계산법
[참고링크](https://blog.edit.kr/entry/%ED%8E%8C%ED%8D%BC%EC%84%BC%ED%8A%B8-%EA%B3%84%EC%82%B0%EB%B2%95-%EB%B0%B1%EB%B6%84%EC%9C%A8-%EA%B3%84%EC%82%B0-%EB%B0%A9%EB%B2%95-%EA%B3%B5%EC%8B%9D-Percent-Formula)

* 전체값에서 일부값
  ```
  일부값 ÷ 전체값 X 100
  ```
* 전체값의 몇퍼센트의 값
  ```
  전체값 X 퍼센트 ÷ 100
  ```
* 숫자를 몇 퍼센트 증가
  ```
  숫자 X (1 + 퍼센트 ÷ 100)
  ```
* 숫자를 몇 퍼센트 감소
  ```
  숫자 X (1 - 퍼센트 ÷ 100)
  ```

<br>

## 💡 css에 써먹기
대체로 '전체값에서 일부값 계산' 만 사용되는듯 하다.   
전체값(화면 또는 부모)에서 일부(선택한 앨리먼트)라고 생각하면 된다.
```css
.cless_name {
  width: cale(30px / 1920 * 100%); /* << 퍼센트계산식 */
}
.cless_name {
  width: cale(30px / 1920 * 100vw); /* << VW 계산식 */
}
/*여기서 30px은 앨리먼트인 .cless_name, 
1920px은 화면크기(max-width)이다.*/
```

### LESS언어로 예시 - 변수로 계산기 만들기
* 퍼센트 계산 만들기
  - 화면 고정일 경우 (1920px 화면고정)
    ```less
    // 변수 생성
    ._1920(@el) {
      @result: (@el / 1920 * 100%);
    }

    // 변수 사용
    .cless_name {
      margin-right: ._1920(25)[@result];
    }
    ```
  - 부모값이 바뀌어야 하는 경우(앨리먼트 안에있는 앨리먼트같은 경우)
    ```less
    // 변수 생성
    .pct(@el, @elParents) {
      @result: (@el / @elParents * 100%);
    }


    // 변수 사용
    .cless_name {
      margin-right: .pct(25, 1000)[@result];
    }
    ```
* VW 계산 만들기
  - 퍼센트와 같은 식이며 단위 표시만 바뀌면 된다.
  - VW 계산은 퍼센트가 안먹힐때, 또는 폰트사이즈를 계산때만 사용.   
    (*폰트는 일반적인 퍼센트 계산이 잘 안된다고 한다.)
    ```less
    // 변수 생성 (*대표적인 예시로 변수명을 font로 함)
    .font(@size) {
      @result: (@size / 750 * 100vw);
    }

    // 변수 사용
    .cless_name {
      font-size: .font(30)[@result];
    }
    ```
  - 단, VW 계산을 하면 미디어쿼리가 필수이다. (특히 PC는)
    - PC는 구간이 정해져 있으므로 (최소가로, 최대가로) 미디어쿼리를 2번쓴다.
    - 모바일은 최대가로만 사용하므로 미디어쿼리를 1번쓰는 편이다.
    ```less
    // PC 반응형을 1380px ~ 1920px 까지만 주고싶을때
    @media only all and (min-width: 1920px) {...}
    @media only all and (max-width: 1380px) {...}

    // 모바일은 최대가로빼고 나머지는 전부 반응형으로 둔다.
    @media only all and (min-width: 750px) {...}
    ```

<br>

## 💡 CSS에도 변수가 있다.
* CSS로 변수(variable) 만들기 링크 (유투브 Rock's Easyweb)
  - [css변수 사용법1](https://www.youtube.com/watch?v=kQSm8xuXNfM&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=54)
  - [css변수 사용법2-1](https://www.youtube.com/watch?v=7SPxCVD1-9M&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=52)
  - [css변수 사용법2-2](https://www.youtube.com/watch?v=rf8rl7bVadU&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=51)
  - [css변수 사용법3](https://www.youtube.com/watch?v=tXFI4ch0G5M&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=50)
  - [css변수 사용법4](https://www.youtube.com/watch?v=IjCP2kD-8ww&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=50)
  - [css변수 사용법5](https://www.youtube.com/watch?v=_LzbiJnaFlg&list=PLhMk2scdiA_GiG0yjXvyEVSP5n4c1RLhs&index=48)
* 그 외 SASS(SCSS)는 알아서 찾아보기로