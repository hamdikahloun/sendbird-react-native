import {store} from '@/store';
import {getParticipants} from '../participantService';

test('should get open Channel Participants succeeded', async () => {
  const next = jest.fn();
  const hasNext = jest.fn();

  const participantListQuery: any = jest.fn(() => {
    return {
      next,
      hasNext,
    };
  });
  await store.dispatch(getParticipants(participantListQuery));
  expect(store.getState().participants.status).toEqual('succeeded');
});
