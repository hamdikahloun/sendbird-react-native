import React from 'react';
import {render} from '@/../testing';
import {MessageList} from '../MessageList';

describe('MessageList', () => {
  it('should render correctly', async () => {
    const screen = render(
      <MessageList
        messages={[]}
        loading={false}
        error={''}
        connectedUserId={''}
      />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
