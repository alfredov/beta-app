import React from 'react';

import { Chat, Message } from '@bits-x/chat';

const ChatScreen = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      author: 'bot',
      id: '1',
      text: 'Hello fellow',
      date: 'Juev, 30 Nov 2021',
    },
    {
      author: 'bot',
      id: '2',
      text: 'How are you doing?',
    },
    {
      author: 'user',
      id: '3',
      text: 'I am feeling tired 😔',
    },
    {
      author: 'user',
      id: '4',
      text: 'Hello Bot',
      date: 'Vier, 31 Nov 2021',
    },
  ]);

  const submitHandler = (message: Message) => {
    setMessages(state => [...state, message]);
  };

  return <Chat onSubmit={submitHandler} messages={messages} />;
};

export default ChatScreen;
