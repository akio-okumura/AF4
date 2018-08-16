// ローディングをcssとjQueryで実装する
// 参考サイト[https://kigiroku.com/frontend/loder.html]

var sky = document.querySelector('#sky');

$(document).ready(function() {
  // ロード前まではskyの色を青に設定している
  $(sky).attr('color', '#0085C9');
  // $('#main').hide();
});

$(window).on("load",function () {
  // 600ms待った後,300msかけてフェードアウト
  //$('#loading').delay(600).fadeOut(300);
  //$('#main-contents').show();
  //$('#loading').show();
  $(sky).attr('color', '#FFFFFF');
  $(sky).attr('src', '#skyTexture');

  var bg = document.querySelector('#bg_sound');
  $(bg).components.sound.playSound();
  //$('#main').show();
  // $("a-scene").append('#main');
});
