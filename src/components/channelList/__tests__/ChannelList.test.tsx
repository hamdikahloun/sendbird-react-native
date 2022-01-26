import React from 'react';
import {render} from '@/../testing';
import {ChannelList} from '../ChannelList';

describe('ChannelList', () => {
  it('should render correctly', async () => {
    const screen = render(
      <ChannelList channels={[]} loading={false} error="" />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
