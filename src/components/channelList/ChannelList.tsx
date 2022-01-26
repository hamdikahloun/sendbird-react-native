import React from 'react';
import {FlatList, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {OpenChannel} from 'sendbird';
import {ChannelPreview} from '@/components';
import {LoadingState} from '../loadingState';

type ChannelListProps = {
  channels: OpenChannel[];
  onChannelPressed?: (channel: OpenChannel) => void;
  loading: boolean;
  error: string;
};

/**
 * ChannelList - This component show a list of channels, allowing you to select the channel you want to open.
 *
 * See:
 *
 * [Group channels](https://sendbird.com/docs/chat/v3/javascript/guides/group-channel-advanced),
 * [Open channels](https://sendbird.com/docs/chat/v3/javascript/guides/open-channel-advanced)
 * @example
 *
 * <ChannelList
 *  loading={loading}
 *  onChannelPressed={onChannelPressed}
 *  channels={channels}
 *  error={error}
 * />
 */
export const ChannelList = ({
  channels,
  onChannelPressed,
  loading,
  error,
}: ChannelListProps) => {
  const renderItem = ({item}: {item: OpenChannel}) => (
    <ChannelPreview onChannelPressed={onChannelPressed} channel={item} />
  );

  const ListEmptyComponent = () => {
    if (loading && !error?.length) {
      return <LoadingState />;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    if (!loading && !error && !channels.length) {
      return <Text>Empty List</Text>;
    }
    return <View />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={channels}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        ListEmptyComponent={<ListEmptyComponent />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    margin: 16,
  },
});
