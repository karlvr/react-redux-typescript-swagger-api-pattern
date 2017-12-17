import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './modules/index';

import './App.css';
import Example from './modules/template/containers/example';
import Login from './modules/auth/containers/Login';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Login />
          <Example />
        </div>
      </Provider>
    );
  }
}

export default App;
