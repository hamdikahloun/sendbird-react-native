import React from 'react';
import {renderWithReduxProviders, waitFor} from '@/../testing';
import MainNavigator from '../MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

describe('MainNavigator', () => {
  it('should render correctly', async () => {
    const screen = renderWithReduxProviders(
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>,
    ).toJSON();
    await waitFor(() => expect(screen).toMatchSnapshot());
  });
});
