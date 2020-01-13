import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedPalettes[4]} />
      </div>
    );
  }
}

export default App;

/*
To pass all the props in together:  <Palette palette={seedPalettes[4]} /> 
To pass the props in individually:  <Palette {...seedPalettes[4]} /> 

*/
