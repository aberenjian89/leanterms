import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavbarContainter from './navbar/navbar_container';
import Splash from './homepage/splash';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-div-wrapper">
          <Route path="/" component={NavbarContainter}/>
          <Switch>
            <Route exact path="/" component={Splash} />

          </Switch>
      </div>
    );
  }
}

export default App;
