$(document).ready(function () {

    $(".card-img img").on("click", function () {
        let largeImg = '<img class="change-img" src =' + $(this).attr("src") + '></img>'
        $(".bigger-img").html($(largeImg).animate({ height: '70%', width: '70%', }, 500));
        // $(".bigger-img").html($(closeImg).animate({
        //     width: "50px",
        //     height: "50px"
        // }, 500))
        $(".bigger-img").css({

            width: "100%",
            height: "100%",
            margin: "0 auto"
        })
        $("main").css({
            padding: "0"
        })

        $(".bigger-img").show()

    })
    $(".bigger-img").on("click", function () {
        $(".bigger-img").hide()
    })
});

