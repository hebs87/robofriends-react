import {searchRobots, requestRobots} from './reducers';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
})
