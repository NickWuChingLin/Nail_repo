const submitBtn = document.querySelector(".submit-btn");
const btn = document.querySelectorAll(".reserve-btn")
let btnInput;
btn.forEach(i => {
    i.addEventListener("click", (e) => {
        e.preventDefault()
        btnInput = i.innerText
    })
    console.log(btnInput)
})
console.log(submitBtn)
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const rePer = document.querySelector(".peopleInput").value
    const date = document.querySelector(".reserveDate").value

    alert(`預約成功!\n預約日期${date}，時間${btnInput}，人數${rePer}位`)
})
