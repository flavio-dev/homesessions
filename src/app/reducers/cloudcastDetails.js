import { SET_CLOUDCAST_DETAILS } from '../actions'
import slugToKey from 'utils/slugToKey'

const initialState = {}
export const setCloudcastDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_DETAILS:
      let newState = { ...state }
      newState[action.index.toString()] = null
      newState[slugToKey(action.details.slug)] = action.details
      return newState
    default:
      return state
  }
}

export default setCloudcastDetailsReducer
