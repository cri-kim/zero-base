# 목차
- Grid
# Grid
> flex 박스와 유사한 레이아웃을 유연하게 다루는 시스템이다.  
> flex 처럼 container 와 item을 구분하여 개발해야한다.  
> flex와 다르게 각 축(main, cross)에 복잡한 레이아웃을 직관적으로 구축할 수 있다.

> 2차원이기 때문에 columns, row 로 구성되며, 각 행과 열 사이에 gutters 라는 공백을 갖는다.  
> e커머스, 온라인 갤러리에서 상품이나 대상에 대한 것들을 나열할때 적절한 디자인 패턴이다.

## Container
> grid 아이템들을 포함하고 있는 container 요소를 일컫는다.

> grid 속성을 shorthand로 사용할 수 있으며, 앞으로 학습할 grid-xxx 속성들을 정의할 수 있다.   
> grid 속성으로 shorthand로 사용할 경우, **/** 를 기준으로 행/열 에 대한 구분 할 수 있다.
- grid-template-rows
  - grid가 몇개의 행을 갖게 되는지 설정하는 것이다.
- grid-template-columns 
  - grid가 몇개의 열을 갖게 되는지 설정하는 것이다.
- grid-template-rows/columns 에서는 *fr* 이라는 단위를 사용할 수 있다.
  - fr 단위는 해당 컨테이너를 비율적으로 나눌 수 있는 단위이다.
- repeat() 이라는 함수 표기법을 사용할 수 있다. repeat(n, size) 로 선언하고 size 만큼 n회 반복하는 것을 의미한다.
```
<!-- CSS -->
.container {
  border: 5px dashed orange;
  display: grid;
  grid-template-row: 80px 80px 80px;
  grid-template-columns: 100px 50px 50px;
}
.item{
  background-color: paleturquoise;
  border: 3px solid blue;
  font-size:30px;
}
<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```
- grid-template-areas
  - layout의 범위를 쉽게 설정할 수 있다.
  - 행렬의 모양으로 레이아웃을 구성할 수 있다.
  - 내부 item들의 selector에 *grid-area* 로 이름(item 그리드 요소값)을 선언한 후, grid-template-areas에서 행렬 형식으로 구성한다.
```
<!-- CSS -->
.container {
  border: 5px dashed orange;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-row: repeat(3, 1fr);
  
  grid-template-areas:
  "hd hd hd hd hd"
  "ma ma ma . sb"
  "ft ft ft ft ft"
}
.item{
  background-color: paleturquoise;
  border: 3px solid blue;
  font-size:30px;
}
.header{
  grid-area:hd;
}
.main{
  grid-area:ma;
}
.sidebar{
  grid-area:sb;
}
.footer{
  grid-area:ft;
}
<!-- HTML -->
<div class="container">
  <div class="item header">1</div>
  <div class="item main">2</div>
  <div class="item sidebar">3</div>
  <div class="item sidebar">4</div>
</div>
```
- row-gap, column-gap, gap
  - 행, 열간의 간격(gap = gutter)를 설정할 수 있는 속성이다.
  - 브라우저마다 grid-row-gap/grid-column-gap/grid-gap 이라는 속성 명을 사용하기도 한다.
  - gap을 단축 속성으로 사용할 수 있다.
- grid-auto-row, grid-auto-columns
  - 템플릿을 벗어날때의 아이템들에 대한 설정이 필요할때, auto-row/columns 을 사용한다.
  - 자동적으로 컨테이너 내를 초과하는 아이템에 대한 사이즈의 높이/너비를 지정한다.(넘치는 것이 없다면 시각적으로 보이지 않는다.)
- grid-auto-flow
  - item이 어떤 형식으로 container에 배치가 될지 설정하는 것이다.
  - 축의 방향이 설정한 값을 기준점으로 하여 진행한다./
  - row(default), column, row dense, columns dense 가 속성 값으로 있다.
  - dense를 추가적으로 붙인 경우, 한 item이 그리드를 다른 아이템과 다르게 갖은 경우에 빈영역이 없이 매꾸도록 배치한다.
- justify-content는 grid의 main asix를 기준으로 배치를 한다. (flex box에서와 동일하게 사용)
- align-content는 cross asix를 기준으로 배치를 한다. (flex box에서와 동일하게 사용)
- justify-items,align-items는 컨테이너의 크기와 상관 없이 grid 내의 아이템들이 각 배치된 공간에서 어떻게 배치될지를 설정하는 것이다.
## Item
- grid-row, grid-column
  - grid-row, grid-column은 grid-row-end/start, grid-column-end/start의 단축속성이다.
  - **/** 을 사용하여 start, end를 단축속성으로 사용할 수 있다.
  - 몇번째 그리드까지 해당 item이 영역을 차지할지 설정하는 것이다.
- grid-area
  - 컨테이너에서 grid-template-areas사용시 하나의 아이템을 선언하는 명칭으로 쓸 수 있다. 
  - **/** 를 구분하여 사용하는 shorthand로 사용할 수 있다. (예시, grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end) 
- order는 flex 또는 grid container 안에서 현재 요소의 배치 순서를 지정한다. 기본값은 **1**이다.(오름차순) 
- z-index는 위치 지정 요소와 그 자손 또는 하위 플렉스 아이템의 z축 순서를 지정한다.
## Grid 단위
- fr는 grid 에서 유연한 크기를 갖는 단위이다. 컨테이너 내의 공간의 분수로 나타낸다.
- fraction의 약자이다.
- min-content, max-content
  - 해당 키워드는 content에 대한 크기를 명시한다.
  - min-content는 내부 영어 단어중 가장 긴 너비를 기준으로 grid item의 너비를 맞춘다.
  - max-content는 내부 내용이 끊기지 않도록 영역을 잡는다.
- auto-fill, auto-fit 는 기본적으로 할당된 영역을 채우는 단위이다.
  - auto-fill의 경우, container의 공간을 모두 채운다.
  - auto-fit의 경우, container의 공간을 모두 채우는 기본은 같지만 auto-fill과 다르게 영역이 아이템의 사이즈를 초과하여 공간이 남을때도 크기를 유동적으로 키워 채운다.
# 참고
[제로베이스](https://zero-base.co.kr)
