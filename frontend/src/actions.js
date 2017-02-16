import * as types from './constants'
import $ from 'jquery'
const __DEV__ = process.env.NODE_ENV === 'development'

export function receiveError (data) {
  if (__DEV__) {
    console.debug('[ACTION] receiveError', data)  // eslint-disable-line
  }

  return {
    type: types.RECEIVE_ERROR,
    data
  }
}

export function createAction (data) {
  return (dispatch, getState) => {
    $.ajax({
      type: 'POST',
      url: '/api/...',
      dataType: 'json',
      data,
      success: (data) => {
        // dispatch(action(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}

export function fetchLocalAction () {
  return (dispatch, getState) => {
    // dispatch(requestAction())

    $.ajax({
      type: 'GET',
      url: '/api/...',
      dataType: 'json',
      success: (data) => {
        // dispatch(action(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}