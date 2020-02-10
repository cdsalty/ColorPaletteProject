import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
// import 'rc-slider/assets/index.css';
import './Palette.css';
// import Slider from 'rc-slider';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {level: 500, format: 'hex'};
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({level});
  }

  changeFormat(value) {
    // whenever a new value from the dropdown is selected, this will be called from handleChange
    // alert(value);
    this.setState({format: value});
  }

  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[this.state.format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar to go here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
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
