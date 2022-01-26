import React, {memo} from 'react';
import {StyleSheet, TextInput} from 'react-native';

type NicknameInputProps = {
  onChangeNickname: (nickname: string) => void;
};

const NicknameInputMemorized = ({onChangeNickname}: NicknameInputProps) => {
  const [nickname, setNickname] = React.useState('');

  const onChangeText = (text: string) => {
    setNickname(text);
    onChangeNickname(text);
  };

  return (
    <TextInput
      testID="nickname"
      style={styles.input}
      onChangeText={onChangeText}
      value={nickname}
      placeholder="Nickname"
    />
  );
};

/**
 * NicknameInput - A Nickname TextInput component
 *
 * @example
 *
 * <NicknameInput onChangeNickname={setNickname}  />
 */
export const NicknameInput = memo(NicknameInputMemorized);

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
});
