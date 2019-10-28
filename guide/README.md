# 마크업 가이드
* 작업하는데 있어서 조금 더 원활하게 조금 더 규칙적인 작업의 표준을 만들고자 가이드를 작성합니다. 내용은 팀원들과 합의하에 언제든지 변경 및 수정가능함을 고지합니다.


## HTML Guide
### 에디터 설정
- 들여쓰기는 공백문자 4칸으로 합니다.(2칸?? - 어느게 나을런지요?)
- 파일 저장 시 줄 끝 공백문자를 제거합니다.
- 파일 저장 시 UTF-8 인코딩으로 저장합니다.
- 파일의 맨 마지막은 줄바꿈으로 끝납니다.

### HTML doctype
- HTML 문서 시작시에 문서타입을 선언해 줍니다.
```
<!DOCTYPE html>
<html>
    ...
</html>
```

### 언어(lang) 속성
- 영어: en
- 한국어: ko
- 일본어: ja
```
<html lang="ko">
```

### 인코딩 설정
문자열 인코딩을 명시적으로 선언합니다.
```
<head>
    <meta charset="UTF-8">
</head>
```

### IE 호환모드 설정 
인터넷 익스플로러가 항상 최신 버전의 레이아웃 엔진을 사용하여 문서를 렌더링하도록 지정합니다.
```
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
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
/* X */
.selector1, .selector2 { ... }

/* O */
.selector1,
.selector2 { ... }
```

속성값에는 홑따옴표('')를 사용합니다.
```
/* X */
[type=text] { ... }
[type="text"] { ... }
{ background: url(ex.png); }
{ background: url("ex.png"); }

/* O: 속성 선택자 속성값에 홑따옴표 사용 */
[type='text'] { ... }

/* O: CSS 속성값에 홑따옴표 사용 */
{ background: url('ex.png'); }
```

축약 가능한 값을 축약합니다.
```
/* X */
    color: #ffffff;
    font-weight: normal;
    font-weight: bold;
    border: none;
    opacity: 0.5;
    border-width: 0px;
    background-size: 100% auto;
    background-position: 50% 50%;

/* O */
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
/* X: 선택자 또는 속성 사이에 빈 줄 금지 */
.selector1 { ... }

.selector2 {

    property: value;

    property: value;

}

/* O: 의미있는 블럭 기준으로 빈 줄 포함 */
/* 헤더 */
.header { ... }
.header__element { ... }

/* 풋터 */
.footer { ... }
.footer__element { ... }
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
주석은 간결하게 작성합니다.
```
/* Bad example */
/* Modal - Wrapping element for .modal-header, .modal-body, modal-footer  */
.modal {
    ...
}

/* Good example */
/* Modal */
.modal {
    ...
}
```

### 클래스 작명
1. 클래스 이름 규칙은 BEM(Block Element Modifier)스타일을 따릅니다.
1. 클래스 이름은 영문 카멜케이스(camelCase), 숫자, 더블 대시(--), 더블 언더스코어(__) 만 사용합니다.
1. 짧고 간결하게 작성하되 축약하지 않습니다. .btn과 같이 쉽게 의미를 유추 할 수 있는 축약은 괜찮지만 .bn와 같이 의미를 파악하기 어려운 축약은 사용하지 않습니다.
1. 시각적 표현 대신 의미, 구조, 목적을 담아 작명합니다.
1. 변화 또는 상태를 나타내는 추가 클래스는 블록 또는 요소 이름에 더블 대시(--)를 붙여 작명합니다.

```
/* Bad example */
.sform { ... }
.themeLezhin { ... }
.sf-input { ... }
.sf-btn { ... }
.SearchformButtonDisabled { ... }

/* Good example */
.blockName { ... }                              // Block
.blockName__elementName { ... }                 // Element
.blockName--modifierName { ... }                // Block Modifier
.blockName__ElementName--modifierName { ... }   // Element Modifier
```

### 선택자
- 타입 선택자를 사용하지 않습니다. 클래스 선택자를 사용합니다.
- 선택자 우선순위(specificity)를 높이는 조합과 중첩을 사용하지 않습니다. 조합과 중첩은 3회를 초과하지 않습니다.
- 여러 클래스를 묶을 때 쉼표 후 개행합니다.
```
/* Bad example */
section.tweet > header { ... }
section.tweet > header.tweet__header { ... }
.tweet > .tweet__header, .tweet > .tweet__username { ... }

/* Good example */
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

## 마크업 가이드 - 참고자료

* [레진 마크업 가이드](https://github.com/lezhin/markup-guide)
* [mdo's CODE GUIDE](https://codeguide.co/)

