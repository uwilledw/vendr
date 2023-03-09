import { appState } from "../AppState.js";
import { Drink } from "../Models/Drink.js";


class DrinksService {


    dispense(drinkName) {
        let foundDrink = appState.drinks.find(f => f.name == drinkName)
        console.log(foundDrink)
        if (foundDrink.price < appState.dollars) {
            appState.dollars -= foundDrink.price
            console.log('found drink', appState.dollars)
        }
    }
}



export const drinksService = new DrinksService