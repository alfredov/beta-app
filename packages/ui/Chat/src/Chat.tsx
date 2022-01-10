import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { IconButton } from '@bits-x/icon-button';
import { TextInput } from '@bits-x/text-input';

const data = [
  {
    id: '1',
    message: 'hello',
  },
  {
    id: '2',
    message: 'bye',
  },
];

export type Author = 'bot' | 'user';

export type Message = {
  id: string;
  author: Author;
  timestamp: number;
};

export type Props = {
  messages: Message[];
};

const Chat = () => {
  return (
    <View>
      <FlatList
        inverted
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.message}</Text>}
        onEndReached={() => console.log('Reached!')}
        initialNumToRender={10}
      />
      <View style={styles.footer}>
        <TextInput variant="inline" placeholder="Escribe aquí tu mensaje" />
        <IconButton as="send" disabled />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export { Chat };
