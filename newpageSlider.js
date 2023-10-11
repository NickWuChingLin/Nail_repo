$(document).ready(function () {
    let index = 0;
    let divWidth = $("div.reImg-section div").width()
    let imgLength = $(".reImg-slider div").length
    console.log(imgLength)
    console.log(divWidth)
    $(".left").on("click", function () {
        if (index < 4) {
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
        if (index < 4) {
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