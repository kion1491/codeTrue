
# 호이스팅(Hoisting)

* **호이스팅**이란 변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상을 의미합니다.
* 이때 초기화 또는 대입 부분은 그대로 남아있습니다.


## 호이스팅의 실행  

1. 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
2. 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킨다.
3. 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.
4. 실제 메모리에서는 변화가 없다.


## 호이스팅의 대상

1. var 변수 선언과 함수선언문에서만 호이스팅이 일어난다.
2. let/const 변수 선언과 함수표현식에서는 호이스팅이 발생하지 않는다.



## 함수선언문에서의 호이스팅  

* 함수선언문은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

```javascript 
function sayWow() {
  console.log('wow');
}
var zero;
console.log(zero);
sayWow();
zero = 'zero';
```
* 위의 코드는 선언보다 호출을 먼저 하기 때문에 얼핏 보기에 말이 안 되는 것처럼 보입니다. 
* 하지만 에러 없이 정상 작동합니다. 변수 선언과 함수 선언식이 최상단으로 끌어올려졌기 때문입니다.


## 함수표현식에서의 호이스팅  

* 함수표현식은 함수선언문과 달리 선언과 호출 순서에 따라서 정상적으로 함수가 실행되지 않을 수 있습니다.
* 함수표현식의 선언이 호출보다 위에 있는 경우 - 정상 출력
* 함수표현식의 선언이 호출보다 아래에 있는 경우 (var 변수에 할당) - TypeError

```javascript 
sayWow();                   // (3)
sayYeah();                  // (5) 여기서 대입되기 전에 호출해서 에러
var sayYeah = function() {  // (1) 선언 (6) 대입
  console.log('yeah');
}
function sayWow() {         // (2) 선언과 동시에 초기화(호이스팅)
  console.log('wow');       // (4)
}
```

* 일단 처음 실행 시는 전역 컨텍스트가 먼저 생성되어 sayWow 함수는 함수 선언식이므로 컨텍스트 생성 후 바로 대입됩니다.


```javascript 
// 객체형식으로 표현

'전역 컨텍스트': {
  변수객체: {
    arguments: null,
    variable: [{ sayWow: Function }, 'sayYeah'],
  },
  scopeChain: ['전역 변수객체'],
  this: window,
}
```
* 컨텍스트 생성 및 코드가 순차적으로 실행되는데 sayYeah는 대입되기 전에 호출해서 에러가 발생합니다.


## 같은 이름의 var 변수 선언과 함수 선언에서의 호이스팅

* 변수 선언이 함수 선언보다 위로 끌어올려진다.


```javascript 
/** --- 호이스팅 이전 --- */

var myName = "hi";

function myName() {
    console.log("yuddomack");
}
function yourName() {
    console.log("everyone");
}
var yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);
```


```javascript 
/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 --- */

// 1. [Hoisting] 변수값 선언 
var myName; 
var yourName; 

// 2. [Hoisting] 함수선언문
function myName() {
    console.log("yuddomack");
}
function yourName() {
    console.log("everyone");
}
// 3. 변수값 할당
myName = "hi";
yourName = "bye";

console.log(typeof myName);   // > "string"
console.log(typeof yourName); // > "string"
```

## 값이 할당되어 있지 않은 변수와 값이 할당되어 있는 변수에서의 호이스팅


```javascript 
var myName = "Heee";   // 값 할당 
var yourName;          // 값 할당 X

function myName() {   // 같은 이름의 함수 선언
    console.log("myName Function");
}
function yourName() { // 같은 이름의 함수 선언
    console.log("yourName Function");
}

console.log(typeof myName);   // > "string"
console.log(typeof yourName); // > "function"
```
* 값이 할당되어 있지 않은 변수의 경우, 함수선언문이 변수를 덮어버립니다.
* 값이 할당되어 있는 변수의 경우, 변수가 함수선언문을 덮어버립니다.


## Reference

- [실행 컨텍스트와 자바스크립트의 동작 원리](https://poiemaweb.com/js-execution-context)
- [[JavaScript] 호이스팅(Hoisting)이란](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)


 **[⬆  Back to Top](#호이스팅Hoisting)**
---
