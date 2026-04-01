let Main=document.getElementById("Main")
let display= fetch("https://api.jikan.moe/v4/top/anime")
display.then((response)=>{
    return response.json()
})
.then((obj)=>{
    let list = obj.data
    for (let i=0;i<=11;i++){
        let ok=document.createElement("img")
        ok.src=list[i].images.jpg.large_image_url
        Main.append(ok)
    }
})