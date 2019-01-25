import React, { Fragment } from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import store from './redux';
import AppNavigator from "./navigate/AppNavigator";

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
    );
  }
}


