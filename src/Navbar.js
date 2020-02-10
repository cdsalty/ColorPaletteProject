import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

/*
Navbar
- the slider, currently inside Palette.js, will be copied and pasted inside here.
  - to do this, import 
*/

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {format: 'hex'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleChange(e.target.value);
    this.setState({format: e.target.value});
  }
  render() {
    // I could have destructured by doing: const { level, changeLevel } = this.props;
    return (
      // nav or header
      <header className="Navbar">
        <div className="logo">
          <a href="https://www.success.com/wp-content/uploads/legacy/sites/default/files/5_18.jpg">
            a.Color.Palette
          </a>
        </div>
        <div className="slider-container">
          <span className="span-class">Slider Scale Level:</span>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          {/* material pre-setup */}
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;

/*
value= {this.state.format}: this is used to keep the selected input showing in the dropdown box.


*/
