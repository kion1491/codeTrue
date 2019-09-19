컴포넌트 단위로 화면을 구조화 하여 보다 빠른 속도로 반응 하는 웹페이지를 만들 수 있도록 해주는 UI Framework.

<div id="app">
  {{ message }}
</div>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

MVVM 패턴

컴포넌트 기반의 프레임 워크

주요개념
- 뷰
- 돔
- 돔 리스너
- 모델
- 데이터 바인딩
- 뷰 모델

리액트의 장점과 앵귤러의 장점을 모두 섭렵한 프레임워크

가상 돔(DOM) 렌더링 방식

라이프사이클

