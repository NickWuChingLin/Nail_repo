$(document).ready(function () {
    // $(".banner-title").t({
    //     speed: 500,
    // })

    $(".btn").on("click", function () {
        $(".card").slideToggle(3000);
    })
    $("#imgFile").on("change", function () {
        let files = document.querySelector("#imgFile").files[0]
        let readFile = new FileReader();
        readFile.readAsDataURL(files)
        readFile.addEventListener("load", (e) => {
            let img = document.querySelector(".newImg");
            img.src = readFile.result;

            img.style.width = "200px";
            img.style.height = "200px";
            $(".newImg").css({
                "display": "block"
            })
            // img.style.position = " absolute";
            // img.style.top = " 0";
            // img.style.left = "0";
            img.style.borderRadius = "50%";
            $(".file-plus").css("display", "none")
        })
    })


    // 新增卡片上去
    console.log($(".cardSection"))


});




