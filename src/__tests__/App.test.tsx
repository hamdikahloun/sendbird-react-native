import React from 'react';
import {render} from '@/../testing';
import App from '../App';

describe('App', () => {
  it('should render correctly', async () => {
    const screen = render(<App />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
