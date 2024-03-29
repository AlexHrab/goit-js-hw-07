const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const newGal = document.querySelector(".gallery")
const array = []

newGal.style.display = "flex"
newGal.style.flexWrap = "wrap"
newGal.style.columnGap = "24px"
newGal.style.rowGap = "48px"
newGal.style.listStyleType = "none"
newGal.style.margin = "auto"
newGal.style.width = "1128px"
newGal.style.padding = "0"

images.forEach(image => {
  const img = document.createElement("img")
  img.src = image.url
  img.alt = image.alt
  const li = document.createElement("li")
  li.appendChild(img)
  array.push(li)
 
 
 img.style.width = "360px"
 img.style.height = "300px"
 img.style.margin = "0"
})

newGal.append(...array)






