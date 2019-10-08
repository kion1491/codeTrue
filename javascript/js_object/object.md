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


### 객체 생성 방법 1

```javascript
var jb = { 'a':100, 'b':200, 'c':300 };
```


### 객체 생성 방법 2

```javascript
var jb = {};
jb['a'] = 100;
jb['b'] = 200;
jb['c'] = 300;
```


### 객체 생성 방법 3

```javascript
var jb = new Object();
jb['a'] = 100;
jb['b'] = 200;
jb['c'] = 300;
```


### 객체 생성 방법 4

```javascript
var jb = new Object();
jb.a = 100;
jb.b = 200;
jb.c = 300;
```

## Reference

- [Window 객체 - Window | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window)


 **[⬆  Back to Top](#객체object)**
---
