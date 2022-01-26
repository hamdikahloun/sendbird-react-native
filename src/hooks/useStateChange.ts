import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import SendBird from 'sendbird';

export const useStateChange = () => {
  const handleStateChange = (newState: AppStateStatus) => {
    if (newState === 'active') {
      SendBird.getInstance().setForegroundState();
    } else {
      SendBird.getInstance().setBackgroundState();
    }
  };

  useEffect(() => {
    const appState = AppState.addEventListener('change', handleStateChange);
    return () => appState.remove();
  }, []);
};
