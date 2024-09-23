import * as view from "./view.js"
import * as model from "./model.js"
export {setCell as cellClicked}
start();

let currentPlayer = 1;
// let currentPlayer = "X";

function start() {
    console.log("init");
    model.init()
    view.init(model)

    window.model = model
    window.view = view;
}

function setCell(row, col){
    console.log("Current player:", currentPlayer);
    model.writeToCell(row, col, currentPlayer)
    model.dump()
    switchPlayer()
    console.log("Current player:", currentPlayer);
    updateView()
    
}

function switchPlayer(){
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    // currentPlayer = currentPlayer == "X" ? "O" : "X";
}

function updateView(){
    view.updateView(model)
}