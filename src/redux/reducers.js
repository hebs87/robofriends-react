import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

// Initial state for the searchRobots reducer
const initialStateSearch = {
  searchField: '',
}

// Reducer - takes initialState as state and an empty object as the action - this
// will be the action defined in actions.js
export const searchRobots = (state= initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // Assign a new state that has the current state, along with the state that we set the new value for
      // Can also be done as {...state, searchField: action.payload}
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

// Initial state for the requestRobots reducer
const initialStateRobots = {
  robots: [],
  error: '',
  isPending: false
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false});
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state;
  }
}
