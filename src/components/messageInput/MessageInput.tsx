import React, {memo, useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MessageTextInput} from './MessageTextInput';
import {SendButton} from './SendButton';

type MessageInputProps = {
  onChangeMessage?: (message: string) => void;
  onSendButtonPressed: (message: string) => void;
  messageTextInputRef?: React.MutableRefObject<TextInput | undefined>;
};
export const MessageInputMemorized = ({
  onChangeMessage,
  onSendButtonPressed,
  messageTextInputRef,
}: MessageInputProps) => {
  const message = useRef('');
  const onMessageChangeInternHandler = (messageText: string) => {
    message.current = messageText;
    onChangeMessage?.(messageText);
  };

  const onSendButtonPressedInternHandler = () => {
    onSendButtonPressed(message.current);
  };

  return (
    <View style={styles.container}>
      <MessageTextInput
        messageTextInputRef={messageTextInputRef}
        onChangeMessage={onMessageChangeInternHandler}
      />
      <SendButton onSendButtonPressed={onSendButtonPressedInternHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
});
/**
 * MessageInput - UI Component for message input
 *
 * See:
 *
 * [Channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types),
 * [Send your first message](https://sendbird.com/docs/chat/v3/javascript/quickstart/send-first-message)
 * @example
 *
 * const messageTextInputRef = useRef<TextInput>();
 *
 * const onSendButtonPressed = (message: string) => {
 *   sendMessage(message)
 *   messageTextInputRef.current?.clear();
 * };
 *
 * <MessageInput
 *   messageTextInputRef={messageTextInputRef}
 *   onChangeMessage={onChangeMessage}
 *   onSendButtonPressed={onSendButtonPressed}
 * />
 */
export const MessageInput = memo(MessageInputMemorized);
