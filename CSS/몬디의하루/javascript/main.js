$(document).ready(function () {
  setTimeout(function () { $('.chatbotArea').animate({ opacity: '1' }, 1500); }, 1000)
});

$(document).on("click", ".chatbotClose", function () {
  $(".chatbotArea").css("display", "none");
});

/*
  이미지 관련
  1. 이미지는 총 2장이다.(A, B)
  2. 처음에 A가 등장한다.
  3. 일정 텀으로 말풍선이 바뀐다.말풍선이 로딩 되기 전에 B가 잠깐 나오다가, 말풍선이 뜨면 A 이미지가 나온다.
*/

/*
  옵션으로 넣을 것
  1. 페이지 로딩 후 몬디가 뜨는 딜레이 시간을 조절 할 수 있도록 한다. (페이지 로딩되고 몇 초뒤에 뜰 것인지!)
  2. 몬디의 멘트를 넣어주면, 3개가 되든 5개가 되든 10개가 되든 같은 텀과 같은 방식으로 말풍선 기능이 돌아가도록 한다.
  3. 말풍선 하나가 떴다가 다음 말풍선이 나오는 텀을 조절할 수 있도록 한다.
*/