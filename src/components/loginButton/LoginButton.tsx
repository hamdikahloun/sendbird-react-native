import React, {memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type LoginButtonProps = {
  onPress: () => void;
  disabled: boolean;
  loading: boolean;
};

const LoginButtonMemorized = ({
  onPress,
  disabled,
  loading,
}: LoginButtonProps) => {
  return (
    <LinearGradient style={styles.gradient} colors={['#6100FF', '#8940FF']}>
      <TouchableOpacity
        style={styles.button}
        testID="login-button"
        disabled={disabled}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator testID="loading-activityIndicator" color="white" />
        ) : (
          <Text testID="login-button-text" style={styles.buttonTex}>
            Login
          </Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    height: 50,
    marginHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonTex: {
    color: 'white',
  },
});

/**
 * LoginButton - A Login Button component
 *
 * @example
 *
 * <LoginButton onPress={onPress} disabled={disabled} loading={loading} />
 */
export const LoginButton = memo(LoginButtonMemorized);
