## WAI-ARIA Intro

* WAI-ARIA는 Web Accessibility initiative - Accessible Rich Internet Application의 약자로 웹 페이지, 특히 동적 콘텐츠, 그리고 Ajax, HTML, JS 및 관련 기술로 개발된 사용자 인터페이스 구성요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술사양입니다. - 위키피디아



## WAI-ARIA의 사용예시
* aria-live 속성은 실시간으로 내용을 갱신하는 영역을 의미합니다. 값으로 polite, assertive, off(default)를 설정할 수 있으며 갱신하는 내용의 중요도에 따라 선택합니다. 갱신 영역에 polite, assertive값을 사용하면 갱신하는 순간 보조기기는 사용자에게 내용을 전달합니다. polite값은 중요도가 낮은 내용에 사용하여 현재 진행중인 음성 또는 타이핑을 방해하지 않고 뒤늦게 전달합니다. assertive값은 중요도가 높은 내용에 사용하여 현재 진행중인 보조기기 작업을 중단하고 갱신 내용을 즉시 사용자에게 전달합니다.

일반적으로 role 속성의 값이 alert, alertdialog, dialog인 경우 사용하면 적절합니다. 그 밖에 Ajax 기법을 이용하여 실시간으로 내용을 갱신하는 모든 영역(채팅, 오류, 로그, 상태 표시)에 사용할 수 있습니다.

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
<!-- O: 대화상자 -->
<section role="dialog" aria-live="polite" aria-modal="true" aria-labelledby="TITLE">
    <h2 id="TITLE">로그인</h2>
    <form>
        <label for="ID">아이디</label>
        <input id="ID">
        <label for="PW">비밀번호</label>
        <input id="PW" type="password">
        <button>로그인</button>
    </form>
</section>

<!-- O: 알럿 -->
<div role="alert" aria-live="assertive">
    <p>로그인 후 이용할 수 있습니다.</p>
</div>
```
* assertive값은 사용자의 현재 작업을 방해할 수 있기 때문에 중요도가 높은 내용을 선별하여 신중하게 적용해야 합니다.

## Reference
- [레진 WAI-ARIA 가이드라인](https://github.com/lezhin/accessibility/blob/master/aria/README.md)
- [웹접근성 연구소 제공 WAI-ARIA 사례집](https://www.wah.or.kr:444/_Upload/pds2/WAI-ARIA%20%EC%82%AC%EB%A1%80%EC%A7%91(%EC%98%A8%EB%9D%BC%EC%9D%B8%ED%8C%90).pdf)
