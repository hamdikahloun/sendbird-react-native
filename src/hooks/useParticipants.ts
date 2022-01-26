import {getParticipants} from '@/services';
import {
  addNewParticipant,
  removeParticipant,
  selectParticipants,
  selectParticipantsError,
  selectParticipantsState,
} from '@/store/participant';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {OpenChannel, ParticipantListQuery, User} from 'sendbird';

export const useParticipants = () => {
  const participants = useSelector(selectParticipants);
  const participantsState = useSelector(selectParticipantsState);
  const participantsError = useSelector(selectParticipantsError);
  const query = useRef<ParticipantListQuery | null>();
  const dispatch = useDispatch();

  const getParticipantList = (
    openChannel: OpenChannel,
    participantListQuery?: ParticipantListQuery,
  ) => {
    if (participantListQuery) {
      dispatch(getParticipants(participantListQuery));
    } else {
      if (query.current) {
        dispatch(getParticipants(query.current));
      } else {
        dispatch(getParticipants(createParticipantListQuery(openChannel)));
      }
    }
  };

  const createParticipantListQuery = (openChannel: OpenChannel) => {
    const newQuery = openChannel.createParticipantListQuery();
    query.current = newQuery;
    return newQuery;
  };

  const onUserJoined = (user: User) => {
    dispatch(addNewParticipant(user));
  };

  const onUserLeft = (user: User) => {
    dispatch(removeParticipant(user));
  };

  return {
    participantListQuery: query.current,
    getParticipantList,
    participants,
    participantsState,
    participantsError,
    onUserJoined,
    onUserLeft,
  };
};
