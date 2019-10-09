# 현재 저희가 운영하는 메리츠화재 화면 구성 요소

1. jsp(관리자 도구 Network에서는 .do 확장자로 확인 가능 - 실제 jsp 이름과는 별도로 해당 페이지 이름을 따라감)

2. tpl(공통/개별 tpl이 존재하며 대체로 layerpopup이 아닌이상 개별 js들이 각각 존재함)

3. angular 버전 1점대를 사용중 

4. jQuery(1.12.1)버전을 사용중



## jsp
``` 해당 소스를 제대로 가져오진못했지만 body 안 구성도는 대략 이정도로 구성되어 있습니다 ```
```
<body data-ng-controller="commController as comm">
        <div class="skipnav">
            <a href="#content">본문 바로가기</a>
            <a href="#gnb">대메뉴 바로가기</a>
            <a href="#footer">페이지 하단 바로가기</a>
        </div>
		<div data-ui-header id="header"></div>
		<div id="container">
            <div data-ui-chat class="chatarea dp_none"></div>
            <div data-ui-snb class="snb"></div>
            <div data-ng-view id="content" ></div>
            <div class="topbtn"><a href="#">TOP</a></div>
            <!-- tm 상품 -->
            <div class="topbtn topbtn_tm"><a href="#"><img src="/default/images/common/img_topbtn.gif" alt="TOP"></a></div>			
            <div class="topcall" id="floatingbanner"><span class="call"><img src="/default/images/common/img_scroll_bn.gif" alt="먼저 상담하고 인터넷으로 가입하세요.1522-1135"></span><a href="#" class="fltop_btn"><img src="/default/images/common/btn_float_top.png" alt=""></a></div>					
            <!-- chat area -->					
		</div>
		<div data-ui-footer id="footer"></div>
        <div data-ui-chatbot id="chatbot_wrap"></div>
        <div data-ui-insurance class="chat_agree"></div>
        <div data-ui-pmmifloat id="pmmifloating"></div>
</body>
```