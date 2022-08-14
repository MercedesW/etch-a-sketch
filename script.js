
/* 1. agregar al container una cuadrícula de 16x16 cuadrados */
const gridDefault = 16;
const container = document.querySelector('#container');

function gridGenerator(gridLength = gridDefault) {
    console.log(gridLength)
    let cells = gridLength * gridLength
    let gridElem = document.getElementById('grid');
    
    if (gridElem != null) {
        gridElem.remove();
    }

    gridElem = document.createElement('div');
    gridElem.setAttribute('id','grid');
    gridElem.style.gridTemplateColumns = "repeat(" + gridLength + ", 1fr)";
    gridElem.style.gridTemplateRows = "repeat(" + gridLength + ", 1fr)";
    container.appendChild(gridElem);

    for (let i=0; i < cells; i++) {
        const elem = document.createElement('div');
        elem.classList.add('celda');
        gridElem.appendChild(elem);
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = 'red';
        })
    }
}
/* Me gustaría hacer un Range input, hay que ver como tomar el valor actual */
const cells = document.getElementById('number-cells');
/* console.log(cells.getAttribute('value')) */
cells.addEventListener('click', () => {
    result = window.prompt('Ingresar la cantidad de celdas de alto de la grilla');
    let amountGrid = result;
    gridGenerator(amountGrid);
})

gridGenerator();


// TODO:
