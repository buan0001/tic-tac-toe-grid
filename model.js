export { init, writeToCell, readFromCell, dump };

const grid =[[],[],[]]
// const grid =[[1,2,3],[4,5,6],[7,8,9]]

function init() {
  console.log("Model is running");
}

function writeToCell( row, col, value ) {
  console.log("writing to cell");
  grid[row][col] = value
}

function readFromCell(row, col) {
    return grid[row][col]
}

function dump() {
    console.log("Grid:",grid);
    
}
