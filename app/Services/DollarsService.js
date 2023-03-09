import { appState } from "../AppState.js";


class DollarsService {
    addDollar() {
        appState.dollars += .25
        console.log(appState.dollars);
    }
}

export const dollarsService = new DollarsService()