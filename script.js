
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

const range = document.getElementById('myRange');
const output = document.getElementById('range-value');
range.oninput = function() {
    output.textContent = this.value;
    gridGenerator(this.value);
}

gridGenerator();
