import React from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {Assets} from '@/assets';
import {LoginButton} from '@/components/loginButton';
import {NicknameInput} from '@/components/nicknameInput';
import {useUser} from '@/hooks';

export const LoginContainer = () => {
  const {loginUser, userSatus} = useUser();
  const [nickname, setNickname] = React.useState('');
  const loading = userSatus === 'loading';
  const disabled = !nickname || loading;

  const login = () => {
    Keyboard.dismiss();
    loginUser(nickname);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Assets.logo} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>Please enter a nickname</Text>
      <NicknameInput onChangeNickname={setNickname} />
      <LoginButton onPress={login} disabled={disabled} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },

  logo: {
    resizeMode: 'center',
    alignSelf: 'center',
  },
  title: {
    color: '#817B8B',
    fontSize: 32,
  },
  subtitle: {
    color: '#0C0020',
    fontSize: 32,
  },
});
