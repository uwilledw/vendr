import { DollarsController } from "./Controllers/DollarsController.js";
import { DrinksController } from "./Controllers/DrinksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  drinksController = new DrinksController()

  dollarsController = new DollarsController()
}

window["app"] = new App();
