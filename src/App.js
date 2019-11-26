import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TweetsContainer from './containers/TweetsContainer';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
class App extends Component {
  render(){
    return(
      <div className="App">
        <ActionCableProvider url={API_WS_ROOT}>
          <TweetsContainer/>
        </ActionCableProvider>
      </div>
    );
  }
}

export default App;
