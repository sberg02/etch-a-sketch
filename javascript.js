const gridContainer = document.querySelector('#grid-container');
//For loop to create 16 divs
for (let i = 0; i < 256; i++) {
createGrid();
}


//Listens for hover and changes div to black
gridContainer.addEventListener('mouseover', (e) => {
    e.target.style.background = 'black';
});

//Make button run sizeChange function when clicked
const changeButton = document.querySelector('#size-btn');
changeButton.addEventListener('click', sizeChange);    

//Make clear function to clear the grid
const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clearGrid);

//Function to create a div, apply styles, and append to grid container.
function createGrid() {
    const createDiv = document.createElement('div');
    gridContainer.appendChild(createDiv);
    createDiv.classList.add('grid-divs');
}
//Function to change grid size based on user input
function sizeChange () {
    const userInput = prompt('Please enter a grid size up to 100: ');
        if (userInput >= 1 && userInput <= 100) {
            gridContainer.innerHTML = '';
            for (let i = 0; i < (userInput * userInput); i++)
            createGrid();
            gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        }
        else if (isNaN(userInput)) {
            alert('That\'s not a number! Please enter an number between 1 and 100.');
            return
        }
        else {
            alert('Invalid input! Please enter a number between 1 and 100.');
            return
        }
    }


function clearGrid () {
    const selectDivs = document.getElementsByClassName('grid-divs');
for (let i = 0; i < selectDivs.length; i++) {
  selectDivs[i].style.backgroundColor = 'white';
}
}

//Add button to refresh page like RPS game. Also fix container dimensions.

