# 목차
- 박스 모델
# 박스 모델(Box Model)
> 박스모델은 CSS를 구성하는 기반하는 개념이다.  
> 웹의 복잡해 보이는 레이아웃들은 사각형/박스 영역으로 구성되어있다.  
> 이러한 사각형/박스/네모 영역을 어떻게 관리할지 에 대한 것이 박스 모델(Box Model)의 개념이다.  
> 웹 브라우저를 띄우고 F12를 눌러 관리자 도구를 확인해보자, 스타일의 최하단에서 box model을 확인할 수 있다.!
> margin > border > padding > content로 확인 할 수 있다.
<img src="https://user-images.githubusercontent.com/47730634/132115827-763e8785-db75-4bc3-9e16-b8cdcdd49d84.png">

- content : 콘텐츠가 표시되는 영역
- padding : 콘텐츠와 테두리(border) 사이의 여백
- border : padding 과 margin 사이의 테두리
- margin : 가장 바깥쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 해당 박스와 다른 요소 사이의 공백역할을한다.
## 크기
- width, height
  - 각각 너비와 높이의 값을 일컫는다.
  - 값을 설정하지 않는다면 초기값이 auto 로 설정된다.
  - 기본적으로 상속이 되지 않는 값이다.
- max-width, min-width, max-height, min-height
  - width, height의 값의 최솟값과 최댓값을 의미한다.
  - 초기값은 auto로 설정되고, 기본적으로 상속되지 않는다.
  - 부모의 width/height 값에 따라 변경되는 width,height 값의 최소와 최댓값을 정한다.
## 여백
- margin
  - 박스 모델의 가장 바깥쪽의 영역을 뜻한다.
  - 여러가지 property를 한번에 표현한 단축 속성(shorthand) 이다.
  - margin 이라는 속성은 margin-top, margin-right, margin-bottom, margin-left 을 포함하고있다.
```
p {
  /* 상하좌우 margin 1px을 적용한다. */
  margin : 1px;
}
.test1{
   /* 상하 margin 1px, 좌우 2px 을 적용한다*/
  margin : 1px 2px;
}
.test2{
   /* 상 margin 1em, 좌우 auto, 하 2em 적용한다. */
  margin : 1em auto 2em;
}
.test3{
   /* 상 margin 2px, 우 2em ,하 1px ,좌 auto 적용한다 */
  margin: 2px 2em 1px auto;
}
```
- 마진 상쇄(margin collapsing)
  - 마진 상쇄, 마진 겹칩, 마진 중복 등으로 불리운다.
  - 여러 **블록요소**들의 위/아래 margin이 경우에 따라 가장 큰 크기를 가진 margin으로 결합(상쇄)되는 현상
1. 인접형제
  - 두 형제 요소의 위/아래 여백이 만나 상쇄된다.
2. 부모-자식요소간
  - 부모 블록에 border, padding, inline content가 없어서 부모와 자식의 margin-top이 만나는 경우
  - 부모 블록에 border, padding, inline content가 없고, 부모-자식을 분리할 height 값이 지정되지 않아 부모와 자식의 margin botton이 만나는 경우
3. 빈 블록
  - border, padding, content가 없고, height 또한 존재하지 않으면 해당 블록의 margin-top과 margin-bottom이 상쇄된다.
- padding
  - 여러가지 property를 한번에 표현한 단축속성(shorthand)이다.
  - margin과 비슷하게 속성을 사용하지만 margin과 범위가 다르고 *마진 상쇄*같은 것이 없다.
```
p {
   /* 상하좌우 padding 1px을 적용한다*/
  padding : 1px;
}
.test1{
   /* 상하 padding 1px, 좌우 2px 을 적용한다*/
  padding : 1px 2px;
}
.test2{
   /* 상 padding 1em, 좌우 auto, 하 2em 적용한다. */
  padding : 1em auto 2em;
}
.test3{
   /* 상 padding 2px, 우 2em ,하 1px ,좌 auto 적용한다 */
  padding: 2px 2em 1px auto;
}
```
## 테두리
> border 는 외부 여백인 margin과 내부 여백인 padding 사이의 테두리를 일컫는다.  
> 기본값은 none(0px) 이기때문에 보이지 않는다.

- border-style, border-width, border-color
  - border-style은 기본값이 none 이므로 테두리가 보이지 않는다.
  - solid(실선), dotted(점선) 등이 존재한다.
  - border-style 또한 단축 속성이며 똑같이 상하좌우, 상하/좌우, 상/우/하/좌 를 테두리 스타일을 명세할 수 있다.
  - border-style은 브라우저마다 굵기와 스타일이 조금씩 다를 수 있다.
  - border-color, border-width 또한 단축 속성이다.
  - border-color은 테두리의 색, border-width는 테두리의 두께를 의미하는 속성이다.
- border(shorthand)
  - border 속성을 통해 border style, width, color 를 한번에 지정할 수 있다.(단축 속성)
  - 단축 속성의 순서는 영향을 주지않는다.
```
/* 테두리 스타일 */
border : solid;
/* 테두리 너비, 스타일 */
border: 2px dotted;
/* 테두리 스타일 색*/
border: outset #f33;
/* 테두리 너비, 스타일, 색*
border : medium dashed green;
```
- outline
  - border 라는 테두리와는 조금 다른 외곽선의 속성이다.
  - border 처럼 box model 에 속한 속성이 아니다.
- border-radius
  - 요소 테두리 꼭지점을 둥글게 만드는 속성이다.
  - 값의 단위는 길이 이며(px, em, %...) 해당 값은 해당 위치의 **사각형의 반지름 길이** 값을 의미한다.
  - margin과 padding 처럼 상하좌우, 상하/좌우, 상/우/하/좌 를 테두리 스타일을 명세할 수 있다.
- box-sizing
  - 요소의 너비와 높이를 계산하는 방법을 지정한다.
  - 기본값은 content-box이고 이외에는 border-box 가 있다.(2가지의 값을 갖는다.)
  - content-box
    - content 영역을 기준으로 크기를 정한다.(content)
  - border-box
    - border 영역을 기준으로 크기를 정한다.(content + border)
  - width, heigth의 선언 영역을 정한다.
# 참고
[제로베이스](https://zero-base.co.kr)
