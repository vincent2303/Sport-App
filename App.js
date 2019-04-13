import React, { Component } from 'react';

// REDUX
import { Provider } from 'react-redux';
import AppContainer from './src/router/mainRouter';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}><AppContainer /></Provider>
    );
  }
}
