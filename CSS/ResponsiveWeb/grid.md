https://kion1491.github.io/codeTrue/CSS/ResponsiveWeb/flexbox.html

## grid 란?
- CSS3의 레이아웃 방식이다.
- 부트스트랩 같은 UI라이브러리 없이도, 굉장히 쉽게 레이아웃을 잡을 수 있도록 도와준다.
- flex의 대체재이다.

## grid의 구성요소
- grid의 두가지 핵심 요소는 .wrapper(parent)와 .items(children)이다.
- grid-template-row와 grid-template-column 속성을 사용하여 .wrapper에게 지정해준다.

.wrapper{
    display: grid;
    grid-template-columns: 200px 50px 100px;
    grid-template-rows: 100px 30px;
}
