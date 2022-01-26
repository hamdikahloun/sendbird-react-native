/**
 * See https://redux.js.org/usage/writing-tests
 */

import {disconnectUser, login} from '@/services';
import reducer, {initialState} from '../user';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: ''})).toEqual(initialState);
});

test('should set status loading when login is pending ', () => {
  const action = {type: login.pending.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({...initialState, status: 'loading'});
});

test('should set status failed when login is rejected ', () => {
  const action = {type: login.rejected.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    status: 'failed',
    error: 'Something went wrong',
  });
});

test('should set status succeeded when login is fulfilled ', () => {
  const action = {type: login.fulfilled.type, payload: {nickname: 'Hamdi'}};
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    isLoggedIn: true,
    status: 'succeeded',
    error: '',
    user: {nickname: 'Hamdi'},
  });
});

test('should set status loading when disconnect User is pending ', () => {
  const action = {type: disconnectUser.pending.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({...initialState, disconnecting: 'loading'});
});

test('should set status failed when disconnect is rejected ', () => {
  const action = {type: disconnectUser.rejected.type};
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    disconnecting: 'failed',
    disconnectingError: 'Something went wrong',
  });
});

test('should set status succeeded when disconnect is fulfilled', () => {
  const action = {
    type: disconnectUser.fulfilled.type,
    payload: {nickname: 'Hamdi'},
  };
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    disconnecting: 'succeeded',
    disconnectingError: '',
  });
});
