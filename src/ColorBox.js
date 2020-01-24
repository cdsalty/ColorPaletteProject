import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {copied: false};

    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    // the goal is to copy and change the state to true and THEN, after it's copied, setTimeout to reset back to false
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 2200);
    });
  }
  render() {
    const {background, name} = this.props;
    const {copied} = this.state;
    return (
      <div style={{background: background}} className="ColorBox">
        {/* note: <div style={{ background }} className="ColorBox">*/}
        <div
          style={{background: background}}
          className={`copy-overlay ${copied && 'show'}`}
        />
        {/* the className is always overlay but when copied is true, we add the class, "show" */}
        <div className={`copy-msg ${copied && 'show'}`}>
          <h2>copied!</h2>
          <p>{this.props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className="copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="see-more">need more?</span>
      </div>
    );
  }
}

export default ColorBox;
