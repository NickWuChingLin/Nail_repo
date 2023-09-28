
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
    headerContent.textContent = "我們的經典單色美甲油系列提供多種精選顏色，從經典红色到優雅的深藍色，滿足您不同場合的需求。"
    innerBanner.style.backgroundImage = `url(${'../img/icon/首頁輪播1.jpg'})`;
})
secondBtn.addEventListener("click", () => {
    headerTitle.textContent = "漸層"
    headerContent.textContent = "選擇一個深色作為起點。這個深色可以是你喜歡的任何颜色，這個深色作為整個漸層的基礎，為整個設計提供了深度和鲜明度。"
    innerBanner.style.backgroundImage = `url(${'../img/icon/首頁輪播2.jpg'})`;
})
thirdBtn.addEventListener("click", () => {
    headerTitle.textContent = "卡通圖案"
    headerContent.textContent = "在美甲設計中使用可愛、有趣卡通元素的方式，為您的指甲增添一些娛樂和童趣。"
    innerBanner.style.backgroundImage = `url(${'../img/icon/首頁輪播3.jpg'})`;
})