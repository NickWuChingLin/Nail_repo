window.addEventListener("load", () => {

    const fileImg = document.querySelector("#imgFile");
    const preImg = document.querySelector(".preImg")
    console.log(fileImg.files.length);
    console.log(preImg)
    // 監聽input變化時
    fileImg.addEventListener("change", () => {
        // 判斷imgfile裡面有沒有檔案
        if (preImg.firstChild) {
            // preImg.remove()
            preImg.innerHTML = ''
        }

        // while(preview.firstChild) {
        //     preview.removeChild(preview.firstChild);
        // }
        if (fileImg.files.length === 0) {
            const para = document.createElement("p");
            para.textContent =
                "尚未選擇任何檔案";
            para.style = "line-height:300px";
            preImg.appendChild(para)
        } else {
            // 建立一個img標籤
            image = document.createElement("img")
            image.src = window.URL.createObjectURL(fileImg.files[0])
            console.log(image.src)
            preImg.appendChild(image);
            image.style.width = "200px"
            image.style.height = "200px"
        }
    })
})

// 上船表單預覽畫面
let formReview = document.querySelector(".formReview")
console.log(formReview)
let formContext = document.querySelector(".formContext")


let subBtn = document.querySelector(".sub")
subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formReview.style.display = 'block'
    let formtext1 = document.createElement("p")
    formtext1.innerText = `商品名稱:${document.querySelector(".proItem").value}`
    formtext1.className = 'formtext1'
    let formtext2 = document.createElement("p")
    formtext2.innerText = `美甲類別:${document.querySelector(".proType").value}`
    formtext2.className = 'formtext2'
    let formtext3 = document.createElement("p")
    formtext3.innerText = `售價:$:${document.querySelector(".proCash").value}`
    formtext3.className = 'formtext3'
    let formtext4 = document.createElement("p")
    formtext4.innerText = `聯繫方式:$:${document.querySelector(".proPhone").value}`
    formtext4.className = 'formtext4'
    let subtn = document.querySelector("button")
    subBtn.innerText = `送出表單`
    subtn.className = 'subBtn'
    let changeBtn = document.createElement("button")
    changeBtn.innerText = `修改表單`
    changeBtn.className = 'subBtn'
    let formImg = document.createElement("img");
    formImg.src = image.src
    formImg.className = `formImg`
    let formtext5 = document.createElement("p")
    formtext5.innerText = `作品描述:${document.querySelector("#input_area").value}`

    formContext.appendChild(formImg);
    formContext.appendChild(formtext1);
    formContext.appendChild(formtext2);
    formContext.appendChild(formtext3);
    formContext.appendChild(formtext4);
    formContext.appendChild(formtext5);
    formContext.appendChild(subBtn);
    formContext.appendChild(changeBtn);
    subtn.addEventListener("click", () => {
        alert(`提交成功`)
        window.location.reload()
    })
    changeBtn.addEventListener("click", () => {
        window.location.reload()
    })
    document.querySelector("body").style.overflow = 'hidden'
})
