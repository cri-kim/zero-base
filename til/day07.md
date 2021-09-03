# 목차
- CSS 선택자(셀렉터)
# CSS 선택자(셀렉터)
> 셀렉터는 하나의 CSS 규칙을 만들때 어떤 HTML 요소를 선택할지 정하는 것이다.  
> CSS 뿐만 아니라 자바스크립트 또한 셀렉터를 통해 요소를 고르고 동작을 커스텀할 수 있다.
## 주요선택자
- type selector
  - 태그의 이름을 기준으로 스타일을 적용한다.
  - 특정 요소를 선택할 수 있는 것이 아니라 해당 태그에 전역적으로 적용된다.
  - 하나의 HTML에서 일관성 있는 스타일을 적용할때 사용한다.
```
h2{
 color:purple;
}
```
- id selector
  - HTML 태그의 전역 속성인 id 를 기준으로 스타일을 적용한다.
  - id의 이름은 하나의 HTML에서 중복하여 사용할 수 없다. 즉, 하나의 단독 요소에 대해 스타일을 적용할 수 있다.
  - #을 id 앞에 붙여 셀렉터로 사용한다.
```
<head>
  <style>
    #first{
      color:green
    }
  </style>
</head>
<body>
  <ul>
    <li id="first" class="list">하나</li>
    <li class="list">둘</li>
    <li class="list">셋</li>
  </ul>
</body>
```
- class select
  - HTML 태그의 전역 속성인 class 를 기준으로 스타일을 적용한다.
  - class 는 id와 다르게 HTML 에서 중복하여 사용할 수 있다.
  - .을 class앞에 붙여 셀렉터로 사용한다.
```
<head>
  <style>
    .list{
      color:red;
    }
  </style>
</head>
<body>
  <ul>
    <li id="first" class="list">하나</li>
    <li class="list">둘</li>
    <li class="list">셋</li>
  </ul>
</body>
```
## 속성선택자
- 특정 속성을 갖고 있는 요소를 선택하여 스타일을 적용할 수 있다.
- 특정 속성이 갖고 있는 값을 선택하여 스타일을 적용할 수 있다.
```
<style>
/* 1. [attr]*/
a[target]{
  color:hotpink;
}
/* 2.[attr=value]*/
a[href="https://exemple.org]{
  color:red;
}
input[type="text"]}
  background-color:green;
}
</style>
<ul>
  <li>
    <a href="https://example.org" target="_blink">
  </li>
  <li>
    <a href="http://example.com" target="_blink">
  </li>
  <li>
    <input type="text">
  </li>
  <li>
    <input type="password">
  </li>
</ul>
```
- 속성의 값이 완전히 동일한 경우의 요소만 가져오는 것이 아니라 설정에 따라 일부만 적합해도 선택하여 스타일을 적용할 수 있다.
  - ```^```를 ```=```앞에 붙이면 value값으로 시작하는 문자열을 속성값으로 가진 요소 선택
  - ```&```를 ```=```앞에 붙이면 value값으로 끝나는 문자열을 속성값으로 가진 요소 선택
  - ```*```를 ```=```앞에 붙이면 value값을 가지고있는(포함하고있는) 문자열을 속성값으로 가진 요소 선택
```
<style>
/* 3. [attr^=https://]*/
a[target]{
  color:hotpink;
  font-style:italic;
}
/* 3.[attr$=.com]*/
a[href="https://exemple.org]{
  color:red;
}
input[type*="example"]}
  background-color:green;
}
</style>
<ul>
  <li>
    <a href="https://example.org" target="_blink">
  </li>
  <li>
    <a href="http://example.com" target="_blink">
  </li>
  <li>
    <input type="text">
  </li>
  <li>
    <input type="password">
  </li>
</ul>
```
## 가상 클래스 선택자
> 선택자를 사용하여 다수의 요소를 선택하였을 경우, 가상 클래스 선택자를 통해 일괄된 일정 요소의 스타일을 변경할 수 있다.
- nth-child를 통해 특정 요소의 하위 요소들의 스타일을 변경 할 수 있다.
  - first-child : 첫번째 요소 스타일 변경
  - last-child : 마지막 요소 스타일 변경
  - nth-child(2) : 두번째 요소 스타일 변경
  - nth-child(2n) : 짝수 요소 스타일 변경
  - nth-child(even) : 짝수 요소 스타일 변경
  - nth-child(odd) : 홀수 요소 스타일 변경
```
<style>
li:first-child{
  color:green;
}
.box:first-child{
  color:green;
}
</style>
<ul>
  <li>
    <a href="https://example.org" target="_blink">
  </li>
  <li>
    <a href="http://example.com" target="_blink">
  </li>
  <li class="box">
    hello
  </li>
  <li class="box">
    world
  </li>
  <li>
    <input type="password">
  </li>
</ul>
```
- 선택한 요소만을 기준으로 카운트를 하여 n번째 요소의 스타일을 변경할 수 있다.
  - first-of-type
  - last-of-type
  - nth-of-type(2)
```
<style>
p:first-of-type {
  color:red;
}
</style>

<body>
  <section>
    <div> toy story</div>
    <p>zoo</p>
    <p> inside</p>
    <p>coco</p>
    <p>finding nemo</p>
  <section>
</body>
```
- nth-child와 nth-of-type은 헷갈릴 수 있으니 주의하여 사용한다.
- 스타일에서 특정한 요소를 제외시킬 수 있다.
  - ```선택할 요소 셀렉터:not(제외시킬 요소의 셀렉터){...}```
