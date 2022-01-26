import React from 'react';
import {render} from '@/../testing';
import {LoadingState} from '../LoadingState';

describe('LoadingState', () => {
  it('should render correctly', async () => {
    const screen = render(<LoadingState />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
