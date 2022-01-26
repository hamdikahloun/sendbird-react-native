import {getGroupChannelList, getOpenChannelList} from '@/services';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';

export const initialState = {
  status: '',
  error: '',
  channelOpenListStatus: '',
  channelOpenListError: '',
  openChannels: [],
  groupChannels: [],
  currentChannel: {},
};

const channelslice = createSlice({
  name: 'currentChannel',
  initialState,
  reducers: {
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getGroupChannelList.pending, state => {
        state.status = 'loading';
      })
      .addCase(getGroupChannelList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const groupChannels = action.payload as [];
        state.groupChannels = groupChannels;
      })
      .addCase(getGroupChannelList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Something went wrong';
      });

    builder
      .addCase(getOpenChannelList.pending, state => {
        state.channelOpenListStatus = 'loading';
      })
      .addCase(getOpenChannelList.fulfilled, (state, action) => {
        state.channelOpenListStatus = 'succeeded';
        const channels = action.payload as [];
        state.openChannels = [...state.openChannels, ...channels];
      })
      .addCase(getOpenChannelList.rejected, (state, action) => {
        state.channelOpenListStatus = 'failed';
        state.channelOpenListError =
          action.error?.message || 'Something went wrong';
      });
  },
});

export const {setCurrentChannel} = channelslice.actions;
export const selectChannelState = (state: RootState) => state.chat.status;
export const selectChannel = (state: RootState) => state.chat.currentChannel;
export const selectChannels = (state: RootState) => state.chat.openChannels;
export const selectGroupChannels = (state: RootState) =>
  state.chat.groupChannels;
export const selectOpenChannelsState = (state: RootState) =>
  state.chat.channelOpenListStatus;
export const selectChannelOpenListError = (state: RootState) =>
  state.chat.channelOpenListError;

export default channelslice.reducer;
