# 프로토타입(Prototype)

* 자바스크립트는 객체지향 언어로서 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based)의 멀티 패러다임 언어이다.  
* 자바스크립트에는 클래스란 개념이 없어 객체 생성이나 상속이 다른 언어와 다르고 특히 OOP는 주로 프로토타입이란 메커니즘을 통해 이루어진다.  
* 자바스크립트에서는 함수 객체로 많은 것을 할 수 있는데 클래스, 생성자, 메소드도 모두 함수로 구현이 가능하다.

> ECMAScript 6에서 새롭게 클래스가 도입되었다. ES6의 Class는 기존 prototype 기반 객체지향 프로그래밍보다 Class 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순하고 깨끗한 새로운 문법을 제시하고 있다. ES6의 Class가 새로운 객체지향 모델을 제공하는 것이 아니며 Class도 사실 함수이고 기존 prototype 기반 패턴의 Syntactic sugar이다.  


## 생성자 함수와 인스턴스의 생성  

* 자바스크립트에서 객체를 만드는 방법은 [세가지 방법](/javascript/js_object/object.md#%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95)이 있다.  
* 자바스크립트는 생성자 함수와 new 연산자를 통해 인스턴스를 생성할 수 있다. 이때 **생성자 함수는 클래스이자 생성자의 역할**을 한다.

```javascript
// 생성자 함수(Constructor)
function Person(name) {
  // 프로퍼티
  this.name = name;

  // 메소드
  this.setName = function (name) {
    this.name = name;
  };

  // 메소드
  this.getName = function () {
    return this.name;
  };
}

// 인스턴스의 생성
var me = new Person('Lee');
console.log(me.getName()); // Lee

// 메소드 호출
me.setName('Kim');
console.log(me.getName()); // Kim


// Person 생성자 함수로 여러 개의 인스턴스를 생성해보자.
var me  = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(me);  // Person { name: 'Lee', setName: [Function], getName: [Function] }
console.log(you); // Person { name: 'Kim', setName: [Function], getName: [Function] }
console.log(him); // Person { name: 'Choi', setName: [Function], getName: [Function] }

```
* 위와 같이 인스턴스를 생성하면 각각의 인스턴스에 메소드 setName, getName이 중복되어 생성된다.  
* 즉, 각 인스턴스가 내용이 동일한 메소드를 각자 소유한다.  
* 이는 메모리 낭비인데 생성되는 인스턴스가 많아지거나 메소드가 크거나 많다면 무시할 수 없는 문제이다.  


## 프로토타입 체인과 메소드의 정의

* 모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있다.  
* 즉, 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인이라 한다.  
* 프로토타입을 이용하여 생성자 함수 내부의 메소드를 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시키면 생성자 함수에 의해 생성된 모든 인스턴스는 프로토타입 체인을 통해 프로토타입 객체의 메소드를 참조할 수 있다.  

```javascript

function Person(name) {
  this.name = name;
}

// 프로토타입 객체에 메소드 정의
Person.prototype.setName = function (name) {
  this.name = name;
};

// 프로토타입 객체에 메소드 정의
Person.prototype.getName = function () {
  return this.name;
};

var me  = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);
// Person { setName: [Function], getName: [Function] }

console.log(me);  // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }

```

* Person 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시킨 setName. getName 메소드는 프로토타입 체인에 의해 모든 인스턴스가 참조할 수 있다.  
* 프로토타입 객체는 상속할 것들이 저장되는 장소이다.  


## 상속 (Inheritance)  

* 자바스크립트는 기본적으로 프로토타입을 통해 상속을 구현한다.   
* 이것은 프로토타입을 통해 객체가 다른 객체로 직접 상속된다는 의미이다.   
* 자바스크립트의 상속 구현 방식은 크게 두 가지로 구분할 수 있다.  
* 하나는 클래스 기반 언어의 상속 방식을 흉내 내는 것(의사 클래스 패턴 상속. Pseudo-classical Inheritance)이고, 두번째는 프로토타입으로 상속을 구현하는 것(프로토타입 패턴 상속. Prototypal Inheritance)이다.

### 의사 클래스 패턴 상속 (Pseudo-classical Inheritance)  

* 의사 클래스 패턴은 자식 생성자 함수의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체하여 상속을 구현하는 방법이다. 부모와 자식 모두 생성자 함수를 정의하여야 한다.  

```javascript

// 부모 생성자 함수
var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log('Hi! ' + this.name);
  };

  // return constructor
  return Parent;
}());

// 자식 생성자 함수
var Child = (function () {
  // Constructor
  function Child(name) {
    this.name = name;
  }

  // 자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체.
  Child.prototype = new Parent(); // ②

  // 메소드 오버라이드
  Child.prototype.sayHi = function () {
    console.log('안녕하세요! ' + this.name);
  };

  // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
  Child.prototype.sayBye = function () {
    console.log('안녕히가세요! ' + this.name);
  };

  // return constructor
  return Child;
}());

var child = new Child('child'); // ①
console.log(child);  // Parent { name: 'child' }

console.log(Child.prototype); // Parent { name: undefined, sayHi: [Function], sayBye: [Function] }

child.sayHi();  // 안녕하세요! child
child.sayBye(); // 안녕히가세요! child

console.log(child instanceof Parent); // true
console.log(child instanceof Child);  // true

```

* Child 생성자 함수가 생성한 인스턴스 child(①)의 프로토타입 객체는 Parent 생성자 함수가 생성한 인스턴스(②)이다.  
* 그리고 Parent 생성자 함수가 생성한 인스턴스의 프로토타입 객체는 Parent.prototype이다.   
* 이제 child는 프로토타입 체인에 의해 Parent 생성자 함수가 생성한 인스턴스와 Parent.prototype의 모든 프로퍼티에 접근할 수 있게 되었다.  
* 이름은 의사 클래스 패턴 상속이지만 내부에서는 프로토타입을 사용하는 것은 변함이 없다.

**문제점 1. new 연산자를 통해 인스턴스를 생성한다.**

* 프로토타입 본성에 맞게 객체에서 다른 객체로 직접 상속하는 방법을 갖는 대신 생성자 함수와 new 연산자를 통해 객체를 생성하는 불필요한 간접적인 단계가 있다.  
* 만약 생성자 함수를 호출할 때 new 연산자를 포함하는 것을 잊게 되면 this는 새로운 객체와 바인딩되지 않고 전역객체에 바인딩된다. (new 연산자와 함께 호출된 생성자 함수 내부의 this는 새로 생성된 객체를 참조한다.)  

**문제점 2. 생성자 링크의 파괴**  

* 위는 child 객체의 프로토타입 객체는 Parent 생성자 함수가 생성한 new Parent() 객체이다. 
* 프로토타입 객체는 내부 프로퍼티로 constructor를 가지며 이는 생성자 함수를 가리킨다. 하지만 의사 클래스 패턴 상속은 프로토타입 객체를 인스턴스로 교체하는 과정에서 constructor의 연결이 깨지게 된다.  
* child 객체를 생성한 것은 Child 생성자 함수이지만 child.constructor의 출력 결과는 Child 생성자 함수가 아닌 Parent 생성자 함수를 나타낸다.  
* 이는 child 객체의 프로토타입 객체인 new Parent() 객체는 constructor가 없기 때문에 프로토타입 체인에 의해 Parent.prototype의 constructor를 참조했기 때문이다.

```javascript
console.log(child.constructor);  // [Function: Parent]
```
  
**문제점 3. 객체리터럴**   

* 의사 클래스 패턴 상속은 기본적으로 생성자 함수를 사용하기 때문에 객체리터럴 패턴으로 생성한 객체의 상속에는 적합하지 않다.  
* 이는 객체리터럴 패턴으로 생성한 객체의 생성자 함수는 Object()이고 이를 변경할 방법이 없기 때문이다.

```javascript
var o = {};
console.log(o.__proto__ === Object.prototype); // true
```
  
  
### 프로토타입 패턴 상속 (Prototypal Inheritance)  

* 프로토타입 패턴 상속은 Object.create 함수를 사용하여 객체에서 다른 객체로 직접 상속을 구현하는 방식이다.  
* 프로토타입 패턴 상속은 개념적으로 의사 클래스 패턴 상속보다 더 간단하다.   
* 또한 의사 클래스 패턴의 단점인 new 연산자가 필요없으며, 생성자 링크도 파괴되지 않으며, 객체리터럴에도 사용할 수 있다.  

```javascript
// 부모 생성자 함수
var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log('Hi! ' + this.name);
  };

  // return constructor
  return Parent;
}());

// create 함수의 인수는 프로토타입이다.
var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi();  // Hi! child

console.log(child instanceof Parent); // true
```

* 아래와 같이 객체리터럴 패턴으로 생성한 객체에도 프로토타입 패턴 상속을 사용할 수 있다.  


```javascript
var parent = {
  name: 'parent',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

// create 함수의 인자는 객체이다.
var child = Object.create(parent);
child.name = 'child';

// var child = Object.create(parent, {name: {value: 'child'}});

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child

console.log(parent.isPrototypeOf(child)); // true
```
* Object.create 함수는 매개변수에 프로토타입으로 설정할 객체 또는 인스턴스를 전달하고 이를 상속하는 새로운 객체를 생성한다.  
* Object.create 함수는 표준에 비교적 늦게 추가되어 IE9 이상에서 정상적으로 동작한다. 따라서 크로스 브라우징에 주의하여야 한다.  
* Object.create 함수의 폴리필(Polyfill: 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인)을 살펴보면 상속의 핵심을 이해할 수 있다.  


  
  
## Reference

- [쉽게 이해하는 자바스크립트 프로토타입 체인 : TOAST Meetup)](https://meetup.toast.com/posts/104)  
- [자바스크립트 객체지향 프로그래밍 : poiemaweb](https://poiemaweb.com/js-object-oriented-programming)  
- [객체 지향 프로그래밍(생성자와 프로토타입) : ZeroCho](https://www.zerocho.com/category/JavaScript/post/573c2acf91575c17008ad2fc)



 **[⬆  Back to Top](#프로토타입prototype)**
---
