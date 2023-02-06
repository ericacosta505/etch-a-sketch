
//This is where the initial grid is made
const grid = document.querySelector('.grid')
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('grid-square')
    div.style.width = '32px'
    div.style.height = '32px'
    grid.appendChild(div)
}

//Allows initial grid to be drawn on
const gridsquare = document.querySelectorAll('.grid-square')
for (let i = 0; i < gridsquare.length; i++) {
    gridsquare[i].addEventListener('mouseover', () => {
        gridsquare[i].style.backgroundColor = 'red'
    })
}

//In the case users want to change the size of the grid, they can
//click the 'grid size' button and enter a new size
const gridsize = document.querySelector('.grid-size')
gridsize.addEventListener('click', () => {
    deleteGrid()

    let size = prompt('Enter a grid size between 10 and 100')

    if ((size < 10) || (size > 100)) {
        alert('The size entered does not follow the specified parameters. Please enter a number between 10 and 100.')
    }

    makeGrid(size)

    //Allows user to draw on the new grid
    const gridsquare = document.querySelectorAll('.grid-square')
    for (let i = 0; i < gridsquare.length; i++) {
        gridsquare[i].addEventListener('mouseover', () => {
            gridsquare[i].style.backgroundColor = 'red'
        })
    }
})

//Allows user to change the number of squares in the grid while retaining the initial grid size
function makeGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div')
        div.classList.add('grid-square')
        div.style.width = `${512 / num}px`
        div.style.height = `${512 / num}px`
        grid.appendChild(div)
    }
}

//This function is called to clear the divs that make up the grid. Called whenver its time to make a new grids
function deleteGrid() {
    const square = document.querySelectorAll('.grid-square')
    for (let i = 0; i < square.length; i++) {
        square[i].remove()
    }
}