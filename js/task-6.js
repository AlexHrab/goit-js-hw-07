function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let num;

document.querySelector("input").addEventListener("input", event =>{num = event.currentTarget.value})

document.querySelector("button[data-create]").addEventListener("click", event => {
  if(document.querySelector("#boxes").innerHTML === ""){
    createBoxes(num)
    }else if(document.querySelector("#boxes").innerHTML !== "" && document.querySelector("input").value !== ""){
     
            document.querySelector("#boxes").innerHTML = ""    
      createBoxes(num)
      if( document.querySelector("#boxes").innerHTML === ""){
        document.querySelector("input").value = ""
       } 
    }
    num = 0
  })

  function createBoxes(amount){
    const array = []
    if(num<=100){
  for(let i=0;i<amount*10;i+=10){
     const newDiv = document.createElement("div")
     newDiv.style.width = `${30+i}px`
     newDiv.style.height = `${30+i}px`
     newDiv.style.backgroundColor = getRandomHexColor()
     array.push(newDiv)
 }
 document.querySelector("#boxes").append(...array)
      }   
    }
    
 document.querySelector("button[data-destroy]").addEventListener("click", event =>{
  document.querySelector("#boxes").innerHTML = ""
 })




