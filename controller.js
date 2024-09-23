import * as view from "./view.js"
import * as model from "./model.js"
start();

function start() {
    console.log("init");
    view.init()
    model.init()

    window.model = model
    window.view = view;
}