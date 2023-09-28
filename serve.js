// 先宣告找到所有服務項目img
const firstImg = document.querySelector(".firstImg")
const secondImg = document.querySelector(".secondImg")
const thirdImg = document.querySelector(".thirdImg")
const fourthImg = document.querySelector(".fourthImg")

// banner會一直轉動
setInterval(() => {
    let bannerImg = document.querySelector("div.banner-img")

    if (bannerImg.style.backgroundImage == 'url("../img/banner/serve_banner.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/banner/預約制度.jpg")'
    } else if (bannerImg.style.backgroundImage == 'url("../img/banner/預約制度.jpg")') {
        bannerImg.style.backgroundImage = 'url("../img/banner/預約時間超多元.jpg")'
    }
    else {
        bannerImg.style.backgroundImage = 'url("../img/banner/serve_banner.jpg")'
    }

    console.log(bannerImg)
}, 3000)

// 再把服務項目img變換圖片
firstImg.addEventListener("mouseover", () => {
    firstImg.src = "./img/serve_img/卸甲.jpg"
})
firstImg.addEventListener("mouseout", () => {
    firstImg.src = "./img/serve_img/卸甲1.jpg"
})
secondImg.addEventListener("mouseover", () => {
    secondImg.src = "./img/serve_img/光療.jpg"
})
secondImg.addEventListener("mouseout", () => {
    secondImg.src = "./img/serve_img/光療1.jpg"
})
thirdImg.addEventListener("mouseover", () => {
    thirdImg.src = "./img/serve_img/單色.jpg"
})
thirdImg.addEventListener("mouseout", () => {
    thirdImg.src = "./img/serve_img/單色1.jpg"
})
fourthImg.addEventListener("mouseover", () => {
    fourthImg.src = "./img/serve_img/複雜.jpg"
})
fourthImg.addEventListener("mouseout", () => {
    fourthImg.src = "./img/serve_img/複雜1.jpg"
})

// 抓服務流程的img
const serveImg = document.querySelectorAll("section.img>img")
console.log(serveImg)

for (let i = 0; i < serveImg.length; i++) {
    serveImg[0].addEventListener("mouseover", () => {
        // alert(1);
        serveImg[0].src = "./img/serve_img/預約制度.jpg";
    })
    serveImg[1].addEventListener("mouseover", () => {
        serveImg[1].src = "./img/serve_img/首頁輪播2.jpg";
    })
    serveImg[2].addEventListener("mouseover", () => {
        serveImg[2].src = "./img/serve_img/首頁輪播三.jpg";
    })
    serveImg[3].addEventListener("mouseover", () => {
        serveImg[3].src = "./img/serve_img/單色1.jpg";
    })
    serveImg[4].addEventListener("mouseover", () => {
        serveImg[4].src = "./img/serve_img/光療1.jpg";
    })
    serveImg[5].addEventListener("mouseover", () => {
        serveImg[5].src = "./img/serve_img/上色1.jpg";
    })

}


// 預約表單區域
const reserveBtn = document.querySelectorAll(".reserve-btn")
reserveBtn.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("changetn")
    })
})

