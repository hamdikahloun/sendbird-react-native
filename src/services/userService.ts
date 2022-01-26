import {Config} from '@/config';
import {createAsyncThunk} from '@reduxjs/toolkit';
import SendBird from 'sendbird';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async (nickname?: string) => {
  const sbInstance = SendBird.getInstance();
  const savedUserId = await AsyncStorage.getItem('currentUser');
  if (!nickname && !savedUserId) {
    throw new Error('Nickname and user id not provided');
  }
  const sb =
    sbInstance ||
    new SendBird({
      appId: Config.SENDBIRD_APPLICATION_ID,
    });

  let user = await sb.connect(savedUserId || uuid.v4().toString());
  if (nickname) {
    user = await sb.updateCurrentUserInfo(nickname, '');
  }
  if (!savedUserId && user) {
    await AsyncStorage.setItem('currentUser', user.userId);
  }

  return user;
};
export const login = createAsyncThunk('userAuth/login', loginService);

export const disconnectUser = createAsyncThunk(
  'userAuth/disconnectUser',
  async () => {
    const sbInstance = SendBird.getInstance();
    await sbInstance.disconnect();
  },
);
