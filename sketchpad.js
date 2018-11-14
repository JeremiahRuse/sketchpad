const container = document.getElementById("container");

createGrid(15);

function createGrid(gridSize) {
    console.log(gridSize);
    let boxSize = 500 / gridSize;
    for (horizontalIndex = 0; horizontalIndex < gridSize; ++horizontalIndex) {
        console.log(horizontalIndex);
        let horizontalDiv = document.createElement("div");
        horizontalDiv.style.setProperty('width', '500px');
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
            horizontalDiv.appendChild(verticalDiv);
            console.log(horizontalIndex.toString + " " + verticalIndex.toString);

        }
    }
}

function changeColor(objectToChange) {
    
}

// on hover change color