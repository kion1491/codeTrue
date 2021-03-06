
# 실행 컨텍스트(Execution Context)

#### 실행 컨텍스트(Execution Context)는 scope, hoisting, this, function, closure 등의 동작원리를 담고 있는 자바스크립트의 핵심원리입니다.

**컨텍스트**는 한국말로 번역하면 문맥이라는 뜻이며, 쉽게 코드의 실행 환경이라고 이해하시면 됩니다.   
ECMAScript 스펙에 따르면 실행 컨텍스트를 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라고 정의합니다.  
쉽게 말하면 실행 컨텍스트는 **실행 가능한 코드가 실행되기 위해 필요한 환경** 이라고 말할 수 있습니다.

#### 여기서 말하는 실행 가능한 코드는 아래와 같이 전역 코드와 함수 내 코드입니다.

* 전역 코드 : 가장 베이스가 되는 실행 구역이다. 특정 '함수' 안에서 실행되는 코드가 아니라면 코드는 전역 컨텍스트에서 실행됩니다.
* 함수 코드 : 함수가 호출될 때마다, 해당 함수에 대한 실행 컨텍스트가 생성됩니다.
* Eval 코드 : eval 함수로 실행되는 코드로서 개발자가 많이 사용하지 않는 개념입니다.


#### 자바스크립트 엔진은 코드를 실행하기 위하여 실행에 필요한 아래와 같은 정보들을 알고있어야 합니다.

