import React from 'react';
// REDUX
import { Provider } from 'react-redux';
import AppContainer from './src/router/mainRouter';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}><AppContainer /></Provider>
  );
}

export default App;
