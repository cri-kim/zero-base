# 목차
- 리액트(React)
- 브라우저의 동작 원리
- 리액트 컴포넌트
- props와 state
# 리액트(React)
> 페이스북에서 만든 대표적인 SPA 프론트엔드 자바스크립트 라이브러리이다.
> **컴포넌트** 라는 개념에 집중이 되어있는 라이브러리이다. 사용자가 데이터를 넣으면 개발자가 지정한 유저 인터페이스를 조립해서 보여준다. 
## SPA
> Single Page Application 의 약자이다. 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 변경하며 표현하는 것이다.
> 대표적인 SPA 프레임워크/라이브러리인 angular, react, vue 들은 자바스크립트로 SPA 를 쉽고 확장성 있게 구현하는 것을 목표로 한다.
- Virtual DOM
  - SPA의 대표적인 문제점인 잦은 DOM 조작으로 인한 브라우저 성능 저하는 페이스북에서 개발한 Virtual DOM 알고리즘을 통해 좀 더 성능을 개선하였다.
  - 실제 DOM을 복사한 html 정보를 저장하다가, 변경이 발생하여 Virtual DOM 에 있는 내용을 DOM에 적용할 때 화면을 한번 갱신한다.
  - 최근 문서를 읽어보면 virtual DOM의 알고리즘이 직접적으로 DOM을 조작하는것 보다 뛰어난 성능을 보인다고 되어있지는 않다. (사용자의 능력차...)
## Why React?
> Angular, Vue, backbone,... 등 다양한 라이브러리와 프레임워크가 존재하는데 왜 React 를 선택했을까?

> **100% 개인적인 관점으로 작성하였다.**

1. 그냥
  - 리액트, 이름부터 왠지 끌렸다. Reality, Reactive,... 요즘 반응형 웹프로그램이 기본으로 되는데 딱 맞는 이름같다.
2. 공고에 많이 보인다. 즉 국내에서 대중성이 높다.
3. Angular를 변화가 잦다.
  - Angular로 직접 프로젝트를 짧게 참여한 경험이 있다. Angular는 6개월 주기로 버전업그레이드가 있으며, 이전 버전을 보장하지 않는다.
  - Angular는 **프레임워크** 로서 Angular 만으로 충분히 많은 라이브러리와 멋진 구조를 제공한다. 본인은 더 커스텀을 해보고 ES6에 친숙해져보고 싶었다.
  - 요즘 Angular 경험자는 찾아도 Angular 개발자를 찾는 공고를 보지 못했다. (= 대중성의 부족?)
4. Vue.js는 리액트보다 난이도가 낮다는 평이 높다.
  - React의 대표적인 Virtual DOM, 상태관리 등도 전부 Vue에서 지원이 된다. 고로 접근 난이도가 좀 높은 React를 제대로 배우면 Vue는 식은죽먹기가 아닐까?

# 브라우저의 동작 원리
> 브라우저는 대표적으로 URL 주소창, 앞/뒤 버튼, 북마크, 새로고침, 홈버튼으로 구성되어있다.
- 계층 레벨 구조
  1. 유저 인터페이스 : 주소창, 버튼 등 유저가 브라우저 툴 상에서 조작 가능
  2. 브라우저 엔진 : UI와 렌더링 엔진 사이를 연결
  3. 렌더링 엔진 : 요청된 컨텐츠를 출력한다. HTML/CSS를 가지고 제작한 컨텐츠를 화면에 출력한다.
    - HTML를 읽어 변경된 DOM 노드를 교체한다.
    - DOM 노드를 가지고 시각적으로 트리 구조를 생성한다.(render tree)
    - 해당 render tree를 화면에 출력한다.(=화면에 그린다.)
  4. 네트워킹 : HTTP 요처을 처리한다. 플랫폼-독립적으로 구현
  5. UI 백엔드 : 운영체제와 UI를 연결해주는 역할
  6. 자바스크립트 인터프리터 : 자바스크립트 코드를 번역하고 실행한다.
  7. 데이터 스토리지 : 쿠키, 로컬스토리지, indexedDB 등 저장 가능한 영역 총괄

# 리액트 컴포넌트(Component)
> 앞으로 리액트를 통해 만들게 될 재사용 가능한 HTML 모듈/단위 하나를 컴포넌트라고 한다.
> 버튼, 레이아웃 구조, 헤드라인, 네비게이션바 등 HTML 로 출력될 하나의 단위를 일컫는다.

- Class(클래스형 컴포넌트)
  - 컴포넌트를 만드는 방법은 클래스 방식과 함수방식이 있는데 클래스 방식은 아래와 같고 [day15.md](./day15.md)에서 진행하였다.
  - 클래스 형식의 컴포넌트는 render() 함수를 통해 생성한 HTML 모양을 렌더링 하겠다고 명시해주어야한다.
  - render() 한 클래스는 특정 명칭으로 export 해주어야 작성한 컴포넌트를 해당 export 명칭으로 다른 컴포넌트, 위치에서 불러와 재사용 가능하다.
```
import React from 'react'
class App extends Component{
  render(){
    return (
      <div>
      </div>
     );
  }
}
export default App;
```
- Function(함수형 컴포넌트)
  - 함수형태로 컴포넌트를 간편하게 작성할 수 있다.
  - 함수형 컴포넌트에서는 props을 선언하여 사용할 수 있다.
  - 함수형 컴포넌트는 클래스형 컴포넌트보다 초기 마운트가 조금 빠르고, 메모리 자원을 덜 사용한다. (하지만 양이 커지면 성능상 차이가 거의 없다.)
