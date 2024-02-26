



const box = document.querySelector("#boxes")
const destroyBtn = document.querySelector("button[data-destroy]")
const input = document.querySelector("input")
const createBtn = document.querySelector("button[data-create]")

createBtn.addEventListener("click", (event) => {
  const amount = + input.value;

  if(amount < 1 || amount > 100){
    return alert("the value must be less than 100")
  }
destroyBox()
  createBoxes(amount)

  
})

destroyBtn.addEventListener("click", destroyBox)

 function destroyBox(){
  box.innerHTML = "";
  input.value = "";
 }

  function createBoxes(amount){
    const array = []
    
  for(let i=0;i<amount;i+=1){
     const newDiv = document.createElement("div")
     newDiv.style.width = `${30+10*i}px`
     newDiv.style.height = `${30+10*i}px`
     newDiv.style.backgroundColor = getRandomHexColor()
     array.push(newDiv)
 }
 box.append(...array)
       
    }
    
   
 const container = document.createElement("div")
 document.querySelector("body").append(container)
 container.classList.add("container")
 container.append(document.querySelector("#controls"), document.querySelector("#boxes"))

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


