# 목차
- 개요
- HTML

# 개요
## HTML/CSS 공부해야하는 이유
- HTML과 CSS 가 없는 웹 개발은 없다.
- 기초가 탄탄하지 못하면 이후에 발목을 잡는 일이 생길 수 있다.

## HTML, CSS, Javascript 요약
- HTML
  - 웹 문서의 기본적인 골격을 담당
  - 구조를 잡는데 사용
  - HyperText : 다른 위치나 다른 이미지로 이동시키는 글자이다. HTML에서는 웹문서를 이루고 있는 요소들을 의미한다.
  - Markup 언어 : 제목, 단락, 목록 등과 같이 본문을 위한 구조적 의미를 나타내는 언어
  - 프로그래밍 언어 : 데이터를 가공하거나 어떠한 액션을 취하는 언어
- CSS
  - 각 요소들의 레이아웃, 스타일링을 담당
- Javascript 
  - 동적인 요소(사용자와의 인터랙션)을 담당

## 웹 표준 · 웹 접근성 · 웹 호환성
### 웹 표준(Web Standards)
> 브라우저(크롬, 파이어폭스, 사파리, 웨일 등)에서는 개발자가 작성한 HTML 파일을 읽고 화면에 출력시켜준다.
> 이 브라우저들은 개발사, 개발자, 기획자 등 모든게 다 다른 구성원들이다. 이로인해 각 브라우저마다 지원하는 기능이 다르다.
> 하지만, 모든게 다 다르다면 개발자들이 만든 코드가 각 브라우저마다 다르게 노출될 수 있는 문제가 발생한다.
> 그로인해 개발자가 모든 코드들을 브라우저에 맞게 개발을해야하고 이로인해 가독성과 개발 생산성이 낮아질 수 있다.
> 이것을 막기 위해 브라우저 개발사들간 법칙을 만든 것이 *웹표준(Web Standards)* 이다.

- 웹표준은 대표적으로 HTML5를 일컫는다. W3C에서 2014년 공식 표준화 하였다.
- 웹 표준을 준수하여 작성한다면 운영체제, 브라우저마다 의도된 대로 보여지는 웹 페이지를 만들 수 있다.
- HTML 표준화 이전에는 익스플로러와 액티브 X처럼 독자적인 플러그인이 존재하기도한다.

### 웹 접근성(Web Accessibility)
- 웹 접근성은 *장애를 가진 사람과 장애를 가지지 않은 사람 모두가 웹 사이트를 이용할 수 있게 하는 방식*을 가리킨다.
- 사이트가 올바르게 설계되어 개발되고 편집되어 있을 때 모든 사용자들은 정보와 기능에 동등하게 접근할 수 있다.
- 웹 브라우징에 쓰이는 보조 과학기술(스크린 리더, 화면 돋보기, 음성인식, 키보드 오버레이 등)

### 웹 호환성(Cross Browsing)
- 웹 브라우저 버전, 종류와 관계 없는 웹 사이트 접근
- 웹 표준 준수를 통한 브라우저 호환성 확보
  - HTML, CSS 문법 준수
  - 동작, 레이아웃, 플러그인 호환성

# HTML(HyperText Markup Link)
## 태그(Tag)
- 웹 페이지를 구성하고 있는 요소(element) 하나하나를 "태그" 라는 표기법을 작성한다.
- 태그를 통해 어떤 요소인지 (제목, 본문, 이미지, 비디오 등) 명시한다.
- 태그의 이름은 HTML5 웹 표준에 맞게 작성한다.
- 태그는 대소문자를 구분하지 않는다. 하지만 HTML5에서는 모두 **소문자**로 작성하는 것을 권장한다.
```
<p> 내용 </p>
```
- 여는 태그(Opening tag) : <요소의 이름>
- 닫는 태그(Closing tag) : </요소의 이름>
  - **/** 를 사용하여 여는 태그에 매핑되는 태그를 닫는다. 여는태그 ~ 닫는태그 안의 내용은 해당 태그의 속성에 영향을 받는다.
- 내용(Content) : 요소의 내용
  - 태그의 속성에 영향을 받는 요소의 내용이다.
- 요소(Element) : 여는 태그, 닫는 태그, 내용을 통틀어 요소라고 한다.
### 빈 요소(Empty element)
- 태그 중에서는 내용(Content)가 없는 태그가 존재한다. 이미지, 수평선, 줄바꿈 등을 명시하는 태그이다. 
- 내용이 없는 빈 요소를 빈 요소(Empty Element)라고 부른다.
- 이 경우에는 닫는 태그를 추가로 명시하지 않는다.
- HTML5는 빈요소 뒤에 **/** 를 넣지 않아도 자동으로 인식한다.(이전 표준은 엄격하여 필수로 삽입했어야 했다.) 

```
<br>
<br/>
<hr>
<img src="">
<meta charset="utf-8">
<input type="text" name="name>
```
### 요소의 중첩(Nesting)
- 요소 안에 다른 요소가 들어가는 **포함관계**를 성립할 수 있다.
- 여러 요소가 중첩될 경우에는, 열린 순서의 반대로 닫혀야한다.
- 요소의 포함관계(부자관계)를 구분하기 위하여 **들여쓰기**를 사용한다.
```
<!DOCTYPE html>
  <head>
  </head>
  <body>
    <h1>요소 안에 <strong>다른 요소가</strong> 들어 갈 수 있습니다.
    <ul>
      <li>하나</li>
      <li>둘</li>
      <li>셋</li>
    </ul>
  </body>
</html>
```
* 화면 출력 예시
<!DOCTYPE html>
  <body>
  <h1>요소 안에 <strong>다른 요소가</strong> 들어 갈 수 있습니다.</h1>
    <ul>
      <li>하나</li>
      <li>둘</li>
      <li>셋</li>
    </ul>
  </body>
