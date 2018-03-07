import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HELLO HOUSTON THIS IS THE NAVBAR!
      </div>
    );
  }
}

export default NavBar;
