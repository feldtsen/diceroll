import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';
import '../styles/App.css';


export default class App extends Component {
  render() {
    return (
      <main>
          <Header/>
          <Products/>
      </main>
    );
  }
}
