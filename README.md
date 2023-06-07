# Yalc Example

yalc를 사용하는 방법에 대해서 다룹니다.\
yalc를 이용하면 npm package를 배포하지 않고도 수정한 버전을 배포된 것처럼 package.json에 연결하여 테스트할 수 있습니다.

## 설치 방법

`yarn global add yalc`

## 사용 순서

### 1. lodash를 local로 `git clone` 한다.

- https://github.com/lodash/lodash

### 2. 다운받은 lodash 코드를 수정한다.

- drop function에 console을 넣었다.

### 3. 기존의 버전과 구분을 위해 lodash의 package.json의 version을 바꾼다.

- `lodash@5.0.1` 으로 +1 올려줬다.

### 4. lodash 프로젝트 폴더에서 `yalc publish`를 입력한다.

- private flag를 붙여야할 수도 있다. `yalc publish --private`
- 다음과 같이 터미널에 출력된다. `lodash@5.0.1 published in store.`
- `~/.yalc` 경로에 추가된다.

### 5. 수정된 lodash를 쓰고자하는 프로젝트에서 `yalc add lodash@5.0.1`를 입력한다.

- `/.yalc/lodash`에 lodash 파일들이 복사된다.
- package.json의 lodash가 다음과 같이 바뀐다. `"lodash": "file:.yalc/lodash",`
- `yalc.lock` 파일이 생성된다.

### 6. `yarn install`을 입력해서 dependency를 업데이트 한다.

### 7. `yarn dev` 후 브라우저에서 console을 확인해보면 작동하는 것을 볼 수 있다.

## References

- https://github.com/wclr/yalc
- https://github.com/lodash/lodash
