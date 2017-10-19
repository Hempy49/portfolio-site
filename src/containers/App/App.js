import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Background } from './App.style';


class App extends Component {
  render() {
    return (
    <div>
      <NavigationBar/>
      <Background />
    { this.props.children }
    </div>
    );
  }
}

export default App;
