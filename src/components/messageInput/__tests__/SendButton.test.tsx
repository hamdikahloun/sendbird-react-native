import React from 'react';
import {render} from '@/../testing';
import {SendButton} from '../SendButton';

describe('SendButton', () => {
  it('should render correctly', async () => {
    const screen = render(<SendButton />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
