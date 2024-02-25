const form = document.querySelector(".login-form")

form.addEventListener("submit", event => {
    event.preventDefault();
    if(event.target.elements.email.value === "" || event.target.elements.password.value === ""){
        console.log(alert('All form fields must be filled in'))
    }

    const obj = {}

    for(const el of event.target.elements){
       
        if(el.name.length>1 && el.value !==""){
        obj[el.name] = el.value.trim()
    } 
    }
    
if(event.target.elements.email.value !== "" && event.target.elements.password.value !== ""){
console.log(obj)}

form.reset()
} 
)

form.style.display = "flex"
form.style.flexDirection = "column"
form.style.width = "408px"
form.style.height = "256px"
form.style.borderRadius = "8px"
form.style.padding = "24px"
form.style.background = "#fff"
form.style.margin = "auto"

document.querySelectorAll(".login-form>label").forEach(el =>{
    el.style.display = "flex"
    el.style.flexDirection = "column"
    el.style.fontFamily = "Montserrat, sans-serif"
    el.style.fontWeight = "400"
    el.style.fontSize = "16px"
    el.style.lineHeight = "1.5"
    el.style.letterSpacing = "0.04em"
    el.style.color = "#2e2f42"
    el.style.gap = "8px"
})

document.querySelectorAll(".login-form>label")[document.querySelectorAll(".login-form>label").length-1].style.marginBottom = "16px"

document.querySelectorAll(".login-form>label>input").forEach(el =>{
    el.style.width = "360px"
    el.style.height = "40px"
    el.style.borderRadius = "4px"
    el.style.borderWidth = "1px"
    el.style.borderStyle = "solid"
    el.style.borderColor = "#808080"
})

document.querySelectorAll(".login-form>button").forEach(el =>{
    el.style.width = "86px"
    el.style.height = "40px"
    el.style.borderRadius = "8px"
    el.style.border = "none"
    el.style.background = "#4e75ff"
    el.style.fontFamily = "Montserrat, sans-serif"
    el.style.fontWeight = "500"
    el.style.fontSize = "16px"
    el.style.lineHeight = "1.5"
    el.style.letterSpacing = "0.04em"
    el.style.color = "#fff"

})

