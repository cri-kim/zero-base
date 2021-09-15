# 개인복습
- svg
- svg와 애니메이션
- 

# svg
> svg는 확장 가능한 벡터 그래픽(Scalable Vector Graphics)이다. 2차원 벡터 그래픽을 표현하기 위한 파일 형식이다.

>  svg는 일종의 XML언어로 화면에 그림을 그리는데 사용한다. 
>  svg 이미지는 선과 모양을 일일이 지정하거나, 이미 존재하는 이미지를 수정하거나 둘다 사용하여 만들 수 있다.
>  svg 는 벡터로 되어있어서 bitmap으로 되어있는 jpg, png 등과 확대시 차이를 느낄 수 있다.

> 벡터 이미지는 XML 텍스트 파일로 정의되어 있엉 검색화, 목록화, 스크립트 화에 유리하다.

> XML 텍스트 파일이기 때문에 값을 쉽게 바꾸어 CSS, javascript 등으로 애니메이션화 하기 유리한 파일 포멧이다.
## viewbox
> svg 파일을 받아와 화면에 뿌리면 가끔 원하지 않는 위치에 그림이 있을때가 있다. 이러한 그림의 뷰포인트를 설정하는 요소가 viewbox이다.
- viewbox: x좌표 y좌표 width height 로 설정할 수 있다.
- x,y좌표는 그림의 기준점을 옮길 수 있다.
- width, height는 태그 내부에 별도로 빼내어 요소로 설정할 수 있다.
- width, height 값은 음수가 불가능하다. 0일 경우 화면에서 보이지않는다.
```
<!-- 동일한 svg -->
<svg width="512" height="512"></svg>
<svg width="512" height="512" viewBox="0 0 512 512"></svg>
```

