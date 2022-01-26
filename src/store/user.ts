import {disconnectUser, login} from '@/services';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';

export const initialState = {
  isLoggedIn: false,
  status: '',
  error: '',
  disconnecting: '',
  disconnectingError: '',
  user: {},
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, state => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.status = 'failed';
        state.error = action.error?.message || 'Something went wrong';
      });
    builder
      .addCase(disconnectUser.pending, state => {
        state.disconnecting = 'loading';
      })
      .addCase(disconnectUser.fulfilled, state => {
        state.isLoggedIn = false;
        state.disconnecting = 'succeeded';
        state.user = {};
      })
      .addCase(disconnectUser.rejected, (state, action) => {
        state.disconnecting = 'failed';
        state.disconnectingError =
          action.error?.message || 'Something went wrong';
      });
  },
});

export const selectIsLoggedIn = (state: RootState) => state.userAuth.isLoggedIn;
export const selectUser = (state: RootState) => state.userAuth.user;
export const selectUserStatus = (state: RootState) => state.userAuth.status;
export const selectUserError = (state: RootState) => state.userAuth.error;

export default authSlice.reducer;
