import React from 'react';
import {render} from '@/../testing';
import {MessageTextInput} from '../MessageTextInput';

describe('MessageTextInput', () => {
  it('should render correctly', async () => {
    const screen = render(<MessageTextInput />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
