/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import { Chat, Message } from '@bits-x/chat';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
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

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const submitHandler = (message: Message) => {
    setMessages(state => [...state, message]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Chat onSubmit={submitHandler} messages={messages} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
