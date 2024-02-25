document.querySelector("#name-input").addEventListener("input", event =>{
    [...document.querySelector("#name-input").value].every(el => el === " ") ||
     document.querySelector("#name-input").value === "" ?
     document.querySelector("#name-output").textContent = "Anonymous" :
     document.querySelector("#name-output").textContent = event.currentTarget.value.trim()

}  
)

const block = document.createElement("div")
block.classList.add("newBlock")
document.querySelector("body>p").after(block)
block.append(document.querySelector("#name-input"))
block.append(document.querySelector("h1"))

block.style.width = "408px"
block.style.height = "136px"
block.style.background = "#fff"
block.style.borderRadius = "8px"
block.style.margin = "auto"
block.style.padding = "24px"

document.querySelector("#name-input").style.width = "360px"
document.querySelector("#name-input").style.height = "40px"
document.querySelector("#name-input").style.paddingLeft = "16px"
document.querySelector("#name-input").style.fontFamily = "Montserrat, sans-serif"
document.querySelector("#name-input").style.fontSize = "16px"
document.querySelector("#name-input").style.fontWeight = "400"
document.querySelector("#name-input").style.lineHeight = "1.5"
document.querySelector("#name-input").style.letterSpacing = "0.04em"
document.querySelector("#name-input").style.color = "#2e2f42"
document.querySelector("#name-input").style.marginBottom = "16px"



document.querySelector("h1").style.margin = "0"
document.querySelector("h1").style.fontFamily = "Montserrat, sans-serif"
document.querySelector("h1").style.fontWeight = "600"
document.querySelector("h1").style.fontSize = "24px"
document.querySelector("h1").style.lineHeight = "1.3"
document.querySelector("h1").style.letterSpacing = "0.04em"
document.querySelector("h1").style.color = "#2e2f42"
      