### 동적 가상클래스
> 마우스를 올리는 등의 사용자가 브라우저에 하는 행위에 따라 스타일을 적용할 수 있다.  
> ```선택한 셀렉터:가상클래스{...}``` 방식으로 사용할 수 있다. 
- link
  - ```<a>```태그와 같은 하이터 링크에서 사용할 수 있다.
  - 아직 방문하지 않은 요소를 나타냅니다.
- visited
  - ```<a>```태그와 같은 하이터 링크에서 사용할 수 있다.
  - 한번이라도 방문한 요소를 나타냅니다.
- hover
  - 사용자가 요소위에 마우스를 올렸을때 동작한다.
- active
  - 사용자가 활성화한 요소(버튼 등)을 나타낸다.
  - 활성화란 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미한다.
  - 다수의 버튼을 가진 마우스라하더라도 active 클래스는 주 버튼 하나에만 적용되어야한다.
- focus
  - 양식의 입력 칸 등 포커스를 받은 요소를 나타낸다.
  - 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 tab 키로 선택하였을 때를 의미한다.
- enabled
  - enabled는 요소에서 기본값으로 되어있다.
  - 활성 요소를 나타냅니다. 활성 요소란 활성(선택, 클릭, 입력 등등)하거나 포커스를 받을 수 있는 요소이다.
- disabled
  - 모든 비활성 요소를 나타냅니다. 비활성 요소란 활성(선택, 클릭, 입력 등등)하거나 포커스를 받을 수 없는 요소이다.
- checked
  - 특정 요소를 선택했거나 on 상태인 라디오, 체크박스, 옵션 등의 요소를 나타낸다.
### 가상요소선택자 
> 상태에 따라 변경하는 것이 아닌 실제로 없는 요소를 만들거나 실제로 없는 요소에 스타일을 적용하는 것을 말한다.
> ```선택한 셀렉터::가상클래스{...}``` 혹은 ```선택한 셀렉터:가상클래스{...}``` 방식으로 사용할 수 있다
- before
  - 선택한 요소의 첫 자식으로 의사 요소를 하나 생성한다.
  - 보통 content 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용한다.
  - ::before와 ::after로 생성한 의사 요소는 원본 요소의 서식 박스에 포함되므로, <img>나 <br> 등 대체 요소에 적용할 수 없다.
- after
  - 선택한 요소의 맨 마지막 자식으로 의사 요소를 하나 생성한다.
  - 보통 content 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용한다.
- first-letter
  - 요소의 **첫번째 문자**를 선택하는 선택자이다.
- first-line
  - 요소의 **첫번째 라인**를 선택하는 선택자이다.
- selection
  - 요소상에 선택된 영역을 말한다.
  - 보통 요소를 드래그하여 선택한 영역에 대해 스타일링 하는 가상 요소 선택자이다.
## 선택자 결합
- 연관된 선택자들간의 관계를 선택해 줄 수 있다.
- 하위 결합자 결합(셀렉터A 셀렉터B)
- 자식 결합자 결합(셀렉터A > 셀렉터B)
  - 부모 자식과 같은 계층 구조에 영향을 준다.
- 인접 현제 선택자 결합(셀렉터A + 셀렉터B)
  - 앞에 있는 셀렉터가 무조건 뒤에있는 셀렉터보다 앞에 있어야한다.
  - 부모-자식의 관계가 아닌 형제, 인접 요소에 영향을 준다.
  - 모든 형제 요소가 아닌 인접한 형제 요소에만 영향을 준다.
- 일반 형제 선택자 결합(셀렉터A ~ 셀렉터B)
  - 앞에 있는 셀렉터가 무조건 뒤에있는 셀렉터보다 앞에 있어야한다.
  - 어떠한 요소가 특정 요소 뒤에 있을 때 사용한다. 
  - 아무리 많은 형제 요소가 있더라도 동일한 형제 선택자를 지닌 모든 요소에 영향을 준다.
- 그룹화(셀렉터 A, 셀렉터 B, ...)
  - 여러개의 선택자를 선택 하여 같은 스타일을 적용시킬 수 있다.
## 범용 선택자(Universal Selector)
- ```*```를 선택자로 사용하면, 모든 요소에 해당 스타일이 적용된다.
## 상용 제어하기
> cascade는 css 문법규칙의 기본이다.  
> 대부분의 스타일 property는 상속이 되어 하위 요소까지 적용이 된다.
- initial
  - 부모의 스타일 property를 상속받지 않기 위한 property이다.
  - all:property를 통해 모든 부모의 스타일을 상속받지 않을 수 있다.
```
<head>
  <style>
    .parent{
      color:green;
      font-size: 15px;
    }
    .child2{
      all:initial;
    }
  </style>
</head>
<body>
  <div class="parent">
    난 초록이다.
    <p class="child">
      난 초록이 자식이다.
    </p>
    <p class="child2">
      난 초록을 거절한다.
    </p>
  </div>
</body>
```
- inherit
  - 부모로부터 property를 무조건 상속받는다.
- unset
  - 부모로부터 상속받을 값이 존재할때 inherit와 동일하게 동작한다.
  - 부모로부터 상속받을 값이 존재하지 않을때 initial과 동일하게 동작한다.
## 우선순위
- 선언된 위치에 따라 우선순위가 정의된다.
- 명시도에 따라 우선순위가 정의된다.
  - 적용범위가 적을 수록 명시도가 높은 것이다.
  - 명시도가 높을 수록 우선순위가 높다.
- 코드의 위치에 따라 우선순위가 바뀐다.
- **!important** 를 css에서 선언하게 된다면 모든 우선순위를 무시하고 가장 높은 우선순위가 된다.
``
h2 {
 color : green !important; 
}
```
# 참고
(제로베이스)[https://zero-base.co.kr]
