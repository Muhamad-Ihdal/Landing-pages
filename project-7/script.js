let radio = document.querySelectorAll("input[name='sortir']")

radio.forEach((r)=>{
    r.addEventListener("change",()=>{
        console.log(`sekarang kita berada di: ${r.value}`)
    })
})

