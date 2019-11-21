# 메리츠 운영 가이드
* 작업하는데 있어서 조금 더 원활하게 조금 더 규칙적인 작업의 표준을 만들고자 가이드를 작성합니다. 내용은 팀원들과 합의하에 언제든지 변경 및 수정가능함을 고지합니다.


## HTML Guide
### 에디터 설정
- 들여쓰기는 공백문자 4칸으로 합니다.
- 파일 저장 시 줄 끝 공백문자를 제거합니다.
- 파일 저장 시 UTF-8 인코딩으로 저장합니다.
- 파일의 맨 마지막은 줄바꿈으로 끝납니다.

### HTML lay-out
- HTML 문서 시작시에 문서타입을 선언해 줍니다.
- 언어(lang) 속성을 작성합니다. (ex. 영어-en, 한국어-ko...)
- 문자열 인코딩을 명시적으로 선언합니다.
- 인터넷 익스플로러가 항상 최신 버전의 레이아웃 엔진을 사용하여 문서를 렌더링하도록 지정합니다.
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
</head>
...
</html>
```

### CSS, JavaScript 삽입
CSS와 JavaScript를 불러올 때 type 속성을 생략합니다.
```
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style> ... </style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```


### 속성(attr) 선언 순서
HTML 태그 속성은 가독성을 위해 아래 순서대로 작성합니다.

1. 선택자로 사용하는 id, class 속성은 가장 앞에 선언합니다.
1. 콘텐츠를 설명하는 alt, title, role, aria-* 속성은 가장 뒤에 선언합니다.
```
<a id="..." class="..." href="#">Example link</a>
<input class="form-control" type="text">
<img src="..." alt="..." title="...">
```

### Boolean 속성
불리언 속성의 값은 지정하지 않습니다.
```
<input type="text" disabled>
<input type="checkbox" value="1" checked>
<option value="1" selected>1</option>
```

## CSS Guide
### CSS 문법
선택자를 그룹핑하는 경우 쉼표(,) 뒤에서 줄바꿈합니다.
```
.selector1,
.selector2 { ... }
```

속성값에는 쌍따옴표("")를 사용합니다.
```
[type="text"] { ... }

/* O: CSS 속성값에 쌍따옴표 사용 */
{ background: url("ex.png"); }
```

축약 가능한 값을 축약합니다.
```
color: #fff;
font-weight: 400;
font-weight: 700;
border: 0;
opacity: .5;
border-width: 0;
background-size: 100%;
background-position: 50%;
```

의미있는 블럭 기준으로 빈 줄을 포함합니다.
```
/* 헤더 */
.header { ... }
.header_element { ... }

/* 풋터 */
.footer { ... }
.footer_element { ... }
```

### 속성(property) 선언 순서
포지셔닝과 박스모델 관련 속성을 가장 먼저 작성하고 나머지는 뒤에 놓습니다.
```
{
/* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
/* Box-model */
    display: block;
    float: right;
    flex: 1;
    width: 100px;
    height: 100px;
/* Typography */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;
/* Background */
    background-color: #f5f5f5;
/* Border */
    border: 1px solid #e5e5e5;
    border-radius: 3px;
/* etc */
    opacity: 1;
}
```

### 미디어 쿼리 위치 
```
.element { ... }
.element-avatar { ... }
.element-selected { ... }
@media (min-width: 640px) {
    .element { ... }
    .element-avatar { ... }
    .element-selected { ... }
}
```

### 주석
주석은 알아보기 쉽게 작성합니다.
```
/* 190416 : KJW : 멜다방 룰렛 이벤트 */
.melda_event_cont.roulette_evt {margin:0 auto; max-width:720px;}
.melda_event_cont.roulette_evt img[class*="roulette_con"]{position:absolute; left:50%; transform:translate(-50%);}
.melda_event_cont.roulette_evt .roulette_con01{width:86%; top:39.6%;}
.melda_event_cont.roulette_evt .roulette_con02{position:absolute; left:50%; width:75.6%; top:42.8%; transform:translate(-50%);}
.melda_event_cont.roulette_evt .roulette_con02 img{transform-origin:center center;}
.melda_event_cont.roulette_evt .roulette_con02.on img{transition:all 5s ease-out;}
.melda_event_cont.roulette_evt .roulette_con03{width:7.2%; top:36.9%;}
.melda_event_cont.roulette_evt .btn_01{position:absolute; width:24.2%; left:50%; top:59.4%; transform:translate(-50%);}
```

### 클래스 작명
1. 클래스 이름 규칙은 [BEM(Block Element Modifier)](http://getbem.com/naming/) 스타일을 따릅니다.
1. 클래스 이름은 영문 언더스코어(_) 만 사용합니다.
1. 짧고 간결하게 작성하되 축약하지 않습니다. .btn과 같이 쉽게 의미를 유추 할 수 있는 축약은 괜찮지만 .bn와 같이 의미를 파악하기 어려운 축약은 사용하지 않습니다.
1. 시각적 표현 대신 의미, 구조, 목적을 담아 작명합니다.

```
.blockName { ... }                              // Block
.blockName__elementName { ... }                 // Element
.blockName--modifierName { ... }                // Block Modifier
.blockName__ElementName--modifierName { ... }   // Element Modifier
```

### 선택자
- 타입 선택자를 사용하지 않습니다. 클래스(class) 선택자를 사용합니다.
- 선택자 우선순위(specificity)를 높이는 조합과 중첩을 사용하지 않습니다. 조합과 중첩은 3회를 초과하지 않습니다.
- 여러 클래스를 묶을 때 쉼표 후 개행합니다.
```
.tweet { ... }
.tweet__header,
.tweet__username { ... }
```

### 컴포넌트
- 컴포넌트 별로 코드를 모아서 작성합니다.
- 계층 구조의 순서에 따라 작성합니다.
- 코드 블럭을 분리할 때 공백(줄 바꿈)을 일관성 있게 사용합니다.
- 여러개의 *.scss 파일을 나눌 때, 페이지보다는 컴포넌트 별로 나눕니다.

```
/* Modal: modal.scss */
.modal { ... }
.modal__header { ... }
.modal__body { ... }
.modal__footer { ... }
.modal__footer--disabled { ... }
```

### 이미지 가이드

#### PC WEB
- 기본 포맷은 GIF 를 사용합니다.
- 인물이나 실사 이미지와 같이, 색 변화 및 그라데이션이 풍부한 경우는 JPG 를 사용합니다. (quality 는 80정도)

#### MOBILE WEB
- PNG-8 포맷을 기본으로 저장합니다.
- 색상 수가 많거나(혹은 스프라이트) 반투명(혹은 투명)효과가 있으면 PNG-24를 사용한다.
 

## 마크업 가이드 - 참고자료

* [레진 마크업 가이드](https://github.com/lezhin/markup-guide)
* [mdo's CODE GUIDE](https://codeguide.co/)
* [notes's css 방법론](https://gomdoreepooh.github.io/notes/smacss-bem-oocss)
