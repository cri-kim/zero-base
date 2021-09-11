# 목차
- Tooling
- 개발환경 설정
- JSX
# Tooling
> Transpile JSX + ES6 to E5. 
> 툴링(tooling) 혹은 트랜스파일이라는 과정을 진행한다. 이 과정은 코드를 개발자가 원하는 다른 수준의 언어로 바꿔주는 과정을 일컫는다. 대부분 webpak, babel 등을 활용한다.
> 모든 ES6의 기능을 지원하는 브라우저는 거의 없기 때문에 브라우저에서 동작할 수 있도록 처리가 필요하다.  
- webpack과 babel
  - ES6 코드가 브라우저에 바로 실행하지 못하는 문제를 해결하기 위해 코드를 트랜스파일하여 ES코드로 변형시켜주는 툴/라이브러리이다.
- 보일러플레이트
  - 재사용 가능하고 적은 수정만으로 여러 곳에서 활용 가능한 소스코드이다. 
  - 참고에 작성된 강사의 깃허브에서 보일러플레이트를 받아 학습이 가능하다.
  - webpack, babel등의 보일러플레이트 패키지는 jsx,tsx 같이 ES6형식의 코드를 바닐라 자바스크립트로 변환하여 브라우저가 이해할 수 있도록 만든다.
  - 바닐라 자바스크립트는 프레임 워크나 라이브러리없이 순수한 자바스크립트를 일컫는다.

# 개발환경 설정
## npm(Node Package Manager)
> 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다.
> 자바스크립트를 실행하는 환경을 쉽게 구축하도록 도와주는 소프트웨어이다.

> node.js에서 활용하는 모든 모듈들을 패키지로 만들어 사용자들이 설치하여 사용할 수 있도록 도와준다. 또한 프로젝트 내부의 모듈들의 의존성 또한 자동으로 해결해준다.
- Node.js(https://www.nodejs.org) 사이트에서 nodejs를 다운로드 받는다.
- 명령프롬프트창을 열어 확인을 한다.
```
npm -v
```
- 명령 프롬프트에서 npm을 사용하여 리액트 프로젝트를 만들 수 있다.
```
npm create-react-app {프로젝트명}
```
- 해당 명령어를 실행하면 리액트 프로젝트가 {프로젝트명} 의 폴더 안에 생성된다.
- ```npm start``` 명령어를 치면 babel+webpack이 자동으로 해당 소스코드를 브라우저에서 실행 가능한 코드로 변환하고 node서버를 실행시킨다. 기본적으로 http://localhost:3000에서 확인이 가능하다.(3000  포트를 사용한다면 다음 포트로 넘어간다.)

- 개발을 진행할 IDE를 선택하여 설치하여 프로젝트 소스코드를 수정하고 개발을 진행해보자 (visual studio code 설치: https://67crystalk.tistory.com/63?category=432627)
# JSX
> javascript를 확장한 문법이다.(JavaSript eXtension)
> npm 으로 생성한 react 프로젝트의 소스파일을 보면 html과 js가 섞인 소스코드가 확인된다. 이를 JSX라고 한다. html 처럼 보이지만 모두 javascript 이다. JSX로 생성된 컴포넌트들은 html페이지에 렌더링 된다.(html페이지에 올린다.)

> React는 웹 브라우저에 보여지는 HTML을 만드는 **javascript 라이브러리** 이다.
- Component
  - React로 만드는 HTML을 생성하는 자바스크립트 모듈이다.
  - component가 HTML을 생성하고 이것을 web page에 올린다.(DOM에 넣는다.)
```
import React from ‘react’; //node_modules라이브러리 중에서 리액트를 불러온다. (리액트를 실행한다.)
//index.js
//const 는 ES6에서 새로 생긴 변수 선언자이다.
//ES5에서는 변수 선언시 var을 사용했을 것이다.
//var (변수, variable)이 아닌 const는 상수를 뜻한다. 한번 선언이 된 후 변경되지 않는 값을 뜻한다.
const App = function(){
}//컴포넌트 생성

React.render(App); //html에 컴포넌트를 넣는다.(DOM에 넣는다.)
```

# 참고
[Udemy 모던 리액트 강의](https://udemy.com)
[강의 Github](https://github.com/stephengrider)
