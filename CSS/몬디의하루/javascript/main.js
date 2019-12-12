$(document).ready(function () {
  setTimeout(function () { $('.chatbotArea').animate({ opacity: '1' }, 1500); }, 1000)

  // var mentNum = $(".ment_wave p").length;

  $(".ment_wave").each(function (index, item) {
    var indexNum = index + 1;
    $(item).addClass("ment_wave" + indexNum);
  })

  var subMentFunc = function () {
    var mainMentDuration = 10.5;
    var subMentDuration = 4.5;
    var subMentTerm = 5;
    //var mentWaveTerm = 4;
    var num = 0;
    $(".ment_wave>div").each(function (index, item) {
      var indexNum = index + 1;
      var itemSubMentTerm = indexNum * subMentTerm;
      // var itemNum = $(item).length;
      if ($(item).prev().hasClass("main_ment")) { num++; }
      if ($(item).prevAll().hasClass("main_ment")) {
        itemSubMentTerm = itemSubMentTerm + (mainMentDuration - subMentDuration) * num + (2 * num);
        console.log("야야야야야야 " + itemSubMentTerm)
        // console.log($(item).prevAll().hasClass("main_ment").length);
      }

      if ($(item).hasClass("main_ment")) {
        // 10.5s도 메인 멘트가 얼마만큼 사용자에게 보여지다가 사라질 지 설정 할 수 있게끔 만들어야 함 - done.
        // 또한 뒤의 indexNum * 5 부분(delay)에서 5 도 설정할 수 있게끔 만들어야 함 - done.
        $(item).css("animation", "ment " + mainMentDuration + "s " + itemSubMentTerm + "s 1 ease-out alternate");
      } else {
        // 이앞에 2.5s도(duration) 설정 할 수 있게끔 만들어야 함 (단, 뒤의 indexNum*5 부분보다 앞이 더 길면 안됨.) - done
        // 또한 뒤의 indexNum * 5 부분(delay)에서 5 도 설정할 수 있게끔 만들어야 함 - done.
        // 앞의 초가 뒤의 초 보다 길면 안된다는 것을 주석으로 명시해놓아야 함
        $(item).css("animation", "ment " + subMentDuration + "s " + itemSubMentTerm + "s 1 ease-out alternate");
      }

    })
  };

  subMentFunc();

});
