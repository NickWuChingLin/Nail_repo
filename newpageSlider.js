$(document).ready(function () {
    let index = 0;
    let divWidth = $("div.reImg-section div").width()
    let imgLength = Math.round($(".reImg-slider div").length / 2 - 1)
    console.log(imgLength)
    console.log(divWidth)
    $(".left").on("click", function () {
        if (index < imgLength) {
            index++
        } else {
            // $(".left").attr("disabled", true);
            // index = 6
            index = 0
        }
        $(".reImg-slider").animate({
            left: divWidth * index * -1
        })
    })
    $(".right").on("click", function () {
        if (index < imgLength) {
            index++
        } else {
            index = 0
        }
        $(".reImg-slider").animate({
            left: divWidth * index * -1
        })
    })
    console.log($(".left"))
});