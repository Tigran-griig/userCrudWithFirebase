import { combineReducers } from 'redux';

const reducers: any[] = [
  "user",
  "customer",
]

export default combineReducers(
  reducers.reduce((initial, name: string) => {
    if (name) {
      initial[name] = require(`./${name}`).default
    }
    return initial
  }, {})
)
