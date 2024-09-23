export { init, writeToCell, readFromCell, dump,scanForNeighbours };

// const grid =[[],[],[""]]
// const grid =[[0,0,0],[0,0,0],[0,0,0]]
const grid =[[1,2,3],[4,5,6],[7,8,9]]

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


function scanForNeighbours(cellRow, cellCol){
    let neighbours = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            // console.log("Row: " + x + " col: " + y  + " Val: "+ grid[cellRow+x][cellCol+y]);            
            if (!(x == 0 && y == 0)){
                const tempVal =readFromCell(cellRow - x, cellCol -y)
                console.log("Temp val:",tempVal);
                
                if (tempVal) neighbours++;
            }
        }
        
    }
    console.log("neighbours:", neighbours);
    
}

function liveOrDie(neighbours){
    if (neighbours < 2 || neighbours > 3){
        // tile = 0
    }
    else if (neighbours == 3) {
        // tile = 1
    }
    // do nothing
}