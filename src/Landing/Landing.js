import React, { Component } from 'react';
import './Landing.css';
import { withRouter, Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">

            <div className="overlay">
            <div>THE UNCREATIVE CREATIVE</div>
            <Link to='/name-generator'><div className="subHeader">CONTINUE</div></Link>
            </div>

            <div className="container">
              <video  muted loop autoPlay id="myVideo">
                <source src="./imgs/david-blaine.mp4" type="video/mp4"></source>
              </video>
            </div>

      </div>
    );
  }
}

export default withRouter(Landing);