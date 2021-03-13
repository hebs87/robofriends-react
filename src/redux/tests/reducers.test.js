import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import {setSearchField, requestRobots} from '../actions'

import * as reducers from '../reducers';

describe('searchRobots reducer test suite', () => {
  const initialState = {
    searchField: '',
  };

  it('should return the initial state', () => {
    // Test case where state is undefined and no action
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    // Test the setSearchField action - the searchField should equal the input text (action payload)
    expect(reducers.searchRobots(initialState, setSearchField('abc'))).toEqual({searchField: 'abc'});
  });
});
