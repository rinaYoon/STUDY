/*

01. 터미널에 npm init -y를 하면 package.json이 생긴다.
		(참고로 터미널 경로가 현재 만들어놓은 폴더 경로로 되어있는지 확인 할 것. 엉뚱한데에 json을 만듬)

02. 라이브러리 설치해서 쓰기위한 세팅 : npm install 라이브러리이름
		- express(서버만들기 쉬워짐)

03. PORT가 뭐냐면
		컴퓨터와 컴퓨터끼리 접속하는거. 유명한 웹사이트들도 컴퓨터이다. (ex: 네이버)
		'http://localhost:8080' 에서 8080아 포트번호 이다.

*/

const express = require('express')
const app = express()
// 위의 변수는 라이브러리 'express'를 사용하겠다는 선언이다.
// 이제 express 문법으로 서버 개발 쉽게 가능

app.listen(8080, () => {
		console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
	응답.send('반갑다')
})