# 목차
- 실습환경 셋팅
- 메타데이터 요소
- 텍스트 요소

# 실습환경 셋팅
## IDE(Integrated Develope Environment)
- 통합 개발 환경
- 개발을 할때 필요한 여러가지 툴을 한 프로그램을 통해 사용할 수 있도록한다.
- visual studio code, intelliJ, Xcode, Eclipse 등
### Visual Studio Code
- 설치 예제 : https://67crystalk.tistory.com/63?category=432627
- IDE 들은 다양한 확장프로그램을 지원한다. 필요에 따라 설치하여 진행 할 수 있다.
- 에디터 창 제어 단축키
  - 현재 창 닫기 ctrl+w
  - 닫은 창 다시 열기 ctrl + shift + t
  - 사이드바 토글 ctrl+ b
  - 사이드바 탐색기 ctrl+shift + e
  - 사이드바 + 전체검색  ctrl + shift + f
  - 에디터 확대 ctrl + +(=)
  - 에디터 축소 + -
- 소스코드 편집 단축키
  - 들여쓰기 tab 혹은 ctrl + ]
  - 내어쓰기 shift tab 혹은 ctrl + [
  - 아래 행 삽입 ctrl + enter
  - 위에 행 삽입 ctrl + shift + enter
  - 현재 행 이동 alt + 위 방향키/아래 방향키
  - 현재 행 복사 alt + shift + 위 방향키/아래 방향키
  - 현재 행 삭제 ctrl + shift + k
  - 주석 토클 ctrl + /

## 웹 에디터(편집기)
- HTML 문법에 맞추어 편리하게 작성할 수 있도록 도와주는 편집기
- 문법에 따라 색깔, 들여쓰기 등을 구분할 수 있다.
- 온라인 웹 에디터 : https://jsbin.com, https://replit.com, https://codepen.io

# 메타데이터 요소
> 데이터를 위한 데이터를 설명하는 내용을 메타 데이터라고 한다. 
> 웹페이지마다 검색 엔진을 통해 데이터를 노출한다. 이 데이터를 분류하기 위해서 메타데이터를 사용한다.
## HTML header
> <head> 요소의 내용은 현재 페이지에 대한 메타 데이터(meta data)를 포함하는 일을 한다.
### <title>
> 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서의 제목을 정의한다. 텍스트만 포함 할 수 있다. 문서에 하나만 존재할 수 있다.
- 페이지 제목과 SEO
  - 페이지 제목은 SEO에 큰 영향을 준다. 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 내는 경우가 많다.
  - 검색 엔진이 결과 페이지의 순서를 결정하는 구성 요소 중 하나가 페이지 제목의 내용이기 때문이다.
  - 검색 결과에서 잠재적 독자의 주목을 끌 수 있는 최초 "훅"이 제목이다.
  - 좋은 제목을 작성하는데 참고할 지침
    - 하나 혹은 두개의 단어로만 제목을 구성하는 것을 피하고, 콘텐츠를 설명하는 문장을 넣거나 참고 문서의 용어와 정의를 짝지어 사용하라
    - 노출 될 수 있는 제목의 길이 (55~60자)로 작성하여 뒷부분이 잃더라도 내용을 잃지 않도록 주의해라
    - "키워드 뭉치" 스타일의 단어 나열에 불과한 제목은 회피하라
    - 제목을 사이트내에 겹치지 않도록 주의하라
- 예제
```
  <title>흥미로운 내용</title>
```
### <meta>
> <base>,<link>,<script>,<style>,<title>과 같은 다른 메타 관련 요소로 나타낼 수 없는 메타데이터를 나타낸다.
- 메타태그가 여러개 필요할 경우, 여러 개 작성한다. 
- 메타태그는 내용이 없으므로 모든 내용을 속성(attribute)로 표현한다.
- name 속성
  - content 속성과 같이 사용해야한다.
- application-name
  - 웹 페이지에 구동 중인 애플리케이션 이름
- viewport
  - 웹페이지에서 볼 수 있는 모든 페이지에 대해 정의한다.
- mime 타입
  - 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘
  - 구조
    - type/subtye(주호 확장자)
    - text/plain, text/html, image/jpge, application/octect-stream,multipart/form-data, ...
- 예제
```
  <meta name="application-name" content="github"/>
  <meta name="viewport" content="width:device-width, inital-scale:1.0"/>
  <meta name="" content=""/>
  <meta />
  <meta />
```
### <style>
> CSS 스타일을 지정해오기 위한 태그이다.
- 내부에서 스타일을 직접 지정할 수 있다.
```
<head>
  <style>
      p { color:red;}
  </style>
</head>
```
- 외부의 스타일 파일을 가져와 적용할 수 있다.
- 여러개 중복될 경우 후자가 선자의 스타일을 override 한다.
### <scrpt>
> 데이터와 실행 가능한 코드를 문서에 포함할때 사용하며 보통 javascript 코드와 함께 사용한다.
- script 는 html의 최 하단부에 작성하는 것을 권장하고 있다.
  - html의 모든 요소들이 화면에 출력 된 이후 작업을 하기 위해
  - javascript 동작에 데이터를 로딩하는 데에 시간이 걸리기 때문에, 오래걸리는 작업을 후반부에 진행하기 위해
  
```
  <script src ="자바스크립트 주소"></script>
  <script> alert("test")</script>
```
# 텍스트 요소
> HTML 에서는 다양한 텍스트를 나누는 요소가 존재합니다. 
- h1 ~ h6
  - heading tag
  - 숫자가 커질수록 해당 텍스트의 크기가 작아진다.
```
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
```
- p
- br, hr
  - 두 요소는 빈 요소 이기 때문에 닫을때 닫기를 하지 않아도 문법적으로 문제가 없다.
  - br 태그는 한줄 띄워쓰기를 지원한다.
  - hr 태그는 수평선 작성에 사용한다.
```
  <br>
  <br/>
  <hr>
  <hr/>
```
- blockquote, q
  - 블록 인용 태그
```
  <blockquote cite="https://출처 사이트 경로">
    <p> 긴문장의 인용 문구 작성</p>
  </blockquote>
  <q cite="출서사이트 경로"> 단문의 인용문구 </q>
```
- pre
  - 미리 서식을 지정한 텍스트를 나타낸다.
  - 작성된 서식, 공백문자 등을 그대로 유지한다.
```
  <pre>
    L   TE
    A   A
    A Aa
    ccc
  </pre>
```
- figure, figcaption
  - figure는 독립적인 콘텐츠를 표현한다.
  - figure는 figcaption을 사용하여 설명을 붙일 수 있다.
```
  <figure>
    <img src="이미지 경로" >
    <figcaption>콘텐츠 설명설명설명</figcaption>
  </figure>
```
- abbr, address, cite, bdo
  - abbr의 경우, 내부 콘텐츠에 마우스를 올리면 등록한 title 의 값을 캡션으로 확인 할 수 있다.
  - address의 경우, 주소를 나타낸다는 의미의 컨텐츠를 작성하였다.
  - cite의 경우, 인용의 출처를 의미한다.
```
  <p>
    <abbr title="world wide web"> www</abbr>
  </p>
  <address>
    https://67crystalk@tistory.com
  </address>
  <figure>
    <blockquote cite="cri-kim">
      <p>it is a content</p>
    </blockquote>
  </figure>
  <p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
  <p> <bdo dir="ltr">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```
- b, strong
  - 텍스트에 포메팅을 할 수 있는 태그들이다.
  - 작성된 문자들에 대해 굵기, 기울기 등의 모양을 변경시켜 의미를 부각시키기 위해 사용한다.
```
<p>
  <b>b 태그는 굵은 글씨 요소를 말한다.</b>
  <strong>strong 태그는 보통 굵은 요소를 보여준다. 하지만 브라우저마다 다를 수 있다. 일단 중요/긴급한 콘텐츠를 나타낸다.</strong>
</p>
```
- i, em
  - 두 태그는 b,strong 과 같이 텍스트 포메팅 태그들이다.
  - 보통 둘다 기울임 꼴로 텍스트를 표현한다.
```
<p>
  <i>텍스트에서 어떠한 이유로 주위와의 구분을 위해 사용한다. 기술용어, 외국어 구정, 등장인물 생각 등을 예시로 든다.</i>
  <em>텍스트의 강세를 나타낸다.</em>
</p>
```
  
- mark, small, sub, sup
  - 텍스트에포메팅을 할 수 있는 태그들이다.
```
  <p>
    <mark>강조</mark>
    <blockquote>
      인용문구를 작성하고 <mark>중요한 내용</mark>을 이렇게 지정합니다.
    </blockquote>
  </p>
  <hr>
  <p><small>단순히 글씨를 작게 쓰는 것이 아니라, 첨부하고 싶은 내용을 작성한다.</small></p>
  <p>
    2의 2승  ( 2<sup>2</sup> )
    1번째 x(x<sub>1</sub>)
  </p>
```
- del, ins, code, kbd
  - delete 는 삭제된 요소가 있을 때 사용한다.
  - ins 는 추가된 요소가 있을 경우 사용한다.
```
  <p>
    이 <del>내용</del>은 이제 더 이상 사용하지 않습니다.
    이 내용은 <ins>추가 하고 싶은 내용</ins> 입니다.
  </p>
  <p>
    <code>pre</code> 태그와 비슷하지만  <code>pre</code> 처럼 문장이 아닌 한줄의 코드를 나타낸다.
     <code>pre</code> 는 여러줄의 코드를 나타낸다.
  </p>
  <p>
    <kbd>shift</kbd> 등의 키보드 요소 표현
  </p>
```
- a
  - a 태그는 앵커 요소를 의미한다.
  - 사용할 수 있는 속성과 사용에 대한 내용이 다양하다.
  - 다른 페이지나 같은 페이지의 어느 위치, 파일로 이동하는 동작을 사용한다.
  - href 는 hypertext reference 라는 의미로 a 태그가 목적지로 지정하는 주소 값(URL)을 의미한다.
  
```
  <a href="https://www.naver.com">Naver</a>
```
- entity
  - <,>,",& 등의 특수문자 예약어는 HTML 구문 자체의 일부로 작성 시, html이 읽어드린다.
  - 예약어, 스페이스, 태그 등을 문자 그대로 출력하기 위해 사용하는 것을 엔티티라고 한다.
```
  <p> 다섯개의 스페이싱(     )</p>
  <!-- 실제 html 을 쓰면 스페이싱이 나오지 않는다. -->
```
 |문자 | character reference equivalent|
  |--|--|
  |<|&amp;lt;|
  |>|&amp;gt;|
  |"|&amp;quot;|
  |'|&amp;apos;|
  |&|&amp;amp;|
  |스페이싱|&amp;nbsp;|
  
# 참고
- zero-base(https://zero-base.co.kr)
-  김크리 블로그 (https://67crystalk.tistory.com)
