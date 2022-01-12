import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
  AppState,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { setup } from '@bits-x/redux-setup';

import { Root, navigationRef } from './navigation';
import { registerReducer } from './packages/reducer';
import epics from './packages/epics';
import * as actions from './packages/actions';

const App = () => {
  const appState = useRef(AppState.currentState);
  const isDarkMode = useColorScheme() === 'dark';
  const { store } = setup(actions, [registerReducer], epics);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (appState.current === 'background') {
        // @ts-ignore
        store.dispatch({ type: 'REGISTER_USER/CANCEL' });
      }

      if (appState.current === 'active') {
        // @ts-ignore
        store.dispatch({ type: 'SYNC_USER/REQUEST' });
      }
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
