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
  

  const threePieceShips = ['ship3','ship4','ship5']
  const fourPieceShip = ['ship1','ship2']

  const pcShip = []
  const pcShip2 = []
  const pcShip3 = []
  const pcShip4 = []
  const pcShip5 = []
  

  

  //? Element 

  const playersGrid = document.querySelector('.thegridp1')
  console.log(playersGrid)
 
  const computersGrid = document.querySelector('.thegridpc')
  console.log(computersGrid)

  const hangar = document.querySelector('.hangar')

  const computersCells = document.querySelectorAll('.thegridpc div')
  const gridcontainerp1 = document.querySelector('.gridcontainerp1')
  const ship1 = document.querySelector('#ship1')
  const ship2 = document.querySelector('#ship2')
  const ship3 = document.querySelector('#ship3')
  const ship4 = document.querySelector('#ship4')
  const ship5 = document.querySelector('#ship5')


 

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
    
  }
  createGrids()

  function placeComputerPieces() {
    const newPositions = threePieceShips.map(ship => {
      pcShipPosition = Math.floor(Math.random() * numberOfSquares) 
      if (pcShipPosition === 99 || pcShipPosition % 10 === 9 || pcShipPosition % 10 === 8) {
        pcCells[pcShipPosition -= 2 ].classList.add('pcbattleship')
      } else if (pcCells[pcShipPosition].classList.contains('pcbattleship')){
        pcCells[pcShipPosition += 10].classList.add('pcbattleship')
      } else {
        pcCells[pcShipPosition].classList.add('pcbattleship')}

      const pcShipPosition2 = pcShipPosition + 1
      pcCells[pcShipPosition2].classList.add('pcbattleship')
      const pcShipPosition3 = pcShipPosition2 + 1
      pcCells[pcShipPosition3].classList.add('pcbattleship')
    })

    const newPositions2 = fourPieceShip.map(ship => {
      pcShipPosition = Math.floor(Math.random() * numberOfSquares)
      if (pcShipPosition === 99 || pcShipPosition % 10 === 9 || pcShipPosition % 10 === 8 || pcShipPosition % 10 === 7){
        pcCells[pcShipPosition -= 3 ].classList.add('pcbattleship')
      } else if (pcCells[pcShipPosition].classList.contains('pcbattleship')) {
        pcCells[pcShipPosition += 10].classList.add('pcbattleship')
      } else {
        pcCells[pcShipPosition].classList.add('pcbattleship')
      }

      // const shipsAlreadyPlaced = pcCells.map(cell => {
      //   if pcCells
      // }) 

      const pcShipPosition2 = pcShipPosition + 1
      pcCells[pcShipPosition2].classList.add('pcbattleship')
      const pcShipPosition3 = pcShipPosition2 + 1
      pcCells[pcShipPosition3].classList.add('pcbattleship')
      const pcShipPosition4 = pcShipPosition3 + 1
      pcCells[pcShipPosition4].classList.add('pcbattleship')
    })
  }
  //? everytime you place a ship store the indexes of those div into an array
  //? Condition if the index its choosing now is already in the array
  //? Push 172 into a new array and define it as something. check if the random number is already included in the ships array.
  placeComputerPieces()

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

  function selectShip(e){
    console.log('click')
    e.target.classList.toggle('selected')
    console.log(e.target.value);

    //? boolean regarding what ship you have selected


  }

  
  

  function placeOnBoard(e){
    const shipLocation = e.target
    const shipLocationNumber = e.target.innerHTML
    
   
    if (ship1.classList.contains('selected')){
      const shipLocation2 = p1Cells[parseInt(shipLocationNumber) + 1]
      const shipLocation3 = p1Cells[parseInt(shipLocationNumber) + 2]
      const shipLocation4 = p1Cells[parseInt(shipLocationNumber) + 3]
      shipLocation.classList.toggle('battleship')
      shipLocation2.classList.toggle('battleship')
      shipLocation3.classList.toggle('battleship')
      shipLocation4.classList.toggle('battleship')
      ship1.classList.toggle('selected')
    }

    if (ship2.classList.contains('selected')){
      const shipLocation2 = p1Cells[parseInt(shipLocationNumber) + 1]
      const shipLocation3 = p1Cells[parseInt(shipLocationNumber) + 2]
      const shipLocation4 = p1Cells[parseInt(shipLocationNumber) + 3]
      shipLocation.classList.toggle('battleship')
      shipLocation2.classList.toggle('battleship')
      shipLocation3.classList.toggle('battleship')
      ship2.classList.toggle('selected')
    }
  
    if (ship3.classList.contains('selected')){
      const shipLocation2 = p1Cells[parseInt(shipLocationNumber) + 1]
      const shipLocation3 = p1Cells[parseInt(shipLocationNumber) + 2]
      const shipLocation4 = p1Cells[parseInt(shipLocationNumber) + 3]
      shipLocation.classList.toggle('battleship')
      shipLocation2.classList.toggle('battleship')
      shipLocation3.classList.toggle('battleship')
      ship3.classList.toggle('selected')
    }
  
    
    

  }

  
  
//? If 

//? Event 
  
  playersGrid.addEventListener('click',placeOnBoard)
  hangar.addEventListener('click', selectShip)
  computersGrid.addEventListener('click', targetSelector)


}
  









window.addEventListener('DOMContentLoaded', init)
