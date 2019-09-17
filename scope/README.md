## 함수 스코프(scope)

함수 스코프는 범위라는 뜻입니다.

### 전역 변수와 지역 변수

전역변수란 자바스크립트에서 제일 바깥 범위(함수 안에 포함되지 않은)에 변수를 만드는 것을 말하며, window 객체에 변수를 생성하는것을 말합니다.

```javascript

var codeTrue = 'global';
function example() {
  var codeTrue = 'local';
  codeTrue = 'change';
}
example();       // codeTrue를 바꿔본다.
alert(codeTrue); // 여전히 'global'

```




### 스코프 체인(scope chain)

### 렉시컬 스코핑(lexical scoping)