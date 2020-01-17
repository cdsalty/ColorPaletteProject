import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedPalettes[4]));
    return (
      <div>
        <Palette {...seedPalettes[3]} />
      </div>
    );
  }
}

export default App;

/*
To pass all the props in together:  <Palette palette={seedPalettes[4]} /> 
To pass the props in individually:  <Palette {...seedPalettes[4]} /> 

*/
