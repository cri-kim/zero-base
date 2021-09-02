# 목차
- CSS 개요
# CSS 개요
> CSS(Cascading Style Sheets)  
> .css 라는 확장자를 가진 파일을 뜻하며, 해당 확장자를 가진 파일이 웹 문서의 스타일을 관리하는 파일이다.
> CSS는 HTML 과 같이 WWW를 통해서 관리되고 권고사항이 있다. 
> CSS 3 부터는 이전 버전과 다르게 모듈별로 다양한 속성과 법칙을 카테고라이징 하였다.(모듈별로 버전과 권고사항이있다.)
## CSS 구조
- CSS 는 룰 기반(Rule-based) 의 언어이다.
- CSS를 통해 특정 요소, 혹은 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.
- 셀렉터(Selector)를 통해 특정 HTML 요소를 선택하여 스타일을 설정할 수 있다.
  - 셀렉터는 HTML 요소의 id, class, 태그 명칭 등이 될 수 있다.
- ```/* 내용 */``` 을 사용하여 주석을 표현할 수 있다.
```
셀렉터 { /* 선언 블럭 시작 */
속성(property) : 값(value);
/*선언 블럭 종료*/}

h1{
  color : red;
  font-size:12px;
}
```
## CSS 적용 방법
- 내부 스타일(embedded)
  - HTML 의 head에 style 태그를 사용하여 스타일을 적용할 수 있다.
```
<html>
  <head>
    <style>
      h1{
        color : red;
      }
    </style>
    <title>제목</title>
  </head>
  <body>
    <h1>title</h1>
  </body>
</html>
```
- 인라인 스타일(inline)
  - HTML 의 한 요소에 속성을 정의하고 직접 사용할 수 있다.
```
<body>
  <h1 style="color:red">Hello, world!</h1>
</body>
```
- 외부 스타일(external)
  - 외부에 스타일 파일(.css)을 만들고 ```<link>'''태그를 사용하여 스타일 파일을 참조해온다.
  - 가장 권장되는 방법이다.
```
<!DOCTYPE html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style/main.css"/>
  </head>
  <body>
    <h1> hello world</h1>
  </body>
</html>
```
## 캐스캐이딩(cascading) 원칙
- 스타일 우선순위
  - 동일한 스타일이라해도 **선언된 곳**에 따라 우선순위가 정해진다.(브라우저에 의해 정의된 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일(색약모드 등))
  - 적용 범위가 적을 수록 우선시된다. (tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일)
  - 소스코드의 순서가 뒤에 있으면 덮어쓴다.
- 스타일 상속
  - 부모 요소에 있는 스타일 속성들이 자식 요소로 전달된다.
    - 자식 요소에 재정의 할 겨우, 부모의 스타일을 덮어쓴다.
  - 상속되지 않는 속성도 있다.(배경이미지, 배경 색 등)
## MDN 활용
> MDN은 웹 표준과 모질라 프로젝트에 대한 개발 문서들이 담긴 모질라 공식 웹사이트이다.  
> 앞으로 필요에 따른 정보 탐색과 업데이트에 대한 자료는 MDN 등의 자료를 통해 학습할 수 있다.



# 참고
[제로베이스](https://zero-base.com)
