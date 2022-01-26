import {renderWithReduxProviders} from '@/../testing';
import React from 'react';
import {LoginContainer} from '../LoginContainer';

describe('LoginContainer', () => {
  it('should render correctly', async () => {
    const screen = renderWithReduxProviders(<LoginContainer />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
