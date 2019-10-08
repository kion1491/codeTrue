# 객체(object)

## 객체(Object)란?  

* 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다.  
* 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.  
* 자바스크립트의 객체는 **키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합**이다.   
* 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 **프로토타입(prototype)** 이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다. 


## 프로퍼티(Property)  

* 프로퍼티는 프로퍼티 키(이름)와 프로퍼티 값으로 구성된다.  
  * 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값  
  * 프로퍼티 값 : 모든 값  

* 프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.  
* 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 


## 메소드  

* 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다. 즉, 메소드는 **객체에 제한되어 있는 함수를 의미** 한다.


## 객체 생성 방법  

* 자바와 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성한다.

### 객체 리터럴  

* 가장 일반적인 자바스크립트의 객체 생성 방식이다.  
* 중괄호({})를 사용하여 객체를 생성하는데 {} 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.   
* 중괄호({})내에 아무것도 기술하지 않으면 빈 객체가 생성된다.  

```javascript 
var emptyObject = {};
```


### Object 생성자 함수  

* new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.  
* 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법이다.  
* 생성자(constructor) 함수란 new 키워드와 함께 객체를 생성하고 초기화하는 함수를 말한다.   
* 일반 함수와 생성자 함수를 구분하기 위해 생성자 함수의 이름은 파스칼 케이스(PascalCase)를 사용하는 것이 일반적이다.

```javascript 
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```

> 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다.  
객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.  
Object 생성자 함수 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.  


* 사실 객체 리터럴 방식으로 생성된 객체는 결국 빌트인(Built-in) 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현(short-hand)이다.


## Reference

- [Window 객체 - Window | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window)


 **[⬆  Back to Top](#객체object)**
---
