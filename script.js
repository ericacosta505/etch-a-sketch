
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
function draw() {
    const gridsquare = document.querySelectorAll('.grid-square')
    for (let i = 0; i < gridsquare.length; i++) {
        gridsquare[i].addEventListener('mouseover', () => {
            gridsquare[i].style.backgroundColor = 'black'
        })
    }
}

draw()

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
    draw()
})


//Handles clearing the canvas on button click
const clear = document.querySelector('.clear-canvas')
clear.addEventListener('click', () => {
    const gridsquare = document.querySelectorAll('.grid-square')
    for (let i = 0; i < gridsquare.length; i++) {
        gridsquare[i].style.backgroundColor = 'white'
    }
})

//Handles changing the pen color to black when button is clicked
const black = document.querySelector('.black-pen')
black.addEventListener('click', () => {
    const gridsquare = document.querySelectorAll('.grid-square')
    for (let i = 0; i < gridsquare.length; i++) {
        gridsquare[i].addEventListener('mouseover', () => {
            gridsquare[i].style.backgroundColor = 'black'
        })
    }
})

//Handles changing the pen color to rainbow when button is clicked
const rainbow = document.querySelector('.rainbow-pen')
rainbow.addEventListener('click', () => {
    const gridsquare = document.querySelectorAll('.grid-square')
    for (let i = 0; i < gridsquare.length; i++) {
        gridsquare[i].addEventListener('mouseover', () => {

            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            gridsquare[i].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
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