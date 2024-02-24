
console.log(`Number of categories: ${document.querySelector("#categories").children.length}`)

document.querySelectorAll(".item").forEach(item =>{
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelector("ul").children.length}`)
})




document.querySelector("#categories").style.borderRadius = "8px"
document.querySelector("#categories").style.width = "440px"
document.querySelector("#categories").style.height = "648px"
document.querySelector("#categories").style.boxSizing = "border-box"
document.querySelector("#categories").style.background = "#fff"
document.querySelector("#categories").style.padding = "24px"
document.querySelector("#categories").style.display = "flax"
document.querySelector("#categories").style.flexDirection= "column"
document.querySelector("#categories").style.gap= "24px"
document.querySelector("#categories").style.margin= "0"




