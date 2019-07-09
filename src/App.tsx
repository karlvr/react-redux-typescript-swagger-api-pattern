import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './modules/index';
import Login from './modules/auth/containers/Login';
import Petstore from './modules/petstore/containers/Petstore';
import Example from './modules/template/containers/example';

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
          <Petstore />
        </div>
      </Provider>
    );
  }
}

export default App;
