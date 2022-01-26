import {Assets} from '@/assets';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

type SendButtonProps = {
  onSendButtonPressed?: () => void;
};

/**
 * SendButton - UI Component for send message
 *
 * See:
 *
 * [Send your first message](https://sendbird.com/docs/chat/v3/javascript/quickstart/send-first-message)
 * @example
 *
 * <SendButton onSendButtonPressed={onSendButtonPressed} />
 */
export const SendButton = ({onSendButtonPressed}: SendButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onSendButtonPressed}>
      <Image source={Assets.send} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 48,
    width: 48,
  },
});
