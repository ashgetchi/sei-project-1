//! Layout - 

//? Page is split into half - between your grid and the pc's grid
//? There is a hanger on the right of your grid - where your pieces start and you click where you want them to go on your grid
//? The computers pieces are randomly allocated
//? Each grid is 100 squares total - 10 height and 10 width



//* Stage 1 - Selection Phase

//! How many ships and how big is the grid
//? 4 squares: 1 piece
//? 3 squares: 2 piece
//? 2 squares: 3 piece
//? 1 squares: 4 pieces
//? P1 & PC ships take up a total of 20 squares each 

//! Conditionals for ship placement
//? if the ship falls outside of the grid during placement then don't allow the placement
//? 







//* Stage 2 - Gaming Phase

//? Player clicks on a 'cell' in the 'grid' and AI determines whether it is a hit or a miss 

//! Did it hit?
//? Determine whether the square the user or cpu selected, contains the 'ship' class in it

//! Did it miss?
//? Determing whether the square the user or cpu selected, didn't contain the 'ship' class in it
//! If hit 
//? If it is  a 'hit' mark that square with a red square && play the 'hit' gif
//? If it is a hit don't let the user hit the same square again 

//! If miss
//? If it is a 'miss' mark that square with a dot && play the 'miss' gif
//? If it is a 'miss' dont let the user hit the same square again

//! If all pieces are marked with a red x
//? If all users ships are marked with the red x. Print a large you lose and play the 'you lost' gif 






// function init() {

//   //? variables

//   let width = 10
//   let height = 10
//   let sizeOfGrid = width * height
//   const cells = []


// //? Dom Elements
// const thegrid = document.querySelector('#thegrid')
// let 

//   console.log('poo poo')

//   //? functions 
// function createGrid() {
//   for (i = 0; i < sizeOfGrid; i++){
//   const cell = document.createElement('div')
//   thegrid.appendChild(cell)
//   }
// }
// createGrid()
//   //? Events







}


window.addEventListener('DOMContentLoaded', init)
