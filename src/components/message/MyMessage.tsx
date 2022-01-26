import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserMessage} from 'sendbird';

type MassageProps = {
  message: UserMessage;
};
export const MyMessageMemorizd = ({message}: MassageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#6100FF',
    marginBottom: 16,
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
  },
  message: {
    color: 'white',
  },
});

/**
 * Message - This UI component displays an individual preview item for each message in a list
 *
 * See:
 *
 * [BaseMessage](https://sendbird.github.io/core-sdk-javascript/module-model_baseMessage-BaseMessage.html)
 * @example
 *
 * <Message message={message} />
 */
export const MyMessage = memo(MyMessageMemorizd);
