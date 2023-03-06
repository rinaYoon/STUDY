# 개인적인 정리
이것저것 생각 겸 기록

<br>

## 옥션 프로모션 vs 구축
옥션 프로모션과 사이트구축에 대한 방식 비교하기.

### 옥션 프로모션
- 시네틱 태그 안씀 (여러 운영체제를 위해서)
- ❗❗ 프로토콜 비공개 필수 ❗❗
  ```
  http://
  https://
  👇
  // 이거만
  ```
- 사이트에 등록되어있는 폰트가 작업물에 해당되면 그 부분만 하드코딩 작업 하는듯
  - 웹폰트는 G마켓산스, 노토산스만 있음
  - 산돌 관련 웹폰트는 이미지 처리 하나 봄
  - 현재 적용되어있는 모든 프로모션이 전부 이미지 + 접근성 텍스트 방식이라 혼동될 수 있음
  - ❗ 그러므로 꼭 시스템+웹폰트 있는거 확인해서 이미지 or 하드코딩 구분 잘하기
- 모바일
  - 실시간 반응형 추구, 미디어 쿼리 사용하는 관점이 다름
    - 미디어쿼리 사용시 : `vw`사용할때만.<br>
      구축과 다르게 `max-width`가 정해져 있어서 그 이상으로 변하면 안됨
  - ALL 퍼센트와 일부 `vw`로만 작업됨
  - 퍼센트(`%`)일시 `height` 는 `paddig-bottom`으로 변경됨(가변작업)
    - 가변과 그외 퍼센트계산이 생각보다 부모값 변경이 많이 일어난다.<br>
      부모에 있는 `padding, margin`값에도 따라 엘리먼트값이 변함.
- 자주쓰는 클래스명 규칙
  - PC와 모바일 둘다 마크업이 동일해야한다.
  ```html
  <div class="wrapper">
    <!-- 맨 위 타이틀 되는 부분 -->
    <div class="event-header">
      <div class="event-header-fence">
        <div class="event-header-title">...</div>
      </div>
    </div>

    <!-- 프로모션 내 네비게이션 바 -->
    <div class="event-nav"></div>

    <!-- 주 내용들은 여기서 시작 -->
    <div class="event-body">
      <div class="area-???">
        <div class="area-division-header">
          <div class="division-fence">
            ...
          </div>
        </div>
        <div class="area-division-???">
          <div class="division-fence">
            <div class="division-title">...</div>
            <div class="division-???">
              <div class="slot-???">
                <div class="???-title"></div>
                <div class="???-???">
                  <div class="unit-???">
                    <div class="???-title"></div>
                    <div class="???-???">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```

### 구축
- 아직 제대로된 구축경험이 없어서 잘 모름
- 요즘은 IE대응하는 포폴 안만들어도 된다 함
- 구축 클레스 네이밍이랑 프로모션 클레스 네이밍이랑도 비슷할까 궁금해짐
- 모바일
  - `img{width:100%;}`, 크게들가는 1단형 레이아웃 이미지들은 전부 100%임
  - 아이콘류나 일부 작게들어가는 이미지, 폰트들은<br>
    전부 `시안 / 2`만큼 작게 작업함
  - `max-width`를 설정하지 않음 (모든 기기에 적용되어야 하니까)
  - 이미지만 둘 경우라면 가변(`padding-bottom:%`)을 사용하면 되겠지만<br>
    보통 콘텐츠가 들어가는 경우가 많아서 가변이 안먹힐 경우가 많음.<br>
    그래서 `font, line-height, height`는 `vw`작업이 나을지도.

<br>

## 프로모션 별 레이아웃
- 클레스 네이밍인 aria와 division의 순서가 섞여있어서 애매함
- aria 와 division 중 무엇이 `<section>`을 의미하는지 몰겠음
- 정리
  - `area → division` 순서로 하고있는 프로모션이 더 많은 것 같다
    - 펫플러스
    - CGV(종료)
    - 핸들대리
  - area → division 위주로 하는게 더 나아보임

