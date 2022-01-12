import React from 'react';
import { connect } from 'react-redux';
import { Chat, Message } from '@bits-x/chat';
import * as selectors from '../../packages/selectors';
import fetchMessagesAction from '../../packages/actions/fetchMessages';
import addMessageAction from '../../packages/actions/addMessage';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchToProps;

const ChatScreen = ({ fetchMessages, messages, addMessage }: Props) => {
  React.useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = (message: Message) => {
    addMessage(message);
  };

  return <Chat onSubmit={submitHandler} messages={messages} />;
};

const dispatchToProps = {
  fetchMessages: fetchMessagesAction.request,
  addMessage: addMessageAction,
};

const mapStateToProps = (state: any) => ({
  messages: selectors.fetchMessages(state).data,
});

export default connect(mapStateToProps, dispatchToProps)(ChatScreen);
