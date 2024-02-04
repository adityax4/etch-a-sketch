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

let gridSize=16;

btn.addEventListener('click', ()=>{
    gridSize= prompt("Enter Grid Size (1-100): ");
    if(gridSize>=1 && gridSize<=100){
        createGrid(parseInt(gridSize, 10));
    }
    else{
        alert("Invalid Range!");
    }
    
})

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = "";
    // Make Grid (create divs)
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
