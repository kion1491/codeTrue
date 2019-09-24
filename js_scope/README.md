## 스코프(scope)


### 전역 변수(Global variable)와 지역 변수(Local variable)

* **전역변수**란 자바스크립트에서 제일 바깥 범위(함수 안에 포함되지 않은)에 변수를 만드는 것을 말하며, window 객체에 변수를 생성하는것을 말합니다.

* **지역변수**는 함수 안에 들어있는 변수를 의미합니다.


### 스코프(scope)

* 함수 스코프는 범위라는 뜻입니다.

1. 전역 스코프(Global Scope)
   - 변수가 함수 바깥이나 중괄호 ({}) 바깥에 선언되었다면, 전역 스코프에 정의된다고 합니다.  
 
1. 지역 스코프 (Local Scope)  
   - 함수 스코프(Function Scope)  
      함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있습니다.
   
   - 블록 스코프(Block Scope)  
      중괄호({}) 내부에서 const 또는 let으로 변수를 선언하면, 그 변수들은 중괄호 블록 내부에서만 접근할 수 있습니다. (ES6기준)  
   

```javascript
var x = 'global';
function example() {
  var x = 'local';
  x = 'change';
}
example(); // x 바꿔본다.
alert(x);  // 여전히 'global'
```

* 위의 예제에서 지역변수는 **함수 스코프** 때문에 전역변수에 영향을 줄수가 없습니다.  
* var x = 'local'은 example함수 안에서만 그 데이터를 사용할 수 있습니다.    
* 바로 아래 x = 'change'도 함수안의 지역변수 x 를 바꾸게 됩니다.  
* 위의 예제에서 전역에 선언된 변수 x는 어디에든 참조할 수 있습니다.  
하지만 함수 example 내에서 선언된 변수 x는 함수 example 내부에서만 참조할 수 있고 함수 외부에서는 참조할 수 없는데, 이러한 규칙을 스코프라고 합니다.

```javascript
var x = 'global';
function example() {
  x = 'change';
}
example();
alert(x); // 'change'
```
* 위의 코드에서는 이전과 달리 example함수안에서 var선언을 하지 않았으며, x = 'change'를 넣으면 전역변수가 변경이 됩니다.  
* 함수 example 범위 안에 x가 없기 때문에 더 넓은 범위인 전역 스코프에서 변수를 찾습니다.    
* 만약 스코프가 없다면 같은 식별자끼리 충돌을 일으키므로 프로그램 전체에서 하나밖에 사용할 수가 없게됩니다.  
* 보다 정확한 원리는 [실행컨텍스트](/js_context/README.md)에서 배울 수 있습니다.


### 스코프 체인(scope chain)

* 전역변수와 지역변수의 관계에서 스코프 체인(scope chain)이란 개념이 나옵니다.  
* 내부 함수에서는 외부 함수의 변수에 접근 가능하지만 외부 함수에서는 내부 함수의 변수에 접근할 수 없습니다.


```javascript
var name = 'zero';
function outer() {
  console.log('외부', name);
  function inner() {
    var enemy = 'nero';
    console.log('내부', name);
  }
  inner();
}
outer();
console.log(enemy); // undefined
```

* inner 함수는 name 변수를 찾기 위해 먼저 자기 자신의 스코프에서 찾고, 없으면 한 단계 올라가 outer 스코프에서 찾고, 
  없으면 다시 올라가 결국 전역 스코프에서 찾습니다.   
* 만약 전역 스코프에도 없다면 변수를 찾지 못하였다는 에러(undefined)가 발생합니다.  
* 이렇게 꼬리를 물고 계속 범위를 넓히면서 찾는 관계를 스코프 체인(scope chain)이라고 부릅니다.


### 렉시컬 스코핑(lexical scoping)

* 렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정됩니다.  


```javascript
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo(); // ?
bar(); // ?
```

* 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따릅니다.  
* 자바스크립트는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정됩니다.  
* 따라서 함수를 어디에서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않습니다.    




### Reference

- [스코프 (scope)](https://poiemaweb.com/js-scope)
- [함수의 범위 (scope)](https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e)
- [[번역] 자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)


 **[⬆  Back to Top](#스코프scope)**

