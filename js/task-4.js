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