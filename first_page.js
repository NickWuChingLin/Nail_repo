
// 宣告三個按鈕
const firstBtn = document.querySelector("#first-btn")
const secondBtn = document.querySelector("#second-btn")
const thirdBtn = document.querySelector("#third-btn")
const headerTitle = document.querySelector(".header-title")
const headerContent = document.querySelector(".header-content")
console.log(secondBtn)
// 宣告背景圖
const innerBanner = document.querySelector(".inner-banner");

// 三個按鈕增加點擊事件切換背景圖
firstBtn.addEventListener("click", () => {
    headerTitle.textContent = "單色/跳色"
    headerContent.textContent = "經典單色美甲油系列提供多種精選顏色，從經典紅色到優雅的深藍色，滿足您不同場合的需求。"
    innerBanner.style.backgroundImage = `url(${'img/yannes-kiefer-v7ce2oaS2z0-unsplash.jpg'})`;
    console.log(innerBanner);
    firstBtn.classList.add("active")
    secondBtn.classList.remove("active")
    thirdBtn.classList.remove("active")

})
secondBtn.addEventListener("click", () => {
    headerTitle.textContent = "漸層"
    headerContent.textContent = "選擇一個深色作為起點，這個深色作為整個漸層的基礎，為整個設計提供了深度和鮮明度。"
    innerBanner.style.backgroundImage = `url(${'img/ali-nurmemmedov-HGRi0H-VvfI-unsplash.jpg'})`;
    console.log(innerBanner)
    firstBtn.classList.remove("active")
    secondBtn.classList.add("active")
    thirdBtn.classList.remove("active")
})
thirdBtn.addEventListener("click", () => {
    headerTitle.textContent = "卡通圖案"
    headerContent.textContent = "在美甲設計中使用可愛、有趣卡通元素的方式，為您的指甲增添一些娛樂和童趣。"
    innerBanner.style.backgroundImage = `url(${'img/tiko-giorgadze-_RhLAHDzy1I-unsplash.jpg'})`;
    firstBtn.classList.remove("active")
    secondBtn.classList.remove("active")
    thirdBtn.classList.add("active")
    console.log(innerBanner)
})