import {
  selectChannel,
  selectChannelState,
  setCurrentChannel,
} from '@/store/channels';
import {addNewMessage} from '@/store/messages';
import {useDispatch, useSelector} from 'react-redux';
import SendBird, {GroupChannel} from 'sendbird';
import {OpenChannel} from 'sendbird';

export const useChannel = () => {
  const sb = SendBird.getInstance();
  const openChannel = useSelector(selectChannel) as OpenChannel;
  const channelState = useSelector(selectChannelState);
  const dispatch = useDispatch();

  const sendMessage = (message: string) => {
    if (!message.length) {
      return;
    }
    const params = new sb.UserMessageParams();
    params.message = message;
    openChannel.sendUserMessage(params, (newMessage, err) => {
      if (!err) {
        dispatch(addNewMessage(newMessage));
      }
    });
  };

  const setCurrentOpenChannel = (channel: OpenChannel | GroupChannel) => {
    dispatch(setCurrentChannel(channel));
  };

  return {
    setCurrentOpenChannel,
    openChannel,
    channelState,
    sendMessage,
  };
};
