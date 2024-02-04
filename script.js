const container = document.querySelector(".container");

for (let i = 1; i <= 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 1; j <= 4; j++) {
        const item = document.createElement("div");
        item.classList.add("item");
        row.appendChild(item);
    }
}