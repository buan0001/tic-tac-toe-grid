export { init, writeToCell, readFromCell, dump };

// const grid =[[],[],[""]]
const grid =[[0,0,0],[0,0,0],[0,0,0]]
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

    console.table(grid)
    // console.log("Grid:",grid);
    // grid.ever
    // for (const row of grid) {
    //     console.log(row);
        
    // }
}
