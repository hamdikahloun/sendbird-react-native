import React from 'react';
import {render} from '@/../testing';
import {Message} from '../Message';

describe('Message', () => {
  it('should render correctly', async () => {
    const message: any = {message: ''};
    const screen = render(
      <Message message={message} isMyMessage={false} />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
