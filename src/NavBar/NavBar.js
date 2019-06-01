import React, { Component } from 'react';
import './NavBar.css';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
            <Link to='/name-generator'><div>NAME GENERATOR</div></Link>
      </div>
    );
  }
}

export default withRouter(NavBar);