import {render, waitFor, fireEvent} from '@/../testing';
import React from 'react';
import {NicknameInput} from '../NicknameInput';

describe('NicknameInput', () => {
  it('should call onChangeNickname on typing', async () => {
    const onChangeNickname = jest.fn();
    const {getByPlaceholderText} = render(
      <NicknameInput onChangeNickname={onChangeNickname} />,
    );
    fireEvent.changeText(getByPlaceholderText('Nickname'), 'Hamdi');
    await waitFor(() => {
      expect(onChangeNickname).toBeCalledTimes(1);
    });
  });
});
