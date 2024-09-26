/*

01. 터미널에 npm init -y를 하면 package.json이 생긴다.
		(참고로 터미널 경로가 현재 만들어놓은 폴더 경로로 되어있는지 확인 할 것. 엉뚱한데에 json을 만듬)

02. 라이브러리 설치해서 쓰기위한 세팅 : npm install 라이브러리이름
		- express(서버만들기 쉬워짐)
		- nodemon(서버 저장 후 껏다 키는거 도와줌)(npm install -g nodemon)

03. PORT가 뭐냐면
		컴퓨터와 컴퓨터끼리 접속하는거. 유명한 웹사이트들도 컴퓨터이다. (ex: 네이버)
		'http://localhost:8080' 에서 8080아 포트번호 이다.

04. 서버 실행하는 방법 : node 파일이름.js (ex: node server.js)

*/

// 위의 변수는 라이브러리 'express'를 사용하겠다는 선언이다.
// 이제 express 문법으로 서버 개발 쉽게 가능
const express = require('express')
const app = express()


// css, js 폴더 등록하기.
app.use(express.static(__dirname + '/public'))
/*
- 'app.use(express.static(__dirname + '/public02'))' <<< 다른 폴더도 등록하고싶다면 이렇게 밑에다가 씀
- css, js, jpg 같은 파일들을 static 파일들이라고 부름(변동사항이 없기 때문에 글케 부른다함)
*/



app.listen(8080, () => {
		console.log('http://localhost:8080 에서 서버 실행중')
})

// 화살표함수 햇깔리면 기존 function 문법 쓰셈 app.get('/URL', function(요청, 응답) {...}
// 참고: 함수 get 안에 함수 들가있을때 그 안에 들어가있는 함수들을 콜백함수라고 함
// 누가 요런 url로 접속하면
app.get('/URL', (요청, 응답) => {
	응답.send('데이터~~~~')// << 이거 보내주라는 뜻
	/*
	실행순서.
	1. 누가 /URL 접속하면 app.get() 함수가 실행됨
	2. 그 다음 콜백함수((요청,응답)=>{})가 실행됨
	*/
})

// app.get('/', (요청, 응답) => {
// 	응답.send('반갑다')
// })

app.get('/news', (요청, 응답) => {
	응답.send('오늘 비옴')
})

app.get('/shop', (요청, 응답) => {
	응답.send('쇼핑페이지 입니다')
})

// html 파일을 서버로 보낼려면
app.get('/', (요청, 응답) => {
	응답.sendFile(__dirname + '/index.html')
	// __dirname: 현재 프로젝트(server.js)절대 경로, server.js가 담긴 폴더
	// sendFile: html 파일이 있는 경로
})

//숙제: 유저가 '/about'으로 접속하면 내 소개용 html 페이지 보내주기
app.get('/about', (요청, 응답) => {
	응답.sendFile(__dirname + '/homework-0926.html')
})