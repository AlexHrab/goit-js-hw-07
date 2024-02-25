
console.log(`Number of categories: ${document.querySelector("#categories").children.length}`)


const items = document.querySelectorAll(".item")
const b = items.lastChild



items.forEach(item =>{
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelector("ul").children.length}`)
    item.style.background = "#f6f6fe"
    item.style.width = "392px"
    // item.style.height = "264px"
    item.style.borderRadius = "8px"
    item.style.padding = "16px"
    item.style.listStyleType = "none"
    item.style.display = "flex"
    item.style.flexDirection = "column"
})

items[1].style.display = "none"

document.querySelectorAll(".item>ul").forEach(el => {
el.style.display = "flex"
el.style.flexDirection = "column"
el.style.gap = "8px"
el.style.padding = "0"
})

document.querySelectorAll(".item>ul>li").forEach(el => {

    el.style.width = "360px"
    el.style.height = "40px"
    el.style.borderWidth = "1px"
    el.style.borderColor = "#808080"
    el.style.borderStyle = "solid"
    el.style.listStyleType = "none"
    el.style.borderRadius = "4px"
    el.style.aligneItems = "center"
    el.style.fontFamily = "Montserrat, sans-serif"
    el.style.fontWeight = "400"
    el.style.fontSize = "16px"
    el.style.lineHeight = "1.5"
    el.style.letterSpacing = "0.04em"
    el.style.color = "#2e2f42"
    el.style.paddingLeft = "16px"
    el.style.paddingTop = "8px"
})


document.querySelector("#categories").style.borderRadius = "8px"
document.querySelector("#categories").style.width = "440px"
document.querySelector("#categories").style.height = "648px"
document.querySelector("#categories").style.boxSizing = "border-box"
document.querySelector("#categories").style.background = "#fff"
document.querySelector("#categories").style.padding = "24px"
document.querySelector("#categories").style.display = "flex"
document.querySelector("#categories").style.flexDirection= "column"
document.querySelector("#categories").style.gap= "24px"
document.querySelector("#categories").style.margin= "auto"


document.querySelectorAll(".item>h2").forEach(el =>{
    el.style.marginTop = "0"
    el.style.fontFamily = "Montserrat, sans-serif"
    el.style.fontWeight = "600"
    el.style.fontSize = "24px"
    el.style.lineHeight = "1.3"
    el.style.letterSpacing = "0.04em"
    el.style.color = "#2e2f42"
})

