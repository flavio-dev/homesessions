import { combineReducers } from 'redux-immutable'
import appReducers from 'app/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducers,
    ...asyncReducers
  })
}
