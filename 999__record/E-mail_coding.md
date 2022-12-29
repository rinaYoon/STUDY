# 이메일 코딩에 대한 이것저것
1. [Email Coding Guidelines 번역](#email-coding-guidelines번역)
    - [출처 이동(일본어임)](https://github.com/hteumeuleu/email-guidelines/tree/master/translations/ja-JP)
2. 그외 적을만한거 싹다 옮겨적음

<br>

* * *

<br>

## Email Coding Guidelines
이 문서는 HTML 메일 코딩에 적용할 수 있는 몇 가지 원칙에 대처하는 것을 목적으로 합니다.  
각 가이드라인은 최신 메일 클라이언트를 준수하고 기타 메일 클라이언트의 그레이스 풀 디그라데이션(고급스러운 열화)을 염두에 두고 객관적으로 실증되었습니다.

이것은 끊임없이 업데이트되거나 편집되는 문서이며, 새로운 아이디어는 대환영입니다.기여해주세요.

<br>

### HTML5 doctype
'HTML5 doctype'은 간결하고 짧으며 기억하기 쉬운 것입니다.   
대부분의 메일 클라이언트에서 사용되고 있기 때문에 코드에서는 어쨌든 'HTML5 doctype'을 사용합니다.  
다른 메일 클라이언트가 다른 doctype으로 해석하고 메일이 후방 호환 모드로 렌더링될 수 있음을 유의하십시오.

* 참조: [HTML 이메일에 어떤 <doctype>을 사용해야 하나요?](https://www.hteumeuleu.com/2016/which-doctype-should-you-use-in-html-emails/)

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

<br>

### Lang
HTML 콘텐츠의 `lang`을 정의하면 스크린 리더 등의 지원 기술이 적절한 음성을 선택해 콘텐츠를 읽는 데 도움이 됩니다.   
`lang` 속성은 `<html>` 시작 태그에서 유효한 언어 태그를 사용하여 정의해야 합니다.   
다만, 일부 메일 클라이언트(특히 웹 메일)는 `<html>` 요소를 삭제하기 위해,   
`<body>`내의 반환 요소에 `lang` 속성도 설정할 필요가 있습니다

* 참조: [전자 메일 접근성 작동](https://www.hteumeuleu.com/2018/email-accessibility-in-action/#1592)

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <div lang="en">
    </div>
  </body>
</html>
```

<br>

### 시맨틱 마크업
이메일의 HTML 코드는 가능한 한 많은 시맨틱 마크업을 사용해야 합니다.  
`<h1>`부터 `<h6>`까지의 표제의 사용과 문단에 `<p>`를 사용하는 것을 강력히 권장합니다.

```html
<!-- 안좋은 예시 -->
<font face="Arial" size="5" color="#00ff00">Lorem ipsum</font>

<!-- 좋은 예시 -->
<h1 style="margin:0; color:#0f0; font:24px Arial, sans-serif;">Lorem ipsum</h1>
```

단 `<header>`, `<main>`, `<footer>`, `<article>`, 또는 `<section>`등의 구조화 태그는  
몇개의 주요한 전자 메일 클라이언트(Gmail이나 Outlook 등)에서 서포트 되고 있지 않기 때문에 주의해서 사용할 필요가 있습니다.  
이러한 컨테이너 태그 대신 지정하고 싶은 요소의 해당하는 `implicit ARIA role`을 사용하는 것이 좋습니다.

```html
<!-- 안좋은 예시 -->
<header>
  <h1>Lorem ipsum</h1>
</header>

<!-- 좋은 예시 -->
<div role="banner">
  <h1>Lorem ipsum</h1>
</div>
```

<br>

### 테이블 레이아웃 (프레젠테이션 테이블)
프레젠테이션 테이블은 Outlook(2007-2019년 Windows)의 경우에만 아쉽게도 아직 필요합니다.   
접근성을 향상시키기 위해 모든 프레젠테이션 테이블에는 항상 `role="presentation"` 속성을 포함해야 합니다.

```html
<!-- Good example -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0">
```

그러나 Outlook에서도 프레젠테이션 테이블의 사용은 일관된 렌더링을 위해 다음 예외로 한정해야 합니다.

> * 요소에 고정 폭을 설정합니다(`<table style="width:600px">`를 사용하는 등).
> * 2개의 요소를 나란히 설정합니다(2개의 이어진`<td>`를 사용하는 등).
> * `padding`, `background-color` 또는 `border`를 스타일로 설정합니다.

또한 `role="presentation"`은 메일 클라이언트(Yahoo! Mail이나 AOL 등)에 의해 삭제될 수 있으므로  
Outlook 조건부 댓글에만 프레젠테이션 테이블을 포함할 것을 권장합니다.

```html
<!--[if mso]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td>
<![endif]-->
<div>
</div>
<!--[if mso]>
</td></tr></table>
<![endif]-->
```

단일 `[if mso]` 조건식은 Word의 렌더링 엔진(Windows에서는 2007년부터 2019년까지 Outlook)을 사용하여   
Outlook의 모든 버전을 타겟으로 하기에 충분합니다.  
따로 필요 없는 한 Outlook 버전 타겟팅(`[if mso gte 16]`등)의 사용은 권장하지 않습니다.

<br>

### `<style>`없이 기능 추가하기
모든 메일 클라이언트가 `<style>` 태그를 서포트하고 있는 것은 아닙니다.  
`<style>` 태그의 필터링에는 다음이 있습니다.

> * 영구적인 부분: 
>   - 예를 들어 Gmail 이외의 계정(GANGA라고도 함)을 사용하는(iOS 및 Android 상의) Gmail 앱은   
>     `<style>` 태그를 지원하지 않습니다.  
>   - 이 기능이 되는 Mail 계정은 Libero(이탈리아), Mail.ru 또는 Yandex(러시아),   
>     Nate 또는 Naver(한국), T ononline(독일), Telstra(호주), Terra(브라질)입니다.
> * 일시적인 부분:
>   - 지난해 지메일은 하루에 최소 2번(2019/04/23과 2018/07/13에) `<style>` 태그를 삭제했습니다.
> * 사용 컨텍스트에 따른 부분:
>   - Gmail 바탕화면 웹메일로 메일을 전송하면 모든 `<style>` 태그가 삭제됩니다.  
>   Gmail은 메일이 클립되어 있지 않은 버전으로 표시되었을 때 `<style>` 태그를 삭제하는 것으로도 알려져 있습니다.
>   - (참조 : [Gmail removes `<style>` tags in non clipped view](https://github.com/hteumeuleu/email-bugs/issues/56)
> * 버그로 인한 부분:
>   - Android의 Yahoo 앱은, 페이지의 첫 번째`<head>`내의`<style>` 태그를 삭제합니다.
>   - (참조 : [Yahoo! Mail app for Android strips styles from the first `<head>` tag](https://github.com/hteumeuleu/email-bugs/issues/28))

`<style>`을 사용하지 않고 메일을 작성하는 것에는 다양한 의미가 있습니다.  
하지만 무엇보다도 먼저 다음을 생각합니다.

> * 레이아웃:
>   - `<style>`이 없는 이메일은 수평 스크롤 없이 임의의 폭으로 조정해야 합니다.  
일반적으로 iPhone SE의 Gmail로 표시되는 메일의 폭을 반영하여 폭 280px를까지 좁히는 것을 검토합니다.
> * 브랜딩:
>   - `<style>`이 없는 메일은 발신인의 브랜드를 반영해야 합니다.

<br>

### HTML 속성에서의 스타일 정의
HTML 속성이 아닌 스타일 속성을 사용하는 것이 좋습니다.   
그러면 프레젠테이션 코드를 여러 속성이 아닌 하나의 스타일 속성으로 정리할 수 있습니다.   
몇 가지 예외를 제외하고 `width`, `height`, `align`, `valign`, `border`, `color` 또는 `bgcolor` 등의 속성은 피해주세요.

이것은 메일 클라이언트에 강력한 기본 스타일이 있는 경우에 특히 유용합니다.   
예를 들어 프랑스 공급자 Orange의 데스크톱 웹 메일에는 기본 레이아웃 `td {vertical-align:top;}`가 적용되고   
`HTML은` 이 `valign` 속성을 인계합니다.

* 출처: [Orange's default styles](https://github.com/hteumeuleu/email-bugs/issues/48)

```html
<!-- 안좋은 예시 -->
<td valign="middle" align="center" bgcolor="#ffffff"></td>

<!-- 좋은 예시 -->
<td style="vertical-align:middle; text-align:center; background-color:#fff;"></td>
```

#### 🟡 예외
1. Word의 렌더링 엔진을 사용하는 Outlook 버전(2007~2019년의 Windows)에서는 `auto`가 `margin`의 값으로 인식되지 않습니다.  
따라서 `<table>`을 중앙 정렬하려면 `align="center"` 속성과 `margin: 0 auto` 스타일을 모두 사용하는 것이 좋습니다.

    ```html
    <!-- 안좋은 예시 -->
    <table align="center" width="600" role="presentation">…</table>

    <!-- 좋은 예시 -->
    <table align="center" style="margin:0 auto; width:600px;" role="presentation">…</table>
    ```

2. Outlook(2007~2019년의 Windows)에서는 화상에 퍼센티지의 폭을 설정해도 CSS에서 기대되는 것처럼, 화상이 그 부모의 요소의 폭으로 조정되지 않습니다.  
대신 이미지 파일의 실제 폭을 설정합니다.  
따라서 유동적이고 반응적인 이미지를 만들려면 `HTML`의 `width` 속성(Outlook에서 고정 폭을 유지하기 위해)과 스타일(다른 클라이언트용)이 모두 필요합니다.

    ```html
    <!-- 안좋은 예시 -->
    <img src="example.jpg" alt="" width="100%" />

    <!-- 좋은 예시 -->
    <img src="example.jpg" alt="" width="600" style="width:100%;" />
    ```

3. `<table>`의 `border`, `cellpadding` 및 `cellspacing을` 리셋합니다.   
CSS에서 `<table>`의 스타일을 리셋하는 방법은 전자 메일에서는 취급하기 어렵고,   
대신 `HTML`속성을 사용하는 것을 권장합니다.

    ```html
    <!-- 안좋은 예시 -->
    <table style="border:0; border-spacing:0;">
      <tr>
        <td style="padding:0; border:none;">Lorem ipsum.</td>
      </tr>
    </table>

    <!-- 좋은 예시 -->
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>Lorem ipsum.</td>
      </tr>
    </table>
    ```

4. `height`를 설정합니다.  
CSS의 `height` 속성은 모든 Yahoo! 메일 및 AOL 클라이언트에서 `min-height`로 변환됩니다.  
(참조: [Yahoo converts the height property to min-height](https://github.com/hteumeuleu/email-bugs/issues/9))   
대신 HTML의 height 속성을 사용하는 것이 안전합니다.

    ```html
    <!-- 안좋은 예시 -->
    <td style="height:100px;">Lorem ipsum.</td>

    <!-- 좋은 예시 -->
    <td height="100">Lorem ipsum.</td>
    ```
    
<br>

### 간격 조정에는 margin 또는 padding을 사용합니다.
요소의 주위 또는 내부 간격은 CSS의 margin 또는 padding 속성을 사용하여 조정해야 합니다.   
상단의 `<td>`와 중복적인 `<br>`는 피해야 합니다.

    ```html
    <!-- 안좋은 예시 -->
    <table role="presentation">
      <tr>
        <td colspan="3" height="20"></td>
      </tr>
      <tr>
        <td width="20">
        <td>
          <h1>Hello world</h1>
          <br />
          <br />
        </td>
        <td width="20">
      </tr>
      <tr>
        <td colspan="3" height="20"></td>
      </tr>
    </table>

    <!-- 좋은 예시 -->
    <table role="presentation">
      <tr>
        <td style="padding:20px;">
          <h1 style="margin:0 0 20px;">Hello world</h1>
        </td>
      </tr>
    </table>
    ```

한가지 주의할 점은 Outlook(2007-2019년 Windows)에서는 `margin`과 `background-color` 조합의 동작이  
CSS 사양과는 다르다는 것입니다.   
주로 배경색도 마진 영역으로 표시됩니다.

<br>

### ...




















<br>

### ...

<br>

### ...

<br>