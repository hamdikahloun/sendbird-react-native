import {store} from '@/store';
import {getOpenChannelList, getGroupChannelList} from '../channelService';

test('should get open Channels succeeded', async () => {
  const next = jest.fn();
  const hasNext = jest.fn();

  const openChannelListQuery: any = jest.fn(() => {
    return {
      hasNext,
      next,
    };
  });
  await store.dispatch(getOpenChannelList(openChannelListQuery));
  expect(store.getState().chat.channelOpenListStatus).toEqual('succeeded');
});

test('should get Group Channels succeeded', async () => {
  const next = jest.fn();
  const hasNext = jest.fn();

  const groupChannelListQuery: any = jest.fn(() => {
    return {
      hasNext,
      next,
    };
  });
  await store.dispatch(getGroupChannelList(groupChannelListQuery));
  expect(store.getState().chat.status).toEqual('succeeded');
});
