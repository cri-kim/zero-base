# 목차
- 구조를 나타내는 요소
- 목록과 표
# 구조를 나타내는 요소
## 컨테이너(div, span)
 - div
   - 플로우 콘텐츠를 위한 통용 컨테이너이다. 
   - CSS 를 꾸미기 전에 콘텐츠나 레이아웃에 어떠한 영향을 미치지 않는다.
   - **순수 컨테이너**로서 아무것도 표현하지 않는다.
 - span
   - div 태그와 동일하게 순수 컨테이너이다.
   - 구문 콘텐츠를 위한 통용 인라인 컨테이너이다.
   - 본질적으로 아무것도 나타내지 않는다.
```
<html lang="en">
  <head></head>
  <body>
    <div style="background-color:red"> div</div>
    <span style="background-color:blue">span</span>
  </body>
</html>
```
 - 예제 코드를 실행하면 span과 div가 차지하는 영역에 대한 차이를 확인 할 수 있다.
 - div와 span은 non-semantic 태그이다.
## 시멘틱 웹(Semantic Web)
- header, nav, main, article, aside, footer 등 div와 동일한 요소이지만 의미를 가지고 있는 요소이다.
- non-semantic 태그와 다르게 의미를 생각하고 진행해야한다.
- 의미론적 마크업(=시멘틱 웹 태그)를 사용하면 검색엔진 사용시 중요한 키워드로 쓰일 수 있다.(SEO 최적화)
- 시각 장애가 있는 사용자가 스크린 리더로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있다.
- 의미가 끊임없는 ```div```를 탐색하는 것 보다, 의미있는 코드 블록을 찾는 것이 쉽다.(협업, 유지보수, SEO 등 다양한 방면)
- 개발자에게 태그 안에 채워질 데이터 유형을 제안한다.
- 의미있는 이름짓기(semantic naming)는 적절한 사용자의 정의 요소/ 구성요소의 이름짓기를 반영한다.
### header, footer
- div 와 동일하게 블록 컨테이너로 사용된다.
- header는 **소개 및 탐색에 도움을 주는 콘텐츠**를 나타낸다.
- header/footer 는 전체 웹 페이지에서 하나만 사용되어야 한다.
- header와 footer는 중첩되어 사용될 수 없다
- footer는 일반적으로 **구획의 작성자, 저작권 정보, 관련 문서** 등의 내용을 나타낸다.
```
<!-- Not possible -->
<header><header></header></header>
```
```
<header>
  <h1>소개</h1>
</header>
<footer>
  <a href="github.com/cri-kim">github cri-kim</a>
  <p>제가 작성했습니다. </p>
</footer>
```
### nav, aside
- nav 태그가 들어가는 현재 웹페이지를 기준으로 다른페이지나 메뉴 목차 색인에 대해 지시한다.
- aside 문서의 주요 냉용과 간접적으로 연관된 부분을 나타낸다. 주로 사이드바 혹은 콜아웃 박스로 표현한다.
```
<nav>
  <a href="#">주저리주저리내용으로 이동</a>
  <a href="#">주저리주저리내용2으로 이동</a>
  <a href="#">주저리주저리내용3으로 이동</a>
</nav>
<div>
  <p> 주저리주저리 내용</p>
  <aside> 광고 혹은 주저리주저리 내용 관련된 첨부 내용</aside>
</div>
```
### main
- body 태그에 **단 하나** 생성 할 수 있는 시멘틱 태그이다.
- 주요 콘텐츠의 내용이다.
- Internet explorer 11(IE11)이하 에서 지원하지 않는다. 사용을 위해서는 **ARIA(en-US) 명시**가 필요하다.
```
<main role="main">
</main>
```
### article, section
- article의 경우, 독립적으로 구분해 배포하거나 재사용 할 수 있는 구획을 나타낸다.
- section의 경우 더 적합한 의미를 가진 요소가 없을 때 사용한다. 
- article 안에 여러 개의 section 이 있을 수 있다.
- section 안에 여러 개의 article이 있을 수 있다.

# 목록과 표
## 목록
### Ordered List
- ```<ol></ol>```태그를 사용한다.
- 하위 목록은 ```<li></li>```태그를 사용하여 리스트를 출력한다.
- 기본적으로 숫자로 리스트를 표현한다.
- type 속성을 통해 카운터 타입을 정할 수 있다.
  - A : 대문자 알파벳 사용(A, B, C, D,...)
  - a : 소문자 알파벳 사용(a, b, c, d,...)
  - I : 대문자 로마 숫자 사용(I, II, III, IV,...)
  - i : 소문자 로마 숫자 사용(i, ii, iii, iv,...)
  - 1 : 숫자 기본값 사용(1, 2, 3, 4,...)
