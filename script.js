const p = document.querySelector("p")
const Span = document.querySelector("span")

const colorOptions = [
    {name:"white", ref: #ffffff}
    {name:"blue", ref: #0000ff}
    {name:"green", ref: #00ff00}
    {name:"grey", ref: #808080}
    {name:"black", ref: #000000}
    {name:"pink", ref: #ffc0cb}
    {name:"orange", ref: #ffa500}
    {name:"yellow", ref: #ffff00}
    {name:"beige", ref: #f5f5dc}
]

// const oneColor = {name:"white", ref: #ffffff}
// console.log(oneColor["name"])

function randomColor()  {
  const randomIndex = Math.floor(Math.random() * colorOptions.length)
  colorName = randomIndex[name]
  console.log(colorName)
  Span.innerText = colorOptions[randomIndex]
}
