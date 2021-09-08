# 목차
- 애니메이션

# 애니메이션
> transition과 비슷하게 A상태를 B상태로 전환하는 것이다.
> transition과 다르게 **다수의 스타일**을 전환하는 애니메이션을 적용한다.
> 강의에서 소개되는 8개의 속성을 알아 볼 것이다. 또한 transition과 같이 **shorthand**로 animation 사용이 가능하다.

## @keyframes
- 애니메이션의 프레임마다의 속성, 상태, 스타일을 정의하는 **함수**이다.
- animation에서 속성값으로 사용하여 화면에 반영할 수 있다.
```
/* 
 n%는 애니메이션의 총 시간의 범위 이다.
 30%의 경우, 애니메이션이 진행해야할 범위의 30%를 진행 한 것이다.
*/
@keyframes identifier {
  0% {top : 0; left: 0;}
  30% {top : 50px;}
  60%, 72% {left:50px;}
  100% {top : 100px; left: 100%;}
}
/*
 n% 외에 from ... to... 를 사용하여 시작과 끝을 만들어 줄 수 있다.
*/
@keyframes my-first-animation{
  from {width:100px;}
  to{width:200px;}
}
.box {
  width:100px;
  height:100px;
  border solid seagreen;
  border-radius : 30px;
  
  /* 애니메이션에 선언한 함수를 넣고 진행할 시간, 그리고 애니메이션 동작 속성을 넣는다.*/
  animation: my-first-animation 2s infinite;
}
```
## 애니메이션 속성들
- animation-name은 사용할 @keyframe의 규칙을 이용하여 작성한다. 해당 이름의 규칙은 아래와 같다.
  - 대소문자를 구분한다
  - ```영문자, 숫자, 언더스코어(_), 대시(-)``` 만 사용 가능하다.
  - initial, inherit, revert, unset 과 같이 이미 지정된 이름은 사용하지 않는다.(사용할 경우 기본값이 상속된다.)
- animation-duration은 애니메이션이 몇초동안 동작할 것인지 지정한다.
- animation-delay 애니메이션이 시작될 요소가 적용되는 순간부터 시간 오프셋이다.
- animation-delay은 애니메이션의 지연시간을 의미한다.
- animation-iteration-count은 애니메이션이 몇 번 반복될지 지정한다. infinite로 지정하여 무한히 반복할 수 있다.
- animation-direction은 애니메이션이 종료되고 시작을 순방향/역방향으로 진행하는가에 대해 설정할 수 있다.
- animation-play-state은 애니메이션을 멈추거나다시 시작할 수 있다.
- animation-fill-mode은 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정한다.
- animation(shorthand)
  - time function(duration, delay)같은 경우 같은 단위가 들어가기때문에, 같이 사용할 경우 앞이 duration, 뒤가 delay가 된다.
```
@keyframes custom {
  0% {border-radius: 5px; background-color: steelblue;}
  30% {border-radius: 10px}
  60%, 72% {border-radius: 20px}
  100% {border-radius: 30px}
} 
.temp {
  animation: custom 2s 1s infinite ;
  border-radius: 20px;
  border: 1px solid seagreen;
}
```
## 활용
> 공과 bascket을 만들어 애니메이션을 활용해 보았습니다.
> 배경에 불이 붙는다던지, 사람이 움직이는 것 혹은 핸드폰이 움직이는 것과 같은 광고 효과를 만들어보는 것도 좋을 것 같습니다.  
- 애니메이션 활용
https://cri-kim.github.io/portfolio
- CSS 일부
```
.goal {
  position: relative;
  top:calc(100% - 10px);
  left:calc(100% - 10px);
  border-radius: 10px 10px 100% 100%;
  width:50px;
  height:50px;
  border: gray 1px solid;
  background-color:gray;

  animation: showGoal 4s 1s infinite;
}
@keyframes showGoal {
 from{width:0px; height:0px;}
 to{width:50px; height:50px;}
}
.ball {
  position: relative;
  top:20px;
  left:20px;
  border: 1px solid #0070f3;
  border-radius: 30px;
  width:30px;
  height:30px;
  background-color:#0070f3;

  animation: moveBall 4s 1s infinite;
}

@keyframes moveBall {
 0%{top:0px; left:0px;}
 30%{top:60%; left:40%;}
 10% {top:30%; left:30%;}
 50% {top:30%; left:45%;}
 60%{top:50%; left:60%;}
 80%{top:30%; left:80%;}
 100%{top:100%; left:100%;}
}
```
# 참고
[제로베이스](https://zero-base.co.kr)
[MDM](https://developer.mozilla.org/)
