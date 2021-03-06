## Transition 이란?

- 지정할 속성에 변화나 움직임 등을 주고 싶을 경우, 일정 간격을 두고 부드러운 애니메이션을 구현하기 위한 기능.
- 자바스크립트 없이도 어느정도 수준의 애니메이션 구현 가능
- 요소의 단순, 심플한 변환이 필요한 곳에 주로 사용한다.

## CSS transition의 4가지 속성
- transition-property
- transition-duration
- transition-delay
- transition-timing-function


#### transition-property
- '어떤 대상'에 효과를 적용할지를 지정해준다. (ex: background-color)
- all 이라는 속성 값을 넣어주면, 변화될 모든 대상에 다 transition을 적용 하겠다는 뜻이다.
- 복수의 경우, ',' 를 사용하여 구분해서 지정하면 된다.

#### transition-duration
- 어느 정도의 시간 동안 애니메이션을 동작하게 할 것인가를 설정한다.
- 단위는 초(s)나 밀리초(ms)를 사용한다.

#### transition-delay
- 실제로 애니메이션이 동작하기 전까지 딜레이 되는 시간.
- 단위는 초(s)나 밀리초(ms)를 사용한다.

#### transition-timing-function
- 변화하는 속도의 패턴을 지정한다.
- 속성 값에는 9가지 패턴이 있다.

* steps(인수1, 인수2)같은 경우, 인수1에는 1이상의 정수, 인수2에는 'start' 혹은 'end'를 명시해준다.

* cubic-bezier(x1, y1, x2, y2)의 경우, x축을 시간, y축을 진행 비율로 해서 시작점과 끝나는 점을 지정하고 변환 타이밍을 조정한다. 이때 각 인수들의 값은 0~1 사이의 실수이다.

|<center>속성값</center>|<center>설명</center>|<center>동일값</center>|<center>동일 steps 값</center>|
|:--------|:--------|:--------|:--------:|
|**ease**|<center>천천히 시작해서 도중에 빨라졌다가 느려지면서 끝난다</center>|(0.25, 0.1, 0.25, 1)|  |
|**ease-in**|<center>천천히 시작해서 빨라지면서 끝난다 </center>|(0.42, 0, 1, 1)| |
|**ease-out**|<center>빨리 시작해서 느려지면서 끝난다</center>|(0, 0, 0.58, 1)|  |
|**ease-in-out**|<center>천천히시작하고, 천천히 가속해서 느려지면서 끝난다</center>|(0.42, 0, 0.58, 1)| |
|**linear**|<center>일정한 속도로변화한다.</center>|(0, 0, 1, 1)| |
|**steps(단계수, start end)**|<center>단계수로 균등한 간격을 분할해서 변화한다.</center>|  | |
|**step-start**|  | |(1, start)|
|**step-end**| |  |(1, end)|
|**cubic-beizier(x1, y1, x2, y2)**|3차 곡선을 통해 변화타이밍을 조절하는 방법이다|  | |


#### 한번에 표현하기
- transition : background-color 2s ease-in-out 3s;






