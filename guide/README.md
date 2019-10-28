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
```
<head>
    <meta charset="UTF-8">
</head>
```

### IE 호환모드 설정 
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

## 마크업 가이드 - 참고자료

* [레진 마크업 가이드](https://github.com/lezhin/markup-guide)
* [CODE GUIDE](https://codeguide.co/)

