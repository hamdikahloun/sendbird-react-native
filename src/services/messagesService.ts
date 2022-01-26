import {createAsyncThunk} from '@reduxjs/toolkit';
import {PreviousMessageListQuery} from 'sendbird';

export const getOpenChannelMessageList = createAsyncThunk(
  'chat/openChannelMessageList',
  async (previousMessageListQuery: PreviousMessageListQuery) => {
    if (previousMessageListQuery.hasMore) {
      const res = await previousMessageListQuery.load(25, true);
      return res;
    } else {
      return [];
    }
  },
);