- start 속성을 통해 시작하는 숫자를 변경 할 수 있다.
- value 속성을 통해 값을 강제할 수 있다. start 속성처럼 사용할 수 있다.(value 속성은, li에서도 쓸수 있다.)
- reversed 속성을 통해 목록의 순서를 역전할 수 있다.(true/false)
```
<h1>오늘 판매 랭킹</h1>
<ol type="A">
  <li>치킨</li>
  <li>짜장면</li>
  <li>닭발</li>
</ol>
```
### Undered List
- ```<ul></ul>```태그를 사용한다.
- 하위 목록은 ```<li></li>```태그를 사용하여 리스트를 출력한다.
- ul 태그의 하위 li 태그에 ul을 중첩하여 사용 할 수 있다.(ol 도 동일하다)
```
<h1>오늘 공부 내용</h1>
<ul>
  <li>알고리즘 문제풀이</li>
  <li>프론트엔드 인강</li>
  <li>자격증 공부
    <ul>
      <li> 전자계산기 조직 응용기사 실기</li>
      <li> 전자계산기 기사 필기</li>
    </ul>
  </li>
</ul>
```
## 정의 목록 dl, dt, dd
- 어떠한 용어를 정의하거나 설명하는 목록에서 사용한다.
- ```<dt>``` : definition term, 용어 정의
- ```<dd>``` : definition description, 용어 설명 
- 주로 용어 사전 구현이나 메타데이터(키-값 쌍 목록)를 표현할 때 사용한다.
- ```<dt>, <dd>```의 형제 태그로 ```<div>```를 사용할 수 없다.
```
<dl>
  <div>
    <dt>OOP</dt>
    <dd>Object Oriented Programmimg, 객체지향 기법을 뜻하며 대표적으로 java, go 언어 등이 있다.<dd>
  </div>
  <div>
    <dt>1</dt>
    <dd>숫자 1, 한개</dd>
  </div>
</dl>
```
## 표 table, tr, th, td
- table 태그를 사용하여 테이블을 명시할 수 있다.
- tr 태그를 사용하여 테이블 행을 명시할 수 있다.
- th, td태그를 사용하여 테이블의 각각 데이터를 명시할 수 있다.
- th는 테이블의 헤더를 말하는 것으로, 볼드 처리된다.
- td, th에 colspan을 사용하여 데이터 칸을 합칠 수 있다.
```
  <table>
    <tr>
      <th> 이름</th>
      <th> 수도</th>
      <th> 인구</th>
    </tr>
    <tr>
      <th>Korea</th>
      <td>Seoul</td>
      <td>51M</td>
    </tr>
    <tr>
      <th>USA</th>
      <td>W D.C</td>
      <td>300M</td>
    </tr>
    <tr>
      <th>T.land</th>
      <td>bangkok</td>
      <td>69M</td>
    </tr>
  </table>
```
### thead, tbody, tfoot
- html 의 기본 구조처럼 table도 head, body, foot으로 나누어 마크업 할 수 있다.
- 일관성 있는 스타일링을 할 수 있다.
- 유지보수, 데이터의 정의 명시 등에 사용할 수 있다.
- tbody는 여러 개 사용할 수 있다.
- thead, tfoot는 하나로만 사용할 수 있다.
```
  <table>
    <thead>
      <tr>
        <th> 이름</th>
        <th> 수도</th>
        <th> 인구</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td colspan="3">아시아</td>
      </tr>
      <tr>
        <th>Korea</th>
        <td>Seoul</td>
        <td>51M</td>
      </tr>
      <tr>
        <th>T.land</th>
        <td>bangkok</td>
        <td>69M</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td colspan="3">아뭬리카</td>
      </tr>
      <tr>
        <th>USA</th>
        <td>W D.C</td>
        <td>300M</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">전세계</td>
      </tr>
    </tfoot>
  </table>
```
### caption
- caption태그는 표의 설명 또는 제목으로 나타낸다.
- 이전에 배운 figure/figcaption 과 비슷하다.
- caption 태그는 table 태그의 자식들의 **첫번째**로 작성되어야한다.
```
<table>
  <caption> Example Caption</caption>
  <tr>
    <th>1</th>
    <th>2</th>
    <th>3</th>
   </tr>
  <tr>
    <td>1내용</td>
    <td>2내용</td>
    <td>3내용</td>
   </tr>
  <tr>
    <td>1내용1</td>
    <td>2내용2</td>
    <td>3내용3</td>
   </tr>
</table>
```

# 참고
[제로베이스](https://zero-base.co.kr)
