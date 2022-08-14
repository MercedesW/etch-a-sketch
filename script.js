
const gridDefault = 16;
const container = document.querySelector('#container');

let celda = {
    colorBase: 'bisque',
    colorHover: 'red',
    colorLightness: 0
}

function gridGenerator(gridLength = gridDefault) {
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
            elem.style.backgroundColor = celda.colorHover;
        })
    }
}

/* Range */
const range = document.getElementById('myRange');
const output = document.getElementById('range-value');
range.oninput = function() {
    output.textContent = this.value;
    gridGenerator(this.value);
}

/* Reset */
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    const celdas = document.querySelectorAll('.celda');
    celdas.forEach((e) => {
        e.style.backgroundColor = celda.colorBase;
    })
})

/* Random colors */
const randonButtom = document.getElementById('random-colors');
randonButtom.addEventListener('click', () => {
    const celdas = document.querySelectorAll('.celda');
    celdas.forEach((e) => {
        e.addEventListener('mouseenter', () => {
            celda.colorHover = generateColor();
        })
    })
})

/* Opacity : No tiene en cuenta el color de cada celda */
/* hay que hacer una clase, para poder usar el this para cada celda */
const opacityButtom = document.getElementById('opacity');
opacityButtom.addEventListener('click', () => {
    const celdas = document.querySelectorAll('.celda');
    celdas.forEach((e) => {
        e.addEventListener('mouseenter', () => {
            celda.colorHover = `hsl(0, 0%, ${Math.min(celda.colorLightness, 100)}%)`;
            celda.colorLightness += 5;
            console.log()
        })
    })
})

gridGenerator();

function generateColor() {
    /* En Hexa: let color = Math.floor(Math.random()*16777215).toString(16) */
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}

// TODO:
/* aumentar la intencidad del gris con multiples pasadas, hasta llegar a negro */
/* pintar con color elegido */
/* revisar nombres */