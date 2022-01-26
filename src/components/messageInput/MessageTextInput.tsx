import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

type MessageTextInputProps = {
  onChangeMessage?: (message: string) => void;
  messageTextInputRef?: React.MutableRefObject<TextInput | undefined>;
  enabled?: boolean;
};

/**
 * MessageTextInput - This UI component displays Message TextInput
 *
 * @example
 *
 * <MessageTextInput messageTextInputRef={messageTextInputRef} onMessageChange={onMessageChange} enabled={enabled}/>
 */
export const MessageTextInput = ({
  onChangeMessage,
  messageTextInputRef,
  enabled,
}: MessageTextInputProps) => {
  const [message, setMessage] = useState('');

  const onChangeText = (text: string) => {
    setMessage(text);
    onChangeMessage?.(text);
  };

  return (
    <TextInput
      ref={messageTextInputRef as React.LegacyRef<TextInput>}
      testID="message"
      style={styles.input}
      onChangeText={onChangeText}
      value={message}
      placeholder="Aa"
      editable={enabled}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginEnd: 8,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    flex: 1,
  },
});
