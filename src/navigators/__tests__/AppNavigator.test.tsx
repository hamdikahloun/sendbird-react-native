import React from 'react';
import {renderWithReduxProviders, waitFor} from '@/../testing';
import {AppNavigator} from '../AppNavigator';

describe('AppNavigator', () => {
  it('should render correctly', async () => {
    const screen = renderWithReduxProviders(<AppNavigator />).toJSON();
    await waitFor(() => expect(screen).toMatchSnapshot());
  });
});
