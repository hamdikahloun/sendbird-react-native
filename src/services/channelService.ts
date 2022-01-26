import {createAsyncThunk} from '@reduxjs/toolkit';
import {GroupChannelListQuery, OpenChannelListQuery} from 'sendbird';

export const getOpenChannelListService = async (
  openChannelListQuery: OpenChannelListQuery,
) => {
  if (openChannelListQuery.hasNext) {
    const openChannelList = await openChannelListQuery.next();
    return openChannelList;
  } else {
    return [];
  }
};

export const getOpenChannelList = createAsyncThunk(
  'chat/openChannelList',
  getOpenChannelListService,
);

export const getGroupChannelList = createAsyncThunk(
  'chat/groupChannelList',
  async (groupChannelListQuery: GroupChannelListQuery) => {
    if (groupChannelListQuery.hasNext) {
      const groupChannelList = await groupChannelListQuery.next();
      return groupChannelList.map(channel => channel.name);
    } else {
      return [];
    }
  },
);

// export const createGroupChannel = async (participant: User) => {
//   try {
//     const sb = SendBird.getInstance();
//     const params = new sb.GroupChannelParams();
//     const participants = [participant];
//     params.addUsers(participants);
//     const groupChannel = await sb.GroupChannel.createChannel(params);
//     return groupChannel;
//   } catch (error) {
//     console.log('createGroupChannel', error);
//   }
// };
