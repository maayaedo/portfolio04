//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//上から200pxスクロールしたら
    $('header').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('header').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('header').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('header').removeClass('UpMove');//UpMoveというクラス名を除き
      $('header').addClass('DownMove');//DownMoveというクラス名を.pagetopに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});