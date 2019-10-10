# 현재 저희가 운영하는 메리츠화재 화면 구성 요소

1. jsp(관리자 도구 Network에서는 .do 확장자로 확인 가능 - 실제 jsp 이름과는 별도로 해당 페이지 이름을 따라감)

2. tpl(공통/개별 tpl이 존재하며 대체로 layerpopup이 아닌이상 개별 js들이 각각 존재함)

3. angular 버전 1점대를 사용중(자세한 버전은 서버에서 체크해야되서 제대로 가져오지 못했습니다.)

4. jQuery(1.12.1)버전을 사용중


## jsp 구성요소
``` 해당 소스를 제대로 가져오진못했지만 상품쪽 body 안 구성도는 대략 이정도로 구성되어 있습니다.  ```
***
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
            <div class="topcall" id="floatingbanner">
                <span class="call"></span>
                <a href="#" class="fltop_btn"><img src="/default/images/common/btn_float_top.png" alt=""></a>
            </div>					
            <!-- chat area -->					
		</div>
		<div data-ui-footer id="footer"></div>
        <div data-ui-chatbot id="chatbot_wrap"></div>
        <div data-ui-insurance class="chat_agree"></div>
        <div data-ui-pmmifloat id="pmmifloating"></div>
</body>
```
***

## tpl 구성부분
``` 위쪽 jsp 소스 중 data-ui... 부분들이 각 해당하는 tpl들을 호출합니다. 각 해당하는 tpl들은 내용이 너무 많아 따로 적지는 않겠습니다. ```
``` 저희가 알아두면 좋은 앵귤러 기본 조건문들에 대해서 치아보험 상품 tpl로 예시를 들겠습니다. ```

``` 전체 코드입니다. 상품 tpl로 경로는 /default/views/biz/tm/pd/A/1034.tpl 입니다. (소스가 너무 길어져 텍스트 부분은 조금 삭제하였습니다.)
<div class="top_tit prd_tit" data-ng-if="tm.templete.mdiaNoImgValid==false">
	<h2>무배당 메리츠 올바른 치아보험1905</h2>
</div>

<!--이미지형-->
<div class="tm_main_h_set" data-ng-if="tm.templete.mdiaNoImgValid">&nbsp;</div>
<!--//이미지형-->
<div class="fr_top mt_gap clfix">
	<!--이미지형-->
	<!-- 신-DLPO -->
	<div data-ng-if="tm.templete.newDlpoYn == 'Y'">
		<div class="tm_main_img_set" data-ng-if="tm.templete.mdiaNoImgValid">
			<img no-image ng-src="{{tm.templete.mainImg}}" alt="올바른 치아보험">
			<a href="#" class="chatt_img_link chatt_teeth_img01"></a>
		</div>
	</div>
	<!-- 구-DLPO -->
	<div data-ng-if="tm.templete.newDlpoYn == 'N'">
		<div class="tm_main_img_set" data-ng-if="tm.templete.mdiaNoImgValid">
			<img no-image ng-src="{{tm.templete.mainImg}}" alt="올바른 치아보험 (1806)">
			<a href="#" class="chatt_img_link chatt_teeth_img01"></a>
		</div>
	</div>
	<!--//이미지형-->

	<!-- 텍스트형-->
	<div class="fr_list fr_faceteeth" data-ng-if="tm.templete.mdiaNoImgValid==false">
		<p class="fr_copy">치과보다 무서운 치료비, 치아보험으로 대비하세요!</p>
	</div>
	<!--//  텍스트형-->

	<!-- 상담신청-->
	<div data-ui-tm-sub data-ng-include="tm.templete.subUrl" id="tm"></div>
	<!-- //상담신청-->
</div>

<!-- banner_event -->
<!-- 신-채팅배너 -->
<div class="banner_event  pb40 clfix" data-ng-if="tm.templete.newDlpoYn == 'Y'">
	<a href="#" class="fl" data-trigger-info='{"type":"conunseltchk","id":"CTTG1801001"}'></a>
