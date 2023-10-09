$(document).ready(function () {
    let index = 0;
    // 抓外框的寬度
    let divWidth = $(".introcard").width();
    // 抓圖片的長度
    let imgCount = $(".introcard .card").length
    console.log(divWidth);
    console.log(imgCount);
    // 動態新增li的數量 用img的長度來抓
    for (let i = 1; i <= imgCount; i++) {
        let li = `<li>${i}</li>`
        $(".slider").append(li)
    }
    $(".slider li:first").addClass("clicked");

    // 點擊圓點可以切換圖片
    $(".slider li").on("click", function () {
        clearInterval(timer)
        index = $(this).index();
        console.log(index)
        $(".card").animate({
            left: divWidth * index * -1
        })
        $(this).addClass("clicked")
        $(".slider li").not(this).removeClass("clicked")
        timer = setInterval(moveNext, 5000)
    })
    function moveNext() {
        // 控制index只能在0~圖片長度之間
        if (index < imgCount - 1) {
            index += 1
        } else {
            index = 0
        }
        $(".card").animate({
            left: divWidth * index * -1
        })
        $(`.slider li:eq(${index})`).addClass("clicked")
        $(`.slider li`).not(`:eq(${index})`).removeClass("clicked")
    }
    // 設定時間
    let timer = setInterval(moveNext, 5000)

});