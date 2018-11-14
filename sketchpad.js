const container = document.getElementById("container");

let windowPixelSize = 750;

createGrid(25);

function createGrid(gridSize) {
    console.log(gridSize);
    let boxSize = windowPixelSize / gridSize;
    for (horizontalIndex = 0; horizontalIndex < gridSize; ++horizontalIndex) {
        console.log(horizontalIndex);
        let horizontalDiv = document.createElement("div");
        horizontalDiv.style.setProperty('width', windowPixelSize);
        horizontalDiv.style.setProperty('height', boxSize + 'px');
        horizontalDiv.classList.add("horizontal");
        container.appendChild(horizontalDiv);

        for (verticalIndex = 0; verticalIndex < gridSize; ++verticalIndex) {

            let verticalDiv = document.createElement("div");
            verticalDiv.style.setProperty('width', boxSize + 'px');
            verticalDiv.style.setProperty('height', boxSize + 'px');
            verticalDiv.style.setProperty('background-color', 'blue');
            verticalDiv.style.setProperty('display', 'inline-block');
            verticalDiv.classList.add("vertical");
            verticalDiv.addEventListener('mouseenter', (e) => {
                changeColor(verticalDiv);
            });
            horizontalDiv.appendChild(verticalDiv);
            console.log(horizontalIndex.toString + " " + verticalIndex.toString);

        }
    }
}

function changeColor(objectToChange) {
    objectToChange.style.setProperty('background-color', 'black');
}

// on hover change color