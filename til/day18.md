# 목차
- 배열 다루기
- 불변성

# 배열 다루기
## 생성과 렌더링
- React에서는 **불변성 유지**를 위해 state 내부의 값을 직접적으로 수정하면 안된다.
  - push, slice, unshift, pop 등의 내장함수는 배열 자체를 직접 수정하게 되어 적합하지 않다.
  - 기존의 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter 등의 함수를 사용해야한다.
  - 불변성을 유지해야 리액트에 필요한 상황에 rerendering이 되도록 설계할 수 있고, 그렇게 해야 성능 최적화를 할 수 있다.

1. 상태 데이터 추가
  - 주로 상태를 컴포넌트에서 분리하여 따로 관리한다.
  - 불변성 유지를 위해 기존의 배열을 건들이지 않는다.
2. 데이터 렌더링
  - 추가한 상태 값을 다른 컴포넌트에 변환하여 넣고, 렌더링 해올 수 있다. 
  - 컴포넌트를 여러 개 렌더링하기 위해서는 javascript 내장함수인 map을 사용할 수 있다.
  - 배열을 렌더링할 때, *key* 값은 성능을 위해 필수적이다. key를 배열의 index 값으로 사용하는 것이 아니라, 데이터가 추가될 때마다 고정적인 고유값을 부여해주어 리액트가 변화를 감지해내고 업데이트를 할 수 있도록 도와준다.
     - 배열의 key 값은 고유해야한다.
```
const a = [1,2,3,4,5];
const b = a.map(number=>number * 2); // a 배열의 내부의 값을 2씩 곱하여 b에 넣는다.
```
```
//PhoneInfo.js
import React, {Component} from 'react';

class PhoneInfo extends Component {
  //info 라는 객체를 props으로 받아와서 PhoneInfo 컴포넌트에서 렌더링을 한다.
  //props에 info 객체가 없을 경우, 컴포넌트가 크래쉬 되는 것을 방지하기 위해 defaultProps을 사용한다.
  static defaultProps = {
    info : {
      name: '이름',
      phone:'010-0000-0000',
      id:0
    }
  }
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    
    const {
      name, phone, id
     } = this.props.info;
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
       </div>
    );
  }
}
export default PhoneInfo;
```
```
//PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  //props 값 기본
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    //data 배여를 가져와 map으로 JSX 변환을 해준다.
    //설정한 고유 값 id를 key 로 가져와 사용한다.
    //key 값은 리액트에서 배열을 렌더링 할때 꼭 필요한 값이다.
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;
```
```
//App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 1
  state = {
    information: [
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
```
3. 데이터 제거
  - 기존의 배열 데이터를 건들이지 않으면서 데이터를 제거를 해야한다.
  - javascript 내장함수 slice 사용
```
const array =[1,2,3,4,5];
array.slice(0,2).concat(array.slice(3,5))//[1,2,4,5]
[...array.slice(0,2), ...array.slice(3,5)]; //[1,2,4,5] 전개연산자 사용
```
  - javascript 내장함수 filter 사용
```
const array =[1,2,3,4,5];
array.filter(num => num !== 3); //[1,2,4,5]
```
```
// App.js
...
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      //filter로 배열값을 삭제하여 해당 값을 information 객체에 넣는다.
      information: information.filter(info => info.id !== id)
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={information}
          onRemove={this.handleRemove}
        />
      </div>
    );
...
```
```
// PhoneInfoList.js
...
static defaultProps = {
    list: [],
    //삭제 이벤트에 대해 기본 값을 설정한다. 이 값을 자식 컴포넌트에 넣어줄 것이다.
    //부모로 받아온 삭제 이벤트가 있다면 그것을 전해줄 것이다.
    onRemove: () => console.warn('onRemove not defined'),
  }

  render() {
    const { data, onRemove } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
        />)
    );
...
```
```
//PhoneInfo.js
...
 handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
...
```
4. 데이터 수정
  - 데이터 수정시에도 배열의 불변성은 지켜주어야한다.
  - javascript 의 내장함수 map을 가지고 원하는 값으로 변경된 배열을 도출해낼 수 있다.
```
const array = [
  { id: 0, text: 'hello', tag: 'a' },
  { id: 1, text: 'world' , tag: 'b' },
  { id: 2, text: 'bye', tag: 'c' }
];
array.map(item => item.id === 1
  ? ({ ...item,. text: 'Korea' }) // id 가 일치하면 새 객체를 만들고, 기존의 내용을 집어넣고 원하는 값 덮어쓰기
  : item // 바꿀 필요 없는것들은 그냥 기존 값 사용
```
  - 데이터 삭제와 마찬가지로 이벤트 핸들러를 만들고 자식 컴포넌트에 제공 및 업데이트된 배열값을 전하면 된다.
# 불변성
- 배열을 직접 수정하였을 때에는 배열을 따로 호출 및 비교할 수 없다.
```
const array = [1,2,3,4];
const sameArray = array;
sameArray.push(5); //sameArray는 array의 값을 복사하는 것이 아니라 array를 가리키는 똑같은 배열이 생기는 것이다.

console.log(array !== sameArray); // false

// but other side
const array = [1,2,3,4];
const differentArray = [...array, 5];
  // 혹은 = array.concat(5)
console.log(array !== differentArray); // true
```
- 불변성은 배열 뿐만 아니라 객체에서도 동일하게 동작한다.
# 참고
[벨로퍼트 리액트](https://velopert.com/3636)
