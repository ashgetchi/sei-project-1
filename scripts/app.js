function init() {

  //* Variables & Elements to think about
  //! const 
  //? Variable for the location of the ships
  //? Variable for the array
  //!const grid = []
  //! gridHasShip = true/false
  //? Make 10 different classes for your battleships and then add or remove them from your html with your Javascript



  //* Start & Layout - 

  //* Start 
  //? Simple yes or no question - do you want to start the game or not 
  //! If user.target.value = yes then initiate created grids function


  //* Layout

  //? Each grid is 100 squares total - 10 height and 10 width
  //! Make a for loop creating 100 divs twice. Like in the pokemon example

  //? Page is split into half - between your grid and the pc's grid
  //! Simply insert a line in the middle of the grids OR a subheading that says your grid and their grid
  //! Give your grid an id and your computers grid an id

  //? There is a hanger below your grid - where your pieces start and you click where you want them to go on your grid
  //! This 'hanger' is simply another grid of 40 squares without borders on them

  //? The computers pieces are randomly allocated onto the pc grid
  //! The computers pieces 

  //? You need to push into an array of an array with both grids in order to get an X and a Y axis
  //! Push both of your grids into two separate arrays




  //* Stage 1 - Selection Phase

  //! How many ships and how big are they
  //? 4 squares: 1 piece
  //? 3 squares: 2 piece
  //? 2 squares: 3 piece
  //? 1 squares: 4 pieces
  //? P1 & PC ships take up a total of 20 squares each 

  //? Create 10 divs in HTML (one for each ship! )

  //! Conditionals for ship placement
  //? if the ship falls outside of the grid during placement then don't allow the placement
  //?








  //* Stage 2 - Gaming Phase

  //? Player clicks on a 'cell' in the 'grid' and AI determines whether it is a hit or a miss 

  //! Did it hit?
  //? Determine whether the square the user or cpu selected, contains the 'ship' class in it 
  //? IF e.target.value = 'ship' || e.target.backroundcolor = 'red'
  //? Programme has to remember hits and also to register a 'SINK' if all coordinates 

  //! Did it miss?
  //? Determine whether the square the user or cpu selected, didn't contain the 'ship' class in it

  //! Did it sink? 
  //? Place all ships into their own seperate arrays, assign the value of 
  
  // const shipA = []

  // shipA.push('hit')
  // shipA.push('hit')
  // shipA.push('hit')

  
  // console.log(shipA);
  
  // if (shipA.length === 3) {
  //   console.log('SINK')
 
  // }

  //! If hit 
  //? If it is  a 'hit' mark that square with a red square && play the 'hit' gif
  //? If it is a hit don't let the user hit the same square again 
  //? Give a window.prompt saying you hit the user

  //! If miss
  //? If it is a 'miss' mark that square with a dot && play the 'miss' gif
  //? If it is a 'miss' dont let the user hit the same square again
  //? Give a window.prompt saying you missed 

  //! If all pieces are marked with a red x
  //? If all users ships are marked with the red x. Print a large you lose and play the 'you lost' gif 

  //* Questions
  //? How to get the ship across multiple divs
  //? Will my array method of sink work?

  //* -------------------------------------------------------------------------------------------------------------------------------------------------------

  //* Other variables

  const gridHeight = 10
  const gridLength = 10
  const numberOfSquares = gridLength * gridHeight
  const pcCells = []
  const p1Cells = []
  let pcShipPosition = 0 
  let pcShipPosition2 = 0
  let pcShipPosition3 = 0
  let pcShipPosition4 = 0
  let pcShipPosition5 = 0
  let pcShipPosition6 = 0
  let pcShipPosition7 = 0
  let pcShipPosition8 = 0
  let pcShipPosition9 = 0
  let pcShipPosition10 = 0
  let pcShipPosition11 = 0
  let pcShipPosition12 = 0
  let pcShipPosition13 = 0
  let pcShipPosition14 = 0
  let pcShipPosition15 = 0
  let pcShipPosition16 = 0
  let pcShipPosition17 = 0
  let pcShipPosition18 = 0
  let pcShipPosition19 = 0
  let pcShipPosition20 = 0
  

  console.log(pcCells[1])
  

  //? Element 

  const playersGrid = document.querySelector('.thegridp1')
  console.log(playersGrid)
 
  const computersGrid = document.querySelector('.thegridpc')
  console.log(computersGrid)

  const computersCells = document.querySelectorAll('.thegridpc div')
  const gridcontainerp1 = document.querySelector('.gridcontainerp1')


 

  //? Execution
  function createGrids() {
    for (let i = 0; i < numberOfSquares; i++) {
      const p1Cell = document.createElement('div')
      p1Cells.push(p1Cell)
      p1Cell.innerHTML = i
      playersGrid.appendChild(p1Cell)
    }

    for (let i = 0; i < numberOfSquares; i++) {
      const pcCell = document.createElement('div')
      pcCells.push(pcCell)
      pcCell.innerHTML = i
      computersGrid.appendChild(pcCell)
    }
    placeComputerPieces()
  }
  createGrids()

  function placeComputerPieces() {
    pcShipPosition = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition].classList.add('battleship')
    

    pcShipPosition2 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition2].classList.add('battleship')
    pcShipPosition3 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition3].classList.add('battleship')
    pcShipPosition4 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition4].classList.add('battleship')
    pcShipPosition5 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition5].classList.add('battleship')
    pcShipPosition6 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition6].classList.add('battleship')
    pcShipPosition7 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition7].classList.add('battleship')
    pcShipPosition8 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition8].classList.add('battleship')
    pcShipPosition9 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition9].classList.add('battleship')
    pcShipPosition10 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition10].classList.add('battleship')
    pcShipPosition11 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition11].classList.add('battleship')
    pcShipPosition12 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition12].classList.add('battleship')
    pcShipPosition13 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition13].classList.add('battleship')
    pcShipPosition14 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition14].classList.add('battleship')
    pcShipPosition15 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition15].classList.add('battleship')
    pcShipPosition16 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition16].classList.add('battleship')
    pcShipPosition17 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition17].classList.add('battleship')
    pcShipPosition18 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition18].classList.add('battleship')
    pcShipPosition19 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition19].classList.add('battleship')
    pcShipPosition20 = Math.floor(Math.random() * numberOfSquares)
    pcCells[pcShipPosition20].classList.add('battleship')
    
  }

  function targetSelector(e) {
    console.log('click')
    if (e.target.classList.contains('battleship')) {
      window.alert('hit')
      e.target.classList.add('hit')
    } else {
      window.alert('miss')
      e.target.classList.add('miss')
    }
  }
//? Event 

  
  computersGrid.addEventListener('click', targetSelector)

  
}
  









window.addEventListener('DOMContentLoaded', init)
