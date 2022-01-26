/** @format */

import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '@/store/user';
import messagesReducer from '@/store/messages';
import channelReducer from '@/store/channels';

/**
 *
 * Recommended practices for testing apps using Redux
 *
 * See: https://redux.js.org/usage/writing-tests
 */
function renderWithReduxProviders(
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        messages: messagesReducer,
        userAuth: userReducer,
        chat: channelReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: any = {},
) {
  function Wrapper({children}: React.PropsWithChildren<any>) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export {renderWithReduxProviders};
