# 윈도우에 우분투, zshell 설치하기
나의 *마참내 즐거운* 노트북에 zhell을 설치하였다.   
그러나 제약이 걸려있었다. 그거슨 바로..   
윈도우에서는 못쓰고 아예 새로운 리눅스 공간에 만들어서 그 안에서 사용해야 한다는것.   
뭐 덕분에 회사에서 쓰던 맥과 비슷한 환경이 되었다지만 애지간히 찜찜하다.
그래도 시험겸 연습삼아 사용합시다.

<br>

## 💁‍♀️ 설치합시다
[참고한곳](https://velog.io/@kkyungvelyy/Oh-My-Zsh-%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90-zsh-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)
### 01. 윈도우에 리눅스 활성화
1. 윈도우 검색에 `Windows PowerShell`를 검색한다.
2. `Windows PowerShell`을 `관리자 권한`으로 실행한다.
3. 실행 후 아래 명령어를 실행한다.
4. 이후 재부팅을 한다.
```
$ Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
## 02. ubuntu20.04 설치
1. Microsoft Store 를 검색하고 연다
2.  ubuntu20.04 또는 그냥 ubuntu들을 검색해서 평점좋은걸로 검색한다 (평점좋고 버전 높은걸로)
3. ubuntu를 설치한다.
4. 참고한곳에는 설치 겸사로 Windows Terminal Preview도 설치했는데 이건 하던말던 하던가 참고링크 보고 따라하는게 나을듯 싶다.

## 03. ubuntu에서 설치도구 apt를 업데이트 하기
1. 아래의 명령어를 넣으며 실행한다. 시간이 좀 걸릴수도 있다.
2. 중간에 이름과 컴퓨터 패스워드(님 컴퓨터 켜야할때 나오는 패스워드) 입력하라고 나오면 그대로 곱게 따라하면됨
```
$ sudo apt update
$ sudo apt upgrade -y
```

## 04. ubuntu에다가 zsh(zshell)설치하기
1. 아래의 명령어들을 복붙하면 설치가 완료된다.
2. sh -c 로 시작하는건 oh-my-zsh 이다.
```
$ sudo apt install zsh

$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

<br>

## 💁‍♀️ 알아야 하는것
### 01. 윈도우가 아님요
zsh 사용하는건 좋으나 큰 제약이 걸렸다.   
바로 윈도우 내에서 하는게 아닌 `리눅스 세계 안에서 하는것`.   
덕분에 맥처럼 홈 디렉토리 안에 내 전용 폴더있는.. 그런 환경이 만들어졌다.   
### 02. 우분투 세계로 입장하는 방법
이걸 폴더 경로에 치거나, 폴더열기 해야할듯.   
쳐보면 네트워크/어쩌구 되어있는것을 볼 수 있다.   
즉 윈도우가 아님을 알게된다.
```
\\wsl$
```
### 03. 우분트 조작법
천천히 찾아서 쓰기로 한다.
1. 폴더로 열기 (윈도우용)  
  window를 사용하는 경우 wsl에서 다음 명령어를 입력하면 파일탐색기에서 해당 디렉토리가 열린다.
  ```
  explorer.exe .
  ```