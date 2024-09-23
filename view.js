export {init}

function init() {
    console.log("View initted");
    

    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => cell.addEventListener("click", clickCell))
}

function clickCell(event) {
    console.log("event:",event.target.dataset);
    // const [xcoord, ycoord] = event.target.dataset;
    const column = event.target.dataset["col"]
    const row = event.target.dataset["row"]
    // console.log("y coord:", column);
    // console.log("x coord:", row);
    console.log(`coordinates: (${row}, ${column})`);
    
    
    
}