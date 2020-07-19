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

  //? There is a hanger on the right of your grid - where your pieces start and you click where you want them to go on your grid
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



 

  





}


window.addEventListener('DOMContentLoaded', init)
