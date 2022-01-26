import React from 'react';
import {render} from '@/../testing';
import {ParticipantList} from '../ParticipantList';

describe('ParticipantList', () => {
  it('should render correctly', async () => {
    const onParticipantPressed = jest.fn();
    const screen = render(
      <ParticipantList
        onParticipantPressed={onParticipantPressed}
        participants={[]}
      />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
});
