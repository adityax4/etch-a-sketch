const container = document.querySelector(".container");
const btn = document.querySelector(".makeGrid");

let gridSize=10;

btn.addEventListener('click', ()=>{
    gridSize= prompt("Enter grid size: ");
    createGrid(parseInt(gridSize, 10));
})

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = "";

    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 1; j <= size; j++) {
            const item = document.createElement("div");
            item.classList.add("item");
            row.appendChild(item);
        }
    }
}

createGrid(gridSize);