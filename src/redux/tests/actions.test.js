import * as actions from '../actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
} from '../constants';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// Configure a mockStore to enable testing dispatch actions
const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField test suite', () => {
  it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots test suite', () => {
  it('handles requesting robots API', () => {
    // Instantiate the mockStore and dispatch the action
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    // Get all actions within the action as an array
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    // Test that the first action in the action array (REQUEST_ROBOTS_PENDING) returns the expected action
    expect(action[0]).toEqual(expectedAction);
  });
});
