
/* 1. agregar al container una cuadrícula de 16x16 cuadrados */
let amountGrid = 16;
let grid = amountGrid * amountGrid;
const container = document.querySelector('#container');

for (let i=0; i < grid; i++) {
    const elem = document.createElement('div');
    elem.classList.add('celda');
    container.appendChild(elem);
    /* elem.style.backgroundColor = 'red' */
    elem.addEventListener('mouseenter', () => {
        elem.style.backgroundColor = 'red';
    })
}

/* Me gustaría hacer un Range input, hay que ver como tomar el valor actual */
const cells = document.getElementById('number-cells');
console.log(cells.getAttribute('value'))
cells.addEventListener('click', () => {
    result = window.prompt('Ingresar la cantidad de celdas de alto de la grilla');
    amountGrid = result;
    console.log(result)
    console.log(amountGrid)
})

/* Agregue un botón en la parte superior de la pantalla que enviará al usuario una ventana emergente
que le preguntará la cantidad de cuadrados por lado para la nueva cuadrícula. */

// TODO:
/* Una vez ingresada, la cuadrícula existente debe eliminarse y debe generarse una nueva cuadrícula */
/* Debe generarse en el mismo espacio total que antes (por ejemplo, 960 px de ancho) para que tenga un nuevo bloc de dibujo. */