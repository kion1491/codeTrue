# 함수(Function)

* 자바스크립트의 함수는 일급 객체로, 코드의 재사용, 정보의 구성 및 은닉 등에 사용하는 모듈화의 근간이다.
* 함수의 일반적 기능은 어떤 작업을 수행하는 문(statement)들의 집합을 정의하여 코드의 재사용에 목적이 있다. 


## 함수의 특징

* 자바스크립트의 함수는 일급 객체이므로 아래와 같은 특징이 있다.

> 무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
함수의 파라미터로 전달할 수 있다.
반환값(return value)으로 사용할 수 있다.

## 함수의 정의

* 자바스크립트에서 함수를 만드는 방법은 크게 **함수 선언문**, **함수 표현식**이 있다.  
* 두 방법은 함수의 이름과 [호이스팅](javascript/js_hoisting/README.md)의 관점에서 차이가 있다.  



## 함수 선언문 (Function Statements)

```javacript
function functionName( argument1, argument2, ... ) {
  // Do Something
}
functionName( value1, value2, ... );
```
* 함수를 선언하는 것을 함수 선언문이라고 하며, 함수 선언 방식은 함수 리터럴 형식과 같다.  
* 함수 선언문은 반드시 함수 이름이 명시되어 있어야 한다.



## 함수 표현식 (Function Expressions)


```javacript
var functionName = function( argument1, argument2, ... ) {
  // Do Something
};
functionName( value1, value2, ... );
```
* 함수 리터럴로 생성한 함수를 변수에 할당하는 방법을 함수 표현식이라고 한다. 
* `function` 예약어 다음에 이름을 붙여도 되고 안 붙여도 된다. 붙이면 디버거에서 함수 이름이 보인다는 장점이 있다.  
* 호출시에 전달하지 않은 매개변수는 `undefined`로 초기화 되고, 초과 전달된 매개변수는 무시된다.


## 반환 (Return)


```javacript
var dateChecker = function() {
  var date = new Date();
  alert(date);
};
dateChecker(); // undefined
```

* 위의 예제와 같이 `return`이 없는 함수는 자동으로 `undefined`를 반환합니다.  
* `return` 이후에는 함수가 종료되기 때문에 실행되지 않습니다. 



## Reference

- [함수](https://www.zerocho.com/category/JavaScript/post/572dcbbd2115c895b0f248fd)




 **[⬆  Back to Top](#함수function)**
---
