/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from "./src/Stores/index";
import Root from "./src/Root/RootScreen";
import Splash from './src/components/Splash';

const storeConfig = configureStore();

class App extends React.Component {
  render() {
    let splashComponent = <Splash />
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={splashComponent} persistor={storeConfig.persistor}>
          <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <Root />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
