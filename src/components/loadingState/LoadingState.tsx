import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

/**
 * LoadingState - UI Component for Loading State
 *
 * @example
 *
 * <LoadingState />
 */
export const LoadingState = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
