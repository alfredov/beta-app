import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { setup } from '@bits-x/redux-setup';

import { Root, navigationRef } from './navigation';
import { registerReducer } from './packages/reducer';
import epics from './packages/epics';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { store } = setup({}, [registerReducer], epics);
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Provider store={store}>
          <Root />
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
