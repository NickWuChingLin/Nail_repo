$(".burger").on("click", function () {
    $(".change").slideToggle(1000);
    // $("body").on("click", function () {
    //     $(".change").hide();
    //     alert(123)
    // })
    $("window").on("click", function () {
        $(".change").hide()
        alert(123)
    })
    // img要getter抓路徑
    if ($(".burger").attr("src") == "./img/icon/hamburger-open.png") {
        $(".burger").attr("src", "./img/icon/hamburger.png")
    } else {
        $(".burger").attr("src", "./img/icon/hamburger-open.png")
    }
    console.log($(".burger").attr("src"))
})


// rwd時漢堡按鈕可以下拉

let widthResize = $(window).width()
if (widthResize <= 576) {
    $(".selection-outter").on("click", function () {
        $(".first").fadeToggle("1000");
        $(".second").fadeToggle("1000");
        $(".third").fadeToggle("1000");
    });

    $(".selection-outter1").on("click", function () {
        $(".text").fadeToggle("1000");
        $(".text1").fadeToggle("1000");
    });
} else {
    // 螢幕大於576取消點擊事件
    $(".selection-outter").off("click");
    $(".selection-outter1").off("click");
}
;
