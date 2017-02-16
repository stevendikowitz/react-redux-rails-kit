// import Immutable from 'immutable'
import * as types from './constants'
import initialState from './initialState'

export function reducer (state = initialState, action) {
  switch (action.type) {
    case types.TEST_CONSTANT:

      break
    case types.RECEIVE_ERROR:

      break
    default:
  }

  return state
}