## 몬디의 동작을 순수 css animation과 javascript로 만들어보기!


### 기본적인 애니메이션 관련 속성

animation-delay 엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.

animation-direction 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.

animation-duration 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.

animation-iteration-count 애니메이션이 몇 번 반복될지 지정합니다.

infinite로 지정하여 무한히 반복할 수 있습니다.

animation-name 이 애니메이션의 중간 상태를 지정합니다. 중간 상태는  @keyframes 규칙을 이용하여 기술합니다.

animation-play-state 애니메이션을 멈추거나 다시 시작할 수 있습니다.

animation-timing-function 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.

animation-fill-mode 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.



p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

### 몬디의 등장!
1. 몬디가 들어가있는 동그라미와 x(지우기) 이미지가, 페이지 로딩 뒤 조금 있다가 뜬다.

### 몬디의 동작 분석하기
1. 이미지는 총 2장이다.(A, B)
2. 처음에 A가 등장한다.
3. 일정 텀으로 말풍선이 바뀐다. 말풍선이 로딩 되기 전에 B가 잠깐 나오다가, 말풍선이 뜨면 A 이미지가 나온다.

### 옵션으로 어떤 것을 넣으면 좋을까?
1. 페이지 로딩 후 몬디가 뜨는 딜레이 시간을 조절 할 수 있도록 한다. (페이지 로딩되고 몇 초뒤에 뜰 것인지!)
2. 몬디의 멘트를 넣어주면, 3개가 되든 5개가 되든 10개가 되든 같은 텀과 같은 방식으로 말풍선 기능이 돌아가도록 한다.
3. 말풍선 하나가 떴다가 다음 말풍선이 나오는 텀을 조절할 수 있도록 한다.
