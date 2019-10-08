# 클로저(Closures)

* **클로저**란 비공개 변수를 가질 수 있는 환경에 있는 함수를 말합니다.
* 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수라 말할수 있습니다.
* 클로저는 외부 함수의 변수를 사용할 수 있기 때문에 대개 반환하여 사용합니다.
* 클로저를 말할 때는 [스코프](/javascript/js_scope/README.md#스코프scope)/[컨텍스트](/javascript/js_context/README.md#실행-컨텍스트execution-context)/비공개 변수와 함수의 관계를 항상 같이 말해주어야 합니다.  

> “A closure is the combination of a function and the lexical environment within which that function was declared.”  
클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.  
[스코프](/javascript/js_scope/README.md#스코프scope)는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다.  
이를 [렉시컬 스코핑](/javascript/js_scope/README.md#렉시컬-스코핑lexical-scoping)(Lexical scoping)라 한다. 


## 개요

```javascript
var makeClosure = function() {
  var name = 'jedi';
  return function () {
    console.log(name);
  }
};
var closure = makeClosure(); // function () { console.log(name); }
closure(); // 'jedi';
```


1. 위의 코드에서 name은 closure 함수의 매개변수도 아니고, closure 함수 내부에서 생성한 변수도 아니며, 바로 이런 것이 비공개 변수입니다.
2. function() { console.log(name) }은 name 변수나, name 변수가 있는 스코프에 대해 클로저라고 부를 수 있습니다.
3. 수학적으로는 자유변수라고도 합니다.

## 클로저의 사용목적

* 클로저는 외부 함수의 변수에 접근할 수 있기 때문에, 일반적으로 두 가지 목적을 위해 사용할 수 있습니다.

1. 사이드 이펙트(side effects) 제어하기
2. private 변수 생성하기

### 클로저로 사이드 이펙트 제어하기

* 함수에서 값을 반환할 때를 제외하고 무언가를 행할 때 사이드 이펙트(side effects)가 발생합니다.   
* 예를 들어 Ajax 요청이나 timeout을 생성할 때, 그리고 심지어 console.log를 선언하는 것도 사이드 이펙트 입니다.


```javascript
function makeCake(flavor) {
  setTimeout(_ => console.log('Made a ${flavor} cake!', 1000))
}
makeCake(‘banana’)
// Made a banana cake!
```
* 위의 예제에서 친구가 케이크의 맛을 추가할 수 있도록 makeCake함수를 작성할 수 있습니다.
* 함수를 실행하면, 1초가 지난 즉시 케이크가 만들어집니다.

* 하지만 맛을 알게 된 후에, 원하는 시점에 케이크를 만들고 싶어합니다.

```javascript
function prepareCake (flavor) {
  return function () {
    setTimeout(_ => console.log('Made a ${flavor} cake!', 1000))
  }
}
const makeCakeLater = prepareCake(‘banana’)
// And later in your code…
makeCakeLater()
// Made a banana cake!
```
* 이 문제를 해결하기 위해서, 위의 예제와 같이 맛의 정보를 담고 있는 prepareCake함수를 작성할 수 있습니다.   
* 그리고 prepareCake함수 내부에서는 클로저인 makeCake을 반환합니다.
* 이제 원하는 시점에 언제든지 반환된 함수를 호출할 수 있고, 호출한 후 1초 뒤에 케이크가 만들어질 겁니다.


### Private 변수와 클로저

* 함수 내의 변수는 함수 바깥에서 접근할 수 없기 때문에, private 변수라고 불립니다.
* 하지만 해당 변수들에 접근해야 할 필요가 발생하므로 클로저를 활용해서 접근이 가능하게 구현할수 있습니다.


```javascript
function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode)
    }
  }
}
const theSecret = secret('CSS Tricks is amazing')
theSecret.saySecretCode()
```

> 위의 예제에서 saySecretCode는 유일하게 secret함수 바깥에서 secretCode를 노출하는 함수(클로저)입니다.  
따라서, 이런 함수를 특권 함수(privileged function)라고 부르기도 합니다.

## Reference

- [클로저](https://poiemaweb.com/js-closure)
- [[번역] 자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)


 **[⬆  Back to Top](#클로저Closures)**
---
