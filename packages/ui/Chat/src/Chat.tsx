import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { IconButton } from '@bits-x/icon-button';
import { TextInput } from '@bits-x/text-input';

export type Author = 'bot' | 'user';

export type Message = {
  id: string;
  author: Author;
  date?: string;
  text: string;
};

const BotMessage: React.FC = props => (
  <View style={styles.botMessageWrapper}>
    <Text style={styles.botMessageText}>{props.children}</Text>
  </View>
);

const UserMessage: React.FC = props => (
  <View style={[styles.botMessageWrapper, styles.userMessageWrapper]}>
    <Text style={[styles.botMessageText, styles.userMessageText]}>
      {props.children}
    </Text>
  </View>
);

const DateLabel: React.FC = props => (
  <Text style={styles.dateLabel}>{props.children}</Text>
);

export type ChatProps = {
  messages: Message[];
  onSubmit?: (message: Message) => void;
};

const Chat = (props: ChatProps) => {
  const [message, setMessage] = React.useState<string>('');
  const listRef = React.useRef<FlatList>(null);

  const submitHandler = () => {
    if (props.onSubmit) {
      props.onSubmit({
        author: 'user',
        id: Math.random().toString(36).substring(7),
        text: message,
      });
      setMessage('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        onScrollToTop={() => console.log('onScrollToTop')}
        ref={listRef}
        onContentSizeChange={() =>
          listRef.current?.scrollToEnd({ animated: true })
        }
        data={props.messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            {item.date && <DateLabel>{item.date}</DateLabel>}
            {item.author === 'bot' ? (
              <BotMessage>{item.text}</BotMessage>
            ) : (
              <UserMessage>{item.text}</UserMessage>
            )}
          </View>
        )}
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={text => setMessage(text)}
          variant="inline"
          placeholder="Escribe aquí tu mensaje"
        />
        <IconButton
          as="send"
          style={styles.iconButton}
          disabled={message.length === 0}
          onPress={submitHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  botMessageText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5959',
  },
  botMessageWrapper: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F6FA',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    marginBottom: 8,
  },
  userMessageWrapper: {
    backgroundColor: '#3B9391',
    alignSelf: 'flex-end',
  },
  userMessageText: {
    color: 'white',
  },
  dateLabel: {
    alignSelf: 'center',
    color: '#6C8080',
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '400',
    marginBottom: 16,
    marginTop: 16,
  },
  textInput: {
    flex: 1,
  },
});

export { Chat };
