import {getOpenChannelMessageList} from '@/services';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';

export const initialState = {
  messages: [],
  status: 'loading',
  error: '',
};
const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      const newMessage = action.payload as never;
      state.messages.unshift(newMessage);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOpenChannelMessageList.pending, state => {
        state.status = 'loading';
      })
      .addCase(getOpenChannelMessageList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const messages = action.payload as [];
        state.messages = [...state.messages, ...messages];
      })
      .addCase(getOpenChannelMessageList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Something went wrong';
      });
  },
});

export const {addNewMessage} = messagesSlice.actions;
export const selectOpenChannelMessagesState = (state: RootState) =>
  state.messages.status;
export const selectOpenChannelMessages = (state: RootState) =>
  state.messages.messages;
export const selectOpenChannelMessagesError = (state: RootState) =>
  state.messages.error;
export default messagesSlice.reducer;
