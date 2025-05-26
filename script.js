const h2 = document.querySelector("h2")
const p = document.querySelector('p')
const body = document.querySelector('body')
body.style.background = 'WHITE'
p.innerText = "WHITE"
p.style.color = 'WHITE'
let indexSelected
let colorNameSelected

const colorOptions = ["WHITE", "BLUE", "GREEN", "GREY", "BLACK", "PINK", "ORANGE", "YELLOW", "BEIGE", "RED"]

console.log(colorOptions)
console.log(colorOptions.length)

function randomColor()  {
  indexSelected = Math.floor(Math.random() * colorOptions.length)
  console.log(indexSelected)
  colorNameSelected = colorOptions[indexSelected]
  console.log(colorNameSelected)
  display()
}

function randomColor2() {
  let r = Math.floor(Math.random() * (255+1))
  let g = Math.floor(Math.random() * (255+1))
  let b = Math.floor(Math.random() * (255+1))
  display2(r, g, b)

}

function display()  {
  body.style.background = colorNameSelected
  p.innerText = colorNameSelected
  p.style.color = colorNameSelected
}
function display2(r, g, b) {
  body.style.background = `rgb(${r}, ${g}, ${b})`
  p.innerText = `rgb(${r}, ${g}, ${b})`
  p.style.color = `rgb(${r}, ${g}, ${b})`

}