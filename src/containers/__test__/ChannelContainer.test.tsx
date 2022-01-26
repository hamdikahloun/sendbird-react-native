import React from 'react';
import {renderWithReduxProviders, waitFor} from '@/../testing';
import {ChannelContainer} from '../ChannelContainer';

describe('ChannelContainer', () => {
  it('should render correctly', async () => {
    const screen = renderWithReduxProviders(<ChannelContainer />).toJSON();
    await waitFor(() => expect(screen).toMatchSnapshot());
  });
});
