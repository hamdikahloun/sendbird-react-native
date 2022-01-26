import {configureStore} from '@reduxjs/toolkit';
import messagesReducer from './messages';
import userReducer from './user';
import channelReducer from './channels';
import participantReducer from './participant';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    userAuth: userReducer,
    chat: channelReducer,
    participants: participantReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
