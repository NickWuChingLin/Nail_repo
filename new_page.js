
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




    if (bannerImg.style.backgroundImage == 'url("../img/new_img/new\ scoll0.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/new_img/new\ scoll1.jpg")'
    } else if (bannerImg.style.backgroundImage == 'url("../img/new_img/new\ scoll1.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/new_img/new\ scoll2.jpg")'
    } else {
        bannerImg.style.backgroundImage = 'url("../img/new_img/new\ scoll0.jpg")'
    }
    console.log(bannerImg.style.backgroundImage.url)
}, 3000)


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
        } else {
            like.textContent = `${--num}Like`
        }
    })

}