</div>
<!-- 구-채팅배너 -->
<div class="banner_event  pb40 clfix" data-ng-if="tm.templete.newDlpoYn == 'N'">
	<a href="#" class="fl" data-trigger-info='{"type":"conunseltchk","id":"CTTG1801001"}'></a>
</div>
<!-- //banner_event -->
```

```이제 부분부분 나온 코드들에대해서 설명드리겠습니다. 최근에 작업했던 DLPO 고도화 작업에서 사용했던 코드입니다.

아래 data-ng-if="tm.templete.newDlpoYn == 'Y'" 을 보면 if문은 저희 스크립트에서 쓰는 것과 똑같은 조건문입니다.

다만 조건에 맞지않을때(false)는 jQuery에 .remove()와 똑같은 기능을 구현에 줍니다.

<!-- 신-DLPO -->
<div data-ng-if="tm.templete.newDlpoYn == 'Y'">
    <div class="tm_main_img_set" data-ng-if="tm.templete.mdiaNoImgValid">
        <img no-image ng-src="{{tm.templete.mainImg}}" alt="올바른 치아보험">
        <a href="#" class="chatt_img_link chatt_teeth_img01" data-trigger-info='{"type":"keyword","id":"CTTG1802002"}'>
            <img data-ng-src="{{WEBROOT}}/default/images/common/btn_layer.png" width="100%"  height="29" alt="임플란트">
        </a>
    </div>
</div>
<!-- 구-DLPO -->
<div data-ng-if="tm.templete.newDlpoYn == 'N'">
    <div class="tm_main_img_set" data-ng-if="tm.templete.mdiaNoImgValid">
        <img no-image ng-src="{{tm.templete.mainImg}}" alt="올바른 치아보험 (1806)">
        <a href="#" class="chatt_img_link chatt_teeth_img01" data-trigger-info='{"type":"keyword","id":"CTTG1802002"}'>
            <img data-ng-src="{{WEBROOT}}/default/images/common/btn_layer.png" width="100%"  height="29" alt="임플란트">
        </a>
    </div>
</div>
```
```
그리고 비슷한 data-ng-show= 조건문도 if문과 거의 동일하여 바로 설명 드리겠습니다.
data-ng-show 부분도 if문과 동일하게 조건이 맞을때(true)는 보이고 조건이 맞지않을때(false)는 안보이지만 다른점은 태그가 남아서 display(block/none)으로 처리되는게 특징입니다.

다음으로는 {{}}에 부분을 알려드리겠습니다.
{{조건문? 'true 시 출력문' : 'false 시 출력문'}}
예시로는 <div class="bx_valid {{tm.er.name? 'error' : ''}}"> 
tm.er.name이 true 일때는 error 이라는 클래스를 넣기위해 해당부분들이 이름/휴대전화 등 여러가지 방면에 들어가있습니다.
그리고 <label for="ccName02">{{tm.ui.kidsTitle}}이름</label> 코드와 같이 class 안이 아닌 그냥 태그 안에 들어간곳 같은경우에는 tm.ui.kidsTitle 이라는 데이터를 불러오는 곳입니다.

<div class="bx_valid {{tm.er.name? 'error' : ''}}">
    <div class="group {{tm.er.name ? 'error_m' : ''}}">
        <label for="ccName02">{{tm.ui.kidsTitle}}이름</label>
        <input data-hangul-only type="text" id="ccName02" name="ccName02" title="{{tm.ui.kidsTitle}}이름" style="width:100%" class="ipt_style" required="required" data-ng-model="tm.io.name">
        <span class="bar"></span>
    </div>
    <!-- txt_error -->
    <p class="txt_error"><span class="ico"></span>{{tm.ui.kidsTitle}}이름을 정확하게 입력하세요.</p>
    <!-- //txt_error -->
</div>
```

###간략요약 
```
- data-ng-if = true (아무런 반응없음)
- data-ng-if = false (remove)

- data-ng-show = true (.show())
- data-ng-show = false (.hide())

- {{조건문? 'true 시 출력문' : 'false 시 출력문'}}
```
