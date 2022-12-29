# Fast Node Manager (fnm)
node.js를 종류별로 빠르게 설치할 수 있는 관리자 플랫폼이다.

- [Schniz/fnm: 🚀 Fast and simple Node.js version manager, built in Rust](https://github.com/Schniz/fnm)
- 특징
    - 크로스-플랫폼(macOS, Windows, Linux)
    - 빠름
    - `.node-version`, `.nvmrc` 파일 지원
        - 해당 파일이 있는 디렉토리 진입 시 자동으로 Node.js 버전 전환
- 설치
    - Scoop 사용 (Windows)
        - ```shell
            scoop install fnm
            ```
    - 설치 스크립트 사용(macOS/Linux/WSL)
        - ```shell
            curl -fsSL https://fnm.vercel.app/install | bash
            ```
        - 파라메터
            - `--install-dir`
                - 기본 디렉토리(`$HOME/.fnm`) 외 다른 디렉토리에 설치 시 사용
                - 예:
                - ```shell
                    curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "$HOME/.local/bin/"
                    ```
            - `--skip-shell`
                - 쉘 설정 파일(`.bashrc`, `.zshrc` 등)에 fnm 로드하는 코드 추가하지 않기
        - macOS는 사실 Homebrew 사용하여 설치 됨
- 쉘 설정
    - 설치 완료 후 각 쉘의 설정 파일에 환경변수 세팅을 해주는 내용을 추가해야 함
        - 쉘 스크립트로 설치하는 경우 알아서 해줌
    - `--use-on-cd`는 `.node-version`이나 `.nvmrc` 파일이 있는 디렉토리 진입 시 Node.js 버전 자동 변환 기능을 활성화 하고자 할 때 추가
    - bash/zsh
        - 설정 파일: `$HOME/.bashrc`, `$HOME/.zshrc`
            - ```shell
                eval "$(fnm env --use-on-cd)"
                ```
    - PowerShell
        - 설정 파일: `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1` 혹은 `$PROFILE`
        - VS Code 설치되어 있는 경우 PowerShell 터미널에서 `code $PROFILE`로 설정 파일을 열 수 있음
        - ```shell
            fnm env --use-on-cd | Out-String | Invoke-Expression
            ```
- 삭제
    - Scoop (Windows)
        - ```shell
            scoop uninstall fnm
            ```
    - Homebrew (macOS)
        - ```javascript
            brew uninstall fnm
            ```
    - Linux/WSL
        - 설치 디렉토리(기본 `$HOME/.fnm`) 삭제
        - 다른 디렉토리에 설치한 경우 해당 디렉토리 내 `fnm` 파일 삭제
    - 삭제 후 쉘 설정 파일에서도 관련 내용 삭제 할 것
- 사용법
    - 설치 가능한 Node.js 버전 확인
        - `fnm list-remote`(`fnm ls-remote`)
    - 설치하기
        - `fnm install --lts`: 최신 LTS 버전 설치
        - `fnm install 17`: 17.xx.xx 버전 설치
        - `fnm install 17.3`: 17.3.xx 버전 설치
    - 삭제하기
        - `fnm uninstall 17.3` 17.3.XX 버전 삭제
    - 설치한 Node.js 버전 확인
        - `fnm list`
    - 별명 붙이기
        - `fnm alias 16 default`: 16 버전에 `default`라는 별명을 붙임
        - `fnm alias 17 current`: 17 버전에 `current`라는 별명을 붙임
    - 별명 제거하기
        - `fnm unalias current`
    - 특정 버전 사용하기
        - `fnm use 12`: 12.XX.XX 버전 사용
        - `fnm use default`: `default` 버전 사용
        - `fnm use current`: `current` 별명이 붙은 버전 사용
        - `fnm use`: 현 디렉토리에 `.node-version`, `.nvmrc` 파일이 있는 경우 해당 버전 사용