* 옥션별미
  - division → area
  - event-nav 있음
  ```html
    <div id="p_wrapper" class="event-wrapper">
      <div class="event-header">
        <div class="event-header__fence"></div>
      </div>

      <div id="event-nav" class="event-nav">
        <div class="event-nav__item">
          <ul><li></li></ul>
        </div>
      </div>

      <div class="event-body">
        <div class="division division-???">
          <div class="division-header"></div>
          <div class="division-body">
            <div class="area-???"></div>
          </div>
        </div>
      </div>
  </div>
  ```
* 펫플러스
  - area → division
  - event-nav 없음, area 영역에 있음(fixed가 되지 않는 nav)
  ```html
  <div id="p_wrapper" class="event-wrapper">
    <div class="event-header">
      <div class="event-header__fence"></div>
    </div>

    <div id="event-nav" class="event-nav">
      <div class="event-nav__item">
        <ul><li></li></ul>
      </div>
    </div>

    <div class="event-body">
      <div class="area-???">
        <div class="area-division-header">
          <div class="division-fence"></div>
        </div>
        <div class="area-division-???">
          <div class="division-fence">
            <div class="division-title"></div>
            <div class="division-???"></div>
          </div>
        </div>
      </div>
      <!-- aria 영역에 있는 nav -->
      <div id="area-nav" class="area-nav">
        <div class="area-nav-fence"></div>
      </div>
    </div>
  </div>
  ```
* 매일플러스
  - 아예 slot 으로 되어있음
  - 매우짧고 오브젝트용 `<div>`가 있음
  ```html
  <div id="p_wrapper" class="event_wrapper">
    <div class="event_header">
      <div class="slot_???"></div>
    </div>

    <div class="event_body">
      <div id="contentSlot01" class="slot_???"></div>
      <div class="slot_smile_club"></div>
      <div class="object_plus object_plus--01"></div>
      <div class="object_plus object_plus--02"></div>
      <div class="object_plus object_plus--03"></div>
    </div>
  </div>
  ```
* CGV(종료됨)
  - area → area-section-??? → division
  - division 은 area-section-??? 에서 더 구분할때 사용하나봄
  - event-nav 있음
  ```html
  <div id="p_wrapper" class="event_wrapper">
    <div class="event_header">
      <div class="event-header__fence"></div>
    </div>

    <div id="event-nav" class="event-nav" role="navigation" aria-label="event navigation"></div>

    <div class="event_body">
      <div class="area-???">
        <div class="area-header">
          <div class="area-fence"></div>
        </div>

        <div class="area-section-???">
          <div class="area-fence">
            <div class="division-???">
              <div class="division-fence"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```
* 핸들대리 (팀장님 파트)
  - area → division
  - area 안에는 바로 division로 시작하는 것 같음
    - (* 'area-section-???', 'area-division-???' 이렇게 모호하게 섞인게 없음)
  - division안에는 추가적인 그룹이 없이 blind가 대다수
  - event-nav 없음
  ```html
  <div id="p_wrapper" class="event-wrapper">
    <div class="event-header">...</div>

    <div class="event-body">
      <div class="area-???">
        <div class="division-fence">...</div>
      </div>
    </div>
  </div>
  ```
* 쿠폰존 (팀장님 파트)
  - area-slot-??? → division-slot → box → module
  - 세부적인 디테일한 레이아웃은 'module'로 지어져있다
  - module은 팝업이나 로그인정보로 되어있는게 많다
  ```html
  <div id="p_wrapper"  class="event-wrapper">
    <div class="event-header">
      <div class="event-header__fence"></div>
    </div>

    <div class="event-nav">
      <div class="event-nav__item"></div>
    </div>

    <div class="event-body">
      <div class="area-slot-???">
        <div class="area-slot__fence">
          <div class="division-slot">
            <div class="box-???"></div>
            <div class="box-module">
              <div class="module-header"></div>
              <div class="module-body"></div>
              <div class="module-notice"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```