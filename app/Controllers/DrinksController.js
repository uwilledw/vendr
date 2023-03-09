import { appState } from "../AppState.js";
import { drinksService } from "../Services/DrinksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawDrinks() {
    console.log('drawing drinks');
    let drinks = appState.drinks
    let template = ''
    drinks.forEach(d => template += d.ListTemplate)
    console.log(template);
    setHTML('drinks', template)
}



export class DrinksController {
    constructor() {

        console.log('controller')
        _drawDrinks()
    }

    dispense(drinkName) {
        console.log('dispensing');
        drinksService.dispense(drinkName)
        console.log('drinkName', drinkName)

    }
}

