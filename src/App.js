import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import MoreButton from './components/MoreButton';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ItemList/>
        <MoreButton/>
      </div>
    );
  }
}

export default App;
