# 자바스크립트 동작 원리

* 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 **자바스크립트 엔진**을 내장하고 있습니다.  
* 자바스크립트 엔진의 대표적인 예는 Google V8 엔진입니다. V8 엔진은 Chrome과 Node.js에서 사용합니다.  
* 기본적으로 브라우저에서 동작하는 코드는 Node.js 환경에서도 동작합니다. 

<p align="center"><img src="./jsen.png" width="80%"></p>

* 메모리 힙(Memory Heap) : 객체는 힙, 대부분 구조화되지 않은 메모리 영역에 할당되며, 변수와 객체에 대한 모든 메모리 할당은 여기서 발생한다.
* 호출 스택(Call Stack) : 코드 실행에 따라 호출 스택이 쌓인다.

## 실행 환경(Runtime)

<p align="center"><img src="./event-loop.png" width="80%"></p>

* 사실 브라우저는 단순히 엔진 하나만으로 구성되어 있지 않습니다.  
* DOM, AJAX, setTimeout 등의 브라우저에서 제공하는 Web API라고 하는 것들이 있습니다.  
* 위와 같이 Web API의 호출을 통제하기 위한 Event Queue와 Event Loop도 존재합니다.


## 호출 스택(Call Stack)

* 자바스크립트는 기본적으로 싱글 쓰레드 기반 언어입니다.  
* 이는 호출 스택이 하나라는 의미로서, 한 번에 한 작업만 처리할 수 있습니다.
* **호출 스택**이란 기본적으로 우리가 **프로그램 상에서 어디에 있는지를 기록하는 자료구조**입니다.

<p align="center"><img src="./stack.png" width="80%"></p>

* 동작 방식    
  - 함수를 실행하면 해당 함수의 기록을 스택 맨 위에 추가(Push) 합니다.
  - 우리가 함수를 결과 값을 반환하면 스택에 쌓여있던 함수는 제거(Pop) 됩니다.



## Reference

- [자바스크립트 개발 환경과 실행 방법](https://poiemaweb.com/js-hello-world)
- [script의 async와 defer 속성](https://blog.asamaru.net/2017/05/04/script-async-defer/)



 **[⬆  Back to Top](#자바스크립트-동작-원리)**
---
