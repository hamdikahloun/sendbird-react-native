import {render, fireEvent} from '@/../testing';
import React from 'react';
import {LoginButton} from '../LoginButton';

describe('LoginButton', () => {
  it('should render correctly', async () => {
    const onPress = jest.fn();
    const screen = render(
      <LoginButton onPress={onPress} disabled={false} loading={false} />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should call onPress if not disabled and not loading', async () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <LoginButton onPress={onPress} disabled={false} loading={false} />,
    );
    fireEvent.press(getByTestId('login-button'));
    expect(onPress).toBeCalledTimes(1);
  });

  it('should not call onPress if disabled and not loading', async () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <LoginButton onPress={onPress} disabled={true} loading={false} />,
    );
    fireEvent.press(getByTestId('login-button'));
    expect(onPress).toBeCalledTimes(0);
  });

  it('should show login text if not loading', async () => {
    const onPress = jest.fn();
    const {getByText} = render(
      <LoginButton onPress={onPress} disabled={false} loading={false} />,
    );
    expect(getByText('Login')).toBeTruthy();
  });

  it('should show loading state if loading', async () => {
    const onPress = jest.fn();
    const {findByTestId} = render(
      <LoginButton onPress={onPress} disabled={false} loading={true} />,
    );
    expect(findByTestId('loading-activityIndicator')).toBeTruthy();
  });
});
