//For loop to create 16 divs
for (let i = 0; i < 256; i++) {
createGrid();
}

//Function to create a div, apply styles, and append to grid container.
function createGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const createDiv = document.createElement('div');
    gridContainer.appendChild(createDiv);
    createDiv.classList.add('grid-divs');
    //Need a return statment?
}
//Listens for hover and changes div to black
const hoverDiv = document.querySelector('div');
hoverDiv.addEventListener('mouseover', (e) => {
    e.target.style.background = 'black';
});


//Add button to refresh page like RPS game. Also fix container dimensions.

