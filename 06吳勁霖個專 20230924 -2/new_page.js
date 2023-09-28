
$(document).ready(function () {
    // $("h1:nth-child(1)").t({
    //     speed: 400,
    // })
    // $("h2").t({
    //     delay: 4,
    //     speed: 500
    // })
});
const heart = document.querySelectorAll(".heart")
let heartSection = document.querySelectorAll(".heart-section")

setInterval(() => {
    let bannerImg = document.querySelector("div.banner-img")
    if (bannerImg.style.backgroundImage == 'url("../img/banner/new_page_banner.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/banner/serve_banner.jpg")'
    } else if (bannerImg.style.backgroundImage == 'url("../img/banner/serve_banner.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/banner/經濟實惠.jpg")'
    } else {
        bannerImg.style.backgroundImage = 'url("../img/banner/new_page_banner.jpg")'
    }
    console.log(bannerImg)
}, 5000)


// 設定點愛心數字會增加

for (let i = 0; i <= heart.length; i++) {
    let result = heart[i]
    let like = document.createElement("span")
    let num = 50000
    console.log(result)
    like.textContent = `${num}Like`
    result.appendChild(like)
    like.style.fontSize = "10px"
    like.style.letterSpacing = "1px"
    like.style.marginLeft = "40px"
    like.style.userSelect = "none"
    result.addEventListener("click", () => {
        result.classList.toggle("redheart")
        if (result.classList.contains("redheart")) {
            like.textContent = `${++num}Like`
        }
    })

}

