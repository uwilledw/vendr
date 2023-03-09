import { appState } from "../AppState.js";
import { dollarsService } from "../Services/DollarsService.js";
import { setText } from "../Utils/Writer.js";


function _drawDollar() {
    console.log('draw dollar');
    setText('dollars', appState.dollars.toFixed(2))
}


export class DollarsController {

    constructor() {
        console.log('dollars controller');
        appState.on('dollars', _drawDollar)
    }


    addDollar() {
        console.log('adding .25');
        dollarsService.addDollar()
    }

}