let topBtn = document.querySelector(".goTop")
console.log(topBtn)
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1000) {
        topBtn.style.display = 'block'
    } else {
        topBtn.style.display = 'none'
    }
    console.log(topBtn.style.display)
})
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
