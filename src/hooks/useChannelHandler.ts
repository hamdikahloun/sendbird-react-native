import {useEffect} from 'react';
import SendBird, {OpenChannel, UserMessage} from 'sendbird';
import {useOpenChannelMessageList, useParticipants} from '.';

export const useChannelHandler = (channel: OpenChannel) => {
  const sb = SendBird.getInstance();
  const {addMessage} = useOpenChannelMessageList();
  const {onUserJoined, onUserLeft} = useParticipants();
  const channelHandler = new sb.ChannelHandler();

  channelHandler.onUserEntered = (targetChannel, user) => {
    if (
      targetChannel.url === channel.url &&
      user.userId !== sb.currentUser.userId
    ) {
      onUserJoined(user);
    }
  };

  channelHandler.onMessageReceived = (targetChannel, message) => {
    if (targetChannel.url === channel.url) {
      addMessage(message as UserMessage);
    }
  };

  channelHandler.onMessageUpdated = targetChannel => {
    if (targetChannel.url === channel.url) {
    }
  };

  channelHandler.onUserLeft = (targetChannel, user) => {
    if (targetChannel.url === channel.url) {
      onUserLeft(user);
    }
  };

  useEffect(() => {
    sb.addChannelHandler('UNIQUE_HANDLER_ID', channelHandler);
    return () => sb.removeChannelHandler('UNIQUE_HANDLER_ID');
  }, [channel]);
};
