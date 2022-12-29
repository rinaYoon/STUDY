# Windows Power Shell 기본 명령어 모음
윈도우에 내 쉘을 쓰겠다고 리눅스에 우분투 설치해서 저세상 서버 만들고 원하는쉘 설치하고 난리치는게 싫다면   
순순히 파워쉘을 받아드리는게 나을 것 같아서 쓰는 명령어 모음이다.

<br>

## 파워쉘 여는 방법
1. 시작줄 검색에 `Windows PowerShell` 검색해서 열거나
2. cmd에서 `powershell` 명령어 치면 파워쉘이 시작된다.

<br>

### 🐥PowerShell 명령어 미리보기
* `Get-Alias` : 명령어 리스트들을 볼 수 있다.   
<img src="../img/power1.PNG">

<br>

### 현재 위치 보기 (Get-Location)
* pwd
* gl

### 현재 위치의 파일, 폴더 목록보기 (Get-ChildItem)
* ls
* dir
* gci

### 보고싶은 파일의 내용을 가져오기 (Get-Content)
* cat
* type
* gc

### 파일위치나 경로 이동 (Set-Location)
* cd
* sl

### 새 파일 생성 (New-Item)
* ni

### 새 폴더 생성 (mkdir)
* md

### 파일 삭제 (Remove-Item)
* rm
* ri
* rd
* del

### 💡알고있음 좋은점
* Git은 맥처럼 커맨드라인에 써서 설치하는것이 아닌, 직접 프로그램으로 다운받거나   
윈도우 전용 설치 패키지(HomeBrew 같은거)로 설치한다.
* 그 외에는 깃 명령어는 전부 똑같다 (단, oh my zsh을 설치하지 않는 이상 축약된 명령어는 못씀요)

<br>

## 참고하면 좋은 링크
* [Microsoft 파워쉘](https://docs.microsoft.com/ko-kr/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.2)
* [참고링크](https://velog.io/@lady9305/Windows-PowerShell-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC)