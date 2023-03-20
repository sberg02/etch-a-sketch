//For loop to create 16 divs
for (let i = 0; i < 256; i++) {
createGrid();
}


//Listens for hover and changes div to black
const hoverDiv = document.querySelector('#grid-container');
hoverDiv.addEventListener('mouseover', (e) => {
    e.target.style.background = 'black';
});

//Make button run sizeChange function when clicked
//Not ready to finish this button yet
const changeButton = document.querySelector('#size-btn');
changeButton.addEventListener('click', sizeChange)    

//Function to create a div, apply styles, and append to grid container.
function createGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const createDiv = document.createElement('div');
    gridContainer.appendChild(createDiv);
    createDiv.classList.add('grid-divs');
}
//Function to change grid size based on user input
//Need to find a way to remove current grid
function sizeChange () {
    const userInput = prompt('Please enter a grid size up to 100: ');
    const selectGrid = document.getElementById('grid-container');
    //For whatever reason this works and removeChild does not
    selectGrid.innerHTML = '';
    for (let i = 0; i < (userInput * userInput); i++) {
        if (userInput >= 1 && userInput <= 100) {
            createGrid();
            selectGrid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
            selectGrid.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        }
        //Fix this!
        else if (!isNaN(userInput)) {
            alert('Not a number!');
            return;
        }
        else if (userInput < 1 || userInput > 100) {
            alert('Number must be between 1-100')
            return;
        }
        else {
            return
        }
    }
}

//Add button to refresh page like RPS game. Also fix container dimensions.

