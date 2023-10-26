var changeWidth = document.querySelector('.width');
changeWidth.addEventListener('click', () => { widthPrompt() });

var rgbSwitch = document.querySelector('.RGB');
rgbSwitch.addEventListener('click', () => { randomRGB() });

var eraser = document.querySelector('.erase');
eraser.addEventListener('click', () => { erase() });

var black = document.querySelector('.black');
black.addEventListener('click', () => { blackPen() });

var reset = document.querySelector('.reset');
reset.addEventListener('click', () => {resetCanvas()})

var rgbMode = false;
var eraseMode = false;
var blackMode = true;
const GRID_DEFAULT = 16;
var gridSize = undefined;



function defaultCanvas() {

    const container = document.querySelector('.container');
    container.textContent = '';

    for (var i = 0; i < GRID_DEFAULT; i++) {
        const row = document.createElement('div');
        for (var j = 0; j < GRID_DEFAULT; j++) {
            const div = document.createElement('div');
            div.classList.add('squares');
            row.appendChild(div);

        }
        container.appendChild(row);





    }

    return document.querySelectorAll('.squares');




}

var squares = defaultCanvas();





function widthPrompt() {
    const container = document.querySelector('.container');
    container.textContent = '';


    while (!(width > 0) || !(width <= 100) || width == undefined) {
        var width = +prompt("Enter the n number of squares to fill the n x n grid!");
    }



    for (var i = 0; i < width; i++) {
        const row = document.createElement('div');
        for (var j = 0; j < width; j++) {
            const div = document.createElement('div');
            div.classList.add('squares');
            var newSize = +(16 / width) * 50;
            div.style.width = `${newSize}px`;
            div.style.height = `${newSize}px`;
            row.appendChild(div);

        }
        container.appendChild(row);




    }
    gridSize = document.querySelectorAll('.squares');
    blackPen();
}

function draw() {
    if (blackMode == true && rgbMode == false && eraseMode == false) {
        blackPen();

    }
    else if (blackMode == false && eraseMode == false && rgbMode == true) {
        randomRGB();
    }
    else if (blackMode == false && rgbMode == false && eraseMode == true) {
        erase();
    }
}






function blackPen() {

    rgbMode = false;
    eraseMode = false;
    blackMode = true;

    if (gridSize == undefined) {
        squares.forEach((square) => {

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = "black";
            });
        })
    }
    else {
        gridSize.forEach((square) => {
            square.addEventListener('mouseover', () => {

                square.style.backgroundColor = "black";
            });
        }
        )
    }

}







function randomRGB() {

    blackMode = false;
    eraseMode = false;
    rgbMode = true;


    if (gridSize == undefined) {

        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {

                var random = Math.floor(Math.random() * 16777215).toString(16);

                square.style.backgroundColor = `#${random}`;
            });
        }
        )
    }
    else {
        gridSize.forEach((square) => {
            square.addEventListener('mouseover', () => {

                var random = Math.floor(Math.random() * 16777215).toString(16);

                square.style.backgroundColor = `#${random}`;
            });
        }
        )
    }




}



function erase() {

    blackMode = false;
    rgbMode = false;
    eraseMode = true;

    if (gridSize == undefined) {
        squares.forEach((square) => {

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = "white";
            });
        })
    }
    else {
        gridSize.forEach((square) => {
            square.addEventListener('mouseover', () => {

                square.style.backgroundColor = "white";
            });
        }
        )
    }
}

function resetCanvas (){
    if (gridSize == undefined){
        squares.forEach((square) => {
            square.style.backgroundColor="white";
        })
    }
    else{
        gridSize.forEach((square) => {
            square.style.backgroundColor="white";
        })
    }
    blackPen();
}

draw();








