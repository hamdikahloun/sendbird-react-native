import {createAsyncThunk} from '@reduxjs/toolkit';
import {ParticipantListQuery} from 'sendbird';

export const getParticipants = createAsyncThunk(
  'chat/participants',
  async (participantListQuery: ParticipantListQuery) => {
    if (participantListQuery.hasNext) {
      const participants = await participantListQuery.next();
      return participants;
    } else {
      return [];
    }
  },
);
