import React from 'react';
import {render} from '@/../testing';
import {OtherMessage} from '../OtherMessage';

describe('OtherMessage', () => {
  it('should render correctly', async () => {
    const message: any = {message: ''};
    const screen = render(<OtherMessage message={message} />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