```
import React from 'react'
const App = () =>{
    return (
      <div>
      </div>
     );
}
export default App;
```
# props와 state
## props
> 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값이다.

> 자식 컴포넌트는 props 값을 받고, 내부에서 변경할 수 없다.
```
/* 자식 컴포넌트 */
import React, {Component} from 'react';/* 리액트 라이브러리 호출 */

class MyName extends Component{/* MyName 이라는 컴포넌트 생성 */
  render(){ /* 클래스 렌더링 */
  return (/* 이 클래스를 렌더링 하면 아래와 같은 내용이 반환 될 것을 명시 */
  /* jsx 에서 반환될 html 내용(실제로는 자바스크립트)에 {} 를 통해 javascript 변수값을 주입할 수 있다.*/
  <div>
    안녕하세요. 제 이름은 {this.props.name} 입니다. 
    /* {this.props.name} 은 해당 컴포넌트가 부모로 부터 받은 값(props)에서 name 값을 일컫는다.*/
  </div>
  );
 }
}
export default MyName;
```
```
/* 부모 컴포넌트 */
import React, {Component} from 'react';
import MyName from './MyName'; /* 위에서 작성한 자식 컴포넌트 호출 */

class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}
```
- 위의 예시를 출력하면 ``` 안녕하세요! 제이름은 리액트 입니다. ``` 라고 출력된다.
### defaultProps
> 특정 상황이나 props 의 작성이 빠져쓸 경우 props 의 기본값을 설정해 줄 수 있다.
```
/* 자식 컴포넌트 */
import React, {Component} from 'react';

class MyName extends Component{
  render(){
  return (
  <div>
    안녕하세요. 제 이름은 {this.props.name} 입니다. 
  </div>
  );
 }
}
/* defaultProps 선언 */
MyName.defaultProps = {
  name: '기본이름'
};
export default MyName;
```
```
/* 함수형 컴포넌트 예시*/
import React from 'react'
const MyName = ({name}) =>{
    return (
      <div>
        안녕하세요. 제 이름은 {name} 입니다. 
      </div>
     );
}
/* defaultProps 선언 */
MyName.defaultProps = {
  name: '기본이름'
};
export default MyName;
```

## state
> 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있는 값이다.

> props 은 부모 컴포넌트에서 선언을 하는 값이며, 자식컴포넌트는 값을 수정할 수 없다. 그렇다면 동적인 데이터를 다룰때는 무엇을 사용해야할까?  
> 바로, state를 사용한다.  

> state는 클래스형 컴포넌트에서만 선언될 수 있다. 
> state는 컴포넌트내에서 관리되는 객체이다. **setState()** 라는 함수로 선언된 컴포넌트 내부에서 state 객체를 업데이트 할 수 있다.
> state가 변경되면 컴포넌트는 rerendering 된다. (화면에 다시 변경된 DOM 내용을 그린다.)
### setState
- state의 값을 변경하기 위해서는 setState 함수를 호출해야한다.
- 해당 함수를 호출하면 컴포넌트가 무조건 리렌더링 되도록 설계되어있다.
- setState는 객체로 전달되는 값을 업데이트 해준다.
- **전계 연산자**(...)를 통해 기존 state 객체 내의 값을 유지시키거나 일부만 변경 할 수도 있다.(immutable.js, immer.js 등을 활용하여 작업을 간단하게 할 수 있다.)
### 이벤트 함수
> 이벤트 함수를 통해 setState 함수를 호출 할 수 있고, state 객체를 변경할 수 있다.
- 이벤트 함수를 선언할때는 **Camel Case**로 선언해 주어야 한다.( onClick, onMouseDown,...)
- 이벤트에 전달해 주는 값은 함수이어야 한다.
```
import React, { Component } from 'react';

class Counter extends Component {
/* state 객체 선언, number 라는 객체를 가지고 있으면서 기본 값은 0이다. */
  state = {
    number: 0
  }
/* 이벤트 함수 선언 */
  handleIncrease = () => {
    /* state 값을 변경 */
    this.setState({
      number: this.state.number + 1
    });
  }

/* 이벤트 함수 선언 */
  handleDecrease = () => {
    /* state 값을 변경 */
    this.setState({
      number: this.state.number - 1
    });
  }

/* 화면에 렌더링 할 HTML 작성 */
/* 버튼을 클릭하면 각 이벤트 함수가 실행된다.*/
/* 이벤트 함수에는 현재 전부 setState 함수를 호출하도록 되어있다. -> setState 호출 = 화면 rerendering -> 화면에 값 변화 */
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```
```
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
```
- [여기](https://cri-kim.github.io/arts)처럼 화면에 변화된 값이 출력되는 화면을 만들 수 있다. 해당 화면은 props, state 까지만 공부하고 만들었다.
![image](https://user-images.githubusercontent.com/47730634/132979570-3f6a892d-5628-414e-a9b4-0fa50cf66b2d.png)

# 참고
[Udemy React 강의](https://www.udemy.com/course/react-redux-korean),
[벨로퍼트 리액트 강의](https://velopert.com/3613),
[SPA&브라우저 동작](https://www.huskyhoochu.com/how-browser-works/)
