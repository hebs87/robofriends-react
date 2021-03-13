import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import {setSearchField} from '../actions'

import * as reducers from '../reducers';

describe('searchRobots reducer test suite', () => {
  const initialState = {
    searchField: '',
  };

  it('should return the initial state', () => {
    // Test case where state is undefined and no action
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    // Test the setSearchField action - the searchField should equal the input text (action payload)
    expect(reducers.searchRobots(initialState, setSearchField('abc'))).toEqual({searchField: 'abc'});
  });
});

describe('requestRobots reducer test suite', () => {
  const initialStateRobots = {
    robots: [],
    error: '',
    isPending: false
  }

  it('should return the initial state', () => {
    // Test case where state is undefined and no action
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    // REQUEST_ROBOTS_PENDING action should set isPending to true
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({
      ...initialStateRobots,
      isPending: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    // REQUEST_ROBOTS_SUCCESS action should set robots to payload value and isPending to false
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 123,
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({
      ...initialStateRobots,
      robots: [{
        id: 123,
        name: 'test',
        email: 'test@gmail.com'
      }],
      isPending: false
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    // REQUEST_ROBOTS_FAILED action should set error to true and isPending to false
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOOOOOOO!!!!'
    })).toEqual({
      ...initialStateRobots,
      error: 'NOOOOOOO!!!!',
      isPending: false
    });
  });
});
