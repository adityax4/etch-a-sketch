const container = document.querySelector(".container");
const btn = document.querySelector(".makeGrid");
const reset = document.querySelector(".reset");

reset.addEventListener('click', ()=>{
    document.querySelectorAll(".item").forEach(item => {
        item.style.backgroundColor = 'white';
    });
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let gridSize=20;

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

            item.addEventListener('mouseover', ()=>{
                item.style.backgroundColor=getRandomColor();
            });
        }
    }
}

createGrid(gridSize);