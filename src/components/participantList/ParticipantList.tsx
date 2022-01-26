import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {User} from 'sendbird';
import {Participant} from '../participant';

type ParticipantListProps = {
  participants: User[];
  onParticipantPressed?: (participant: User) => void;
};

/**
 * ParticipantList - The message Participant component renders a list of Participants.
 *
 * See:
 *
 * @example
 *
 * <ParticipantList
 *  participants={participants}
 *  onParticipantPressed={onParticipantPressed}
 * />
 */
export const ParticipantList = ({
  participants,
  onParticipantPressed,
}: ParticipantListProps) => {
  const renderItem = ({item}: {item: User}) => (
    <Participant
      onParticipantPressed={onParticipantPressed}
      participant={item}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={participants}
        renderItem={renderItem}
        keyExtractor={item => item.userId}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: '#f3F3F3',
  },
});
