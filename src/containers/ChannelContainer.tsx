import React, {useEffect, useRef} from 'react';
import {MessageInput, MessageList, ParticipantList} from '@/components';
import {useChannels} from '@/hooks/useChannels';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {OpenChannel} from 'sendbird';
import {
  useUser,
  useParticipants,
  useOpenChannelMessageList,
  useStateChange,
  useChannelHandler,
  useChannel,
} from '@/hooks';

export const ChannelContainer = () => {
  const messageTextInputRef = useRef<TextInput>();
  const {user} = useUser();
  const {openChannel, setCurrentOpenChannel, sendMessage} = useChannel();
  useStateChange();
  useChannelHandler(openChannel);
  const {
    getOpenChannels,
    getGroupChannels,
    openChannels,
    openChannelsState,
    channelOpenListError,
  } = useChannels();

  const {
    channelOpenMessagesError,
    openChannelsMessagesState,
    openChannelMessages,
    getOpenChannelMessages,
  } = useOpenChannelMessageList();

  const {participants, getParticipantList} = useParticipants();
  const loading =
    openChannelsMessagesState === 'loading' || openChannelsState === 'loading';
  const error = channelOpenMessagesError || channelOpenListError;

  useEffect(() => {
    getOpenChannels();
    getGroupChannels();
  }, []);

  // For Testing purpose only
  useEffect(() => {
    init();
  }, [openChannels]);

  const init = async () => {
    if (openChannels.length && !openChannelMessages.length) {
      const firstChannel: OpenChannel = openChannels[0];
      await firstChannel.enter();
      setCurrentOpenChannel(firstChannel);
      getParticipantList(firstChannel);
      getOpenChannelMessages(firstChannel);
    }
  };

  // For Testing purpose only
  const onSendButtonPressed = (message: string) => {
    sendMessage(message);
    messageTextInputRef.current?.clear();
  };

  const onEndReached = () => {
    getOpenChannelMessages(openChannel);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ParticipantList participants={participants} />
      <MessageList
        loading={loading}
        messages={openChannelMessages}
        error={error}
        connectedUserId={user.userId}
        onEndReached={onEndReached}
      />
      <MessageInput
        messageTextInputRef={messageTextInputRef}
        onSendButtonPressed={onSendButtonPressed}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 8,
  },
});
