
import { Drink } from "./Models/Drink.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  values = loadState('values', [Value])

  /** @type {import('./Models/Drink').Drink[]} */

  drinks = [
    new Drink({ name: 'redbull', price: 4, imgUrl: 'https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkYnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }),
    new Drink({ name: 'gatorade', price: 2, imgUrl: 'https://th.bing.com/th/id/R.6d1d8304a7049254ebd6052167774ca5?rik=L9%2fMvThyZ32%2fAg&pid=ImgRaw&r=0' }),
    new Drink({ name: 'water', price: 1, imgUrl: 'https://th.bing.com/th/id/OIP.AWvLBzioCGFcx2wBftSpwAHaHa?pid=ImgDet&rs=1' })
  ]


  dollars = 0


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
