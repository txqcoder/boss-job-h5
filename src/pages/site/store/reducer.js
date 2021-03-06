import * as actionTypes from './const'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  name:'react hooks的示例'
})
export default (state=defaultState,action) => {
  switch (action.type) {
    case actionTypes.GET_NAME:
      return state.set('name', action.data)
    default:
      return state
  }
}
