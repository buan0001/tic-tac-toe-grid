export { init, updateView };
import { cellClicked } from "./controller.js";

const allCells = document.querySelectorAll(".cell");

function init(model) {
  console.log("View initted");

  allCells.forEach(cell => cell.addEventListener("click", clickCell));

  updateView(model);
}

function clickCell(event) {
  console.log("event:", event.target.dataset);
  // const [xcoord, ycoord] = event.target.dataset;
  const column = event.target.dataset["col"];
  const row = event.target.dataset["row"];
  // console.log("y coord:", column);
  // console.log("x coord:", row);
  console.log(`coordinates: (${row}, ${column})`);

  cellClicked(row, column);
}

function updateView(model) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let cellContent = model.readFromCell(row, col);
      if (cellContent == 0) {
        cellContent = "";
      } else if (cellContent == 1) {
        cellContent = "X";
      } else {
        cellContent = "O";
      }
      //   console.log("cell content:", cellContent);

      //   console.log(`coordinates: (${row}, ${col}). Content = ${cellContent}`);
      //   const tile = document.querySelector(`[data-row=0] [data-col=0]`)
      const tile = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      //   console.log("Tile:", tile);
      tile.textContent = cellContent;
    }
  }

  // allCells.forEach(cell => {
  //     const column = cell.dataset["col"]
  //     const row = cell.dataset["row"]
  //     const content = model.readFromCell(column, row)
  //     cell.innerHTML = content;
  // })
}
