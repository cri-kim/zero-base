# 목차
- 임베디드 요소
- 폼 관련 요소
# 임베디드 요소
> 직접 내부에 코드를 작성하여 화면에 표현하는 것이 아니라, 외부에서 정보를 받아와서 표현할 수 있는 것을 말한다.  
> 이미지, 오디오, 비디오 등이 있다.
## 이미지 삽입 ```<img>```
- src 라는 속성을 통해 이미지를 받아오는 경로를 지정할 수 있다. 경로는 '절대경로' 와 '상대경로' 두 가지로 나뉜다.
  - 절대경로
    - 어떤 위치에서, 어디서든 참고하였을때 볼 수 있는 경로
  - 상대경로
    - 현재 소스의 경로 상태를 기준으로 구성된 경로
    - 현재와 다른 경로에서 참고하면 동일한 이미지를 볼 수 없다.
- alt 속성은 이미지의 텍스트 설명이며, 필수는 아니지만 스크린 리더가 alt값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 매우 유용하다.
- width/height 속성을 통해 픽셀 기준으로 이미지의 크기를 조정할 수 있다.
```
<img src="https://avatars.githubusercontent.com/u/47730634?s=40&v=4" alt="@cri-kim"
height="20" width="20">
```
### 웹에서 사용하는 이미지 유형
> HTML 표준 기준으로 이미지 사용 형식을 명시하고있지 않다.
> 웹에서 사용하는 이미지는 브라우저에 따라 조금씩 상이하다. 브라우저의 기준을 알아야 한다.
> 너무 많은 내용이 있으므로 상세한 것은 각 브라우저의 문서를 참조해야한다. 대표적인 유형을 알아보자
- JPEG
  - 정지 이미지의 손실 압축에 적합하다.
- PNG
  - 정지 이미지의 손실 압축에 적합하다.
  - 원본 이미지를 보다 정확하게 보여준다.
  - 투명도가 필요한 경우 JPEG 보다 선호된다.
- GIF
  - 여러장의 이미지로 이루어진 애니메이션을 표현할 수 있다.
- WEBP
  - 구글이 만든 이미지 포맷, 품질, 압축률 등이 훨씬 우수하나 지원 브라우저가 제한적이다.
- SVG
  - 상위 **레스터** 이미지 유형들과 다른 **벡터** 이미지이다.
  - 다양한 크기로 정확하게 그려야하는 아이콘, 다이어그램 등에 사용횐다.
### 반응형 이미지
- srcset 속성
  - 사용자의 viewpoint(device screen size)에 따라 적합한 다른 이미지를 보여줄수 있도록 하는 속성
  - 이미지 소스의 후보, 쉼표로 구분하는 한 개 이상의 문자열 목록이다.
  - 이미지의 url, 선택적 공백, 너비 서술자, 픽셀 밀도 서술자를 포함 할 수 있다.
  - 가장 큰 이미지를 로드하면 더 이상 반응하지 않는다.
```
<img src="https://avatars.githubusercontent.com/u/47730634?s=40&v=4" alt="@cri-kim"imag
srcset="https://avatars.githubusercontent.com/u/47730634?s=40&v=4 300px, 
https://avatars.githubusercontent.com/u/47730634?s=40&v=4 400px">
```
- sizes
  - 이미지의 최소, 최대 크기를 반응형으로 조절할 수 있다.
  - 미디어 조건
  - 소스 크기의 값
```
<img src="https://avatars.githubusercontent.com/u/47730634?s=40&v=4" alt="@cri-kim"imag
srcset="https://avatars.githubusercontent.com/u/47730634?s=40&v=4 300px, 
https://avatars.githubusercontent.com/u/47730634?s=40&v=4 400px"
sizes="(min-width:600px) 600px, (min-width: 450px) 450px, 300px">
```
## 비디오 태그 ```<video>```
- src 속성으로 표현할 비디오의 경로를 지정할 수 있다.
- img 태그와 다르게 src 속성은 필수 값이 아니다. 하위에 자식 요소로 ```<source>```를 가질 수 있으며 해당 태그에 src 속성에 비디오 경로를 넣을 수 있다.
- autoplay 속성을 통해 비디오를 웹페이지가 출력되었을때 자동으로 실행 시킬 수 있다.
  - 브라우저마다 상이하지만, 사운드가 있을 경우에는 새로고침시 자동시작이 안될 수 있다.
