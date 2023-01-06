#  Naming (제일힘든거 = 이름짓기)
* 네이밍 컨벤션, 클래스 네이밍, 레이아웃 예약어, css class 네이밍 규칙,  Prefix, Subfix, Suffix 등등 다양하게 검색하기
* 기본적으로 BEM 방식으로 많이 사용하니까 BEM과 같이 봅시다.
* 큰 덩어리 블록부터 세세한 앨리먼트까지의 영역 이름을 잘 알아야 함

<br>

## ✍자주쓸것 같음 + 새로수집한거
### 지마켓, 옥션 영역 나누기
> event-○○○ > division > area > slot > unit
>> 또는 event-○○○ > area > division > slot > unit
- `event-wrapper` : 페이지 전체를 감쌈(wrapper)
  ```html
  <div class="event-wrapper"></div>
  ```
- `event-○○○`: event-wrapper바로 아래에 오는 전체 큰 틀
  ```html
  <div class="event-header"></div>
  <div class="event-nav"></div>
  <div class="event-body"></div>
  ```
- `division`: '분활(또는section)', event-○○○ 바로 아래에 오는 두번째로 큰 틀.
바로 안에 헤더(타이틀)와 바디(내용+area)로 나눈다.
  ```html
  <div class="division division-intro"></div>
  <div class="division division-deal">
    <div class="division-header"></div>
    <div class="division-body"></div>
  </div>
  ```
- `area`: 'division'바로 아래에 오는 큰 틀, 주로 'division-body(이벤트내용)'안에서 쓰임
  ```html
  <div class="division-body">
    <div class="area-deal"></div>
    <div class="area-notice"></div>
    <div class="area-recommend"></div>
  </div>
  ```
- `slot`: 'area' 안에 영역을 구분지을때 사용. 제목/내용으로만 구분짓는다. unit이 있거나 없다.
  ```html
  <div class="area-deal">
    <div class="slot-review"></div>
    <div class="slot-frame"></div>
  </div>
  <div class="area-notice">
    <div class="slot-title"></div>
    <div class="slot-notice"></div>
  </div>
  <div class="area-recommend">
    <div class="slot-title"></div>
    <div class="slot-frame"></div>
  </div>
  ```
- `unit`: 'slot'안에 들어가는 최종적인 앨리먼트 요소 그룹
  ```html
  <div class="unit-swiper">
    <div class="swiper-container">
      <ul class="swiper-wrapper unit-product">
        <li class="swiper-slide unit-product__item">
          <a href="" class="unit-product__info" target="_blank">
            <div class="product-img"></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  ```
- `__fence`: 이너역할, 중간에 뭔가 감쌀게 필요할때 쓰는 공통어(~~__fence)

<br>

### 자주쓰이는 이름들
#### 블록 요소 관련
* `wrapper` : 맨처음 시작되는 가장 큰 틀
* `wrap` : 섹션마다 가볍가 감싸는 덩어리 (=wrapper)
* `header` : 페이지가 시작되는 머리 말고도, 각 나눠진 영역마다의 헤더, 타이틀이 있는 영역
* `nav` : 네비게이션 (이벤트 페이지에도 해당됨)
* `body` : 나눠진 영역마다의 내용물, 위에 헤더랑 같이 사용
* `fence` : =inner
* `division` : 분활(=section)
* `area` : ('division'아래의)영역 명칭
* `slot` : ('area'아래의)영역 명칭
* `unit` : 구성, 단위, 앨리먼트 그룹 (ex. 버튼의 꾸밈요소나 태그하나만으로 안될때)

#### 앨리먼트 요소 관련
* `list` : = ul
* `list__item` : = li
* `blind` : 블라인드
* `line` : 선 꾸밈, 크게 한줄로 구분짓는 용도라면 line-방향 은 안써도 되는듯
* `product` : 프로덕트, 뭔가 좀더 자세한 제품관
* `description` : 묘사위주의 자세히, 디테일하고 긴 설명 묘사
* `desc` : 설명위주의 자세히, 조금 간단하게 설명할때(ex.제목 바로아래 보조적으로 설명글)
* `deco` : 데코, 데코레이션(decoration) 의미없는 꾸밈요소
* `dimd` : 딤드, 팝업창 띄울때 쓰는 반투명 검정색 배경.(팝업뿐만아니라 모바일 햄버거메뉴 등 다양하게 쓰임)
* `intro` : 도입부, 콘텐츠 (상세?) 페이지가 맨 처음에 시작하는 인삿말때 사용하기 좋을듯
* `recommend` : 상품 추천, 추천용도
* `deal` : 딜, 이건 딜페이지에서만 쓰이는 말로만 사용될듯하다.
* `notice` : 공지, 공지사항, 꼭 확인해야하는 안내사항
* `info` : infomation, 정보 안내 (상품정보)
* `guide` : 가이드, 안내 (info랑은 다름)
* `caution` : 주의사항, 경고
* `review` : 리뷰, 후기
* `bundle` : 묶음, 덩어리라는 뜻인데, ul>li에서 발견됨. (상품)묶음으로 표현한듯
* `case` : 케이스, 'button-case'로 사용됨, 감싸는 용도의 명칭
* `util` : 유틸리티(홈페이지의 맨 우측 상단 로그인, 마이페이지 같은 기능 묶음)
* `sale` : (큰틀, 타이틀을 갖고 있는)세일, 할인
* `plural` : 복수의, 여러개, 다양한 (유한킴벌리-복수구매할인상품 영역에서 발견함)
* `anchor` : 앵커, href로 다른 링크가 아닌 페이지내의 아이디(href="#anchor__test")로 이동할때 쓰이나봄
* `recommand` : 추천제품, 추천템 (그룹으로쓰고 그 안에 item을 넣으면 될 듯)

