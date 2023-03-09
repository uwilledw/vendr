import { appState } from "../AppState.js"


export class Drink {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }




    get ListTemplate() {
        return `
        <div class="col-3 text-center">
          <h3>${this.name}</h3>
          <h4>$${this.price}</h4>
          <div>
            <img onclick="app.drinksController.dispense('${this.name}')" class="drink-img rounded"
              src="${this.imgUrl}"
              alt="">
          </div>
        </div>`
    }
}

