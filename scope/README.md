## 함수 스코프(scope)

함수 스코프는 범위라는 뜻입니다.

### 전역 변수와 지역 변수

* **전역변수**란 자바스크립트에서 제일 바깥 범위(함수 안에 포함되지 않은)에 변수를 만드는 것을 말하며,   
window 객체에 변수를 생성하는것을 말합니다.

* **지역변수**는 함수 안에 들어있는 변수를 의미합니다.

```javascript
var x = 'global';
function example() {
  var x = 'local';
  x = 'change';
}
example(); // x 바꿔본다.
alert(x);  // 여전히 'global'
```

### 스코프 체인(scope chain)

위의 코드에서 지역변수는 함수 스코프 때문에 전역변수에 영향을 줄수가 없습니다.  
var x = 'local'은 example함수 안에서만 그 데이터를 사용할 수 있습니다.  
바로 아래 x = 'change'도 함수안의 지역변수 x 를 바꾸게 됩니다.

```javascript
var x = 'global';
function ex() {
  x = 'change';
}
ex();
alert(x); // 'change'
```

### 렉시컬 스코핑(lexical scoping)
