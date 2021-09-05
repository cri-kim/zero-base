//Title	: 코딩테스트 연습문제 210903
//Author: cri-kim
//Desc	: 문제의 저작권은 제로베이스에 있으므로, 풀이한 코드만 작성하였습니다. 
//		  정답이 올라오기 전에 작성한 것으로, 해당 코드에는 오답이 있을 수 있습니다.
//		  ES6 기준으로 작성하였으나, ES6를 잘 모릅니다. 
//None solved : question 5, question 6 

//1번. 선생님의 실수 (배열, 해시) - 15분
function solve1(nums){
  //학생 수
  let cnt = nums.length;
  let setA = new Set();
  let setB = new Set(nums);
  for(let i = 1 ;i < cnt+1; i++){
    setA.add(i);
  }
  let result = new Set([...setA].filter(v => !setB.has(v)));
 
  return Array.from(result);
}
console.log(solve1([1,2,3,4,6,6,6])) 	// 5,7
console.log(solve1([1,2,3,4,5,6,6,6])) 	// 7,8
console.log(solve1([[1,2,3,90]))			// 4

//2번. 아재 개그(배열, DFS) - 25분
//visited check
let copyPuzzle = []; 
let copyWord = "";
function solve2(puzzle, word){
  copyPuzzle = puzzle;
  copyWord = word;

   for (let i=0;i<puzzle.length;i++){
      for (let j=0;j<puzzle[0].length;j++){
         dfs(i, j, puzzle.length, puzzle[0].length);
      }
   }
  if(copyWord.length == 0 ) return true;
  return false;
}
function dfs( i, j, n, m){
  	//방문 케이스일 경우 return;
	if(copyPuzzle[i][j] == 1 ) return;
  	//탐색 문자 확인
  	if(copyWord.length == 0 ) return;
	
   	if(copyPuzzle[i][j] == copyWord.charAt(0)){
    	copyWord = copyWord.substr(1);
    }
 	//방문 체크
  	copyPuzzle[i][j] = 1;
  	
		/*동북서남 탐색*/
		if(j > 0)
			dfs(i,j-1,n,m);
		if(i >0)
			dfs(i-1,j,n,m);
		if(j < m-1)
			dfs(i,j+1,n,m);
		if(i < n-1)
			dfs(i+1,j,n,m);
}
console.log(solve2([['가', '나', '콜', '사'],['라', '기', '로', '세'],['미',
'모', '리', '움'],['상', '지', '곤', '타']], '참기름'))

//3. N번째 주자(배열, 이진탐색, 큐) - 20분
function solve3(arr, num){
  	let list = [];
	for (let i=0;i<arr.length;i++){
    	for(let j=0;j<arr[0].length;j++){
        	list.push(arr[i][j]);
        }
    }
  list.sort(function(a,b){return a-b;});
  return list[num-1];
}
console.log(solve3([[1, 2, 22],[3, 4, 23],[8, 9, 33]] ,7));
//4. 기차놀이(서브배열, 슬라이딩 윈도우) - 20분
function solve4(str){
  let cnt = 1;
  let myCode = str.charAt(0)
  let max = 1;
  let applier = new Set();
  applier.add(myCode);
  for(let i=1;i<str.length;i++){
    let nowCode = str.charAt(i);
    if(applier.has(nowCode)){
      if(cnt > max){
      	max = cnt;
      }
      applier = new Set();
      cnt = 1;
    }
    else{
      cnt++;
    }
  	applier.add(nowCode);
  }
   return max>cnt?max:cnt;
}
console.log(solve4("abcdefg"));
console.log(solve4("abssccbsbsv"));
console.log(solve4("bbbb"));
console.log(solve4("asscssf"));
console.log(solve4("noooeoool"));
