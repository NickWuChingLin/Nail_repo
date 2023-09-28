$(".burger").on("click", function () {
    $(".change").slideToggle(1000);


    // img要getter抓路徑
    if ($(".burger").attr("src") == "./img/icon/hamburger-open.png") {
        $(".burger").attr("src", "./img/icon/hamburger.png")
    } else {
        $(".burger").attr("src", "./img/icon/hamburger-open.png")
    }
    console.log($(".burger").attr("src"))
})