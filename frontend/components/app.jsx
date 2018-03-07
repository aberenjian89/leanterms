import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavbarContainter from './navbar/navbar_container';
import NavBar from './navbar/navbar';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-div-wrapper">
        <div>
          <NavbarContainter/>
        </div>
      </div>
    );
  }
}

export default App;
