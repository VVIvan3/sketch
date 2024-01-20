let currentMode = 1;

const sketchBox = document.querySelector('#sketchBox');
const gridBtn = document.querySelector('#grids');
const gridText = document.querySelector('#gridText');
const modeBtns = document.querySelectorAll('.modeBtn');
gridBtn.addEventListener('click', getGridNumber);


function getGridNumber() {
    const gridNumber = +prompt('Enter grid number (MAX - 100)')
    resetGrid()
    if (gridNumber < 1 || gridNumber > 100 || !Number.isInteger(gridNumber)) {
        alert('Invalid number. try again');
        getGridNumber();
    } else {
        generateGrid(gridNumber);
        gridText.textContent = `Current grid number: ${gridNumber}x${gridNumber}`;
    }
}

modeBtns.forEach((modeBtn) => {
    modeBtn.addEventListener('click', (event) => {
        switch (event.target.id) {
            case 'normalMode':
                currentMode = 1;
                break;
            case 'randomMode':
                currentMode = 2;
                break;
            case 'none':
                currentMode = 0;
                break
        }
    });
});

function generateGrid(number) {
    for (let i = 1; i <= number; i++) {
        const container = document.createElement('div');
        container.setAttribute('class', 'gridContainer');
        for (let n = 1; n <= number; n++) {
            const box = document.createElement('div');
            box.addEventListener('mouseover', () => {
                if (currentMode === 1) {
                    box.style.backgroundColor = 'rgb(255, 255, 255)';
                } else if (currentMode === 2) {
                    box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
                }
            });
            box.setAttribute('class', 'gridBox');
            container.appendChild(box);
        }
        sketchBox.appendChild(container);
    }
}

function resetGrid() {
    const gridContainers = document.querySelectorAll('.gridContainer');
    gridContainers.forEach((container) => {
        sketchBox.removeChild(container);
    });
}

function random() {
    return Math.floor(Math.random() * 255)
}