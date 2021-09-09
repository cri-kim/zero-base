# 목차
- Flexbox
- grid
# Flexbox
> CSS를 통해 레이아웃을 더욱 유연하게 구현하기 위해 FlexBox를 학습해보자.  
> Flexbox는 CSS3에서 추가된 속성값이다.   
> 부모요소에 display: flex, flex 값을 주면 내부 요소들을 1차원으로 만들어 
> 내부 요소들을 부모 요소와 같이 동작하도록 만드는 것이다.

## 용어
- flex container, item
  - container는 아이템을 감싸고 있는 부모영역
  - item은 내부의 정렬을 위한 아이템들
  - flex container 영역과 item 영역에서 동작하는 속성이 상이하기 때문에 두 영역에 대한 분리, 용어 이해가 필요하다.
- main,cross axis
  - main axis는 주축, cross axis는 교차축(주축의 수직 축)을 의미한다.
  - 이 두개의 축은 flex-direction의 속성으로 설정할 수 있다.
```
<!-- CSS -->
.container {
  border: 5px dashed orange;
  display:flex;
}
.item{
  width:50px;
  height:50px;
  background-color:paleturquoise;
  border: 3px solid blue;
}
<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
## Container
> flex container에서 사용할 수 있는 properties를 알아보자
- display
  - block, inline, inline-block 등의 속성 값으로 레이아웃을 설정한다.
  - block, inline, inline-block의 속성 값들은 **해당 요소의 전/후 요소와의 관계**의 배치를 설정한다.
  - flex, grid는 **해당 요소 내부의 요소들**의 배치를 설정한다.(flex container)
- flex-direction
  - flex container 내의 item을 배치할때 사용할 주축 및 방향(main/cross axis)을 지정한다.
  - 값으로 row(default), row-reverse, column, column-revers 를 사용할 수 있다.
- flex-wrap
  - flex container에 설정하여 item 들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성이다.
  - 값으로 nowrap(default), wrap, wrap-reverse 를 사용할 수 있다.
  - 배치의 시작엄은 flext-direction에 의해 결정된 방향으로 적용된다.
- flex-flow(shorthand)
  - flex-direction, flex-wrap을 같이 선언할 수 있는 단축속성(shorthand)이다.
## Item
> flex item에서 사용할 수 있는 properties를 알아보자
- order
  - flex, grid conatiner 안에서 현재 요소의 배치 순서를 지정한다.
  - 컨테이너 아이템의 정렬 순서는 오름차순이고, 같은 값일 경우에는 소스 코드의 순서대로 정렬된다.
  - 화면에 보이는 순서에만 영향을 준다.(*비시각적 매체에서 활용하지 않는다.*)
- flex-grow
  - item 요소가 conatiner 내부에서 할당 가능한 공간의 정도를 선언한다. 기본값은 0 이다.
  - 1의 값일 경우 요소가 container 내부에서 할당 가능한 공간이 있으면 모두 차지하게 된다.
  - item 요소들이 동일한 flex-grow 값을 가진다면, 모두 동일한 요소를 할당받는다.
  - item 요소들이 서로 다른 값을 지정한다면 flex-grow 값에 따라 다른 공간값을 나누어 할당 받는다.
- flex-shrink
  - item 요소의 크기가 container 보다 클 경우에 내부 item 요소들의 크기를 설정할 수 있다. 기본값은 0 이다.
  - container의 크기가 item의 크기보다 작아진다면 따라서 공간을 할당하고 크기가 줄어진다.
  - flex-grow의 반대 라고 생각할 수 있다.
  - 정의한 flex-shrink 값으로 item보다 container의 크기가 작아진다면 container 밖으로 요소가 나갈 수 있으므로 개발시 주의해야한다.
- flex-basis
  - flex item의 초기 크기를 지정한다. 기본값은 콘텐츠 박스의 크기를 변경한다.
- flex(shorthand)
  - flex container 안의 flex item들의 properties를 단축속성으로 설정할 수 있다.

## flex 정렬
> main/cross axis 에 대해 flex 항목들을 정렬할 수 있다.
- align-self
  - 개별 flex item들을 cross axis에 대해 정렬하는 방식, item 에서 지정
- justify-content
  - main axis 에 대해 flex item들을 정렬, container에서 지정
- align-items
  - 개별 flex item을 cross axis에 대해 정렬, container에서 지정
  - item을 정렬한다.
- align-content
  - cross axis 기준으로 정렬, container에서 지정
  - flex line을 정렬한다.

# 오늘의 기타 학습
- components 분리 (https://github.com/cri-kim/gh-page)

# 참고
[제로베이스](https://zero-base.co.kr)
