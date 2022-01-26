import {getParticipants} from '@/services';
import {createSlice} from '@reduxjs/toolkit';
import {User} from 'sendbird';
import {RootState} from './index';

export const initialState = {
  participants: [],
  status: '',
  error: '',
};
const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addNewParticipant: (state, action) => {
      const participant = action.payload as never;
      state.participants.unshift(participant);
    },
    removeParticipant: (state, action) => {
      const participant = action.payload as User;
      state.participants = state.participants.filter(
        (p: User) => p.userId !== participant.userId,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getParticipants.pending, state => {
        state.status = 'loading';
      })
      .addCase(getParticipants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const participants = action.payload as [];
        state.participants = [...state.participants, ...participants];
      })
      .addCase(getParticipants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Something went wrong';
      });
  },
});

export const {addNewParticipant, removeParticipant} = participantsSlice.actions;
export const selectParticipantsState = (state: RootState) =>
  state.participants?.status;
export const selectParticipants = (state: RootState) =>
  state.participants?.participants;
export const selectParticipantsError = (state: RootState) =>
  state.participants?.error;
export default participantsSlice.reducer;
