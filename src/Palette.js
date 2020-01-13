import React, { Component } from 'react';
import seedPalettes from './seedPalettes';

class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        {/* Navbar to go here */}
        <div className="Palette-colors">{/* will display a bunch of color boxes */}</div>
        {/* Footer to go here */}
      </div>
    );
  }
}

export default Palette;
