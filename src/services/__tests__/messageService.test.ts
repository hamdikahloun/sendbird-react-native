import {store} from '@/store';
import {getOpenChannelMessageList} from '../messagesService';

test('should get open Channel messages succeeded', async () => {
  const load = jest.fn();
  const hasMore = jest.fn();

  const previousMessageListQuery: any = jest.fn(() => {
    return {
      hasMore,
      load,
    };
  });
  await store.dispatch(getOpenChannelMessageList(previousMessageListQuery));
  expect(store.getState().messages.status).toEqual('succeeded');
});
