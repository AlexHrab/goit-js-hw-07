const form = document.querySelector(".login-form")


form.addEventListener("submit", event => {
    event.preventDefault();
    const{email, password}=event.currentTarget.elements
    if(!email.value.trim() || !password.value.trim()){
       
        return alert('All form fields must be filled in')
    }
console.log({email: email.value.trim(), password: password.value.trim()})
event.currentTarget.reset()

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
    el.style.marginBottom = "8px"
    
})

document.querySelectorAll(".login-form>label")[document.querySelectorAll(".login-form>label").length-1].style.marginBottom = "16px"

document.querySelectorAll(".login-form>label>input").forEach(el =>{
    el.style.width = "360px"
    el.style.height = "40px"
    el.style.borderRadius = "4px"
    el.style.borderWidth = "1px"
    el.style.borderStyle = "solid"
    el.style.borderColor = "#808080"
    el.style.marginTop = "8px"
    el.style.textAlign = "left"
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

document.querySelectorAll(".login-form>label").forEach(el => {
    el.addEventListener("mouseover", event => {
        event.currentTarget.style.color = "#4e75ff"
        event.currentTarget.querySelector(".login-form>label>input").style.borderColor = "black"
        event.currentTarget.querySelector(".login-form>label>input").style.borderWidth = "2px"
        
}) 
el.addEventListener("mouseout", event => {
    event.currentTarget.style.color = "#2e2f42"
    event.currentTarget.querySelector(".login-form>label>input").style.borderColor = "#808080"
    event.currentTarget.querySelector(".login-form>label>input").style.borderWidth = "1px" 
}) 
    })

    document.querySelectorAll(".login-form>label")[0].addEventListener("mouseover", event =>{
        event.currentTarget.querySelector(".login-form>label>input").setAttribute("placeholder", "Your email")
    })

    document.querySelectorAll(".login-form>label")[0].addEventListener("mouseout", event =>{
        event.currentTarget.querySelector(".login-form>label>input").removeAttribute("placeholder")
    })

    document.querySelectorAll(".login-form>label")[1].addEventListener("mouseover", event =>{
        event.currentTarget.querySelector(".login-form>label>input").setAttribute("placeholder", "Your password")
    })

    document.querySelectorAll(".login-form>label")[1].addEventListener("mouseout", event =>{
        event.currentTarget.querySelector(".login-form>label>input").removeAttribute("placeholder")
    })




    document.querySelector(".login-form>button").addEventListener("mouseover", event =>{
        event.currentTarget.style.background = "#6c8cff"
    })

    document.querySelector(".login-form>button").addEventListener("mouseout", event =>{
        event.currentTarget.style.background = "#4e75ff"
    })
    


