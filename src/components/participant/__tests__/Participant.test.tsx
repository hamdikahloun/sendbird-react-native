import React from 'react';
import {render} from '@/../testing';
import {Participant} from '../Participant';

describe('Participant', () => {
  it('should render correctly', async () => {
    const participant: any = {nickname: 'Hamdi'};
    const screen = render(<Participant participant={participant} />).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
