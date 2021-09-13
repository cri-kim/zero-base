# 목차
> facebook 에서 개발한 javascript 라이브러리 React를 학습합니다.
- LifeCycle API
- input 상태 관리하기

# LifeCycle API
> LifeCycle API는 컴포넌트가 브라우저에서 나타날때, 사라질때, 업데이트 될때 호출되는 API 이다.
## 컴포넌트가 브라우저에 나타나기전, 호출되는 API
### constructor
> 컴포넌트 생성자 함수

> 컴포넌트가 새로 만들어질때마다 해당 함수가 호출된다.
```
constructor(props){
  super(props);
}
```
## 컴포넌트가 브라우저에 나타난 후, 호출되는 API
### componentDidMount
> 컴포넌트가 화면에 나타난 후 호출된다.

> D3, masonry 등 DOM을 사용해야 하는 외부 라이브러리를 연동 하거나 해당 컴포넌트에서 필요로 하는
> 데이터를 요청하기 위해 axios, fetch 등을 통해 ajax 요청을 하거나 DOMS의 속성을 읽거나 직접 변경하는 작업을 진행한다.
```
componentDidMount(){}
```
## 컴포넌트 업데이트
> props, stat의 변화에 따라 업데이트가 결정된다.
### getDerivedStateFromProps
> props 으로 받아온 값을 state에 동기화 하는 작업이 필요할 경우 사용된다.

> props 값에따라 state가 변화될때 사용된다.

```
getDerivedStateFromProps(nextProps, prevState){
  //return null; 을 할 경우에는 따로 업데이트를 하지 않는다.
  //return 설정하고 싶은 state 값;
}
```
### shouldComponentUpdate
> 해당 컴포넌트를 업데이트 할지 props, state를 가지고 선택할 수 있다.

> 리액트는 업데이트 진행된 부분만 감지하여 Virtual DOM에 작성을 한다. 불필요 하더라도 state, props 이 변경하면 변경이 진행된다.
> 무수한 렌더링과 쓸데없이 낭비되는 CPU 처리량을 줄이기 위해 해당 함수를 사용한다.
```
shouldComponentUpdate(nextProps, nextState) {
  // return false; 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;//업데이트를한다.
}
```
### getSnapshotBeforeUpdate
> 스크롤 위치를 처리하거나 채팅 서비스 같은 UI에서 사용할 수 있다.
> 주로 애니메이션 효과를 초기화 하거나 이벤트 리스너를 없애는 작업을 한다. 이후에 render()를 호출한다.
```
getSnapshotBeforeUpdate(prevProps, prevState){
// return 변경할 상태값;
//return null; //render 함수를 호출하지 않는다.
}
```
### componentDidUpdate
> 컴포넌트가 더 이상 필요하지 않게 되면 해당 API 가 호출된다.
> 컴포넌트가 필요 없을때 호출되는 API 는 해당 API 하나 뿐이다.

> 주로 등록한 이벤트를 제거하고, setTimeout 등을 제거한다.

> 외부 라이브러리를 사용한 경우에는 dispose  등을 호출해준다.
### getSnapshotBeforeUpdate
> render(), getSnapshotBeforeUpdate(), 실제 DOM에 변화 발생, componentDidUpdate 가 실행되면 해당 API가 호출된다.

> 변화 직전의 DOM 상태를 가져오고, 여기서 return 하는 값을 componentDidUpdate에서 3번째 파라미터로 받아온다.

```
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```
## 컴포넌트 에러 발생
### componentDidUpdate
> render 함수에서 에러가 발생한다면, 리액트의 동작에 이상이 발생한다.

> 컴포넌트 에러 발생에 대처하는 API 이다.

```
componentDidCatch(error, info){
  this.setState({
    error:true
  });
}
```
# input 상태 관리하기
> input 컴포넌트의 입력을 state에 담아 활용할 수 있다.
- input 을 이용하여 click, change, submit 등 다양한 이벤트에 대해 선언할 수 있다.
- input 이 아니더라도 모든 요소로 이벤트를 관리할 수 있다.
- 이벤트를 통해 변경된 상태값을 부모 -> 자식, 자식-> 부모 컴포넌트간에 이동 시킬 수 있다.

- 자식컴포넌트의 click 이벤트 발생시, 부모 컴포넌트로 값을 주는 것을 만들었다.
- 이후, 부모컴포넌트에서 다른 자식컴포넌트로 값을 전달할 수 있게 테스트 하였다.
```
/* 부모 컴포넌트 */
...
class Home extends Component {
  state={
    children:"block"
  }
  handleCreate = (data)=>{
    console.log(data);
    this.setState({
      children:data.flag?"block":"none"
    });
  }
  render(){
    return (
      <Layout>
          <div className="p-5 mb-4 rounded-3">
          /* 자식컴포넌트 1*/
            <Temp1 >{this.state.children}</Temp1>
            .....
            <div className="col-md-6 position-relative">
          /* 자식컴포넌트 2*/
              <Cat onCreate={this.handleCreate}></Cat>
            </div>
          </div>
      </Layout>
    );
  }
}

export default Home;
```
```
/* 자식컴포넌트 1*/
import styles from '@/components/portfolio/porfolio.module.css'

const Temp1 = ({children}) =>{
    return (
      <>
        <div className={styles.ball} style={{display:children}}></div>
      </>
    )
};

export default Temp1;
```
```
/*자식컴포넌트 2*/
....
class Cat extends Component{
  state={
    text:'',
    flag:true
  }
  handleClick = (e) =>{
    this.setState({
        text: "야옹",
        flag:false
    }
    ,this.props.onCreate(this.state));
    
  }
  render(){
    return (
      <div className={styles.cat} onClick={this.handleClick}>
.....
        <div className={styles.ballon}>{this.state.text}</div>
      </div>
    );
  }
}

export default Cat;
```
- 귀여운 고양이를 클릭하면, "야옹" 이라고 출력되고, 공이 사라진다.[예시](https://cri-kim.github.io/portfolio)
# 참고
[벨로퍼트 React](https://velopert.com/)