<br>

## 🔨레이아웃 구조
### 기본 웹 구조 예약어
* `wrapper` : body 바로 아래로 페이지 전체를 감싸는 전체 영역 그룹핑.
* `header` : 머리글 영역이다. 로고를, gnb를 포함한 가장 큰 상단 영역.
* `container` : 헤더와 푸터를 제외한 컨텐츠 전체 영역, 본문 영역 그룹핑이다. html5 시멘틱이라면 main이 쓰일지도.
* `ct` : 모바일 본문 영역
* `content` : 주요 컨텐츠 영역, 안에 컨텐츠가 시작되는 구조면 `contents`가 대신할수도.
* `footer` : 최 하단 영역, 주로 copyright나 사업장, 주소등등을 감싸고있다.

<br>

### 네비게이션 예약어
[네비게이션 참고 링크](https://hanyonghee9264.github.io/front&design/2019/12/28/Front&Design-Web-Design(GNB-LNB-SNB-FNB)/)
* `.gnb (Global Navigation Bar)` :
  - 사이트 최상위 전체 공통 네비게이션 (어떤 서브페이지를 가도 있는 네비)
  - 메인메뉴 · 대분류 · 전체사이트에서 사용되는 공통 메뉴바
  - 대부분 상단에 위치함
* `.lnb (Local Navigation Bar)` :
  - gnb를 누를 경우 소제목 형식으로 나오는 메뉴
  - 현재 서비스 영역만 해당함 (딱 그 서브페이지에만 있는 메뉴)
  - 네비게이션을 통해 특정 지역으로 가는 네비게이션 바
  - 서브메뉴 · 중분류 메뉴 등 분류별로 사용됨
* `.snb (Side Navigation Bar)` :
  - 메인메뉴 · 서브메뉴를 제외한 나머지 사이드 메뉴 (좀 기타등등의 메뉴)
  - 보편적으로 왼쪽에 많이 있어서 LNB(Left Navigation Bar)라고도 하는데 오른쪽에있는 경우도 많음요
  - 기타 메뉴바 라고도 한다.
* `.fnb(Foot Navigation Bar)` :
  - 하단메뉴 · 하단로고 · 주소 · 카피라이팅 영역
* `.nav` : 각 영역별로 네비게이션 만들때 쓰임. (html5의 시맨틱태그로도 있다.)

<br>

### 팝업 관련 예약어
* `popup, pop` : 팝업
* `popWrapper` : 팝업 페이지 전체 영역 그룹핑
* `popHeader` : 팝업 머리글 영역
* `popContainer` : 팝업 본문영역 그룹핑
* `popContent` : 팝업 주용컨텐츠 영역
* `popFooter` : 팝업 바닥글

<br>

### 대체택스트 관련
* `blind` : 블라인드 (내가 주로쓰는거)
* `ir_pm` : 이미지 대체택스트용도 (text-indent)
* `ir_wa` : 이미지 대체택스트용도 (z-index)
* `screen_out` : 숨김 텍스트 용도 (absolute)
* `screen_hide` : 숨김 텍스트 용도 (visibility)

<br>

## 🔧분류별 Prefix 네이밍 단어집 모음
### 타이틀
* `title, tit`

### 영역
* `section, sec` : 제목 태그(heading tag)를 지닌 영역 구분이다. 선택적으로 사용되고 중첩(섹션 안에 섹션)사용은 안된다. (*아마 이 클래스명을 쓴다면 html5의 <section>도 써야할듯)
* `wrap` : 일반 영역 묶음(선택적사용O, 중첩X)
* `inner, inn, fence` : 부모 wrapper가 존재하지만 자식 묶음이 단독으로 필요할 경우 사용.
* `area` : wrap보다 하위개념으로 부분 영역 (예: left-area, right-area)
* `box` : area보다 하위개념으로 디테일한 컨텐츠 모아놓을때 (예: price-box)
* `spot` : 강조하는 상위 콘텐츠 영역
* `sta` : 서비스이름, 연관서비스, 검색영역
* `aside` : 문자의 중요 부분을 표시하고 '남은' 콘텐츠 영역

### 꾸밈 요소(스타일링)으로 자주쓰임
* `box`
* `ico` : 아이콘
* `line-방향` : 일반 실전 (solid)
* `line-dot-방향` : 점선 (dott)
* `bg` : 배경(background)

### 버튼
* `btn`

### 상품진열 위주로 쓰이는거
* `thumb`
* `pagenation` : 사용자가 다음에 로드 할 페이지를 선택할 수 있도록 일련의 페이지 번호를 제공하는 UI 요소 (이전, 다음, 페이지숫자들)
* `paging` : 페이지네이션과 같은 개념
* `pager` : 페이징에서 숫자가 없을때 (이전, 다음 버튼만)
* `banner, bnr`

### 탭
* `tab` : 탭UI 사용될때

### 테이블
* `table, tbl` : 테이블 영역, 또는 테이블로 사용할 영역

### 목록
* `list` : 일반 목록, 목록 묶을때 (ul, ol, dl에 주로사용)
* `item` : 목록 묶음 (ul>li, dl>dd)

### 서브메뉴 생길때
* `depth` : 드롭다운, 서브메뉴 사용
  ```html
  <li>
    <a>대분류버튼</a>

    <div class="depth1">
      <ul>
        <li>
          <a>중분류(서브메뉴)</a>

          <div class="depth2">
            <ul>
              <li>
                <a>세분류(소메뉴)</a>
              </li>
            </ul>
          </div>

        </li>
      </ul>
    </div>

  </li>
  ```

### 폼 영역
* `tf` : textfield (input에 있는 text타입, textarea타입)
* `inp` : input의 radio, checkbos, file 등등
* `opt` : selectbox(셀렉트박스)
* `label, lab` : 라벨
* `fid` : field set

### 텍스트
* `text` : 일반 텍스트
* `text-bar` : 구분선 텍스트
* `num` : 일반 숫자
* `copyright, copy` : 카피라이트(저작권)
* `time` : 날짜 및 시간

### 이미지류
* `img` : 이미지(image)
* `pic` : 사진,포토 (picture)

### 링크
* `link` : 일반 링크
* `more-link,  linkMore` : 더보기 링크

<br>

## 🔧subfix 네이밍 단어집 모음
부가설명 용도로 사용되는 약어들이다 (modifiy개념인가)
### 공용
* `comm` : 전역으로 사용되는 공통적이고 포함되는것 (common)

### 위치
* `top`
* `mid`
* `bot`
* `left`
* `right`

### 순서
* `fst` :첫번째(first)
* `lst` :마지막(last)

### 그림자
* `shadow`

### 화살표
* `arr`

### 방향
* `hori`
* `vert`

### 카테고리
* `cate`

### 순위
* `rank`

<br>

## 🔧suffix 네이밍 단어집 모음
상태, 변화와 관련된 예약어들이다.
### 상태변화
* `_on`
* `_off`
* `_over`
* `_hit`
* `_focus`
* `_active`

### 위치변화
* `_top`
* `_mid`
* `_bot`
* `_left`
* `_right`

### 순서변화
* `_fst` :첫번째(first)
* `_lst` :마지막(last)

### 이전, 다음
* `_prev` : 이전
* `_next` : 다음

<br>

### 분류하기 애매함
* `	layer` : 레이어
* `path` : 현재 페이지의 경로
* `ad` : 광고 엘리먼트
* `cmt` :댓글
* `indent` : 들여쓰기
* `desc` : 상세 내용 (description)
* `emph` : 강조
* `widget_소개명` : 위젯

<br>

### 💡TIP
* 프로젝트에 참여하게 된다면 `코드컨벤션(Code Convention) 또는 코딩 컨벤션 (Coding Convention) `이 있냐고
물어보는것이 좋다.
* 무언가 반대가 되는것은 `un`을 사용하면 좋다.
  ```js
   var wrap = 'wrap은 감싼다는 뜻'
   var unwrap = 'unwrap은 감싼것에 반대되는 뜻'
  ```
* `#wrap, #header, #footer`등 앞에 `#`은 아이디 셀렉터인데, 왠만하면 안쓰는게 좋다. (재활용성이 떨어진다.)
<br>

***
<br>

## 참고
* [예약어모음 가이드](http://210.116.77.11/pbGuide/guide/html/rule/rule0106.html)
* [방식1,2로 나뉘어진 정리(<<그냥이사람의 규칙임)](https://bangj.tistory.com/53)
* [CSS naming methodology(BEM)](https://velog.io/@2seunghye/CSS-naming-methodologyBEM)
* [[작업가이드] 파일,CSS 네이밍 규칙](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kty4523&logNo=221586270676)
* [네이밍 규칙과 예약어(짜잘한거많음)](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=walking_w&logNo=221035750888)
* [개발쪽 영역 단어](https://brunch.co.kr/@hopeless/8)
