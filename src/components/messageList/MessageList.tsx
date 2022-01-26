import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {UserMessage} from 'sendbird';
import {Message} from '../message';
import {LoadingState} from '../loadingState';

type Messages = UserMessage[];
type ChannelListProps = {
  connectedUserId: string;
  messages: Messages;
  loading: boolean;
  error: string;
  onEndReached?: () => void;
};

/**
 * MessageList - The message list component renders a list of messages.
 *
 * See:
 *
 * [BaseMessage](https://sendbird.github.io/core-sdk-javascript/module-model_baseMessage-BaseMessage.html,
 * @example
 *
 * <MessageList
 *  connectedUserId={connectedUserId}
 *  loading={loading}
 *  messages={messages}
 *  error={error}
 *  onEndReached={onEndReached}
 * />
 */
export const MessageList = ({
  messages,
  loading,
  error,
  connectedUserId,
  onEndReached,
}: ChannelListProps) => {
  const renderItem = ({item}: {item: UserMessage}) => (
    <Message
      isMyMessage={item.sender?.userId === connectedUserId}
      message={item}
    />
  );

  const ListEmptyComponent = () => {
    if (loading && !error?.length) {
      return <LoadingState />;
    }
    if (error) {
      return (
        <View style={styles.listEmptyComponent}>
          <Text>{error}</Text>
        </View>
      );
    }
    if (!loading && !error && !messages.length) {
      return (
        <View style={styles.listEmptyComponent}>
          <Text>Empty List</Text>
        </View>
      );
    }
    return <View />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        inverted={messages.length > 0}
        style={styles.flatList}
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.messageId.toString()}
        ListEmptyComponent={<ListEmptyComponent />}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3F3F3',
  },
  flatList: {
    paddingHorizontal: 16,
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    flexWrap: 'wrap',
  },
});
