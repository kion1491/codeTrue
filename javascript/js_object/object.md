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


### 생성자 함수  

* 객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다.   
* 아래 코드와 같이 동일한 프로퍼티를 갖는 객체임에도 불구하고 매번 같은 프로퍼티를 기술해야 하는 단점이 있다.  

```javascript 
var person1 = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

var person2 = {
  name: 'Kim',
  gender: 'female',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
```

* 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.


```javascript 
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```

* 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.  
* 프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스(instance)를 가리킨다.  
* this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 public(외부에서 참조 가능)하다.  
* 생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.


```javascript 
function Person(name, gender) {
  var married = true;         // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function(){ // public
    console.log('Hi! My name is ' + this.name);
  };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender);  // 'male'
console.log(person.married); // undefined
```


* 자바스크립트의 생성자 함수는 이름 그대로 객체를 생성하는 함수이다.  
* 클래스 기반 객체지향 언어의 생성자(constructor)와는 다르게 그 형식이 정해져 있는 것이 아니라 기존 함수와 동일한 방법으로 생성자 함수를 선언하고 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.  
* 이는 생성자 함수가 아닌 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다는 것을 의미한다. 따라서 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지하려는 노력을 한다.  
* new 연산자와 함께 함수를 호출하면 this 바인딩이 다르게 동작한다. 

## Pass-by-reference  

* object type을 객체 타입 또는 참조 타입이라 한다.  
* **참조 타입**이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다.  
* 원시 타입은 값이 한번 정해지면 변경할 수 없지만(immutable), 객체는 프로퍼티를 변경, 추가, 삭제가 가능하므로 변경 가능(mutable)한 값이라 할 수 있다.  


> 원시 타입 : 숫자, 불린값, null과 undefined  
(원시 타입 데이터는 변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터 값을 보관한다.)  
-
> 참조 타입 : 객체, 배열, 함수  
(참조 타입 데이터는 크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될 수 없으며, 변수에는 데이터에 대한 참조만 저장된다. 참조는 참조 타입 데이터의 주소이지 해당 데이터의 값이 아니다.)


## Reference

- [객체](https://poiemaweb.com/js-object)


 **[⬆  Back to Top](#객체object)**
---
