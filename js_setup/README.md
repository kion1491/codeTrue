## 자바스크립트 개발 환경


### 개요

* 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있습니다.  
* 브라우저뿐만 아니라 Node.js도 자바스크립트 엔진을 내장하고 있습니다.  
* 기본적으로 브라우저에서 동작하는 코드는 Node.js 환경에서도 동작합니다. 

### 기본제공

* 브라우저는 HTML 요소를 선택하거나 조작하는 기능들의 집합인 DOM API를 기본적으로 제공합니다.  
* 서버 개발 환경을 제공하는 것이 주 목적인 Node.js는 클라이언트 사이드 Web API인 DOM API를 제공하지 않습니다.  
* Node.js에서는 파일을 생성하고 수정할 수 있는 File 시스템을 기본 제공합니다.  
* 브라우저는 이를 지원하지 않는습니다. (Web API인 File API FileReader 객체를 사용해 사용자가 지정한 파일을 읽어 들이는 것은 가능)

> 브라우저는 사용자 컴퓨터에서 동작한다. 만약 브라우저를 통해 사용자 컴퓨터에 파일을 생성하거나 기존 로컬 파일을 수정할 수 있다면 사용자 컴퓨터는 악성 코드에 노출되기 쉽기 때문에 보안 상 이유로 이를 금지하고 있다.

### API 지원

* 브라우저는 ECMAScript와 DOM, BOM, Canvas, XMLHttpRequest, Fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web worker와 같은 클라이언트 사이드 Web API를 지원합니다.  
*  Node.js는 클라이언트 사이드 Web API는 지원하지 않고 ECMAScript와 Node.js 고유의 API를 지원합니다.  


### 참조

- [자바스크립트 개발 환경과 실행 방법](https://poiemaweb.com/js-hello-world)

