import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app-div-wrapper">
        <div>
          Hello World from the App.jsx!!
        </div>
      </div>
    );
  }


}
