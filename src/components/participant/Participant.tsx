import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {User} from 'sendbird';
import {Avatar} from '../avatar';

type ParticipantProps = {
  participant: User;
  onParticipantPressed?: (participant: User) => void;
};
export const Participant = ({
  participant,
  onParticipantPressed,
}: ParticipantProps) => {
  const onPress = () => {
    onParticipantPressed?.(participant);
  };
  return (
    <TouchableOpacity
      disabled={!onParticipantPressed}
      onPress={onPress}
      style={styles.container}>
      <Avatar image={participant.profileUrl} />
      <Text style={styles.text}>{participant.nickname}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginEnd: 16,
  },
  text: {
    color: '#0C0020',
    fontSize: 10,
  },
});
