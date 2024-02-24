document.querySelector("#name-input").addEventListener("input", event =>{
    [...document.querySelector("#name-input").value].every(el => el === " ") ||
     document.querySelector("#name-input").value === "" ?
     document.querySelector("#name-output").textContent = "Anonymous" :
     document.querySelector("#name-output").textContent = event.currentTarget.value.trim()

}  
)




      