* 변수 : [전역변수](/javascript/js_scope/README.md#전역-변수global-variable와-지역-변수local-variable), 지역변수, 매개변수, 객체의 프로퍼티
* 함수 선언
* 변수의 유효범위(Scope)
* this

> 이와 같이 실행에 필요한 정보를 형상화하고 구분하기 위해 자바스크립트 엔진은 실행 컨텍스트를 물리적 객체의 형태로 관리한다.


## 컨텍스트와 함수 실행 순서

<img src="./ec_1.png" width="80%">

1. 먼저 전역 컨텍스트 하나 생성 후, 함수 호출 시마다 컨텍스트가 생깁니다.
1. 컨텍스트 생성 시 컨텍스트 안에 변수객체(arguments, variable), scope chain, this가 생성됩니다.
1. 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾습니다.
1. 함수 실행이 마무리되면 해당 컨텍스트는 사라집니다.(클로저 제외) 페이지가 종료되면 전역 컨텍스트가 사라집니다.

> [스코프 체인](/javascript/js_scope/README.md#스코프-체인scope-chain)은 식별자 중에서 객체(전역 객체 제외)의 프로퍼티가 아닌 식별자, 즉 변수를 검색하는 메커니즘이다.
식별자 중에서 변수가 아닌 객체의 프로퍼티(물론 메소드도 포함된다)를 검색하는 메커니즘은 프로토타입 체인(Prototype Chain)이다.




## 실행 컨텍스트의 3가지 객체

* 실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만 물리적으로는 객체의 형태를 가지며 아래의 3가지 프로퍼티를 소유한다.  

1. **Variable Object (VO / 변수객체)**
   * 변수
   * 매개변수(parameter)와 인수 정보(arguments)
   * 함수 선언(함수 표현식은 제외)  


   * 전역 컨텍스트의 경우  
      - 전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.  
     
   * 함수 컨텍스트의 경우  
      - Variable Object는 Activation Object(AO / 활성 객체)를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.
  
1. **Scope Chain (SC)**

    * [스코프 체인(Scope Chain)](/javascript/js_scope/README.md#스코프-체인scope-chain)은 일종의 리스트로서 전역 객체와 중첩된 함수의 스코프의 레퍼런스를 차례로 저장하고 있다.  
    * 현재 실행 컨텍스트의 활성 객체(AO)를 선두로 하여 순차적으로 상위 컨텍스트의 활성 객체(AO)를 가리키며 마지막 리스트는 전역 객체(GO)를 가리킨다.    
    

    > 스코프 체인은 식별자 중에서 객체(전역 객체 제외)의 프로퍼티가 아닌 식별자, 즉 변수를 검색하는 메커니즘이다.
      식별자 중에서 변수가 아닌 객체의 프로퍼티(물론 메소드도 포함된다)를 검색하는 메커니즘은 프로토타입 체인(Prototype Chain)이다.  

1. **this value**

    * this 프로퍼티에는 this 값이 할당된다. this에 할당되는 값은 함수 호출 패턴에 의해 결정된다.  
    
    
## 실행 컨텍스트의 생성 및 실행과정   

```javascript
// Example Code                                                  // 객체형식으로 표현 

(1),(6) |  var name = 'jedi';                                   '전역 컨텍스트': {
(2),(3) |  function wow(word) {                                   변수객체: {
(11)    |    console.log(word + ' ' + name);                        arguments: null,
           }                                                        variable: ['name', 'wow', 'say'],
(4),(5) |  function say () {                                      },
(8)     |    var name = 'yoon';                                   scopeChain: ['전역 변수객체'],
(9)     |    console.log(name);                                   this: window,
(10)    |    wow('hello');                                      }
           }
(7)     |  say();


// 객체형식으로 표현                                              // 객체형식으로 표현

'say 컨텍스트': {                                                'wow 컨텍스트': {
  변수객체: {                                                       변수객체: {
    arguments: null,                                                  arguments: [{ word : 'hello' }],
    variable: ['name'], // 초기화 후 [{ name: 'yoon' }]가 됨           variable: null,
  },                                                               },
  scopeChain: ['say 변수객체', '전역 변수객체'],                    scopeChain: ['wow 변수객체', '전역 변수객체'],
  this: window,                                                   this: window,
}                                                               }

```

* 기본 작동순서  

001. 컨트롤이 실행 컨텍스트에 진입하기 이전에 유일한 **전역 객체(Global Object)가 생성**됩니다.
002. 전역 객체 생성이후, 전역 코드로 컨트롤이 진입하면 **전역 실행 컨텍스트가 생성**되고 실행 컨텍스트 스택에 쌓입니다.
003. **스코프 체인의 생성과 초기화**  
    - 실행 컨텍스트가 생성된 이후 가장 먼저 스코프 체인의 생성과 초기화가 실행됩니다.
004. **Variable Instantiation(변수 객체화) 실행**  
    - 스코프 체인의 생성과 초기화가 종료하면 변수 객체화(Variable Instantiation)가 실행됩니다.  
  > * (Function Code인 경우) 매개변수(parameter)가 Variable Object의 프로퍼티로, 인수(argument)가 값으로 설정된다.    
  > * 대상 코드 내의 함수 선언(함수 표현식 제외)을 대상으로 함수명이 Variable Object의 프로퍼티로, 생성된 함수 객체가 값으로 설정된다.(함수 [호이스팅](/javascript/js_hoisting/README.md#호이스팅hoisting))    
  > * 대상 코드 내의 변수 선언을 대상으로 변수명이 Variable Object의 프로퍼티로, undefined가 값으로 설정된다.(변수 [호이스팅](/javascript/js_hoisting/README.md#호이스팅hoisting))

005. **this value 결정**  
    -  this value가 결정되기 이전에 this는 전역 객체를 가리키고 있다가 함수 호출 패턴에 의해 this에 할당되는 값이 결정된다.

* 실행 작동순서  

  (1) variable은 해당 스코프의 변수선언 --> variable: ['name']  
  (2) variable은 해당 스코프의 변수선언 --> variable: [name , wow]  
  (3) wow는 호이스팅 때문에 선언과 동시에 대입  
  (4) variable은 해당 스코프의 변수선언 --> variable: [name , wow , say]  
  (5) say는 호이스팅 때문에 선언과 동시에 대입  
  (6) variable의 name에 jedi가 대입됩니다.  
  (7) say 함수호출시 새로운 컨텍스트인 say 함수 컨텍스트가 생깁니다.    
    객체형식으로 표현한 'say 컨텍스트'를 살펴보면 arguments는 없고, variable은 name이 있습니다.  
  (8) variable의 name에 yoon 을 대입해 줍니다.  
  (9) name 변수는 먼저 say 컨텍스트 안에서 찾게 됩니다. variable에 name이 yoon이라고 되어 있네요. name이 콘솔에 찍힙니다.   
  (10) say 컨텍스트 안에서 wow 변수를 찾을 수 없습니다. 찾을 수 없다면 scope chain을 따라 올라가 상위 변수객체에서 찾습니다.    
     전역 변수객체의 variable에 wow라는 함수가 있으므로 이것을 호출합니다.  
  (11) 위에서 wow 함수의 스코프 체인은 선언 시에 이미 정해져 있습니다. 따라서 say 스코프는 wow 컨텍스트의 scope chain이 아닙니다.    
  (11-1) variable은 없고, this는 window입니다.    
  (11-2) word는 arguments에서 찾을 수 있고, name은 wow 변수객체에는 값이 없으니, scope chain을 따라 전역 스코프에서 찾으시면 됩니다.   
  (11-3) variable에 name이 jedi라고 되어 있네요. 그래서 hello jedi가 console에 찍힙니다.  
  (11-4) wow 컨텍스트에 따르면 wow 함수는 애초에 say 컨텍스트와 일절 관련이 없었다는것을 알수있습니다.  
  (12) wow 함수 종료 후 wow 컨텍스트가 사라지고, say 함수의 실행이 마무리됩니다.   
  (13) say 컨텍스트도 사라지고, 마지막에 전역 컨텍스트도 사라집니다.  
  (14) 실행컨텍스트 종료



## Reference

- [실행 컨텍스트와 자바스크립트의 동작 원리](https://poiemaweb.com/js-execution-context)
- [실행 컨텍스트와 클로저](https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0)  


 **[⬆  Back to Top](#실행-컨텍스트execution-context)**
---
