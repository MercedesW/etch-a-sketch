
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'bisque';
const COLOR_HOVER = '#e66465';
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let colorHover = COLOR_HOVER;
let colorLightness = 0;
let currentMode = DEFAULT_MODE;

const container = document.querySelector('#container');


/* Grid size */
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
sizeSlider.oninput = function() {
    sizeValue.textContent = this.value;
    createGrid(this.value);
}

function createGrid(size = DEFAULT_SIZE) {
    let gridSize = size * size
    let grid = document.getElementById('grid');
    
    if (grid != null) {
        grid.remove();
    }

    grid = document.createElement('div');
    grid.setAttribute('id','grid');
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    container.appendChild(grid);

    for (let i=0; i < gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseenter', changeColor)
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (currentMode === 'color') {
        e.target.style.backgroundColor = colorHover;
    } else if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = generateColor();
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = currentColor;
    }
}

/* Clear */
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    const elements = document.querySelectorAll('.grid-element');
    elements.forEach((e) => {
        e.style.backgroundColor = currentColor;
    })
})

/* Eraser */
const eraserBtn = document.getElementById('eraserBtn');
eraserBtn.addEventListener('click', () => {
    currentMode = 'eraser';
    changeColor;
})

/* Rainbow colors */
const rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
    changeColor;
})

/* Opacity : No tiene en cuenta el color de cada celda */
/* hay que hacer una clase, para poder usar el this para cada celda */
const opacityBtn = document.getElementById('opacity');
opacityBtn.addEventListener('click', () => {
    const elements = document.querySelectorAll('.grid-element');
    elements.forEach((e) => {
        e.addEventListener('mouseenter', () => {
            colorHover = `hsl(0, 0%, ${Math.min(colorLightness, 100)}%)`;
            colorLightness += 5;
        })
    })
})

/* Color Picker */
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', () => {
    currentMode = 'color';
    colorHover = colorPicker.value;
    changeColor;
})

createGrid();

/* Utility functions */
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
/* el primer cuadrado que pinta, siempre es del color original, el cambio lo hace en el segundo */
