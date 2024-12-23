const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(8080,() => {
	console.log('http://localhost:8080 에서 서버 실행중')
})

// app.get('/', (요청, 응답) => {
// 	응답.send('반갑다')
// })
app.get('/', (요청, 응답) => {
	응답.sendFile(__dirname + '/index.html')
})

app.get('/about', (요청, 응답) => {
	응답.sendFile(__dirname + '/about.html')
})

app.get('/news', (요청, 응답) => {
	응답.send('뉴스페이지')
})

app.get('/shop', (요청, 응답) => {
	응답.send('쇼핑페이지')
})







/*📖노트

~ 2024-12-23 ~
0. 항상 터미널 경로 꼭 확인하기! 엉뚱한데에 설치하고 서버여는 경우가 있음

1.항상 노드JS 버전 확인하기
	(참고: https://github.com/rinaYoon/STUDY/blob/main/999__record/shell%2Bnode/fnm.md)

2.프로젝트 생성하기 (package.json)
	npm init -y

3.라이브러리 세팅하기
	npm install 라이브러리이름
	(ex: npm install express)
	(ex2: npm install -g nodemon)

4.서버(웹페이지) 보는 법
	node 파일명.js
	(ex: node server.js)
	(nodemon으로 열때 : nodemon server.js)

5.폴더 연동하려면 (폴더등록하기, CSS 등록하기)
	app.use(express.static(__dirname + '/public'))
	-'public'폴더 안의 파일들을 모두 쓸 수 있게 함
	-다른 폴더들도 등록하려면 걍 바로 밑에다 복붙해서 폴더명 쓰면 됨
	-보통 'public'폴더안에 html, css, js 파일들을 넣어놓음
	-그리고 그러한 파일들을 'static'이라고 부름
	-참고: html내 css, js첨부 시 폴더명(/public)안써도됨 그냥 파일명만(대신 앞에 / 붙여야함)
				단, 폴더안에 폴더는(public폴더안에 또 폴더만듬)그땐 '하위폴더명/이름.css'라고 기재.

6.MongoDB
	cttd.yoonrina@gmail.com로 가입함
	(가입만함, 로그인하고 호스팅 받는 부분해야함)



💡라이브러리 종류💡
express : 서버 열게 도움주는거
nodemon : 저장후 바로 서버에 반영, 종료후 다시키는 번거로움X

💡express 라이브러리 사용법💡
-세팅하기
const express = require('express')
const app = express()

-서버띄우기
app.listen(8080,() => {
	console.log('http://localhost:8080 에서 서버 실행중')
})
'app.listen'는 내 컴퓨터 PORT하나 오픈하는 문법이다.
여기서 8080은 포트번호(포트번호는 6만개가 있으며, 아무숫자?넣어도 되는듯)

-서버띄운 후 기능 띄우기
app.get('/', (요청, 응답) => {
	응답.send('반갑다')
})
메인페이지 접속 시 ('/') → '반갑다'를 띄움(응답.send('반갑다'))

-html파일을 띄우고 싶다면
app.get('/', (요청, 응답) => {
	응답.sendFile(__dirname + '/index.html')
})
'__dirname'는 현재 프로젝트 절대경로 라는 뜻임

💡화살표 함수 (=>)💡
-funstion(요청, 응답) << 이거 줄인거
-위의 'funstion'말고도 app.listen()이나 app.get()도 전부 함수임
-app.get()과 같이 함수파라미터 안에 함수(funstion, =>)가 들어있으면 '콜백함수'라고함
📖*/