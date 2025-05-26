const h2 = document.querySelector("h2")
const p = document.querySelector('p')
const body = document.querySelector('body')
body.style.background = '#ffffff'
p.innerText = "WHITE"
p.style.color = '#ffffff'
let indexSelected
let colorRefSelected
let colorNameSelected

const colorOptions = [
    {name:"WHITE", ref: '#ffffff'},
    {name:"BLUE", ref: '#0000ff'},
    {name:"GREEN", ref: '#00ff00'},
    {name:"GREY", ref: '#808080'},
    {name:"BLACK", ref: '#000000'},
    {name:"PINK", ref: '#ffc0cb'},
    {name:"ORANGE", ref: '#ffa500'},
    {name:"YELLOW", ref: '#ffff00'},
    {name:"BEIGE", ref: '#f5f5dc'},
    {name:"RED", ref: '#ff0000'}
]
console.log(colorOptions)
console.log(colorOptions.length)

function randomColor()  {
  indexSelected = Math.floor(Math.random() * colorOptions.length)
  console.log(indexSelected)
  colorRefSelected = colorOptions[indexSelected].ref
  console.log(colorRefSelected)
  colorNameSelected = colorOptions[indexSelected].name
  console.log(colorNameSelected)
  display()
}

function display()  {
  body.style.background = colorRefSelected
  p.innerText = colorNameSelected
  p.style.color = colorRefSelected
}
