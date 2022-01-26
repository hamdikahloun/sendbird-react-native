import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserMessage} from 'sendbird';
import {Avatar} from '../avatar';

type MassageProps = {
  message: UserMessage;
};
export const OtherMessageMemorizd = ({message}: MassageProps) => {
  return (
    <View style={styles.wrapper}>
      <Avatar image={message.sender?.profileUrl} />
      <View style={styles.container}>
        <Text style={styles.message}>{message.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#F9F9F9',
    marginBottom: 16,
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  message: {
    color: '#0C0020',
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
export const OtherMessage = memo(OtherMessageMemorizd);
