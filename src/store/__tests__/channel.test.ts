/**
 * See https://redux.js.org/usage/writing-tests
 */

import {getGroupChannelList} from '@/services';
import reducer, {initialState} from '../channels';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: ''})).toEqual(initialState);
});

test('should set status loading when get Channel is pending ', () => {
  const action = {type: getGroupChannelList.pending.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({...initialState, status: 'loading'});
});

test('should set status failed when get Channel is rejected ', () => {
  const action = {type: getGroupChannelList.rejected.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    status: 'failed',
    error: 'Something went wrong',
  });
});

test('should set status succeeded when get Channel is fulfilled ', () => {
  const action = {
    type: getGroupChannelList.fulfilled.type,
    payload: [{channel: 'Hamdi'}],
  };
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    status: 'succeeded',
    error: '',
    groupChannels: [{channel: 'Hamdi'}],
  });
});
