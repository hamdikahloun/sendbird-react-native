import {getGroupChannelList, getOpenChannelList} from '@/services';
import {
  selectChannelOpenListError,
  selectChannels,
  selectGroupChannels,
  selectOpenChannelsState,
} from '@/store/channels';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SendBird, {
  GroupChannelListQuery,
  OpenChannel,
  OpenChannelListQuery,
} from 'sendbird';

export const useChannels = () => {
  const sb = SendBird.getInstance();
  const openChannels = useSelector(selectChannels) as OpenChannel[];
  const groupChannels = useSelector(selectGroupChannels) as string[];
  const openChannelsState = useSelector(selectOpenChannelsState);
  const channelOpenListError = useSelector(selectChannelOpenListError);
  const query = useRef<OpenChannelListQuery | null>();
  const groupQuery = useRef<GroupChannelListQuery | null>();
  const dispatch = useDispatch();

  const getGroupChannels = (groupChannelListQuery?: GroupChannelListQuery) => {
    if (groupChannelListQuery) {
      dispatch(getGroupChannelList(groupChannelListQuery));
    } else {
      if (groupQuery.current) {
        dispatch(getGroupChannelList(groupQuery.current));
      } else {
        dispatch(getGroupChannelList(createGroupChannelListQuery()));
      }
    }
  };

  const getOpenChannels = (openChannelListQuery?: OpenChannelListQuery) => {
    if (openChannelListQuery) {
      dispatch(getOpenChannelList(openChannelListQuery));
    } else {
      if (query.current) {
        dispatch(getOpenChannelList(query.current));
      } else {
        dispatch(getOpenChannelList(createOpenChannelListQuery()));
      }
    }
  };

  const createOpenChannelListQuery = () => {
    const newQuery = sb.OpenChannel.createOpenChannelListQuery();
    query.current = newQuery;
    return newQuery;
  };

  const createGroupChannelListQuery = () => {
    const newQuery = sb.GroupChannel.createMyGroupChannelListQuery();
    groupQuery.current = newQuery;
    return newQuery;
  };

  return {
    getOpenChannels,
    getGroupChannels,
    createOpenChannelListQuery,
    openChannelListQuery: query.current,
    groupChannelListQuery: groupQuery.current,
    openChannels,
    groupChannels,
    openChannelsState,
    channelOpenListError,
  };
};
