https://kion1491.github.io/codeTrue/CSS/ResponsiveWeb/flexbox.html

## flexbox 란?
- flexbox는 CSS3의 레이아웃 방식이다.
- 복잡한 계산이나 배치 없이 요소의 크기와 순서를 유연하게 배치할 수 있도록 한 것이다.
- 정렬, 방향, 순서, 크기 등을 모두 자유롭게 조절 할 수 있기 때문에 별도의 분기처리 없이도 다양한 레이아웃을 구성할 수 있다.

## flexbox의 구성요소
- flexbox는 정렬하고자 하는 div들을 감싼 부모div(=flex container)와 정렬하고자 하는 해당 div(=flex item)들로 이루어져 있다.
- flex item들의 주 축 (main axis)은 flex-direction 속성으로 결정 된다. 이 때, default 값은 row 이다. x축 정렬을 의미한다. 반대의 경우에는 속성값을 column으로 해주면 된다.

## flexbox가 가질 수 있는 속성들
- 부모요소인 flex container와 자식요소인 flex item에 정의하는 속성이 나뉘어진다.
- flex container: flex-direction, flex-wrap, justify-content, align-items, align-content
- flex item: flex, flex-grow, flex-shrink, flex-basis, order

## flexbox 지원 범위
- flexbox는 IE10 이상에서만 지원되며, 심지어 IE10이나 IE11에서는 약간의 버그를 가지고 있기도 하다. 따라서 PC용 서비스에서 적용시키기에는 아직 많은 위험을 내포하고 있다.
- 따라서 모바일 브라우저나, IE를 고려하지 않은 PC용 서비스에서는 적용을 해도 무방할 것이다.
