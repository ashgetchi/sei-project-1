function init() {

  //? variables

  let width = 10
  let height = 10
  let sizeOfGrid = width * height
  const cells = []


//? Dom Elements
const thegrid = document.querySelector('#thegrid')
let 

  console.log('poo poo')

  //? functions 
function createGrid() {
  for (i = 0; i < sizeOfGrid; i++){
  const cell = document.createElement('div')
  thegrid.appendChild(cell)
  }
}
createGrid()
  //? Events







}


window.addEventListener('DOMContentLoaded', init)
