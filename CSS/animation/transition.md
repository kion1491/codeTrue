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

|  <center>Header1</center> |  <center>Header2</center> |  <center>Header3</center> |
|:--------|:--------:|--------:|
|**cell 1x1** | <center>cell 1x2 </center> |*cell 1x3* |
|**cell 2x1** | <center>cell 2x2 </center> |*cell 2x3* |
|**cell 3x1** | <center>cell 3x2 </center> |*cell 3x3* |

#### 