- muted 속성으로 음소거 설정 가능하다.
- poster 속성으로 해당 포스터에 경로를 넣은 이미지가 초기 동영상 미실행시 썸네일로 나온다.
```
<video src="비디오 경로.파일형식" poster="포스터 이미지경로">
 죄송합니다. 지정된 비디오가 지원되지 않습니다.
 할때 출력된다.
</video>
<video autoplay>
<source src="비디오 경로.파일형식">
 죄송합니다. 지정된 비디오가 지원되지 않습니다.
 할때 출력된다.
</video>
```
## 오디오 태그 ```<audio>```
- src 속성을 사용하거나 비디오처럼 ```<source>```태그를 자식으로 하여 src 속성을 사용할 수 있다.
## 그래픽 캔버스 요소 ```<canvase>```
- Markup을 HTML 로 진행한 후, javascript 로 해당 태그 내에 그래픽을 표현할 수 있는 요소이다.
- 웹 그림판 등 다양한 기법을 이용하여 활용할 수 있다.
## ```<iframe>```
- 중첩 브라우징 역할을 나타내는 요소이다.
- 대표적으로 구글 map 등을 웹페이지내에 inline frame 화면에 보여준다.
- 보안상의 이유로 inline frame으로 화면을 출력하지 못하게 막을 수 있고, 막힌 곳이 많다. 
# 폼 관련 요소
> 사용자에게 정보를 입력하고 정보를 컨트롤 할 수 있는 대화형 문서 구획을 표현한다.
## ```<from>```
- action 속성을 통해 양식 데이터를 처리할 uri를 입력한다.
- method 속성
  - post : POST 메서드 방식으로 양식 데이터를 요청 본문에 넘긴다.
    - 서버요청을 주소창에 들어내지 않는다.
  - get : GET 메서드 방식으로양식 데이터를 요청 본문에 넘긴다. 
    - url과 ? 를 이어 붙어 파라미터를 전송한다.
    - 타겟 uri를 확인하면 파라미터(입력한 데이터 값)을 주소창에서 확인 가능하다.
    - 데이터 값을 주소창에서 확인이 가능하여, 보안상의 이유로 특수한 경우에는 사용하지 않는다.
## ```<label>, <input>```
- input 태그는 사용자들이 값을 입력하는 칸을 만들어준다.
  - 다양한 **타입 유형**에 따라 사용이 가능하다.
  - 기본적인 text 박스, password, email,tel, progress bar, radio button, check box, number, date 등이 있다.
  - password, email, tel 등의 특정 타입을 사용하면, 해당 타입에 맞지 않는 경우 브라우저에서 경고를 출력해준다.
  - 모바일의 경우 적합한 문자만 출력 된다. (tel -> 숫자 키패드만 출력) 이부분은 디바이스와 브라우저마다 상이하다.
- label 태그는 대부분 input 과 함께 사용되며 해당 입력창의 내용을 지칭한다.
- fieldset, legend
  - 폼 내부의 input과 label을 양식 속의 그룹으로 만들 수 있다.
  - legend는 이러한 소 그룹 속의 범례를 뜻한다.
- name, placaholder, autocomplete, required, disabled, readonly, tep, min, max 등의 속성을 사용하여 input을 커스텀 할 수 있다.
## ```<button>```
- 클릭 가능한 버튼을 나타낸다.
- 외형은 브라우저마다 상이하다.
- ```<input type="button">```으로도 버튼을 만들 수 있다.
- ```<input type="submit">```으로 만든 버튼의 경우, 해당 버튼이 포함된 폼의 action 으로 지정된 타겟으로 데이터 값을 전송한다.
```
<button>버튼</button>
<input type="button" value="버튼2">
<input type="submit" value="제출"> 
```
## ```<select>, <option>, <optgroup>```
- select 는 요소 옵션 메뉴를 제공하는 컨트롤을 나타낸다.
- option과 optgroup을 하위 태그로 갖을 수 있다.
- select 태그는 multiple 특성을 사용하여 다수의 항목을 동시에 선택 할 수 있고 size 특성을 통해 노출되는 항모글 조정할 수 있다.
- optgroup을 사용하여 select 내의 옵션 그룹을 나눌 수 있다.
```
<label>Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```
## input의 list 속성과 datalist
- datalist 태그는 input 태그의 list 속성과 같이 사용한다.(필수)
- datalist는 선택지에서 추천하는/가능한/선호하는 선택지를 나타내며 출력은 select 태그와 비슷하다.
- select 요소는 선택한 값 중 하나만 선택해야 하지만 datalist의 요소값은 추천값일 뿐 input에 무조건 해당 값을 쓸 필요없다.
```
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

```
## ```<textarea>```
- 여러줄의 일반 텍스트 편집기를 출력한다.
# 참고
[제로베이스](https://www.zero-base.co.kr), 
[Can I use](https://caniuse.com)
