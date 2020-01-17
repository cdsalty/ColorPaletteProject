import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        {/* note: <div style={{ background }} className="ColorBox">*/}
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background}>
            <button className="copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="see-more">need more?</span>
      </div>
    );
  }
}

export default ColorBox;
