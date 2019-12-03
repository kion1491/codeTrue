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

### 이미지 가이드

#### PC WEB
- 기본 포맷은 GIF 를 사용합니다.
- 인물이나 실사 이미지와 같이, 색 변화 및 그라데이션이 풍부한 경우는 JPG 를 사용합니다. (quality 는 80정도)

#### MOBILE WEB
- PNG-8 포맷을 기본으로 저장합니다.
- 색상 수가 많거나(혹은 스프라이트) 반투명(혹은 투명)효과가 있으면 PNG-24를 사용합니다.
 

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


## 마크업 가이드 - 참고자료

* [레진 마크업 가이드](https://github.com/lezhin/markup-guide)
* [mdo's CODE GUIDE](https://codeguide.co/)
* [notes's css 방법론](https://gomdoreepooh.github.io/notes/smacss-bem-oocss)
* [다룸의 가이드](http://ui.daum.net/convention/html)
