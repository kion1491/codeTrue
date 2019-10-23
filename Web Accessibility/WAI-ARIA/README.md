## WAI-ARIA Intro

* WAI-ARIA는 Web Accessibility initiative - Accessible Rich Internet Application의 약자로 웹 페이지, 특히 동적 콘텐츠, 그리고 Ajax, HTML, JS 및 관련 기술로 개발된 사용자 인터페이스 구성요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술사양입니다. - 위키피디아



## WAI-ARIA의 사용예시
* aria-live 속성은 실시간으로 내용을 갱신하는 영역을 의미합니다. 값으로 polite, assertive, off(default)를 설정할 수 있으며 갱신하는 내용의 중요도에 따라 선택합니다. 갱신 영역에 polite, assertive값을 사용하면 갱신하는 순간 보조기기는 사용자에게 내용을 전달합니다. polite값은 중요도가 낮은 내용에 사용하여 현재 진행중인 음성 또는 타이핑을 방해하지 않고 뒤늦게 전달합니다. assertive값은 중요도가 높은 내용에 사용하여 현재 진행중인 보조기기 작업을 중단하고 갱신 내용을 즉시 사용자에게 전달합니다.

일반적으로 role 속성의 값이 alert, alertdialog, dialog인 경우 사용하면 적절합니다. 그 밖에 Ajax 기법을 이용하여 실시간으로 내용을 갱신하는 모든 영역(채팅, 오류, 로그, 상태 표시)에 사용할 수 있습니다.

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

## Reference
- [레진 WAI-ARIA 가이드라인](https://github.com/lezhin/accessibility/blob/master/aria/README.md)
- [웹접근성 연구소 제공 WAI-ARIA 사례집](https://www.wah.or.kr:444/_Upload/pds2/WAI-ARIA%20%EC%82%AC%EB%A1%80%EC%A7%91(%EC%98%A8%EB%9D%BC%EC%9D%B8%ED%8C%90).pdf)
