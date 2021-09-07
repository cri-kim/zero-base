# 목차
- Transform
- Transition
# Transform(변형)
> 요소의 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.  
> CSS의 시각적 서식 모델의 좌표공간을 변경한다.  
> 여러 함수들과 함께 쓰며 요소를 변화시킬 수 있다.  
> default 값은 none 이며, 요소에 아무런 변형을 주지 않는다.  
> transform을 shorthand로 사용할 수 있다.
## transform-function
> 요소의 외형에 영향을 주는 변형을 나타낸다. 
> 변형 함수는 2D, 3D 공간 내에서 요소를 회전하고, 크기를 바꾸고, 왜곡하고, 이동할 수 있다.
- 크기조절 - scale(), scale3d, scaleX(), scaleY(), scaleZ()
  - scale()은 2D로 요소의 크기 조절한다.
    - width, height와 개념이 다르다. 갖고 있는 width, height의 공간을 유지하고, 요소의 크기를 조절한다.
    - scale(x축, y축) 으로 크기를 조절
    - x, y축을 개별로 설정하는 함수로 scaleX(), scaleY()가 있다.
```
<!-- transform scale 적용 -->
<!-- .css -->
#temp {
  width:400px;
  transform: scale(0.5);
}
<!-- html body -->
<img id="temp" src="이미지 경로">
```
```
<!-- transform scale 미적용 -->
<!-- .css -->
#temp {
  width:200px;
}
<!-- html body -->
<img id="temp" src="이미지 경로">
```
  - scale3d()는 3D로 요소의 크기를 조절한다.
- 회전 - rotate
  - rotate는 값을 하나만 갖는다.(ex. rotate(단일 값))
  - rotate가 갖는 값은 **angle**이라고 하며 각도를 의미하는 자료형이다. 여러가지 단위를 갖는다.
    - deg : 각도를 n도(n◦)단위로 나타낸다. 
    - grad : 각도를 그레이드 단위로 나타낸다. 360deg = 400 grad
    - rad : 각도를 radian으로 나타낸다. 360deg = 2π
    - turn : 각도를 회전의 수로 나타낸다. 360deg = 1turn
  - rotate 는 값으로 음수를 갖을 수 있으며, 음수는 시계 반대방향으로 회전하는 것이다.
  - 양수의 값은 시계 방향으로 회전한다. 
- 이동 - translate
  - translate()는 요소의 위치를 지정한다.
  - translate(값) : 값은 동서남북 위치를 지정하는 것이다.
  - translate(x,y) : x값은 x축으로 이동, y값은 y축으로 값을 이동하는 것이다.
  - x,y축을 개별로 설정하는 함수로 translateX(), translateY() 가 있다. 
- 기울이기 - skew
  - rotate 와 같이 angle을 사용하여 기울이기를 조절한다.
  - skew(x) : 값이 1개일 경우, x축의 기울기만 조절한다.
  - skew(x,y) : 값은 x축으로 이동, y값은 y축을 기준으로 기울기를 조절한다.
- 기준점 - transform-origin
  - 요소의 기준점을 변경할 수 있다.
  - default 값은 center 이다.(= 가운데, width/height의 절반이다.)
  - top, left, right, bottom 으로 기준점을 현 위치 기준으로 작성할 수 있다.
  - 길이단위인 px(픽셀)로 기준점을 변경할 수 있다.
  - px로 변경하게 된다면, x축과 y축을 작성할 수 있다.
# Transition(전환, 전이)
> transition은 사용을 위해 선제조건이 존재한다. 
> A 상태에서 B상태로 요소가 시간차를 두고 변경되는 것을 말하며, 그 변경에 따른 시간이 필요하다.
> transition을 통해 웹페이지를 동적으로 개발할 수 있다.  
> transition을 shorthand로 사용할 수 있다.

- transition-property
  - transition을 적용해야 하는 CSS 속성의 이름을 명시한다. 나열한 속성이 transition 하는 동안 움직인다.
- transition-duration
  - transition이 일어나는 지속시간을 명시한다. 
```
<!-- CSS -->
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    background-color: black;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 0.5s;
}
.box:hover {
    width: 100px;
    height: 300px;
    background-color: indianred;
    transition-property: width height background-color;
    transition-duration: 0.5s;
}
<!-- HTML -->
<div class="box1">Lorem</div>
```
- transition-delay
  - transition 발생에 delay 를 주는 속성이다.
- transition-timing-function
  - ease, ease-in, ease-out, ease-in-out, linear, cubic-bezier 등의 키워드가 존재한다.
  - transition 진행 속도를 조절할 수 있다.
# transition + transform 활용
> javascript 와 함께 추후에 다양한 애니메이션 효과를 더욱 동적으로 활용할 수 있다.
```
<!-- CSS -->
.boc {
  width : 100px;
  height: 100px;
  border 10px solid seagreen;
  background-color : rgb(204, 253, 225);
  border-radius: 30px;

  transition: all;
}
.box:hover{
  transform: rotate(360deg) transteY(30px);
}
<!-- HTML -->
<div class="box">
Hover Me!
</div>
```
# 참고
[제로베이스](https://zero-base.co.kr)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
