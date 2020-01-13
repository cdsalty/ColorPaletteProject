import React, { Component } from 'react';
import seedPalettes from './seedPalettes';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar to go here */}
        <div className="Palette-colors">
          {/* will display a bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* Footer to go here */}
      </div>
    );
  }
}

export default Palette;