# svg와 애니메이션
1. svg 파일을 만들거나 무료로 가져온다.
  - 인터넷에 이미 많은 무료 사이트가 존재한다. [예시](https://www.flaticon.com/free-icon)
2. svg 코드를 HTML에 인라인으로 삽입한다.
  - 인라인으로 삽입해야 애니메이션에서 요소별 조작이 가능하다.
  - svg 코드를 보면 XML 형식으로 되어있는데 해당 요소를 애니메이션으로 움직일 것이다.
3. 요소에 구분할 수 있는 selector를 넣는다.
  - 개별로 설정을 하고싶다면, selector를 넣는다. 본인은 id 를 값으로 넣었다.
4. css 설정을 진행하자
  - svg 포멧들을 겹쳐서 진행하고 싶다면 ```position:absolute```를 통해 일반적인 문서 흐름을 제거하고 top,right, bottom,left 값을 지정한다.
  - ```position:abolsute```를 사용하였으면, 각 이미지마다 겹쳐질 경우에 먼저 보여질 우선순위 설정이 필요하다.
    - ```z-index```를 사용하여 화면 우선순위를 설정하였다.
    - ```z-index```의 최솟값은 0이며, 최대 값은 2147483647이다.
```
<!DOCTYPE html>
<html>
	<head>
		<title>테스트</title>
		<style>
			.box{
				position:relative;
			}
			svg{
				position:absolute;
			}
			#cloud{
				animation: cloudFlow1 5s 2s infinite alternate;
			}
			@keyframes cloudFlow1{
				from{
					left:0px;
				}
				to{
					left:500px;
				}
			}
		</style>
	</head>
	<body>
		<div class="box">
			<!-- svg 인라인 삽입 -->
			<!-- cloud --> 
			<svg id="cloud" height="100px" viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg"><path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#a3d4f7"/></svg>
			<!-- village -->
			<svg id="village" width="500px" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m41 26h20v20h-20z" fill="#d3843d"/><path d="m41 26h20v8h-20z" fill="#ad6327"/><path d="m47 38h8v8h-8z" fill="#66342e"/><path d="m61 26h-20v-5l6-3h8l6 3z" fill="#f9bb4b"/><path d="m46 21h2v2h-2z" fill="#fcf05a"/><path d="m50 21h2v2h-2z" fill="#fcf05a"/><path d="m54 21h2v2h-2z" fill="#fcf05a"/><path d="m3 21h20v25h-20z" fill="#d3843d"/><path d="m8 38h10v8h-10z" fill="#66342e"/><path d="m12 38h2v8h-2z" fill="#995f5b"/><path d="m23 21h-20l10-8z" fill="#f9bb4b"/><path d="m3 21h20v8h-20z" fill="#ad6327"/><path d="m8 34h5v4h-5z" fill="#ffd782"/><path d="m13 34h5v4h-5z" fill="#f7bf66"/><path d="m33 33h-8l4-6z" fill="#55b56a"/><path d="m27 33-2 4h8l-2-4z" fill="#8ec13f"/><path d="m39 20h-8l4-6z" fill="#55b56a"/><path d="m33 20-2 4h8l-2-4z" fill="#8ec13f"/><path d="m33 24-2 4h8l-2-4z" fill="#c8d952"/><path d="m27 37-2 4h8l-2-4z" fill="#c8d952"/><path d="m28 41h2v5h-2z" fill="#d3843d"/><path d="m57 14v-1a2.768 2.768 0 0 0 -3-3h-1c-.593-1.9-2-3-5-3-2.227 0-4.518.932-5 3h-1a2.919 2.919 0 0 0 -3 3v1z" fill="#cdeef6"/><path d="m36 10v-1a2.768 2.768 0 0 0 -3-3h-1c-.593-1.9-2-3-5-3-2.227 0-4.518.932-5 3h-1a2.919 2.919 0 0 0 -3 3v1z" fill="#cdeef6"/><path d="m3 46h58v15h-58z" fill="#55b56a"/><g fill="#3e8051"><path d="m10 50h2v2h-2z"/><path d="m12 56h6v2h-6z"/><path d="m33 49h2v2h-2z"/><path d="m54 49h2v2h-2z"/><path d="m56 51h2v2h-2z"/><path d="m6 52h2v2h-2z"/></g><path d="m29.628 52.071-2.828 1.134 1.133-2.833-1.858-.744-1.075 2.68-1.071-2.68-1.858.744 1.129 2.833-2.832-1.134-.744 1.858 5 2a1.01 1.01 0 0 0 .744 0l5-2z" fill="#c8d952"/><path d="m51.628 54.071-2.828 1.134 1.133-2.833-1.858-.744-1.075 2.68-1.071-2.68-1.858.744 1.129 2.833-2.832-1.134-.744 1.858 5 2a1.01 1.01 0 0 0 .744 0l5-2z" fill="#c8d952"/><path d="m34 28h2v18h-2z" fill="#d3843d"/><path d="m61 26h-2.26l-7.74 2.92-7.74-2.92h-2.26v1.31l7.14 2.69-7.14 2.69v1.31h2.26l7.74-2.92 7.74 2.92h2.26v-1.31l-7.14-2.69 7.14-2.69z" fill="#66342e"/><path d="m23 21h-2.56l-7.43 2.44h-.01l-7.44-2.44h-2.56v1.27l6.79 2.23-6.79 2.23v2.11l9.99-3.28h.01l10 3.28v-2.11l-6.79-2.23 6.79-2.23z" fill="#66342e"/></svg>
		</div>
	</body>
</html>
```
5. 원하는 애니메이션을 구성해본다.
  - 브라우저에 html 을 띄우고, 관리자도구(F12)로 색도 변경해보고 설정을 하면서 테스트를 진행해본다.
  - 위의 예제는 구름을 움직여보았다.

# 실습
> 개인적으로 예쁘고 눈에 확 띄는 포트폴리오를 만들고 싶었다.

> github가 제공하는 webpage 기능을 통해 블로그의 틀을 만들었으나, 이미지를 고르고 애니메이션을 넣는 감각이 부족하였다.

1. animation을 사용하여 구름이 움직이도록 적용하였다. 
2. hover 등의 결합자를 사용하여 javascript 없이 화면의 이벤트에 이미지가 반응하도록 하였다.
3. position을 적절하게 사용하여 화면 배치를 벗어나지 않고 원하는 구도를 작성하였다.

- 실습 url : https://cri-kim.github.io/portpolio
- 실습 source : https://github.com/cri-kim/gh-page



# 참고
[MDN](https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial)
