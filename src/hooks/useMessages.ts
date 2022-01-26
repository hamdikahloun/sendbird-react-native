import {getOpenChannelMessageList} from '@/services';
import {selectChannelOpenListError, selectChannelState} from '@/store/channels';
import {addNewMessage, selectOpenChannelMessages} from '@/store/messages';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {OpenChannel, PreviousMessageListQuery, UserMessage} from 'sendbird';

export const useOpenChannelMessageList = () => {
  const openChannelMessages = useSelector(selectOpenChannelMessages);
  const openChannelsMessagesState = useSelector(selectChannelState);
  const channelOpenMessagesError = useSelector(selectChannelOpenListError);
  const query = useRef<PreviousMessageListQuery | null>();
  const dispatch = useDispatch();

  const getOpenChannelMessages = (
    openChannel: OpenChannel,
    previousMessageListQuery?: PreviousMessageListQuery,
  ) => {
    if (previousMessageListQuery) {
      dispatch(getOpenChannelMessageList(previousMessageListQuery));
    } else {
      if (query.current) {
        dispatch(getOpenChannelMessageList(query.current));
      } else {
        dispatch(
          getOpenChannelMessageList(
            createPreviousMessageListQuery(openChannel),
          ),
        );
      }
    }
  };

  const createPreviousMessageListQuery = (openChannel: OpenChannel) => {
    const newQuery = openChannel.createPreviousMessageListQuery();
    query.current = newQuery;
    return newQuery;
  };

  const addMessage = (message: UserMessage) => {
    dispatch(addNewMessage(message));
  };
  return {
    previousMessageListQuery: query.current,
    getOpenChannelMessages,
    openChannelMessages,
    openChannelsMessagesState,
    channelOpenMessagesError,
    addMessage,
  };
};
