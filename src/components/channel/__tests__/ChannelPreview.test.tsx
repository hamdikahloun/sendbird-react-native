import React from 'react';
import {render} from '@/../testing';
import {ChannelPreview} from '../ChannelPreview';

describe('ChannelPreview', () => {
  it('should render correctly', async () => {
    const channel: any = {coverUrl: 'https://example.com', name: 'My Channel'};
    const screen = render(<ChannelPreview channel={channel} />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
