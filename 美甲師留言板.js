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
            const image = document.createElement("img")
            image.src = window.URL.createObjectURL(fileImg.files[0])
            console.log(image.src)
            preImg.appendChild(image);
            image.style.width = "300px"
            image.style.height = "300px"
        }
    })
})

