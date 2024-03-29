
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'bisque';
const COLOR_HOVER = '#e66465';
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let colorHover = COLOR_HOVER;
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

function changeColor() {
    if (currentMode === 'color') {
        this.style.backgroundColor = colorHover;
    } else if (currentMode === 'rainbow') {
        this.style.backgroundColor = generateColor();
    } else if (currentMode === 'eraser') {
        this.style.backgroundColor = currentColor;
    } else if (currentMode === 'grayScale') {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        this.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(currentOpacity + 0.1, 1)})`;
    } else if (currentMode === 'warm') {
        this.style.backgroundColor = generateColor('warm', ['#BF6A6D', '#A45256', '#EC6760', '#F88C5D', '#FDCF6D']);
    }
    else if (currentMode === 'cold') {
        this.style.backgroundColor = generateColor('cold', ['#5590BC', '#0DABB8', '#01F0F6', '#1FFDE1', '#57FFC8']);
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

/* Warm colors */
const warmBtn = document.getElementById('warmBtn');
warmBtn.addEventListener('click', () => {
    currentMode = 'warm';
    changeColor;
})

/* Cold colors */
const coldBtn = document.getElementById('coldBtn');
coldBtn.addEventListener('click', () => {
    currentMode = 'cold';
    changeColor;
})

/* Grey scale */
const grayScaleBtn = document.getElementById('grayScaleBtn');
grayScaleBtn.addEventListener('click', () => {
    currentMode = 'grayScale';
    changeColor;
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
function generateColor(name, colors) {
    let randomColors;
    if (name === 'warm' || name === 'cold') {
        randomColors = colors[Math.floor(Math.random() * colors.length)];
    } else {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        randomColors = `rgb(${r},${g},${b})`;
    }
    return randomColors;
}
