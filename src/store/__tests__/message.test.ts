/**
 * See https://redux.js.org/usage/writing-tests
 */

import {getOpenChannelMessageList} from '@/services';
import reducer, {initialState} from '../messages';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: ''})).toEqual(initialState);
});

test('should set status loading when get Messages is pending ', () => {
  const action = {type: getOpenChannelMessageList.pending.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({...initialState, status: 'loading'});
});

test('should set status failed when get Messages is rejected ', () => {
  const action = {type: getOpenChannelMessageList.rejected.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    status: 'failed',
    error: 'Something went wrong',
  });
});

test('should set status succeeded when get Messages is fulfilled ', () => {
  const action = {
    type: getOpenChannelMessageList.fulfilled.type,
    payload: [{channel: 'Hamdi'}],
  };
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    status: 'succeeded',
    error: '',
    messages: [{channel: 'Hamdi'}],
  });
});
