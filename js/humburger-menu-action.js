$(".btn-gnav").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".btn-gnav").removeClass('active');//ボタンの activeクラスを除去し
    $(".gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});