import React from 'react';
import {render} from '@/../testing';
import {MyMessage} from '../MyMessage';

describe('MyMessage', () => {
  it('should render correctly', async () => {
    const message: any = {message: ''};
    const screen = render(<MyMessage message={message} />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