</html>
## 주석(Comments)
- 브라우저는 주석을 무시하여 사용자가 주석을 보이지 않게한다.
- 주석의 목적은 코드에 메모를 추가하거나, 혹은 사용하지 않는 코드를 임시로 처리하기 위함이다.
```
<p>I'm not inside a comment</p>
<!-- <p> I am! </p>-->
```
* 화면 출력 예시
<p>I'm not inside a comment</p>
<!-- <p> I am! </p>-->
### 주석의 사용
- 주석은 필요한 경우 사용하자
- 경험
 - 주석이 있을 경우에는 대부분 협업시 주석에 대해 한번 확인하게 된다. 필요없는 주석이 있을 경우는 그만큼 같이 협업하는 사람들이 불필요한 시간을 소모하게 되는 것이다.
 - 테스트, 코드의 버전, 호환성 등 여러 요소로 기존에 있던 코드를 주석처리 하거나 주석을 사용할 수 있다.
 - 개인적으로 *주석이 없는 코드를 지향하자* 라는 생각을 가지고 있다. 주석이 없이 코드를 보고 이해할 수 있는 **클린한 코드**를 선호한다.
 - 어디까지나 지향이다. 상황에 따라 주석을 쓰는 경우가 많다.

## HTML 문서의 구조
```
<!DOCTYPE html> <!-- 페이지 전체의 컨텐츠를 감싸는 루트(root) 요소 -->
  <head>
    <!-- HEAD 영역 -->
    <!-- 웹 브라우저 화면에 직접적으로 나타나진 않는 웹페이지 정보 -->
    <title>
      <!-- 브라우저 상단 탭에 노출되는 타이틀-->
    </title>
    <meta charset="utf-8"> <!-- 문서의 일반적인 정보와 문자 인코딩을 명시 -->
  </head>
  <body>
    <!-- BODY 영역 -->
    <!-- 브라우저 화면에 나타나는 모든 콘텐츠 -->
  </body>
</html>
```
### Head 태그
- HTML <head> 요소는 기계가 식별할 수 있는 문서 정보(메타데이터)를 담는다.
- 정보로는 문서가 사용할 제목, 스크립트, 스타일 시트 등이 있다.
### Body 태그
- HTML <body> 요소는 HTML 문서의 모든 내용을 나타낸다. 한 문서에 하나의 <body> 요소만 존재할 수 있다.
### 태그를 구분짓는 특성
1. 구획을 나누는 태그
  - 단독으로 사용했을 때에는 눈에 보이지 않는다. (내부에 item 이 없을 경우 나오지 않는다.)
  - 여러가지 요소들을 묶어서 그룹화
  - <body> 내에서만 사용할 수 있다.

2. 그 자체로 요소인 태그
  - 단독으로 사용했을 때에도 눈으로 확인할 수 있다.
### 블록과 인라인
  1. 블록(Block)
  - 블록 레벨 요소는 언제나 새로운 줄에서 시작하고, 좌우 양쪽으로 최대한 늘어나 가능한 모든 너비를 차지한다.
  
  2. 인라인(Inlin)
  - 인라인 요소는 줄의 어느 곳에서나 시작할 수 있다.
  - 바로 이전 요소가 끝나는 지점부터 시작하여, 요소의 내용(content)만큼만 차지한다.
  
  > 📚포함 규칙
  >> 같은 형태의 다른 요소를 안에 포함할 수 있다.(블록 ⊂ 블록, 인라인 ⊂ 인라인)
  >> 대부분의 블록 요소는 다른 인라인 요소도 안에 포함할 수 있다.
  >> ⚠인라인 요소는 블록 요소를 포함할 수 없다. (블록 ⊄ 인라인)
### 콘텐츠 카테고리
  - HTML5부터 비슷한 특징을 가진 요소끼리 묶어서 7가지 카테고리로 세분화
  - 하나의 HTML 요소가 여러 콘텐츠 카테고리 내의 포함관계에 들어갈 수도 있다.  
  
  | 이름 |내용  |
  |--|--|
  |메타데이터 콘텐츠(Metadata Contents) | 문서의 메타데이터(정보), 다른 문서를 가리키는 링크 등을 나타내는 요소|
  |플로우 콘텐츠(Flow Contents) | 웹 페이지상에서 메타데이터를 제외하고 거의 모든 요소, 보통 텍스트나 임베디드 콘텐츠를 포함|
  |섹션 콘텐츠(Section Contents) | 섹션 제목(heading)과 관련된 요소|
  |프레이징 콘텐츠(Phrasing Contents) | 문단에서 텍스트를 마크업 할 때 사용
  |임베디드 콘텐츠(Embedded Contents) | 이미지나 비디오 등 외부 소스를 가져오거나 삽입할 때 사용되는 요소(=내장 콘텐츠)
  |인터렉티브 콘텐츠(Interactive Contents) | 사용자와 상호작용을 위한 컨텐츠 요소
  
# 참고
- [제로베이스](https://zero-base.co.kr/,"go zerobase")