import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OpenChannel} from 'sendbird';
import {Avatar} from '@/components';

type ChannelProps = {
  channel: OpenChannel;
  onChannelPressed?: (channel: OpenChannel) => void;
};
const ChannelPreviewMemorized = ({channel, onChannelPressed}: ChannelProps) => {
  const onPress = () => {
    onChannelPressed?.(channel);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Avatar image={channel.coverUrl} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{channel.name}</Text>
        <Text style={styles.subtitle}>
          {channel.participantCount + ' Participant'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  name: {
    fontSize: 16,
    color: '#0C0020',
  },
  subtitle: {
    color: '#0C0020',
    fontSize: 14,
  },
  wrapper: {
    marginStart: 16,
  },
});

/**
 * ChannelPreview - This UI component displays an individual preview item for each channel in a list
 *
 * See:
 * [Channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types)
 * @example
 *
 * <ChannelPreview onChannelPressed={onChannelPressed} channel={channel} />
 */
export const ChannelPreview = memo(ChannelPreviewMemorized);
