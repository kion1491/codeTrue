## WAI-ARIA Intro

* WAI-ARIA는 Web Accessibility initiative - Accessible Rich Internet Application의 약자로 웹 페이지, 특히 동적 콘텐츠, 그리고 Ajax, HTML, JS 및 관련 기술로 개발된 사용자 인터페이스 구성요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술사양입니다. - 위키피디아



## WAI-ARIA의 사용예시
* WAI-ARIA는 RIA에서 스크린리더 및 보조기기 등에서 접근성 및 상호 운용성을 향상시키기 위한 목적으로 탄생 했으며 웹 애플리케이션에 역할(Role), 속성(Property), 상태(State) 정보를 추가하여 이를 개선 할 수 있도록 제공하고 있다.

1. HTML을 의미 있게 작성한다.
1. 탭 목록, 탭, 탭 패널(role="tablist|tab|tabpanel").
1. 툴팁(role="tooltip").
1. 성공(결과) 메시지(role="status").
1. 오류(제안) 메시지(role="alert").
1. 알럿 대화상자(role="alertdialog").
1. 대화상자(role="dialog").
1. 탐색(nav, role="navigation").
1. 보충(aside, role="complementary").
1. 의미 없음(role="none").
1. 현재 상태(aria-current="token").
1. 선택 상태(aria-selected="true|false|undefined").
1. 팝업 상태(aria-haspopup="token")
1. 확장 상태(aria-expanded="true|false|undefined")
1. 눌림 상태(aria-pressed="tristate")
1. 숨김 상태(aria-hidden="true|false|undefined")
1. 오류 상태(aria-invalid="true|false|grammer|spelling")
1. 제어 대상(aria-controls="ID reference list")
1. 실시간(aria-live="token")
1. 간결한 설명 참조(aria-labelledby="ID reference list")
1. 간결한 설명(aria-label="string")
1.자세한 설명 참조(aria-describedby="ID reference list")
1. 오류 설명(aria-errormessage="ID reference")
1. 모달(aria-modal="true|false")

```
<!-- 역할(roles) -->
<element role="tablist">
<element role="tab">
<element role="tabpanel">
<element role="tooltip">
<element role="status">
<element role="alert">
<element role="alertdialog">
<element role="dialog">
<element role="navigation">
<element role="complementary">
<element role="none">

<!-- 상태(states) -->
<element aria-current="page|step|location|date|time|true|false(default)">
<element aria-selected="false|true|undefined(default)">
<element aria-haspopup="true|menu|dialog|listbox|tree|grid|false(default)">
<element aria-expanded="true|false|undefined(default)">
<element aria-pressed="true|false|mixed|undefined(default)">
<element aria-hidden="true|false|undefined(default)">
<element aria-invalid="true|false(default)|grammer|spelling">

<!-- 속성(properties) -->
<element aria-controls="ID reference list">
<element aria-live="polite|assertive|off(default)">
<element aria-labelledby="ID reference list">
<element aria-label="string">
<element aria-describedby="ID reference list">
<element aria-errormessage="ID reference">
<element aria-modal="true|false(default)">
```

## Reference
- [레진 WAI-ARIA 가이드라인](https://github.com/lezhin/accessibility/blob/master/aria/README.md)
- [웹접근성 연구소 제공 WAI-ARIA 사례집](https://www.wah.or.kr:444/_Upload/pds2/WAI-ARIA%20%EC%82%AC%EB%A1%80%EC%A7%91(%EC%98%A8%EB%9D%BC%EC%9D%B8%ED%8C%90).pdf)
