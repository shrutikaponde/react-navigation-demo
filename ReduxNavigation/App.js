import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './app/reducers/index';
import { AppNavigator, middleware } from './app/Navigator';

const store = createStore(appReducer, applyMiddleware(middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}