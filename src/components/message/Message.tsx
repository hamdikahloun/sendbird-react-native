import React, {memo} from 'react';
import {UserMessage} from 'sendbird';
import {MyMessage} from './MyMessage';
import {OtherMessage} from './OtherMessage';

type MassageProps = {
  message: UserMessage;
  isMyMessage: boolean;
};
export const MessageMemorizd = ({message, isMyMessage}: MassageProps) => {
  return (
    <>
      {isMyMessage ? (
        <MyMessage message={message} />
      ) : (
        <OtherMessage message={message} />
      )}
    </>
  );
};

/**
 * Message - This UI component displays an individual preview item for each message in a list
 *
 * See:
 *
 * [BaseMessage](https://sendbird.github.io/core-sdk-javascript/module-model_baseMessage-BaseMessage.html)
 * @example
 *
 * <Message message={message} isMyMessage={message.userId === connectedUserId} />
 */
export const Message = memo(MessageMemorizd);
