# 시스템폰트
일하면서 "시스템폰트로 해도 될것 같아요" 나 "시스템폰트 적은거 찾아봐요" 같은 말을 들었다.  
여기서 나는 시스템 폰트가 걍 컴퓨터에 기본으로 나오는 폰트 정도인 줄 알고 폰트에대한 모든걸 안썼었고  
대참사를 맞이할 뻔했다. (스터디용이라 망정이지 실무였으면 욕 뒤지게 먹었을듯)   
여튼 그런걸 정리해본다.

<br>

## 시스템 폰트란?
시스템폰트(system font) 또는 웹 세이프 폰트(web save font) 라고도 한다.  
로컬(=사용자 컴퓨터)에 기본으로 내장된 글꼴이며,  
웹에서 다운받지 않고 사이트에 로컬 글꼴로 나오게 하는거다.

### 방식
`font-family`에 모든 OS의 로컬 폰트들을 적으면 내 로컬에 저 폰트가 있는지 순서대로 비교하는데,  
있으면 바로 있는 폰트를 사이트에 띄우고 마지막까지 없다면 `sans-serif`를 띄우는 것이다.

- 각 회사들마다 시스템 폰트를 정의하는게 다르다.
  - 그래서 작업할때마다 시스템폰트가 있냐고 묻거나 찾아보는게 좋다.
- 간간히 웹폰트도 같이 섞일때가 있다. (ex.G마켓 시스템폰트)
  - 웹폰트가 넣어진거라면 왠만해선 서버에 이미 올렸다는 뜻이기도 함
- 사이트들 글꼴
    - G마켓
      ```css
      font-family: -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Roboto, 'Gmarket Sans', Tahoma, sans-serif;
      ```
    - 네이버
      ```css
      font-family: Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;
      ```
    - 네이버 모바일
      ```css
      font-family: "Helvetica Neue","Apple SD Gothic Neo",sans-serif; 
      ```
    - 다음
      ```css
      font-family: AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
      ```
    - 다음 모바일
      ```css
      font-family: HelveticaNeue-Light,AppleSDGothicNeo-Light,'Malgun Gothic','맑은 고딕',sans-serif;
      ```

### OS폰트
OS폰트는 말 그대로 맥, 크롬, 사파리, 윈도우, 크롬, 안드로이드... 등등의 운영체제들 안에  
기본적으로 내장된 폰트들을 말한다.  
그래서 어떤 기기나 운영체제로든간에 내가 만든 사이트를 띄운다면,  
그 사이트에 '딱 이 폰트들만 적용하게 해주세요' 라고 하는거다.
~~아ㅋㅋ 똥같은 폰트 갑자기 끼게 하지 말라고~~

### 뭐가좋음
1. 특정 운영체제(OS)의 시스템폰트를 기본값으로 설정하면 성능 떡상향
2. 뜬금없이 똥같은 글씨체 난입X
3. 디자인상으로 우선순위 설정하기 좋음(<< 디자이너관점)
4. 좋음나쁨을 꺼나서 필수요소임

<br>

## 시스템폰트 사용방법

### 0.
일단 시스템폰트 지정된게 없고 새로 짜야한다면,  
구글에 'CSS기본 시스템 폰트 설정 (년도)'를 검색해서 찾아보는게 좋다.  
왜냐면 OS가 갑자기 바뀌던가 그런날에는 폰트도 바뀌기 때문.

### 1. 기본사용
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
```
```css
/* 코드 해석 (주석부분은 OS이름) */

  /* Safari for OS X and iOS (San Francisco) */
  -apple-system,

  /* Chrome < 56 for OS X (San Francisco) */
  BlinkMacSystemFont,

  /* Windows */
  "Segoe UI",

  /* Android */
  "Roboto",

  /* Basic web fallback */
  "Helvetica Neue", Arial, sans-serif,

  /* Emoji fonts */
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  /* 마지막에 꼭 sans-serif 써주기 */
```

### 2. 변수로 줄이기
css변수를 이용해서 짧게 줄일 수 있다.  
(단, 변수가 통하는 부분만 가능)
```css
:root {
  --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.element {
  font-family: var(--system-ui);
}
```

### 3. font-face로 줄이기
font-face로 새로 등록해서 한번에 이름만 나오게도 할 수있다.  
단, 굵기가 생긴다면 새로운 font-face를 작성해야한다. (font-weight 부분땜에)
```css
@font-face {
  font-family: system-ui;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

body {
  font-family: "system-ui";
}
```

## 참고한 곳
- [CSS 기본 시스템 설정 2019](https://uxdev.org/entry/CSS-%EA%B8%B0%EB%B3%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%8F%B0%ED%8A%B8-%EC%84%A4%EC%A0%95-2019)
- [font-family 설정 시 주의사항](https://junside.tistory.com/239)
- [System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)