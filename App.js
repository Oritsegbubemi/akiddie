import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    const firebase = require('firebase');
    global.Symbol = require('core-js/es6/symbol');
    global.Symbol = require('core-js/fn/symbol/iterator');

    const config = {
      apiKey: 'AIzaSyD1d5wejop6OLUxOzsXhRHofUjt1LEeS68',
      authDomain: 'akiddie-250ee.firebaseapp.com',
      databaseURL: 'https://akiddie-250ee.firebaseio.com',
      projectId: 'akiddie-250ee',
      storageBucket: 'akiddie-250ee.appspot.com',
      messagingSenderId: '15540715058'
    };
    firebase.initializeApp(config);  
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor='#192f3f'
            barStyle='light-content'
          />
          <Routes />
        </View>
      </Provider>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#cbd1db',
  }
});
