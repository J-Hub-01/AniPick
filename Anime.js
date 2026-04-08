let Main=document.getElementById("Main")
let display= fetch("https://api.jikan.moe/v4/top/anime")
display.then((response)=>{
    return response.json()
})
.then((obj)=>{
    let list = obj.data
    for (let i = list.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    let selection=list.slice(0,12)

    selection.forEach((x)=>{

        let outerCard=document.createElement("div")
        outerCard.classList.add("outerCard")

        let topImg=document.createElement("img")
        topImg.src=x.images.jpg.large_image_url
        topImg.classList.add("topImg")

        let tag=document.createElement("img")
        tag.src=x.images.jpg.large_image_url
        tag.classList.add("cards")

        let name=document.createElement("h2")
        name.textContent=x.titles[0].title
        let titleForCard=document.createElement("h3")
        titleForCard.innerHTML=`<b>Title:</b> ${x.title_english}`
        let score=document.createElement("p")
        score.innerHTML=`<b>Ratings:</b> ${x.score}`
        let synopsis=document.createElement("p")
        synopsis.innerHTML=`<b>Synopsis:</b> ${x.synopsis}`
        
        let blockOfContent=document.createElement("div")
        blockOfContent.append(topImg,titleForCard,score,synopsis)
        blockOfContent.classList.add("content")
        console.log(blockOfContent)


        outerCard.append(tag,name,blockOfContent)
        Main.append(outerCard)


    })
    
})