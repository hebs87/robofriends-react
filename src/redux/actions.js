import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// This action is a higher order function - it's an anonymous function that return another function which takes
// dispatch as a parameter, which then allows us to use that when dispatching our action
export const requestRobots = () => dispatch => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    }));
}
