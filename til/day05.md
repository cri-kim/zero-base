# 목차
- 전역 속성

# 전역 속성(Global Attribute)
> 어떠한 태그에서도 사용할 수 있는 속성을 말한다.
## id
- 문서 전체에서 유일한 고유 식별자(ID)를 정의한다.
- 작성 방법
  - id에는 공백이 들어갈 수 없다.
  - 시작은 영문 소문자로 작성한다.
## class
- 문서에서 요소에 접근을 도와주는 접근자이다.
- 고유하지 않으며 그룹을 지을 수 있다.
- 단일 뿐만 아니라 다수로 지정할 수 있다. 다수의 클래스를 선언할 경우 공백(' ') 으로 구분한다.
```
<body>
  <div id="first"></div>
  <div class="group first"></div>
  <div class="group second"></div>
  <div class="group third"></div>
</body>
```
## style
- 태그에 하나의 속성으로 스타일을 적용해 주기 위해 사용한다.
- 권장하는 css 스타일링 기법은 아니다.
- 테스트 등 빠른 스타일링을 위한 목적으로 사용된다.
- 해당 스타일 속성을 사용하면 외부 스타일보다 해당 스타일을 우선시한다.
```
  <body>
    <div style="background:#ffe7e8;"></div>
  </body>
```
## 기타 속성
- title
  - 태그와 관련된 추가 정보를 제공하는 텍스트로 나타낸다.
  - 태그에 작성하면 해당 태그에 title 내용을 툴팁으로 확인할 수 있다.
  - title 내의 내용은 개행, 공백 등을 그대로 표현한다.
  - 상위/하위 요소에 모두 타이틀이 있다면, 하위 요소의 타이틀이 우선적으로 출력된다.
```
<body>
  <!-- mouse over 시 툴팁이 나온다. -->
  <div title="첫번째 요소">안녕하세요</div>
  <div> 반갑습니다.</div>
</body>
```
- lang
  - language 태그이며, 요소 내의 수정불가능한 텍스트의 언어나 수정 가능한 텍스트가 사용해야 하는 언어를 정의한다.
  - 컨텐츠를 읽는 사람의 언어를 명시한다.
  - 웹 접근성을 높이기 위해 작성한다.
```
<!-- lang 속성을 통해 전체 문서 언어 표현 -->
<html lang="ko">
  <div> 한국어</div>
  <!-- 일부 영어로 된 문장에 대한 작성, 빠르게 캐치해낼 수 있다. -->
  <div lang="en"> English</div>
</html>
```
- data
  - ```data-사용자 정의 속성```의 형식으로 사용자가 속성을 정의할 수 있다. (data-columns, data-index,...)
  - 주로 자바스크립트로 작성하였을때, 내부 컨텐츠에 대한 정보를 최적화하여 해석하기 위해 작성한다.
```
  <article
    id="electriccars"
    data-columns="3"
    data-index=number="1"
    data-parent="car">
    ...
  </article>
```
- draggable
  - 요소의 드래그 가능 여부를 나타내는 열거형 속성이다. true/false로 되어있다.
  - 요소에 따라 default 값이 다르다.
  - 자바스크립트에서는 요소의 draggable 에 대한 이벤트 내용을 읽어들일 수 있다. 이러한 요소를 가지고 웹 화면을 관리할 수 있다.
```
<!-- 이미지 태그에서는 draggable 기본값이 auto 이다. -->
<img src="이미지 경로" draggable="false">
```
- hidden
  - 요소가 아직, 또는 더이상 관련이 없음을 나타내는 속성이다.
  - true/false로 되어있으며, hidden을 추가하게 된다면 브라우저, 스크린 리더에서 확인할 수 없다.
  - 화면에는 보이지 않지만 개발자도구(F12)에서 확인이 가능하다. 즉, 보안상의 아이템으로 사용하면 안된다.
  - css의 display 속성으로 hidden 처리된 태그를 보이게 할 수 있다.
# 참고
[제로베이스](https://zero-base.co.kr)
