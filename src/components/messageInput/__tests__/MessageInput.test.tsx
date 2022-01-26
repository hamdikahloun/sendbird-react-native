import React from 'react';
import {render} from '@/../testing';
import {MessageInput} from '../MessageInput';

describe('MessageInput', () => {
  it('should render correctly', async () => {
    const onSendButtonPressed = jest.fn();
    const screen = render(
      <MessageInput onSendButtonPressed={onSendButtonPressed} />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
