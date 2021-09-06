# 목차
- 레이아웃
- 색상과 배경
# 레이아웃
## display
> 부모의 요소를 따라가는 것이 default 값이다. span 태그 안에 있으면 inline, div 안에 잇으면 block 이다.
- inline 요소
  - 대표적으로 span이 있다.
  - 영역의 크기가 내부 콘텐츠 크기로 정해진다. (좌우 여백은 채울 수 잇으나 상하는 불가능하다.
  - 여러 요소가 가로 배치할 수 있다.
- block 요소 
  - 대표적으로 div 가 있다.
  - 영역의 크기를 width, height로 지정할 수 있다.
  - width를 지정하지 않으면 가로 전체를 자치한다.
  - 여러 요소가 세로 배치할 수 있다.
- inline-block
  - 대표적으로 input 이 있다.
  - 영역의 크기를 width,height로 지정할 수 있다.
  - 여러 요소를 가로배치 할 수 있다.
- none
  - 해당 요소가 위치에 존재하지 않는다.
- visibility:hidden
  - 해당 요소가 보이지는 않으나 공간은 존재한다.
  - width, height 값이 있다면 해당 공간을 차지한 상태로 보이지않는다.
## float
- 한 요소가 보통 흐름으로부터 빠져텍스트 및 인라인 요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함을 지정한다.
- 즉, 기존 블록의 방법을 무시하고 인라인 요소처럼 된다.
## position
> 문서 상의 요소를 배치하는 방법을 지정한다.  
> 기본값이 static 이다.
- Normal flow
  - normal flow는 요소들이 배치되는 흐름을 일컫는다.
  - span 요소는 inline, div는 block 요소로 배치되는 흐름대로 배치되는 것을 일컫는다. 
- relative
  - 자신이 있어야할 위치의 값에 따라 배치가 된다.
  - top, left, right, botton 속성값에 지정된 위치대로 배치하게 된다.(**자기 자신**을 위치 기준점으로 삼는다.)
- absolute
  - 부모 요소의 상대값에 따라 배치된다.
  - absolute는 normal flow 에 배제된다. (absolute 만의 흐름을 갖는다.)
  - 조상 중에서 position이 static이 아닌 요소를 찾아 기준점을 찾는다.(**부모 기준**)
- fixed
  - absolute 와 같이 normal flow에서 배제된다.
  - **뷰포트**를 위치의 기준으로 삼는다.
- sticky
  - 요소를 normal flow에 따라 배치하고, 테이블 관련 요소를 포함하여 가장 가까운 스크롤이 되는 조상을 기준으로 배치한다.
  - 평소는 normal flow이지만 스크롤 위치가 임계점에 이르면 fixed와 같이 위치를 화면에 고정할 수 있다.
## overflow
> 요소 콘텐츠가 너무 커서 블록 서식 맥락에 맞출 수 없을 때 처리를 지정할 수 있다.
- 단축속성(shorthand)이므로 한번에 여러 속성을 지정할 수 있다.
- overflow에서는 scroll, hidden 등의 설정을 할 수 있다.
## z-index
> 위치 지정요소와 그 자손 또는 하위 아이템의 Z축의 순서를 지정한다.  
> Z축은 2차원(X,Y)축 외의 사람이 보는 방향으로의 축을 말한다.(3차원)  
> Z축이 클수록 사람이 보는 방향쪽 축이 더 가까히 있다.(겹겹히 쌓여있을때 위에 있다.)
# 색상과 배경
> CSS에서는 색상을 표현하는데 대표적으로 3가지 방법이 있다. (키워드, RGA, HSL 실린더형 좌표계사용)
## 색상의 종류
- 키워드
  - 기존에 사용하던 black, pink, yellow 등 직접적으로 색상의 명칭을 쓸 수 있다.
  - transparent(투명하게)
- HEX(16진수)
  - # + 16 진수를 사용하여 RGB 색상을 표현하는 방법이다.
  - # + 2자리(Red) + 2자리(Green) + 2자리(Blue) 로 코드 값을 작성하여 색을 지정할 수 있다.
- RGB
  - rgb() 함수를 사용하여 색을 지정할 수 있다.
  - rgb(red 코드, green 코드, blue 코드) 로 만들 수 있다. 
- RGBA
  - rgba() 함수를 사용하여 색을 지정할 수 있다.
  - rgba(red 코드, green 코드, blue 코드, 투명도)
  - rgb 함수에서 투명도를 추가한 함수 색 표기법이다.
## 명도(opacity)
- 요소의 불투명도를 설정하고 default 값은 1이다.(요소가 불투명하다.)
|값|뜻|
|--|--|
|0|요소가 완전히 투명해 보이지 않음|
|0~1 사이 숫자| 요소가 반투명함|
|1(기본값)| 요소가 불투명함|
## background 색상 설정
- background-color
  - 요소의 배경 색을 지정한다.
  - 위에서 사용한 색상의 표현 방식으로 표현할 수 있다.
- background-image
  - 기본값이 none 이며, 이미지가 없다.
- background-repeat
  - 속성은 배경 이미지의 반복 방법을 지정한다.
  - 가로축 및 세로축을 따라 반복할 수 있고, 아예 반복하지 않을 수도 있다.
  - repeat-x, repeat, space(고르게 분배), round, no-repeat, space repeat 할 수 있다.
- background-position
  - 백그라운드의 위치를 지정할 수 있다.
  - cm, px, in, px 등의 길이 단위와 섞어서 지정할 수 있다.
- background-origin
  - 배경의 원점을 테두리 시작점, 테두리 내부, 안쪽 여백 내부 중 하나로 지정한다.
- background-size
  - 속성은 요소 배경 이미지의 크기를 설정한다. 그대로 두거나, 늘리고 줄이거나, 공간에 맞출 수 있다.
- background (shorthand)
  - background의 단축 속성은 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정한다.

```
금일 학습한 내용은 MDN에 예시가 잘 작성되어있다.
예시를 클릭하고 작성하면서 확인하면 더욱 쉽게 접근할 수 있다.
```
# 참고
[제로베이스](https://zero-base.co.kr)
[MDN](https://developer.mozilla.org)
