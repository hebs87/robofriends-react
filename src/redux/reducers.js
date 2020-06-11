import {CHANGE_SEARCH_FIELD} from "./constants";

// Initial state
const initialState = {
  searchField: '',
}

// Reducer - takes initialState as state and an empty object as the action - this
// will be the action defined in actions.js
export const searchRobots = (state=initialState, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // Assign a new state that has the current state, along with the state that we set the new value for
      // Can also be done as {...state, searchField: action.payload}
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;
  }
}
