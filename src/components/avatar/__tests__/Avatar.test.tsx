import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Avatar} from '../Avatar';

describe('Avatar', () => {
  it('should render correctly', async () => {
    const screen = render(
      <Avatar image="https://cdn-icons-png.flaticon.com/512/194/194938.png" />,
    ).toJSON();

    expect(screen).toMatchSnapshot();
  });

  it('should render an image with default size', async () => {
    const {queryByTestId} = render(
      <Avatar image="https://cdn-icons-png.flaticon.com/512/194/194938.png" />,
    );

    await waitFor(() => {
      expect(queryByTestId('user-avatar')).toBeTruthy();
    });
  });

  it('should render an image with custom size', async () => {
    const {queryByTestId} = render(
      <Avatar
        image="https://cdn-icons-png.flaticon.com/512/194/194938.png"
        size={20}
      />,
    );

    await waitFor(() => {
      expect(queryByTestId('user-avatar')).toBeTruthy();
    });
  });

  it('should render the default image with wrong image URL', async () => {
    const {queryByTestId} = render(
      <Avatar image="https://example.com/image.png" />,
    );
    await waitFor(() => {
      expect(queryByTestId('user-avatar')).toBeTruthy();
    });
  });

  it('should render the default image with empty URL', async () => {
    const {queryByTestId} = render(<Avatar />);
    await waitFor(() => {
      expect(queryByTestId('user-avatar')).toBeTruthy();
    });
  });

  it('should render the online view', async () => {
    const {queryByTestId} = render(
      <Avatar
        image="https://cdn-icons-png.flaticon.com/512/194/194938.png"
        online
      />,
    );
    await waitFor(() => {
      expect(queryByTestId('online-view')).toBeTruthy();
    });
  });
});
