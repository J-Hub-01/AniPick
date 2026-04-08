let Main=document.getElementById("Main")
let display= fetch("https://api.jikan.moe/v4/top/anime")
display.then((response)=>{
    return response.json()
})
.then((obj)=>{
    let list = obj.data
    list.forEach((element,index)=>{
        let j = Math.floor(Math.random() * (index + 1));
        [element, list[j]] = [list[j], element];
    })
    let selection=list.slice(0,12)

    selection.forEach((x)=>{

        let outerCard=document.createElement("div")
        outerCard.classList.add("outerCard")

        let topImg=document.createElement("img")
        topImg.src=x.images.jpg.small_image_url

        let tag=document.createElement("img")
        tag.src=x.images.jpg.large_image_url
        tag.classList.add("cards")

        let name=document.createElement("h2")
        name.textContent=x.titles[0].title
        let titleForCard=document.createElement("h4")
        titleForCard.innerHTML=`<b>Title:</b> ${x.title_english}`
        let score=document.createElement("p")
        score.textContent=`Ratings: ${x.score}`
        let synopsis=document.createElement("p")
        synopsis.innerHTML=`<b>Synopsis:</b> ${x.synopsis}`
        
        let blockOfContent=document.createElement("div")
        blockOfContent.append(titleForCard,score,synopsis)

        outerCard.append(tag,name)
        Main.append(outerCard)


    })
    
})